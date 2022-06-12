import * as os from 'os';

export const getOsInfo = (currentDir, [args]) => {
    let osProperty = args.slice(2);
    switch (osProperty) {
        case 'EOL':
            const osEOL = os.EOL;
            console.log(JSON.stringify(osEOL));
            break;
        case 'cpus':
            const cpuCores = os.cpus();
            const modelOfCores = [];
            for (let core of cpuCores) {
                let coreObj = {
                    model: core.model,
                    speed: +((core.speed / 1000).toFixed(1))
                }
                modelOfCores.push(coreObj);
            }
            console.log(`Overall amount of CPUs: ${cpuCores.length}`);
            console.table(modelOfCores);
            break;
        case 'homedir':
            console.log(os.homedir());
            break;
        case 'username':
            console.log(os.userInfo().username);
            break;
        case 'architecture':
            console.log(os.arch());
            break;
        default:
            throw new Error('Invalid input');
    }
};