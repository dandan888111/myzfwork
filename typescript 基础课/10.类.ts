
class Person{
    name:string    // 这是示例的属性属性
    age:number
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    getName():string {
        return this.name
    }
}

let p1 = new Person('wudandan', 30);
console.log(p1);