let {AsyncParallelHook} = require('tapable');

// 绑定方法有 tap -> call  
// tap -> callAysnc  tapAsync -> callAsync  tapPromise-> callAsync
// class AsyncParallelHook{
//   constructor() {
//     this.tasks = [];
//   }
//   tapAsync(name, callback) {
//     this.tasks.push(callback);
//   }
//   callAsync(callback){
//     let index =0 
//     let done = ()=>{
//       index++;
//       if(index === this.tasks.length){
//         callback();
//       }
//     }
//     this.tasks.forEach(task=>{
//       task(done);
//     })
//   }
// }

let hook = new AsyncParallelHook();

hook.tapPromise('第一件事',function () {
 return new Promise((resolve,reject)=>{
   setTimeout(() => {
     console.log('吃饭');
     resolve();
   }, 1000);
 })
});
hook.tapPromise('第二件事', function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('视角');
      resolve();
    }, 2000);
  })
});
hook.callAsync(function () {
  console.log('end')
});

// 自己尝试一下其他的钩子 模拟一下原理