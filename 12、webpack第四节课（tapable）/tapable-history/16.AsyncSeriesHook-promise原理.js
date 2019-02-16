

class AsyncSeriesHook {    
    constructor (args){    
        this.tasks = [];
    }
    tapPromise(name, task) {
        this.tasks.push(task);
    }
    promise(...args){
        let [first, ...others] = this.tasks;
        return others.reduce( (a,b) => {
            return a.then( () => b(...args))
        }, first(...args))


    }
}

let hook = new AsyncSeriesHook(['name']);
let total = 0;
hook.tapPromise('react', function(name){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log('node', name)
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

hook.promise('wdd').then(function () {
    console.log('end')
});

// 在code runner里一次执行！
// react wdd
// node wdd
// end
