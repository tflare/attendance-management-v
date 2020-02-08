module.exports = {
  "devServer": {
    "port": 8081,
    "disableHostCheck": true,
  },
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    devtool: 'source-map'
  },
}
