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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _sweetalert2React = require('sweetalert2-react');

var _sweetalert2React2 = _interopRequireDefault(_sweetalert2React);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/phachara/Desktop/Project/2017/Homework/DatabaseHunsa/components/nav.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    .awesome-border{\n        border-left:1px solid white;\n        border-right:1px solid white;\n    }\n    .social-icon{\n        font-size:1.5em;\n        color:white;\n    }\n    .menu-icon{\n        color:white;\n        font-size:1.3em;\n    }\n    .dis-inline{\n        display:inline;\n    }\n    .dropdown-menu.show{    \n        min-width:320px;\n    }\n'], ['\n    .awesome-border{\n        border-left:1px solid white;\n        border-right:1px solid white;\n    }\n    .social-icon{\n        font-size:1.5em;\n        color:white;\n    }\n    .menu-icon{\n        color:white;\n        font-size:1.3em;\n    }\n    .dis-inline{\n        display:inline;\n    }\n    .dropdown-menu.show{    \n        min-width:320px;\n    }\n']);

(0, _styledComponents.injectGlobal)(_templateObject);

var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            show: false,
            registerdata: {
                username: '',
                password: '',
                confirmpassword: '',
                email: '',
                firstname: '',
                lastname: ''
            }
        }, _this.register = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var _ref3, username, password, confirmpassword, email, firstname, lastname, _password, _confirmpassword;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _this.state.registerdata;

                        case 2:
                            _ref3 = _context.sent;
                            username = _ref3.username;
                            password = _ref3.password;
                            confirmpassword = _ref3.confirmpassword;
                            email = _ref3.email;
                            firstname = _ref3.firstname;
                            lastname = _ref3.lastname;

                            if (!(password !== confirmpassword)) {
                                _context.next = 16;
                                break;
                            }

                            _password = document.getElementById('password');
                            _confirmpassword = document.getElementById('confirmpassword');

                            _password.classList.add('is-invalid');
                            _confirmpassword.classList.add('is-invalid');
                            _context.next = 19;
                            break;

                        case 16:
                            _context.next = 18;
                            return (0, _axios2.default)({
                                method: 'post',
                                url: 'http://localhost:3001/user/newuser',
                                data: {
                                    username: username,
                                    password: password,
                                    email: email,
                                    firstname: firstname,
                                    lastname: lastname
                                }
                            }).then(function (response) {
                                console.log(response);
                                if (response.data == 'success') {}
                            }).catch(function (error) {
                                console.log(error);
                                if (response.data == 'ER_DUP_ENTRY') {}
                            });

                        case 18:
                            console.log('shoot');

                        case 19:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement('nav', { className: 'bg-secondary', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement('div', { className: 'container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, _react2.default.createElement('div', { className: 'col-2 mt-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement('i', { className: 'fa fa-facebook-square social-icon mr-3', 'aria-hidden': 'true', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }), _react2.default.createElement('i', { className: 'fa fa-twitter-square social-icon', 'aria-hidden': 'true', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            })), _react2.default.createElement('div', { className: 'col-5 ml-auto mt-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, _react2.default.createElement('ul', { className: 'list-inline text-white', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement('div', { className: 'dropdown dis-inline', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, _react2.default.createElement('li', { className: 'list-inline-item px-3 dropdown-toggle', id: 'dropdownMenu2', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, _react2.default.createElement('i', { className: 'fa fa-shopping-cart mr-2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }), '\u0E15\u0E30\u0E01\u0E23\u0E49\u0E32'), _react2.default.createElement('div', { className: 'dropdown-menu', 'aria-labelledby': 'dropdownMenu2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, _react2.default.createElement('table', { className: 'table table-hover', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, _react2.default.createElement('tbody', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, _react2.default.createElement('tr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, _react2.default.createElement('td', { scope: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement('img', { className: 'img-fluid', src: '/static/img/product/longsleeve.jpg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            })), _react2.default.createElement('td', { className: 'w-50', scope: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, 'Sweater Jumper Tops Knitwear'), _react2.default.createElement('td', { className: 'text-right', scope: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, '\u0E3F199', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }), _react2.default.createElement('span', { className: 'text-danger', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, '\u0E25\u0E1A'))))))), _react2.default.createElement('li', { className: 'list-inline-item px-3 awesome-border', 'data-toggle': 'modal', 'data-target': '#register', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, '\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19'), _react2.default.createElement('li', { className: 'list-inline-item px-3', 'data-toggle': 'modal', 'data-target': '#login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }, '\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A')))), _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                }
            }, _react2.default.createElement('div', { className: 'col-2 my-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, _react2.default.createElement('img', { className: 'img-fluid', src: '/static/img/Shopy-new.png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            })), _react2.default.createElement('div', { className: 'col-8 my-4', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, _react2.default.createElement('input', { className: 'form-control', type: 'search', placeholder: 'Search', 'aria-label': 'Search', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            })), _react2.default.createElement('div', { className: 'col-2 my-4', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }, _react2.default.createElement('button', { className: 'btn btn-outline-light', type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                }
            }, 'Search'))))), _react2.default.createElement('div', { className: 'modal fade', id: 'register', role: 'dialog', 'aria-labelledby': 'exampleModalLabel', 'aria-hidden': 'true', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, _react2.default.createElement('div', { className: 'modal-dialog', role: 'document', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            }, _react2.default.createElement('div', { className: 'modal-content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            }, _react2.default.createElement('div', { className: 'modal-body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 125
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            }, '\u0E41\u0E1A\u0E1A\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01'), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }), _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            }, _react2.default.createElement('input', { type: 'text', className: 'form-control', value: this.state.registerdata.username, onChange: function onChange(e) {
                    return _this3.setState({ registerdata: (0, _extends3.default)({}, _this3.state.registerdata, { username: e.target.value }) });
                }, id: 'username', placeholder: 'Username', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                }
            })), _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                }
            }, _react2.default.createElement('input', { type: 'password', className: 'form-control', value: this.state.registerdata.password, id: 'password', placeholder: 'Password', onChange: function onChange(e) {
                    return _this3.setState({ registerdata: (0, _extends3.default)({}, _this3.state.registerdata, { password: e.target.value }) });
                }, required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                }
            })), _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135
                }
            }, _react2.default.createElement('input', { type: 'password', className: 'form-control', value: this.state.registerdata.confirmpassword, id: 'confirmpassword', placeholder: 'Confirm Password', onChange: function onChange(e) {
                    return _this3.setState({ registerdata: (0, _extends3.default)({}, _this3.state.registerdata, { confirmpassword: e.target.value }) });
                }, required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                }
            })), _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                }
            }, _react2.default.createElement('input', { type: 'email', className: 'form-control', value: this.state.registerdata.email, id: 'email', placeholder: 'Email', onChange: function onChange(e) {
                    return _this3.setState({ registerdata: (0, _extends3.default)({}, _this3.state.registerdata, { email: e.target.value }) });
                }, required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                }
            })), _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                }
            }, _react2.default.createElement('input', { type: 'text', className: 'form-control', value: this.state.registerdata.firstname, id: 'firstname', placeholder: 'Firstname', onChange: function onChange(e) {
                    return _this3.setState({ registerdata: (0, _extends3.default)({}, _this3.state.registerdata, { firstname: e.target.value }) });
                }, required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 142
                }
            })), _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                }
            }, _react2.default.createElement('input', { type: 'text', className: 'form-control', value: this.state.registerdata.lastname, id: 'lastname', placeholder: 'Lastname', onChange: function onChange(e) {
                    return _this3.setState({ registerdata: (0, _extends3.default)({}, _this3.state.registerdata, { lastname: e.target.value }) });
                }, required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145
                }
            })), _react2.default.createElement('div', { className: 'd-flex justify-content-end', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 147
                }
            }, _react2.default.createElement('button', { type: 'reset', className: 'btn btn-danger mx-2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 148
                }
            }, 'Reset'), _react2.default.createElement('button', { type: 'submit', onClick: this.register, className: 'btn btn-success', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                }
            }, 'Submit')))))), _react2.default.createElement('div', { className: 'modal fade', id: 'login', role: 'dialog', 'aria-labelledby': 'exampleModalLabel', 'aria-hidden': 'true', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 156
                }
            }, _react2.default.createElement('div', { className: 'modal-dialog', role: 'document', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157
                }
            }, _react2.default.createElement('div', { className: 'modal-content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 158
                }
            }, _react2.default.createElement('div', { className: 'modal-body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 159
                }
            }, _react2.default.createElement('h3', { className: 'mb-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160
                }
            }, '\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A'), _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 161
                }
            }, _react2.default.createElement('input', { type: 'text', className: 'form-control mb-3', id: 'username', placeholder: 'Username', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 162
                }
            }), _react2.default.createElement('input', { type: 'password', className: 'form-control mb-3', id: 'password', placeholder: 'Password', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 163
                }
            }), _react2.default.createElement('button', { type: 'button', className: 'btn btn-primary btn-block', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
                }
            }, 'Sign in')))))));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbInN0eWxlZCIsImluamVjdEdsb2JhbCIsIlN3ZWV0QWxlcnQiLCJBeGlvcyIsInN0YXRlIiwic2hvdyIsInJlZ2lzdGVyZGF0YSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25maXJtcGFzc3dvcmQiLCJlbWFpbCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwicmVnaXN0ZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7OztBQUVQOzs7Ozs7Ozs7Ozs7Ozs7OztnTixBQXdCSTtrQkFBUSxBQUNFLEFBQ047OzBCQUFhLEFBQ0EsQUFDVDswQkFGUyxBQUVBLEFBQ1Q7aUNBSFMsQUFHTyxBQUNoQjt1QkFKUyxBQUlILEFBQ047MkJBTFMsQUFLQyxBQUNWOzBCLEFBUkEsQUFFUyxBQU1BO0FBTkEsQUFDVDtBQUhBLEFBQ0osaUIsQUFXSixvRkFBVyxtQkFBQTttR0FBQTs7MEVBQUE7MEJBQUE7cURBQUE7NkJBQUE7NENBQUE7bUNBQ3dFLE1BQUEsQUFBSyxNQUQ3RSxBQUNtRjs7NkJBRG5GOzZDQUNEO0FBREMsNkNBQUEsQUFDRCxBQUFVO0FBRFQsNkNBQUEsQUFDUyxBQUFTO0FBRGxCLG9EQUFBLEFBQ2tCLEFBQWlCO0FBRG5DLDBDQUFBLEFBQ21DLEFBQU87QUFEMUMsOENBQUEsQUFDMEMsQUFBVztBQURyRCw2Q0FBQSxBQUNxRDs7a0NBQ3pELGFBRkks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QUFyRztnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZSxnQkFBZSxNQUE5QixBQUFtQzs4QkFBbkM7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsUUFBSSxXQUFKLEFBQWM7OEJBQWQ7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFDQSx1RkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjt3REFDVyxNQUFQLEFBQVksUUFBTyxXQUFuQixBQUE2QixxQkFBb0IsSUFBakQsQUFBb0QsWUFBVyxhQUEvRCxBQUEyRTs4QkFBM0U7Z0NBREosQUFDSSxBQUNBO0FBREE7eURBQ08sTUFBUCxBQUFZLFlBQVcsV0FBdkIsQUFBaUMscUJBQW9CLElBQXJELEFBQXdELFlBQVcsYUFBbkUsQUFBK0U7OEJBQS9FO2dDQUZKLEFBRUksQUFDQTtBQURBO2dDQUNBLGNBQUEsWUFBUSxNQUFSLEFBQWEsVUFBUyxXQUF0QixBQUFnQzs4QkFBaEM7Z0NBQUE7QUFBQTtlQXRGaEMsQUFDUSxBQTZFSSxBQUNJLEFBQ0ksQUFDSSxBQUVJLEFBR0ksQUFRbkM7Ozs7O0VBaEp3QixnQkFBTSxBIiwiZmlsZSI6Im5hdi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGhhY2hhcmEvRGVza3RvcC9Qcm9qZWN0LzIwMTcvSG9tZXdvcmsvRGF0YWJhc2VIdW5zYSJ9