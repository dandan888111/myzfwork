

// SyncLoopHook  监听函数返回true表示继续循环，返回undefine表示结束循环
// 同步遇到某个不返回 undefined的监听函数会多次执行


let {SyncLoopHook} = require('tapable');  

class Lesson {
    constructor() {
        this.index = 0;
        this.hooks = {
            arch: new SyncLoopHook(['name']),

        }
    }
    tap() { // 注册监听函数
        this.hooks.arch.tap('node', (name) => {
            console.log('node', name)
            return ++this.index === 3 ? undefined : '继续学'
        });
        this.hooks.arch.tap('react', (data) => {
            console.log('react', data)
        })
    }
    start() {
        this.hooks.arch.call('wdd');
    }
}

let l = new Lesson();
l.tap();    // 注册这两个事件
l.start();  // 启动钩子



// code runner 执行
// node wdd
// node wdd
// node wdd
// react wdd