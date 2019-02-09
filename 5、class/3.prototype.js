
function Animal(age){  // 实例上的属性
    this.type = '哺乳类';  
    this.age = age; 
}

Animal.prototype.drink = function() {
    console.log('喝牛奶');
}

function Cat(name, age) {    // 类中的thos指向的是当前的实例
    this.name = name;
    // 修改this指向。把当前的this指向了这个实例 Cat猫！
    // 让父类在子类中指向，并且this指向子类
    // Animal.call(this.age);     
    // return {a:1};       // 如果有返回结果则会用这个结果作为实例
}

// 在子类中调用父类，并且父类的this指向当前的实例！Animal.call(this);
// 只继承父类实例上的属性，不继承父类原型上的属性（公共属性）
// 1) Animal.call(this);  让父类在子类中指向，并且this指向子类

// 2) 错误写法！共用同一个，会混乱
// Cat.prototype = Animal.prototype;    // 不能这样写！！！
// Cat.prototype.aa = 1;
// console.log(Animal.prototype);

// 3) 继承公共属性! 看图片 class-3.png
// // Cat.prototype.__proto__ = Animal.prototype;  与下面一行的代码等价！
// Object.setPrototypeOf(Cat.prototype, Animal.prototype);
// let c = new Cat();
// c.drink();

// 4) Object.creat(); es5  ! 看图片 class-4.png
// function creat(parentProto){
//     function Fn(){}
//     Fn.prototype = parentProto;
//     return new Fn();
// }
// Cat.prototype = Object.create(Animal.prototype,{constructor: {value:Cat}});
// let c = new Cat();
// c.drink();
// console.log(c.constructor);

// 5) 我希望子类可以继承父类的公共属性 和实例上的属性
// Cat.prototype = new Animal();   // 不能在初始化父类的时候传参
// let c = new Cat('小猫',0);

// 在子类内部中调用call 在使用Object.creat/ __proto__ setPrototypeof

// 实例上的属性 公有属性 (静态属性es7) 静态方法  类上声明的

Animal.a = 1;
Animal.fn = function(){};

Object.setPrototypeOf(Cat,Animal);
console.log(Cat.a);     // es6 实现了








