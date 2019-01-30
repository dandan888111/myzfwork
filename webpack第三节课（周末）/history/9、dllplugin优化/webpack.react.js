

// 专门打包好react和reactdom文件的

let path = require('path');
let webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        react: ['react','react-dom'],
    },
    output: {
        filename: '[name]_dll.js',
        library: '_dll_[name]', //   给他起个名字
        //libraryTarget: 'this',  // 默认是var  this global widow commnjs/2 
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new webpack.DllPlugin({ // name 属性要和 library的名字一样
            name: '_dll_[name]',
            // service worker 
            path: path.resolve(__dirname, 'dist', 'manifest.json')
        })
    ]
}

// // 专门打包好react和reactdom文件的

// let path = require('path');
// let webpack = require('webpack');
// module.exports = {
//   mode:'development',
//   entry:{
//     react: ['react','react-dom'],
//   }, // 动态链接库
//   output:{
//     filename:'[name]_dll.js', // => react_dll.js
//     library:'_dll_[name]', // 给他起个名字
//     //libraryTarget:'this', // 默认是var this global window commonjs/2 umd...
//     path:path.resolve(__dirname,'dist')
//   },
//   plugins:[
//     new webpack.DllPlugin({ // name 属性要和 library的名字一样
//       name:'_dll_[name]',
//       // service worker 
//       path:path.resolve(__dirname,'dist','manifest.json')
//     })
//   ]
// }