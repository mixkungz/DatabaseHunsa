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

var _jsxFileName = 'C:\\Users\\Nattanat\\Documents\\gib\\DB project\\databasehunsa\\components\\nav.js';

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
                                console.log(response);
                                if (response.data == 'success') {
                                    alert('Register success!!');
                                }
                            }).catch(function (error) {
                                console.log(error);
                                if (response.data == 'ER_DUP_ENTRY') {
                                    var _usernameform = document.getElementById('username');
                                    username.classList.add('is-invalid');
                                }
                            });

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
                    lineNumber: 152
                }
            }, _react2.default.createElement('nav', { className: 'bg-secondary', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 153
                }
            }, _react2.default.createElement('div', { className: 'container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 154
                }
            }, _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 155
                }
            }, _react2.default.createElement('div', { className: 'col-2 mt-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 156
                }
            }, _react2.default.createElement('i', { className: 'fa fa-facebook-square social-icon mr-3', 'aria-hidden': 'true', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157
                }
            }), _react2.default.createElement('i', { className: 'fa fa-twitter-square social-icon', 'aria-hidden': 'true', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 158
                }
            })), _react2.default.createElement('div', { className: 'col-4 ml-auto mt-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160
                }
            }, _react2.default.createElement('ul', { className: 'list-inline text-white', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 161
                }
            }, _react2.default.createElement('div', { className: 'dropdown dis-inline', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 162
                }
            }, _react2.default.createElement('li', { className: 'list-inline-item px-3 dropdown-toggle', id: 'dropdownMenu2', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 163
                }
            }, _react2.default.createElement('i', { className: 'fa fa-shopping-cart mr-2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 163
                }
            }), 'Cart'), _react2.default.createElement('div', { className: 'dropdown-menu', 'aria-labelledby': 'dropdownMenu2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
                }
            }, _react2.default.createElement('table', { className: 'table table-hover', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 165
                }
            }, _react2.default.createElement('tbody', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
                }
            }, _react2.default.createElement('tr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 167
                }
            }, _react2.default.createElement('td', { scope: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 168
                }
            }, _react2.default.createElement('img', { className: 'img-fluid', src: '/static/img/product/longsleeve.jpg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 168
                }
            })), _react2.default.createElement('td', { className: 'w-50', scope: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 169
                }
            }, 'Sweater Jumper Tops Knitwear'), _react2.default.createElement('td', { className: 'text-right', scope: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 170
                }
            }, '\u0E3F199', _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 170
                }
            }), _react2.default.createElement('span', { className: 'text-danger', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 170
                }
            }, 'Del'))))))), _react2.default.createElement('li', { className: 'list-inline-item px-3 awesome-border', 'data-toggle': 'modal', 'data-target': '#register', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 177
                }
            }, 'Sign up'), _react2.default.createElement('li', { className: 'list-inline-item px-3', 'data-toggle': 'modal', 'data-target': '#login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 178
                }
            }, 'Sign in')))), _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 182
                }
            }, _react2.default.createElement('div', { className: 'col-2 my-1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 183
                }
            }, _react2.default.createElement('img', { className: 'img-fluid', src: '/static/img/Shopy-new.png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 184
                }
            })), _react2.default.createElement('div', { className: 'col-8 my-4', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 186
                }
            }, _react2.default.createElement('input', { className: 'form-control', type: 'search', placeholder: 'Search', 'aria-label': 'Search', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 187
                }
            })), _react2.default.createElement('div', { className: 'col-2 my-4', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 189
                }
            }, _react2.default.createElement('button', { className: 'btn btn-outline-light', type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 190
                }
            }, 'Search'))))), _react2.default.createElement('div', { className: 'container-fluid', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 195
                }
            }, _react2.default.createElement('div', { className: 'row text-center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 196
                }
            }, _react2.default.createElement('div', { className: 'col', id: 'face', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 197
                }
            }, 'FACE'), _react2.default.createElement('div', { className: 'col', id: 'eyes', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 198
                }
            }, 'EYES'), _react2.default.createElement('div', { className: 'col', id: 'lips', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 199
                }
            }, 'LIPS'), _react2.default.createElement('div', { className: 'col', id: 'nails', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 200
                }
            }, 'NAILS'))), _react2.default.createElement('div', { className: 'modal fade', id: 'register', tabindex: '-1', role: 'dialog', 'aria-labelledby': 'exampleModalLabel', 'aria-hidden': 'true', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 203
                }
            }, _react2.default.createElement('div', { className: 'modal-dialog', role: 'document', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 204
                }
            }, _react2.default.createElement('div', { className: 'modal-content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 205
                }
            }, _react2.default.createElement('div', { className: 'modal-body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 206
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 207
                }
            }, 'Sign up'), _react2.default.createElement('hr', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 208
                }
            }), _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 210
                }
            }, _react2.default.createElement('input', { type: 'text', className: 'form-control', value: this.state.registerdata.username, onChange: function onChange(e) {
                    return _this3.setState({ registerdata: (0, _extends3.default)({}, _this3.state.registerdata, { username: e.target.value }) });
                }, id: 'username', placeholder: 'Username', required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 211
                }
            })), _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 213
                }
            }, _react2.default.createElement('input', { type: 'password', className: 'form-control', value: this.state.registerdata.password, id: 'password', placeholder: 'Password', onChange: function onChange(e) {
                    return _this3.setState({ registerdata: (0, _extends3.default)({}, _this3.state.registerdata, { password: e.target.value }) });
                }, required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 214
                }
            })), _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 216
                }
            }, _react2.default.createElement('input', { type: 'password', className: 'form-control', value: this.state.registerdata.confirmpassword, id: 'confirmpassword', placeholder: 'Confirm Password', onChange: function onChange(e) {
                    return _this3.setState({ registerdata: (0, _extends3.default)({}, _this3.state.registerdata, { confirmpassword: e.target.value }) });
                }, required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 217
                }
            })), _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 219
                }
            }, _react2.default.createElement('input', { type: 'email', className: 'form-control', value: this.state.registerdata.email, id: 'email', placeholder: 'Email', onChange: function onChange(e) {
                    return _this3.setState({ registerdata: (0, _extends3.default)({}, _this3.state.registerdata, { email: e.target.value }) });
                }, required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 220
                }
            })), _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 222
                }
            }, _react2.default.createElement('input', { type: 'text', className: 'form-control', value: this.state.registerdata.firstname, id: 'firstname', placeholder: 'Firstname', onChange: function onChange(e) {
                    return _this3.setState({ registerdata: (0, _extends3.default)({}, _this3.state.registerdata, { firstname: e.target.value }) });
                }, required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 223
                }
            })), _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 225
                }
            }, _react2.default.createElement('input', { type: 'text', className: 'form-control', value: this.state.registerdata.lastname, id: 'lastname', placeholder: 'Lastname', onChange: function onChange(e) {
                    return _this3.setState({ registerdata: (0, _extends3.default)({}, _this3.state.registerdata, { lastname: e.target.value }) });
                }, required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 226
                }
            })), _react2.default.createElement('div', { className: 'd-flex justify-content-end', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 228
                }
            }, _react2.default.createElement('button', { type: 'reset', className: 'btn btn-danger mx-2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 229
                }
            }, 'Reset'), _react2.default.createElement('button', { type: 'submit', onClick: this.register, className: 'btn btn-success', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 230
                }
            }, 'Submit')))))), _react2.default.createElement('div', { className: 'modal fade', id: 'login', role: 'dialog', 'aria-labelledby': 'exampleModalLabel', 'aria-hidden': 'true', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 237
                }
            }, _react2.default.createElement('div', { className: 'modal-dialog', role: 'document', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 238
                }
            }, _react2.default.createElement('div', { className: 'modal-content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 239
                }
            }, _react2.default.createElement('div', { className: 'modal-body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 240
                }
            }, _react2.default.createElement('h3', { className: 'mb-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 241
                }
            }, 'Sign in'), _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 242
                }
            }, _react2.default.createElement('input', { type: 'text', className: 'form-control mb-3', id: 'username', placeholder: 'Username', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 243
                }
            }), _react2.default.createElement('input', { type: 'password', className: 'form-control mb-3', id: 'password', placeholder: 'Password', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 244
                }
            }), _react2.default.createElement('button', { type: 'button', className: 'btn btn-primary btn-block', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 245
                }
            }, 'Sign in')))))));
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXG5hdi5qcyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJpbmplY3RHbG9iYWwiLCJTd2VldEFsZXJ0IiwiQXhpb3MiLCJzdGF0ZSIsInNob3ciLCJyZWdpc3RlcmRhdGEiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY29uZmlybXBhc3N3b3JkIiwiZW1haWwiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsInJlZ2lzdGVyIiwidXNlcm5hbWVmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImFkZCIsImFsZXJ0IiwicGFzc3dvcmRmb3JtIiwiY29uZmlybXBhc3N3b3JkZm9ybSIsImVtYWlsZm9ybSIsImZpcnN0bmFtZWZvcm0iLCJsYXN0bmFtZWZvcm0iLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7O0FBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7O2dOLEFBZ0VJO2tCQUFRLEFBQ0UsQUFDTjs7MEJBQWEsQUFDQSxBQUNUOzBCQUZTLEFBRUEsQUFDVDtpQ0FIUyxBQUdPLEFBQ2hCO3VCQUpTLEFBSUgsQUFDTjsyQkFMUyxBQUtDLEFBQ1Y7MEIsQUFSQSxBQUVTLEFBTUE7QUFOQSxBQUNUO0FBSEEsQUFDSixpQixBQVdKLG9GQUFXLG1CQUFBO2dNQUFBOzswRUFBQTswQkFBQTtxREFBQTs2QkFBQTs0Q0FBQTttQ0FDeUUsTUFBQSxBQUFLLE1BRDlFLEFBQ29GOzs2QkFEcEY7NkNBQ0Q7QUFEQyw2Q0FBQSxBQUNELEFBQVU7QUFEVCw2Q0FBQSxBQUNTLEFB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QTJFLFVBQVUsSUFBckYsQUFBd0YsWUFBVyxhQUFuRyxBQUErRyxZQUFXLFVBQVUsa0JBQUEsQUFBQyxHQUFEOzJCQUFNLE9BQUEsQUFBSyxTQUFTLEVBQUMseUNBQWlCLE9BQUEsQUFBSyxNQUF0QixBQUE0QixnQkFBYSxVQUFTLEVBQUEsQUFBRSxPQUF6RSxBQUFNLEFBQWMsQUFBQyxBQUEyRDtBQUFwTixtQkFBOE4sVUFBOU47OEJBQUE7Z0NBcEJaLEFBbUJRLEFBQ0ksQUFFSjtBQUZJO2lDQUVKLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsWUFBUSxNQUFSLEFBQWEsU0FBUSxXQUFyQixBQUErQjs4QkFBL0I7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFDQSwwQkFBQSxjQUFBLFlBQVEsTUFBUixBQUFhLFVBQVMsU0FBUyxLQUEvQixBQUFvQyxVQUFVLFdBQTlDLEFBQXdEOzhCQUF4RDtnQ0FBQTtBQUFBO2VBOUU1QixBQW1ESSxBQUNJLEFBQ0ksQUFDSSxBQXNCUSxBQUVJLEFBT3hCLGdDQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWUsY0FBYSxJQUE1QixBQUErQixTQUFRLE1BQXZDLEFBQTRDLFVBQVMsbUJBQXJELEFBQXFFLHFCQUFvQixlQUF6RixBQUFxRzs4QkFBckc7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWUsZ0JBQWUsTUFBOUIsQUFBbUM7OEJBQW5DO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFFBQUksV0FBSixBQUFjOzhCQUFkO2dDQUFBO0FBQUE7ZUFESixBQUNJLEFBQ0EsNEJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7d0RBQ1csTUFBUCxBQUFZLFFBQU8sV0FBbkIsQUFBNkIscUJBQW9CLElBQWpELEFBQW9ELFlBQVcsYUFBL0QsQUFBMkU7OEJBQTNFO2dDQURKLEFBQ0ksQUFDQTtBQURBO3lEQUNPLE1BQVAsQUFBWSxZQUFXLFdBQXZCLEFBQWlDLHFCQUFvQixJQUFyRCxBQUF3RCxZQUFXLGFBQW5FLEFBQStFOzhCQUEvRTtnQ0FGSixBQUVJLEFBQ0E7QUFEQTtnQ0FDQSxjQUFBLFlBQVEsTUFBUixBQUFhLFVBQVMsV0FBdEIsQUFBZ0M7OEJBQWhDO2dDQUFBO0FBQUE7ZUE5RmhDLEFBQ1EsQUFxRkksQUFDSSxBQUNJLEFBQ0ksQUFFSSxBQUdJLEFBUW5DOzs7OztFQXpMd0IsZ0JBQU0sQSIsImZpbGUiOiJuYXYuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvTmF0dGFuYXQvRG9jdW1lbnRzL2dpYi9EQiBwcm9qZWN0L2RhdGFiYXNlaHVuc2EifQ==