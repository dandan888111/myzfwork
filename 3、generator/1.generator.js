

// generator 生成器 => 迭代器  
let path = require('path');
// path.resolve(__dirname, 'name.txt')


function sum(){
    // Symbol.iterator 代表的是迭代器函数
    // 返回的就是一个迭代器 ，迭代器 是一个对象 对象上需要有一个next方法
    // 会默认调用next方法，next方法默认返回一个对象 对象需要包含两个属性 一个叫value 另一个叫done
    let arr = [...{
        0: 1, 1: 2, 2: 3, length: 3, [Symbol.iterator]: function () {
            let that = this;
            let len = 0;
            return {  // 迭代器c
                next() {
                    return { done: len == that.length, value: that[len++] }
                }
            }
        }
    }];
    console.log(arr);
}
sum(1,2,3,4,5);


// generator 他又自己的写法
// koa1.0 generator X  async + await
function * fn() { // * 可以配合yield 来使用 碰到yeild就暂停执行
    yield 1;
    yield 2;
    yield 3;
    yield 4
    return 3;
}
let it = fn();
let done = false;
do {
    let r = it.next();
    done = r.done
    console.log(r.value);
} while (!done)



// [...不能转化类数组没用Symbol.iterator方法]
let arr2 = [...{
    0: 1, 1: 2, 2: 3, length: 3, [Symbol.iterator]: function * () {
        let len = this.length;
        let i = 0;
        while (i != len) {
            yield this[i++];
        }
    }
}];
console.log(arr2);

function * read() {
    let a = yield 1;
    console.log(a);
    let b = yield 2;
    console.log(b);
    return 3;
}
// let it = read();
// let {value,done} = it.next();  // next的参数是yield的返回值，第一个next传递参数是没有意义的
// console.log(value,done);
// it.next('hello');
// it.next('world');


let fs = require('mz/fs');
function * read(){
    let content = yield fs.readFile(path.resolve(__dirname, 'name.txt'), 'utf8');
    let r = yield fs.readFile(path.resolve(__dirname, content), 'utf8');
    return r;
}

let it2 = read();
let {value,done2} = it2.next();
value.then(function(data){
    let {value} = it2.next(data);
    value.then(function(data){
        let {value,done2} = it2.next(data);
        if(done2){
            console.log(value);
        }
    })
})



// let co = require('co');
// co(read()).then(function(data){
//     console.log(data);
// })




