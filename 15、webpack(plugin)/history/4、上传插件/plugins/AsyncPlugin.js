class AsyncPlugin{
    apply(compiler){
        //console.log(2);
        compiler.hooks.emit.tapAsync('AsyncPlugin', (compliation, cb) => {
            setTimeout(() => {
                //console.log('文件发射出来啦，等一等哦');
                cb()
            }, 1000);
        })
        compiler.hooks.emit.tapPromise('AsyncPlugin', (compliation) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    //console.log('文件发射出来啦，等一等哦');
                    resolve()
                }, 1000);
            })
        })
    }
}

module.exports = AsyncPlugin