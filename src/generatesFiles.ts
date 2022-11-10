import { productsToJson } from "@daniel-philip-johnson/generate-dummy-bigcommerce-products-sdk"
import { generateFileName } from "./generateFileName"

/**
 * @description Generate bigcommerce products files
 * @param filePath 
 * @param amountoOfProducts 
 * @param amountOfFiles 
 */
export const generatesFiles = (filePath: string, amountoOfProducts: number, amountOfFiles: number) => {
  for (let i = 0; i < amountOfFiles; i++) {
    const fileName = generateFileName(filePath, i)
    productsToJson(fileName, amountoOfProducts)
  }
}
