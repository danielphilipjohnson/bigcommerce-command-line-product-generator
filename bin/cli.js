#!/usr/bin/env node
const chalk = require('chalk')

const { generatesFiles, generateUsage } = require('../v1-alpha/index.js')

const argv = require('yargs')
  .usage(generateUsage())
  .example(chalk.red('$0 -f foo.json --a 16 --files 6'))
  .alias('f', 'file')
  .nargs('f', 1)
  .describe('f', chalk.green('File to save too'))
  .demandOption(['f'])
  .options({
    amount: {
      alias: 'a',
      describe: chalk.yellow('Amount of products to write to json file'),
      type: 'number',
      nargs: 1,
      default: 10
    },
    files: {
      alias: 'files',
      describe: chalk.yellow('Amount of product files to make in json'),
      type: 'number',
      nargs: 1,
      default: 1
    }
  })
  .help('h')
  .alias('h', 'help').argv

generatesFiles(argv.f, argv.amount, argv.files)
