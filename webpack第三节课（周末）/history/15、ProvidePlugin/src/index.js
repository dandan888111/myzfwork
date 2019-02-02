// import $ from 'jquery';     
// 只是引入的时候感觉好看，为了有代码提示而已。
// 因为html里已经引入了CND的jquery，我就不需要把这个再重新打包了。否则会多300多KB哦
// 这时候就需要到webpack.config里去增加 externals 的配置
 
// 其他的插件库 window.jquery
// 如何将$暴露在全局上
// 1、引用cdn的地址 直接在html里写死链接，如：https://cdn.bootcss.com/jquery/3.3.1/core.js
//  采用这种方式，直接window.$就可以取到jquery对象咯，都不需要这样引入了：import juqery from 'jquery';
// external 外部的变量不需要打包  external表示此包不需要进行打包了， 说明是全局的



// console.log(window.$ == $); 
// 如果不配置external，这个结果是false
// 如果配置external，这个结果是true


//////////////////////////////！！！分割线！！！/////////////////////////////////////////////


// 2. 引入一次jquery，所有的模块都能使用jquery
import $ from 'jquery';  
import './a.js';