import { readdir } from 'fs/promises';

export const list = async (currentDir, [args]) => {
    if (args != undefined) {
        throw new Error('Operation failed');
    }
    try {
        const dirContent = await readdir(currentDir);
        const arrayOfContent = [];
        for (let item of dirContent) {
            arrayOfContent.push(item);
        }
        const data = arrayOfContent;
        return { data };
    } catch(err) {
        throw new Error('Operation failed');
    }
};