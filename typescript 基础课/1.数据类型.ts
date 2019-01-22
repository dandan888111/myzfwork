/**
 * 数据类型
 * boolean 布尔型
 * number  数字型
 * tuple   元祖类型 是数组类型中的一种
 * enum    枚举类型
 * 
 */

 // 要求是：要写变量名+类型名

 // 布尔
let isMarried:boolean = true;

// 数字
let age:number = 10;

// 字符串
let firstname:string = '张';

// 下面几种定义数组的方法是一样的
let hobbies:string[] = ['smoking','drinking','haire']; 
let numbers:Array<number> = [4,5,6]
let students:Array<object> = [{name: 'zfpx1'},{name: 'zfpx2'}];
let arr1:Array<string|number|boolean> = ['hello', 9];   // <> 这里面只能放一个参数，只能用 | (或)
let arr2:Array<any> = ['hello', 9];   // any 随便写，没有任何要求了


// 元祖类型, 是数组类型中的一种, 长度和类型必须与定义的一致
let fullname:[string,string,number] = ['张', '三', 20];




















