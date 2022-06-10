import * as path from 'path';

export const up = async (currentDir, []) => {
    const parsedPath = path.parse(currentDir);
    if (currentDir === parsedPath.root) {
        return { currentDir };
    }
    else {
        currentDir = path.dirname(currentDir);
        return { currentDir };
    }
}