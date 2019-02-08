// let {SyncLoopHook} = require('tapable');
class SyncLoopHook {
  constructor(){
    this.tasks = [];
  }
  tap(name,callback){
    this.tasks.push(callback);
  }
  call(...args){
    this.tasks.forEach(task=>{
      let ret;
      do{
        ret = task(...args);
      } while (ret!=undefined);
    })
  }
}
let hook = new SyncLoopHook(['person']); // 发布订阅
let index = 0;
hook.tap('第一件事吃饭',function (data) {
  console.log('吃饭', data);
  if (++index != 2){
    return 'hello';
  }
}); // 绑定方法 订阅方法

hook.tap('第二件睡觉', function (data) {
  console.log('睡觉', data);
});
hook.tap('第三件洗澡', function (data) {
  console.log('洗澡', data)
});
hook.call('我');