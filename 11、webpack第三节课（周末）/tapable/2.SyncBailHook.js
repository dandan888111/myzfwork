// let {SyncBailHook} = require('tapable');
class SyncBailHook {
  constructor(){
    this.tasks = [];
  }
  tap(name,callback){
    this.tasks.push(callback);
  }
  call(...args){
    let index = 0; let ret;
    do{
      let task = this.tasks[index++];
      ret = task(...args);
    }while(ret === undefined && index<this.task.length);
  }
}
let hook = new SyncBailHook(['person']); // 发布订阅

hook.tap('第一件事吃饭',function (data) {
  console.log('吃饭', data);
  return false;
}); // 绑定方法 订阅方法

hook.tap('第二件睡觉', function (data) {
  console.log('睡觉')
});
hook.call('我');