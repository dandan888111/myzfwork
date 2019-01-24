const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',        // 开发模式
    entry: './src/index.tsx',   // 入口文件
    output: {                   // 出口文件
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'   // 叫啥名字呢？bundle.js
    },
    devtool: 'source-map',      // 方便调试
    resolve: {                  // 查找模块的时候用到的
        extensions: ['.ts', '.tsx', '.js' ,'.json']
    }, 
    devServer: {
        hot: true,   // 起用热更新
        contentBase: path.join(__dirname, 'dist')  // 把dist的目录当成静态文件的目录
    },    
    module: {
        rules: [
            {   
                test: /\.tsx?$/,    // 如果文件是ts 或者 tsx，都要进行转换
                loader: "ts-loader"
            },
            {
                enforce: "pre",     // pre的意思是表示这个loader要在正常load之前运行
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()    // 这个要配合devServer里的hot配合一起使用
    ]
}