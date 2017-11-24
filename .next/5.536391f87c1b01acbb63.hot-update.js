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
            query: -1

        }, _this.componentWillMount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var ProductData, catlist;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (_index2.default.query.productID) {
                                _context.next = 4;
                                break;
                            }

                            console.log('no query');
                            _context.next = 11;
                            break;

                        case 4:
                            _context.next = 6;
                            return _this.setState({ query: _index2.default.query.productID });

                        case 6:
                            _context.next = 8;
                            return (0, _axios2.default)({
                                method: 'get',
                                url: 'http://localhost:3001/product/' + _this.state.query
                            }).then(function (res) {
                                return res;
                            });

                        case 8:
                            ProductData = _context.sent;
                            _context.next = 11;
                            return _this.setState({ uploadData: {
                                    productname: ProductData.data[0].ProductName,
                                    productdesc: ProductData.data[0].ProductDesc,
                                    quantity: ProductData.data[0].Quantity,
                                    price: ProductData.data[0].ProductPrice,
                                    category: ProductData.data[0].CategoryID,
                                    img: ProductData.data[0].ProductImg
                                } });

                        case 11:
                            _context.next = 13;
                            return (0, _axios2.default)({
                                method: 'get',
                                url: 'http://localhost:3001/product/productcat'
                            }).then(function (res) {
                                return res;
                            });

                        case 13:
                            catlist = _context.sent;

                            _this.setState({ catlist: catlist.data });

                        case 15:
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
        })), _this.update = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            var _ref6, productname, productdesc, quantity, price, category, img, productnameform, productdescform, quantityform, _quantityform2, priceform;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return _this.state.uploadData;

                        case 2:
                            _ref6 = _context3.sent;
                            productname = _ref6.productname;
                            productdesc = _ref6.productdesc;
                            quantity = _ref6.quantity;
                            price = _ref6.price;
                            category = _ref6.category;
                            img = _ref6.img;

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
                                _quantityform2 = document.getElementById('quantity');

                                _quantityform2.classList.add('is-invalid');
                                alert('Please check quantity');
                            }

                            if (!(price == null)) {
                                _context3.next = 19;
                                break;
                            }

                            priceform = document.getElementById('price');

                            priceform.classList.add('is-invalid');
                            alert('Please input price');
                            _context3.next = 22;
                            break;

                        case 19:
                            _context3.next = 21;
                            return (0, _axios2.default)({
                                method: 'post',
                                url: 'http://localhost:3001/admin/product/update/' + _this.state.query,
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
                            return _context3.stop();
                    }
                }
            }, _callee3, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ProductManagement, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            var S = function S() {
                return _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 175
                    }
                }, _react2.default.createElement(_portlet2.default, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 176
                    }
                }, _react2.default.createElement('div', { className: 'form-group row', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 177
                    }
                }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 178
                    }
                }, '\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 179
                    }
                }, _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'productname', onChange: function onChange(e) {
                        return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { productname: e.target.value }) });
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 180
                    }
                }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 183
                    }
                }, _react2.default.createElement('label', { 'for': 'inputPassword', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 184
                    }
                }, '\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 185
                    }
                }, _react2.default.createElement('select', { className: 'form-control', id: 'category', 'data-init-plugin': 'select2', onChange: function onChange(e) {
                        return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { category: e.target.value }) });
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 186
                    }
                }, _this3.state.catlist.map(function (data, index) {
                    return _react2.default.createElement('option', { value: index, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 189
                        }
                    }, data);
                })))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 194
                    }
                }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 195
                    }
                }, '\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 196
                    }
                }, _react2.default.createElement('textarea', { className: 'form-control', id: 'productdesc', rows: '5', onChange: function onChange(e) {
                        return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { productdesc: e.target.value }) });
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 197
                    }
                }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 200
                    }
                }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 201
                    }
                }, '\u0E23\u0E32\u0E04\u0E32\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 (\u0E1A\u0E32\u0E17)'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 202
                    }
                }, _react2.default.createElement('input', { type: 'number', className: 'form-control', id: 'price', onChange: function onChange(e) {
                        return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { price: e.target.value }) });
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 203
                    }
                }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 206
                    }
                }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 207
                    }
                }, '\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 208
                    }
                }, _react2.default.createElement('input', { type: 'number', className: 'form-control', id: 'quantity', onChange: function onChange(e) {
                        return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { quantity: e.target.value }) });
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 209
                    }
                }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 212
                    }
                }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 213
                    }
                }, '\u0E23\u0E39\u0E1B\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 214
                    }
                }, _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'imglink', onChange: function onChange(e) {
                        return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { img: e.target.value }) });
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 215
                    }
                }))), _react2.default.createElement('hr', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 218
                    }
                }), _react2.default.createElement('div', { className: 'row', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 219
                    }
                }, _react2.default.createElement('div', { className: 'col-11', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 220
                    }
                }, _react2.default.createElement('button', { className: 'btn btn-success pull-right', onClick: _this3.upload, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 221
                    }
                }, 'Save'), _react2.default.createElement(_link2.default, { href: 'productmanagement', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 222
                    }
                }, _react2.default.createElement('button', { className: 'btn btn-danger pull-right mr-2', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 223
                    }
                }, 'Cancel'))))));
            };
            if (this.state.query !== -1) {
                S = function S() {
                    return _react2.default.createElement('div', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 233
                        }
                    }, _react2.default.createElement(_portlet2.default, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 234
                        }
                    }, _react2.default.createElement('div', { className: 'form-group row', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 235
                        }
                    }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 236
                        }
                    }, '\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 237
                        }
                    }, _react2.default.createElement('input', { type: 'text', className: 'form-control', value: _this3.state.uploadData.productname, id: 'productname', onChange: function onChange(e) {
                            return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { productname: e.target.value }) });
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 238
                        }
                    }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 241
                        }
                    }, _react2.default.createElement('label', { 'for': 'inputPassword', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 242
                        }
                    }, '\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 243
                        }
                    }, _react2.default.createElement('select', { className: 'form-control', id: 'category', 'data-init-plugin': 'select2', onChange: function onChange(e) {
                            return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { category: e.target.value }) });
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 244
                        }
                    }, _this3.state.catlist.map(function (data, index) {
                        return _react2.default.createElement('option', { value: index, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 247
                            }
                        }, data);
                    })))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 252
                        }
                    }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 253
                        }
                    }, '\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 254
                        }
                    }, _react2.default.createElement('textarea', { className: 'form-control', value: _this3.state.uploadData.productdesc, id: 'productdesc', rows: '5', onChange: function onChange(e) {
                            return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { productdesc: e.target.value }) });
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 255
                        }
                    }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 258
                        }
                    }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 259
                        }
                    }, '\u0E23\u0E32\u0E04\u0E32\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 (\u0E1A\u0E32\u0E17)'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 260
                        }
                    }, _react2.default.createElement('input', { type: 'number', className: 'form-control', value: _this3.state.uploadData.price, id: 'price', onChange: function onChange(e) {
                            return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { price: e.target.value }) });
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 261
                        }
                    }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 264
                        }
                    }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 265
                        }
                    }, '\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 266
                        }
                    }, _react2.default.createElement('input', { type: 'number', className: 'form-control', id: 'quantity', value: _this3.state.uploadData.quantity, onChange: function onChange(e) {
                            return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { quantity: e.target.value }) });
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 267
                        }
                    }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 270
                        }
                    }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 271
                        }
                    }, '\u0E23\u0E39\u0E1B\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 272
                        }
                    }, _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'imglink', value: _this3.state.uploadData.img, onChange: function onChange(e) {
                            return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { img: e.target.value }) });
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 273
                        }
                    }))), _react2.default.createElement('hr', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 277
                        }
                    }), _react2.default.createElement('div', { className: 'row', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 278
                        }
                    }, _react2.default.createElement('div', { className: 'col-11', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 279
                        }
                    }, _react2.default.createElement('button', { className: 'btn btn-success pull-right', onClick: _this3.update, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 280
                        }
                    }, 'Save'), _react2.default.createElement(_link2.default, { href: 'productmanagement', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 281
                        }
                    }, _react2.default.createElement('button', { className: 'btn btn-danger pull-right mr-2', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 282
                        }
                    }, 'Cancel'))))));
                };
            }

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 293
                }
            }, _react2.default.createElement(_adminlayout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 294
                }
            }, _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 295
                }
            }, _react2.default.createElement('div', { className: 'col-12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 296
                }
            }, _react2.default.createElement(S, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 298
                }
            })))));
        }
    }]);

    return ProductManagement;
}(_react2.default.Component);

exports.default = ProductManagement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FkbWluL3Byb2R1Y3RlZGl0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQWRtaW5MYXlvdXQiLCJQb3J0bGV0Iiwic3R5bGVkIiwiaW5qZWN0R2xvYmFsIiwiTGluayIsIkF4aW9zIiwiUm91dGVyIiwiUHJvZHVjdE1hbmFnZW1lbnQiLCJzdGF0ZSIsInVwbG9hZERhdGEiLCJwcm9kdWN0bmFtZSIsInByb2R1Y3RkZXNjIiwicXVhbnRpdHkiLCJwcmljZSIsImNhdGVnb3J5IiwiaW1nIiwiY2F0bGlzdCIsInF1ZXJ5IiwiY29tcG9uZW50V2lsbE1vdW50IiwicHJvZHVjdElEIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlcyIsIlByb2R1Y3REYXRhIiwiZGF0YSIsIlByb2R1Y3ROYW1lIiwiUHJvZHVjdERlc2MiLCJRdWFudGl0eSIsIlByb2R1Y3RQcmljZSIsIkNhdGVnb3J5SUQiLCJQcm9kdWN0SW1nIiwidXBsb2FkIiwicHJvZHVjdG5hbWVmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImFkZCIsImFsZXJ0IiwicHJvZHVjdGRlc2Nmb3JtIiwicXVhbnRpdHlmb3JtIiwicHJpY2Vmb3JtIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJtc2ciLCJjYXRjaCIsImVycm9yIiwidXBkYXRlIiwiUyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImluZGV4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7OztBQUVQOztJLEFBTU07Ozs7Ozs7Ozs7Ozs7OztzTyxBQUNGOzs2QkFDaUIsQUFD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QWMsQUFBQyxBQUFrRDtBQUEzSztzQ0FBQTt3Q0F2Q3BCLEFBb0NZLEFBRUksQUFDSSxBQUlaO0FBSlk7OztzQ0FJWjt3Q0EzQ1IsQUEyQ1EsQUFDQTtBQURBO0FBQUEsd0NBQ0EsY0FBQSxTQUFLLFdBQUwsQUFBZTtzQ0FBZjt3Q0FBQSxBQUNJO0FBREo7dUNBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTtzQ0FBZjt3Q0FBQSxBQUNJO0FBREo7dUNBQ0ksY0FBQSxZQUFRLFdBQVIsQUFBa0IsOEJBQTZCLFNBQVMsT0FBeEQsQUFBNkQ7c0NBQTdEO3dDQUFBO0FBQUE7dUJBREosQUFDSSxBQUNBLHlCQUFBLEFBQUMsZ0NBQUssTUFBTixBQUFXO3NDQUFYO3dDQUFBLEFBQ0k7QUFESjt1Q0FDSSxjQUFBLFlBQVEsV0FBUixBQUFrQjtzQ0FBbEI7d0NBQUE7QUFBQTt1QkFsRHhCLEFBQ0EsQUFDSSxBQTRDUSxBQUNJLEFBRUksQUFDSTtBQWxENUIsQUEwREg7QUFFRDs7bUNBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBRUk7QUFGSjs2Q0FFSSxBQUFDOzs4QkFBRDtnQ0FOaEIsQUFDQSxBQUNJLEFBQ0ksQUFDSSxBQUVJLEFBT25CO0FBUG1CO0FBQUE7Ozs7O0VBM1JRLGdCQUFNLEEsQUFzU3RDOztrQkFBQSxBQUFlIiwiZmlsZSI6InByb2R1Y3RlZGl0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waGFjaGFyYS9EZXNrdG9wL1Byb2plY3QvMjAxNy9Ib21ld29yay9EYXRhYmFzZUh1bnNhIn0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS41MzYzOTFmODdjMWIwMWFjYmI2My5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vcHJvZHVjdGVkaXQuanM/OTg2MGZlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFkbWluTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYWRtaW5sYXlvdXQnXG5pbXBvcnQgUG9ydGxldCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BvcnRsZXQnXG5pbXBvcnQgc3R5bGVkICwgeyBpbmplY3RHbG9iYWwgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmluamVjdEdsb2JhbGBcbiAgICAuY29sLWZvcm0tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZToxZW0gIWltcG9ydGFudDtcbiAgICB9XG5gXG5cbmNsYXNzIFByb2R1Y3RNYW5hZ2VtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZT17XG4gICAgICAgIHVwbG9hZERhdGEgOiB7XG4gICAgICAgICAgICBwcm9kdWN0bmFtZSA6IG51bGwsXG4gICAgICAgICAgICBwcm9kdWN0ZGVzYyA6IG51bGwsXG4gICAgICAgICAgICBxdWFudGl0eSA6IG51bGwsXG4gICAgICAgICAgICBwcmljZSA6IG51bGwsXG4gICAgICAgICAgICBjYXRlZ29yeTowLFxuICAgICAgICAgICAgaW1nOm51bGxcbiAgICAgICAgfSxcbiAgICAgICAgY2F0bGlzdCA6W10sXG4gICAgICAgIHF1ZXJ5Oi0xLFxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50V2lsbE1vdW50ID0gYXN5bmMoKSA9PntcbiAgICAgICAgaWYoIVJvdXRlci5xdWVyeS5wcm9kdWN0SUQpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIHF1ZXJ5JylcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRTdGF0ZSh7cXVlcnk6Um91dGVyLnF1ZXJ5LnByb2R1Y3RJRH0pXG4gICAgICAgICAgICBsZXQgUHJvZHVjdERhdGEgPWF3YWl0IEF4aW9zKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6J2dldCcsXG4gICAgICAgICAgICAgICAgdXJsOmBodHRwOi8vbG9jYWxob3N0OjMwMDEvcHJvZHVjdC8ke3RoaXMuc3RhdGUucXVlcnl9YCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoe3VwbG9hZERhdGE6e1xuICAgICAgICAgICAgICAgIHByb2R1Y3RuYW1lIDogUHJvZHVjdERhdGEuZGF0YVswXS5Qcm9kdWN0TmFtZSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0ZGVzYyA6IFByb2R1Y3REYXRhLmRhdGFbMF0uUHJvZHVjdERlc2MsXG4gICAgICAgICAgICAgICAgcXVhbnRpdHkgOiBQcm9kdWN0RGF0YS5kYXRhWzBdLlF1YW50aXR5LFxuICAgICAgICAgICAgICAgIHByaWNlIDogUHJvZHVjdERhdGEuZGF0YVswXS5Qcm9kdWN0UHJpY2UsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkgOiBQcm9kdWN0RGF0YS5kYXRhWzBdLkNhdGVnb3J5SUQsXG4gICAgICAgICAgICAgICAgaW1nIDogUHJvZHVjdERhdGEuZGF0YVswXS5Qcm9kdWN0SW1nXG4gICAgICAgICAgICB9fSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2F0bGlzdCA9YXdhaXQgQXhpb3Moe1xuICAgICAgICAgICAgbWV0aG9kOidnZXQnLFxuICAgICAgICAgICAgdXJsOidodHRwOi8vbG9jYWxob3N0OjMwMDEvcHJvZHVjdC9wcm9kdWN0Y2F0JyxcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjYXRsaXN0IDogY2F0bGlzdC5kYXRhfSlcbiAgICB9XG5cbiAgICB1cGxvYWQgPSBhc3luYygpID0+e1xuICAgICAgICBsZXQgeyBwcm9kdWN0bmFtZSwgcHJvZHVjdGRlc2MgLCBxdWFudGl0eSAsIHByaWNlLCBjYXRlZ29yeSAsIGltZyB9ID0gYXdhaXQgdGhpcy5zdGF0ZS51cGxvYWREYXRhXG4gICAgICAgIFxuICAgICAgICBpZihwcm9kdWN0bmFtZSA9PSBudWxsKXtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RuYW1lZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0bmFtZScpXG4gICAgICAgICAgICBwcm9kdWN0bmFtZWZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBpbnB1dCBwcm9kdWN0bmFtZScpXG4gICAgICAgIH1cbiAgICAgICAgaWYocHJvZHVjdGRlc2MgPT0gbnVsbCl7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ZGVzY2Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdGRlc2MnKVxuICAgICAgICAgICAgcHJvZHVjdGRlc2Nmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgaW5wdXQgcHJvZHVjdGRlc2MnKVxuICAgICAgICB9XG4gICAgICAgIGlmKHF1YW50aXR5ID09IG51bGwpe1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1YW50aXR5JylcbiAgICAgICAgICAgIHF1YW50aXR5Zm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGlucHV0IHF1YW50aXR5JylcbiAgICAgICAgfVxuICAgICAgICBpZihxdWFudGl0eSA8IDApe1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1YW50aXR5JylcbiAgICAgICAgICAgIHF1YW50aXR5Zm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGNoZWNrIHF1YW50aXR5JylcbiAgICAgICAgfVxuICAgICAgICBpZihwcmljZSA9PSBudWxsKXtcbiAgICAgICAgICAgIGNvbnN0IHByaWNlZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmljZScpXG4gICAgICAgICAgICBwcmljZWZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBpbnB1dCBwcmljZScpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGF3YWl0IEF4aW9zKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvYWRtaW4vcHJvZHVjdC9hZGQnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdG5hbWU6IHByb2R1Y3RuYW1lLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0ZGVzYzogcHJvZHVjdGRlc2MsXG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiBxdWFudGl0eSxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHByaWNlLFxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgICAgIGltZzppbWdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCfguYHguK3guJTguYDguKPguLXguKLguJrguKPguYnguK3guKInKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2UuZGF0YS5tc2cpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nob290JylcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUgPSBhc3luYygpID0+e1xuICAgICAgICBsZXQgeyBwcm9kdWN0bmFtZSwgcHJvZHVjdGRlc2MgLCBxdWFudGl0eSAsIHByaWNlLCBjYXRlZ29yeSAsIGltZyB9ID0gYXdhaXQgdGhpcy5zdGF0ZS51cGxvYWREYXRhXG4gICAgICAgIFxuICAgICAgICBpZihwcm9kdWN0bmFtZSA9PSBudWxsKXtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RuYW1lZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0bmFtZScpXG4gICAgICAgICAgICBwcm9kdWN0bmFtZWZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBpbnB1dCBwcm9kdWN0bmFtZScpXG4gICAgICAgIH1cbiAgICAgICAgaWYocHJvZHVjdGRlc2MgPT0gbnVsbCl7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ZGVzY2Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdGRlc2MnKVxuICAgICAgICAgICAgcHJvZHVjdGRlc2Nmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgaW5wdXQgcHJvZHVjdGRlc2MnKVxuICAgICAgICB9XG4gICAgICAgIGlmKHF1YW50aXR5ID09IG51bGwpe1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1YW50aXR5JylcbiAgICAgICAgICAgIHF1YW50aXR5Zm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGlucHV0IHF1YW50aXR5JylcbiAgICAgICAgfVxuICAgICAgICBpZihxdWFudGl0eSA8IDApe1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1YW50aXR5JylcbiAgICAgICAgICAgIHF1YW50aXR5Zm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGNoZWNrIHF1YW50aXR5JylcbiAgICAgICAgfVxuICAgICAgICBpZihwcmljZSA9PSBudWxsKXtcbiAgICAgICAgICAgIGNvbnN0IHByaWNlZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmljZScpXG4gICAgICAgICAgICBwcmljZWZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBpbnB1dCBwcmljZScpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGF3YWl0IEF4aW9zKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgICAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYWRtaW4vcHJvZHVjdC91cGRhdGUvJHt0aGlzLnN0YXRlLnF1ZXJ5fWAsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0bmFtZTogcHJvZHVjdG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RkZXNjOiBwcm9kdWN0ZGVzYyxcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IHF1YW50aXR5LFxuICAgICAgICAgICAgICAgICAgICBwcmljZTogcHJpY2UsXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgaW1nOmltZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnN0YXR1cyA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ+C5geC4reC4lOC5gOC4o+C4teC4ouC4muC4o+C5ieC4reC4oicpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXNwb25zZS5kYXRhLm1zZylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvb3QnKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpe1xuICAgICAgICBsZXQgUyA9ICgpID0+KFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UG9ydGxldD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN0YXRpY0VtYWlsXCIgY2xhc3NOYW1lPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodCBtci0zXCI+4LiK4Li34LmI4Lit4Liq4Li04LiZ4LiE4LmJ4LiyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInByb2R1Y3RuYW1lXCIgb25DaGFuZ2U9eyhlKT0+dGhpcy5zZXRTdGF0ZSh7dXBsb2FkRGF0YTp7Li4udGhpcy5zdGF0ZS51cGxvYWREYXRhLHByb2R1Y3RuYW1lOmUudGFyZ2V0LnZhbHVlfX0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXRQYXNzd29yZFwiIGNsYXNzTmFtZT1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHQgbXItM1wiPuC4q+C4oeC4p+C4lOC4q+C4oeC4ueC5iDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImNhdGVnb3J5XCIgZGF0YS1pbml0LXBsdWdpbj1cInNlbGVjdDJcIiAgb25DaGFuZ2U9eyhlKT0+dGhpcy5zZXRTdGF0ZSh7dXBsb2FkRGF0YTp7Li4udGhpcy5zdGF0ZS51cGxvYWREYXRhLGNhdGVnb3J5OmUudGFyZ2V0LnZhbHVlfX0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYXRsaXN0Lm1hcCgoZGF0YSxpbmRleCk9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2luZGV4fT57ZGF0YX08L29wdGlvbj4gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdGF0aWNFbWFpbFwiIGNsYXNzTmFtZT1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHQgbXItM1wiPuC4o+C4suC4ouC4peC4sOC5gOC4reC4teC4ouC4lOC4quC4tOC4meC4hOC5ieC4sjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwicHJvZHVjdGRlc2NcIiByb3dzPVwiNVwiIG9uQ2hhbmdlPXsoZSk9PnRoaXMuc2V0U3RhdGUoe3VwbG9hZERhdGE6ey4uLnRoaXMuc3RhdGUudXBsb2FkRGF0YSxwcm9kdWN0ZGVzYzplLnRhcmdldC52YWx1ZX19KX0+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN0YXRpY0VtYWlsXCIgY2xhc3NOYW1lPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodCBtci0zXCI+4Lij4Liy4LiE4Liy4Liq4Li04LiZ4LiE4LmJ4LiyICjguJrguLLguJcpPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwicHJpY2VcIiBvbkNoYW5nZT17KGUpPT50aGlzLnNldFN0YXRlKHt1cGxvYWREYXRhOnsuLi50aGlzLnN0YXRlLnVwbG9hZERhdGEscHJpY2U6ZS50YXJnZXQudmFsdWV9fSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdGF0aWNFbWFpbFwiIGNsYXNzTmFtZT1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHQgbXItM1wiPuC4iOC4s+C4meC4p+C4meC4quC4tOC4meC4hOC5ieC4sjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInF1YW50aXR5XCIgb25DaGFuZ2U9eyhlKT0+dGhpcy5zZXRTdGF0ZSh7dXBsb2FkRGF0YTp7Li4udGhpcy5zdGF0ZS51cGxvYWREYXRhLHF1YW50aXR5OmUudGFyZ2V0LnZhbHVlfX0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3RhdGljRW1haWxcIiBjbGFzc05hbWU9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0IG1yLTNcIj7guKPguLnguJvguKrguLTguJnguITguYnguLLguKvguKXguLHguIE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiaW1nbGlua1wiIG9uQ2hhbmdlPXsoZSk9PnRoaXMuc2V0U3RhdGUoe3VwbG9hZERhdGE6ey4uLnRoaXMuc3RhdGUudXBsb2FkRGF0YSxpbWc6ZS50YXJnZXQudmFsdWV9fSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIHB1bGwtcmlnaHRcIiBvbkNsaWNrPXt0aGlzLnVwbG9hZH0+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cInByb2R1Y3RtYW5hZ2VtZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBwdWxsLXJpZ2h0IG1yLTJcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BvcnRsZXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgICBpZih0aGlzLnN0YXRlLnF1ZXJ5ICE9PSAtMSl7XG4gICAgICAgICAgICBTID0gKCkgPT4oXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFBvcnRsZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdGF0aWNFbWFpbFwiIGNsYXNzTmFtZT1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHQgbXItM1wiPuC4iuC4t+C5iOC4reC4quC4tOC4meC4hOC5ieC4sjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9e3RoaXMuc3RhdGUudXBsb2FkRGF0YS5wcm9kdWN0bmFtZX0gaWQ9XCJwcm9kdWN0bmFtZVwiIG9uQ2hhbmdlPXsoZSk9PnRoaXMuc2V0U3RhdGUoe3VwbG9hZERhdGE6ey4uLnRoaXMuc3RhdGUudXBsb2FkRGF0YSxwcm9kdWN0bmFtZTplLnRhcmdldC52YWx1ZX19KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImlucHV0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0IG1yLTNcIj7guKvguKHguKfguJTguKvguKHguLnguYg8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJjYXRlZ29yeVwiIGRhdGEtaW5pdC1wbHVnaW49XCJzZWxlY3QyXCIgIG9uQ2hhbmdlPXsoZSk9PnRoaXMuc2V0U3RhdGUoe3VwbG9hZERhdGE6ey4uLnRoaXMuc3RhdGUudXBsb2FkRGF0YSxjYXRlZ29yeTplLnRhcmdldC52YWx1ZX19KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2F0bGlzdC5tYXAoKGRhdGEsaW5kZXgpPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpbmRleH0+e2RhdGF9PC9vcHRpb24+IClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3RhdGljRW1haWxcIiBjbGFzc05hbWU9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0IG1yLTNcIj7guKPguLLguKLguKXguLDguYDguK3guLXguKLguJTguKrguLTguJnguITguYnguLI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS51cGxvYWREYXRhLnByb2R1Y3RkZXNjfSBpZD1cInByb2R1Y3RkZXNjXCIgcm93cz1cIjVcIiBvbkNoYW5nZT17KGUpPT50aGlzLnNldFN0YXRlKHt1cGxvYWREYXRhOnsuLi50aGlzLnN0YXRlLnVwbG9hZERhdGEscHJvZHVjdGRlc2M6ZS50YXJnZXQudmFsdWV9fSl9PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdGF0aWNFbWFpbFwiIGNsYXNzTmFtZT1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsIHRleHQtcmlnaHQgbXItM1wiPuC4o+C4suC4hOC4suC4quC4tOC4meC4hOC5ieC4siAo4Lia4Liy4LiXKTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT17dGhpcy5zdGF0ZS51cGxvYWREYXRhLnByaWNlfSBpZD1cInByaWNlXCIgb25DaGFuZ2U9eyhlKT0+dGhpcy5zZXRTdGF0ZSh7dXBsb2FkRGF0YTp7Li4udGhpcy5zdGF0ZS51cGxvYWREYXRhLHByaWNlOmUudGFyZ2V0LnZhbHVlfX0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3RhdGljRW1haWxcIiBjbGFzc05hbWU9XCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbCB0ZXh0LXJpZ2h0IG1yLTNcIj7guIjguLPguJnguKfguJnguKrguLTguJnguITguYnguLI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJxdWFudGl0eVwiIHZhbHVlPXt0aGlzLnN0YXRlLnVwbG9hZERhdGEucXVhbnRpdHl9IG9uQ2hhbmdlPXsoZSk9PnRoaXMuc2V0U3RhdGUoe3VwbG9hZERhdGE6ey4uLnRoaXMuc3RhdGUudXBsb2FkRGF0YSxxdWFudGl0eTplLnRhcmdldC52YWx1ZX19KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN0YXRpY0VtYWlsXCIgY2xhc3NOYW1lPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWwgdGV4dC1yaWdodCBtci0zXCI+4Lij4Li54Lib4Liq4Li04LiZ4LiE4LmJ4Liy4Lir4Lil4Lix4LiBPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImltZ2xpbmtcIiB2YWx1ZT17dGhpcy5zdGF0ZS51cGxvYWREYXRhLmltZ30gb25DaGFuZ2U9eyhlKT0+dGhpcy5zZXRTdGF0ZSh7dXBsb2FkRGF0YTp7Li4udGhpcy5zdGF0ZS51cGxvYWREYXRhLGltZzplLnRhcmdldC52YWx1ZX19KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIHB1bGwtcmlnaHRcIiBvbkNsaWNrPXt0aGlzLnVwZGF0ZX0+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cInByb2R1Y3RtYW5hZ2VtZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBwdWxsLXJpZ2h0IG1yLTJcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BvcnRsZXQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEFkbWluTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTIC8+XG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0FkbWluTGF5b3V0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdE1hbmFnZW1lbnRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9hZG1pbi9wcm9kdWN0ZWRpdC5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUEE7QUFRQTtBQUFBO0FBQ0E7QUFWQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFDQTtBQU5BO0FBQUE7O0FBUUE7QUFBQTtBQURBO0FBS0E7QUFOQTtBQUNBO0FBREE7QUFOQTtBQUFBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBZkE7QUFBQTs7QUF3QkE7QUFBQTtBQURBO0FBS0E7QUFOQTtBQUNBO0FBREE7QUF0QkE7QUFDQTtBQTRCQTtBQUNBO0FBOUJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBZ0NBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQXRCQTtBQUNBO0FBc0JBO0FBdkJBO0FBQUE7QUF3QkE7QUFDQTtBQXpCQTtBQUNBO0FBd0JBO0FBQ0E7QUExQkE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUErQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTtBQUhBO0FBV0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUVBO0FBbkJBO0FBQ0E7QUFzQkE7QUFBQTtBQUNBO0FBckRBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBdURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQXRCQTtBQUNBO0FBc0JBO0FBdkJBO0FBQUE7QUF3QkE7QUFDQTtBQXpCQTtBQUNBO0FBd0JBO0FBQ0E7QUExQkE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUErQkE7QUFBQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTtBQUhBO0FBV0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUVBO0FBbkJBO0FBQ0E7QUFzQkE7QUFBQTtBQUNBO0FBckRBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7QUF3REE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBSEE7OztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFKQTs7O0FBSUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFFQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBT0E7QUFQQTtBQUFBOzs7OztBQTNSQTtBQUNBO0FBcVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=