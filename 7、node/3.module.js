// 模块化 requirejs amd 依赖前置 seajs cmd 就近依赖
// 为什么有模块化 我们的代码方便维护 每个功能放到一个模块内
// 命名问题 污染全局变量
// 1) 我们写方法写属性都放在对象里 命名空间 不能完全解决这个问题
// 2) IIFE 自执行函数 实现模块的功能，要把最终的结果对外暴露


// 浏览器的文件加载 http请求 异步的问题
// node中实现模块化非常容易 node可以读写文件 用nodeapi读取文件 实现模块化的功能

// commonjs规范定义了几个点 （同步的）
// 1) 如何声明一个模块 node中一个文件就是一个模块
// 2) 每个模块都需要导出最终的结果 module.exports
// 3) 每个模块引用其他的模块的时候需要使用require语法


// 就是把文件读取出来之后加一个 函数执行 最终返回的是module.exports
// 文件模块  内置模块 fs 第三方模块 mz
// module.exports 和exports 对象指定同一个空间 但是expors指向改变了不会导致module.exports 更改
// 默认如果使用了exports.a 赋值了 在更改module.exports 那么a会丢失
let str = require('./a.js');
console.log(str);



// 1) 读取一个文件后 读到的内容是一个字符串 怎么把一个字符串执行

// - eval 不干净的执行，eval会取当前模块中的变量
let a = 100;
eval('console.log(a)')

// - new Function
let str1 = `let str = 'hello'`;
let fn = new Function(str1 + '\r\n return str');
let r = fn();
console.log(r);

// - 沙箱 vm 虚拟机 runInThisContext 可以让我们的代码在一个干净的上下文中执行
let vm = require('vm');     // 内置的，可以直接用
vm.runInThisContext('console.log("aa")');


let path = require('path');     // 内置的，可以直接用
// 专门处理路径的 path.resolve path.join path.extname path.dirname
// 如果要绝对路径 需要用resolve 如果要是用/ 最好不要用resolve
console.log(path.resolve('dir','xxx')); // 解析出一个绝对路径
console.log(path.join(__dirname,'dir', 'xxx'));
console.log(__dirname); // 当前文件所在的目录名
console.log(__filename); // 当前文件的名字
console.log(path.dirname(__dirname)); // 取当前文件的父路径

// fs require('fs') 读取文件