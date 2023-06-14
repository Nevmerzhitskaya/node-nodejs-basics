import { spawn } from 'node:child_process';
import { pathConverter } from '../helpers/pathConverter.js';

const filePath = pathConverter('cp', 'files', 'script.js');

const spawnChildProcess = async (args) => {
    spawn('node', [filePath, ...args], {
        stdio: [process.stdin, process.stdout, process.stderr]
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['arg1', 'arg2', 'arg3']);
