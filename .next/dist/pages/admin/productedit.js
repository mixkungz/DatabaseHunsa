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

var _formData = require('form-data');

var _formData2 = _interopRequireDefault(_formData);

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
                productname: '',
                productdesc: '',
                quantity: 0,
                price: 0,
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
            var _ref4, productname, productdesc, quantity, price, category, inputFile, userFile;

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
                            inputFile = document.getElementById('picture');
                            userFile = new _formData2.default();

                            userFile.append('file', event.target.files[0]);
                            console.log('5555');
                            console.log(userFile);
                            console.log('6666');

                            if (!false) {
                                _context2.next = 17;
                                break;
                            }

                            _context2.next = 20;
                            break;

                        case 17:
                            _context2.next = 19;
                            return (0, _axios2.default)({
                                method: 'post',
                                url: 'http://localhost:3001/admin/product/add',
                                data: {
                                    productname: productname,
                                    productdesc: productdesc,
                                    quantity: quantity,
                                    price: price,
                                    category: category,
                                    file: userFile
                                }
                            }).then(function (response) {
                                if (response.data == 'success') {
                                    console.log('');
                                } else if (response.data == '') {
                                    console.log('');
                                }
                            }).catch(function (error) {});

                        case 19:
                            console.log('shoot');

                        case 20:
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
                    lineNumber: 96
                }
            }, _react2.default.createElement(_adminlayout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, _react2.default.createElement('div', { className: 'col-12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, _react2.default.createElement(_portlet2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, '\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'productname', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { productname: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }, _react2.default.createElement('label', { 'for': 'inputPassword', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            }, '\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                }
            }, _react2.default.createElement('select', { className: 'form-control', id: 'category', 'data-init-plugin': 'select2', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { category: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, this.state.catlist.map(function (x, index) {
                return _react2.default.createElement('option', { value: index, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 113
                    }
                }, x);
            })))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, '\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                }
            }, _react2.default.createElement('textarea', { className: 'form-control', id: 'productdesc', rows: '5', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { productdesc: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 125
                }
            }, '\u0E23\u0E32\u0E04\u0E32\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 (\u0E1A\u0E32\u0E17)'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            }, _react2.default.createElement('input', { type: 'number', className: 'form-control', id: 'price', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { price: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                }
            }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                }
            }, '\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                }
            }, _react2.default.createElement('input', { type: 'number', className: 'form-control', id: 'quantity', onChange: function onChange(e) {
                    return _this3.setState({ uploadData: (0, _extends3.default)({}, _this3.state.uploadData, { quantity: e.target.value }) });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                }
            }))), _react2.default.createElement('div', { className: 'form-group row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                }
            }, _react2.default.createElement('label', { 'for': 'staticEmail', className: 'col-sm-2 col-form-label text-right mr-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 137
                }
            }, '\u0E23\u0E39\u0E1B\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01'), _react2.default.createElement('div', { className: 'col-sm-9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                }
            }, _react2.default.createElement('input', { type: 'file', className: 'form-control-file', id: 'picture', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                }
            }))), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 142
                }
            }), _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 143
                }
            }, _react2.default.createElement('div', { className: 'col-11', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                }
            }, _react2.default.createElement('button', { className: 'btn btn-success pull-right', onClick: this.upload, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145
                }
            }, 'Save'), _react2.default.createElement(_link2.default, { href: 'productmanagement', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 146
                }
            }, _react2.default.createElement('button', { className: 'btn btn-danger pull-right mr-2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 147
                }
            }, 'Cancel')))))))));
        }
    }]);

    return ProductManagement;
}(_react2.default.Component);

exports.default = ProductManagement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FkbWluL3Byb2R1Y3RlZGl0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQWRtaW5MYXlvdXQiLCJQb3J0bGV0Iiwic3R5bGVkIiwiaW5qZWN0R2xvYmFsIiwiTGluayIsIkF4aW9zIiwiRm9ybURhdGEiLCJQcm9kdWN0TWFuYWdlbWVudCIsInN0YXRlIiwidXBsb2FkRGF0YSIsInByb2R1Y3RuYW1lIiwicHJvZHVjdGRlc2MiLCJxdWFudGl0eSIsInByaWNlIiwiY2F0ZWdvcnkiLCJjYXRsaXN0IiwiY29tcG9uZW50V2lsbE1vdW50IiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlcyIsInNldFN0YXRlIiwiZGF0YSIsImhhbmRsZVVwbG9hZEZpbGUiLCJldmVudCIsImFwcGVuZCIsInRhcmdldCIsImZpbGVzIiwidXBsb2FkIiwiaW5wdXRGaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInVzZXJGaWxlIiwiY29uc29sZSIsImxvZyIsImZpbGUiLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyb3IiLCJjaGVjayIsImUiLCJ2YWx1ZSIsIm1hcCIsIngiLCJpbmRleCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7Ozs7QUFFUDs7SUFNTSxBOzs7Ozs7Ozs7Ozs7Ozs7c08sQUFDRjs7NkJBQ2lCLEFBQ0ssQUFDZDs2QkFGUyxBQUVLLEFBQ2Q7MEJBSFMsQUFHRSxBQUNYO3VCQUpTLEFBSUQsQUFDUjswQkFORixBQUNXLEFBS0EsQUFFYjtBQVBhLEFBQ1Q7cUIsQUFGRixBQVFPOztBQVJQLEFBQ0YsaUIsQUFZSiw4RkFBcUIsbUJBQUE7Z0JBQUE7MEVBQUE7MEJBQUE7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QUFBRSxPQUFqRSxBQUFLLEFBQWMsQUFBQyxBQUFvRDtBQUEzSTs4QkFBQTtnQ0EzQmhCLEFBd0JRLEFBRUksQUFDSSxBQUdSO0FBSFE7a0NBR1IsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxXQUFPLE9BQVAsQUFBVyxlQUFjLFdBQXpCLEFBQW1DOzhCQUFuQztnQ0FBQTtBQUFBO2VBREosQUFDSSxBQUNBLHVGQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO3dEQUNXLE1BQVAsQUFBWSxVQUFTLFdBQXJCLEFBQStCLGdCQUFlLElBQTlDLEFBQWlELFlBQVcsVUFBVSxrQkFBQSxBQUFDLEdBQUQ7MkJBQUssT0FBQSxBQUFLLFNBQVMsRUFBQyx1Q0FBZSxPQUFBLEFBQUssTUFBcEIsQUFBMEIsY0FBVyxVQUFTLEVBQUEsQUFBRSxPQUFwRSxBQUFLLEFBQWMsQUFBQyxBQUF1RDtBQUFqSjs4QkFBQTtnQ0FqQ2hCLEFBOEJRLEFBRUksQUFDSSxBQUdSO0FBSFE7a0NBR1IsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxXQUFPLE9BQVAsQUFBVyxlQUFjLFdBQXpCLEFBQW1DOzhCQUFuQztnQ0FBQTtBQUFBO2VBREosQUFDSSxBQUNBLG1HQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO3dEQUNXLE1BQVAsQUFBWSxRQUFPLFdBQW5CLEFBQTZCLHFCQUFvQixJQUFqRCxBQUFvRDs4QkFBcEQ7Z0NBdkNoQixBQW9DUSxBQUVJLEFBQ0ksQUFHWjtBQUhZOzs7OEJBR1o7Z0NBMUNKLEFBMENJLEFBQ0E7QUFEQTtBQUFBLGdDQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsWUFBUSxXQUFSLEFBQWtCLDhCQUE2QixTQUFTLEtBQXhELEFBQTZEOzhCQUE3RDtnQ0FBQTtBQUFBO2VBREosQUFDSSxBQUNBLHlCQUFBLEFBQUMsZ0NBQUssTUFBTixBQUFXOzhCQUFYO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFlBQVEsV0FBUixBQUFrQjs4QkFBbEI7Z0NBQUE7QUFBQTtlQXBEaEMsQUFDQSxBQUNJLEFBQ0ksQUFDSSxBQUNJLEFBMkNJLEFBQ0ksQUFFSSxBQUNJLEFBV25DOzs7OztFQS9JMkIsZ0JBQU0sQSxBQW1KdEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoicHJvZHVjdGVkaXQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BoYWNoYXJhL0Rlc2t0b3AvUHJvamVjdC8yMDE3L0hvbWV3b3JrL0RhdGFiYXNlSHVuc2EifQ==