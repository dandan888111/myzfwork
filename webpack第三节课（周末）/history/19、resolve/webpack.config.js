let { resolve } = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {    // 入口文件
        main: './src/index.js'  // 绝对相对都可以，一半用绝对
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist')
    },
    resolve: {  // 解析 解析的是第三方库的解析
        //mainFiles: ['style', 'main']    // 改变入口的文件的字段
        alias: {    // 别名
            'bootstrap': 'bootstrap/dist/css/bootstrap.css'
        },
        modules: [resolve('node_modules'), resolve('plugin')],  // node_modules找不到，就到plugin里面找
        extensions: ['.js','.json','.css']  // 配置commonjs的查找范围
    },
    module: {
        rules: [
            {   
                include: resolve(__dirname, 'src'), 
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:[ 
                             '@babel/preset-env', 
                             '@babel/preset-react'
                        ],
                        plugins: [
                             '@babel/plugin-syntax-dynamic-import'
                        ]
                    }
                }
            },
            {
                test: /\.(eot|svg|woff|woff2|ttf)$/,
                use: 'file-loader'
            },
            {
                test: /\.css$/,
                use: [ 
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                // 引用jquery后，会触发此loader
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                },{
                    loader: 'expose-loader',
                    options: '$'
                }]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$':'jquery'    // 不会挂在window上哦。但是每个模块都可以获取到 $
        }),
        new webpack.IgnorePlugin(/\.\/locale/,/moment/),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
          template: './public/index.html'  
        })
    ],
    devServer: {
        contentBase: './dist'
    }
}

// 脚手架 (去线上拉取模板) webpack配置环境  @vue/cli  vue create template
// webpack的优化 
// 1) 基于内置的配置来优化 tree-shaking  scope-hosting
// 2) 自己配置 第三方


// 1) 采用include和 exclude 来进行排除和包含
// 2) 如果使用moment 要忽略掉moment中的locale
// 3) webpack内置的优化 tree-shaking 把没有用的代码删除掉（只支持es6 动态导入require不支持）
// tree-shaking 把没有用的代码删除掉 (只支持es6 动态导入require 不支持)
// scope-hosting 
// dllplugin happypack
// 抽离第三方模块  目的是为了实现缓存
// 懒加载
// 热更新


// externals  外部的
// 