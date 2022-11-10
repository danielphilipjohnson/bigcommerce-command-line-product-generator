import chalk from 'chalk'
import boxen from 'boxen'

export const generateUsage = () => {
  const greenBox = boxen(chalk.green('\n' + 'Generate products and write to json' + '\n'), {
    padding: 1,
    borderColor: 'green',
    dimBorder: true
  })
  return chalk.blue(
    `\nUsage: generate-products --a <amount of products>  --files <amount of files> \n ${greenBox} \n`
  )
}
