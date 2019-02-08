let Promise = require('./5.promise');

let p = new Promise(function(resolve,reject){
    reject(100);
})

p.then(null, function(err){
    throw err;
}).then(null, function(err){
    throw err;
}).then(function(data){
    console.log(data);
},function(err){
    console.log('err',err);
})