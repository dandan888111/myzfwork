// SyncWaterfallHook  瀑布。上一个函数的返回值是下一个函数的参数

let {SyncWaterfallHook} = require('tapable');    // 下一个任务要拿到上一个任务的返回值

class Lesson {
    constructor() {
        this.hooks = {
            arch: new SyncWaterfallHook(['name']),

        }
    }
    tap() { // 注册监听函数
        this.hooks.arch.tap('node', function(name){
            console.log('node', name)
            return 'node学的还不错'
        });
        this.hooks.arch.tap('react', function(name){
            console.log('react', name)
        })

    }
    start() {
        this.hooks.arch.call('wdd');
    }
}

let l = new Lesson();
l.tap();    // 注册这两个事件
l.start();  // 启动钩子


// 在code runner里一次执行！
// 结果：
// node wdd
// react node学的还不错