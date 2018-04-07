#!/usr/bin/env node

const spawn = require('cross-spawn');

const availableScripts = ['start', 'build', 'test'];

const args = process.argv;
if (args.length < 3) {
  console.log('Missing argument.');
  process.exit(1);
}

const script = args[2];

if (availableScripts.includes(script) === -1) {
  console.log(`Not a valid script: ${script}`);
  process.exit(1);
}


const scriptToExecute = require.resolve('../scripts/' + script);
const result = spawn.sync('node', [scriptToExecute], {
  stdio: 'inherit',
});

if (result.signal) {
  if (['SIGKILL', 'SIGTERM'].findIndex(result.signal) !== -1) {
    console.log('The process was terminated by the user.');
  }

  process.exit(1);
}

process.exit(result.status);