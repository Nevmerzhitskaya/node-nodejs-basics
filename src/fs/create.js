import { writeFile } from "node:fs/promises"
import { pathConverter } from "../helpers/pathConverter.js"
import ErrorsMessage from "../helpers/errors.js";


const path = pathConverter('fs', 'files', 'fresh.txt');
const content = 'I am fresh and young';

const create = async () => {
    try {
        await writeFile(path, content, { flag: 'wx', encoding: 'utf8' });
    } catch (error) {
        throw new Error(ErrorsMessage.FS_OPERATION_FAILED);
    }
};

await create();