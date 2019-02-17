
// loader就是一个普通的函数

function loader(source) {   // loader的参数 就是迭代的

    console.log('loader2~~~')
    return source

}
loader.pitch = function () {
    console.log('loader2-pitch')
    return 'xxx'
}
module.exports = loader