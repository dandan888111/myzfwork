let { resolve } = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
    //source-map 源码映射 他会在出现一个map文件 标识错误的行和列，当使用的是production方法时，报错时方便调试，在调试工具里显示压缩前的代码。但是呢，它会生成一个js.map的文件
    // eval-source-map eval 在文件内部，不会产生map文件了
    // cheap-module-eval-source-map 不包含列  在文件内部
    // cheap-module-source-map // 只显示列而且是一个独立文件
    // 开发 错误捕获 列和行+source-map => 反解出源代码哪一行出错 
    // https://github.com/mozilla/source-map
    devtool:'cheap-module-eval-source-map', // 开发工具
    // 实施监控，每次代码改变 没此次打包出实体文件来
    watch: true,    // 监控
    watchOptions: { // 监控的选项 防抖和节流
        // 防抖 在用户频繁的操作的情况下 最终只触发一次 定时器 每次触发时都取消上一次的定时器
        // 节流 滚动条 按照特定的时间来触发方法 用当前时间和上一次的时间做差，取到的结果如果大于了节流时间就触发一次 new Date
        aggregateTimeout:5000, // 用户一直改就不触发
        poll:1000, // 每秒问多少次
        ignored: /node_modules/ // 不需要进行监控的目录
    },
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
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
          template: './public/index.html'  
        })
    ]
}