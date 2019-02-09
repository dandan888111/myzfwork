// 这是ES5的写法。下面是ES6的写法！！！等价的！！！
// function Animal(age){
//     this.type = '哺乳类';  
//     this.age = age; 
// }
// Animal.prototype.drink = function() {
//     console.log('喝牛奶');
// }

class Animal{
    static a(){
        return 100;
    }
    constructor(age) {
        this.type = '哺乳类';  
        this.age = age; 
    }
    drink() {   // 原型上的属性
        console.log('喝牛奶');
    }
}

// 会继承动物的实例上的属性和公共属性
class Cat extends Animal{   // Animal.call(...args);
    constructor(){          // 如果这里写了constructor，必须要写super
        super();            // Animal.call(this);
    }
}

let c = new Animal(9);
console.log(Cat.a());
// console.log(c.a());  // 这个会报错的喔！！不能调用static a


// 在es6中 装饰器 类的属性(es7)

// es6 如何编译es5  babel 转义
// npm install @babel/cli @babel/preset-env -D

// 把 4.es6-class 编译出来到test.js文件里
// npx babel 4.es6-class.js -o test.js
// 需要使用.babelrc文件，里面要写配置
// 否则，无法编译出es5的文件