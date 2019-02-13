let xhr = new XMLHttpRequest();

// 不写 http://***,请求的是8080端口
// ajax 先访问8080端口  之后把代理转发到 3000端口上

let url;
// 环境变量 development
console.log(NODE_ENV);
console.log(EXPRESSION);
console.log(LOG);
console.log(BOOL);

if(NODE_ENV==='development'){
  url = '/user'
}else{
  url="http://zf.cn/api/user"
}


xhr.open('get', url, true);
xhr.onload = function(){
    window.root.innerHTML = xhr.responseText;
}
xhr.send();
