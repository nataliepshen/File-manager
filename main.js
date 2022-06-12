import { performOperation } from "./readline.js";

try {
    const args = process.argv.slice(2);
    const userName = args[0].split('=')[1];
    if (userName.trim() === '') {
        throw new Error('Please enter your username!');
    }
    console.log(`Welcome to the File Manager, ${userName}!`);
    process.on('SIGINT', () => process.exit());
    process.on('exit', () => {
        console.log(`Thank you for using File Manager, ${userName}!`);
        process.exit();
    })
    performOperation();
}catch(error) {
    console.log(`Operation failed: ${error.message}`);
    process.exit();
};