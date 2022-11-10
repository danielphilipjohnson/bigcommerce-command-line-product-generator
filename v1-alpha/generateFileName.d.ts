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
export declare const generateFileName: (fileName: string, tokenAppend: number) => string;
