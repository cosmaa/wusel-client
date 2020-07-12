// vue.config.js
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === "production" ? "/templates/" : "/",
  assetsDir: process.env.NODE_ENV === "production" ? "../static" : "",
  outputDir:
    process.env.NODE_ENV === "production"
      ? "../wusel-landing/app/templates/"
      : "dist",

  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap(options => {});
  },
  configureWebpack: config => {
    // Copy data directory into build
    // copy-webpack-plugin is a dependency of Vue Cli
    const CopyWebpackPlugin = require("copy-webpack-plugin");
    config.plugins.push(
      new CopyWebpackPlugin([
        {
          from: resolve("data"),
          ignore: [".*"],
          to: "data"
        }
      ])
    );
  }
};
