let fs = require('fs');
let path = require('path');

// 上一个人输出 是下一个人的输入
// 这样不好维护哦，回调地狱！！
// fs.readFile(path.resolve(__dirname, 'name.txt'),'utf8',function (err,data) {
//     fs.readFile(path.resolve(__dirname, data),'utf8',function (err,data) {
//         console.log(data);
//     });
// });

// promise 可以解决  回调地狱的问题 错误处理的问题 并发的问题

let Promise = require('./2.promise');
// 1个promise实例，可以then多次
let promise = new Promise(function(resolve, reject){
    setTimeout(()=>{
        reject(100);
    },1000)
});

promise.then(function(value) {   // pengding
    console.log('success', value);
}, function(reason) { // onRejected
    console.log('reason', reason);
});
promise.then(function(value) {   // pengding
    console.log('success', value);
}, function(reason) { // onRejected
    console.log('reason', reason);
});