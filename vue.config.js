  module.exports = {
    css: {
      loaderOptions: {
        scss: {
            prependData: `
                @import "@/assets/scss/_common.scss";
                @import "@/assets/scss/_colors.scss";
            `,
        },
      },
    },
  };