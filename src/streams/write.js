import { createWriteStream } from 'node:fs';
import { pathConverter } from '../helpers/pathConverter.js';

const filePath = pathConverter('streams','files','fileToWrite.txt');

const write = async () => {
    const writeStream = createWriteStream(filePath);
    process.stdin.pipe(writeStream);

    writeStream.on('error', function (err) {
        console.log(err);
    });
};

await write();