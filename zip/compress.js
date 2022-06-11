import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress } from 'zlib';
import { pipeline } from 'stream/promises';
import { absFilePath } from '../helpers/absPath.js';

export const compress = async (currentDir, [pathToFile, pathToDestination]) => {
    const filePath = absFilePath(currentDir, pathToFile);
    const destFilePath = absFilePath(currentDir, pathToDestination);

    try {
        const stats = await stat(filePath);
        if (!stats.isFile()) {
            throw new Error('Operation failed');
        }
        const readStream = createReadStream(filePath);
        const writeStream = createWriteStream(destFilePath, { flags: 'wx' });
        const brotliCompress = createBrotliCompress();
        await pipeline(readStream, brotliCompress, writeStream);
    } catch(error) {
        throw new Error('Operation failed');
    }
};