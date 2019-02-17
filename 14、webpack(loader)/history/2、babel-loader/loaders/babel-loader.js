


let babel = require('@babel/core');

// 拿到当前传入的参数
let loaderUtils = require('loader-utils');

function loader(source) {       // this loaderContext
    // console.log( Object.keys(this));    // 这个this里面有很多东西！！
    // console.log( this.resourcePath );    // 这个this里面有很多东西！！

    let options = loaderUtils.getOptions(this); // 获取options的属性
    console.log( options );
    let cb = this.async(); // flag
    babel.transform(source, {
        ...options,
        sourceMap: true,
        filename: this.resourcePath.split('/').pop()   // 当前要处理的文件的绝对路径,  把“C:\Users\ASROCK\Desktop\webpack-loader\src\index.js"截取成“index.js"
    }, function(err, result) {
        cb(err, result.code, result.map)    // 异步的
    })
}

module.exports = loader