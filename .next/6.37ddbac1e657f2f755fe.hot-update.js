webpackHotUpdate(6,{

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _taggedTemplateLiteral2 = __webpack_require__(392);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _adminlayout = __webpack_require__(477);

var _adminlayout2 = _interopRequireDefault(_adminlayout);

var _portlet = __webpack_require__(488);

var _portlet2 = _interopRequireDefault(_portlet);

var _card = __webpack_require__(489);

var _card2 = _interopRequireDefault(_card);

var _styledComponents = __webpack_require__(393);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = __webpack_require__(470);

var _link2 = _interopRequireDefault(_link);

var _axios = __webpack_require__(397);

var _axios2 = _interopRequireDefault(_axios);

var _index = __webpack_require__(101);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/phachara/Desktop/Project/2017/Homework/DatabaseHunsa/pages/admin/productmanagement.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/phachara/Desktop/Project/2017/Homework/DatabaseHunsa/pages/admin/productmanagement.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/admin/productmanagement")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4zN2RkYmFjMWU2NTdmMmY3NTVmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vcHJvZHVjdG1hbmFnZW1lbnQuanM/NTc5OTllZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRtaW5MYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hZG1pbmxheW91dCdcbmltcG9ydCBQb3J0bGV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9ydGxldCdcbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2FyZCdcbmltcG9ydCBzdHlsZWQgLCB7IGluamVjdEdsb2JhbCB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuaW5qZWN0R2xvYmFsYFxuICAgIC5pbWctdGh1bWJuYWlsLXRhYmxle1xuICAgICAgICBtYXgtd2lkdGg6MTAwcHg7XG4gICAgfVxuICAgIC8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXG4gICAgLnN3aXRjaCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIGhlaWdodDogMzRweDtcbiAgICB9XG4gICAgXG4gICAgLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cbiAgICAuc3dpdGNoIGlucHV0IHtkaXNwbGF5Om5vbmU7fVxuICAgIFxuICAgIC8qIFRoZSBzbGlkZXIgKi9cbiAgICAuc2xpZGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICAgIHRyYW5zaXRpb246IC40cztcbiAgICB9XG4gICAgXG4gICAgLnNsaWRlcjpiZWZvcmUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGhlaWdodDogMjZweDtcbiAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgbGVmdDogNHB4O1xuICAgICAgYm90dG9tOiA0cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgICAgdHJhbnNpdGlvbjogLjRzO1xuICAgIH1cbiAgICBcbiAgICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xuICAgIH1cbiAgICBcbiAgICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xuICAgIH1cbiAgICBcbiAgICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIH1cbiAgICBcbiAgICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cbiAgICAuc2xpZGVyLnJvdW5kIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XG4gICAgfVxuICAgIFxuICAgIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG5gXG5jbGFzcyBQcm9kdWN0TWFuYWdlbWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGU9e1xuICAgICAgICBhbGxwcm9kdWN0OltdLFxuICAgICAgICB1c2VyRGV0YWlsOm51bGxcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbE1vdW50ID0gYXN5bmMoKSA9PntcbiAgICAgICAgbGV0IGFsbFByb2QgPWF3YWl0IEF4aW9zKHtcbiAgICAgICAgICAgIG1ldGhvZDonZ2V0JyxcbiAgICAgICAgICAgIHVybDonaHR0cDovL2xvY2FsaG9zdDozMDAxL3Byb2R1Y3QvYWxsJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FsbHByb2R1Y3Q6YWxsUHJvZC5kYXRhfSlcbiAgICAgICAgXG4gICAgfVxuICAgIGdvRWRpdFByb2QgPSBhc3luYyhwaWQpID0+e1xuICAgICAgICBhd2FpdCBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICBwYXRobmFtZTogJy9hZG1pbi9wcm9kdWN0ZWRpdCcsXG4gICAgICAgICAgICBxdWVyeTogeyBwcm9kdWN0SUQ6IHBpZCB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGRlbCA9IGFzeW5jKHBpZCkgPT57XG4gICAgICAgIGF3YWl0IEF4aW9zKHtcbiAgICAgICAgICAgIG1ldGhvZDoncG9zdCcsXG4gICAgICAgICAgICB1cmw6YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hZG1pbi9wcm9kdWN0L2RlbC8ke3BpZH1gLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihhc3luYyBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgIGF3YWl0IGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1cGRhdGVTdGF0dXMgPSBhc3luYyhwaWQsc3RhdHVzSUQpID0+e1xuICAgICAgICBhd2FpdCBBeGlvcyh7XG4gICAgICAgICAgICBtZXRob2Q6J3Bvc3QnLFxuICAgICAgICAgICAgdXJsOmBodHRwOi8vbG9jYWxob3N0OjMwMDEvYWRtaW4vcHJvZHVjdC91cGRhdGVzdGF0dXMvJHtwaWR9JHtzdGF0dXNJRH1gLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihhc3luYyBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLnN0YXR1cyA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICBhd2FpdCBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihyZXMuZGF0YS5zdGF0dXMgPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLmRhdGEubXNnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50ID0gYXN5bmMgKCkgPT57XG4gICAgICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdXNlckRldGFpbDpKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJkZXRhaWxcIikpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS51c2VyRGV0YWlsID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS51c2VyRGV0YWlsLlJvbGVJRCA9PT0gMSA/XG48QWRtaW5MYXlvdXQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3J0bGV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIlwiPlByb2R1Y3QgTWFuYWdlbWVudDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwicHJvZHVjdGVkaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPuC5gOC4nuC4tOC5iOC4oeC4quC4tOC4meC4hOC5ieC4sjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1yZXNwb25zaXZlLWJsb2NrXCIgaWQ9XCJ0YWJsZVdpdGhTZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRodW1ibmFpbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DYXRlZ29yeTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qcm9kdWN0IG5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RvY2s8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHVzPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFsbHByb2R1Y3QubWFwKChkYXRhKT0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidi1hbGlnbi1taWRkbGUgc2VtaS1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2RhdGEuUHJvZHVjdElEfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidi1hbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5Qcm9kdWN0SW1nfSBjbGFzc05hbWU9XCJpbWctdGh1bWJuYWlsIGltZy10aHVtYm5haWwtdGFibGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ2LWFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkYXRhLkNhdGVnb3J5TmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInYtYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2RhdGEuUHJvZHVjdE5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ2LWFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkYXRhLlF1YW50aXR5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidi1hbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLlN0YXR1c0lEPT0xID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLnVwZGF0ZVN0YXR1cyhkYXRhLlByb2R1Y3RJRCwwKX0gY2hlY2tlZC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlciByb3VuZFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPikgOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eygpID0+IHRoaXMudXBkYXRlU3RhdHVzKGRhdGEuUHJvZHVjdElELDEpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZXIgcm91bmRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInYtYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbS1iLTEwXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpPT50aGlzLmdvRWRpdFByb2QoZGF0YS5Qcm9kdWN0SUQpfT48aSBjbGFzc05hbWU9XCJwZy1mb3JtXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgbS1iLTEwIG14LTFcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCk9PnRoaXMuZGVsKGRhdGEuUHJvZHVjdElEKX0+PGkgY2xhc3NOYW1lPVwicGctdHJhc2hcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BvcnRsZXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9BZG1pbkxheW91dD46PGRpdj4g4LiE4Li44LiT4LmE4Lih4LmI4LmD4LiK4LmI4LmB4Lit4LiU4Lih4Li04LiZIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6IDxkaXY+4LmC4Lib4Lij4LiU4Lil4LmH4Lit4LiE4Lit4Li04LiZ4Lih4Liy4LiB4LmI4Lit4LiZPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TWFuYWdlbWVudFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2FkbWluL3Byb2R1Y3RtYW5hZ2VtZW50LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlFQTs7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBREE7QUFLQTtBQU5BO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFPQTtBQUNBO0FBVEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBREE7QUFDQTtBQUhBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBRUE7QUFDQTtBQUhBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBSkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7OztBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBTEE7QUFDQTtBQURBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBSkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7O0FBZUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFFQTtBQUZBO0FBQUE7O0FBSUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFFQTtBQUZBO0FBQUE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFJQTtBQUpBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQS9CQTs7QUEyQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBbklBO0FBQ0E7QUEySUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==