// const docsLoader = require('./doc-loader')

module.exports = (isDev) => {
  return {
    // 组件内标签之间的空格
    preserveWhitespace: true,
    // vue文件内的css样式与外联css文件打包到webpack的一个文件内
    // 在开发环境不需要打包到一个文件内,而正式环境需要
    extractCSS: !isDev,
    // cssModules: {
    //   localIdentName: '[path]-[name]-[hash:base64:5]',
    //   // 为javascript用驼峰法则,将css中的短隔符命名的类名对应驼峰式
    //   camelCase: true
    // },
    // hotReload: false // 根据环境变量生成的 配置热重载
    // 自定义模块loader
    // loaders: {
    //   'docs': docsLoader
    // }
  }
}
