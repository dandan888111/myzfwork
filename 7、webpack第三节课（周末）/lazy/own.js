//  在window上增加了webpackJsonp方法
// window['webpackJsonp'].push = webpackJsonpCallback;


var btn = document.createElement('button');
btn.innerHTML = '点我';
document.body.appendChild(btn);
btn.addEventListener('click', function () {
  // 把新增加的模块 放到了modules对象中
  __webpack_require__.e(0).then(
    // 继续require ("./src/use.js")
    // 把结果定义在 当前的default属性
    __webpack_require__.t.bind(null, "./src/use.js", 7)
  ).then(function (data) { // 最终可以拿到结果
    console.log(data.default);
  }); 
});
