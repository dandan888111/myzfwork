let merge = require('webpack-merge');
let webpack = require('webpack');
let base = require('./webpack.base.js');
let cleanWebpackPlugin = require('clean-webpack-plugin');
let copyWebpackPlugin = require('copy-webpack-plugin');


module.exports = merge(base,{
    mode: 'development',
    devServer: {  // 开发服务
        before(app){    // app 内置express
            app.get('/user',function(req,res){
                res.json({name:'wudandan22'})
            }); //自己模拟接口
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            // 取环境变量的时候
            NODE_ENV: '"development"',  // 这里必须要再加一层引号，否则会报development未定义！
            EXPRESSION: JSON.stringify('hello'),
            LOG: '1+3',
            BOOL: 'true'
        }),
        // 在打包之前把dist目录删掉
        new cleanWebpackPlugin(['./dist']),
        // 从assets里的文件拷贝到dist目录下
        new copyWebpackPlugin([{
            from:'./assets',
            to:'./' // 默认以dist目录为基准
        }]),
    ]
})