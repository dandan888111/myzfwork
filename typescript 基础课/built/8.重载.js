"use strict";
/**
 * 函数的重载
 * Java里面的重载，是指两个或两个以上的函数，参数的个数和类型不一样
 * TS中的函数重载
 */
function attr1(val) {
    console.log(val);
}
;
attr1('wudandan');
attr1(10);
attr1(true); // 上面没有声明boolean的时候，这行会报错的哦 
// 参数类型可以是任意类型！！
function attr2(val) {
    console.log(val);
}
;
attr2(true);
function parse(str) {
    return JSON.parse(str);
}
var obj = parse('{"name":"wudandan"}');
console.log(obj);
