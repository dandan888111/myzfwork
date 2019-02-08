let Promise = require('./4.promise');
let path = require('path');
let fs = require('fs'); // 充分利用then方法

function read(url) {
    return new Promise(function(resolve, reject){
        resolve(1);
    })
};

// 1) promise中then的特点 如果promise then方法的成功回调 或者失败回调执行后返回的是一个promise,会让这个promise执行 回调用then方法
// 2) 只要成功或者失败的回调有返回值不管是什么 都会走外层的then的成功
// 3) 返回的promise失败了 会走失败 如果抛出异常了会走失败
// 4）就近原则 先找最近的err 捕获 找不到 就向下找捕获
// promise 每次返回的都必须是一个新的promise

// let promise2 = read().then(function(data){
//     console.log(10)
// })
let promise2 = read().then(function(data){
    console.log(10)
//     throw new Error();
//     return new Promise(function(resolve,reject){
//         setTimeout( ()=> {
//             resolve('123');
//             //reject('123');
//         }, 1000)
//     })
})

promise2.then(function (data){
    console.log(data);
},function(err){
    console.log('this is err', err);
})




