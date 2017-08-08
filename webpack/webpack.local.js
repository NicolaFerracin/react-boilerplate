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
            historyApiFallback: true,
        },
        stats: 'normal',
        module: {
            loaders: loaders(options)
        }
    }
}
