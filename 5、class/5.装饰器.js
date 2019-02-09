
// 在es6中 装饰器 类的属性 es7

class Animal{
    constructor(age) {
        this.type = '哺乳类';  
        this.age = age; 
    }
    drink() {  
        console.log('喝牛奶');
    }
}

// @log
class Cat extends Animal{ 
    // @readonly PI = 3.14;
    static b = 2;   // 静态属性 es7的语法，直接执行会报错的。需要编译！
    a = 2; // 在cat的实例上增加一个a属性
    @before
    say(){
        console.log('say');
    }
}

let c = new Cat(9);
// console.log(c.age); // 9
// console.log(c.a);   // 1
console.log(Cat.b);   // 2

// 1)类的装饰器 装饰 AOP  装饰器只能用于类  类的属性和类的方法
// function log(target) {  // target 类
//     target.xxx = 'hello';
// }
// console.log(Cat.xxx);

// 2) 类的属性
// function readonly(target, key, value){  // target 是类的原型
//     value.writable = false;
// }
// c.PI = 3.15;    // 报错。不可改写！

function before(target, key, descriptor){   // 
    let oldSay = descriptor.value;
    descriptor.value = function(){
        console.log('before');
        oldSay();
    }
}
c.say();

// 类中 
// 1) constructor  
// 2) 原型上的方法  
// 3) 静态方法   
// 4) 类的属性    
// 5) 装饰器
