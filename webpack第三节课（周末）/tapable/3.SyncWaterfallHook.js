// let {SyncWaterfallHook} = require('tapable');
class SyncWaterfallHook {
  constructor(){
    this.tasks = [];
  }
  tap(name,callback){
    this.tasks.push(callback);
  }
  call(...args){
    let first = this.tasks.shift();
    this.tasks.reduce((a,b)=>{
      return b(a);
    }, first(...args))
    
  }
}
let hook = new SyncWaterfallHook(['person']); // 发布订阅

hook.tap('第一件事吃饭',function (data) {
  console.log('吃饭', data);
  return 'hello';
}); // 绑定方法 订阅方法

hook.tap('第二件睡觉', function (data) {
  console.log('睡觉', data);
  return 'welcome'
});
hook.tap('第三件洗澡', function (data) {
  console.log('洗澡', data)
});
hook.call('我');