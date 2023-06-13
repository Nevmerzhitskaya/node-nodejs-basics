import { rename as renameFile } from 'node:fs/promises';
import { pathConverter } from '../helpers/pathConverter.js';

const oldPath = pathConverter('fs', 'files', 'wrongFilename.txt');
const newPath = pathConverter('fs', 'files', 'properFilename.md');

const rename = async () => {
    try {
        await renameFile(oldPath, newPath);
    } catch (error) {
        throw new Error(ErrorsMessage.FS_OPERATION_FAILED);
    }
};

await rename();