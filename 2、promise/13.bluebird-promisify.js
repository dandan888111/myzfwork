// bluebird promisify
// util promisify

let bluebird = require('bluebird');
let fs = require('fs');
let path = require('path');


// 只能promise化。node的api node的回调第一个参数是error-first
function promisify(fn){
    return function(...args) { // arguments args=['name.txt','utf8]
        return new Promise(function(resolve,reject){
            args.push(function(err,data){   // 默认在参数列表中增加一个参数
                if(err) reject(err);
                resolve(data);
            })
            fn.apply(null, args);
        })
    }
}

let read = promisify(fs.readFile); // 把方法 promise 化

read(path.resolve(__dirname, 'myname.txt'), 'utf8').then(function(data){
    console.log(data);
})