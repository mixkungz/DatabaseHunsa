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
                            console.log(_this.state.allproduct);

                        case 5:
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
                    lineNumber: 52
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'DatabaseHunsa | \u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01')), _react2.default.createElement(_carousel2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('div', { className: 'container mt-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement('div', { className: 'col', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, '\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14'), _react2.default.createElement('div', { className: 'row mb-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, this.state.allproduct.map(function (data) {
                return _react2.default.createElement('div', { className: 'col-3', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                }, data.StatusID == 1 ? _react2.default.createElement('div', { className: '', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69
                    }
                }, _react2.default.createElement('div', { className: 'card mx-2', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                    }
                }, _react2.default.createElement('div', { className: 'text-center', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 71
                    }
                }, _react2.default.createElement('img', { className: 'card-img-top mx-auto d-block', src: data.ProductImg, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 72
                    }
                })), _react2.default.createElement('div', { className: 'card-body', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                    }
                }, _react2.default.createElement('h5', { className: 'card-title', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                    }
                }, data.ProductName), _react2.default.createElement('p', { className: 'text-danger', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                    }
                }, data.ProductPrice, ' \u0E1A\u0E32\u0E17'), _react2.default.createElement('p', { className: 'text-center', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77
                    }
                }, _react2.default.createElement('button', { className: 'btn btn-info btn-block', onClick: function onClick(e) {
                        return _this3.addToCart(e, data);
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77
                    }
                }, 'Add to cart'))))) : _react2.default.createElement('span', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86
                    }
                }));
            })), ' '), ' '), ' '), ' '));
        }
    }]);

    return Main;
}(_react2.default.Component);

exports.default = (0, _layout2.default)(Main);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJ3aXRoTGF5b3V0Iiwic3R5bGVkIiwiaW5qZWN0R2xvYmFsIiwiU2xpZGVyIiwiQ2Fyb3VzZWwiLCJBeGlvcyIsIk1haW4iLCJzdGF0ZSIsImFsbHByb2R1Y3QiLCJ1c2VyRGV0YWlsIiwiY29tcG9uZW50V2lsbE1vdW50IiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlcyIsImFsbFByb2QiLCJzZXRTdGF0ZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50RGlkTW91bnQiLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWRkVG9DYXJ0IiwiZSIsImFsZXJ0IiwiaXRlbXMiLCJwcm9wcyIsIml0ZW0iLCJwYXJlbnRUaGlzIiwibWFwIiwiU3RhdHVzSUQiLCJQcm9kdWN0SW1nIiwiUHJvZHVjdE5hbWUiLCJQcm9kdWN0UHJpY2UiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU87Ozs7Ozs7Ozs7QUFDUDs7SSxBQVNNOzs7Ozs7Ozs7Ozs7Ozs7NE0sQUFDRjt3QkFBTSxBQUNTLEFBQ1g7d0JBRkUsQUFFUyxBO0FBRlQsQUFDRixpQkFHSixBLDhGQUFxQixtQkFBQTtnQkFBQTswRUFBQTswQkFBQTtxREFBQTs2QkFBQTs0Q0FBQTs7d0NBQ1EsQUFDZCxBQUNQO3FDQUZlLEFBQU0sQUFFakI7QUFGaUIsQUFDckIsNkJBRGUsRUFBQSxBQUlkLEtBQUssVUFBQSxBQUFTLEtBQUssQUFDaEI7dUNBQUEsQUFBTyxBQUNaO0FBUGMsQUFDRTs7NkJBQWY7QUFEYSwrQ0FRZjs7a0NBQUEsQUFBSyxTQUFTLEVBQUMsWUFBVyxRQUExQixBQUFjLEFBQW9CLEFBQ2xDO29DQUFBLEFBQVEsSUFBSSxNQUFBLEFBQUssTUFURixBQVNmLEFBQXVCOzs2QkFUUjs2QkFBQTs0Q0FBQTs7QUFBQTt3QkFBQTtBLG1CQVlyQixBLDZGQUFvQixvQkFBQTs0RUFBQTswQkFBQTt1REFBQTs2QkFBQTs2Q0FBQTt5Q0FDVixBQUFLOzRDQUNJLEtBQUEsQUFBSyxNQUFNLE9BQUEsQUFBTyxhQUFQLEFBQW9CLFFBRjlCLEFBQ1YsQUFBYyxBQUNMLEFBQVcsQUFBNEI7QUFEbEMsQUFDaEIsNkJBREU7OzZCQURVOzZCQUFBOzZDQUFBOztBQUFBO3lCQUFBO0EsbUIsQUFLcEIsWUFBWSxVQUFBLEFBQUMsR0FBRCxBQUFJLE1BQVEsQUFDcEI7Z0JBQUcsTUFBQSxBQUFLLE1BQUwsQUFBVyxjQUFkLEFBQTRCLE1BQUssQUFDN0I7c0JBQUEsQUFBTSxBQUNUO0FBRkQsbUJBR0ksQUFDQTtvQkFBTSxtREFBWSxNQUFBLEFBQUssTUFBakIsQUFBdUIsUUFBTSxFQUFFLE1BQXJDLEFBQU0sQUFBNkIsQUFBUSxBQUMzQztzQkFBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCOzJCQUF0QixBQUErQixBQUdsQztBQUhrQyxBQUMzQjtBQUdYO0E7Ozs7O2lDQUVRO3lCQUNQOzttQ0FDRSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNRO0FBRFI7QUFBQSxhQUFBLGtCQUNRLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZaLEFBQ1EsQUFDSSxBQUVKLHNGQUFBLEFBQUM7OzhCQUFEO2dDQUpSLEFBSVEsQUFDQTtBQURBO0FBQUEsZ0NBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLG1HQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFHWTtBQUhaO29CQUdZLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsSUFBSSxVQUFBLEFBQUMsTUFBRDt1Q0FDdEIsY0FBQSxTQUFLLFdBQUwsQUFBZTtrQ0FBZjtvQ0FBQSxBQUNLO0FBREw7aUJBQUEsT0FDSyxBQUFLLFlBQUwsQUFBZSxvQkFFWixjQUFBLFNBQUssV0FBTCxBQUFlO2tDQUFmO29DQUFBLEFBQ0k7QUFESjtpQkFBQSxrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO2tDQUFmO29DQUFBLEFBQ0k7QUFESjttQ0FDSSxjQUFBLFNBQUssV0FBTCxBQUFlO2tDQUFmO29DQUFBLEFBQ0k7QUFESjswREFDUyxXQUFMLEFBQWUsZ0NBQStCLEtBQUssS0FBbkQsQUFBd0Q7a0NBQXhEO29DQUZSLEFBQ0ksQUFDSSxBQUVKO0FBRkk7cUNBRUosY0FBQSxTQUFLLFdBQUwsQUFBZTtrQ0FBZjtvQ0FBQSxBQUNJO0FBREo7bUNBQ0ksY0FBQSxRQUFJLFdBQUosQUFBYztrQ0FBZDtvQ0FBQSxBQUE0QjtBQUE1Qjt3QkFESixBQUNJLEFBQWlDLEFBQ2pDLDhCQUFBLGNBQUEsT0FBRyxXQUFILEFBQWE7a0NBQWI7b0NBQUEsQUFBNEI7QUFBNUI7d0JBQUEsQUFBaUMsY0FGckMsQUFFSSxBQUNBLHdDQUFBLGNBQUEsT0FBRyxXQUFILEFBQWE7a0NBQWI7b0NBQUEsQUFBMkI7QUFBM0I7bUNBQTJCLGNBQUEsWUFBUSxXQUFSLEFBQWtCLDBCQUF5QixTQUFTLGlCQUFBLEFBQUMsR0FBRDsrQkFBTyxPQUFBLEFBQUssVUFBTCxBQUFlLEdBQXRCLEFBQU8sQUFBa0I7QUFBN0U7a0NBQUE7b0NBQUE7QUFBQTttQkFWMUMsQUFFRyxBQUNJLEFBSUksQUFHSSxBQUEyQjs7a0NBU3ZDO29DQXJCYyxBQUN0QixBQW9CUTtBQUFBO0FBQUEsaUJBQUE7QUExQjVCLEFBRUksQUFHWSxpQkFOcEIsQUFDSSxNQUZSLEFBQ0ksTUFGUixBQUNJLE1BUGQsQUFDRSxBQUtRLEFBNkNYOzs7OztFQXRGYyxnQixBQUFNLEFBeUZ6Qjs7a0JBQWUsc0JBQWYsQUFBZSxBQUFXIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waGFjaGFyYS9EZXNrdG9wL1Byb2plY3QvMjAxNy9Ib21ld29yay9EYXRhYmFzZUh1bnNhIn0=