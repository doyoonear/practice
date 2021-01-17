module.exports = {
  pages: {
    index: {
      entry: 'src/main.ts',
      title: `패스트캠퍼스 LMS Admin`,
    },
  },
  chainWebpack: (config) => {
    config
      .plugin('stylelint-webpack-plugin')
      .use('stylelint-webpack-plugin')
      .tap((options) => {
        options[0] = {
          fix: true,
          files: '**/*.(s(c|a)ss|css|vue)',
        };
        return options;
      });
    config.output.filename(`js/[name].[hash:8].js`).chunkFilename(`js/[name].[hash:8].js`);
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "@/assets/utils/_mixin.scss";
      `,
      },
    },
  },
};
