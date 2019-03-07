module.exports = {
  webpack(config, options) {
    const { module } = config;
    const { rules } = module;
    rules.push({
      test: /\.(sc|sa|c)ss$/,
      use: ["css-loader", "sass-loader"]
    });
    return config;
  }
};