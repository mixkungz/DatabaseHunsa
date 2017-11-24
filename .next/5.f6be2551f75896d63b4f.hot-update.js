webpackHotUpdate(5,{

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = __webpack_require__(394);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _adminlayout = __webpack_require__(414);

var _adminlayout2 = _interopRequireDefault(_adminlayout);

var _portlet = __webpack_require__(432);

var _portlet2 = _interopRequireDefault(_portlet);

var _styledComponents = __webpack_require__(395);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = __webpack_require__(396);

var _link2 = _interopRequireDefault(_link);

var _axios = __webpack_require__(433);

var _axios2 = _interopRequireDefault(_axios);

var _index = __webpack_require__(101);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/phachara/Desktop/Project/2017/Homework/DatabaseHunsa/pages/admin/productedit.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    .col-form-label{\n        font-size:1em !important;\n    }\n'], ['\n    .col-form-label{\n        font-size:1em !important;\n    }\n']);

(0, _styledComponents.injectGlobal)(_templateObject);

var ProductManagement = function (_React$Component) {
    (0, _inherits3.default)(ProductManagement, _React$Component);

    function ProductManagement() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ProductManagement);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ProductManagement.__proto__ || (0, _getPrototypeOf2.default)(ProductManagement)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            uploadData: {
                productname: null,
                productdesc: null,
                quantity: null,
                price: null,
                category: 0,
                img: null
            },
            catlist: [],
            query: null
        }, _this.componentWillMount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var _catlist, catlist;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (_index2.default.query.length) {
                                _context.next = 4;
                                break;
                            }

                            console.log('no query');
                            _context.next = 8;
                            break;

                        case 4:
                            _this.setState({ query: _index2.default.query.productID });
                            _context.next = 7;
                            return (0, _axios2.default)({
                                method: 'get',
                                url: 'http://localhost:3001/product/' + _this.state.query
                            }).then(function (res) {
                                return res;
                            });

                        case 7:
                            _catlist = _context.sent;

                        case 8:
                            _context.next = 10;
                            return (0, _axios2.default)({
                                method: 'get',
                                url: 'http://localhost:3001/product/productcat'
                            }).then(function (res) {
                                return res;
                            });

                        case 10:
                            catlist = _context.sent;

                            _this.setState({ catlist: catlist.data });

                        case 12:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.upload = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var _ref4, productname, productdesc, quantity, price, category, img, productnameform, productdescform, quantityform, _quantityform, priceform;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _this.state.uploadData;

                        case 2:
                            _ref4 = _context2.sent;
                            productname = _ref4.productname;
                            productdesc = _ref4.productdesc;
                            quantity = _ref4.quantity;
                            price = _ref4.price;
                            category = _ref4.category;
                            img = _ref4.img;

                            if (productname == null) {
                                productnameform = document.getElementById('productname');

                                productnameform.classList.add('is-invalid');
                                alert('Please input productname');
                            }
                            if (productdesc == null) {
                                productdescform = document.getElementById('productdesc');

                                productdescform.classList.add('is-invalid');
                                alert('Please input productdesc');
                            }
                            if (quantity == null) {
                                quantityform = document.getElementById('quantity');

                                quantityform.classList.add('is-invalid');
                                alert('Please input quantity');
                            }
                            if (quantity < 0) {
                                _quantityform = document.getElementById('quantity');

                                _quantityform.classList.add('is-invalid');
                                alert('Please check quantity');
                            }

                            if (!(price == null)) {
                                _context2.next = 19;
                                break;
                            }

                            priceform = document.getElementById('price');

                            priceform.classList.add('is-invalid');
                            alert('Please input price');
                            _context2.next = 22;
                            break;

                        case 19:
                            _context2.next = 21;
                            return (0, _axios2.default)({
                                method: 'post',
                                url: 'http://localhost:3001/admin/product/add',
                                data: {
                                    productname: productname,
                                    productdesc: productdesc,
                                    quantity: quantity,
                                    price: price,
                                    category: category,
                                    img: img
                                }
                            }).then(function (response) {
                                console.log(response.data);
                                if (response.data.status == true) {
                                    alert('แอดเรียบร้อย');
                                } else if (response.data.status == false) {
                                    alert(response.data.msg);
                                }
                            }).catch(function (error) {});

                        case 21:
                            console.log('shoot');

                        case 22:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        })), _this.check = function () {
            console.log(_this.state.uploadData.productname);
            console.log(_this.state.uploadData.productdesc);
            console.log(_this.state.uploadData.quantity);
            console.log(_this.state.uploadData.price);
            console.log(_this.state.uploadData.category);
            console.log(_this.state.uploadData.img);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ProductManagement, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, _react2.default.createElement(_adminlayout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                }
            }, _react2.default.createElement('div', { className: 'col-12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }, _react2.default.createElement(_portlet2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            }, '\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 125
                }
            }, _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'productname', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { productname: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            }, _react2.default.createElement('label', { 'for': 'inputPassword', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                }
            }, '\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                }
            }, _react2.default.createElement('select', { className: 'form-control', id: 'category', 'data-init-plugin': 'select2', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { category: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                }
            }, this.state.catlist.map(function (data, index) {
                return _react2.default.createElement('option', { value: index, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 135
                    }
                }, data);
            })))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                }
            }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                }
            }, '\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 142
                }
            }, _react2.default.createElement('textarea', { className: 'form-control', id: 'productdesc', rows: '5', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { productdesc: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 143
                }
            }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 146
                }
            }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 147
                }
            }, '\u0E23\u0E32\u0E04\u0E32\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 (\u0E1A\u0E32\u0E17)'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 148
                }
            }, _react2.default.createElement('input', { type: 'number', className: 'form-control', id: 'price', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { price: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                }
            }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 152
                }
            }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 153
                }
            }, '\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 154
                }
            }, _react2.default.createElement('input', { type: 'number', className: 'form-control', id: 'quantity', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { quantity: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 155
                }
            }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 158
                }
            }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 159
                }
            }, '\u0E23\u0E39\u0E1B\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160
                }
            }, _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'imglink', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { img: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 161
                }
            }))), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
                }
            }), _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 165
                }
            }, _react2.default.createElement('div', { className: 'col-11', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
                }
            }, _react2.default.createElement('button', { className: 'btn btn-success pull-right', onClick: this.upload, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 167
                }
            }, 'Save'), _react2.default.createElement(_link2.default, { href: 'productmanagement', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 168
                }
            }, _react2.default.createElement('button', { className: 'btn btn-danger pull-right mr-2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 169
                }
            }, 'Cancel')))))))));
        }
    }]);

    return ProductManagement;
}(_react2.default.Component);

exports.default = ProductManagement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FkbWluL3Byb2R1Y3RlZGl0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQWRtaW5MYXlvdXQiLCJQb3J0bGV0Iiwic3R5bGVkIiwiaW5qZWN0R2xvYmFsIiwiTGluayIsIkF4aW9zIiwiUm91dGVyIiwiUHJvZHVjdE1hbmFnZW1lbnQiLCJzdGF0ZSIsInVwbG9hZERhdGEiLCJwcm9kdWN0bmFtZSIsInByb2R1Y3RkZXNjIiwicXVhbnRpdHkiLCJwcmljZSIsImNhdGVnb3J5IiwiaW1nIiwiY2F0bGlzdCIsInF1ZXJ5IiwiY29tcG9uZW50V2lsbE1vdW50IiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwicHJvZHVjdElEIiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlcyIsImRhdGEiLCJ1cGxvYWQiLCJwcm9kdWN0bmFtZWZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWxlcnQiLCJwcm9kdWN0ZGVzY2Zvcm0iLCJxdWFudGl0eWZvcm0iLCJwcmljZWZvcm0iLCJyZXNwb25zZSIsInN0YXR1cyIsIm1zZyIsImNhdGNoIiwiZXJyb3IiLCJjaGVjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImluZGV4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7OztBQUVQOztJLEFBTU07Ozs7Ozs7Ozs7Ozs7OztzTyxBQUNGOzs2QkFDaUIsQUFDSyxBQUNkOzZCQUZTLEFBRUssQUFDZDswQkFIUyxBQUdFLEFBQ1g7dUJBSlMsQUFJRCxBQUNSOzBCQUxTLEFBS0EsQUFDVDtxQkFQRixBQUNXLEFBTUwsQUFF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TyxPQUFQLEFBQVcsZUFBYyxXQUF6QixBQUFtQzs4QkFBbkM7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFDQSx1RkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjt3REFDVyxNQUFQLEFBQVksVUFBUyxXQUFyQixBQUErQixnQkFBZSxJQUE5QyxBQUFpRCxZQUFXLFVBQVUsa0JBQUEsQUFBQyxHQUFEOzJCQUFLLE9BQUEsQUFBSyxTQUFTLEVBQUMsdUNBQWUsT0FBQSxBQUFLLE1BQXBCLEFBQTBCLGNBQVcsVUFBUyxFQUFBLEFBQUUsT0FBcEUsQUFBSyxBQUFjLEFBQUMsQUFBdUQ7QUFBako7OEJBQUE7Z0NBakNoQixBQThCUSxBQUVJLEFBQ0ksQUFHUjtBQUhRO2tDQUdSLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsV0FBTyxPQUFQLEFBQVcsZUFBYyxXQUF6QixBQUFtQzs4QkFBbkM7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFDQSxtR0FBQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjt3REFDVyxNQUFQLEFBQVksUUFBTyxXQUFuQixBQUE2QixnQkFBZSxJQUE1QyxBQUErQyxXQUFVLFVBQVUsa0JBQUEsQUFBQyxHQUFEOzJCQUFLLE9BQUEsQUFBSyxTQUFTLEVBQUMsdUNBQWUsT0FBQSxBQUFLLE1BQXBCLEFBQTBCLGNBQVcsS0FBSSxFQUFBLEFBQUUsT0FBL0QsQUFBSyxBQUFjLEFBQUMsQUFBa0Q7QUFBekk7OEJBQUE7Z0NBdkNoQixBQW9DUSxBQUVJLEFBQ0ksQUFHWjtBQUhZOzs7OEJBR1o7Z0NBMUNKLEFBMENJLEFBQ0E7QUFEQTtBQUFBLGdDQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsWUFBUSxXQUFSLEFBQWtCLDhCQUE2QixTQUFTLEtBQXhELEFBQTZEOzhCQUE3RDtnQ0FBQTtBQUFBO2VBREosQUFDSSxBQUNBLHlCQUFBLEFBQUMsZ0NBQUssTUFBTixBQUFXOzhCQUFYO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFlBQVEsV0FBUixBQUFrQjs4QkFBbEI7Z0NBQUE7QUFBQTtlQXBEaEMsQUFDQSxBQUNJLEFBQ0ksQUFDSSxBQUNJLEFBMkNJLEFBQ0ksQUFFSSxBQUNJLEFBV25DOzs7OztFQXJLMkIsZ0JBQU0sQSxBQXlLdEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoicHJvZHVjdGVkaXQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BoYWNoYXJhL0Rlc2t0b3AvUHJvamVjdC8yMDE3L0hvbWV3b3JrL0RhdGFiYXNlSHVuc2EifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/phachara/Desktop/Project/2017/Homework/DatabaseHunsa/pages/admin/productedit.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/phachara/Desktop/Project/2017/Homework/DatabaseHunsa/pages/admin/productedit.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/admin/productedit")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mNmJlMjU1MWY3NTg5NmQ2M2I0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vcHJvZHVjdGVkaXQuanM/YTA4NjM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFkbWluTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYWRtaW5sYXlvdXQnXG5pbXBvcnQgUG9ydGxldCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BvcnRsZXQnXG5pbXBvcnQgc3R5bGVkICwgeyBpbmplY3RHbG9iYWwgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmluamVjdEdsb2JhbGBcbiAgICAuY29sLWZvcm0tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZToxZW0gIWltcG9ydGFudDtcbiAgICB9XG5gXG5cbmNsYXNzIFByb2R1Y3RNYW5hZ2VtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZT17XG4gICAgICAgIHVwbG9hZERhdGEgOiB7XG4gICAgICAgICAgICBwcm9kdWN0bmFtZSA6IG51bGwsXG4gICAgICAgICAgICBwcm9kdWN0ZGVzYyA6IG51bGwsXG4gICAgICAgICAgICBxdWFudGl0eSA6IG51bGwsXG4gICAgICAgICAgICBwcmljZSA6IG51bGwsXG4gICAgICAgICAgICBjYXRlZ29yeTowLFxuICAgICAgICAgICAgaW1nOm51bGxcbiAgICAgICAgfSxcbiAgICAgICAgY2F0bGlzdCA6W10sXG4gICAgICAgIHF1ZXJ5Om51bGxcbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50V2lsbE1vdW50ID0gYXN5bmMoKSA9PntcbiAgICAgICAgaWYoIVJvdXRlci5xdWVyeS5sZW5ndGgpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIHF1ZXJ5JylcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVlcnk6Um91dGVyLnF1ZXJ5LnByb2R1Y3RJRH0pXG4gICAgICAgICAgICBsZXQgY2F0bGlzdCA9YXdhaXQgQXhpb3Moe1xuICAgICAgICAgICAgICAgIG1ldGhvZDonZ2V0JyxcbiAgICAgICAgICAgICAgICB1cmw6YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9wcm9kdWN0LyR7dGhpcy5zdGF0ZS5xdWVyeX1gLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjYXRsaXN0ID1hd2FpdCBBeGlvcyh7XG4gICAgICAgICAgICBtZXRob2Q6J2dldCcsXG4gICAgICAgICAgICB1cmw6J2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9wcm9kdWN0L3Byb2R1Y3RjYXQnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NhdGxpc3QgOiBjYXRsaXN0LmRhdGF9KVxuICAgIH1cblxuICAgIHVwbG9hZCA9IGFzeW5jKCkgPT57XG4gICAgICAgIGxldCB7IHByb2R1Y3RuYW1lLCBwcm9kdWN0ZGVzYyAsIHF1YW50aXR5ICwgcHJpY2UsIGNhdGVnb3J5ICwgaW1nIH0gPSBhd2FpdCB0aGlzLnN0YXRlLnVwbG9hZERhdGFcbiAgICAgICAgXG4gICAgICAgIGlmKHByb2R1Y3RuYW1lID09IG51bGwpe1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdG5hbWVmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RuYW1lJylcbiAgICAgICAgICAgIHByb2R1Y3RuYW1lZm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGlucHV0IHByb2R1Y3RuYW1lJylcbiAgICAgICAgfVxuICAgICAgICBpZihwcm9kdWN0ZGVzYyA9PSBudWxsKXtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RkZXNjZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0ZGVzYycpXG4gICAgICAgICAgICBwcm9kdWN0ZGVzY2Zvcm0uY2xhc3NMaXN0LmFkZCgnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBpbnB1dCBwcm9kdWN0ZGVzYycpXG4gICAgICAgIH1cbiAgICAgICAgaWYocXVhbnRpdHkgPT0gbnVsbCl7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eWZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVhbnRpdHknKVxuICAgICAgICAgICAgcXVhbnRpdHlmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgaW5wdXQgcXVhbnRpdHknKVxuICAgICAgICB9XG4gICAgICAgIGlmKHF1YW50aXR5IDwgMCl7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eWZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVhbnRpdHknKVxuICAgICAgICAgICAgcXVhbnRpdHlmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgY2hlY2sgcXVhbnRpdHknKVxuICAgICAgICB9XG4gICAgICAgIGlmKHByaWNlID09IG51bGwpe1xuICAgICAgICAgICAgY29uc3QgcHJpY2Vmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaWNlJylcbiAgICAgICAgICAgIHByaWNlZm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGlucHV0IHByaWNlJylcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgYXdhaXQgQXhpb3Moe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hZG1pbi9wcm9kdWN0L2FkZCcsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0bmFtZTogcHJvZHVjdG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RkZXNjOiBwcm9kdWN0ZGVzYyxcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IHF1YW50aXR5LFxuICAgICAgICAgICAgICAgICAgICBwcmljZTogcHJpY2UsXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgaW1nOmltZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnN0YXR1cyA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ+C5geC4reC4lOC5gOC4o+C4teC4ouC4muC4o+C5ieC4reC4oicpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXNwb25zZS5kYXRhLm1zZylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvb3QnKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrID0gKCkgPT57XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudXBsb2FkRGF0YS5wcm9kdWN0bmFtZSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS51cGxvYWREYXRhLnByb2R1Y3RkZXNjKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnVwbG9hZERhdGEucXVhbnRpdHkpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudXBsb2FkRGF0YS5wcmljZSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS51cGxvYWREYXRhLmNhdGVnb3J5KVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnVwbG9hZERhdGEuaW1nKVxuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEFkbWluTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9ydGxldD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN0YXRpY0VtYWlsXCIgY2xhc3NOYW1lPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodCBtci0zXCI+4LiK4Li34LmI4Lit4Liq4Li04LiZ4LiE4LmJ4LiyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInByb2R1Y3RuYW1lXCIgb25DaGFuZ2U9eyhlKT0+dGhpcy5zZXRTdGF0ZSh7dXBsb2FkRGF0YTp7Li4udGhpcy5zdGF0ZS51cGxvYWREYXRhLHByb2R1Y3RuYW1lOmUudGFyZ2V0LnZhbHVlfX0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXRQYXNzd29yZFwiIGNsYXNzTmFtZT1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHQgbXItM1wiPuC4q+C4oeC4p+C4lOC4q+C4oeC4ueC5iDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImNhdGVnb3J5XCIgZGF0YS1pbml0LXBsdWdpbj1cInNlbGVjdDJcIiAgb25DaGFuZ2U9eyhlKT0+dGhpcy5zZXRTdGF0ZSh7dXBsb2FkRGF0YTp7Li4udGhpcy5zdGF0ZS51cGxvYWREYXRhLGNhdGVnb3J5OmUudGFyZ2V0LnZhbHVlfX0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYXRsaXN0Lm1hcCgoZGF0YSxpbmRleCk9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2luZGV4fT57ZGF0YX08L29wdGlvbj4gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdGF0aWNFbWFpbFwiIGNsYXNzTmFtZT1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHQgbXItM1wiPuC4o+C4suC4ouC4peC4sOC5gOC4reC4teC4ouC4lOC4quC4tOC4meC4hOC5ieC4sjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwicHJvZHVjdGRlc2NcIiByb3dzPVwiNVwiIG9uQ2hhbmdlPXsoZSk9PnRoaXMuc2V0U3RhdGUoe3VwbG9hZERhdGE6ey4uLnRoaXMuc3RhdGUudXBsb2FkRGF0YSxwcm9kdWN0ZGVzYzplLnRhcmdldC52YWx1ZX19KX0+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN0YXRpY0VtYWlsXCIgY2xhc3NOYW1lPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodCBtci0zXCI+4Lij4Liy4LiE4Liy4Liq4Li04LiZ4LiE4LmJ4LiyICjguJrguLLguJcpPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwicHJpY2VcIiBvbkNoYW5nZT17KGUpPT50aGlzLnNldFN0YXRlKHt1cGxvYWREYXRhOnsuLi50aGlzLnN0YXRlLnVwbG9hZERhdGEscHJpY2U6ZS50YXJnZXQudmFsdWV9fSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdGF0aWNFbWFpbFwiIGNsYXNzTmFtZT1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHQgbXItM1wiPuC4iOC4s+C4meC4p+C4meC4quC4tOC4meC4hOC5ieC4sjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInF1YW50aXR5XCIgb25DaGFuZ2U9eyhlKT0+dGhpcy5zZXRTdGF0ZSh7dXBsb2FkRGF0YTp7Li4udGhpcy5zdGF0ZS51cGxvYWREYXRhLHF1YW50aXR5OmUudGFyZ2V0LnZhbHVlfX0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3RhdGljRW1haWxcIiBjbGFzc05hbWU9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0IG1yLTNcIj7guKPguLnguJvguKrguLTguJnguITguYnguLLguKvguKXguLHguIE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiaW1nbGlua1wiIG9uQ2hhbmdlPXsoZSk9PnRoaXMuc2V0U3RhdGUoe3VwbG9hZERhdGE6ey4uLnRoaXMuc3RhdGUudXBsb2FkRGF0YSxpbWc6ZS50YXJnZXQudmFsdWV9fSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIHB1bGwtcmlnaHRcIiBvbkNsaWNrPXt0aGlzLnVwbG9hZH0+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cInByb2R1Y3RtYW5hZ2VtZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBwdWxsLXJpZ2h0IG1yLTJcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BvcnRsZXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9BZG1pbkxheW91dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RNYW5hZ2VtZW50XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvYWRtaW4vcHJvZHVjdGVkaXQuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVBBO0FBUUE7O0FBVEE7QUFZQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQUFBO0FBQ0E7QUFJQTtBQUFBO0FBTEE7O0FBUUE7QUFBQTtBQURBO0FBS0E7QUFOQTtBQUNBO0FBREE7QUFOQTtBQUNBO0FBREE7QUFBQTs7QUFnQkE7QUFBQTtBQURBO0FBS0E7QUFOQTtBQUNBO0FBREE7QUFkQTtBQUNBO0FBb0JBO0FBQ0E7QUF0QkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUF3QkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBdEJBO0FBQ0E7QUFzQkE7QUF2QkE7QUFBQTtBQXdCQTtBQUNBO0FBekJBO0FBQ0E7QUF3QkE7QUFDQTtBQTFCQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQStCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUxBO0FBSEE7QUFXQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBRUE7QUFuQkE7QUFDQTtBQXNCQTtBQUFBO0FBQ0E7QUFyREE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUF1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBSEE7OztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFXQTs7Ozs7QUFyS0E7QUFDQTtBQXdLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9