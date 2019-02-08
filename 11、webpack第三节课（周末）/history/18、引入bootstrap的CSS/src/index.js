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


// 2. 引入一次jquery，所有的模块都能使用jquery/
// 使用 ProvidePlugin 插件，html里注释cdn引入的js
// import $ from 'jquery';  
// import './a.js';
// console.log(window.$)    // 不会挂在window上哦。所以这里是取不到的



//////////////////////////////！！！分割线！！！/////////////////////////////////////////////

// 3、引入一次后将其暴露出去
// loader => pre inlineLoader normalLoader  postLoader

// import 'expose-loader?$!jquery';  这句话叫行内。行外，就是把规则挪到了webpack.config里了
import 'jquery'; 
import './a.js';


//import '!!style-loader!css-load./index.css'


// import 'bootstrap';  这句话，默认引入的是bootstrap的JS文件
import 'bootstrap/dist/css/bootstrap.css';  //这样写上强制路径也是可以的
// 2个叹号表示不再匹配config里的loader，一定要加2个叹号！
// 这个叫行内loader，一般没人这么写咯
// import '!!style-loader!css-load./index.css'
// console.log($)

