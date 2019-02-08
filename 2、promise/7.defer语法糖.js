let Promise = require('./5.promise');
let path = require('path');

let fs = require('fs');
function read(url) {
    let defer = Promise.defer();
    fs.readFile(path.resolve(__dirname, url), 'utf8', function (err,data) {
    if (err) defer.reject(err);
        defer.resolve(data);
    });
    return defer.promise;
}

read('name.txt').then(function (data) {
  console.log(data);
})