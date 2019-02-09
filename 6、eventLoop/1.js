

// 宏任务
setTimeout( ()=>{
    //console.log('定时器1')
},0)


// 微任务
Promise.resolve().then(data => {
    //console.log('p3');
})
Promise.resolve().then(data => {
    //console.log('p4');
})


// 浏览器中的执行结果是 p1 定时器1 p2 定时器2



// then < setTimeout
// 浏览器中的事件环 会先执行主栈中的代码执行后会清空微任务队列-> 取一个宏任务执行 -> 在去清空微任务队列-> 在去取第二个

// 宏任务 有哪些  微任务有哪些
// 事件环
// microtask 微任务  Promise MutationOberserve MessageChannel (nextTick)
// macrotask 宏任务 setImmediate(IE下才存在) setTimeout 

// 1) node事件环
// 2) node的基础 + commonjs 实现 fs基础用法






