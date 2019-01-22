class Person3{

    // 静态属性
    static myname = 'hello'

    // 加上static表示这个属性是静态的属性，是属于类的属性，不加static表示实例的方法
    static getName(){   

    }
}

let p3 = new Person3();
console.log(Person3.getName);
// console.log(p3.getName); 这里取不到的哦
 





