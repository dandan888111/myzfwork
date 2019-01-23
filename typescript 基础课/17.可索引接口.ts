

// 对数组对象的约束
interface userInterface{
    [index:number]: string  // 表示：索引是数字，值是字符串
}

let arr:userInterface = ['wudandan1', 'wudandan2'];
console.log(arr);