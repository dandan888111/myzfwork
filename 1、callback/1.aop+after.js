// vscode  coderunner
// 1.高阶函数 函数的参数是函数 或者 函数返回函数
// AOP 面向切面编程  回调函数  装饰器

//1) AOP 

Function.prototype.before = function (fn) {
    let that = this;
    return function () { // => newFn
        fn.apply(that,arguments); // {0:123,1:456}
        that.apply(that, arguments);
    }
}
let fn = function (val) {
    console.log('old~~~~',val);
}
let newFn = fn.before(function(){
    console.log('new~~~');
});
newFn('123','456');


//2) lodash _after 在XX之后
function after(times, callback) {
    // 把times保存在了当前作用域上
    return function() {
        if(--times === 0 ){
            callback();
        }
    }
}
let fn2 = after(2,function(){
    // 在调用2次之后执行
    console.log('after~~~');
})
fn2();  
fn2();

