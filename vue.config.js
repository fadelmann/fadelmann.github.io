module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/fadelmann.github.io/'
  : '/',
  chainWebpack: config => {
    config
      .module
      .rule("csv")
      .test(/\.csv$/)
      .use("csv-loader")
      .loader("csv-loader")
      .options({
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true
      })
      .end();
  }
}
