'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.generateUsage = void 0
var chalk_1 = __importDefault(require('chalk'))
var boxen_1 = __importDefault(require('boxen'))
var generateUsage = function () {
  var greenBox = (0, boxen_1.default)(
    chalk_1.default.green('\n' + 'Generate products and write to json' + '\n'),
    {
      padding: 1,
      borderColor: 'green',
      dimBorder: true
    }
  )
  return chalk_1.default.blue(
    '\nUsage: generate-products --a <amount of products>  --files <amount of files> \n '.concat(
      greenBox,
      ' \n'
    )
  )
}
exports.generateUsage = generateUsage
