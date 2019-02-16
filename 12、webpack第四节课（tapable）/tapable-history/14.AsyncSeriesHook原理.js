

class AsyncSeriesHook {    
    constructor (args){    
        this.tasks = [];
    }
    tapAsync(name, task) {
        this.tasks.push(task);
    }
    callAsync(...args){
        //  需要一个中间函数
        let finalCallback = args.pop();
        let index = 0;
        let next = () => {
            if(this.tasks.length === index) return finalCallback();
            let task = this.tasks[index++];
            task(...args, next);
        }
        next();
    }
}

let hook = new AsyncSeriesHook(['name']);
let total = 0;
hook.tapAsync('react', function(name,cb){
    setTimeout(() => {
        console.log('react', name)
        cb()
    }, 1000);
})
hook.tapAsync('node', function(name,cb){
    setTimeout(() => {
        console.log('node', name)
        cb()
    }, 1000);
})

hook.callAsync('wdd', function () {
    console.log('end')
});

// 在code runner里一次执行！
// react wdd
// node wdd
// end
