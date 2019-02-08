let { resolve } = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
let cleanWebpackPlugin = require('clean-webpack-plugin');
let copyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'production',
    // webpack 插件 html-webpack-plugin
    // webpack 自带的插件 你需要安装require('webpack');

    entry: {    // 入口文件
        main: './src/index.js'  // 绝对相对都可以，一半用绝对
    },
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ 
                            '@babel/preset-env' //把高级语法转化成低级语法
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        // 在打包之前把dist目录删掉
        new cleanWebpackPlugin(['./dist']),
        // 从assets里的文件拷贝到dist目录下
        new copyWebpackPlugin([{
            from:'./assets',
            to:'./' // 默认以dist目录为基准
        }]),
        // 会在dist/bundle.js的顶部显示版权号make by wudandan in 2019噢
        new webpack.BannerPlugin(`make by wudandan in 2019`),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
          template: './public/index.html'  
        })
    ]
}