import { pathConverter } from '../helpers/pathConverter.js';
import { readdir } from 'node:fs/promises';

const pathSource = pathConverter('fs', 'files');

const list = async () => {
    try {
        const dir = await readdir(pathSource);
        console.table(dir);
    } catch (error) {
        throw new Error(ErrorsMessage.FS_OPERATION_FAILED);
    }
};

await list();