import { createUnzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pathConverter } from '../helpers/pathConverter.js';

const sourcePath = pathConverter('zip','files','archive.gz');
const archivePath = pathConverter('zip','files','fileToCompress.txt');
const unzip = createUnzip();
const source = createReadStream(sourcePath);
const archive = createWriteStream(archivePath);

const decompress = async () => {
    source.pipe(unzip).pipe(archive);
};

await decompress();