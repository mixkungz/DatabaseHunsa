'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nav = require('./nav');

var _nav2 = _interopRequireDefault(_nav);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

var _head = require('./head');

var _head2 = _interopRequireDefault(_head);

var _carousel = require('./carousel');

var _carousel2 = _interopRequireDefault(_carousel);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _sweetalert = require('sweetalert2');

var _sweetalert2 = _interopRequireDefault(_sweetalert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/phachara/Desktop/Project/2017/Homework/DatabaseHunsa/components/layout.js';

exports.default = function (Component) {
    return function (_React$Component) {
        (0, _inherits3.default)(MyLayout, _React$Component);

        function MyLayout() {
            var _ref;

            var _temp, _this, _ret;

            (0, _classCallCheck3.default)(this, MyLayout);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MyLayout.__proto__ || (0, _getPrototypeOf2.default)(MyLayout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
                items: []
            }, _this.buy = function () {
                swal({
                    title: '( ͡° ͜ʖ ͡°)',
                    text: 'Future Function',
                    timer: 2000 });
            }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
        }

        (0, _createClass3.default)(MyLayout, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                }, _react2.default.createElement(_head2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                }), _react2.default.createElement(_nav2.default, { items: this.state.items, parentThis: this, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                }), _react2.default.createElement('div', { style: { background: '#fff' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                    }
                }, _react2.default.createElement(Component, { parentThis: this, item: this.state.items, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                })), _react2.default.createElement(_footer2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                }));
            }
        }]);

        return MyLayout;
    }(_react2.default.Component);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZGVyIiwiRm9vdGVyIiwiTXlIZWFkIiwiQ2Fyb3VzZWwiLCJBeGlvcyIsIlN3YWwiLCJzdGF0ZSIsIml0ZW1zIiwiYnV5Iiwic3dhbCIsInRpdGxlIiwidGV4dCIsInRpbWVyIiwiYmFja2dyb3VuZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQ1A7Ozs7Ozs7O2tCQUFlLHFCQUFhLEFBQ3hCO3VDQUFBOzBDQUFBOzs0QkFBQTtnQkFBQTs7OEJBQUE7O2dEQUFBOztpR0FBQTt1Q0FBQTtBQUFBOzt3TkFBQSxBQUNJO3VCQURKLEFBQ1ksQUFDRztBQURILEFBQ0oscUJBRlIsQUFJSSxNQUFNLFlBQUssQUFDUDtxQkFBSyxBQUNEOzJCQURDLEFBQ00sQUFDUDswQkFGQyxBQUVLLEFBQ047MkJBSEosQUFBSyxBQUdNLEFBQ2Q7QUFUTCx1RUFBQTtBQUFBOzs7aUJBQUE7cUNBVWMsQUFDTjt1Q0FDSSxjQUFBOztrQ0FBQTtvQ0FBQSxBQUNJO0FBREo7QUFBQSxpQkFBQSxrQkFDSSxBQUFDOztrQ0FBRDtvQ0FESixBQUNJLEFBQ0E7QUFEQTtBQUFBLG9DQUNBLEFBQUMsK0JBQU8sT0FBTyxLQUFBLEFBQUssTUFBcEIsQUFBMEIsT0FBTyxZQUFqQyxBQUE2QztrQ0FBN0M7b0NBRkosQUFFSSxBQUNBO0FBREE7b0NBQ0EsY0FBQSxTQUFLLE9BQU8sRUFBRSxZQUFkLEFBQVksQUFBYztrQ0FBMUI7b0NBQUEsQUFDSTtBQURKO2lEQUNJLEFBQUMsYUFBVSxZQUFYLEFBQXVCLE1BQU0sTUFBTSxLQUFBLEFBQUssTUFBeEMsQUFBOEM7a0NBQTlDO29DQUpSLEFBR0ksQUFDSSxBQUVKO0FBRkk7cUNBRUosQUFBQzs7a0NBQUQ7b0NBUFIsQUFDSSxBQU1JLEFBR1g7QUFIVztBQUFBO0FBbEJoQjtBQUFBOztlQUFBO01BQThCLGdCQUE5QixBQUFvQyxBQXVCdkM7QUF4QkQiLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waGFjaGFyYS9EZXNrdG9wL1Byb2plY3QvMjAxNy9Ib21ld29yay9EYXRhYmFzZUh1bnNhIn0=