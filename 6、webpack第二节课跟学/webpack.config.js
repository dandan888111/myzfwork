let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let UglifyjswebpackPlugin = require('uglifyjs-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    mode: 'development', // 这里用production，就可以压缩代码; 如果是develoment，就是开发环境，就不会压缩代码
    entry: {
        main: path.resolve(__dirname,'./src/index.js')
    },
    output: {
        filename: '[name].js',  // 这里的name，取的是entry里面的别名：main
        path: path.resolve(__dirname,'dist')
    },
    module: {    // 匹配要处理的模块
        rules: [
            {
                test: /\.html$/,
                use: 'html-withimg-loader'  // 解析html中的路径
            },
            {
                test: /\.(png|jpg|gif)$/,
                //use: 'file-loader'
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 200*1024 
                        // 200k以下都变成base64
                        // 超过后用file-loader
                    }
                }
            },
            {
               test: /\.js$/,
               use:{
                   loader: 'babel-loader'
               } 
            },
            {
                test: /\.less/,
                use: [{
                    loader:MiniCssExtractPlugin.loader,
                    options:{ // 给所有的css文件引用的路径都加上../
                        publicPath:'../'
                    }
                }, 'css-loader', 'postcss-loader', 'less-loader']
            }
        ]    
    },
    devServer: {    // 这里放的就是webpack-dev-server的配置
        port:8088 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        })
    ]
}

// 装饰器
// 类的属性