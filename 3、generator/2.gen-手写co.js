
let fs = require('mz/fs');
let path = require('path');

function * read(){  // 如果用co yield 只能根这个 function, promise, generator, array, or object
    let content = yield fs.readFile(path.resolve(__dirname, 'name.txt'), 'utf8');
    let r = yield fs.readFile(path.resolve(__dirname, content), 'utf8');
    let a = yield 1;
    console.log(a);
    return r;
}

function co(it) {
    return new Promise(function(resolve,reject){
        function step(data){
            let {value,done} = it.next(data);
            if(!done){
                Promise.resolve(value).then(function(data){
                //value.then(function(data){  上下两句效果一样的
                    step(data);
                }, reject)
            }else{  // 执行完了
                resolve(value);
            }
        }
        step();
    })
}

co(read()).then(function (data) {
    console.log(data);
  });
