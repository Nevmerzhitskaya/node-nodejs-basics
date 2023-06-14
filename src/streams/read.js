import { createReadStream } from 'node:fs';
import { pathConverter } from '../helpers/pathConverter.js';

const filePath = pathConverter('streams','files','fileToRead.txt');

const read = async () => {
    const readStream = createReadStream(filePath).pipe(process.stdout);

    readStream.on('error', function (err) {
        console.log(err);
    });
};

await read();