

// 异步串行的钩子

let {AsyncSeriesHook} = require('tapable');

class Lesson {
    constructor() {
        this.index = 0;
        this.hooks = {
            arch: new AsyncSeriesHook(['name']),
        }
    }
    tap() { // 第一个执行完，再执行第二个，第二个执行完就打印出end
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
        this.hooks.arch.callAsync('wdd', function () {
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