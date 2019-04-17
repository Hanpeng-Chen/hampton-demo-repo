var projectname = process.argv[3]
var glob = require('glob')

function getEntry() {
  var entries = {}
  if (process.env.NODE_ENV == 'production') {
    entries[projectname] = {
      // page的入口
      entry: 'src/modules/' + projectname + '/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      title: projectname,
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  } else {
    var items = glob.sync( './src/modules/*/*.js')
    for (var i in items) {
      var filepath = items[i]
      var fileList = filepath.split('/');
      var fileName = fileList[fileList.length-2];
      entries[fileName] = {
        entry: `src/modules/${fileName}/main.js`,
        // 模板来源
        template: `public/index.html`,
        // 在 dist/index.html 的输出
        filename: `${fileName}.html`,
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', fileName]
      }
    }
  }
  return entries
}

var pages = getEntry()
module.exports = {
  productionSourceMap: false, // 生产禁止显示源代码
  outputDir: 'dist/' + projectname,
  pages: pages
}