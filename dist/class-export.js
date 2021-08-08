"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Person = function () {
  function Person() {
    (0, _classCallCheck2["default"])(this, Person);
  }

  (0, _createClass2["default"])(Person, [{
    key: "speak",
    value: function () {
      var _speak = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", "Hello World!");

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function speak() {
        return _speak.apply(this, arguments);
      }

      return speak;
    }()
  }]);
  return Person;
}();

exports.Person = Person;