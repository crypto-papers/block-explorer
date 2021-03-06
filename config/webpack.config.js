const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');
const rules = require('./rules');

module.exports = (env, arvg) => {
  return {
    devServer: {
      historyApiFallback: true,
    },
    devtool: arvg.mode === 'production' ? 'source-map' : 'eval',
    entry: paths.appIndex,
    module: {
      rules: [rules.css(arvg.mode), rules.html, rules.js],
    },
    output: {
      path: paths.appDist,
      publicPath: '/',
    },
    plugins: [
      new HtmlWebpackPlugin({
        favicon: `${paths.appStatic}/favicon.ico`,
        template: paths.appHtml,
      }),
    ],
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
  };
};
