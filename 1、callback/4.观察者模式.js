// 小宝宝状态发生改变，我和我媳妇都要发生改变
// 比如小宝宝一哭，就要换纸尿裤！

// 被观察者的类
function Subject() {    // 我家宝宝的类，被观察者
    this.observers = [];
    this.state = '开心';
}

Subject.prototype.attach = function(observer) {
    this.observers.push(observer);
}
Subject.prototype.setState = function(state) {
    this.state = state;
    this.notify();  // 通知观察者
}
Subject.prototype.notify =  function() {
    // 通知所有的观察者
    this.observers.forEach(function(observer){
        observer.update();
    })
}

// 观察者的类
function Observer(name, target) {   // 我， 观察者  一半会有一个方法
    this.name = name;
    this.target = target;
}
Observer.prototype.update = function() {    // 更新方法
    console.log(`通知：${this.name} 小宝宝当前的状态是 ${this.target.state}`);
}

let subject = new Subject();

let observer1 = new Observer('我',subject);    // 我观察目标！
let observer2 = new Observer('我媳妇',subject);    // 我媳妇也观察目标！

// 给目标添加观察者。把我和我媳妇绑定给小宝宝

subject.attach(observer1);
subject.attach(observer2);
subject.setState('不开心了');



// promise 周边的promise 库 angular Q
// jquery axios fetch 
// 1) 同步多个异步的请求结果
// 2) 异步不支持try catch
// 3) 多个异步 如果有顺序关系 可能会导致回调地狱
// 4) 异步没有return



