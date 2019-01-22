// 定义了一个枚举类型的值，性别，里面有2个选择，GIRL BOY
// 事先考虑某一个变量的所有的可能的值

// enum Gender{
//     GIRL,
//     BOY
// }

enum Gender{
    GIRL = '女生',
    BOY = '男生'
}

console.log(`邬丹丹是${Gender.GIRL}, 杨浚弘是${Gender.BOY}`);  //如果不赋值，打印出来的就是索引哦。如：邬丹丹是0, 杨浚弘是1。 

// 购物状态
enum OrderStatus{
    WaitForPay = '等待付款',
    WaitForSend = '等待发货',
    Sended = '已发货',
    Signed = '已签收'
}
