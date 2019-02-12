// 引用图片的方式

// js 动态创建js图片
// background: url(img);
// <img src="" />

require('./index.less');
// let img = new Image();
// img.src = "./logo.png";
// 图片不能写字符串，不能这样引入呢！要先require进去哦


let logo = require('./logo.png');  
// file-loader 可以加载这个图片，把这个图片拷贝一份
// 这个名字会用hash算法 算出一个名字：133254.png

let  fn = () => {
    console.log('log')
};
fn();

let img = new Image();
img.src = logo;
document.body.appendChild(img);


 


