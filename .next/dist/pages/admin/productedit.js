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
        })), _this.upload = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            var _ref4, productname, productdesc, quantity, price, category, img, productnameform, productdescform, quantityform, _quantityform, priceform;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return _this.state.uploadData;

                        case 2:
                            _ref4 = _context3.sent;
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
                                var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(response) {
                                    return _regenerator2.default.wrap(function _callee2$(_context2) {
                                        while (1) {
                                            switch (_context2.prev = _context2.next) {
                                                case 0:
                                                    console.log(response.data);

                                                    if (!(response.data.status == true)) {
                                                        _context2.next = 7;
                                                        break;
                                                    }

                                                    alert('แอดเรียบร้อย');
                                                    _context2.next = 5;
                                                    return _index2.default.push({
                                                        pathname: '/admin/productmanagement'
                                                    });

                                                case 5:
                                                    _context2.next = 8;
                                                    break;

                                                case 7:
                                                    if (response.data.status == false) {
                                                        alert(response.data.msg);
                                                    }

                                                case 8:
                                                case 'end':
                                                    return _context2.stop();
                                            }
                                        }
                                    }, _callee2, this);
                                }));

                                return function (_x) {
                                    return _ref5.apply(this, arguments);
                                };
                            }()).catch(function (error) {});

                        case 21:
                            console.log('shoot');

                        case 22:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, _this2);
        })), _this.update = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
            var _ref7, productname, productdesc, quantity, price, category, img, productnameform, productdescform, quantityform, _quantityform2, priceform;

            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return _this.state.uploadData;

                        case 2:
                            _ref7 = _context5.sent;
                            productname = _ref7.productname;
                            productdesc = _ref7.productdesc;
                            quantity = _ref7.quantity;
                            price = _ref7.price;
                            category = _ref7.category;
                            img = _ref7.img;

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
                                _context5.next = 19;
                                break;
                            }

                            priceform = document.getElementById('price');

                            priceform.classList.add('is-invalid');
                            alert('Please input price');
                            _context5.next = 22;
                            break;

                        case 19:
                            _context5.next = 21;
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
                                var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(response) {
                                    return _regenerator2.default.wrap(function _callee4$(_context4) {
                                        while (1) {
                                            switch (_context4.prev = _context4.next) {
                                                case 0:
                                                    console.log(response.data);

                                                    if (!(response.data.status == true)) {
                                                        _context4.next = 7;
                                                        break;
                                                    }

                                                    alert('อัพเดทเรียบร้อย');
                                                    _context4.next = 5;
                                                    return _index2.default.push({
                                                        pathname: '/admin/productmanagement'
                                                    });

                                                case 5:
                                                    _context4.next = 8;
                                                    break;

                                                case 7:
                                                    if (response.data.status == false) {
                                                        alert(response.data.msg);
                                                    }

                                                case 8:
                                                case 'end':
                                                    return _context4.stop();
                                            }
                                        }
                                    }, _callee4, this);
                                }));

                                return function (_x2) {
                                    return _ref8.apply(this, arguments);
                                };
                            }()).catch(function (error) {});

                        case 21:
                            console.log('shoot');

                        case 22:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ProductManagement, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 182
                }
            }, _react2.default.createElement(_adminlayout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 183
                }
            }, _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 184
                }
            }, _react2.default.createElement('div', { className: 'col-12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 185
                }
            }, _react2.default.createElement(_portlet2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 186
                }
            }, _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 187
                }
            }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 188
                }
            }, '\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 189
                }
            }, this.state.query == -1 ? _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'productname', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { productname: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 192
                }
            }) : _react2.default.createElement('input', { type: 'text', className: 'form-control', value: this.state.uploadData.productname, id: 'productname', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { productname: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 193
                }
            }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 198
                }
            }, _react2.default.createElement('label', { 'for': 'inputPassword', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 199
                }
            }, '\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 200
                }
            }, _react2.default.createElement('select', { className: 'form-control', id: 'category', 'data-init-plugin': 'select2', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { category: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 201
                }
            }, this.state.catlist.map(function (data, index) {
                return _react2.default.createElement('option', { value: index, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 204
                    }
                }, data);
            })))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 209
                }
            }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 210
                }
            }, '\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 211
                }
            }, this.state.query == -1 ? _react2.default.createElement('textarea', { className: 'form-control', id: 'productdesc', rows: '5', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { productdesc: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 214
                }
            }) : _react2.default.createElement('textarea', { className: 'form-control', value: this.state.uploadData.productdesc, id: 'productdesc', rows: '5', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { productdesc: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 215
                }
            }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 220
                }
            }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 221
                }
            }, '\u0E23\u0E32\u0E04\u0E32\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 (\u0E1A\u0E32\u0E17)'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 222
                }
            }, this.state.query == -1 ? _react2.default.createElement('input', { type: 'number', className: 'form-control', id: 'price', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { price: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 225
                }
            }) : _react2.default.createElement('input', { type: 'number', className: 'form-control', value: this.state.uploadData.price, id: 'price', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { price: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 226
                }
            }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 231
                }
            }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 232
                }
            }, '\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 233
                }
            }, this.state.query == -1 ? _react2.default.createElement('input', { type: 'number', className: 'form-control', id: 'quantity', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { quantity: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 236
                }
            }) : _react2.default.createElement('input', { type: 'number', className: 'form-control', id: 'quantity', value: this.state.uploadData.quantity, onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { quantity: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 237
                }
            }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 242
                }
            }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 243
                }
            }, '\u0E23\u0E39\u0E1B\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 244
                }
            }, this.state.query == -1 ? _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'imglink', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { img: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 247
                }
            }) : _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'imglink', value: this.state.uploadData.img, onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { img: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 248
                }
            }))), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 252
                }
            }), _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 253
                }
            }, _react2.default.createElement('div', { className: 'col-11', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 254
                }
            }, this.state.query == -1 ? _react2.default.createElement('button', { className: 'btn btn-success pull-right', onClick: this.upload, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 257
                }
            }, 'Save') : _react2.default.createElement('button', { className: 'btn btn-success pull-right', onClick: this.update, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 258
                }
            }, 'Save'), _react2.default.createElement(_link2.default, { href: 'productmanagement', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 261
                }
            }, _react2.default.createElement('button', { className: 'btn btn-danger pull-right mr-2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 262
                }
            }, 'Cancel')))))))));
        }
    }]);

    return ProductManagement;
}(_react2.default.Component);

exports.default = ProductManagement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FkbWluL3Byb2R1Y3RlZGl0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQWRtaW5MYXlvdXQiLCJQb3J0bGV0Iiwic3R5bGVkIiwiaW5qZWN0R2xvYmFsIiwiTGluayIsIkF4aW9zIiwiUm91dGVyIiwiUHJvZHVjdE1hbmFnZW1lbnQiLCJzdGF0ZSIsInVwbG9hZERhdGEiLCJwcm9kdWN0bmFtZSIsInByb2R1Y3RkZXNjIiwicXVhbnRpdHkiLCJwcmljZSIsImNhdGVnb3J5IiwiaW1nIiwiY2F0bGlzdCIsInF1ZXJ5IiwiY29tcG9uZW50V2lsbE1vdW50IiwicHJvZHVjdElEIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlcyIsIlByb2R1Y3REYXRhIiwiZGF0YSIsIlByb2R1Y3ROYW1lIiwiUHJvZHVjdERlc2MiLCJRdWFudGl0eSIsIlByb2R1Y3RQcmljZSIsIkNhdGVnb3J5SUQiLCJQcm9kdWN0SW1nIiwidXBsb2FkIiwicHJvZHVjdG5hbWVmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImFkZCIsImFsZXJ0IiwicHJvZHVjdGRlc2Nmb3JtIiwicXVhbnRpdHlmb3JtIiwicHJpY2Vmb3JtIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJwdXNoIiwicGF0aG5hbWUiLCJtc2ciLCJjYXRjaCIsImVycm9yIiwidXBkYXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiaW5kZXgiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7O0FBRVA7O0ksQUFNTTs7Ozs7Ozs7Ozs7Ozs7O3NPLEFB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SyxNQUFMLEFBQVcsU0FBUyxDQUFwQixBQUFxQiw2Q0FDVCxNQUFQLEFBQVksUUFBTyxXQUFuQixBQUE2QixnQkFBZSxJQUE1QyxBQUErQyxXQUFVLFVBQVUsa0JBQUEsQUFBQyxHQUFEOzJCQUFLLE9BQUEsQUFBSyxTQUFTLEVBQUMsdUNBQWUsT0FBQSxBQUFLLE1BQXBCLEFBQTBCLGNBQVcsS0FBSSxFQUFBLEFBQUUsT0FBL0QsQUFBSyxBQUFjLEFBQUMsQUFBa0Q7QUFBekk7OEJBQUE7Z0NBREwsQUFDSztBQUFBO2FBQUEsNkNBQ08sTUFBUCxBQUFZLFFBQU8sV0FBbkIsQUFBNkIsZ0JBQWUsSUFBNUMsQUFBK0MsV0FBVSxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FBM0UsQUFBc0YsS0FBSyxVQUFVLGtCQUFBLEFBQUMsR0FBRDsyQkFBSyxPQUFBLEFBQUssU0FBUyxFQUFDLHVDQUFlLE9BQUEsQUFBSyxNQUFwQixBQUEwQixjQUFXLEtBQUksRUFBQSxBQUFFLE9BQS9ELEFBQUssQUFBYyxBQUFDLEFBQWtEO0FBQTNLOzhCQUFBO2dDQTlEekIsQUF3RFksQUFFSSxBQUlTLEFBSWpCO0FBSmlCO2FBQUE7OzhCQUlqQjtnQ0FsRVIsQUFrRVEsQUFDQTtBQURBO0FBQUEsZ0NBQ0EsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUVRO0FBRlI7b0JBRVEsQUFBSyxNQUFMLEFBQVcsU0FBUyxDQUFwQixBQUFxQixvQkFDaEIsY0FBQSxZQUFRLFdBQVIsQUFBa0IsOEJBQTZCLFNBQVMsS0FBeEQsQUFBNkQ7OEJBQTdEO2dDQUFBO0FBQUE7YUFBQSxFQURMLEFBQ0ssMEJBQ0EsY0FBQSxZQUFRLFdBQVIsQUFBa0IsOEJBQTZCLFNBQVMsS0FBeEQsQUFBNkQ7OEJBQTdEO2dDQUFBO0FBQUE7YUFBQSxFQUpiLEFBSWEsQUFHVCx5QkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVzs4QkFBWDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxZQUFRLFdBQVIsQUFBa0I7OEJBQWxCO2dDQUFBO0FBQUE7ZUFqRmhDLEFBQ0EsQUFDSSxBQUNJLEFBQ0ksQUFDQSxBQW1FUSxBQUNJLEFBT0ksQUFDSSxBQVVuQzs7Ozs7RUFqUTJCLGdCQUFNLEEsQUFxUXRDOztrQkFBQSxBQUFlIiwiZmlsZSI6InByb2R1Y3RlZGl0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waGFjaGFyYS9EZXNrdG9wL1Byb2plY3QvMjAxNy9Ib21ld29yay9EYXRhYmFzZUh1bnNhIn0=