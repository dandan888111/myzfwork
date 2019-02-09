// Object.defineProperty 不是es6 而是es5的方法

// 拦截器 代理 只能用在对象身上，不能用在数组身上！

let school = {}; // 仅读属性
let n = 'wdd1';     // 借用其他变量设置值！

Object.defineProperty(school, 'name', { // 声明一个属性 分成两部分来看
    // writable: true,     // 可以写。写个get 和 set，这行代码就要注释掉了！
    configurable: true,
    enumerable: true,   // 当前属性是可枚举的
    // value: 'wdd',
    // 写了get 和 set ，就不能再写value了
    get() {
        return n
    },
    set(val) {
        n = val;
    }
})
school.name = 'wdd3';   // 改变属性的值。默认就是调用的set方法的！
// delete school.name;         // 删除属性
console.log(school.name);