

let school = {  // 对象的访问器 es5
    _n : '',
    get name() {
        console.log('你取值了!')
        return this._n;
    },
    set name(val) {
        console.log('你设置值了!')
        this._n = val;
    }
};
school.name = 123;
console.log(school.name);