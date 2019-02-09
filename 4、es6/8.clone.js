
function deepClone(value,hash = new WeakMap) { // null
    if (value == null) return value;
    if (typeof value !== 'object') return value;
    if (value instanceof RegExp) return new RegExp(value);
    if (value instanceof Date) return new Date(value);
    if (hash.has(value)) return hash.get(value); // 如果当前map中已经有了，就把刚才拷贝出的结果直接返回
    let obj = new value.constructor;
    // 把生成的对象 放到map中
    hash.set( value,obj );
    for (let key in value) {
        obj[key] = deepClone(value[key], hash); // 看一看当前的值是不是一个对象
    }
    return obj;
}
let obj = { a: 1 }
obj['b'] = obj; // 默认有属性 循环引用

let r = deepClone(obj);
obj['b']  = 1;
console.log(r);
  
  