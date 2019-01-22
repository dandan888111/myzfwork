
class Parent{
    name:string
    age:number
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    getName():string {
        return this.name
    }
}

class Student extends Parent{
    no: number
    constructor(name: string, age: number, no: number){
        super(name, age);   // super调用父类的构造函数，去继承父类的所有属性
        this.no = no;
    }
    getNo() {
        return this.name;
    }
}

let s1 = new Student('wudandan',30,1);
console.log(s1);

// public     公开的，自己的子类，和其他类都可以访问
// protected  受保护的  自己和子类能访问，但是其他人不能访问
// private     
class Father{
    public name: string
    protected age: number
    private money: number
    constructor(name: string, age: number, money: number){
        this.name = name;
        this.age = age;
        this.money = money;
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.money;
    }
    getMoney(){
        return this.money;
    }
}
class Child extends Father{
    getAge() {
        return this.age;
    }
    // 这里调不到哦，因为money是受保护的
    // getMoney(){
    //     return this.money;
    // }

}

let child = new Child('wudandan',30,1);
console.log(child.name);