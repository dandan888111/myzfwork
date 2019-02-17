

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
            // 正常工作中，一般是使用url-loader，url里面会判断是否需要file-loader
            // {
            //     test: /.\jpg$/,
            //     // 目的就是根据图片生成一个md5 发射到dist目录下，file-loader还会返回当前的图片路径
            //     // url-loader 1） file-loader会处理路径
            //     use: 'file-loader'
            // }
            {
                test: /.\jpg$/,
                // 目的就是根据图片生成一个md5 发射到dist目录下，file-loader还会返回当前的图片路径
                // url-loader 1） file-loader会处理路径
                use: {
                    loader: 'url-loader',
                    options:{
                        limit: 20*1024
                    }
                }
            }
        ]
    }
}