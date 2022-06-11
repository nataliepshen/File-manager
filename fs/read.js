import { createReadStream } from 'fs';
import { absFilePath } from '../helpers/absPath.js';

export const read = async (currentDir, [pathToFile]) => 
    new Promise((resolve, reject) => {
        let filePath = absFilePath(currentDir, pathToFile);
        const readStream = createReadStream(filePath);
        let data = '';
        readStream.on('data', chunk => data += chunk);
        readStream.on('end', () => {resolve(data)});
        readStream.on('error', () => {
            reject(new Error('Operation failed'));
        });
    });
