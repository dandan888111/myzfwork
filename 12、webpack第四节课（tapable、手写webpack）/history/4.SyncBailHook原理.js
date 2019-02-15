class SyncBailHook {    // 钩子是同步的
    constructor (args){     //  args => ['name']
        this.tasks = [];
    }
    tap(name, task) {
        this.tasks.push(task);
    }
    call(...args){
        let ret;        // 当前这个函数的返回值
        let index = 0; // 当前要先执行第一个
        do{
            ret = this.tasks[index++](...args)
        }while(ret === undefined && index < this.tasks.length);
    }
}

let hook = new SyncBailHook(['name']);
hook.tap('react', function(name){
    console.log('react', name)
    // return '想停止学习！'           // 返回的是非undefined的值，所以不向下执行了！
    return undefined                   // 返回的是undefined，所以向下执行了！   这是什么鬼函数啊！！坑~~~还要求undefined才往下走！！
})
hook.tap('node', function(name){
    console.log('node', name)
})
hook.call('wdd');

// 在code runner里一次执行！