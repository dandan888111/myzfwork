"use strict";
/**
 * any 任何的值
 * void 是any的反面，不能有任何值
 * never 永远不会有返回值   一般就2种使用场景：死循环 抛异常
 *
 */
var ak = 10;
function say() { }
;
// 这个函数一旦开始执行，就永远结束的时候，就进入死循环啦
function sum() {
    while (true) {
        console.log(1);
    }
}
function multi() {
    throw Error('ok'); // 后面的代码都不会执行，被打断了！
    var a = 10;
    var b = 10;
}
// 返回值是数字类型或者是异常
function divide(a, b) {
    return a / b;
}
divide(10, 2); // 返回数字
divide(10, 0); // 返回异常
