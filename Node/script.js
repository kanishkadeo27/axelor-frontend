import chalk from 'chalk'; //ES module
// const chalk = require('chalk');
import * as url from 'url'; //importing url module
const currFilePath = url.fileURLToPath(import.meta.url); //getting the current file path
console.log(import.meta);
console.log(import.meta.url);
console.log(currFilePath);
const currDirPath = url.fileURLToPath(new URL('.', import.meta.url)); //getting the current directory path
console.log(chalk.red(currDirPath));