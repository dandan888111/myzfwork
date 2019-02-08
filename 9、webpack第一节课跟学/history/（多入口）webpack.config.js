// 默认webpack配置文件的名字 叫webpack.config.js
// 他的配置用的是node来写的，配置需要导出一个配置对象

let path = require('path');
// 使用插件，需要先引入
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 开发模式development，可以查看压缩前的代码
    // 上线前需要使用production模式
    mode: 'development', 
    entry: {
        home: './src/index.js', 
        login: './src/login.js', 
    },
    output: {
        // 出口的路径必须是一个绝对路径
        filename: '[name].js',  
        // 打包后的目录
        path: path.resolve(__dirname, 'dist'),
        
    },
    plugins: [// 要学webpack各种插件的用法
        // 使用插件，需要new一个哦
        new HtmlWebpackPlugin({
            filename: 'home/home.html',
            template: './public/index.html',    // 使用public下的index作为模板
            minify: { // 还可以压缩的更狠一点的配置
                // 去掉所有的双引号
                removeAttributeQuotes: true,
                // 去掉空行
                collapseWhitespace: true
            },
            chunks: ['home']    // 要使用哪些代码块
       }),
       new HtmlWebpackPlugin({
            filename: 'login/login.html',
            template: './public/index.html',    // 使用public下的index作为模板
            minify: { // 还可以压缩的更狠一点的配置
                // 去掉所有的双引号
                removeAttributeQuotes: true,
                // 去掉空行
                collapseWhitespace: true
            },
            chunks: ['login']    // 要使用哪些代码块
        }),
    ]
    // loader的作用是把源码进行转化的
    // 在原有的webpack打包的过程中增加额外的功能插件
}

// spa 单应用
// 多页应用 多入口 多出口  2个html  2个js
// 改写 entry 分成home 和 login//
// output 里要写成[name]
// 多new一个
// 多new一个