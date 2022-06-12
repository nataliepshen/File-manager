import * as readline from 'readline';
import * as os from 'os';
import { actions } from './actions.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let pathToCurrentDir = os.homedir();
let EOL = os.EOL;

export const performOperation = () => {
    rl.question(
        `You are currently in ${pathToCurrentDir}${EOL}`,
        async (action) => {
            action = action.trim();
            if (action === '.exit') {
                process.exit();
            }
            try {
                const [command, ...args] = action.split(' ');
                if (!actions[command]) {
                    throw new Error('Invalid input');
                }
                const result = await actions[command](pathToCurrentDir, args);
                if (result && result.currentDir && result.currentDir !== pathToCurrentDir) {
                    pathToCurrentDir = result.currentDir;
                }
            } catch(error) {
                console.log(error.message);
            }
            performOperation();
        }
    )
};