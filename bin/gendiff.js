#!/usr/bin/env node
import program from 'commander';

program
  .version('0.0.1', '-v, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  // .argument('<filepath1> <filepath2>')
  .action(() => {
    console.log('Hello!');
  })
  .parse(process.argv);
