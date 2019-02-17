

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
        // loader的分类 pre 在前面的  post 在后面的 normal 在中间的
        // loader的顺序 pre + normal + inline + post
        rules: [    // loader的顺序问题 从右向左 从下到上
            {
                test: /\.js$/,
                use: {
                    loader: 'loader1'
                },
                enforce: 'pre'
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'loader2'
                }
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'loader3'
                },
                enforce: 'post'
            }
            // {
            //     test: '/\.js$/',
            //     use: ['loader3','loader2','loader1']
            // }
            // {
            //     test: '/\.js$/',
            //     use: path.resolve(__dirname, 'loaders', 'loader1.js')
            // }
        ]
    }
}