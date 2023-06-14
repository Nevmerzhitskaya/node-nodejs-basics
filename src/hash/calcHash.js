import { readFile } from 'node:fs/promises';
import { pathConverter } from '../helpers/pathConverter.js';

const { createHash } = await import('node:crypto');
const filePath = pathConverter('hash','files','fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const hash = createHash('sha256');
    const contents = await readFile(filePath, { encoding: 'utf8' });
    const hex = hash.update(contents);
    
    console.log(hex.digest('hex'));
};

await calculateHash();