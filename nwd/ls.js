import { readdir } from 'fs/promises';

export const list = async (currentDir, [args]) => {
    if (args != undefined) {
        throw new Error('Invalid input');
    }
    try {
        const dirContent = await readdir(currentDir);
        const arrayOfContent = [];
        for (let item of dirContent) {
            arrayOfContent.push(item);
        }
        console.table(arrayOfContent);
    } catch(err) {
        throw new Error('Operation failed');
    }
};