
let fs = require('fs');
let path = require('path');

function read(url){
    return new Promise(function(resolve,reject){
        fs.readFile(path.resolve(__dirname, url), 'utf8', function(err,data){
            if(err) reject(err);
            resolve(data);
        })
    })
}

// promise.all 方法返回的还是一个promise
// all 方法中的参数是一个数组
Promise.all([read('myname.txt'),read('age.txt'),3]).then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err);
})