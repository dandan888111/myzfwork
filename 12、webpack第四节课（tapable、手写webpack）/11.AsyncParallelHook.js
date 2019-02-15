
// 异步的钩子（串行） 并行，需要等待所有并发的异步时间执行后再执行回调方法
// 同时发送多个请求
// 注册方法分为 tap注册 tapAsync


// AsyncParallelBailHook 有一个失败了 其他的都不用走了
let {AsyncParallelBailHook} = require('tapable');   // 异步并发执行

class Lesson {
    constructor() {
        this.index = 0;
        this.hooks = {
            arch: new AsyncParallelBailHook(['name']),
        }
    }
    tap() { // 注册监听函数
        this.hooks.arch.tapPromise('node', (name) => {
            return new Promise( (resolve, reject) => {
                setTimeout(() => {
                    console.log('node', name)
                    resolve()
                }, 1000);
            })
        });
        this.hooks.arch.tapPromise('react', (name) => {
            return new Promise( (resolve, reject) => {
                setTimeout(() => {
                    console.log('react', name)
                    resolve()
                }, 1000);
            })
        })
    }
    start() {
        this.hooks.arch.promise('wdd').then(function () {
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