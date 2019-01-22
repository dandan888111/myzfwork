"use strict";
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var p1 = new Person('wudandan', 30);
console.log(p1);
