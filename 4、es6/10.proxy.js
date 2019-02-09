// proxy + reflect  Object.defineProperty get set

let obj = [1,2,3];
// 当更改name属性的时候触发 一个update方法
function update() {
    console.log('更新')
}
let proxy = new Proxy(obj,{ // [1,2,3,4] = length=4
    set(target,property,value){
        // 长度更新了 不需要调用 update方法
        if (property == 'length') return true;
        update();
        return Reflect.set(target, property, value);
    },
    get(target,property){ // Reflect
        return Reflect.get(target, property)
    }
});
proxy.push(3);
console.log(obj);