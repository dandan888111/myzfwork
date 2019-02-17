let path = require('path');
let donePlugin = require('./plugins/donePlugin');
let AsyncPlugin = require('./plugins/AsyncPlugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let FileListPlugin = require('./plugins/FileListPlugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new donePlugin(),
        new AsyncPlugin(),
        new FileListPlugin({
            filename: 'list.md'
        })
    ]
}