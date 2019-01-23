"use strict";
// 继承用extends, 一个子类只能有一个父类，但是一个子类可以实现多个接口
// 实现用implements
// 接口是抽象的，我们一定要去实现它！
// 类实现这个接口, 可以有一个接口，也可以有2个接口
var Dog5 = /** @class */ (function () {
    function Dog5(name) {
        this.name = name;
        this.name = name;
    }
    Dog5.prototype.speak = function (something) {
        console.log('小狗汪汪汪');
    };
    Dog5.prototype.fly = function () {
        console.log('小鸟飞飞飞');
    };
    Dog5.prototype.machineFly = function () {
        console.log('坐在火箭上飞');
    };
    return Dog5;
}());
var dog5 = new Dog5('wudandan');
console.log(dog5);
dog5.fly();
// class Dog5 implements Animal5,Bird{
//     constructor(public name:string){
//         this.name = name;
//     }
//     speak(something:string):void {
//         console.log('小狗汪汪汪');
//     }
//     fly() {
//         console.log('小鸟飞飞飞');
//     }
//     MachineBird() {
//         console.log('坐在火箭上飞');
//     }
// }
// let dog5 = new Dog5('wudandan');
// console.log(dog5)
// dog5.fly();
