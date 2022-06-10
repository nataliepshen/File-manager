import { createReadStream } from 'fs';
import * as path from 'path';

export const read = async (currentDir, [pathToFile]) => 
    new Promise((resolve, reject) => {
        let filePath = '';
        if (path.isAbsolute(pathToFile)) {
            filePath = pathToFile;
        }
        else {
            filePath = path.join(currentDir, pathToFile);
        }
        const readStream = createReadStream(filePath);
        let data = '';
        readStream.on('data', chunk => data += chunk);
        readStream.on('end', () => {resolve(data)});
        readStream.on('error', () => {
            reject(new Error('Operation failed'));
        });
    });
