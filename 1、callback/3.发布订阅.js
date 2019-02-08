// “发布”  “订阅”  redux 
// 观察者模式 混在一起

let path = require('path');
let fs = require('fs'); // fs.readFile

function Event() {  // 核心事件 中介
    this.events = [];

}
Event.prototype.on = function(fn) { // 订阅
    this.events.push(fn);
}
Event.prototype.emit = function(data) { // 发布
    this.events.forEach(function(fn){
        fn(data);
    })
}


let e = new Event();
let arr = [];
e.on(function(data){
    arr.push(data);
    if(arr.length === 2){
        console.log(arr);
    }
})

fs.readFile(path.resolve(__dirname, 'age.txt'), 'utf8', function(err, data) {
    e.emit(data);
});
fs.readFile(path.resolve(__dirname, 'name.txt'), 'utf8', function(err, data) {
    e.emit(data);
});

