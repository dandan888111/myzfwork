"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 抽象方法
 * 抽象类和方法不包含具体实现，必须在子类中实现
 * 抽象方法只能出现在抽象类中
 * 如果子类继承父类的是一个抽象类，一定要实现父类里面的抽象方法
 */
var Animal2 = /** @class */ (function () {
    function Animal2() {
    }
    return Animal2;
}());
// let animal3 = new Animal2();  这样new会报错的噢
var Cat2 = /** @class */ (function (_super) {
    __extends(Cat2, _super);
    function Cat2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat2.prototype.speak = function () {
        console.log('小猫喵喵喵');
    };
    return Cat2;
}(Animal2));
