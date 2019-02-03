let { resolve } = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');

module.exports = {
    
    // webpack 插件 html-webpack-plugin
    // webpack 自带的插件 你需要安装require('webpack');
    entry: {    // 入口文件
        main: './src/index.js'  // 绝对相对都可以，一半用绝对
    },
    output: {
        filename: 'bundle.[hash:8].js',
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
        new webpack.DefinePlugin({
            // 取环境变量的时候
            NODE_ENV: '"development"',  // 这里必须要再加一层引号，否则会报development未定义！
            EXPRESSION: JSON.stringify('hello'),
            LOG: '1+3',
            BOOL: 'true'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
          template: './public/index.html'  
        })
    ]
}

// webpack 怎么实现跨域? 代理 后台配置跨域
// 1) 解决跨域问题的方案  后台配置跨域 后台配置允许跨域  nginx
// 2) webpack proxy 代理
// 3) 在webpack中模拟数据 
// 4) 在后端启动webpack webpack插件实现的