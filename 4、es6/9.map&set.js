// map set  特点不能放重复的项

// 去重

let set = new Set([4,5,6]);  // 把key 和value 弄成一样的
console.log(set);
// set.forEach((s,key)=>{
//     console.log(s,key)
// });

for (let value of set.keys()){
    console.log(value);
}
for (let value of set.values()) {
    console.log(value);
}
for (let value of set.entries()) { // {[4:4],[5:5]}
    console.log(value);
}
// [Set Iterator] 内部自带 Symbol.iterator

// es5的方法  
let keys = Object.keys({ name: "zf", age: 10 });
console.log(keys)
let values = Object.values({ name: "zf", age: 10 });
console.log(values)
let entries = Object.entries({ name: "zf", age: 10 });
console.log(entries);


// 求 数组的并集  交集  差集
let a = [1,2,3,3,4,4];
let b = [4,5,6,6];

function union(a,b) { // 并集
    let newArr = [...new Set([...a,...b])];
    return newArr
}
console.log('union', union(a,b));

function insertion(a,b) {   // 交集
    a = new Set(a);         // [1,2,3,4]
    b = new Set(b);         // 数组中的filter方法 声明式的方法
    return [...a].filter(function (item) { // 如果返回true 表示当前项留下
        return b.has(item);
    })
}
console.log('insertion', insertion(a, b));

function difference(a, b) {         // 差集
    a = new Set(a);                 // [1,2,3,4]
    b = new Set(b);                 // 数组中的filter方法 声明式的方法
    return [...a].filter(function (item) { // 如果返回true 表示当前项留下
        return !b.has(item);
    })
}
console.log('difference', difference(a, b));

let map = new Map();
map.set('a','xxx');
map.set('a','xxx'); // 如果key 是对象 会出现两个的情况 因为对象永远不相等
map.forEach((item, key)=>{
    console.log(item,key)
});

// WeakSet  WeakMap
// 弱链接  里面只能放 对象或者null
let wm = new WeakMap(); // v8引擎垃圾回收
let x = { a: 1 }
let y = {a:2}
wm.set(x, y);
x = null
y = null;
