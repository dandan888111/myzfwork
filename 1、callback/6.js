// vscode coderunner
// 1. 高阶函数  函数的参数是函数 或者 函数返回函数


//  AOP 面向切面编程 回调函数 装饰器

Function.prototype.before = function(fn) {
    let that = this;
    return function() {
        fn.apply(that, arguments);
        that.apply(that, arguments);
    }
}

let fn = function(value) {
    console.log('old~~', value);
};

// 在函数执行之前，先执行一个其他的函数
let newFn = fn.before( function() {
    console.log('new~~~');
});

newFn('123');