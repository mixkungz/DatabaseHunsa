'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactSlick = require('react-slick');

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _carousel = require('../components/carousel');

var _carousel2 = _interopRequireDefault(_carousel);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/phachara/Desktop/Project/2017/Homework/DatabaseHunsa/pages/index.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n.card{\n    margin-left:5px;\n    margin-right:5px;\n}\n.card-img-top{\n    width:65%;\n}\n'], ['\n.card{\n    margin-left:5px;\n    margin-right:5px;\n}\n.card-img-top{\n    width:65%;\n}\n']);

(0, _styledComponents.injectGlobal)(_templateObject);

var Main = function (_React$Component) {
    (0, _inherits3.default)(Main, _React$Component);

    function Main() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Main);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            allproduct: [],
            userDetail: null
        }, _this.componentWillMount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var allProd;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _axios2.default)({
                                method: 'get',
                                url: 'http://localhost:3001/product/all'
                            }).then(function (res) {
                                return res;
                            });

                        case 2:
                            allProd = _context.sent;

                            _this.setState({ allproduct: allProd.data });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.componentDidMount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _this.setState({
                                userDetail: JSON.parse(window.localStorage.getItem("userdetail"))
                            });

                        case 2:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        })), _this.addToCart = function (e, data) {
            if (_this.state.userDetail == null) {
                alert('กรุณาล็อคอิน');
            } else {
                var items = [].concat((0, _toConsumableArray3.default)(_this.props.item), [{ item: data }]);
                _this.props.parentThis.setState({
                    items: items
                });
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Main, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'DatabaseHunsa | \u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01')), _react2.default.createElement(_carousel2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement('div', { className: 'container mt-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('div', { className: 'col', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, '\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14'), _react2.default.createElement('div', { className: 'row mb-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, this.state.allproduct.map(function (data) {
                return _react2.default.createElement('div', { className: 'col-3', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                }, data.StatusID == 1 ? _react2.default.createElement('div', { className: '', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                    }
                }, _react2.default.createElement('div', { className: 'card mx-2', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69
                    }
                }, _react2.default.createElement('div', { className: 'text-center', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                    }
                }, _react2.default.createElement('img', { className: 'card-img-top mx-auto d-block', src: data.ProductImg, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 71
                    }
                })), _react2.default.createElement('div', { className: 'card-body', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 73
                    }
                }, _react2.default.createElement('h5', { className: 'card-title', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                    }
                }, data.ProductName), _react2.default.createElement('p', { className: 'text-danger', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                    }
                }, data.ProductPrice, ' \u0E1A\u0E32\u0E17'), _react2.default.createElement('p', { className: 'text-center', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                    }
                }, _react2.default.createElement('button', { className: 'btn btn-info btn-block', onClick: function onClick(e) {
                        return _this3.addToCart(e, data);
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                    }
                }, 'Add to cart'))))) : _react2.default.createElement('span', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85
                    }
                }));
            })), ' '), ' '), ' '), ' '));
        }
    }]);

    return Main;
}(_react2.default.Component);

exports.default = (0, _layout2.default)(Main);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJ3aXRoTGF5b3V0Iiwic3R5bGVkIiwiaW5qZWN0R2xvYmFsIiwiU2xpZGVyIiwiQ2Fyb3VzZWwiLCJBeGlvcyIsIk1haW4iLCJzdGF0ZSIsImFsbHByb2R1Y3QiLCJ1c2VyRGV0YWlsIiwiY29tcG9uZW50V2lsbE1vdW50IiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlcyIsImFsbFByb2QiLCJzZXRTdGF0ZSIsImRhdGEiLCJjb21wb25lbnREaWRNb3VudCIsIkpTT04iLCJwYXJzZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhZGRUb0NhcnQiLCJlIiwiYWxlcnQiLCJpdGVtcyIsInByb3BzIiwiaXRlbSIsInBhcmVudFRoaXMiLCJtYXAiLCJTdGF0dXNJRCIsIlByb2R1Y3RJbWciLCJQcm9kdWN0TmFtZSIsIlByb2R1Y3RQcmljZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTzs7Ozs7Ozs7OztBQUNQOztJLEFBU007Ozs7Ozs7Ozs7Ozs7Ozs0TSxBQUNGO3dCQUFNLEFBQ1MsQUFDWDt3QkFGRSxBLEFBRVM7QUFGVCxBQUNGLGlCQUdKLEEsOEZBQXFCLG1CQUFBO2dCQUFBOzBFQUFBOzBCQUFBO3FEQUFBOzZCQUFBOzRDQUFBOzt3Q0FDUSxBQUNkLEFBQ1A7cUNBRmUsQUFBTSxBQUVqQjtBQUZpQixBQUNyQiw2QkFEZSxFQUFBLEFBSWQsS0FBSyxVQUFBLEFBQVMsS0FBSyxBQUNoQjt1Q0FBQSxBQUFPLEFBQ1o7QUFQYyxBQUNFOzs2QkFBZjtBQURhLCtDQVFmOztrQ0FBQSxBQUFLLFNBQVMsRUFBQyxZQUFXLFFBUlgsQUFRZixBQUFjLEFBQW9COzs2QkFSbkI7NkJBQUE7NENBQUE7O0FBQUE7d0JBQUE7QSxtQixBQVdyQiw2RkFBb0Isb0JBQUE7NEVBQUE7MEJBQUE7dURBQUE7NkJBQUE7NkNBQUE7eUNBQ1YsQUFBSzs0Q0FDSSxLQUFBLEFBQUssTUFBTSxPQUFBLEFBQU8sYUFBUCxBQUFvQixRQUY5QixBQUNWLEFBQWMsQUFDTCxBQUFXLEFBQTRCO0FBRGxDLEFBQ2hCLDZCQURFOzs2QkFEVTs2QkFBQTs2Q0FBQTs7QUFBQTt5QkFBQTtBLG1CLEFBS3BCLFlBQVksVUFBQSxBQUFDLEdBQUQsQUFBSSxNQUFRLEFBQ3BCO2dCQUFHLE1BQUEsQUFBSyxNQUFMLEFBQVcsY0FBZCxBQUE0QixNQUFLLEFBQzdCO3NCQUFBLEFBQU0sQUFDVDtBQUZELG1CQUdJLEFBQ0E7b0JBQU0sbURBQVksTUFBQSxBQUFLLE1BQWpCLEFBQXVCLFFBQU0sRUFBRSxNQUFyQyxBQUFNLEFBQTZCLEFBQVEsQUFDM0M7c0JBQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQjsyQkFBdEIsQUFBK0IsQUFHbEM7QUFIa0MsQUFDM0I7QUFHWDtBOzs7OztpQ0FFUTt5QkFDUDs7bUNBQ0UsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDUTtBQURSO0FBQUEsYUFBQSxrQkFDUSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGWixBQUNRLEFBQ0ksQUFFSixzRkFBQSxBQUFDOzs4QkFBRDtnQ0FKUixBQUlRLEFBQ0E7QUFEQTtBQUFBLGdDQUNBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxtR0FBQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBR1k7QUFIWjtvQkFHWSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLElBQUksVUFBQSxBQUFDLE1BQUQ7dUNBQ3RCLGNBQUEsU0FBSyxXQUFMLEFBQWU7a0NBQWY7b0NBQUEsQUFDSztBQURMO2lCQUFBLE9BQ0ssQUFBSyxZQUFMLEFBQWUsb0JBRVosY0FBQSxTQUFLLFdBQUwsQUFBZTtrQ0FBZjtvQ0FBQSxBQUNJO0FBREo7aUJBQUEsa0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTtrQ0FBZjtvQ0FBQSxBQUNJO0FBREo7bUNBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTtrQ0FBZjtvQ0FBQSxBQUNJO0FBREo7MERBQ1MsV0FBTCxBQUFlLGdDQUErQixLQUFLLEtBQW5ELEFBQXdEO2tDQUF4RDtvQ0FGUixBQUNJLEFBQ0ksQUFFSjtBQUZJO3FDQUVKLGNBQUEsU0FBSyxXQUFMLEFBQWU7a0NBQWY7b0NBQUEsQUFDSTtBQURKO21DQUNJLGNBQUEsUUFBSSxXQUFKLEFBQWM7a0NBQWQ7b0NBQUEsQUFBNEI7QUFBNUI7d0JBREosQUFDSSxBQUFpQyxBQUNqQyw4QkFBQSxjQUFBLE9BQUcsV0FBSCxBQUFhO2tDQUFiO29DQUFBLEFBQTRCO0FBQTVCO3dCQUFBLEFBQWlDLGNBRnJDLEFBRUksQUFDQSx3Q0FBQSxjQUFBLE9BQUcsV0FBSCxBQUFhO2tDQUFiO29DQUFBLEFBQTJCO0FBQTNCO21DQUEyQixjQUFBLFlBQVEsV0FBUixBQUFrQiwwQkFBeUIsU0FBUyxpQkFBQSxBQUFDLEdBQUQ7K0JBQU8sT0FBQSxBQUFLLFVBQUwsQUFBZSxHQUF0QixBQUFPLEFBQWtCO0FBQTdFO2tDQUFBO29DQUFBO0FBQUE7bUJBVjFDLEFBRUcsQUFDSSxBQUlJLEFBR0ksQUFBMkI7O2tDQVN2QztvQ0FyQmMsQUFDdEIsQUFvQlE7QUFBQTtBQUFBLGlCQUFBO0FBMUI1QixBQUVJLEFBR1ksaUJBTnBCLEFBQ0ksTUFGUixBQUNJLE1BRlIsQUFDSSxNQVBkLEFBQ0UsQUFLUSxBQTZDWDs7Ozs7RUFyRmMsZ0IsQUFBTSxBQXdGekI7O2tCQUFlLHNCQUFmLEFBQWUsQUFBVyIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhhY2hhcmEvRGVza3RvcC9Qcm9qZWN0LzIwMTcvSG9tZXdvcmsvRGF0YWJhc2VIdW5zYSJ9