import { createWriteStream } from 'fs';
import * as path from 'path';

export const create = async (currentDir, [newFileName]) =>
    new Promise((resolve, reject) => {
        const newFilePath = path.join(currentDir, newFileName);
        const writeStream = createWriteStream(newFilePath, { flags: 'wx' });
        writeStream.on('close', () => {resolve()});
        writeStream.on('error', () => {
            reject(new Error('Operation failed'));
        });
        writeStream.close();
    });