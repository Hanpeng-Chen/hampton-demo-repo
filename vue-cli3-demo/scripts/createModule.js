const log = require('../utils/log')
const path = require('path')
const fs = require('fs-extra')

log.info('请输入模块名称，例如：newModule')

process.stdin.on('data', async chunk => {
  const moduleName = String(chunk).replace(/\s*/g, '')
  log.info(`新建模块名称：${moduleName}.`)
  const moduleTarget = path.resolve(__dirname, '../', 'src/modules', moduleName)
  const templateSource = path.resolve(__dirname, '../', 'moduleTemplate')
  if (!fs.existsSync(moduleTarget)) {
    log.info(`sourceUrl:${templateSource}`)
    log.info(`targetUrl:${moduleTarget}`)
    copyTemplateFolder(templateSource, moduleTarget)
    process.stdin.emit('end')
  } else {
    log.error(`${moduleName}该模块已存在，请重新输入模块名`)
  }
})

process.stdin.on('end', () => {
  process.exit()
})

/**
 * 复制模板文件
 * @param {源文件夹地址} source 
 * @param {目标文件夹地址} target 
 */
function copyTemplateFolder(source, target) {
  try {
    fs.copySync(source, target)
    log.success('模块创建成功')
  } catch(e) {
    log.error('模块创建失败')
  }
}