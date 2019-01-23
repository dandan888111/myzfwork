
// 接口！！！！
// 接口是一种规范的定义，定义了行为和动作的规范
// 接口定义了某些类必须遵守的规范
// 接口不关心类的内部状态数据，也不关心细节
// 类似与抽象类，还增加了属性、函数等类型

/**
 * 接口 本质上是一种约束
 * 约束对象
 */

// function getUserInfo(user:{name: string, age: number}):void {
//     console.log(`${user.name} ${user.age}`)
// }
// getUserInfo({name:'wudandan', age: 30});
// 可以改成成下面这样哦，采用接口，方便多个地方共有



// 这里定义了一个接口哦
interface userInterFace{
    name: string,
    age: number,
    home?: string,   // 有？号哦，代表可传可不传的噢
    height?: number
}
function getUserInfo(user: userInterFace):void {
    console.log(`${user.name} ${user.age} ${user.home}`)
}
function getVipInfo(user: userInterFace):void {
    console.log(`${user.name} ${user.age}`)
}

getUserInfo({name: 'wudandan', age: 30, home: 'shaoyang'})
getVipInfo({name: 'wudandan', age: 30, home: 'shaoyang'})




