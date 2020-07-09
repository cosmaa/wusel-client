const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: '../wusel-landing/app/templates/',
  assetsDir: '../static',

  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        return options
      })
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }))
  },
  configureWebpack: config => {
    // Copy data directory into build
    // copy-webpack-plugin is a dependency of Vue Cli
    const CopyWebpackPlugin = require('copy-webpack-plugin')
    config.plugins.push(
      new CopyWebpackPlugin([
        {
          from: resolve('data'),
          ignore: ['.*'],
          to: 'data'
        }
      ])
    )
  }
}
