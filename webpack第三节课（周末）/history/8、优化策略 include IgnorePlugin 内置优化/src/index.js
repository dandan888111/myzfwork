

// 用es6导出的模块，会把结果放到module.exports.default属性
// let calc = require('./calc');
// 用上面这行代码，会把不要的属性也打包进去

import calc from './calc';
console.log(calc.sum('a','b'));


let a = 1;
let b = 2;
let c = 3;
let d = a + b + c;
console.log(d);