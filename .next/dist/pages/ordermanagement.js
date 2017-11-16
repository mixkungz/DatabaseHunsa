'use strict';

Object.defineProperty(exports, "__esModule", {
				value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _adminlayout = require('../components/adminlayout');

var _adminlayout2 = _interopRequireDefault(_adminlayout);

var _portlet = require('../components/portlet');

var _portlet2 = _interopRequireDefault(_portlet);

var _card = require('../components/card');

var _card2 = _interopRequireDefault(_card);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/phachara/Desktop/Project/2017/Homework/DatabaseHunsa/pages/ordermanagement.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    .img-thumbnail-table{\n        max-width:100px;\n    }\n'], ['\n    .img-thumbnail-table{\n        max-width:100px;\n    }\n']);

(0, _styledComponents.injectGlobal)(_templateObject);
var ProductManagement = function ProductManagement() {
				return _react2.default.createElement('div', {
								__source: {
												fileName: _jsxFileName,
												lineNumber: 12
								}
				}, _react2.default.createElement(_adminlayout2.default, {
								__source: {
												fileName: _jsxFileName,
												lineNumber: 13
								}
				}, _react2.default.createElement('div', { className: 'row', __source: {
												fileName: _jsxFileName,
												lineNumber: 14
								}
				}, _react2.default.createElement('div', { className: 'col-12', __source: {
												fileName: _jsxFileName,
												lineNumber: 15
								}
				}, _react2.default.createElement(_portlet2.default, {
								__source: {
												fileName: _jsxFileName,
												lineNumber: 16
								}
				}, _react2.default.createElement('div', { className: 'd-flex', __source: {
												fileName: _jsxFileName,
												lineNumber: 17
								}
				}, _react2.default.createElement('div', { className: 'mr-auto', __source: {
												fileName: _jsxFileName,
												lineNumber: 18
								}
				}, _react2.default.createElement('h3', { className: '', __source: {
												fileName: _jsxFileName,
												lineNumber: 19
								}
				}, 'Order Management'))), _react2.default.createElement('hr', {
								__source: {
												fileName: _jsxFileName,
												lineNumber: 22
								}
				}), _react2.default.createElement('table', { className: 'table table-hover table-responsive-block', id: 'tableWithSearch', __source: {
												fileName: _jsxFileName,
												lineNumber: 23
								}
				}, _react2.default.createElement('thead', {
								__source: {
												fileName: _jsxFileName,
												lineNumber: 24
								}
				}, _react2.default.createElement('tr', {
								__source: {
												fileName: _jsxFileName,
												lineNumber: 25
								}
				}, _react2.default.createElement('th', {
								__source: {
												fileName: _jsxFileName,
												lineNumber: 26
								}
				}, '#'), _react2.default.createElement('th', {
								__source: {
												fileName: _jsxFileName,
												lineNumber: 27
								}
				}, 'Thumbnail'), _react2.default.createElement('th', {
								__source: {
												fileName: _jsxFileName,
												lineNumber: 28
								}
				}, 'Category'), _react2.default.createElement('th', {
								__source: {
												fileName: _jsxFileName,
												lineNumber: 29
								}
				}, 'Product name'), _react2.default.createElement('th', {
								__source: {
												fileName: _jsxFileName,
												lineNumber: 30
								}
				}, 'Stock'), _react2.default.createElement('th', {
								__source: {
												fileName: _jsxFileName,
												lineNumber: 31
								}
				}, 'Action'))), _react2.default.createElement('tbody', {
								__source: {
												fileName: _jsxFileName,
												lineNumber: 34
								}
				}, _react2.default.createElement('tr', {
								__source: {
												fileName: _jsxFileName,
												lineNumber: 35
								}
				}, _react2.default.createElement('td', { className: 'v-align-middle semi-bold', __source: {
												fileName: _jsxFileName,
												lineNumber: 36
								}
				}, _react2.default.createElement('p', {
								__source: {
												fileName: _jsxFileName,
												lineNumber: 37
								}
				}, '1')), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
												fileName: _jsxFileName,
												lineNumber: 39
								}
				}, _react2.default.createElement('img', { src: '/static/img/product/cosmetic.jpg', className: 'img-thumbnail img-thumbnail-table', __source: {
												fileName: _jsxFileName,
												lineNumber: 40
								}
				})), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
												fileName: _jsxFileName,
												lineNumber: 42
								}
				}, _react2.default.createElement('p', {
								__source: {
												fileName: _jsxFileName,
												lineNumber: 43
								}
				}, 'Face')), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
												fileName: _jsxFileName,
												lineNumber: 45
								}
				}, _react2.default.createElement('p', {
								__source: {
												fileName: _jsxFileName,
												lineNumber: 46
								}
				}, 'UCANBE Brand 8 Colors Moisturizing Smooth Lipsticks')), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
												fileName: _jsxFileName,
												lineNumber: 48
								}
				}, _react2.default.createElement('p', {
								__source: {
												fileName: _jsxFileName,
												lineNumber: 49
								}
				}, '32')), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
												fileName: _jsxFileName,
												lineNumber: 51
								}
				}, _react2.default.createElement('button', { className: 'btn btn-primary m-b-10', type: 'button', __source: {
												fileName: _jsxFileName,
												lineNumber: 52
								}
				}, _react2.default.createElement('i', { className: 'pg-form', __source: {
												fileName: _jsxFileName,
												lineNumber: 52
								}
				})), _react2.default.createElement('button', { className: 'btn btn-danger m-b-10 mx-1', type: 'button', __source: {
												fileName: _jsxFileName,
												lineNumber: 53
								}
				}, _react2.default.createElement('i', { className: 'pg-trash', __source: {
												fileName: _jsxFileName,
												lineNumber: 53
								}
				})))))))))));
};

exports.default = ProductManagement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL29yZGVybWFuYWdlbWVudC5qcyJdLCJuYW1lcyI6WyJBZG1pbkxheW91dCIsIlBvcnRsZXQiLCJDYXJkIiwic3R5bGVkIiwiaW5qZWN0R2xvYmFsIiwiUHJvZHVjdE1hbmFnZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVzs7Ozs7Ozs7OztBQUVsQjtBQUtBLElBQU0sb0JBQW9CLFNBQXBCLEFBQW9CLG9CQUFBOzJCQUN0QixjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDSTtBQURKO3VCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUEsUUFBSSxXQUFKLEFBQWM7c0JBQWQ7d0JBQUE7QUFBQTtPQUhaLEFBQ0ksQUFDSSxBQUNJLEFBR1I7O3NCQUFBO3dCQU5KLEFBTUksQUFDQTtBQURBO0FBQUEsd0JBQ0EsY0FBQSxXQUFPLFdBQVAsQUFBaUIsNENBQTJDLElBQTVELEFBQStEO3NCQUEvRDt3QkFBQSxBQUNoQjtBQURnQjt1QkFDaEIsY0FBQTs7c0JBQUE7d0JBQUEsQUFDQztBQUREO0FBQUEsdUJBQ0MsY0FBQTs7c0JBQUE7d0JBQUEsQUFDQztBQUREO0FBQUEsdUJBQ0MsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BREQsQUFDQyxBQUNBLHNCQUFBLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUZELEFBRUMsQUFDQSw4QkFBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FIRCxBQUdDLEFBQ0EsNkJBQUEsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BSkQsQUFJQyxBQUNBLGlDQUFBLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUxELEFBS0MsQUFDQSwwQkFBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FSYyxBQUNoQixBQUNDLEFBTUMsQUFHRiw2QkFBQSxjQUFBOztzQkFBQTt3QkFBQSxBQUNDO0FBREQ7QUFBQSx1QkFDQyxjQUFBOztzQkFBQTt3QkFBQSxBQUNDO0FBREQ7QUFBQSx1QkFDQyxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBLEFBQ0M7QUFERDt1QkFDQyxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FGRixBQUNDLEFBQ0MsQUFFRCx1QkFBQSxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBLEFBQ2tDO0FBRGxDOzhDQUN1QyxLQUFMLEFBQVMsb0NBQW1DLFdBQTVDLEFBQXNEO3NCQUF0RDt3QkFMbkMsQUFJQyxBQUNrQyxBQUVsQztBQUZrQzt5QkFFbEMsY0FBQSxRQUFJLFdBQUosQUFBYztzQkFBZDt3QkFBQSxBQUNrQztBQURsQzt1QkFDa0MsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BUm5DLEFBT0MsQUFDa0MsQUFFbEMsMEJBQUEsY0FBQSxRQUFJLFdBQUosQUFBYztzQkFBZDt3QkFBQSxBQUNrQztBQURsQzt1QkFDa0MsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BWG5DLEFBVUMsQUFDa0MsQUFFbEMseUVBQUEsY0FBQSxRQUFJLFdBQUosQUFBYztzQkFBZDt3QkFBQSxBQUNrQztBQURsQzt1QkFDa0MsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BZG5DLEFBYUMsQUFDa0MsQUFFSix3QkFBQSxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBLFlBQVEsV0FBUixBQUFrQiwwQkFBeUIsTUFBM0MsQUFBZ0Q7c0JBQWhEO3dCQUFBLEFBQXlEO0FBQXpEOzRDQUE0RCxXQUFILEFBQWE7c0JBQWI7d0JBRDdELEFBQ0ksQUFBeUQsQUFDekQ7QUFEeUQ7eUJBQ3pELGNBQUEsWUFBUSxXQUFSLEFBQWtCLDhCQUE2QixNQUEvQyxBQUFvRDtzQkFBcEQ7d0JBQUEsQUFBNkQ7QUFBN0Q7NENBQWdFLFdBQUgsQUFBYTtzQkFBYjt3QkExQy9FLEFBQ3RCLEFBQ0ksQUFDSSxBQUNJLEFBQ0ksQUFPSSxBQVdoQixBQUNDLEFBZ0IrQixBQUVJLEFBQTZEO0FBQUE7O0FBMUN6RyxBQXVEQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJvcmRlcm1hbmFnZW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BoYWNoYXJhL0Rlc2t0b3AvUHJvamVjdC8yMDE3L0hvbWV3b3JrL0RhdGFiYXNlSHVuc2EifQ==