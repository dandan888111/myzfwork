

let btn = document.createElement('button');
btn.innerHTML = '点我';

document.body.appendChild(btn);

btn.addEventListener('click', function() {
    // webpack提供的语法，动态引入
    import('./use.js').then(data =>{
        console.log(data.default);
    });
})
