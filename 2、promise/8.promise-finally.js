 let Promise = require('./6.promise');

// let p = new Promise( function(){
//     resolve(100)
// })

// Promise.resolve(1).then(function(data){
//     console.log(data);
// });

// Promise.reject(10).then(null,function(data){
//     console.log(data);
// });

// Promise.reject(100).catch(function(err){
//     console.log(err);
// });

// Promise.resolve(1000)
// .then(function(data){    
//     console.log('final');
//     return data;
// }, function(err){
//     console.log('final');
//     throw err;
// })
// .then(function(data){
//     console.log('10000', data)
// })
// .catch(function(err){
//     console.log(err);
// });

Promise.reject(1000)
.finally(function(data){    
    // finally... 默认这个函数，无论是失败还是成功都会执行
    console.log('final');
    return data;
})
.then(function(data){
    console.log('10000', data)
})
.catch(function(err){
    console.log(err);
});

