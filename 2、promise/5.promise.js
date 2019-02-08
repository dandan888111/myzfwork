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

function Promise(executor) {
    let that = this;
    that.status = 'pending';    // 默认状态就是pending
    that.value = undefined;     // 存放成功的值和失败的值
    that.reason = undefined;
    // 依赖的是发布订阅模式 将成功的和失败依次存放到数组中
    // 等待用户改变状态 依次调用绑定的事件
    that.onResolvedCallbacks = [];  // 专门用来存放成功的状态！
    that.onRejectedCallbacks = [];  // 专门存放失败的回调
    function resolve(value) {       // 调用后标识当前promise成功了
        //  调用了resolve，当前状态就变成了成功态
        if(that.status === 'pending'){  // 只有状态为pending时，才可以更改状态
            that.status = 'fulfilled';
            that.value = value; 
            that.onResolvedCallbacks.forEach(function(fn){
                fn();   // 让匿名函数执行
            });
        }
    }
    function reject(reason) {       // 标识 调用后promise变成失败态
        //  调用了reject，就变成了失败态！
        if(that.status === 'pending'){
            that.status = 'rejected';
            that.reason = reason;
            that.onRejectedCallbacks.forEach(function(fn){
                fn();   // 让匿名函数执行
            });
        }
    }
    try{
        executor(resolve, reject);
    }catch(e){
        reject(e);  // 如果发生错误，可以直接变成失败态
    }
    
}

function resolvePromise(promise2, x, resolve, reject){
    if(promise2 === x){ // 如果自己等待自己，就直接变成失败态
        return reject(new TypeError('循环引用'))
    }

    // 1. 判断X 是不是一个promise
    // X 不一定是谁得promise，可能会成功失败都调用
    let called;
    if( (typeof x === 'object' && x !== null) || typeof x === 'function') {
        // 有可能是一个promise
        try{
            let then = x.then;  // 取出then方法{then: function(){}} 有可能会发生异常
            if(typeof then === 'function'){ // 如果有then，而且then是个方法，那就是promise了
                then.call(x, function(y){  
                    // 调用返回的promise，可能这个promise resolve的结果又是一个promise，那就递归解析promise
                    // 如果当前x 是promise，就让这个promise执行
                    if(called) return;  // 防止这个promise 既调用了成功又调用了失败
                    called = true;
                    resolvePromise(promise2, y, resolve, reject); // 成功传递给成功
                }, function(r){
                    if(called) return;
                    called = true;  
                    reject(r);  // 失败传递给失败
                })
            }else{
                resolve(x);
            }
        }catch(e){
            if (called) return;
            called = true;
            reject(e);
        }
    }else{  // 123 '123'
        resolve(x); // 当前X 是一个普通值
    }
}

// then方法是异步的
Promise.prototype.then = function(onFulfiled, onRejected) {
    onFulfiled = typeof onFulfiled === 'function' ? onFulfiled : function (data) {
        return data;
    }
    onRejected = typeof onRejected === 'function' ? onRejected : function (err) {
        throw err;
    }
    let that = this;
    let promise2;
    // 默认返回一个新的promise。需要将成功的函数和失败的函数返回结果来判断promise2是成功还是失败！
    // 当前调用then方法后，会返回一个全新的promise
    promise2 = new Promise(function(resolve, reject){
        if(that.status === 'fulfilled') {
            setTimeout( ()=>{
                try{
                    let x = onFulfiled(that.value);  
                    // 应该多一个判断，判断 x 是不是一个promise。
                    // 如果是promise，那就采用当前promise的状态
                    resolvePromise(promise2, x, resolve, reject);
                }catch(e){
                    reject(e);
                }
            },0);
        }
        if(that.status === 'rejected') {
            setTimeout(() => {
                try{
                    let x = onRejected(that.reason); 
                    resolvePromise(promise2, x, resolve, reject);
                }catch(e){
                    reject(e);
                }
            },0);
        } 
        if(that.status === 'pending') { // 这里有异步逻辑，没有调用成功或者失败
            that.onResolvedCallbacks.push( function() {
                setTimeout(() => {
                    try{
                        let x = onFulfiled(that.value);  
                        resolvePromise(promise2, x, resolve, reject);
                    }catch(e){
                        reject(e);
                    }
                },0);
            });
            that.onRejectedCallbacks.push( function(){
                setTimeout(() => {
                    try{
                        let x = onRejected(that.reason); 
                        resolvePromise(promise2, x, resolve, reject);
                    }catch(e){
                        reject(e);
                    }
                },0);
            })
        }
    });
    return promise2;
}

// 你会实现一个 Deferred 方法吗？
// 测试 npm install promises-aplus-tests -g
// promises-aplus-tests 1.promise.js
Promise.deferred = Promise.defer = function () { // 这个方法是promise的语法糖
    let dfd = {}
    dfd.promise = new Promise(function (resolve, reject) {
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
}

module.exports = Promise;
