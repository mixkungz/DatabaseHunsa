'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _card = require('../../components/card');

var _card2 = _interopRequireDefault(_card);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/phachara/Desktop/Project/2017/Homework/DatabaseHunsa/pages/admin/productmanagement.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    .img-thumbnail-table{\n        max-width:100px;\n    }\n    /* The switch - the box around the slider */\n    .switch {\n      position: relative;\n      display: inline-block;\n      width: 60px;\n      height: 34px;\n    }\n    \n    /* Hide default HTML checkbox */\n    .switch input {display:none;}\n    \n    /* The slider */\n    .slider {\n      position: absolute;\n      cursor: pointer;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: #ccc;\n      -webkit-transition: .4s;\n      transition: .4s;\n    }\n    \n    .slider:before {\n      position: absolute;\n      content: "";\n      height: 26px;\n      width: 26px;\n      left: 4px;\n      bottom: 4px;\n      background-color: white;\n      -webkit-transition: .4s;\n      transition: .4s;\n    }\n    \n    input:checked + .slider {\n      background-color: #2196F3;\n    }\n    \n    input:focus + .slider {\n      box-shadow: 0 0 1px #2196F3;\n    }\n    \n    input:checked + .slider:before {\n      -webkit-transform: translateX(26px);\n      -ms-transform: translateX(26px);\n      transform: translateX(26px);\n    }\n    \n    /* Rounded sliders */\n    .slider.round {\n      border-radius: 34px;\n    }\n    \n    .slider.round:before {\n      border-radius: 50%;\n    }\n'], ['\n    .img-thumbnail-table{\n        max-width:100px;\n    }\n    /* The switch - the box around the slider */\n    .switch {\n      position: relative;\n      display: inline-block;\n      width: 60px;\n      height: 34px;\n    }\n    \n    /* Hide default HTML checkbox */\n    .switch input {display:none;}\n    \n    /* The slider */\n    .slider {\n      position: absolute;\n      cursor: pointer;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: #ccc;\n      -webkit-transition: .4s;\n      transition: .4s;\n    }\n    \n    .slider:before {\n      position: absolute;\n      content: "";\n      height: 26px;\n      width: 26px;\n      left: 4px;\n      bottom: 4px;\n      background-color: white;\n      -webkit-transition: .4s;\n      transition: .4s;\n    }\n    \n    input:checked + .slider {\n      background-color: #2196F3;\n    }\n    \n    input:focus + .slider {\n      box-shadow: 0 0 1px #2196F3;\n    }\n    \n    input:checked + .slider:before {\n      -webkit-transform: translateX(26px);\n      -ms-transform: translateX(26px);\n      transform: translateX(26px);\n    }\n    \n    /* Rounded sliders */\n    .slider.round {\n      border-radius: 34px;\n    }\n    \n    .slider.round:before {\n      border-radius: 50%;\n    }\n']);

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

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.goEditProd = function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(pid) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _index2.default.push({
                                    pathname: '/admin/productedit',
                                    query: { productID: pid }
                                });

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }));

            return function (_x) {
                return _ref3.apply(this, arguments);
            };
        }(), _this.del = function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(pid) {
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return (0, _axios2.default)({
                                    method: 'post',
                                    url: 'http://localhost:3001/admin/product/del/' + pid
                                }).then(function () {
                                    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(res) {
                                        return _regenerator2.default.wrap(function _callee3$(_context3) {
                                            while (1) {
                                                switch (_context3.prev = _context3.next) {
                                                    case 0:
                                                        console.log(res);
                                                        _context3.next = 3;
                                                        return location.reload();

                                                    case 3:
                                                    case 'end':
                                                        return _context3.stop();
                                                }
                                            }
                                        }, _callee3, this);
                                    }));

                                    return function (_x3) {
                                        return _ref5.apply(this, arguments);
                                    };
                                }());

                            case 2:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, _this2);
            }));

            return function (_x2) {
                return _ref4.apply(this, arguments);
            };
        }(), _this.updateStatus = function () {
            var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(pid, statusID) {
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _context6.next = 2;
                                return (0, _axios2.default)({
                                    method: 'post',
                                    url: 'http://localhost:3001/admin/product/updatestatus/' + pid + statusID
                                }).then(function () {
                                    var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(res) {
                                        return _regenerator2.default.wrap(function _callee5$(_context5) {
                                            while (1) {
                                                switch (_context5.prev = _context5.next) {
                                                    case 0:
                                                        if (!(res.data.status == true)) {
                                                            _context5.next = 5;
                                                            break;
                                                        }

                                                        _context5.next = 3;
                                                        return location.reload();

                                                    case 3:
                                                        _context5.next = 6;
                                                        break;

                                                    case 5:
                                                        if (res.data.status == false) {
                                                            alert(response.data.msg);
                                                        }

                                                    case 6:
                                                    case 'end':
                                                        return _context5.stop();
                                                }
                                            }
                                        }, _callee5, this);
                                    }));

                                    return function (_x6) {
                                        return _ref7.apply(this, arguments);
                                    };
                                }());

                            case 2:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, _this2);
            }));

            return function (_x4, _x5) {
                return _ref6.apply(this, arguments);
            };
        }(), _this.componentDidMount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.next = 2;
                            return _this.setState({
                                userDetail: JSON.parse(window.localStorage.getItem("userdetail"))
                            });

                        case 2:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ProductManagement, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            }, this.state.userDetail ? this.state.userDetail.RoleID === 1 ? _react2.default.createElement(_adminlayout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                }
            }, _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                }
            }, _react2.default.createElement('div', { className: 'col-12', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                }
            }, _react2.default.createElement(_portlet2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                }
            }, _react2.default.createElement('div', { className: 'd-flex', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
                }
            }, _react2.default.createElement('div', { className: 'mr-auto', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135
                }
            }, _react2.default.createElement('h3', { className: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                }
            }, 'Product Management')), _react2.default.createElement('div', { className: 'align-self-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                }
            }, _react2.default.createElement(_link2.default, { href: 'productedit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                }
            }, _react2.default.createElement('button', { className: 'btn btn-info', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                }
            }, '\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32')))), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                }
            }), _react2.default.createElement('table', { className: 'table table-hover table-responsive-block', id: 'tableWithSearch', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145
                }
            }, _react2.default.createElement('thead', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 146
                }
            }, _react2.default.createElement('tr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 147
                }
            }, _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 148
                }
            }, '#'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                }
            }, 'Thumbnail'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                }
            }, 'Category'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 151
                }
            }, 'Product name'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 152
                }
            }, 'Stock'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 153
                }
            }, 'Status'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 154
                }
            }, 'Action'))), _react2.default.createElement('tbody', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157
                }
            }, this.state.allproduct.map(function (data) {
                return _react2.default.createElement('tr', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 160
                    }
                }, _react2.default.createElement('td', { className: 'v-align-middle semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 161
                    }
                }, _react2.default.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 162
                    }
                }, data.ProductID)), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 164
                    }
                }, _react2.default.createElement('img', { src: data.ProductImg, className: 'img-thumbnail img-thumbnail-table', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 165
                    }
                })), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 167
                    }
                }, _react2.default.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 168
                    }
                }, data.CategoryName)), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 170
                    }
                }, _react2.default.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 171
                    }
                }, data.ProductName)), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 173
                    }
                }, _react2.default.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 174
                    }
                }, data.Quantity)), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 176
                    }
                }, data.StatusID == 1 ? _react2.default.createElement('label', { className: 'switch', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 178
                    }
                }, _react2.default.createElement('input', { type: 'checkbox', onChange: function onChange() {
                        return _this3.updateStatus(data.ProductID, 0);
                    }, checked: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 179
                    }
                }), _react2.default.createElement('span', { className: 'slider round', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 180
                    }
                })) : _react2.default.createElement('label', { className: 'switch', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 182
                    }
                }, _react2.default.createElement('input', { type: 'checkbox', onChange: function onChange() {
                        return _this3.updateStatus(data.ProductID, 1);
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 183
                    }
                }), _react2.default.createElement('span', { className: 'slider round', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 184
                    }
                }))), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 188
                    }
                }, _react2.default.createElement('button', { className: 'btn btn-primary m-b-10', type: 'button', onClick: function onClick() {
                        return _this3.goEditProd(data.ProductID);
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 189
                    }
                }, _react2.default.createElement('i', { className: 'pg-form', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 189
                    }
                })), _react2.default.createElement('button', { className: 'btn btn-danger m-b-10 mx-1', type: 'button', onClick: function onClick() {
                        return _this3.del(data.ProductID);
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 190
                    }
                }, _react2.default.createElement('i', { className: 'pg-trash', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 190
                    }
                }))));
            }))))))) : _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 202
                }
            }, ' \u0E04\u0E38\u0E13\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E41\u0E2D\u0E14\u0E21\u0E34\u0E19 ') : _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 203
                }
            }, '\u0E42\u0E1B\u0E23\u0E14\u0E25\u0E47\u0E2D\u0E04\u0E2D\u0E34\u0E19\u0E21\u0E32\u0E01\u0E48\u0E2D\u0E19'));
        }
    }]);

    return ProductManagement;
}(_react2.default.Component);

exports.default = ProductManagement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FkbWluL3Byb2R1Y3RtYW5hZ2VtZW50LmpzIl0sIm5hbWVzIjpbIkFkbWluTGF5b3V0IiwiUG9ydGxldCIsIkNhcmQiLCJzdHlsZWQiLCJpbmplY3RHbG9iYWwiLCJMaW5rIiwiQXhpb3MiLCJSb3V0ZXIiLCJQcm9kdWN0TWFuYWdlbWVudCIsInN0YXRlIiwiYWxscHJvZHVjdCIsInVzZXJEZXRhaWwiLCJjb21wb25lbnRXaWxsTW91bnQiLCJtZXRob2QiLCJ1cmwiLCJ0aGVuIiwicmVzIiwiYWxsUHJvZCIsInNldFN0YXRlIiwiZGF0YSIsImdvRWRpdFByb2QiLCJwaWQiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsInByb2R1Y3RJRCIsImRlbCIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInVwZGF0ZVN0YXR1cyIsInN0YXR1c0lEIiwic3RhdHVzIiwiYWxlcnQiLCJyZXNwb25zZSIsIm1zZyIsImNvbXBvbmVudERpZE1vdW50IiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlJvbGVJRCIsIm1hcCIsIlByb2R1Y3RJRCIsIlByb2R1Y3RJbWciLCJDYXRlZ29yeU5hbWUiLCJQcm9kdWN0TmFtZSIsIlF1YW50aXR5IiwiU3RhdHVzSUQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7Ozs7QUFFUDs7SUErRE0sQTs7Ozs7Ozs7Ozs7Ozs7O3NPLEFBQ0Y7d0JBQU0sQUFDUyxBQUNYO3dCLEFBRkUsQUFFUztBQUZULEFBQ0YsaUJBR0osQSw4RkFBcUIsbUJBQUE7Z0JBQUE7MEVB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