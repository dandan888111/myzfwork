

// 实现深拷贝 你给我什么 我就返给你一个 返还的这个 和 你以前的那个是两个东西
// 数字 字符串 function是不需要拷贝的


// 判断元素的类型 typeof instanceof Object.prototype.toString.call constructor
function deepClone(value) { 
    // 是不是undefined 是不是null
    if(value == null) return value;
    // 不是对象，就原封不定返回给你
    if(typeof value !== 'object') return value;
    // 判断是不是正则，判断是不是正则的实例！
    if(value instanceof RegExp) return new RegExp(value);
    // 判断是不是一个时间实例
    if(value instanceof Date) return new Date(value);
    // 我要判断value是对象还是数组！ 如果是对象，就产生对象！ 如果是数组，就产生数组！
    let obj = new value.constructor;
    for(let key in value){
        // 看一看当前的值是不是一个对象！
        obj[key] = deepClone(value[key]);
    }
    return obj;
};

let o = { name: {name: 'wudandan'}}
let r = deepClone(o);
o.name.name = 123;  
console.log(r);   // { name: { name: 'wudandan' } }。  o的值改变了，但是r没有改变！实现了深拷贝！
