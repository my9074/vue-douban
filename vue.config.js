module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://api.douban.com",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
