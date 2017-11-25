'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _adminlayout = require('../../components/adminlayout');

var _adminlayout2 = _interopRequireDefault(_adminlayout);

var _styledComponents = require('styled-components');

var _card = require('../../components/card');

var _card2 = _interopRequireDefault(_card);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/phachara/Desktop/Project/2017/Homework/DatabaseHunsa/pages/admin/dashboard.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    .shadow{\n        box-shadow:0px 1px 15px 1px rgba(113, 106, 202, 0.08) !important;\n    }\n'], ['\n    .shadow{\n        box-shadow:0px 1px 15px 1px rgba(113, 106, 202, 0.08) !important;\n    }\n']);

(0, _styledComponents.injectGlobal)(_templateObject);

var Dashboard = function (_React$Component) {
    (0, _inherits3.default)(Dashboard, _React$Component);

    function Dashboard() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Dashboard);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Dashboard.__proto__ || (0, _getPrototypeOf2.default)(Dashboard)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            useramout: 0
        }, _this.componentWillMount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var data;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _axios2.default)({
                                method: 'get',
                                url: 'http://localhost:3001/user/useramout'
                            }).then(function (res) {
                                return res;
                            });

                        case 2:
                            data = _context.sent;

                            _this.setState({ useramout: data.data[0].useramout });
                            console.log(_this.state.useramout);

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Dashboard, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement(_adminlayout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('div', { className: 'col-lg-2 m-b-10', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement(_card2.default, { topic: 'All Users', value: this.state.useramout, myclass: 'fa fa-user mx-2 mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            })), _react2.default.createElement('div', { className: 'col-lg-3 m-b-10', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement(_card2.default, { topic: 'Income', value: '0', myclass: 'fa fa-money mx-2 mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            })))));
        }
    }]);

    return Dashboard;
}(_react2.default.Component);

exports.default = Dashboard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FkbWluL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6WyJBZG1pbkxheW91dCIsImluamVjdEdsb2JhbCIsIkNhcmQiLCJBeGlvcyIsIkRhc2hib2FyZCIsInN0YXRlIiwidXNlcmFtb3V0IiwiY29tcG9uZW50V2lsbE1vdW50IiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlcyIsImRhdGEiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFTOztBQUNULEFBQU8sQUFBVTs7OztBQUNqQixBQUFPOzs7Ozs7Ozs7O0FBRVA7O0lBTU0sQTs7Ozs7Ozs7Ozs7Ozs7O3NOLEFBQ0Y7dUJBQU0sQUFDUSxBO0FBRFIsQUFDRixpQkFFSixBLDhGQUFxQixtQkFBQTtnQkFBQTswRUFBQTswQkFBQTtxREFBQTs2QkFBQTs0Q0FBQTs7d0NBQ00sQUFDWixBQUNQO3FDQUZhLEFBQU0sQUFFZjtBQUZlLEFBQ25CLDZCQURhLEVBQUEsQUFJWixLQUFLLFVBQUEsQUFBUyxLQUFLLEFBQ2hCO3VDQUFBLEFBQU8sQUFDWjtBQVBjLEFBQ0E7OzZCQUFiO0FBRGEsNENBUWpCOztrQ0FBQSxBQUFLLFNBQVMsRUFBQyxXQUFVLEtBQUEsQUFBSyxLQUFMLEFBQVUsR0FBbkMsQUFBYyxBQUF3QixBQUN0QztvQ0FBQSxBQUFRLElBQUksTUFBQSxBQUFLLE1BVEEsQUFTakIsQUFBdUI7OzZCQVROOzZCQUFBOzRDQUFBOztBQUFBO3dCQUFBO0E7Ozs7O2lDQWFiLEFBQ0o7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLGdDQUFLLE9BQU4sQUFBWSxhQUFZLE9BQU8sS0FBQSxBQUFLLE1BQXBDLEFBQTBDLFdBQVcsU0FBckQsQUFBNkQ7OEJBQTdEO2dDQUZSLEFBQ0ksQUFDSSxBQUVKO0FBRkk7aUNBRUosY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyxnQ0FBSyxPQUFOLEFBQVksVUFBUyxPQUFyQixBQUEyQixLQUFJLFNBQS9CLEFBQXVDOzhCQUF2QztnQ0FScEIsQUFDSSxBQUNJLEFBQ0ksQUFJSSxBQUNJLEFBTXZCO0FBTnVCOzs7Ozs7RUExQkosZ0JBQU0sQSxBQW1DOUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZGFzaGJvYXJkLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waGFjaGFyYS9EZXNrdG9wL1Byb2plY3QvMjAxNy9Ib21ld29yay9EYXRhYmFzZUh1bnNhIn0=