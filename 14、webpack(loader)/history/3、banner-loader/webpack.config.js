

let path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolveLoader: {    // 别名
        // 先去node_modules下面找，找不到就去loader文件夹里找
        modules: ['node_modules', path.resolve(__dirname, 'loaders')]
    
        // alias: {
        //     loader1: path.resolve(__dirname, 'loaders', 'loader1.js')
        // }
    },
    devtool:'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {  // 加注释的loader
                    loader: 'banner-loader',
                    options: {
                        text: '珠峰',
                        filename: path.resolve(__dirname, './src/banner.js')
                    } 
                }
            }
        ]
    }
}