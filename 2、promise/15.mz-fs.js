

// yarn add mz -D
let fs = require('mz/fs'); // mz封装好的fs  全都是promise
let path = require('path');


fs.readFile(path.resolve(__dirname, 'myname.txt'),'utf8').then(function (data) {
  console.log(data);
});