
// let root = document.getElementById('root');
// root.style.color = 'red';
// 这样用会提示语法错误哦，root可能会是undefined或者null，如果改成any就万事大吉啦！

// any 任何类型 任何值 放弃了检查
let root:any = document.getElementById('root');
root.style.color = 'red';


let a:any = 1;
a = 'zfpx';