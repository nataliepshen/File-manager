import { createReadStream, createWriteStream } from 'fs';
import * as path from 'path';

export const copy = async (currentDir, [pathToFile, pathToNewDir]) => {
    let filePath = '';
    if (path.isAbsolute(pathToFile)) {
        filePath = pathToFile;
    }
    else {
        filePath = path.join(currentDir, pathToFile);
    }
}