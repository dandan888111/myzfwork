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
    // node 前后端分离 中间层
    // webpack-dev-server http-proxy-middleware
    devServer: {  // 开发服务
        proxy: {  // http://localhost:3000/user
          //'/user': 'http://localhost:3000'
          '/api': {
            target: 'http://localhost:3000',
            pathRewrite: {
              '/api': ''    // 把路径删除 nginx
            }
          }
        }
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

// webpack 怎么实现跨域? 代理 后台配置跨域
// 1) 解决跨域问题的方案  后台配置跨域 后台配置允许跨域  nginx
// 2) webpack proxy 代理
// 3) 在webpack中模拟数据 
// 4) 在后端启动webpack webpack插件实现的