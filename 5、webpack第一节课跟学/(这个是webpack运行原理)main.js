(function (modules) {
  var installedModules = {};
  function __webpack_require__(moduleId) { // 默认加载主入口
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = installedModules[moduleId] = {
      i: moduleId, // 每个模块都有自己的名字
      l: false,
      exports: {} // 导出对象
    };
    // 让主模块执行 第一个参数是this指向 第二个参数是当前的模块 第三个是导出对象
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); // require方法
    module.l = true;
    return module.exports;
  }
  return __webpack_require__(__webpack_require__.s = "./src/index.js");
})
  ({
    "./src/a.js":
      (function (module, exports) {
        eval("module.exports = 'hello zf'");
      }),
    "./src/index.js":
      (function (module, exports, __webpack_require__) {
        eval("let str = __webpack_require__(/*! ./a */ \"./src/a.js\");\r\n\r\nconsole.log(str);");
      })
  });


// 1) webpack 打包后的结果是一个自执行的函数
// 2) modules 参数是一个对象 对象的key是一个路径 值就是文件的内容
// 3) __webpack_require__ => require
// 自己实现了commonjs 规范