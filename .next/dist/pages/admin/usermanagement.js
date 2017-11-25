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
			alluser: [],
			userDetail: null
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
		}(), _this.componentDidMount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
			return _regenerator2.default.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.next = 2;
							return _this.setState({
								userDetail: JSON.parse(window.localStorage.getItem("userdetail"))
							});

						case 2:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, _this2);
		})), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ProductManagement, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, this.state.userDetail ? this.state.userDetail.RoleID === 1 ? _react2.default.createElement(_adminlayout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, _react2.default.createElement('div', { className: 'row', __source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, _react2.default.createElement('div', { className: 'col-12', __source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, _react2.default.createElement(_portlet2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, _react2.default.createElement('div', { className: 'd-flex', __source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, _react2.default.createElement('div', { className: 'mr-auto', __source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, _react2.default.createElement('h3', { className: '', __source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, 'User Management'))), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}), _react2.default.createElement('table', { className: 'table table-hover table-responsive-block', id: 'tableWithSearch', __source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, _react2.default.createElement('thead', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, _react2.default.createElement('tr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, _react2.default.createElement('th', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, '#'), _react2.default.createElement('th', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, 'Username'), _react2.default.createElement('th', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, 'Customer Name'), _react2.default.createElement('th', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}, 'Email'), _react2.default.createElement('th', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, 'Order'), _react2.default.createElement('th', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, 'Action'))), _react2.default.createElement('tbody', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, this.state.alluser.map(function (data, index) {
				return _react2.default.createElement('tr', {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 69
					}
				}, _react2.default.createElement('td', { className: 'v-align-middle semi-bold', __source: {
						fileName: _jsxFileName,
						lineNumber: 70
					}
				}, _react2.default.createElement('p', {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 71
					}
				}, data.UserID)), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
						fileName: _jsxFileName,
						lineNumber: 73
					}
				}, _react2.default.createElement('p', {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 74
					}
				}, data.Username)), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
						fileName: _jsxFileName,
						lineNumber: 76
					}
				}, _react2.default.createElement('p', {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 77
					}
				}, data.Firstname, ' ', data.Lastname)), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
						fileName: _jsxFileName,
						lineNumber: 79
					}
				}, _react2.default.createElement('p', {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 80
					}
				}, data.Email)), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
						fileName: _jsxFileName,
						lineNumber: 82
					}
				}, _react2.default.createElement('button', { className: 'btn btn-primary m-b-10', type: 'button', __source: {
						fileName: _jsxFileName,
						lineNumber: 83
					}
				}, _react2.default.createElement('i', { className: 'pg-form', __source: {
						fileName: _jsxFileName,
						lineNumber: 83
					}
				}))), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
						fileName: _jsxFileName,
						lineNumber: 85
					}
				}, _react2.default.createElement('button', { className: 'btn btn-danger m-b-10 mx-1', onClick: function onClick() {
						return _this3.delUser(data.UserID);
					}, type: 'button', __source: {
						fileName: _jsxFileName,
						lineNumber: 86
					}
				}, _react2.default.createElement('i', { className: 'pg-trash', __source: {
						fileName: _jsxFileName,
						lineNumber: 86
					}
				}))));
			}))))))) : _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 98
				}
			}, ' \u0E04\u0E38\u0E13\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E41\u0E2D\u0E14\u0E21\u0E34\u0E19 ') : _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 99
				}
			}, '\u0E42\u0E1B\u0E23\u0E14\u0E25\u0E47\u0E2D\u0E04\u0E2D\u0E34\u0E19\u0E21\u0E32\u0E01\u0E48\u0E2D\u0E19'));
		}
	}]);

	return ProductManagement;
}(_react2.default.Component);

exports.default = ProductManagement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FkbWluL3VzZXJtYW5hZ2VtZW50LmpzIl0sIm5hbWVzIjpbIkFkbWluTGF5b3V0IiwiUG9ydGxldCIsIkNhcmQiLCJzdHlsZWQiLCJpbmplY3RHbG9iYWwiLCJBeGlvcyIsIlByb2R1Y3RNYW5hZ2VtZW50Iiwic3RhdGUiLCJhbGx1c2VyIiwidXNlckRldGFpbCIsImNvbXBvbmVudFdpbGxNb3VudCIsIm1ldGhvZCIsInVybCIsInRoZW4iLCJyZXMiLCJ4IiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZGF0YSIsImRlbFVzZXIiLCJ1aWQiLCJsb2NhdGlvbiIsInJlbG9hZCIsImNvbXBvbmVudERpZE1vdW50IiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlJvbGVJRCIsIm1hcCIsImluZGV4IiwiVXNlcklEIiwiVXNlcm5hbWUiLCJGaXJzdG5hbWUiLCJMYXN0bmFtZSIsIkVtYWlsIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPOzs7Ozs7Ozs7SSxBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Z08sQUFDTDtZQUFNLEFBQ0ssQUFDVjtlQUZLLEFBRVEsQTtBQUZSLEFBQ0wsVyxBQUdELDhGQUFxQixtQkFBQTtPQUFBO2lFQUFBO2NBQUE7c0NBQUE7V0FBQTt1QkFBQTs7Z0JBQ0QsQUFDRixBQUNQO2FBRkcsQUFBTSxBQUVMO0FBRkssQUFDVCxRQURHLEVBQUEsQUFJRixLQUFLLFVBQUEsQUFBUyxLQUFLLEFBQ2hCO2VBQUEsQUFBTyxBQUNsQjtBQVBpQixBQUNQOztXQUFUO0FBRGdCLG9CQVFsQjs7ZUFBQSxBQUFRLElBQVIsQUFBWSxBQUNkO2FBQUEsQUFBSyxTQUFT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LEFBQWM7Z0JBQWQ7a0JBQUEsQUFDQztBQUREO3VCQUNDLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLFlBTEYsQUFJQyxBQUNDLEFBQVMsQUFFViw0QkFBQSxjQUFBLFFBQUksV0FBSixBQUFjO2dCQUFkO2tCQUFBLEFBQ0M7QUFERDt1QkFDQyxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxZQUFBLEFBQVMsV0FBWSxVQVJ2QixBQU9DLEFBQ0MsQUFBMEIsQUFFM0IsNEJBQUEsY0FBQSxRQUFJLFdBQUosQUFBYztnQkFBZDtrQkFBQSxBQUNDO0FBREQ7dUJBQ0MsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEsWUFYRixBQVVDLEFBQ0MsQUFBUyxBQUVWLHlCQUFBLGNBQUEsUUFBSSxXQUFKLEFBQWM7Z0JBQWQ7a0JBQUEsQUFDQztBQUREO3VCQUNDLGNBQUEsWUFBUSxXQUFSLEFBQWtCLDBCQUF5QixNQUEzQyxBQUFnRDtnQkFBaEQ7a0JBQUEsQUFBeUQ7QUFBekQ7NENBQTRELFdBQUgsQUFBYTtnQkFBYjtrQkFkM0QsQUFhQyxBQUNDLEFBQXlELEFBRTFEO0FBRjBEOzBCQUUxRCxjQUFBLFFBQUksV0FBSixBQUFjO2dCQUFkO2tCQUFBLEFBQ0M7QUFERDt1QkFDQyxjQUFBLFlBQVEsV0FBUixBQUFrQiw4QkFBNkIsU0FBUyxtQkFBQTthQUFJLE9BQUEsQUFBSyxRQUFRLEtBQWpCLEFBQUksQUFBa0I7QUFBOUUsUUFBdUYsTUFBdkYsQUFBNEY7Z0JBQTVGO2tCQUFBLEFBQXFHO0FBQXJHOzRDQUF3RyxXQUFILEFBQWE7Z0JBQWI7a0JBbEJoRixBQUN2QixBQWdCQyxBQUNDLEFBQXFHO0FBQUE7O0FBMUNoRyxBQUNmLEFBQ0MsQUFDQyxBQUNDLEFBT0MsQUFXRSxBQUVFLFdBeEJPLG1CQXNEQSxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxJQUFBLEVBdkRBLEFBdURBLGtIQUNFLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLElBQUEsRUEzRHBCLEFBQ0MsQUEwRG1CLEFBSXBCOzs7OztFQWhHOEIsZ0JBQU0sQSxBQW9HdEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoidXNlcm1hbmFnZW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BoYWNoYXJhL0Rlc2t0b3AvUHJvamVjdC8yMDE3L0hvbWV3b3JrL0RhdGFiYXNlSHVuc2EifQ==