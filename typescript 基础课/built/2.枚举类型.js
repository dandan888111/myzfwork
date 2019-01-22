"use strict";
// 定义了一个枚举类型的值，性别，里面有2个选择，GIRL BOY
// 事先考虑某一个变量的所有的可能的值
// enum Gender{
//     GIRL,
//     BOY
// }
var Gender;
(function (Gender) {
    Gender["GIRL"] = "\u5973\u751F";
    Gender["BOY"] = "\u7537\u751F";
})(Gender || (Gender = {}));
console.log("\u90AC\u4E39\u4E39\u662F" + Gender.GIRL + ", \u6768\u6D5A\u5F18\u662F" + Gender.BOY); //如果不赋值，打印出来的就是索引哦。如：邬丹丹是0, 杨浚弘是1。 
// 购物状态
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["WaitForPay"] = "\u7B49\u5F85\u4ED8\u6B3E";
    OrderStatus["WaitForSend"] = "\u7B49\u5F85\u53D1\u8D27";
    OrderStatus["Sended"] = "\u5DF2\u53D1\u8D27";
    OrderStatus["Signed"] = "\u5DF2\u7B7E\u6536";
})(OrderStatus || (OrderStatus = {}));
