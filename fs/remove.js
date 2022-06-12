import { unlink, stat } from 'fs/promises';
import { absFilePath } from '../helpers/absPath.js';

export const remove = async (currentDir, [pathToFile]) => {
    const filePath = absFilePath(currentDir, pathToFile);
    try {
        let stats = await stat(filePath);
        if (!stats.isFile()) {
            throw new Error('Operation failed');
        }
        await unlink(filePath);
    } catch(error) {
        throw new Error('Operation failed');
    }
};