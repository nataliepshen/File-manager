const { createHash } = await import( 'crypto' );
import { createReadStream } from 'fs';
import { absFilePath } from '../helpers/absPath.js';

export const hash = async (currentDir, [pathToFile]) => 
    new Promise((resolve, reject) => {
        let filePath = absFilePath(currentDir, pathToFile);
        const hash = createHash('sha256');
        const readStream = createReadStream(filePath);
        readStream.on('data', chunk => hash.update(chunk));
        readStream.on('end', () => {resolve(console.log(hash.digest('hex')))});
        readStream.on('error', () => {
            reject(new Error('Operation failed'));
        });
    });