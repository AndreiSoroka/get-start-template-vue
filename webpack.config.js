const webpack = require('webpack');
const configApp = require('./config');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const NODE_ENV = process.env.NODE_ENV || 'development';

let config = configApp(NODE_ENV);

let configWebpack = {
  context: path.join(__dirname, './application/'),

  entry: {
    app: "./app.js",
  },

  output: {
    path: path.join(__dirname, './public/'),
    filename: "[name].js",
    libraryTarget: "umd",
    publicPath: "/",
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'HRbb',
      hash: NODE_ENV === 'production',
      cache: false,
      template: 'index.ejs',
      filename: 'index.html',
    }),
    new ExtractTextPlugin({
      filename: "app.css",
      disable: false,
      allChunks: true
    }),
    new webpack.DefinePlugin(config),
  ],

  module: {
    rules: [
      {
        test: /\.js$/, // include .js files
        enforce: "pre", // preload the jshint loader
        exclude: /node_modules/, // exclude any and all files in the node_modules folder
        use: [
          {
            loader: "jshint-loader"
          }
        ]
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {presets: ['es2015'], plugins: ["transform-object-rest-spread", "syntax-dynamic-import"]},
        exclude: [
          path.join(__dirname, "./node_modules/")
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: {
              loader: "babel-loader",
              options: {presets: ['es2015'], plugins: ["transform-object-rest-spread", "syntax-dynamic-import"]},
              exclude: [
                path.join(__dirname, "./node_modules/")
              ],
            }
          }
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "cssnano-loader", "autoprefixer-loader"],
        })
      },
      {
        test: /.scss/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "cssnano-loader", "autoprefixer-loader", "sass-loader"],
          // publicPath: "/dist"
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]'
            }
          }
        ]
      }

    ],
  },
};

/* ****
 * **** BUILDER
 * ****/
if (NODE_ENV === 'production') {
  configWebpack.plugins.push(new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}));
} else if (NODE_ENV === 'development') {
  const ProgressBarPlugin = require('progress-bar-webpack-plugin');
  const chalk = require('chalk');

  configWebpack.plugins.push(new ProgressBarPlugin({
    format: `[:bar] ${chalk.green.bold(':msg')} :percent (:elapsed seconds)`,
    clear: false
  }));
  configWebpack.devtool = 'eval';
}

module.exports = configWebpack;
