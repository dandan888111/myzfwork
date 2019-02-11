// 默认webpack配置文件的名字 叫webpack.config.js
// 他的配置用的是node来写的，配置需要导出一个配置对象
// npx webpack --config webpack.dandan.config.js 不用默认名字的时候，就用这个命令执行自己写的配置文件

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
    devServer:{ // 配置webpack-dev-server
        port:3000,  // 端口号
        contentBase:'./dist', // 指定webpack-dev-server服务的路径
        compress:true, // gzip 压缩
        progress:true, // 进度条
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


// wwebpack可以实现本地的开发服务  webpack-dev-server