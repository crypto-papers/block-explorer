const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');
const rules = require('./rules');

module.exports = (env, arvg) => {
  return {
    devtool: arvg.mode === 'production' ? 'source-map' : 'eval',
    entry: paths.appIndex,
    module: {
      rules: [rules.css(arvg.mode), rules.html, rules.js]
    },
    output: {
      path: paths.appDist
    },
    plugins: [
      new HtmlWebpackPlugin({
        favicon: `${paths.appStatic}/favicon.svg`,
        template: paths.appHtml,
      }),
    ],
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
  }
}