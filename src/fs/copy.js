import { opendir, copyFile, mkdir } from 'node:fs/promises';
import path from 'path';
import { pathConverter } from '../helpers/pathConverter.js';
import ErrorsMessage from '../helpers/errors.js';

const pathSource = pathConverter('fs', 'files');
const pathCopy = pathConverter('fs', 'files_copy');

const copy = async () => {
    try {
        const dir = await opendir(pathSource);

        await mkdir(pathCopy);

        for await (const dirent of dir) {
            const file = path.resolve(pathSource, dirent.name);
            const fileCopy = path.resolve(pathCopy, dirent.name);

            await copyFile(file, fileCopy);
        }
    } catch (error) {
        throw new Error(ErrorsMessage.FS_OPERATION_FAILED);
    }
};

await copy();
