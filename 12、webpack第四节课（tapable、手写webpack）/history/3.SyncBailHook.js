// 串行同步执行 有一个返回值不为null就跳过剩下的逻辑
// Bail 是保险的意思 有一个出错就不往下执行了


let {SyncBailHook} = require('tapable');    // 保险！熔断型的！是否向下执行！不OK就不往下执行了！

class Lesson {
    constructor() {
        this.hooks = {
            arch: new SyncBailHook(['name']),

        }
    }
    tap() { // 注册监听函数
        this.hooks.arch.tap('node', function(name){
            console.log('node', name)
            // return '想停止学习！'           // 返回的是非undefined的值，所以不向下执行了！
            return undefined                   // 返回的是undefined，所以向下执行了！   这是什么鬼函数啊！！坑~~~还要求undefined才往下走！！
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


// 发布订阅
// 在调用tap的时候，把事件注册到一个数组里
// 调用call的时候，让数组里面事件一次执行
// 在code runner里一次执行！