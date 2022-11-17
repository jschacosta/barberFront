module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      lintOnSave: false
    }
  },
  lintOnSave: false,
  runtimeCompiler:true,
  devServer: {
    // proxy: 'https://barberapi-production.up.railway.app/',
}
  // configureWebpack: {
  //         devtool: 'eval',
  //         plugins: [
  //           new CompressionWebpackPlugin({
  //             filename: "[name].gz[query]",
  //             algorithm: "gzip",
  //             test: /\.(js|css)$/,
  //            })
  //         ],
  //         optimization: {
  //             runtimeChunk: 'single',
  //             splitChunks: {
  //                 chunks: 'all',
  //                 maxInitialRequests: Infinity,
  //                 minSize: 120000,
  //                 maxSize: 250000,
                 
  //             }
  //         },
          
  // }
}
