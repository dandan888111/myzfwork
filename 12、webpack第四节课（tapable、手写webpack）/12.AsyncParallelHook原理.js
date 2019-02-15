

class AsyncParallelBailHook {    
    constructor (args){    
        this.tasks = [];
    }
    tapPromise(name, task) {
        this.tasks.push(task);
    }
    promise(...args){
        let tasks = this.tasks.forEach( task => task(...args));
        return Promise.all(tasks);
    }
}

let hook = new AsyncParallelBailHook(['name']);
let total = 0;
hook.tapPromise('react', function(name){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log('react', name)
            resolve()
        }, 1000);
    })
})
hook.tapPromise('node', function(name){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log('node', name)
            resolve()
        }, 1000);
    })
})

hook.promise('wdd', function () {
    console.log('end')
});

// 在code runner里一次执行！
// react wdd
// node wdd
// end
