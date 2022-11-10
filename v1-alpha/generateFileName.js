"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFileName = void 0;
/**
 * @descriptions Generate a file name by appending the token provided
 * @example
 * ```
 * const fileName = generateFileName("my/file.json", 1)
 * // my/file_1.json
 * ```
 * @param fileName
 * @param tokenAppend
 * @returns {String} string
 */
var generateFileName = function (fileName, tokenAppend) {
    var splitPath = fileName.split('.json')[0];
    return "".concat(splitPath, "_").concat(tokenAppend, ".json");
};
exports.generateFileName = generateFileName;
