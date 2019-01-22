"use strict";
var Person3 = /** @class */ (function () {
    function Person3() {
    }
    // 加上static表示这个属性是静态的属性，是属于类的属性，不加static表示实例的方法
    Person3.getName = function () {
    };
    // 静态属性
    Person3.myname = 'hello';
    return Person3;
}());
var p3 = new Person3();
console.log(Person3.getName);
// console.log(p3.getName); 这里取不到的哦
