let xhr = new XMLHttpRequest();

// 不写 http://***,请求的是8080端口
// ajax 先访问8080端口  之后把代理转发到 3000端口上

xhr.open('get','/api/user', true);
xhr.onload = function(){
    window.root.innerHTML = xhr.responseText;
}
xhr.send();

// xhr.open('get','/api/app', true);
// xhr.onload = function(){
//     window.root.innerHTML = xhr.responseText;
// }
