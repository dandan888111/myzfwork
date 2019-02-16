
// table
// 注册的3种方法：
// tap 同步注册
// tapAsync(cb)
// tapPromise(注册是promise)

// 调用的3种方法
// call
// callAsync
// promise


// 异步的钩子（串行） 并行，需要等待所有并发的异步时间执行后再执行回调方法
// 同时发送多个请求


let {AsyncParallelHook} = require('tapable');   // 异步并发执行

class Lesson {
    constructor() {
        this.index = 0;
        this.hooks = {
            arch: new AsyncParallelHook(['name']),

        }
    }
    tap() { // 注册监听函数
        this.hooks.arch.tapAsync('node', (name, cb) => {
            setTimeout(() => {
                console.log('node', name)
                cb()
            }, 1000);
        });
        this.hooks.arch.tapAsync('react', (name, cb) => {
            setTimeout(() => {
                console.log('react', name)
                cb()
            }, 1000);
        })
    }
    start() {
        this.hooks.arch.callAsync('wdd',  function () {
            console.log('end');
        });
    }
}

let l = new Lesson();
l.tap();    // 注册这两个事件
l.start();  // 启动钩子



// code runner 执行
// node wdd
// react wdd
// end