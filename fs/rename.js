import { rename, stat, access } from 'fs/promises';
import * as path from 'path';

export const rn = async (currentDir, [pathToFile, newFileName]) => {
    try {
        let oldFilePath = '';
        if (path.isAbsolute(pathToFile)) {
            oldFilePath = pathToFile;
        }
        else {
            oldFilePath = path.join(currentDir, pathToFile);
        }
        let newFilePath = path.join(path.dirname(oldFilePath), newFileName);
        try {
            await access(newFilePath);
                throw new Error('Operation failed');
        } catch(error) {
            if (error.code !== 'ENOENT'){
                throw new Error('Operation failed');
            }
        }
        let stats = await stat(oldFilePath);
        if (!stats.isFile()) {
            throw new Error('Operation failed');
        }
        await rename(oldFilePath, newFilePath);
    } catch (error) {
        throw new Error('Operation failed');
    }
}