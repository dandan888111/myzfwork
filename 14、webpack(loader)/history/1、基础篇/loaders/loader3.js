
// loader就是一个普通的函数

function loader(source) {   // loader的参数 就是迭代的
    console.log('loader3~~~')
    return 'hello'
}
loader.pitch = function () {
    console.log('loader3-pitch')
}

module.exports = loader