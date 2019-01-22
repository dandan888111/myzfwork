// void

function greeting(name:string):void{ // :void表示没有返回值
    console.log('hello',name);
    // return 'ok' 上面设置了:void，这样写就会报错哦
}
greeting('wudandan');

function greeting1(name:string):string{  
    console.log('hello',name);
    return 'ok';  // 设置了:string，b表示返回值是字符串的哦 
}
greeting1('wudandan');




// object 类型
let yy:object = {name: 'wudandan'};
console.log(yy)


// never 永远不会出现的值。用的不是很多
let xx:never;   
xx = (()=> {
    throw new Error('Wrong')
})();

