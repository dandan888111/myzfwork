// 解构赋值 
let arr = ['wudandan',30];

// 不能重复命名！好恶心！只能注释掉了！
// let [name, , age] = ['珠峰', 100, 10];
// console.log(name,age); 

// 改名，下面就要用Name取值了！
let {name:Name, age} = {name: 'wudandan', age: 30};
console.log(Name, age);


let [{name}] = [{name: 'wudandan'}]
console.log(name);

let {length} = [];
console.log(length);

// ... 展开运算符  / 剩余运算符 在对象 或者 数组 或者方法中使用
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let newArr = [...arr1,...arr2];  // 把2个数组合并在一个数组里了！
console.log(newArr);   

// 用于剩余运算符号，只能放在最后
// 错误写法：let {...obj, name2} = {name: 'wdd', age: 30, address: '长沙'};
let {name2, ...obj} = {name2: 'wdd', age: 30, address: '长沙'};
console.log(name2, obj);

let [,b,...arr3] = [1,2,3,4,5]
console.log(b, arr3);

// ...有拷贝的功能 拷贝一层 浅拷贝 深拷贝
let obj2 = {name: 'wdd', age: {age: 30}};
let newObj = {...obj2};
obj2.age.age = 100;
console.log(newObj);    // { name: 'wdd', age: { age: 100 } }


// 实现深拷贝
let obj3 = {name: 'wdd', age: {age: 30}, a: /\d/, c: undefined, d: function(){}};
let newO = JSON.parse(JSON.stringify(obj3));
obj3.age.age = 100;
console.log( newO );






