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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/phachara/Desktop/Project/2017/Homework/DatabaseHunsa/pages/index.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n.card{\n    margin-left:5px;\n    margin-right:5px;\n}\n.card-img-top{\n    width:65%;\n}\n'], ['\n.card{\n    margin-left:5px;\n    margin-right:5px;\n}\n.card-img-top{\n    width:65%;\n}\n']);

(0, _styledComponents.injectGlobal)(_templateObject);

var Main = function (_React$Component) {
    (0, _inherits3.default)(Main, _React$Component);

    function Main(props) {
        (0, _classCallCheck3.default)(this, Main);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(Main, [{
        key: 'render',
        value: function render() {
            var settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                adaptiveHeight: true
            };
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, 'DatabaseHunsa | \u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01')), _react2.default.createElement(_carousel2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement('div', { className: 'container mt-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement('div', { className: 'col', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 146
                }
            }, '\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14'), _react2.default.createElement('div', { className: 'row mb-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 147
                }
            }, _react2.default.createElement('div', { className: 'col-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 148
                }
            }, _react2.default.createElement('div', { className: 'card', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                }
            }, _react2.default.createElement('div', { className: 'text-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                }
            }, _react2.default.createElement('img', { className: 'card-img-top mx-auto d-block', src: '/static/img/product/foca2.jpg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 151
                }
            })), _react2.default.createElement('div', { className: 'card-body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 153
                }
            }, _react2.default.createElement('h5', { className: 'card-title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 154
                }
            }, 'FOCALLURE Brand Liquid Lipstick Matte Waterproof'), _react2.default.createElement('p', { className: 'text-danger', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 155
                }
            }, '199 \u0E1A\u0E32\u0E17'), _react2.default.createElement('p', { className: 'text-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 156
                }
            }, _react2.default.createElement('a', { href: '#', className: 'btn btn-success btn-block', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 156
                }
            }, 'Add to cart'))))), _react2.default.createElement('div', { className: 'col-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 161
                }
            }, _react2.default.createElement('div', { className: 'card', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 162
                }
            }, _react2.default.createElement('div', { className: 'text-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 163
                }
            }, _react2.default.createElement('img', { className: 'card-img-top mx-auto d-block', src: '/static/img/product/foca2.jpg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
                }
            })), _react2.default.createElement('div', { className: 'card-body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
                }
            }, _react2.default.createElement('h5', { className: 'card-title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 167
                }
            }, 'FOCALLURE Brand Liquid Lipstick Matte Waterproof'), _react2.default.createElement('p', { className: 'text-danger', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 168
                }
            }, '199 \u0E1A\u0E32\u0E17'), _react2.default.createElement('p', { className: 'text-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 169
                }
            }, _react2.default.createElement('a', { href: '#', className: 'btn btn-success btn-block', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 169
                }
            }, 'Add to cart'))))), _react2.default.createElement('div', { className: 'col-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 174
                }
            }, _react2.default.createElement('div', { className: 'card', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 175
                }
            }, _react2.default.createElement('div', { className: 'text-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 176
                }
            }, _react2.default.createElement('img', { className: 'card-img-top mx-auto d-block', src: '/static/img/product/foca2.jpg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 177
                }
            })), _react2.default.createElement('div', { className: 'card-body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 179
                }
            }, _react2.default.createElement('h5', { className: 'card-title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 180
                }
            }, 'FOCALLURE Brand Liquid Lipstick Matte Waterproof'), _react2.default.createElement('p', { className: 'text-danger', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 181
                }
            }, '199 \u0E1A\u0E32\u0E17'), _react2.default.createElement('p', { className: 'text-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 182
                }
            }, _react2.default.createElement('a', { href: '#', className: 'btn btn-success btn-block', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 182
                }
            }, 'Add to cart'))))), _react2.default.createElement('div', { className: 'col-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 187
                }
            }, _react2.default.createElement('div', { className: 'card', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 188
                }
            }, _react2.default.createElement('div', { className: 'text-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 189
                }
            }, _react2.default.createElement('img', { className: 'card-img-top mx-auto d-block', src: '/static/img/product/foca2.jpg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 190
                }
            })), _react2.default.createElement('div', { className: 'card-body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 192
                }
            }, _react2.default.createElement('h5', { className: 'card-title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 193
                }
            }, 'FOCALLURE Brand Liquid Lipstick Matte Waterproof'), _react2.default.createElement('p', { className: 'text-danger', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 194
                }
            }, '199 \u0E1A\u0E32\u0E17'), _react2.default.createElement('p', { className: 'text-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 195
                }
            }, _react2.default.createElement('a', { href: '#', className: 'btn btn-success btn-block', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 195
                }
            }, 'Add to cart'))))))))))));
        }
    }]);

    return Main;
}(_react2.default.Component);

exports.default = Main;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJNeUxheW91dCIsInN0eWxlZCIsImluamVjdEdsb2JhbCIsIlNsaWRlciIsIkNhcm91c2VsIiwiTWFpbiIsInByb3BzIiwic3RhdGUiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93IiwiYWRhcHRpdmVIZWlnaHQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWM7Ozs7Ozs7Ozs7QUFFckI7O0ksQUFTTTtrQ0FDRjs7a0JBQUEsQUFBWSxPQUFPOzRDQUFBOztzSUFBQSxBQUNULEFBQ047O2NBQUEsQUFBSyxRQUZVLEFBRWYsQUFBYTtlQUNoQjs7Ozs7aUNBRVEsQUFDTDtnQkFBTTtzQkFBVyxBQUNQLEFBQ047MEJBRmEsQUFFSCxBQUNWO3VCQUhhLEFBR04sQUFDUDs4QkFKYSxBQUlDLEFBQ2Q7Z0NBTEosQUFBaUIsQUFLRSxBQUVyQjtBQVBtQixBQUNiO21DQU9KLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRlIsQUFDSSxBQUNJLEFBRUosc0ZBQUEsQUFBQzs7OEJBQUQ7Z0NBSkosQUFJSSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxB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SjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjtzREFDUyxXQUFMLEFBQWUsZ0NBQStCLEtBQTlDLEFBQWtEOzhCQUFsRDtnQ0FGUixBQUNJLEFBQ0ksQUFFSjtBQUZJO2lDQUVKLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsUUFBSSxXQUFKLEFBQWM7OEJBQWQ7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFDQSxxRUFBQSxjQUFBLE9BQUcsV0FBSCxBQUFhOzhCQUFiO2dDQUFBO0FBQUE7ZUFGSixBQUVJLEFBQ0EsMkNBQUEsY0FBQSxPQUFHLFdBQUgsQUFBYTs4QkFBYjtnQ0FBQSxBQUEyQjtBQUEzQjsrQkFBMkIsY0FBQSxPQUFHLE1BQUgsQUFBUSxLQUFJLFdBQVosQUFBc0I7OEJBQXRCO2dDQUFBO0FBQUE7ZUFyS3JFLEFBQ0UsQUFDSSxBQUtJLEFBQ0ksQUFDSSxBQUNJLEFBMkdJLEFBd0NJLEFBQ0ksQUFJSSxBQUdJLEFBQTJCLEFBY3RFOzs7OztFQWpNYyxnQkFBTSxBLEFBb016Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhhY2hhcmEvRGVza3RvcC9Qcm9qZWN0LzIwMTcvSG9tZXdvcmsvRGF0YWJhc2VIdW5zYSJ9