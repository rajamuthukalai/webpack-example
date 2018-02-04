const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },    
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              exclude: /node_modules/,
              use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
              })
            },
            {
                test: /\.jpg$/,
                exclude: /node_modules/,
                use: 'file-loader?name=[name].[ext]&outputPath=images/&publicPath=../'
            }
        ],
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['env']
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new ExtractTextPlugin('css/app.css')
    ]
}