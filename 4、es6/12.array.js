// map 映射 
// reduce 收敛 最终我们希望获取一个合并后的结果

// 写一个求和函数

// function sum(...args) {
//   // 把上一次的返回值 作为下一次的prev
//   return args.reduce((prev,current,currentIndex,arr)=>{
//     return prev+current
//   })
// }
// console.log(sum(1, 2, 3, 4, 5));
// ---------------------
// function sum(arr) {
//   // 把上一次的返回值 作为下一次的prev
//   return arr.reduce((prev, current, currentIndex, arr) => {
//     return prev + current.price * current.count
//   }, 0); // 可以手动指定reduce时的prev
// }
// let arr = [{ price: 1, count: 2 }, { price: 3, count: 5 }, { price: 6, count: 8 }]
// let r = sum(arr);
// console.log(r);

// reduce  reduceRight
// redux 中比较著名的方法 compose 组合
function sum(a, b) {
    return a + b;
}

function toUpper(str) {
    return str.toUpperCase();
}

function cap(str) {
    return 'z' + str
}
//let r = cap(toUpper(sum('x','y'))); // 希望把函数组合起来 组合成一个新的函数 我调用新的函数

// let compose = (...fns) => (...args) => () => {
//   let lastFn = fns.pop();
//   return fns.reduceRight((prev, next) => next(prev), lastFn(...args));
// }
  
  
  
// redux 就把compose方法 还是用reduce重写了
// 

// a:cap  b:toUpper 
//  a  ()=>{ return cap(toUpper())}  b:sum
// (...args)=>{ return ()=>{ return cap(toUpper(..args))}(sum(...args));}
let compose = (...fns) => {
    return fns.reduce((a, b) => (...args) => a(b(...args)));
}
let fn = compose(toUpper, sum);
console.log(fn('x', 'y'));
  
  
// 合并两个数组 ['name','age'] = ['zf',10] => {name:zf,age:10}

let arr = ['name','age'];
let arr1 = ['zf',10];
// 逗号默认 取最后一个结果
let newObj = arr.reduce((memo,prev,index)=>(memo[prev] = arr1[index],memo)
,{})
console.log(newObj);
  
  
// map 映射 可以把 一个数组映射成另一个数组

let newArr = [1,2,3].map(item => { // forEach 返回的结果会作为数组的新的一项 最终会返回一个新的数组
    return '<li>' + item +'</li>'
});
console.log(newArr);
  
  
// 数组的常见方法 es5 some every filter forEach.... es6 (find findIndex) 
// es7 很像some 判断有没有 includes 

let flag = [1,2,3].every((item)=>{ //some 找true 如果返回false 会继续向下找
    console.log('----------')
    return item != 100; // every 找fasle 
})
console.log(flag);

let user = ['a','b','c'];
let item = user.find(item=>item === 'd'); // 找到后返回当前项目 findIndex返回是找到的索引
console.log(item);

console.log(user.includes('b')); // [].indexOf>-1  babel默认不会编译 includes方法
// babel-polyfill


// *reduce 原理实现下
// class 继承 装饰器 原型 静态方法 .... babel
  