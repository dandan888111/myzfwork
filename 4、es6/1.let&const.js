// es5 var function 
// es6 let const 
// 1） 变量提升
// 2） 不支持作用域 如果在作用域中 声明function a 会按照var来解析 而且let 同一个作用域下不能重复声明
// 3) let 会有一个叫暂存死区的概念   默认情况下 变量会和作用域绑定
let a = 1;

// 错误代码
// {
//     console.log(a);
//     let a = 2;
// }

// 如果这个地方用var i = 0;就无法实现，这种情况就需要借用闭包去实现了！
// for (var i = 0; i < 100; i++) {
//     ~function(i){
//         setTimeout(() => {
//             console.log(i);
//           }, 0);
//     }(i)
// }

// 这里使用let = 0,就可以直接实现效果了，不需要借用闭包了！
for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      console.log(i);
    }, 0);
}

// 以后声明变量全用let const
const PI = { a: 3.14}; // 一切变量都用const 不能用const 就改写成let
PI.a = 3.15;

// let 不会污染全局变量