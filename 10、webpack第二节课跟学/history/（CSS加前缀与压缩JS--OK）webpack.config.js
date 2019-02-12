let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let UglifyjswebpackPlugin = require('uglifyjs-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    optimization: {
        minimizer: [    // 优化项
            new UglifyjswebpackPlugin({
                cache: true,    // 缓存
                parallel: true //并行打包
            }),
            new OptimizeCssAssetsPlugin()
        ]
    },
    target: 'web', // 默认打包的结果怎么用，web就是给浏览器用的
    mode: 'production', // 这里用production，就可以压缩代码; 如果是develoment，就是开发环境，就不会压缩代码
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
            // 可以使用如下的简写：
            // {
            //     test: /\.less/,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader','less-loader','postcss-loader']
            // },
            {   // 加前缀
                test: /\.less/,
                use: 'postcss-loader',
                enforce: 'pre'
            },
            {   // 专门处理less的，把less转成css
                test: /\.less$/,
                use: 'less-loader',
                enforce: 'pre'
            },
            {   // 专门处理css的，解析import语法
                test: /\.less$/,
                use: 'css-loader'
            },
            {
                test: /\.less/,  
                use: MiniCssExtractPlugin.loader,
                enforce: 'post'
            }
            // loader是从下往上执行。先取最后一个执行，之后把结果给前面一个。
            // 上线时会将CSS 抽离到link标签中,用MiniCssExtractPlugin插件
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

// yarn add mini-css-extract-plugin -D 抽离样式
// 1) 需要压缩样式   2) 需要添加前缀

// 实现自动添加前缀 postcss-loader(autoprefixer)，打包后还需要压缩
// 压缩 optimize-css-assets-webpack-plugin