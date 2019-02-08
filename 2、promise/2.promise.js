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
    that.status = 'pending';
    that.value = undefined;
    that.reason = undefined;
    // 依赖的是发布订阅模式 将成功的和失败依次存放到数组中
    // 等待用户改变状态 依次调用绑定的事件
    that.onResolvedCallbacks = [];  // 专门用来存放成功的状态！
    that.onRejectedCallbacks = [];  // 专门存放失败的回调
    function resolve(value) {
        //  调用了resolve，当前状态就变成了成功态
        if(that.status === 'pending'){
            that.status = 'fulfilled';
            that.value = value;
            that.onResolvedCallbacks.forEach(function(fn){
                fn();   // 让匿名函数执行
            });
        }
    }
    function reject(reason) {
        //  调用了reject，就变成了失败态！
        if(that.status === 'pending'){
            that.status = 'rejected';
            that.reason = reason;       
            that.onRejectedCallbacks.forEach(function(fn){
                fn();   // 让匿名函数执行
            });
        }
    }
    executor(resolve, reject);
}

Promise.prototype.then = function(onFulfiled, onRejected) {
    let that = this;
    if(that.status === 'fulfilled') {
        onFulfiled(that.value);
    }
    if(that.status === 'rejected') {
        onRejected(that.reason);
    } 
    if(that.status === 'pending') { // 这里有异步逻辑，没有调用成功或者失败
        that.onResolvedCallbacks.push( function() {
            onFulfiled(that.value)
        });
        that.onRejectedCallbacks.push( function(){
            onRejected(that.reason);
        })
    }
}

module.exports = Promise;
