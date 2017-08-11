const loaders = require('./webpack.loaders');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBrowserPlugin = require('webpack-browser-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const path = require('path');

module.exports = function(options) {
    return {
        cache: true,
        devtool: 'source-map',
        entry: [
            './src/index.js'
        ],
        output: {
            path: path.join(__dirname, '../dist'),
            filename: 'app.js',
            publicPath: './'
        },
        plugins: [
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.NamedModulesPlugin(),
            new WebpackBrowserPlugin(),
            new WriteFilePlugin(),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, '../src/index.html')
            }),
        ],
        devServer: {
            contentBase: path.join(__dirname, '../dist'),
            // historyApiFallback: true,
        },
        stats: 'normal',
        module: {
            loaders: loaders(options)
        }
    }
}
// This will make the redux-simpler-router module resolve to the
// latest src instead of using it from npm. Remove this if running
// outside of the source.
var src = path.join(__dirname, '..', '..', 'src')
var fs = require('fs')
if (fs.existsSync(src)) {
  // Use the latest src
  module.exports.resolve = { alias: { 'react-router-redux': src } }
  module.exports.module.loaders.push({
    test: /\.js$/,
    loaders: ['babel'],
    include: src
  });
}
