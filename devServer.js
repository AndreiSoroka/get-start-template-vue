const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const open = require("open");

const webpackConfig = require('./webpack.config');
const configApp = require('./config');

const NODE_ENV = process.env.NODE_ENV || 'development';
console.log('NODE_ENV', NODE_ENV);

const configServer = configApp(NODE_ENV)['devServer'];

const HOST = process.env.HOST || configServer.host;
const PORT = process.env.PORT || configServer.port;
const url = `http://${HOST}:${PORT}`;

webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());


let configDevServer = Object.assign(configServer.options, {
  publicPath: webpackConfig.output.publicPath,
});

if (NODE_ENV === 'development') {
  webpackConfig.entry = [
    `webpack-dev-server/client?${url}`,
    'webpack/hot/only-dev-server',
    './App.js'
  ];
}

new WebpackDevServer(webpack(webpackConfig), configDevServer)
  .listen(PORT, HOST, (err, res) => {
    if (err) {
      return console.log(err);
    }
    console.log(`Server listening on: ${url}`);
    open(url);
  });
