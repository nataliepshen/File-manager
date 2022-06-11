import * as os from 'os';

export const getOsInfo = (currentDir, [args]) => {
    let osProperty = args.slice(2);
    switch (osProperty) {
        case 'EOL':
            const osEOL = os.EOL;
            return JSON.stringify(osEOL);
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
            const data = modelOfCores;
            return { data };
        case 'homedir':
            return os.homedir();
        case 'username':
            return os.userInfo().username;
        case 'architecture':
            return os.arch();
        default:
            throw new Error('Invalid input');
    }
};