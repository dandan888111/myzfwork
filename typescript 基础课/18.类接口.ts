
// 继承用extends, 一个子类只能有一个父类，但是一个子类可以实现多个接口
// 实现用implements
// 接口是抽象的，我们一定要去实现它！


// 如何用接口约束类
// 接口可以扩展，接口可以继承接口
interface Animal5{
    name: string,
    speak(something: string):void
}
interface Bird{
    fly():void
}
interface MachineBird extends Bird{
    machineFly():void
}


// 类实现这个接口, 可以有一个接口，也可以有2个接口

class Dog5 implements Animal5, MachineBird{
    constructor(public name:string){
        this.name = name;
    }
    speak(something:string):void {
        console.log('小狗汪汪汪');
    }
    fly() {
        console.log('小鸟飞飞飞');
    }
    machineFly() {
        console.log('坐在火箭上飞');
    }
}

let dog5 = new Dog5('wudandan');
console.log(dog5)
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