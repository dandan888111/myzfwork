"use strict";

// 函数定义参数类型
function greeting2(name:string):void{
    console.log('hello',name);
}
greeting2('wudandan');



// ts里，形参和实参的数据类型要完全一样
// age?:number  问号表示可有可无，可选参数
// ！！！可选参数必须放在最后一个！！！
function greeting3(name:string, age:number):void{
    console.log('hello',name, age);
}
greeting3('wudandan', 10);




// 默认参数
function ajax(method:string='GET',url:string){
    console.log(method, url);
}
ajax('POST','/user');

// 如果method不传，就要放在后面噢
function ajax2(url:string, method:string='GET'){
    console.log(method, url);
}
ajax2('/user');



// 剩余参数
function sum2(...numbers:number[]) {
    return numbers.reduce( (val, item)=> {
        return val + item
    })
}
let sum1 = sum2(1,2,3,4,5);
console.log(sum1);


