const withCSS = require('@zeit/next-css')
const withSASS = require('@zeit/next-sass')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = withCSS(withSASS({
  webpack(config, options){
    const { plugins} = config;
    const {isServer} = options;
    if(!isServer){
      delete config.optimization.splitChunks.cacheGroups.styles;
    }
    console.log(Object.keys(config));
    plugins.forEach((plugin, index) => {
      if (plugin.constructor.name === 'MiniCssExtractPlugin') {
            plugins[index] = new MiniCssExtractPlugin({
                filename: 'static/css/[contenthash].css',
                chunkFilename: 'static/css/[contenthash].css',
            });
        }
    });
    return config;
  }
}));
