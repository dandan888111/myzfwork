let path = require('path');
// let Promise = require('./2.promise');
// let promise = new Promise(function(resolve, reject){
//     reject(100);
// });


let fs = require('fs'); // 充分利用then方法
function read(url) {
    return new Promise(function(resolve, reject){
        fs.readFile(path.resolve(__dirname, url),'utf8', function(err, data){
            if(err) return reject(err); // 错误执行
            resolve(data);  // 成功执行
        })
    })
}

// 1) promise中then的特点 如果promise then方法的成功回调 或者失败回调执行后返回的是一个promise,会让这个promise执行 回调用then方法
// 2) 只要成功或者失败的回调有返回值不管是什么 都会走外层的then的成功
// 3) 返回的promise失败了 会走失败 如果抛出异常了会走失败
// 4）就近原则 先找最近的err 捕获 找不到 就向下找捕获
// promise 每次返回的都必须是一个新的promise

read('./name.txt').then(function(data){  // data => name.txt
    //return read(data + '1');      // read('age.txt') => promise.then
    return read(data);
}).then(function (val){
    console.log(val);
},function(err){
    console.log('this is err', err);
    return 100
}).then(function(data){
    throw new Error();
}).then().catch(function(err){
    console.log('catch', err)
    return undefined
}).then(function(){
    console.log('success');
    return 100;
}).then(function(data){
    console.log(data);
})


// let promose2 = read().then(function (data) { 
//   return new Promise(function (resolve,reject) {
//     resolve(123)
//   })
// })
// promose2.then(function (data) {
//   console.log(data);
// },function (err) {
//   console.log('err',err);
// })
