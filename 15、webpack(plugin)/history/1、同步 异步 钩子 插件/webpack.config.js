let path = require('path');
let donePlugin = require('./plugins/donePlugin');
let AsyncPlugin = require('./plugins/AsyncPlugin')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new donePlugin(),
        new AsyncPlugin()
    ]
}