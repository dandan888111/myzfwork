let path = require('path');
let vm = require('vm');
let fs = require('fs');

function Module(id) {
    this.id = id;
    this.exports = {};
}
Module._cache = {}
Module._extensions = {} // [.js,.json:]
function req(id){
    // 把路径转化成绝对路径, 如果没有后缀 需要依次增加.js .json .node 来尝试加载模块
    let absPath = path.resolve(__dirname, id); // 转化出一个绝对路径
    // 如果这个文件可以访问 说明存在 如果抛出异常说明文件不存在 不存在需要增加文件的后缀
    // fs.accessSync(absPath) 解决文件名查找的问题 如果没有 就依次增加.js .json
    // 缓存根据的是绝对路径 
    if(Module._cache[absPath]){ // 如果有缓存拿到的就是上一次返回的结果
        return Module._cache[absPath].exports;
    }
    let module = new Module(absPath); // 创建一个模块
    Module._cache[absPath] = module;
    // 尝试根据模块的后缀加载文件
    tryModuleLoad(module);
    return module.exports // 默认会返回module.exports对象
}


Module.wrapper = [
    '(function (exports, require, module, __filename, __dirname) { ',
    '\n});'
];

Module._extensions['.js'] = function(module){
    let content = fs.readFileSync(module.id, 'utf8');
    // 构建了一个匿名的函数字符串
    content = Module.wrapper[0] + content + Module.wrapper[1];
    let fn = vm.runInThisContext(content);
    fn.call(module.exports, exports, req, module);// module.exports = 'zf'
}

Module._extensions['.json'] = function(){}


function tryModuleLoad(module){     // 尝试加载这个模块
    let extension = path.extname(module.id) || '.js';   // 获取文件的扩展名
    // 根据js文件模块的加载策略加载模块
    Module._extensions[extension](module);
}

let str = req('./a.js');
str = req('./a.js');
console.log(str);


// 1) 我们在require上打了个断点 455-508行！
// 2) 每个模块都有一个require方法 Module.prototype.require
// 3)  Module._load 模块的加载
// 4） Module._resolveFilename 解析出文件的绝对路径
// 5） Module._cache 模块的缓存 如果有直接返回module.exports
// 6)  产生模块 new Module 模块上有两个重要的属性 一个是id 另一个是exports对象
// 7) 将模块放到缓存中
// 8） 尝试加载模块  require('./a.js') require('.json') require('.node')
// 9) Module._extensions 根据名字做对应的处理  读取文件
// 10)  Module.wrap 给内容包裹起来
// 11) runInthisContext
