let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let UglifyjswebpackPlugin = require('uglifyjs-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    target: 'web', // 默认打包的结果怎么用，web就是给浏览器用的
    mode: 'development', // 这里用production，就可以压缩代码; 如果是develoment，就是开发环境，就不会压缩代码
    entry: {
        main: path.resolve(__dirname,'./src/index.js')
    },
    output: {
        filename: '[name].[hash:8].js',  // 这里的name，取的是entry里面的别名：main
        path: path.resolve(__dirname,'dist')
    },
    module: {    // 匹配要处理的模块
        // 有些loader的逻辑，我们希望分开处理
        // loader有哪些特点：
        // 1、loader简单，功能单一，可以组合，每一个都独立处理
        rules: [    //loader分为4类  preLoader normalLoader postLoader
            {   // eslint-loader会调用eslint
                // yarn add eslint eslint-loader 安装这2个包
                // 去eslint官网先勾选需要的规则，之后把规则文件下载下来、保存到根目录
                test: /\.js$/,
                use: 'eslint-loader',
                enforce: 'pre'
            },
            {
               test: /\.js$/,
               use:{
                   loader: 'babel-loader'
               } 
            },
            // 可以使用如下的简写：
            {
                test: /\.less/,
                use: [MiniCssExtractPlugin.loader, 'css-loader','less-loader','postcss-loader']
            }
        ]    
    },
    devServer: {    // 这里放的就是webpack-dev-server的配置
        port:8088 
    },
    plugins: [  // 插件的顺序 默认应该是从上到下执行的
        // 插件是无序的
        new HtmlWebpackPlugin({
            template: './src/index.html',
            hash: true
        }),
        new MiniCssExtractPlugin({
            // 抽离CSS样式，既有loader的功能，又有插件的功能
            // 引入这个，前面的style-loader就可以注释掉了
            filename: 'css/style.css'

        })
    ]
}

// 装饰器
// 类的属性