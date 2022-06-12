import { isAbsolute, join } from 'path';

export const absFilePath = (source, destination) => {
    if (isAbsolute(destination)) {
        return destination;
    }
    else {
        return join(source, destination);
    }
};