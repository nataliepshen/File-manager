import { initialization } from "./readline.js";

const args = process.argv.slice(2);
const userName = args[0].split('=')[1];

export { userName };

console.log(`Welcome to the File Manager, ${userName}!`);

initialization();
