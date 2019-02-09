// 数据的响应变化 双向绑定 数据劫持 + 观察者模式 + 模板的编译

function update() {
    console.log('数据更新了！');
}

let school = {name: 'wdd1', age: {age: 30}};    
// 把这样的定义方式 改成 object.defineProperty的方式

function observer (obj) {
    if(typeof obj !== 'object') return obj; // 这个东西不需要观察
    for( let key in obj ){
        defineReactive( obj, key, obj[key] );

    }
}

function defineReactive(obj,key,value) {    // 闭包！
    observer(value);    // 重复递归解析对象
    Object.defineProperty(obj, key, {
        get () {
            return value
        },
        set (v) {
            if(v != value){    // 值没变化就不更新
                observer(v);    // 保证设置的属性也可以被观察！
                update();
                value = v;
            } 
        }
    });
}

observer(school);
school.age = {age: 50};
school.age.age = 1000;
console.log(school.age);   















