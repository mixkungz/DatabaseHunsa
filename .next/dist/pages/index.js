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

var _head = require('next\\dist\\lib\\head.js');

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

var _jsxFileName = 'C:\\Users\\Nattanat\\Documents\\gib\\DB project\\databasehunsa\\pages\\index.js?entry';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJIZWFkIiwiTXlMYXlvdXQiLCJzdHlsZWQiLCJpbmplY3RHbG9iYWwiLCJTbGlkZXIiLCJDYXJvdXNlbCIsIk1haW4iLCJwcm9wcyIsInN0YXRlIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsImFkYXB0aXZlSGVpZ2h0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFjOzs7Ozs7Ozs7O0FBRXJCOztJLEFBU007a0NBQ0Y7O2tCQUFBLEFBQVksT0FBTzs0Q0FBQTs7c0lBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUssUUFGVSxBQUVmLEFBQWE7ZUFDaEI7Ozs7O2lDQUVRLEFBQ0w7Z0JBQU07c0JBQVcsQUFDUCxBQUNOOzBCQUZhLEFBRUgsQUFDVjt1QkFIYSxBQUdOLEFBQ1A7OEJBSmEsQUFJQyxBQUNkO2dDQUxKLEFBQWlCLEFBS0UsQUFFckI7QUFQbUIsQUFDYjttQ0FPSixjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZSLEFBQ0ksQUFDSSxBQUVKLHNGQUFBLEFBQUM7OzhCQUFEO2dDQUpKLEFBSUksQUFDQTtBQURBO0FBQUEsZ0NBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUws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REo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7c0RBQ1MsV0FBTCxBQUFlLGdDQUErQixLQUE5QyxBQUFrRDs4QkFBbEQ7Z0NBRlIsQUFDSSxBQUNJLEFBRUo7QUFGSTtpQ0FFSixjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFFBQUksV0FBSixBQUFjOzhCQUFkO2dDQUFBO0FBQUE7ZUFESixBQUNJLEFBQ0EscUVBQUEsY0FBQSxPQUFHLFdBQUgsQUFBYTs4QkFBYjtnQ0FBQTtBQUFBO2VBRkosQUFFSSxBQUNBLDJDQUFBLGNBQUEsT0FBRyxXQUFILEFBQWE7OEJBQWI7Z0NBQUEsQUFBMkI7QUFBM0I7K0JBQTJCLGNBQUEsT0FBRyxNQUFILEFBQVEsS0FBSSxXQUFaLEFBQXNCOzhCQUF0QjtnQ0FBQTtBQUFBO2VBcktyRSxBQUNFLEFBQ0ksQUFLSSxBQUNJLEFBQ0ksQUFDSSxBQTJHSSxBQXdDSSxBQUNJLEFBSUksQUFHSSxBQUEyQixBQWN0RTs7Ozs7RUFqTWMsZ0JBQU0sQSxBQW9NekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvTmF0dGFuYXQvRG9jdW1lbnRzL2dpYi9EQiBwcm9qZWN0L2RhdGFiYXNlaHVuc2EifQ==