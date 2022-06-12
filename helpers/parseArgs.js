

export const parseArgs = (args) => {
    let startItem = '';
    let endItem = '';
    const arrayStart = [];
    const arrayEnd = [];
    for (let i = 0; i < args.length; i++) {
        if (args[i].slice(0, 1) === "'" || args[i].slice(0, 1) === '"') {
            startItem = i;
            arrayStart.push(startItem);
        }
        if (args[i].slice(-1) === "'" || args[i].slice(-1) === '"') {
            endItem = i + 1;
            arrayEnd.push(endItem);
        }
    }
    let pathOne = '';
    let pathTwo = '';
    let newPathTwo = '';
    if (arrayStart.length > 1) {
        pathOne = args.slice(arrayStart[0], arrayEnd[0]);
        pathTwo = args.slice(arrayStart[1], arrayEnd[1]);
        newPathTwo = pathTwo.map(function(item) {
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
    }
    if (arrayStart.length === 1) {
        pathOne = args.slice(arrayStart[0], arrayEnd[0]);
    }
    let newPathOne = pathOne.map(function(item) {
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
    return [newPathOne, newPathTwo];
}