
// generic type


// 参数的泛型
function calculate<T>(value:T):T{   // 你传了什么，就返回什么
    return value;
}
console.log(calculate<number>(1));


// 类的泛型 如何使用呢？

function calculate2<T>(value:T):T{   // 你传了什么，就返回什么
    return value;
}
console.log(calculate2<number>(1));

class MyArray<T>{
    private list:T[] = [];  // 定义了一个私有的属性list
    add(value:T) {
        this.list.push(value);
    }
    max():T{    // 求最大值
        let ret = this.list[0];
        for(let i = 1; i< this.list.length; i++) {
            if(this.list[i] > ret){
                ret = this.list[i];
            }
        }
        return ret;
    }
}

let arr6 = new MyArray();
arr6.add(6);
arr6.add(7);
arr6.add(8);
console.log(arr6.max());    // 打印出8了哦