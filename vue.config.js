module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('file-loader')
      .test(/\.obj$/)
      .use('file-loader')
      .loader('file-loader')
      .end();
  },
};
