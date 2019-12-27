"use strict";

var _chalk = _interopRequireDefault(require("chalk"));

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Animal =
/*#__PURE__*/
function () {
  function Animal(name, age) {
    _classCallCheck(this, Animal);

    this.name = name;
    this.age = age;
  }

  _createClass(Animal, [{
    key: "greet",
    value: function greet() {
      console.log("\u3053\u3093\u306B\u3061\u306F\uFF01".concat(this.name, "\u3061\u3083\u3093\uFF01"));
    }
  }, {
    key: "info",
    value: function info() {
      this.greet();
      console.log("".concat(this.name, "\u3061\u3083\u3093\u306E\u5E74\u9F62\u306F").concat(cat.age, "\u3067\u3059"));
    }
  }]);

  return Animal;
}();

var Cat =
/*#__PURE__*/
function (_Animal) {
  _inherits(Cat, _Animal);

  function Cat() {
    _classCallCheck(this, Cat);

    return _possibleConstructorReturn(this, _getPrototypeOf(Cat).apply(this, arguments));
  }

  _createClass(Cat, [{
    key: "info",
    //construcorをAnimalクラスのものに追加
    value: function info() {
      this.greet();
      console.log(_chalk["default"].yellow("".concat(this.name, "\u3061\u3083\u3093\u306E\u5E74\u9F62\u306F").concat(this.age, "\u624D\u3067\u3059")));
      var humanAge = this.getHumanAge();
      console.log(_chalk["default"].bgCyan("\u4EBA\u9593\u5E74\u9F62\u3067".concat(humanAge, "\u624D\u3067\u3059")));
    } // 人間年齢の計算

  }, {
    key: "getHumanAge",
    value: function getHumanAge() {
      return 24 + (this.age - 2) * 4;
    }
  }]);

  return Cat;
}(Animal);

var name = _readlineSync["default"].question("名前を入力してください:");

var age = _readlineSync["default"].question("ねこの年齢を入力してください:"); // 名前と年齢の入力部分


var cat = new Cat(name, age);
console.log("---------");
cat.info();