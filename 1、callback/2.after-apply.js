// ajax=> 异步的
// 有两个接口 并发请求数据 
// ajax1 拿到用户的名字  3s
// ajax2 拿到用户的年龄  3s

let fs = require('fs'); // fs.readFile
let path = require('path');


function after(times, fn) {
    let arr = [];
    return function(data) { // 闭包 -》 回调函数
        arr.push(data);
        if(--times === 0 ){
            fn(arr);
        }
    }
}

let fn = after(2, function(data){
    console.log(data);
})


// 这个地方，如果写成 fs.readFile('age.txt', **** ，默认执行的就是myzfwork目录里的age.txt了，
// 然而我不想这样，我只想执行当前目录里面的age.txt
// 这时候就需要这样写：path.resolve(__dirname, 'age.txt')

fs.readFile(path.resolve(__dirname, 'age.txt'), 'utf8', function(err, data) {
    fn(data);
});
fs.readFile(path.resolve(__dirname, 'name.txt'), 'utf8', function(err, data) {
    fn(data);
});

