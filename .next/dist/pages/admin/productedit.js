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

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _formData = require('form-data');

var _formData2 = _interopRequireDefault(_formData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Nattanat\\Documents\\gib\\DB project\\databasehunsa\\pages\\admin\\productedit.js?entry';

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
                category: 0
            },
            catlist: []

        }, _this.componentWillMount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var catlist;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _axios2.default)({
                                method: 'get',
                                url: 'http://localhost:3001/product/productcat'
                            }).then(function (res) {
                                return res;
                            });

                        case 2:
                            catlist = _context.sent;

                            _this.setState({ catlist: catlist.data });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.handleUploadFile = function (event) {
            var data = new _formData2.default();
            data.append('file', event.target.files[0]);
            data.append('name', 'some value user types');
            data.append('description', 'some value user types');
        }, _this.upload = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var _ref4, productname, productdesc, quantity, price, category, productnameform, productdescform, quantityform, _quantityform, priceform;

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

                            // const inputFile = document.getElementById('picture')
                            // const userFile = new FormData()
                            // userFile.append('file', event.target.files[0]);
                            // console.log('5555')
                            // console.log(userFile)
                            // console.log('6666')

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
                                _context2.next = 18;
                                break;
                            }

                            priceform = document.getElementById('price');

                            priceform.classList.add('is-invalid');
                            alert('Please input price');
                            _context2.next = 21;
                            break;

                        case 18:
                            _context2.next = 20;
                            return (0, _axios2.default)({
                                method: 'post',
                                url: 'http://localhost:3001/admin/product/add',
                                data: {
                                    productname: productname,
                                    productdesc: productdesc,
                                    quantity: quantity,
                                    price: price,
                                    category: category

                                }
                            }).then(function (response) {
                                if (response.data == 'success') {
                                    console.log('');
                                } else if (response.data == '') {
                                    console.log('');
                                }
                            }).catch(function (error) {});

                        case 20:
                            console.log('shoot');

                        case 21:
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
            }, this.state.catlist.map(function (x, index) {
                return _react2.default.createElement('option', { value: index, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 135
                    }
                }, x);
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
            }, _react2.default.createElement('input', { type: 'file', className: 'form-control-file', id: 'picture', __source: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxhZG1pblxccHJvZHVjdGVkaXQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJBZG1pbkxheW91dCIsIlBvcnRsZXQiLCJzdHlsZWQiLCJpbmplY3RHbG9iYWwiLCJMaW5rIiwiQXhpb3MiLCJGb3JtRGF0YSIsIlByb2R1Y3RNYW5hZ2VtZW50Iiwic3RhdGUiLCJ1cGxvYWREYXRhIiwicHJvZHVjdG5hbWUiLCJwcm9kdWN0ZGVzYyIsInF1YW50aXR5IiwicHJpY2UiLCJjYXRlZ29yeSIsImNhdGxpc3QiLCJjb21wb25lbnRXaWxsTW91bnQiLCJtZXRob2QiLCJ1cmwiLCJ0aGVuIiwicmVzIiwic2V0U3RhdGUiLCJkYXRhIiwiaGFuZGxlVXBsb2FkRmlsZSIsImV2ZW50IiwiYXBwZW5kIiwidGFyZ2V0IiwiZmlsZXMiLCJ1cGxvYWQiLCJwcm9kdWN0bmFtZWZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWxlcnQiLCJwcm9kdWN0ZGVzY2Zvcm0iLCJxdWFudGl0eWZvcm0iLCJwcmljZWZvcm0iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiY2hlY2siLCJlIiwidmFsdWUiLCJtYXAiLCJ4IiwiaW5kZXgiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7O0FBRVA7O0lBTU0sQTs7Ozs7Ozs7Ozs7Ozs7O3NPLEFBQ0Y7OzZCQUNpQixBQUNLLEFBQ2Q7NkJBRlMsQUFFSyxBQUNkOzBCQUhTLEFBR0UsQUFDWDt1QkFKUyxBQUlELEFBQ1I7MEJBTkYsQUFDVyxBQUtBLEFBRWI7QUFQYSxBQUNUO3FC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UyxFQUFBLEFBQUUsT0FBcEUsQUFBSyxBQUFjLEFBQUMsQUFBdUQ7QUFBako7OEJBQUE7Z0NBakNoQixBQThCUSxBQUVJLEFBQ0ksQUFHUjtBQUhRO2tDQUdSLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsV0FBTyxPQUFQLEFBQVcsZUFBYyxXQUF6QixBQUFtQzs4QkFBbkM7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFDQSxtR0FBQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjt3REFDVyxNQUFQLEFBQVksUUFBTyxXQUFuQixBQUE2QixxQkFBb0IsSUFBakQsQUFBb0Q7OEJBQXBEO2dDQXZDaEIsQUFvQ1EsQUFFSSxBQUNJLEFBR1o7QUFIWTs7OzhCQUdaO2dDQTFDSixBQTBDSSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFlBQVEsV0FBUixBQUFrQiw4QkFBNkIsU0FBUyxLQUF4RCxBQUE2RDs4QkFBN0Q7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFDQSx5QkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVzs4QkFBWDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxZQUFRLFdBQVIsQUFBa0I7OEJBQWxCO2dDQUFBO0FBQUE7ZUFwRGhDLEFBQ0EsQUFDSSxBQUNJLEFBQ0ksQUFDSSxBQTJDSSxBQUNJLEFBRUksQUFDSSxBQVduQzs7Ozs7RUFySzJCLGdCQUFNLEEsQUF5S3RDOztrQkFBQSxBQUFlIiwiZmlsZSI6InByb2R1Y3RlZGl0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL05hdHRhbmF0L0RvY3VtZW50cy9naWIvREIgcHJvamVjdC9kYXRhYmFzZWh1bnNhIn0=