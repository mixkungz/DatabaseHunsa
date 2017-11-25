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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/phachara/Desktop/Project/2017/Homework/DatabaseHunsa/pages/admin/usermanagement.js?entry';


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
			alluser: []
		}, _this.componentWillMount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			var x;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return (0, _axios2.default)({
								method: 'get',
								url: 'http://localhost:3001/admin/user/alluser'
							}).then(function (res) {
								return res;
							});

						case 2:
							x = _context.sent;

							console.log(x);
							_this.setState({ alluser: x.data });

						case 5:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this2);
		})), _this.delUser = function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(uid) {
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								console.log(uid);
								_context3.next = 3;
								return (0, _axios2.default)({
									method: 'post',
									url: 'http://localhost:3001/admin/user/del/' + uid
								}).then(function () {
									var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(res) {
										return _regenerator2.default.wrap(function _callee2$(_context2) {
											while (1) {
												switch (_context2.prev = _context2.next) {
													case 0:
														console.log(res);
														_context2.next = 3;
														return location.reload();

													case 3:
													case 'end':
														return _context2.stop();
												}
											}
										}, _callee2, this);
									}));

									return function (_x2) {
										return _ref4.apply(this, arguments);
									};
								}());

							case 3:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, _this2);
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
					lineNumber: 35
				}
			}, _react2.default.createElement(_adminlayout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, _react2.default.createElement('div', { className: 'row', __source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, _react2.default.createElement('div', { className: 'col-12', __source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, _react2.default.createElement(_portlet2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}, _react2.default.createElement('div', { className: 'd-flex', __source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, _react2.default.createElement('div', { className: 'mr-auto', __source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, _react2.default.createElement('h3', { className: '', __source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}, 'User Management'))), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}), _react2.default.createElement('table', { className: 'table table-hover table-responsive-block', id: 'tableWithSearch', __source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, _react2.default.createElement('thead', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, _react2.default.createElement('tr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, _react2.default.createElement('th', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, '#'), _react2.default.createElement('th', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, 'Username'), _react2.default.createElement('th', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, 'Customer Name'), _react2.default.createElement('th', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, 'Email'), _react2.default.createElement('th', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, 'Order'), _react2.default.createElement('th', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, 'Action'))), _react2.default.createElement('tbody', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, this.state.alluser.map(function (data, index) {
				return _react2.default.createElement('tr', {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 60
					}
				}, _react2.default.createElement('td', { className: 'v-align-middle semi-bold', __source: {
						fileName: _jsxFileName,
						lineNumber: 61
					}
				}, _react2.default.createElement('p', {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 62
					}
				}, data.UserID)), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
						fileName: _jsxFileName,
						lineNumber: 64
					}
				}, _react2.default.createElement('p', {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 65
					}
				}, data.Username)), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
						fileName: _jsxFileName,
						lineNumber: 67
					}
				}, _react2.default.createElement('p', {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 68
					}
				}, data.Firstname, ' ', data.Lastname)), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
						fileName: _jsxFileName,
						lineNumber: 70
					}
				}, _react2.default.createElement('p', {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 71
					}
				}, data.Email)), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
						fileName: _jsxFileName,
						lineNumber: 73
					}
				}, _react2.default.createElement('button', { className: 'btn btn-primary m-b-10', type: 'button', __source: {
						fileName: _jsxFileName,
						lineNumber: 74
					}
				}, _react2.default.createElement('i', { className: 'pg-form', __source: {
						fileName: _jsxFileName,
						lineNumber: 74
					}
				}))), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
						fileName: _jsxFileName,
						lineNumber: 76
					}
				}, _react2.default.createElement('button', { className: 'btn btn-danger m-b-10 mx-1', onClick: function onClick() {
						return _this3.delUser(data.UserID);
					}, type: 'button', __source: {
						fileName: _jsxFileName,
						lineNumber: 77
					}
				}, _react2.default.createElement('i', { className: 'pg-trash', __source: {
						fileName: _jsxFileName,
						lineNumber: 77
					}
				}))));
			}))))))));
		}
	}]);

	return ProductManagement;
}(_react2.default.Component);

exports.default = ProductManagement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FkbWluL3VzZXJtYW5hZ2VtZW50LmpzIl0sIm5hbWVzIjpbIkFkbWluTGF5b3V0IiwiUG9ydGxldCIsIkNhcmQiLCJzdHlsZWQiLCJpbmplY3RHbG9iYWwiLCJBeGlvcyIsIlByb2R1Y3RNYW5hZ2VtZW50Iiwic3RhdGUiLCJhbGx1c2VyIiwiY29tcG9uZW50V2lsbE1vdW50IiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlcyIsIngiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJkYXRhIiwiZGVsVXNlciIsInVpZCIsImxvY2F0aW9uIiwicmVsb2FkIiwibWFwIiwiaW5kZXgiLCJVc2VySUQiLCJVc2VybmFtZSIsIkZpcnN0bmFtZSIsIkxhc3RuYW1lIiwiRW1haWwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU87Ozs7Ozs7OztJLEFBRUQ7Ozs7Ozs7Ozs7Ozs7OztnT0FDTCxBO1lBQU0sQSxBQUNLO0FBREwsQUFDTCxXQUVELEEsOEZBQXFCLG1CQUFBO09BQUE7aUVBQUE7Y0FBQTtzQ0FBQTtXQUFBO3VCQUFBOztnQkFDRCxBQUNGLEFBQ1A7YUFGRyxBQUFNLEFBRUw7QUFGSyxBQUNULFFBREcsRUFBQSxBQUlGLEtBQUssVUFBQSxBQUFTLEtBQUssQUFDaEI7ZUFBQSxBQUFPLEFBQ2xCO0FBUGlCLEFBQ1A7O1dBQVQ7QUFEZ0Isb0JBUWxCOztlQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2Q7YUFBQSxBQUFLLFNBQVMsRUFBQyxTQUFRLEVBVEgsQUFTcEIsQUFBYyxBQUFXOztXQVRMO1dBQUE7dUJBQUE7O0FBQUE7ZUFBQTtBLGFBV3JCLEE7d0ZBQVUsa0JBQUEsQUFBTSxLQUFOO29FQUFBO2VBQUE7eUNB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O2dCQUFkO2tCQUFBLEFBQ0M7QUFERDt1QkFDQyxjQUFBLFlBQVEsV0FBUixBQUFrQiwwQkFBeUIsTUFBM0MsQUFBZ0Q7Z0JBQWhEO2tCQUFBLEFBQXlEO0FBQXpEOzRDQUE0RCxXQUFILEFBQWE7Z0JBQWI7a0JBZDNELEFBYUMsQUFDQyxBQUF5RCxBQUUxRDtBQUYwRDswQkFFMUQsY0FBQSxRQUFJLFdBQUosQUFBYztnQkFBZDtrQkFBQSxBQUNDO0FBREQ7dUJBQ0MsY0FBQSxZQUFRLFdBQVIsQUFBa0IsOEJBQTZCLFNBQVMsbUJBQUE7YUFBSSxPQUFBLEFBQUssUUFBUSxLQUFqQixBQUFJLEFBQWtCO0FBQTlFLFFBQXVGLE1BQXZGLEFBQTRGO2dCQUE1RjtrQkFBQSxBQUFxRztBQUFyRzs0Q0FBd0csV0FBSCxBQUFhO2dCQUFiO2tCQWxCaEYsQUFDdkIsQUFnQkMsQUFDQyxBQUFxRztBQUFBOztBQTNDbEgsQUFDQyxBQUNFLEFBQ0MsQUFDQyxBQUNDLEFBT0MsQUFXRSxBQUVFLEFBaUNYOzs7OztFQXJGOEIsZ0JBQU0sQSxBQXlGdEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoidXNlcm1hbmFnZW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BoYWNoYXJhL0Rlc2t0b3AvUHJvamVjdC8yMDE3L0hvbWV3b3JrL0RhdGFiYXNlSHVuc2EifQ==