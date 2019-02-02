

console.log(window.$);

// 引入了webpack.ProvidePlugin插件，表示可以共享index里的$哦
// 如果不使用插件，就会报错 未定义
// 这叫 跨模块使用