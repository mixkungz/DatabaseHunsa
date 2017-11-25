'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _portlet = require('../../components/portlet');

var _portlet2 = _interopRequireDefault(_portlet);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _index = require('next/dist/lib/router/index.js');

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
            query: -1,
            userDetail: null

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
        })), _this.upload = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
            var _ref5, productname, productdesc, quantity, price, category, img, productnameform, productdescform, quantityform, _quantityform, priceform;

            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return _this.state.uploadData;

                        case 2:
                            _ref5 = _context4.sent;
                            productname = _ref5.productname;
                            productdesc = _ref5.productdesc;
                            quantity = _ref5.quantity;
                            price = _ref5.price;
                            category = _ref5.category;
                            img = _ref5.img;

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
                                _context4.next = 19;
                                break;
                            }

                            priceform = document.getElementById('price');

                            priceform.classList.add('is-invalid');
                            alert('Please input price');
                            _context4.next = 22;
                            break;

                        case 19:
                            _context4.next = 21;
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
                            }).then(function () {
                                var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(response) {
                                    return _regenerator2.default.wrap(function _callee3$(_context3) {
                                        while (1) {
                                            switch (_context3.prev = _context3.next) {
                                                case 0:
                                                    console.log(response.data);

                                                    if (!(response.data.status == true)) {
                                                        _context3.next = 7;
                                                        break;
                                                    }

                                                    alert('แอดเรียบร้อย');
                                                    _context3.next = 5;
                                                    return _index2.default.push({
                                                        pathname: '/admin/productmanagement'
                                                    });

                                                case 5:
                                                    _context3.next = 8;
                                                    break;

                                                case 7:
                                                    if (response.data.status == false) {
                                                        alert(response.data.msg);
                                                    }

                                                case 8:
                                                case 'end':
                                                    return _context3.stop();
                                            }
                                        }
                                    }, _callee3, this);
                                }));

                                return function (_x) {
                                    return _ref6.apply(this, arguments);
                                };
                            }()).catch(function (error) {});

                        case 21:
                            console.log('shoot');

                        case 22:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, _this2);
        })), _this.update = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
            var _ref8, productname, productdesc, quantity, price, category, img, productnameform, productdescform, quantityform, _quantityform2, priceform;

            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.next = 2;
                            return _this.state.uploadData;

                        case 2:
                            _ref8 = _context6.sent;
                            productname = _ref8.productname;
                            productdesc = _ref8.productdesc;
                            quantity = _ref8.quantity;
                            price = _ref8.price;
                            category = _ref8.category;
                            img = _ref8.img;

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
                                _context6.next = 19;
                                break;
                            }

                            priceform = document.getElementById('price');

                            priceform.classList.add('is-invalid');
                            alert('Please input price');
                            _context6.next = 22;
                            break;

                        case 19:
                            _context6.next = 21;
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
                            }).then(function () {
                                var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(response) {
                                    return _regenerator2.default.wrap(function _callee5$(_context5) {
                                        while (1) {
                                            switch (_context5.prev = _context5.next) {
                                                case 0:
                                                    console.log(response.data);

                                                    if (!(response.data.status == true)) {
                                                        _context5.next = 7;
                                                        break;
                                                    }

                                                    alert('อัพเดทเรียบร้อย');
                                                    _context5.next = 5;
                                                    return _index2.default.push({
                                                        pathname: '/admin/productmanagement'
                                                    });

                                                case 5:
                                                    _context5.next = 8;
                                                    break;

                                                case 7:
                                                    if (response.data.status == false) {
                                                        alert(response.data.msg);
                                                    }

                                                case 8:
                                                case 'end':
                                                    return _context5.stop();
                                            }
                                        }
                                    }, _callee5, this);
                                }));

                                return function (_x2) {
                                    return _ref9.apply(this, arguments);
                                };
                            }()).catch(function (error) {});

                        case 21:
                            console.log('shoot');

                        case 22:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ProductManagement, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 188
                }
            }, this.state.userDetail ? this.state.userDetail.RoleID === 1 ? _react2.default.createElement(_adminlayout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 192
                }
            }, _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 193
                }
            }, _react2.default.createElement('div', { className: 'col-12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 194
                }
            }, _react2.default.createElement(_portlet2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 195
                }
            }, _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 196
                }
            }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 197
                }
            }, '\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 198
                }
            }, this.state.query == -1 ? _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'productname', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { productname: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 201
                }
            }) : _react2.default.createElement('input', { type: 'text', className: 'form-control', value: this.state.uploadData.productname, id: 'productname', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { productname: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 202
                }
            }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 207
                }
            }, _react2.default.createElement('label', { 'for': 'inputPassword', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 208
                }
            }, '\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 209
                }
            }, _react2.default.createElement('select', { className: 'form-control', id: 'category', 'data-init-plugin': 'select2', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { category: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 210
                }
            }, this.state.catlist.map(function (data, index) {
                return _react2.default.createElement('option', { value: index, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 213
                    }
                }, data);
            })))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 218
                }
            }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 219
                }
            }, '\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 220
                }
            }, this.state.query == -1 ? _react2.default.createElement('textarea', { className: 'form-control', id: 'productdesc', rows: '5', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { productdesc: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 223
                }
            }) : _react2.default.createElement('textarea', { className: 'form-control', value: this.state.uploadData.productdesc, id: 'productdesc', rows: '5', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { productdesc: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 224
                }
            }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 229
                }
            }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 230
                }
            }, '\u0E23\u0E32\u0E04\u0E32\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 (\u0E1A\u0E32\u0E17)'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 231
                }
            }, this.state.query == -1 ? _react2.default.createElement('input', { type: 'number', className: 'form-control', id: 'price', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { price: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 234
                }
            }) : _react2.default.createElement('input', { type: 'number', className: 'form-control', value: this.state.uploadData.price, id: 'price', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { price: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 235
                }
            }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 240
                }
            }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 241
                }
            }, '\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 242
                }
            }, this.state.query == -1 ? _react2.default.createElement('input', { type: 'number', className: 'form-control', id: 'quantity', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { quantity: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 245
                }
            }) : _react2.default.createElement('input', { type: 'number', className: 'form-control', id: 'quantity', value: this.state.uploadData.quantity, onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { quantity: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 246
                }
            }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 251
                }
            }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 252
                }
            }, '\u0E23\u0E39\u0E1B\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 253
                }
            }, this.state.query == -1 ? _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'imglink', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { img: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 256
                }
            }) : _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'imglink', value: this.state.uploadData.img, onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { img: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 257
                }
            }))), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 261
                }
            }), _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 262
                }
            }, _react2.default.createElement('div', { className: 'col-11', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 263
                }
            }, this.state.query == -1 ? _react2.default.createElement('button', { className: 'btn btn-success pull-right', onClick: this.upload, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 266
                }
            }, 'Save') : _react2.default.createElement('button', { className: 'btn btn-success pull-right', onClick: this.update, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 267
                }
            }, 'Save'), _react2.default.createElement(_link2.default, { href: 'productmanagement', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 270
                }
            }, _react2.default.createElement('button', { className: 'btn btn-danger pull-right mr-2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 271
                }
            }, 'Cancel')))))))) : _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 279
                }
            }, ' \u0E04\u0E38\u0E13\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E41\u0E2D\u0E14\u0E21\u0E34\u0E19 ') : _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 280
                }
            }, '\u0E42\u0E1B\u0E23\u0E14\u0E25\u0E47\u0E2D\u0E04\u0E2D\u0E34\u0E19\u0E21\u0E32\u0E01\u0E48\u0E2D\u0E19'));
        }
    }]);

    return ProductManagement;
}(_react2.default.Component);

exports.default = ProductManagement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FkbWluL3Byb2R1Y3RlZGl0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQWRtaW5MYXlvdXQiLCJQb3J0bGV0Iiwic3R5bGVkIiwiaW5qZWN0R2xvYmFsIiwiTGluayIsIkF4aW9zIiwiUm91dGVyIiwiUHJvZHVjdE1hbmFnZW1lbnQiLCJzdGF0ZSIsInVwbG9hZERhdGEiLCJwcm9kdWN0bmFtZSIsInByb2R1Y3RkZXNjIiwicXVhbnRpdHkiLCJwcmljZSIsImNhdGVnb3J5IiwiaW1nIiwiY2F0bGlzdCIsInF1ZXJ5IiwidXNlckRldGFpbCIsImNvbXBvbmVudFdpbGxNb3VudCIsInByb2R1Y3RJRCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIm1ldGhvZCIsInVybCIsInRoZW4iLCJyZXMiLCJQcm9kdWN0RGF0YSIsImRhdGEiLCJQcm9kdWN0TmFtZSIsIlByb2R1Y3REZXNjIiwiUXVhbnRpdHkiLCJQcm9kdWN0UHJpY2UiLCJDYXRlZ29yeUlEIiwiUHJvZHVjdEltZyIsImNvbXBvbmVudERpZE1vdW50IiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVwbG9hZCIsInByb2R1Y3RuYW1lZm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhbGVydCIsInByb2R1Y3RkZXNjZm9ybSIsInF1YW50aXR5Zm9ybSIsInByaWNlZm9ybSIsInJlc3BvbnNlIiwic3RhdHVzIiwicHVzaCIsInBhdGhuYW1lIiwibXNnIiwiY2F0Y2giLCJlcnJvciIsInVwZGF0ZSIsIlJvbGVJRCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImluZGV4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWE7Ozs7QUFDcEIs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QUNBO0FBREE7QUFBQSxnQ0FDQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBRVE7QUFGUjtvQkFFUSxBQUFLLE1BQUwsQUFBVyxTQUFTLENBQXBCLEFBQXFCLG9CQUNoQixjQUFBLFlBQVEsV0FBUixBQUFrQiw4QkFBNkIsU0FBUyxLQUF4RCxBQUE2RDs4QkFBN0Q7Z0NBQUE7QUFBQTthQUFBLEVBREwsQUFDSywwQkFDQSxjQUFBLFlBQVEsV0FBUixBQUFrQiw4QkFBNkIsU0FBUyxLQUF4RCxBQUE2RDs4QkFBN0Q7Z0NBQUE7QUFBQTthQUFBLEVBSmIsQUFJYSxBQUdULHlCQUFBLEFBQUMsZ0NBQUssTUFBTixBQUFXOzhCQUFYO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFlBQVEsV0FBUixBQUFrQjs4QkFBbEI7Z0NBQUE7QUFBQTtlQWhGeEIsQUFDQSxBQUNBLEFBQ0ksQUFDQSxBQW1FUSxBQUNJLEFBT0ksQUFDSSxnQkFoRnhCLG1CQXdGUSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsYUFBQSxFQXpGUixBQXlGUSxrSEFDRixjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsYUFBQSxFQTdGZCxBQUNBLEFBNEZjLEFBS2pCOzs7OztFQTlRMkIsZ0JBQU0sQSxBQWtSdEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoicHJvZHVjdGVkaXQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BoYWNoYXJhL0Rlc2t0b3AvUHJvamVjdC8yMDE3L0hvbWV3b3JrL0RhdGFiYXNlSHVuc2EifQ==