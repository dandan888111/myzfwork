// 类的继承，构造函数来模拟类！
// constructor, prototype, __proto__

function Animal(name){  // 实例上的属性
    this.name = name;   
    this.data = { height: 160};
}
Animal.prototype.data = { height: 160}


let animal1= new Animal('猴子');
let animal2 = new Animal('猴子');
console.log(animal1.data === animal2.data);                     // false
// __proto__ 指向的是所属类的原型
console.log(Animal.__proto__ == Function.prototype);            // true
console.log(Animal.prototype.__proto__ === Object.prototype);   // true
console.log(Function.prototype.__proto__);                      // {}
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__);                        // null


console.log(animal1.constructor === Animal);            // true
// 类的原型指向 和 实例的 __proto__ 是相等的
console.log(Animal.prototype === animal1.__proto__);    // true  
 