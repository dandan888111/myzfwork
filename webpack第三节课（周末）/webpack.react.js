// 专门打包好react和reactdom文件的



let path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        test: './src/test.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
}