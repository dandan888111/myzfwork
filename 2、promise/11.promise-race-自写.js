
let Promise = require('./6.promise');
let fs = require('fs');
let path = require('path');

function read(url){
    return new Promise(function(resolve,reject){
        fs.readFile(path.resolve(__dirname, url), 'utf8', function(err,data){
            if(err) reject(err);
            resolve(data);
        })
    })
}


// race比谁快！谁先取到值，就用谁
Promise.race([read('myname.txt'),read('age.txt')]).then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err);
})