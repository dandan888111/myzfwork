let fs = require('fs');
let path = require('path');

// 上一个人输出 是下一个人的输入
// 这样不好维护哦，回调地狱！！
// fs.readFile(path.resolve(__dirname, 'name.txt'),'utf8',function (err,data) {
//     fs.readFile(path.resolve(__dirname, data),'utf8',function (err,data) {
//         console.log(data);
//     });
// });

// 1)promise 可以解决  回调地狱的问题 错误处理的问题 并发的问题
//   Promise类  承诺 允诺 (promise有三个状态) 
//   等待态 pending  
//   成功态 fufilled
//   失败态 rejected
//   resolve reject 也是一个函数
// 2) executor 执行器。当前执行器会立马执行
// 3) 每一个promise上都有一个then方法。then方法中传递两个参数。
//    分别代表成功后执行的回调和失败后执行的回调！
// 4) 一旦成功就不能再失败！ 一旦失败就不能再成功！

let Promise = require('./1.promise');
let promise = new Promise(function(resolve, reject){
    console.log(1);
    reject('有钱了！');
});

promise.then(function(value) {   // onFulfilled
    console.log('success', value);
}, function(reason) { // onRejected
    console.log('reason', reason);
});
console.log(2);