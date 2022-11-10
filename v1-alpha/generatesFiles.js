"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatesFiles = void 0;
var generate_dummy_bigcommerce_products_sdk_1 = require("@daniel-philip-johnson/generate-dummy-bigcommerce-products-sdk");
var generateFileName_1 = require("./generateFileName");
/**
 * @description Generate bigcommerce products files
 * @param filePath
 * @param amountoOfProducts
 * @param amountOfFiles
 */
var generatesFiles = function (filePath, amountoOfProducts, amountOfFiles) {
    for (var i = 0; i < amountOfFiles; i++) {
        var fileName = (0, generateFileName_1.generateFileName)(filePath, i);
        (0, generate_dummy_bigcommerce_products_sdk_1.productsToJson)(fileName, amountoOfProducts);
    }
};
exports.generatesFiles = generatesFiles;
