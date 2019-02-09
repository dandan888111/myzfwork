// nextTick 下一个队列  微任务 setImmediate是宏任务
// Promise.resolve().then(data => {
//     console.log('p1');
//     setTimeout(() => {
//       console.log('定时器2')
//     }, 0);
// })

// setTimeout(() => {
//     console.log('定时器1')
//     Promise.resolve().then(data => {
//       console.log('p2');
//     })
// }, 0); 
// 执行结果会有差异！！

// node的eventLoop
// 浏览器 先微任务 后取一个宏任务，不停的动作
// node里面划分了很多队列



// 0 他不是真的。当代码执行完毕后，如果时间到达了，会执行定时器！
// 可能如果时间没到达就执行 setImmediate
// setTimeout(() => {
//     console.log('start')
// }, 0);
// setImmediate( () => {
//     console.log('immediate')
// })

Promise.resolve().then(data => {
    console.log('p1');
    setTimeout(() => {
        console.log('定时器2')
    }, 10);
})
setTimeout(() => {
    console.log('定时器1')
    Promise.resolve().then(data => {
        console.log('p2');
    })
}, 0);
  
// 每次都会把当前队列清空后 再执行下一个队列(切换到下一个队列时会执行微任务)
  
let fs = require('fs');
fs.readFile('./name.txt','utf8',function () { // 因为poll阶段下一个就是check阶段
    setTimeout(() => {
        console.log('xxxx');
    }, 0);
    setImmediate(()=>{
        console.log('immediate');
    });
})