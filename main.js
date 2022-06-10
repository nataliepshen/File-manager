

const args = process.argv.slice(2);
const userName = args[0].split('=')[1];

console.log(`Welcome to the File Manager, ${userName}!`);
