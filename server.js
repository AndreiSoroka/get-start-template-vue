const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');
const open = require("open");
const configApp = require('./config');

let configServer = configApp('development')['_onlyDevelopment']['devServer'];

let url = `http://${configServer.host}:${configServer.port}`;

webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
webpackConfig.entry = [
  `webpack-dev-server/client?${url}`,
  'webpack/hot/only-dev-server',
  './app.js'
];

new webpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(configServer.port, configServer.host, (err, res) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server listening on: ${url}`);
  open(url);
});
