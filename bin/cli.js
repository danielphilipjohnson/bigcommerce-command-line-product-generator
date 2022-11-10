#!/usr/bin/env node

const argv = require('yargs')
  .usage('Usage: $0 <command> [options]')
  .example('$0 -f foo.json --a 16 --files 6', 'generate bigcommerce products to json')
  .alias('f', 'file')
  .nargs('f', 1)
  .describe('f', 'File to save too')
  .demandOption(['f'])
  .options({
    'amount': {
      alias: 'a',
      describe: 'Amount of products to write to json file',
      type: 'number',
      nargs: 1,
      default: 10
    },
    'files': {
      alias: 'files',
      describe: 'Amount of product files to make in json',
      type: 'number',
      nargs: 1,
      default: 1
    }
  })
  .help('h')
  .alias('h', 'help').argv

const { generatesFiles } = require('../v1-alpha/index.js');
generatesFiles(argv.f, argv.amount, argv.files)