// index.js
import { Command } from 'commander';
import greet from './commands/greet.js';
import fetchData from './commands/fetch.js';
import readFile from './commands/read.js';

const program =new Command();

program.command('greet <name>')
    .description('Dis Bonjours')
    .action((name) => {
       console.log(` Hello, ${name} !`);
    });
program.command('fetch <url>')
    .description('Fetch data from a URL')
    .action((url) => {
        console.log(`Fetching data from ${url}...`);
    });
program.command('read <file>')
    .description('Read a file') 
    .action((file) => {
        readFile(file);
    });
program.parse(process.argv);  