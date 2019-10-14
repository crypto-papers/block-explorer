const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appDist: resolveApp('dist'),
  appHtml: resolveApp('public/index.html'),
  appIndex: resolveApp('src/index.js'),
  appPublic: resolveApp('public'),
  appSrc: resolveApp('src'),
  appStatic: resolveApp('static'),
}