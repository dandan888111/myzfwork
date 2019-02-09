// es6  => arrowFn;
// 1) 代码逼格高 2) 函数不用写return了 就不用写{}  3) 没有this和argument
// 4) 如果参数是一个 那就可以省略参数
function sum(a, b) {
    return a + b;
}

// es6 => let / const
// 去掉函数关键字 () 和 {} 之间有个箭头
let sum1 = (a, b) => a + b;
  
function a(x) {
    return function (y) {
        return x + y;
    }
}
  
let a1 = x => y => x + y;
  
  
  
// js中this和在哪里定义没有关系 和在那执行和执行.前面的是谁this就是谁
let b = 200;
let obj = {
    b: 100,
    a: () => { // this没有
        window.setTimeout(() => {
            console.log(this.b);
        }, 0); // call apply
    }
}
obj.a();

// 箭头函数中没有arguments  所以我可以使用 ...args 把args 变成一个数组
let fn = (...args) => {  // 剩余运算符
    console.log(args)
}
fn(1,2,3,4,5);