"use strict";
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
var isMarried = true;
// 数字
var age = 10;
// 字符串
var firstname = '张';
// 下面几种定义数组的方法是一样的
var hobbies = ['smoking', 'drinking', 'haire'];
var numbers = [4, 5, 6];
var students = [{ name: 'zfpx1' }, { name: 'zfpx2' }];
var arr1 = ['hello', 9]; // <> 这里面只能放一个参数，只能用 | (或)
var arr2 = ['hello', 9]; // any 随便写，没有任何要求了
// 元祖类型, 是数组类型中的一种, 长度和类型必须与定义的一致
var fullname = ['张', '三', 20];
