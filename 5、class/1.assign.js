// jq $.extend

let target = {};
let school = {name: 'wdd'};
let age = {age: 30};

// 把school和age合并到target上！
// 这个写法已经渐渐弱化了。因为有了 ...的出现
Object.assign(target, school, age); 
console.log( target );

// 还可以这样写的哦！
// target = Object.assign(school, age); 

