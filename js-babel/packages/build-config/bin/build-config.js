#!/usr/bin/env node

// use spawn from the cross-spawn library because the one coming with node has many errors
const spawn = require('cross-spawn');

// the allowed params that can be passed to this script. Make sure you have a js file for every param
const availableScripts = ['start', 'build', 'test'];

const args = process.argv;
if (args.length < 3) {
  console.log('Missing argument.');
  process.exit(1);
}

// read the param
const script = args[2];

// exit if it is an invalid param
if (availableScripts.includes(script) === -1) {
  console.log(`Not a valid script: ${script}`);
  process.exit(1);
}


// resolve the script at the location `scripts/${paramName}.js`
const scriptToExecute = require.resolve('../scripts/' + script);

// run the script in a new sub process with node
const result = spawn.sync('node', [scriptToExecute], {
  stdio: 'inherit',
});

// if the process was terminated by calling kill or pressing ctrl + c
if (result.signal) {
  if (['SIGKILL', 'SIGTERM'].findIndex(result.signal) !== -1) {
    console.log('The process was terminated by the user.');
  }

  process.exit(1);
}

// return the result of the subprocess
process.exit(result.status);