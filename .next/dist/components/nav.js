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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    .awesome-border{\n        border-left:1px solid white;\n        border-right:1px solid white;\n    }\n    .social-icon{\n        font-size:1.5em;\n        color:white;\n    }\n    .menu-icon{\n        color:white;\n        font-size:1.3em;\n    }\n    .dis-inline{\n        display:inline;\n    }\n    .dropdown-menu.show{    \n        min-width:320px;\n    }\n    .bg-secondary{\n        background-color: black !important;\n    }\n    #face,#eyes,#lips,#nails{\n        color: white;\n        padding: 4px;\n        font-size: 25px;\n        font-weight: bold;\n        transition:2s;\n    }\n    #face{\n        background-color:#490A3D;\n    }\n    #face:hover{\n        background-color:#26041f;\n        transition:0.5s;\n        \n    }\n    #eyes{\n        background-color:#BD1550;\n    }\n    #eyes:hover{\n        background-color:#96103f;\n        transition:0.5s;\n    }\n    #lips{\n        background-color:#E97F02;\n    }\n    #lips:hover{\n        background-color:#bc6600;\n        transition:0.5s;\n    }\n    #nails{\n        background-color:#F8CA00;\n    }\n    #nails:hover{\n        background-color:#c9a402;\n        transition:0.5s;\n    }\n\n'], ['\n    .awesome-border{\n        border-left:1px solid white;\n        border-right:1px solid white;\n    }\n    .social-icon{\n        font-size:1.5em;\n        color:white;\n    }\n    .menu-icon{\n        color:white;\n        font-size:1.3em;\n    }\n    .dis-inline{\n        display:inline;\n    }\n    .dropdown-menu.show{    \n        min-width:320px;\n    }\n    .bg-secondary{\n        background-color: black !important;\n    }\n    #face,#eyes,#lips,#nails{\n        color: white;\n        padding: 4px;\n        font-size: 25px;\n        font-weight: bold;\n        transition:2s;\n    }\n    #face{\n        background-color:#490A3D;\n    }\n    #face:hover{\n        background-color:#26041f;\n        transition:0.5s;\n        \n    }\n    #eyes{\n        background-color:#BD1550;\n    }\n    #eyes:hover{\n        background-color:#96103f;\n        transition:0.5s;\n    }\n    #lips{\n        background-color:#E97F02;\n    }\n    #lips:hover{\n        background-color:#bc6600;\n        transition:0.5s;\n    }\n    #nails{\n        background-color:#F8CA00;\n    }\n    #nails:hover{\n        background-color:#c9a402;\n        transition:0.5s;\n    }\n\n']);

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
                username: null,
                password: null,
                confirmpassword: null,
                email: null,
                firstname: null,
                lastname: null
            }
        }, _this.register = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var _ref3, username, password, confirmpassword, email, firstname, lastname, usernameform, passwordform, confirmpasswordform, emailform, firstnameform, lastnameform, _passwordform, _confirmpasswordform;

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

                            if (username == null) {
                                usernameform = document.getElementById('username');

                                usernameform.classList.add('is-invalid');
                                alert('Please input username');
                            }
                            if (password == null) {
                                passwordform = document.getElementById('password');

                                passwordform.classList.add('is-invalid');
                                alert('Please input password');
                            }
                            if (confirmpassword == null) {
                                confirmpasswordform = document.getElementById('confirmpassword');

                                confirmpasswordform.classList.add('is-invalid');
                                alert('Please input confirmpassword');
                            }
                            if (email == null) {
                                emailform = document.getElementById('email');

                                emailform.classList.add('is-invalid');
                                alert('Please input email');
                            }
                            if (firstname == null) {
                                firstnameform = document.getElementById('firstname');

                                firstnameform.classList.add('is-invalid');
                                alert('Please input firstname');
                            }
                            if (lastname == null) {
                                lastnameform = document.getElementById('lastname');

                                lastnameform.classList.add('is-invalid');
                                alert('Please input lastname');
                            }

                            if (!(password !== confirmpassword)) {
                                _context.next = 23;
                                break;
                            }

                            _passwordform = document.getElementById('password');
                            _confirmpasswordform = document.getElementById('confirmpassword');

                            _passwordform.classList.add('is-invalid');
                            _confirmpasswordform.classList.add('is-invalid');
                            alert('Please check password');
                            _context.next = 26;
                            break;

                        case 23:
                            _context.next = 25;
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
                                if (response.data == 'success') {
                                    alert('Register success!!');
                                }
                                if (response.data == 'ER_DUP_ENTRY') {
                                    var _usernameform = document.getElementById('username');
                                    username.classList.add('is-invalid');
                                }
                            }).catch(function (error) {});

                        case 25:
                            console.log('shoot');

                        case 26:
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
                    lineNumber: 151
                }
            }, _react2.default.createElement('nav', { className: 'bg-secondary', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 152
                }
            }, _react2.default.createElement('div', { className: 'container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 153
                }
            }, _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 154
                }
            }, _react2.default.createElement('div', { className: 'col-2 mt-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 155
                }
            }, _react2.default.createElement('i', { className: 'fa fa-facebook-square social-icon mr-3', 'aria-hidden': 'true', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 156
                }
            }), _react2.default.createElement('i', { className: 'fa fa-twitter-square social-icon', 'aria-hidden': 'true', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157
                }
            })), _react2.default.createElement('div', { className: 'col-4 ml-auto mt-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 159
                }
            }, _react2.default.createElement('ul', { className: 'list-inline text-white', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160
                }
            }, _react2.default.createElement('div', { className: 'dropdown dis-inline', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 161
                }
            }, _react2.default.createElement('li', { className: 'list-inline-item px-3 dropdown-toggle', id: 'dropdownMenu2', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 162
                }
            }, _react2.default.createElement('i', { className: 'fa fa-shopping-cart mr-2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 162
                }
            }), 'Cart'), _react2.default.createElement('div', { className: 'dropdown-menu', 'aria-labelledby': 'dropdownMenu2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 163
                }
            }, _react2.default.createElement('table', { className: 'table table-hover', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
                }
            }, _react2.default.createElement('tbody', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 165
                }
            }, _react2.default.createElement('tr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
                }
            }, _react2.default.createElement('td', { scope: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 167
                }
            }, _react2.default.createElement('img', { className: 'img-fluid', src: '/static/img/product/longsleeve.jpg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 167
                }
            })), _react2.default.createElement('td', { className: 'w-50', scope: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 168
                }
            }, 'Sweater Jumper Tops Knitwear'), _react2.default.createElement('td', { className: 'text-right', scope: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 169
                }
            }, '\u0E3F199', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 169
                }
            }), _react2.default.createElement('span', { className: 'text-danger', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 169
                }
            }, 'Del'))))))), _react2.default.createElement('li', { className: 'list-inline-item px-3 awesome-border', 'data-toggle': 'modal', 'data-target': '#register', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 176
                }
            }, 'Sign up'), _react2.default.createElement('li', { className: 'list-inline-item px-3', 'data-toggle': 'modal', 'data-target': '#login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 177
                }
            }, 'Sign in')))), _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 181
                }
            }, _react2.default.createElement('div', { className: 'col-2 my-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 182
                }
            }, _react2.default.createElement('img', { className: 'img-fluid', src: '/static/img/Shopy-new.png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 183
                }
            })), _react2.default.createElement('div', { className: 'col-8 my-4', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 185
                }
            }, _react2.default.createElement('input', { className: 'form-control', type: 'search', placeholder: 'Search', 'aria-label': 'Search', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 186
                }
            })), _react2.default.createElement('div', { className: 'col-2 my-4', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 188
                }
            }, _react2.default.createElement('button', { className: 'btn btn-outline-light', type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 189
                }
            }, 'Search'))))), _react2.default.createElement('div', { className: 'container-fluid', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 194
                }
            }, _react2.default.createElement('div', { className: 'row text-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 195
                }
            }, _react2.default.createElement('div', { className: 'col', id: 'face', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 196
                }
            }, 'FACE'), _react2.default.createElement('div', { className: 'col', id: 'eyes', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 197
                }
            }, 'EYES'), _react2.default.createElement('div', { className: 'col', id: 'lips', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 198
                }
            }, 'LIPS'), _react2.default.createElement('div', { className: 'col', id: 'nails', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 199
                }
            }, 'NAILS'))), _react2.default.createElement('div', { className: 'modal fade', id: 'register', role: 'dialog', 'aria-labelledby': 'exampleModalLabel', 'aria-hidden': 'true', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 202
                }
            }, _react2.default.createElement('div', { className: 'modal-dialog', role: 'document', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 203
                }
            }, _react2.default.createElement('div', { className: 'modal-content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 204
                }
            }, _react2.default.createElement('div', { className: 'modal-body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 205
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 206
                }
            }, 'Sign up'), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 207
                }
            }), _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 209
                }
            }, _react2.default.createElement('input', { type: 'text', className: 'form-control', value: this.state.registerdata.username, onChange: function onChange(e) {
                    return _this3.setState({ registerdata: (0, _extends3.default)({}, _this3.state.registerdata, { username: e.target.value }) });
                }, id: 'username', placeholder: 'Username', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 210
                }
            })), _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 212
                }
            }, _react2.default.createElement('input', { type: 'password', className: 'form-control', value: this.state.registerdata.password, id: 'password', placeholder: 'Password', onChange: function onChange(e) {
                    return _this3.setState({ registerdata: (0, _extends3.default)({}, _this3.state.registerdata, { password: e.target.value }) });
                }, required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 213
                }
            })), _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 215
                }
            }, _react2.default.createElement('input', { type: 'password', className: 'form-control', value: this.state.registerdata.confirmpassword, id: 'confirmpassword', placeholder: 'Confirm Password', onChange: function onChange(e) {
                    return _this3.setState({ registerdata: (0, _extends3.default)({}, _this3.state.registerdata, { confirmpassword: e.target.value }) });
                }, required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 216
                }
            })), _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 218
                }
            }, _react2.default.createElement('input', { type: 'email', className: 'form-control', value: this.state.registerdata.email, id: 'email', placeholder: 'Email', onChange: function onChange(e) {
                    return _this3.setState({ registerdata: (0, _extends3.default)({}, _this3.state.registerdata, { email: e.target.value }) });
                }, required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 219
                }
            })), _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 221
                }
            }, _react2.default.createElement('input', { type: 'text', className: 'form-control', value: this.state.registerdata.firstname, id: 'firstname', placeholder: 'Firstname', onChange: function onChange(e) {
                    return _this3.setState({ registerdata: (0, _extends3.default)({}, _this3.state.registerdata, { firstname: e.target.value }) });
                }, required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 222
                }
            })), _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 224
                }
            }, _react2.default.createElement('input', { type: 'text', className: 'form-control', value: this.state.registerdata.lastname, id: 'lastname', placeholder: 'Lastname', onChange: function onChange(e) {
                    return _this3.setState({ registerdata: (0, _extends3.default)({}, _this3.state.registerdata, { lastname: e.target.value }) });
                }, required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 225
                }
            })), _react2.default.createElement('div', { className: 'd-flex justify-content-end', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 227
                }
            }, _react2.default.createElement('button', { type: 'reset', className: 'btn btn-danger mx-2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 228
                }
            }, 'Reset'), _react2.default.createElement('button', { type: 'submit', onClick: this.register, className: 'btn btn-success', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 229
                }
            }, 'Submit')))))), _react2.default.createElement('div', { className: 'modal fade', id: 'login', role: 'dialog', 'aria-labelledby': 'exampleModalLabel', 'aria-hidden': 'true', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 236
                }
            }, _react2.default.createElement('div', { className: 'modal-dialog', role: 'document', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 237
                }
            }, _react2.default.createElement('div', { className: 'modal-content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 238
                }
            }, _react2.default.createElement('div', { className: 'modal-body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 239
                }
            }, _react2.default.createElement('h3', { className: 'mb-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 240
                }
            }, 'Sign in'), _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 241
                }
            }, _react2.default.createElement('input', { type: 'text', className: 'form-control mb-3', id: 'username', placeholder: 'Username', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 242
                }
            }), _react2.default.createElement('input', { type: 'password', className: 'form-control mb-3', id: 'password', placeholder: 'Password', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 243
                }
            }), _react2.default.createElement('button', { type: 'button', className: 'btn btn-primary btn-block', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 244
                }
            }, 'Sign in')))))));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbInN0eWxlZCIsImluamVjdEdsb2JhbCIsIlN3ZWV0QWxlcnQiLCJBeGlvcyIsInN0YXRlIiwic2hvdyIsInJlZ2lzdGVyZGF0YSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25maXJtcGFzc3dvcmQiLCJlbWFpbCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwicmVnaXN0ZXIiLCJ1c2VybmFtZWZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWxlcnQiLCJwYXNzd29yZGZvcm0iLCJjb25maXJtcGFzc3dvcmRmb3JtIiwiZW1haWxmb3JtIiwiZmlyc3RuYW1lZm9ybSIsImxhc3RuYW1lZm9ybSIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7Ozs7QUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Z04sQUFnRUk7a0JBQVEsQUFDRSxBQUNOOzswQkFBYSxBQUNBLEFBQ1Q7MEJBRlMsQUFFQSxBQUNUO2lDQUhTLEFBR08sQUFDaEI7dUJBSlMsQUFJSCxBQUNOOzJCQUxTLEFBS0MsQUFDVjswQkFSQSxBQVFTLEEsQUFOQTtBQUFBLEFBQ1Q7QUFIQSxBQUNKLGlCLEFBV0osb0ZBQVcsbUJBQUE7Z01BQUE7OzBFQUFBOzBCQUFBO3FEQUFBOzZCQUFBOzRDQUFBO21DQUN5RSxNQUFBLEFBQUssTUFEOUUsQUFDb0Y7OzZCQURwRjs2Q0FDRDtBQURDLDZDQUFBLEFBQ0QsQUFBVTtBQURULDZDQUFBLEFBQ1MsQUFB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LE9BQUEsQUFBSyxTQUFTLEVBQUMseUNBQWlCLE9BQUEsQUFBSyxNQUF0QixBQUE0QixnQkFBYSxVQUFTLEVBQUEsQUFBRSxPQUF6RSxBQUFNLEFBQWMsQUFBQyxBQUEyRDtBQUFwTixtQkFBOE4sVUFBOU47OEJBQUE7Z0NBcEJaLEFBbUJRLEFBQ0ksQUFFSjtBQUZJO2lDQUVKLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsWUFBUSxNQUFSLEFBQWEsU0FBUSxXQUFyQixBQUErQjs4QkFBL0I7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFDQSwwQkFBQSxjQUFBLFlBQVEsTUFBUixBQUFhLFVBQVMsU0FBUyxLQUEvQixBQUFvQyxVQUFVLFdBQTlDLEFBQXdEOzhCQUF4RDtnQ0FBQTtBQUFBO2VBOUU1QixBQW1ESSxBQUNJLEFBQ0ksQUFDSSxBQXNCUSxBQUVJLEFBT3hCLGdDQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWUsY0FBYSxJQUE1QixBQUErQixTQUFRLE1BQXZDLEFBQTRDLFVBQVMsbUJBQXJELEFBQXFFLHFCQUFvQixlQUF6RixBQUFxRzs4QkFBckc7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWUsZ0JBQWUsTUFBOUIsQUFBbUM7OEJBQW5DO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFFBQUksV0FBSixBQUFjOzhCQUFkO2dDQUFBO0FBQUE7ZUFESixBQUNJLEFBQ0EsNEJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7d0RBQ1csTUFBUCxBQUFZLFFBQU8sV0FBbkIsQUFBNkIscUJBQW9CLElBQWpELEFBQW9ELFlBQVcsYUFBL0QsQUFBMkU7OEJBQTNFO2dDQURKLEFBQ0ksQUFDQTtBQURBO3lEQUNPLE1BQVAsQUFBWSxZQUFXLFdBQXZCLEFBQWlDLHFCQUFvQixJQUFyRCxBQUF3RCxZQUFXLGFBQW5FLEFBQStFOzhCQUEvRTtnQ0FGSixBQUVJLEFBQ0E7QUFEQTtnQ0FDQSxjQUFBLFlBQVEsTUFBUixBQUFhLFVBQVMsV0FBdEIsQUFBZ0M7OEJBQWhDO2dDQUFBO0FBQUE7ZUE5RmhDLEFBQ1EsQUFxRkksQUFDSSxBQUNJLEFBQ0ksQUFFSSxBQUdJLEFBUW5DOzs7OztFQXhMd0IsZ0JBQU0sQSIsImZpbGUiOiJuYXYuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BoYWNoYXJhL0Rlc2t0b3AvUHJvamVjdC8yMDE3L0hvbWV3b3JrL0RhdGFiYXNlSHVuc2EifQ==