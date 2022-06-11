import { stat, access } from 'fs/promises';
import { isAbsolute, join, dirname } from 'path';

export const changeDir = async (currentDir, [pathToDir]) => {
    try {
        if (isAbsolute(pathToDir)) {
            const stats = await stat(pathToDir);
            if (!stats.isDirectory()) {
                throw new Error('Operation failed');
            }
            else {
                currentDir = pathToDir;
            }
        }
        else {
            currentDir = join(currentDir, pathToDir);
        }
        await access(currentDir);
    } catch(error) {
        throw new Error('Operation failed');
    }
    return { currentDir };
};