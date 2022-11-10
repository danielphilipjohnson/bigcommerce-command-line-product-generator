import { productsToJson } from '@daniel-philip-johnson/generate-dummy-bigcommerce-products-sdk'
import { generateFileName } from './generateFileName'
import chalk from 'chalk'
/**
 * @description Generate bigcommerce products files
 * @param filePath
 * @param amountoOfProducts
 * @param amountOfFiles
 */
export const generatesFiles = (filePath: string, amountoOfProducts: number, amountOfFiles: number) => {
  const startMsg = chalk.green('Starting to create json files')
  console.log(startMsg)
  for (let i = 0; i < amountOfFiles; i++) {
    const fileName = generateFileName(filePath, i)
    productsToJson(fileName, amountoOfProducts)
  }
}
