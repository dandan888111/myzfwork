// let {SyncHook} = require('tapable');
class SyncHook {
  constructor(){
    this.tasks = [];
  }
  tap(name,callback){
    this.tasks.push(callback);
  }
  call(...args){
    this.tasks.forEach(task=>{
      task(...args)
    })
  }
}
let hook = new SyncHook(['person']); // 发布订阅

hook.tap('第一件事吃饭',function (data) {
  console.log('吃饭', data)
}); // 绑定方法 订阅方法

hook.tap('第二件睡觉', function (data) {
  console.log('睡觉')
});
hook.call('我');