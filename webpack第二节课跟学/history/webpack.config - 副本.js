let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: 'web', // 默认打包的结果怎么用，web就是给浏览器用的
    mode: 'development',
    entry: {
        main: path.resolve(__dirname,'./src/index.js')
    },
    output: {
        filename: '[name].[hash:8].js',  // 这里的name，取的是entry里面的别名：main
        path: path.resolve(__dirname,'dist')
    },
    module: {   // 匹配要处理的模块
        rules: [    //匹配上了这个后缀，用什么去匹配
            // 1.直接写一个字符, 如： {test: /\.less$, use: ''/}  
            // 2.多个loader的时候，就需要一个数组了。 要处理less less-loader css-loader style-loader
            // 3.loader 默认从右边向左，从下到上
            // 4.loader还可以写成一个对象,写成对象可以传参
            {test: /\.less$/, use: [{
                loader: 'style-loader',
                options: { // 这个options的作用是，告诉这个loader插入到哪个地方,top页面最顶部
                   insertAt: 'top'
                }
            },'css-loader','less-loader']}  
            // less-loader 默认会调用less来转化
            // stylus stylus-loader sass-loader
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
        })
    ],
    
}