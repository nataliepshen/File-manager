import { createReadStream, createWriteStream } from 'fs';
import * as path from 'path';
import { pipeline } from 'stream/promises';
import { absFilePath } from '../helpers/absPath.js';
import { stat } from 'fs/promises';

export const copy = async (currentDir, [pathToFile, pathToNewDir]) => {
    const filePath = absFilePath(currentDir, pathToFile);
    const dirPath = absFilePath(currentDir, pathToNewDir);
    const fileName = path.basename(filePath);
    const copyFilePath = path.join(dirPath, fileName);
    
    try {
        const stats = await stat(filePath);
        if (!stats.isFile()) {
            throw new Error('Operation failed');
        }
        const readStream = createReadStream(filePath);
        const writeStream = createWriteStream(copyFilePath, { flags: 'wx' });
        await pipeline(readStream, writeStream);
    } catch(error) {
        throw new Error('Operation failed');
    }
};