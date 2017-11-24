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
            allproduct: []
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
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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
            }, _react2.default.createElement('div', { className: 'd-flex', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, _react2.default.createElement('div', { className: 'mr-auto', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, _react2.default.createElement('h3', { className: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, 'Product Management')), _react2.default.createElement('div', { className: 'align-self-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }, _react2.default.createElement(_link2.default, { href: 'productedit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, _react2.default.createElement('button', { className: 'btn btn-info', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }, '\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32')))), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }), _react2.default.createElement('table', { className: 'table table-hover table-responsive-block', id: 'tableWithSearch', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, _react2.default.createElement('thead', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, _react2.default.createElement('tr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }, _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, '#'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }, 'Thumbnail'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                }
            }, 'Category'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, 'Product name'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, 'Stock'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                }
            }, 'Status'), _react2.default.createElement('th', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }, 'Action'))), _react2.default.createElement('tbody', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            }, this.state.allproduct.map(function (data) {
                return _react2.default.createElement('tr', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 127
                    }
                }, _react2.default.createElement('td', { className: 'v-align-middle semi-bold', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 128
                    }
                }, _react2.default.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 129
                    }
                }, data.ProductID)), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 131
                    }
                }, _react2.default.createElement('img', { src: data.ProductImg, className: 'img-thumbnail img-thumbnail-table', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 132
                    }
                })), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 134
                    }
                }, _react2.default.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 135
                    }
                }, data.CategoryName)), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 137
                    }
                }, _react2.default.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 138
                    }
                }, data.ProductName)), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 140
                    }
                }, _react2.default.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 141
                    }
                }, data.Quantity)), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 143
                    }
                }, _react2.default.createElement('label', { className: 'switch', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 144
                    }
                }, _react2.default.createElement('input', { type: 'checkbox', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 145
                    }
                }), _react2.default.createElement('span', { className: 'slider round', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 146
                    }
                }))), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 149
                    }
                }, _react2.default.createElement('button', { className: 'btn btn-primary m-b-10', type: 'button', onClick: function onClick() {
                        return _this3.goEditProd(data.ProductID);
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 150
                    }
                }, _react2.default.createElement('i', { className: 'pg-form', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 150
                    }
                })), _react2.default.createElement('button', { className: 'btn btn-danger m-b-10 mx-1', type: 'button', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 151
                    }
                }, _react2.default.createElement('i', { className: 'pg-trash', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 151
                    }
                }))));
            }))))))));
        }
    }]);

    return ProductManagement;
}(_react2.default.Component);

exports.default = ProductManagement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FkbWluL3Byb2R1Y3RtYW5hZ2VtZW50LmpzIl0sIm5hbWVzIjpbIkFkbWluTGF5b3V0IiwiUG9ydGxldCIsIkNhcmQiLCJzdHlsZWQiLCJpbmplY3RHbG9iYWwiLCJMaW5rIiwiQXhpb3MiLCJSb3V0ZXIiLCJQcm9kdWN0TWFuYWdlbWVudCIsInN0YXRlIiwiYWxscHJvZHVjdCIsImNvbXBvbmVudFdpbGxNb3VudCIsIm1ldGhvZCIsInVybCIsInRoZW4iLCJyZXMiLCJhbGxQcm9kIiwic2V0U3RhdGUiLCJkYXRhIiwiZ29FZGl0UHJvZCIsInBpZCIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwicHJvZHVjdElEIiwibWFwIiwiUHJvZHVjdElEIiwiUHJvZHVjdEltZyIsIkNhdGVnb3J5TmFtZSIsIlByb2R1Y3ROYW1lIiwiUXVhbnRpdHkiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7Ozs7QUFFUDs7SUErRE0sQTs7Ozs7Ozs7Ozs7Ozs7O3NPQUNGLEE7d0IsQUFBTSxBQUNTO0FBRFQsQUFDRixpQixBQUVKLDhGQUFxQixtQkFBQTtnQkFBQTswRUFBQTswQkFBQTtxREFBQTs2QkFBQTs0Q0FBQTs7d0NBQ1EsQUFDZCxBQUNQO3FDQUZlLEFBQU0sQUFFakI7QUFGaUIsQUFDckIsNkJBRGUsRUFBQSxBQUlkLEtBQUssVUFBQSxBQUFTLEtBQUssQUFDaEI7dUNBQUEsQUFBTyxBQUNaO0FBUGMsQUFDRTs7NkJBQWY7QUFEYSwrQ0FRZjs7a0NBQUEsQUFBSyxTQUFTLEVBQUMsWUFBVyxRQVJYLEFBUWYsQUFBYyxBQUFvQjs7NkJBUm5COzZCQUFB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