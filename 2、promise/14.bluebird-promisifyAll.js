// bluebird promisify
// util promisify

let bluebird = require('bluebird');
let fs = require('fs');
let path = require('path');

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

function promisifyAll(obj){
    for(let key in obj){
        if(typeof obj[key] === 'function'){
            obj[key + 'Async'] = promisify(obj[key]);
        }
    }
}
promisifyAll(fs);

fs.readFileAsync(path.resolve(__dirname, 'myname.txt'), 'utf8').then(function(data){
    console.log(data);
})