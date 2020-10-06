module.exports = {
  configureWebpack: {
    resolve: {
      // 路径别名
      alias: {
        assets: '@/assets',
        components: '@/components',
        views: '@/views'
      }
    }
  }
};
