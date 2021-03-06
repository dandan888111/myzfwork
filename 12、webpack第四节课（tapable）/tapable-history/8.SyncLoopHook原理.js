

class SyncLoopHook {    
    constructor (args){    
        this.tasks = [];
    }
    tap(name, task) {
        this.tasks.push(task);
    }
    call(...args){
        this.tasks.forEach( task=>{
            let ret;
            do{
                ret = task(...args)
            }while(ret != undefined)
        })
    }
}

let hook = new SyncLoopHook(['name']);
let total = 0;
hook.tap('react', function(name){
    console.log('react', name)
    return ++total === 3 ? undefined : '继续学'
})
hook.tap('node', function(data){
    console.log('node', data)
})
hook.tap('webpack', function(data){
    console.log('webpack', data)
})

hook.call('wdd');

// 在code runner里一次执行！
// react wdd
// react wdd
// react wdd
// node wdd
// webpack wdd