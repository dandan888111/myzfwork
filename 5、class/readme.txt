1）reduce原理
2）类
3）symbol
4）模板字符串
5）浏览器事件环
6）node基础
7）node事件环
8）node模块 核心模块
9）实现commonjs规范
10）npm的使用 全局安装本地安装 包子的发布

## promise + ganerator + async+await
- es6 相关
- let & const
- 解构赋值 {...} 浅拷贝  Object.assign 深拷贝 WeakMap
- set map -> WeakMap WeakSet  交 并 差  for(let xxx of obj){} symbol.iterator
- Object.keys Object.values Object.entries  es5的
- Object.defineProperty vue(2.0) Proxy + reflect
- 箭头函数 没有this 和 arguments 箭头函数中没有this从而解决了this问题
- reduce reduceRight,map,forEach compose  es5 find findIndex
- includes es7
- some,every,filter....


## 解析babel
```
npm install @babel/cli 命令行工具 @babel/core babel的核心包会配置转化的规则 @babel/preset-env 可以把es6 转化成es5
```

```
把 3.es6-class test.js并且编译出来
npx babel 3.es6-class.js -o test.js 
```



## 解析类属性
```
@babel/plugin-proposal-class-properties
```