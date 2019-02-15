

class AsyncSeriesWaterfallHook {    
    constructor (args){    
        this.tasks = [];
    }
    tapAsync(name, task) {
        this.tasks.push(task);
    }
    callAsync(...args){
        let finalCallBack = args.pop();
        let index = 0;
        let next = (err, data) => {
            let task = this.tasks[index];
            if(!task) return finalCallBack();
            if(index === 0) {   // 执行的是第一个
                task(...args, next);
            }else{
                task(data, next);
            }
            index++;
        }
        next();
    }
}

let hook = new AsyncSeriesWaterfallHook(['name']);
let total = 0;
hook.tapAsync('node', function(name,cb){
    setTimeout(() => {
        console.log('node', name)
        cb(null,'result')
    }, 1000);
})
hook.tapAsync('react', function(name,cb){
    setTimeout(() => {
        console.log('react', name)
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
