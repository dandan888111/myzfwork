let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let FileListPlugin = require('./plugins/FileListPlugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');  // 这个插件，既有插件又有loader的用法
let InlineSourcePlugin = require('./plugins/InlineSourcePlugin');
let UploadPlugin = require('./plugins/UploadPlugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:'http://img.fullstackjavascript.cn/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new FileListPlugin({
            filename: 'list.md'
        }),
        new InlineSourcePlugin({
            match:/\.(js|css)/
        }),
        new UploadPlugin({
            bucket:'jwstatic', 
            domain: "img.fullstackjavascript.cn", 
            accessKey:'uimQ1Inof5KwcA5ETlLMnwoJzrIhigEEilWMpJtg', 
            secretKey:'zNoP0z1XzHFGN0JMJsxSEvLRcFPXxAVaXEDWOwdH'
        })
    ]
}