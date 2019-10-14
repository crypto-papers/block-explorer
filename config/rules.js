const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  css: env => ({
    test: /\.(?:sa|sc|c)ss$/u,
    use: [
      env === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
      'sass-loader',
    ],
  }),
  html: {
    test: /\.html$/u,
    use: ['html-loader'],
  },
  js: {
    exclude: /node_modules/u,
    test: /\.(?:jsx?)$/u,
    use: ['babel-loader'],
  },
};