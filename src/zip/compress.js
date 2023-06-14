import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pathConverter } from '../helpers/pathConverter.js';

const sourcePath = pathConverter('zip','files','fileToCompress.txt');
const archivePath = pathConverter('zip','files','archive.gz');
const gzip = createGzip();
const source = createReadStream(sourcePath);
const archive = createWriteStream(archivePath);

const compress = async () => {
    source.pipe(gzip).pipe(archive);
};

await compress();