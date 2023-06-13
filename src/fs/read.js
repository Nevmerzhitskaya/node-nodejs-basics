import { pathConverter } from '../helpers/pathConverter.js';
import { readFile } from 'node:fs/promises';

const path = pathConverter('fs', 'files', 'fileToRead.txt');

const read = async () => {

    try {
        const contents = await readFile(path, { encoding: 'utf8' });
        console.log(contents);
    } catch (err) {
        throw new Error(ErrorsMessage.FS_OPERATION_FAILED);
    }
};

await read();