// 多态
class Animal{
    speak() {
        throw new Error('这是一个抽象的基类，不能直接使用');
    }
}

class Dog extends Animal{
    speak() {
        console.log('小狗汪汪汪');
    }
}

class Cat extends Animal{
    speak() {
        console.log('小猫喵喵喵');
    }
}

let dog = new Dog();
dog.speak();
let cat = new Cat();
cat.speak();