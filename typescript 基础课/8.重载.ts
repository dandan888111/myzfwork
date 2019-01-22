

/**
 * 函数的重载
 * Java里面的重载，是指两个或两个以上的函数，参数的个数和类型不一样
 * TS中的函数重载
 */

// function attr(key:string) {}
// function attr(key:number) {}
// 上面2句话，是java里面是不会报错的！！！


// 参数类型只能是定义的之一！！！
function attr1(val:string):void;
function attr1(val:number):void;
function attr1(val:boolean):void;
function attr1(val:string|number|boolean):void{
    console.log(val)
};
attr1('wudandan');
attr1(10);
attr1(true); // 上面没有声明boolean的时候，这行会报错的哦 


// 参数类型可以是任意类型！！
function attr2(val:any):void{
    console.log(val)
};
attr2(true);

function parse(str:string):any|never{   // 返回任意类型，或者抛出异常
    return JSON.parse(str);
}
let obj = parse('{"name":"wudandan"}');
console.log(obj);  