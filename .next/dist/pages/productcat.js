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

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/phachara/Desktop/Project/2017/Homework/DatabaseHunsa/pages/productcat.js?entry';


var ProductCat = function (_React$Component) {
    (0, _inherits3.default)(ProductCat, _React$Component);

    function ProductCat() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ProductCat);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ProductCat.__proto__ || (0, _getPrototypeOf2.default)(ProductCat)).call.apply(_ref, [this].concat(args))), _this), _this.state = (0, _defineProperty3.default)({
            allproduct: [],
            userDetail: null,
            query: null
        }, 'userDetail', null), _this.componentWillMount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var ProductData;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (_index2.default.query.category) {
                                _context.next = 4;
                                break;
                            }

                            console.log('no query');
                            _context.next = 11;
                            break;

                        case 4:
                            _context.next = 6;
                            return _this.setState({ query: _index2.default.query.category });

                        case 6:
                            console.log(_this.state.query);
                            _context.next = 9;
                            return (0, _axios2.default)({
                                method: 'get',
                                url: 'http://localhost:3001/product/category/' + _this.state.query
                            }).then(function (res) {
                                return res;
                            });

                        case 9:
                            ProductData = _context.sent;

                            _this.setState({ allproduct: ProductData.data });

                        case 11:
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

    (0, _createClass3.default)(ProductCat, [{
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
            }, 'DatabaseHunsa | \u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01')), _react2.default.createElement('div', { className: 'container mt-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('div', { className: 'col', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, this.state.query), _react2.default.createElement('div', { className: 'row mb-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, this.state.allproduct.map(function (data) {
                return _react2.default.createElement('div', { className: 'col-3', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    }
                }, data.StatusID == 1 ? _react2.default.createElement('div', { className: '', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                    }
                }, _react2.default.createElement('div', { className: 'card mx-2', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                    }
                }, _react2.default.createElement('div', { className: 'text-center', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69
                    }
                }, _react2.default.createElement('img', { className: 'card-img-top mx-auto d-block', src: data.ProductImg, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                    }
                })), _react2.default.createElement('div', { className: 'card-body', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 72
                    }
                }, _react2.default.createElement('h5', { className: 'card-title', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 73
                    }
                }, data.ProductName), _react2.default.createElement('p', { className: 'text-danger', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                    }
                }, data.ProductPrice, ' \u0E1A\u0E32\u0E17'), _react2.default.createElement('p', { className: 'text-center', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                    }
                }, _react2.default.createElement('button', { className: 'btn btn-info btn-block', onClick: function onClick(e) {
                        return _this3.addToCart(e, data);
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                    }
                }, 'Add to cart'))))) : _react2.default.createElement('span', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 84
                    }
                }));
            })), ' '))));
        }
    }]);

    return ProductCat;
}(_react2.default.Component);

exports.default = (0, _layout2.default)(ProductCat);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2R1Y3RjYXQuanMiXSwibmFtZXMiOlsiSGVhZCIsIndpdGhMYXlvdXQiLCJzdHlsZWQiLCJpbmplY3RHbG9iYWwiLCJTbGlkZXIiLCJDYXJvdXNlbCIsIkF4aW9zIiwiUm91dGVyIiwiUHJvZHVjdENhdCIsInN0YXRlIiwiYWxscHJvZHVjdCIsInVzZXJEZXRhaWwiLCJxdWVyeSIsImNvbXBvbmVudFdpbGxNb3VudCIsImNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlcyIsIlByb2R1Y3REYXRhIiwiZGF0YSIsImNvbXBvbmVudERpZE1vdW50IiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFkZFRvQ2FydCIsImUiLCJhbGVydCIsIml0ZW1zIiwicHJvcHMiLCJpdGVtIiwicGFyZW50VGhpcyIsIm1hcCIsIlN0YXR1c0lEIiwiUHJvZHVjdEltZyIsIlByb2R1Y3ROYW1lIiwiUHJvZHVjdFByaWNlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0lBRUQsQTs7Ozs7Ozs7Ozs7Ozs7O3dOLEFBQ0Y7d0IsQUFDZSxBQUNYO3dCQUFXLEEsQUFDWDttQkFBTTtBQUZOLHlCLEFBR1csYSxBQUVmLDhGQUFxQixtQkFBQTtnQkFBQTswRUFBQTswQkFBQTtxREFBQTs2QkFBQTtnQ0FDYixnQkFBQSxBQUFPLE1BRE0sQUFDQSxVQURBO2dEQUFBO0FBQUE7QUFFYjs7b0NBQUEsQUFBUSxJQUZLLEFBRWIsQUFBWTs0Q0FGQztBQUFBOzs2QkFBQTs0Q0FBQTttQ0FNUCxNQUFBLEFBQUssU0FBUyxFQUFDLE9BQU0sZ0JBQUEsQUFBTyxNQU5yQixBQU1QLEFBQWMsQUFBb0I7OzZCQUN4QztvQ0FBQSxBQUFRLElBQUksTUFBQSxBQUFLLE1BUEosQUFPYixBQUF1Qjs0Q0FQVjs7d0NBUWdCLEFBQ2xCLEFBQ1A7aUZBQThDLE1BQUEsQUFBSyxNQUZoQyxBQUFNLEFBRWdDO0FBRmhDLEFBQ3pCLDZCQURtQixFQUFBLEFBSWxCLEtBQUssVUFBQSxBQUFTLEtBQUssQUFDaEI7dUNBQUEsQUFBTyxBQUNaO0FBZFUsQUFRVTs7NkJBQW5CO0FBUlMsbURBZWI7O2tDQUFBLEFBQUssU0FBUyxFQUFDLFlBQVcsWUFmYixBQWViLEFBQWMsQUFBd0I7OzZCQWZ6Qjs2QkFBQTs0Q0FBQTs7QUFBQTt3QkFBQTtBLG1CLEFBa0JyQiw2RkFBb0Isb0JBQUE7NEVBQUE7MEJBQUE7dURBQUE7NkJBQUE7NkNBQUE7eUNBQ1YsQUFBSzs0Q0FDSSxLQUFBLEFBQUssTUFBTSxPQUFBLEFBQU8sYUFBUCxBQUFvQixRQUY5QixBQUNWLEFBQWMsQUFDTCxBQUFXLEFBQTRCO0FBRGxDLEFBQ2hCLDZCQURFOzs2QkFEVTs2QkFBQTs2Q0FBQTs7QUFBQTt5QkFBQTtBLG1CQUtwQixBLFlBQVksVUFBQSxBQUFDLEdBQUQsQUFBSSxNQUFRLEFBQ3BCO2dCQUFHLE1BQUEsQUFBSyxNQUFMLEFBQVcsY0FBZCxBQUE0QixNQUFLLEFBQzdCO3NCQUFBLEFBQU0sQUFDVDtBQUZELG1CQUdJLEFBQ0E7b0JBQU0sbURBQVksTUFBQSxBQUFLLE1BQWpCLEFBQXVCLFFBQU0sRUFBRSxNQUFyQyxBQUFNLEFBQTZCLEFBQVEsQUFDM0M7c0JBQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQjsyQkFBdEIsQUFBK0IsQUFHbEM7QUFIa0MsQUFDM0I7QUFHWDtBOzs7OztpQ0FDTzt5QkFDSjs7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGUixBQUNJLEFBQ0ksQUFFSixzRkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0E7QUFEQTsrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSxvQkFBSSxBQUFLLE1BRFQsQUFDQSxBQUFlLEFBQ1Asd0JBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUdZO0FBSFo7b0JBR1ksQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixJQUFJLFVBQUEsQUFBQyxNQUFEO3VDQUN0QixjQUFBLFNBQUssV0FBTCxBQUFlO2tDQUFmO29DQUFBLEFBQ0s7QUFETDtpQkFBQSxPQUNLLEFBQUssWUFBTCxBQUFlLG9CQUVaLGNBQUEsU0FBSyxXQUFMLEFBQWU7a0NBQWY7b0NBQUEsQUFDSTtBQURKO2lCQUFBLGtCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7a0NBQWY7b0NBQUEsQUFDSTtBQURKO21DQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7a0NBQWY7b0NBQUEsQUFDSTtBQURKOzBEQUNTLFdBQUwsQUFBZSxnQ0FBK0IsS0FBSyxLQUFuRCxBQUF3RDtrQ0FBeEQ7b0NBRlIsQUFDSSxBQUNJLEFBRUo7QUFGSTtxQ0FFSixjQUFBLFNBQUssV0FBTCxBQUFlO2tDQUFmO29DQUFBLEFBQ0k7QUFESjttQ0FDSSxjQUFBLFFBQUksV0FBSixBQUFjO2tDQUFkO29DQUFBLEFBQTRCO0FBQTVCO3dCQURKLEFBQ0ksQUFBaUMsQUFDakMsOEJBQUEsY0FBQSxPQUFHLFdBQUgsQUFBYTtrQ0FBYjtvQ0FBQSxBQUE0QjtBQUE1Qjt3QkFBQSxBQUFpQyxjQUZyQyxBQUVJLEFBQ0Esd0NBQUEsY0FBQSxPQUFHLFdBQUgsQUFBYTtrQ0FBYjtvQ0FBQSxBQUEyQjtBQUEzQjttQ0FBMkIsY0FBQSxZQUFRLFdBQVIsQUFBa0IsMEJBQXlCLFNBQVMsaUJBQUEsQUFBQyxHQUFEOytCQUFPLE9BQUEsQUFBSyxVQUFMLEFBQWUsR0FBdEIsQUFBTyxBQUFrQjtBQUE3RTtrQ0FBQTtvQ0FBQTtBQUFBO21CQVYxQyxBQUVHLEFBQ0ksQUFJSSxBQUdJLEFBQTJCOztrQ0FTdkM7b0NBckJjLEFBQ3RCLEFBb0JRO0FBQUE7QUFBQSxpQkFBQTtBQTFCaEMsQUFFUSxBQUdZLGlCQVpwQyxBQUNJLEFBSUksQUFDSSxBQUNJLEFBeUNuQjs7Ozs7RUExRm9CLGdCQUFNLEEsQUE0Ri9COztrQkFBZSxzQkFBZixBQUFlLEFBQVciLCJmaWxlIjoicHJvZHVjdGNhdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhhY2hhcmEvRGVza3RvcC9Qcm9qZWN0LzIwMTcvSG9tZXdvcmsvRGF0YWJhc2VIdW5zYSJ9