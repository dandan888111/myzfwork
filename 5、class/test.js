"use strict";

var _class, _class2, _temp;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 在es6中 装饰器 类的属性 es7
var Animal =
/*#__PURE__*/
function () {
  function Animal(age) {
    _classCallCheck(this, Animal);

    this.type = '哺乳类';
    this.age = age;
  }

  _createClass(Animal, [{
    key: "drink",
    value: function drink() {
      console.log('喝牛奶');
    }
  }]);

  return Animal;
}(); // @log


var Cat = (_class = (_temp = _class2 =
/*#__PURE__*/
function (_Animal) {
  _inherits(Cat, _Animal);

  function Cat() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Cat);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Cat)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.a = 2;
    return _this;
  }

  _createClass(Cat, [{
    key: "say",
    // 在cat的实例上增加一个a属性
    value: function say() {
      console.log('say');
    }
  }]);

  return Cat;
}(Animal), _class2.b = 2, _temp), (_applyDecoratedDescriptor(_class.prototype, "say", [before], Object.getOwnPropertyDescriptor(_class.prototype, "say"), _class.prototype)), _class);
var c = new Cat(9); // console.log(c.age); // 9
// console.log(c.a);   // 1

console.log(Cat.b); // 2
// 1)类的装饰器 装饰 AOP  装饰器只能用于类  类的属性和类的方法
// function log(target) {  // target 类
//     target.xxx = 'hello';
// }
// console.log(Cat.xxx);
// 2) 类的属性
// function readonly(target, key, value){  // target 是类的原型
//     value.writable = false;
// }
// c.PI = 3.15;    // 报错。不可改写！

function before(target, key, descriptor) {
  // 
  var oldSay = descriptor.value;

  descriptor.value = function () {
    console.log('before');
    oldSay();
  };
}

c.say(); // 类中 
// 1) constructor  
// 2) 原型上的方法  
// 3) 静态方法   
// 4) 类的属性    
// 5) 装饰器
