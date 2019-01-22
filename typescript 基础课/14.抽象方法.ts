
/**
 * 抽象方法
 * 抽象类和方法不包含具体实现，必须在子类中实现
 * 抽象方法只能出现在抽象类中
 * 如果子类继承父类的是一个抽象类，一定要实现父类里面的抽象方法
 */
abstract class Animal2{
    // 抽象类里面有一个抽血的方法
    abstract speak():void;
}
// let animal3 = new Animal2();  这样new会报错的噢

class Cat2 extends Animal2{
    speak() {   // 一定要实现父类里面的抽象方法。如果你写个speak1 就出错了
        console.log('小猫喵喵喵');
    }
}