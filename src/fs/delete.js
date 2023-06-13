import { unlink } from 'node:fs/promises';
import { pathConverter } from '../helpers/pathConverter.js';
import ErrorsMessage from '../helpers/errors.js';

const path = pathConverter('fs', 'files', 'fileToRemove.txt');

const remove = async () => {
    try {
        await unlink(path); 
    } catch (error) {
        throw new Error(ErrorsMessage.FS_OPERATION_FAILED);        
    }
};

await remove();