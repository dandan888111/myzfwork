let fs = require('mz/fs');
let path = require('path');

async function read() {  // 用async方法修饰的会返回一个promise
    try{
        let content = await fs.readFile(path.resolve(__dirname, 'name.txt'), 'utf8');
        let r = await fs.readFile(path.resolve(__dirname, content), 'utf8');
        let d = await 100;
        console.log(d);
        return r;
    }catch(e){
        console.log(e);
    }
}

// async + await = generator + co
read().then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err)
})


// 我希望2个功能同时执行，咋办呢？
// name 和 age 同时执行！
async function read1() {
    let content = await fs.readFile(path.resolve(__dirname, 'name.txt'), 'utf8');
    console.log(content);
}
async function read2() {
    let content = await fs.readFile(path.resolve(__dirname, 'age.txt'), 'utf8');
    console.log(content);
}

async function readAll(){
    let all = await Promise.all([read1(), read2()]);
    console.log(all);
}
readAll();
