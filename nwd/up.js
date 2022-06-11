import * as path from 'path';

export const up = async (currentDir, [args]) => {
    if (args != undefined) {
        throw new Error('Operation failed');
    }
    const parsedPath = path.parse(currentDir);
    if (currentDir === parsedPath.root) {
        return { currentDir };
    }
    else {
        currentDir = path.dirname(currentDir);
        return { currentDir };
    }
};