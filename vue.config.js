const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:'./',
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            'blue': '#FA6D1D',
          },
        },
      },
    },
  },
});
