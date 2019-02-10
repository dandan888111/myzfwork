// 浏览器中直接访问 this => Wwindow

// node里的this => {}, node为了实现模块化，用了commonjs的规范

// repl read-eval-print loop
// 在当前node执行环境下执行文件，默认文件外面加了一个闭包
// console.log(this);  // {}

// console.log(global);
// process 进程
// Buffer 缓存 处理二进制  放到后面
// clearImmediate setImmediate 宏任务
// setTimeout setInterval

// console.dir(global, {showHidden: true});    // 打印出隐藏属性


// process 进程
// console.log(process);
// console.log(Object.keys(process));

// argv 允许代码时传入的参数
// console.log(process.argv)
// console.log(process.argv.slice(2));  // 可以用作执行代码时获取传入的参数
// 在git bash里运行命令执行：node 1.global.js --port 3000 --config xxx.js
// {port: 3000, config: xxx.js}
// [, '--port', '3000', '--config', 'xxx.js'] 
let program = process.argv.slice(2).reduce( (memo,current,index,arr)=>{
    if(current.includes('--')){
        memo[current.slice(2)] = arr[index+1];
    }
    return memo;
},{});
// console.log(program.port);  // 接收参数

console.log(process.env.NODE_ENV);

// env 环境变量 
let url = '';   // 可以自己定义环境变量。只有在当前窗口下生效, 会挂载在process.env对象上 => webpackDefinePlugin
if(process.env.NODE_ENV === 'development'){
    url = 'localhost'
}else{
    url = 'zfpx.cn'
}
console.log(process.env.NODE_ENV);
console.log(url);
// 使用命令：export NODE_ENV=development 设置环境变量！这样就OK了！
// 使用命令：node 1.global.js 查看代码效果！在code runner里是不会有效果的！要到命令行里运行！



// cwd current working directory 当前工作目录
console.log(process.cwd());     // http-server 在哪执行命令就以哪个文件夹下打开目录
// code runner 的结果，有bug，f:\dandan\myzfwork
// git bash里执行：node 1.global.js 的结果，F:\dandan\myzfwork\7、node



// chdir 改变目录 ，没啥用， 在code runner 里运行可以看到效果！
// process.chdir('6、eventLoop')
// console.log(process.cwd()); 


// nextTick 下一个队列  微任务 setImmediate是宏任务
Promise.resolve().then( () => {
    console.log('p')
});
process.nextTick( () => {
    console.log('n')
})
// 先n 后p



// pid 当前运行的进程的唯一标识






