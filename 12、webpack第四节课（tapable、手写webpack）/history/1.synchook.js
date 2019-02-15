// Tapable 是webpack中的基础类，类似于node中的EventEmitter，都是注册监听，然后收发事件，监听函数执行的过程，自身可以被继承或混入到其它模块中。

// webpack本质上是一种事件流的机制，它的工作流程就是将各个插件串联起来，而实现这一切的核心就是Tapable，webpack中最核心的负责编译的Compiler和负责创建bundles的Compilation都是Tapable的实例。

// https://www.codercto.com/a/21587.html

let {SyncHook} = require('tapable');

class Lesson {
    constructor() {
        this.hooks = {
            arch: new SyncHook(['name']),

        }
    }
    tap() { // 注册监听函数
        this.hooks.arch.tap('node', function(name){
            console.log('node', name)
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