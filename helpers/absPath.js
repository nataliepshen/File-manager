import { isAbsolute, join } from 'path';

export const absFilePath = (source, destination) => { 
    const arrayDest = destination.split(' ');
    const newArrDest = arrayDest.map(function(item) {
        if (item.startsWith(`"`) || item.startsWith(`'`)) {
            return item = item.slice(1);
        }
        else if (item.endsWith(`"`) || item.endsWith(`'`)) {
            return item = item.slice(0, -1);
        } 
        else {
            return item;
        }
    });
    const newDestination = newArrDest.join(' ');
    if (isAbsolute(newDestination)) {
        return newDestination;
    }
    else {
        return join(source, newDestination);
    }
};