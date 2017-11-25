'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/phachara/Desktop/Project/2017/Homework/DatabaseHunsa/components/layout.js';

exports.default = function (Component) {
    return function (_React$Component) {
        (0, _inherits3.default)(MyLayout, _React$Component);

        function MyLayout() {
            var _ref,
                _this2 = this;

            var _temp, _this, _ret;

            (0, _classCallCheck3.default)(this, MyLayout);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MyLayout.__proto__ || (0, _getPrototypeOf2.default)(MyLayout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
                items: []
            }, _this.buy = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                console.log(_this.state.items);
                                _context2.next = 3;
                                return (0, _axios2.default)({
                                    method: 'post',
                                    url: 'http://localhost:3001/buy/',
                                    data: _this.state.items

                                }).then(function () {
                                    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(response) {
                                        var userData;
                                        return _regenerator2.default.wrap(function _callee$(_context) {
                                            while (1) {
                                                switch (_context.prev = _context.next) {
                                                    case 0:
                                                        if (!(response.data == false)) {
                                                            _context.next = 3;
                                                            break;
                                                        }

                                                        _context.next = 8;
                                                        break;

                                                    case 3:
                                                        userData = response.data[0];

                                                        if (userData.RoleID == 0) {
                                                            alert('คุณไม่ใช่แอดมิน');
                                                        } else {
                                                            alert('login');
                                                        }
                                                        window.localStorage.setItem('userdetail', (0, _stringify2.default)(response.data[0]));
                                                        _context.next = 8;
                                                        return location.reload();

                                                    case 8:
                                                    case 'end':
                                                        return _context.stop();
                                                }
                                            }
                                        }, _callee, this);
                                    }));

                                    return function (_x) {
                                        return _ref3.apply(this, arguments);
                                    };
                                }());

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
        }

        (0, _createClass3.default)(MyLayout, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                }, _react2.default.createElement(_head2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                    }
                }), _react2.default.createElement(_nav2.default, { items: this.state.items, parentThis: this, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                    }
                }), _react2.default.createElement('div', { style: { background: '#fff' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                    }
                }, _react2.default.createElement(Component, { parentThis: this, item: this.state.items, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                })), _react2.default.createElement(_footer2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                    }
                }));
            }
        }]);

        return MyLayout;
    }(_react2.default.Component);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZGVyIiwiRm9vdGVyIiwiTXlIZWFkIiwiQ2Fyb3VzZWwiLCJBeGlvcyIsInN0YXRlIiwiaXRlbXMiLCJidXkiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsInRoZW4iLCJyZXNwb25zZSIsInVzZXJEYXRhIiwiUm9sZUlEIiwiYWxlcnQiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwibG9jYXRpb24iLCJyZWxvYWQiLCJiYWNrZ3JvdW5kIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUNQOzs7Ozs7OztrQkFBZSxxQkFBYSxBQUN4Qjt1Q0FBQTswQ0FBQTs7NEJBQUE7Z0JBQUE7eUJBQUE7OzhCQUFBOztnREFBQTs7aUdBQUE7dUNBQUE7QUFBQTs7d05BQUEsQUFDSTt1QkFESixBQUNZLEFBQ0c7QUFESCxBQUNKLHFCQUZSLEFBSUksK0VBQU0sb0JBQUE7Z0ZBQUE7OEJBQUE7MkRBQUE7aUNBQ0Y7d0NBQUEsQUFBUSxJQUFJLE1BQUEsQUFBSyxNQURmLEFBQ0YsQUFBdUI7aURBRHJCOzs0Q0FFVSxBQUNBLEFBQ1I7eUNBRlEsQUFFSCxBQUNMOzBDQUFNLE1BQUEsQUFBSyxNQUhULEFBQU0sQUFHUzs7QUFIVCxBQUNSLGlDQURFLEVBQUEsQUFLSCxpQkFMRzt5SEFLRSxpQkFBQSxBQUFnQixVQUFoQjs0Q0FBQTtzR0FBQTtzREFBQTtpRkFBQTt5REFBQTs4REFDRCxTQUFBLEFBQVMsUUFEUixBQUNnQixRQURoQjs0RUFBQTtBQUFBO0FBQUE7O3dFQUFBO0FBQUE7O3lEQUlJO0FBSkosbUVBSWUsU0FBQSxBQUFTLEtBSnhCLEFBSWUsQUFBYyxBQUM3Qjs7NERBQUcsU0FBQSxBQUFTLFVBQVosQUFBc0IsR0FBRSxBQUNwQjtrRUFBQSxBQUFNLEFBQ1Q7QUFGRCwrREFHSSxBQUNBO2tFQUFBLEFBQU0sQUFFVDtBQUNEOytEQUFBLEFBQU8sYUFBUCxBQUFvQixRQUFwQixBQUE0QixjQUFhLHlCQUFlLFNBQUEsQUFBUyxLQVpqRSxBQVlBLEFBQXlDLEFBQWUsQUFBYzt3RUFadEU7K0RBYU0sU0FiTixBQWFNLEFBQVM7O3lEQWJmO3lEQUFBO3dFQUFBOztBQUFBO29EQUFBO0FBTEY7O3lEQUFBO2lFQUFBO0FBQUE7QUFGSjs7aUNBQUE7aUNBQUE7aURBQUE7O0FBQUE7NkJBQUE7QUFKVix5RUFBQTtBQUFBOzs7aUJBQUE7cUNBNEJjLEFBQ047dUNBQ0ksY0FBQTs7a0NBQUE7b0NBQUEsQUFDSTtBQURKO0FBQUEsaUJBQUEsa0JBQ0ksQUFBQzs7a0NBQUQ7b0NBREosQUFDSSxBQUNBO0FBREE7QUFBQSxvQ0FDQSxBQUFDLCtCQUFPLE9BQU8sS0FBQSxBQUFLLE1BQXBCLEFBQTBCLE9BQU8sWUFBakMsQUFBNkM7a0NBQTdDO29DQUZKLEFBRUksQUFDQTtBQURBO29DQUNBLGNBQUEsU0FBSyxPQUFPLEVBQUUsWUFBZCxBQUFZLEFBQWM7a0NBQTFCO29DQUFBLEFBQ0k7QUFESjtpREFDSSxBQUFDLGFBQVUsWUFBWCxBQUF1QixNQUFNLE1BQU0sS0FBQSxBQUFLLE1BQXhDLEFBQThDO2tDQUE5QztvQ0FKUixBQUdJLEFBQ0ksQUFFSjtBQUZJO3FDQUVKLEFBQUM7O2tDQUFEO29DQVBSLEFBQ0ksQUFNSSxBQUdYO0FBSFc7QUFBQTtBQXBDaEI7QUFBQTs7ZUFBQTtNQUE4QixnQkFBOUIsQUFBb0MsQUF5Q3ZDO0FBMUNEIiwiZmlsZSI6ImxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhhY2hhcmEvRGVza3RvcC9Qcm9qZWN0LzIwMTcvSG9tZXdvcmsvRGF0YWJhc2VIdW5zYSJ9