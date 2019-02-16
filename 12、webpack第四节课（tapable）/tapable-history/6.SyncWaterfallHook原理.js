class SyncWaterfallHook {    // 钩子是同步的
    constructor (args){     //  args => ['name']
        this.tasks = [];
    }
    tap(name, task) {
        this.tasks.push(task);
    }
    call(...args){
        let [first, ...others] = this.tasks;
        let ret = first(...args);
        others.reduce( (a,b) => {
            return b(a)
        },ret)
    }
}

let hook = new SyncWaterfallHook(['name']);
hook.tap('react', function(name){
    console.log('react', name)
    return 'react学的还不错'
})
hook.tap('node', function(data){
    console.log('node', data)
    return 'node学的还不错'
})
hook.tap('webpack', function(data){
    console.log('webpack', data)
})

hook.call('wdd');

// 在code runner里一次执行！
// react wdd
// node react学的还不错
// webpack node学的还不错