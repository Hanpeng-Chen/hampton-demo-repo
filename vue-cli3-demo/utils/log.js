const chalk = require('chalk')
module.exports = {
  info: (...str) => {
    console.log(chalk.blue(str))
  },
  success: (...str) => {
    console.log(chalk.green(str))
  },
  warn: (...str) => {
    console.log(chalk.yellow(str))
  },
  error: (...str) => {
    console.log(chalk.red(str))
  }
}