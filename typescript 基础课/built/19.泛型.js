"use strict";
// generic type
// 参数的泛型
function calculate(value) {
    return value;
}
console.log(calculate(1));
// 类的泛型 如何使用呢？
function calculate2(value) {
    return value;
}
console.log(calculate2(1));
var MyArray = /** @class */ (function () {
    function MyArray() {
        this.list = []; // 定义了一个私有的属性list
    }
    MyArray.prototype.add = function (value) {
        this.list.push(value);
    };
    MyArray.prototype.max = function () {
        var ret = this.list[0];
        for (var i = 1; i < this.list.length; i++) {
            if (this.list[i] > ret) {
                ret = this.list[i];
            }
        }
        return ret;
    };
    return MyArray;
}());
var arr6 = new MyArray();
arr6.add(6);
arr6.add(7);
arr6.add(8);
console.log(arr6.max()); // 打印出8了哦
