// vue实现 数组的更新也触发 视图更新
// push slice pop shifit
// 面向切片

function update() {
    console.log('数据更新了！');
}

//let push = Array.prototype.push;
Array.prototype.push = function () {
    update();
}
[1,2,3].push(3)
  // proxy + reflect 兼容性
  // arrowFn
  // template
  // map / set
  // class => babel 装饰器 es7
  // Symbol 
  
  // promise gernarator +async+await
  
  // node => commonjs
  
  // es6 写一版promise 