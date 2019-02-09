// 如何自己实现一个模板引擎

let name = '邬丹丹';
let age = 30;
// let str = name+'\'今年\''+'\r\n'+age+'岁了';

// 支持 if for ejs模板引擎
let str = "${name}今年${age}岁了";
str = str.replace(/\$\{([^}]*)\}/g,function () {
  return eval(arguments[1])
})
console.log(str);

// Symbol