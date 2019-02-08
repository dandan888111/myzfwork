let Promise = require('./4.promise');

let p = new Promise(function(resolve, reject){
    resolve(1000);
});

let promise2 = p.then(function(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(new Promise((resolve,reject)=>{
                resolve(new Promise((resolve,reject)=>{
                    setTimeout( ()=> {
                        resolve('11111');
                    },1000)
                }))
            }))
        }, 1000);
    })
})
promise2.then(function(data){
    console.log(data);
}, function(err){
    console.log(err)
})