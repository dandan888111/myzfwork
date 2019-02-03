// require('./index.less');

class My{
    constructor() {
        console.log('my');
    }
}

let my = new My();

let B = require('./a.js');
//let b = new B();

// @babel/cli 是在命令行中使用babel
// babel-loader  @babel/core @babel/preset-env
// 默认转化成es6 不能实现 generator Promise runtime
//（会提供Promise，generator 的api） helper函数，可以把共用的代码抽离出来



function * gen() {
    yield 1;
}
let it = gen();
console.log(it.next().value);

// @babel/runtime 无法实现includes语法, includes是es7的语法
// @babel/polyfill
require('@babel/polyfill');     // 转化实例上的方法
console.log('hello'.includes('hell'));
