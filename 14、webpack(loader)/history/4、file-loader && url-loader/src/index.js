

console.log('hello')


// -！ 不会让文件 再去通过pre + normal loader来处理了
// ！ 没有normal
// !! 什么都不要
//let str = require('!!inline-loader!./a.js');


// loader 默认是由两部分组成 pitch normal

// class Zfpx{
//     constructor() {
//         this.name = 'zfpx'
//     }
//     getName(){
//         return this.name
//     }
// }

// let zfpx = new Zfpx();
// console.log(zfpx.getName())


import p from './test.jpg'
let img = document.createElement('img');
img.src = p;
document.body.appendChild(img);
