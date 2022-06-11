import * as readline from 'readline';
import * as os from 'os';
import { actions } from './actions.js';
import { userName } from './main.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let pathToCurrentDir = os.homedir();
let EOL = os.EOL;

export const initialization = () => {
    rl.question(
        `You are currently in ${pathToCurrentDir}${EOL}`,
        async (action) => {
            action = action.trim();
            if (action === '.exit') {
                console.log(`Thank you for using File Manager, ${userName}!`)
                process.exit(0);
            }
            try {
                const [command, ...args] = action.split(' ');
                if (!actions[command]) {
                    throw new Error('Invalid input');
                }
                const result = await actions[command](pathToCurrentDir, args);
                if (result && result.currentDir !== pathToCurrentDir && result.currentDir) {
                    pathToCurrentDir = result.currentDir;
                }
                console.log(result.data);
            } catch(error) {
                console.log(error.message);
            }
            initialization();
        }
    )
    
};
rl.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${userName}!`);
    rl.close();
});