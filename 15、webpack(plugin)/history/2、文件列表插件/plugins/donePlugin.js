// https://webpack.docschina.org/api/compiler-hooks/#%E7%9B%B8%E5%85%B3%E9%92%A9%E5%AD%90

class donePlugin{
    apply(compiler){
        //console.log(1);
        // 第一个参数一般是自己的名字，第二个参数是一个回调
        compiler.hooks.done.tap('donePlugin', (stats) => {
            //console.log('编译完成~~~~~')
        })
    }
}

module.exports = donePlugin