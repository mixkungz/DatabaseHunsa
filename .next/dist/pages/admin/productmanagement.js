'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/phachara/Desktop/Project/2017/Homework/DatabaseHunsa/pages/admin/productmanagement.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    .img-thumbnail-table{\n        max-width:100px;\n    }\n'], ['\n    .img-thumbnail-table{\n        max-width:100px;\n    }\n']);

(0, _styledComponents.injectGlobal)(_templateObject);
var ProductManagement = function ProductManagement() {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement(_adminlayout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement('div', { className: 'row', __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement('div', { className: 'col-12', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, _react2.default.createElement(_portlet2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement('div', { className: 'd-flex', __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement('div', { className: 'mr-auto', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, _react2.default.createElement('h3', { className: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, 'Product Management')), _react2.default.createElement('div', { className: 'align-self-center', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, _react2.default.createElement(_link2.default, { href: 'productedit', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, _react2.default.createElement('button', { className: 'btn btn-info', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, '\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32')))), _react2.default.createElement('hr', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }), _react2.default.createElement('table', { className: 'table table-hover table-responsive-block', id: 'tableWithSearch', __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, _react2.default.createElement('thead', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, _react2.default.createElement('tr', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, _react2.default.createElement('th', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, '#'), _react2.default.createElement('th', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, 'Thumbnail'), _react2.default.createElement('th', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    }, 'Category'), _react2.default.createElement('th', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }, 'Product name'), _react2.default.createElement('th', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, 'Stock'), _react2.default.createElement('th', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }, 'Action'))), _react2.default.createElement('tbody', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }, _react2.default.createElement('tr', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    }, _react2.default.createElement('td', { className: 'v-align-middle semi-bold', __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }, _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }, '1')), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    }, _react2.default.createElement('img', { src: '/static/img/product/cosmetic.jpg', className: 'img-thumbnail img-thumbnail-table', __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    })), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    }, _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }, 'Face')), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
            fileName: _jsxFileName,
            lineNumber: 51
        }
    }, _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 52
        }
    }, 'UCANBE Brand 8 Colors Moisturizing Smooth Lipsticks')), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }, _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    }, '32')), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
            fileName: _jsxFileName,
            lineNumber: 57
        }
    }, _react2.default.createElement('button', { className: 'btn btn-primary m-b-10', type: 'button', __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    }, _react2.default.createElement('i', { className: 'pg-form', __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    })), _react2.default.createElement('button', { className: 'btn btn-danger m-b-10 mx-1', type: 'button', __source: {
            fileName: _jsxFileName,
            lineNumber: 59
        }
    }, _react2.default.createElement('i', { className: 'pg-trash', __source: {
            fileName: _jsxFileName,
            lineNumber: 59
        }
    })))))))))));
};

exports.default = ProductManagement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FkbWluL3Byb2R1Y3RtYW5hZ2VtZW50LmpzIl0sIm5hbWVzIjpbIkFkbWluTGF5b3V0IiwiUG9ydGxldCIsIkNhcmQiLCJzdHlsZWQiLCJpbmplY3RHbG9iYWwiLCJMaW5rIiwiUHJvZHVjdE1hbmFnZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPOzs7Ozs7Ozs7O0FBRVA7QUFLQSxJQUFNLG9CQUFvQixTQUFwQixBQUFvQixvQkFBQTsyQkFDdEIsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBO0FBQUE7T0FGUixBQUNJLEFBQ0ksQUFFSix3Q0FBQSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxBQUFDLGdDQUFLLE1BQU4sQUFBVztzQkFBWDt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxZQUFRLFdBQVIsQUFBa0I7c0JBQWxCO3dCQUFBO0FBQUE7T0FQaEIsQUFDSSxBQUlJLEFBQ0ksQUFDSSxBQUlaOztzQkFBQTt3QkFYSixBQVdJLEFBQ0E7QUFEQTtBQUFBLHdCQUNBLGNBQUEsV0FBTyxXQUFQLEFBQWlCLDRDQUEyQyxJQUE1RCxBQUErRDtzQkFBL0Q7d0JBQUEsQUFDaEI7QUFEZ0I7dUJBQ2hCLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0M7QUFERDtBQUFBLHVCQUNDLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0M7QUFERDtBQUFBLHVCQUNDLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQURELEFBQ0MsQUFDQSxzQkFBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FGRCxBQUVDLEFBQ0EsOEJBQUEsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BSEQsQUFHQyxBQUNBLDZCQUFBLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUpELEFBSUMsQUFDQSxpQ0FBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FMRCxBQUtDLEFBQ0EsMEJBQUEsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BUmMsQUFDaEIsQUFDQyxBQU1DLEFBR0YsNkJBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFDQztBQUREO0FBQUEsdUJBQ0MsY0FBQTs7c0JBQUE7d0JBQUEsQUFDQztBQUREO0FBQUEsdUJBQ0MsY0FBQSxRQUFJLFdBQUosQUFBYztzQkFBZDt3QkFBQSxBQUNDO0FBREQ7dUJBQ0MsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BRkYsQUFDQyxBQUNDLEFBRUQsdUJBQUEsY0FBQSxRQUFJLFdBQUosQUFBYztzQkFBZDt3QkFBQSxBQUNrQztBQURsQzs4Q0FDdUMsS0FBTCxBQUFTLG9DQUFtQyxXQUE1QyxBQUFzRDtzQkFBdEQ7d0JBTG5DLEFBSUMsQUFDa0MsQUFFbEM7QUFGa0M7eUJBRWxDLGNBQUEsUUFBSSxXQUFKLEFBQWM7c0JBQWQ7d0JBQUEsQUFDa0M7QUFEbEM7dUJBQ2tDLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQVJuQyxBQU9DLEFBQ2tDLEFBRWxDLDBCQUFBLGNBQUEsUUFBSSxXQUFKLEFBQWM7c0JBQWQ7d0JBQUEsQUFDa0M7QUFEbEM7dUJBQ2tDLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQVhuQyxBQVVDLEFBQ2tDLEFBRWxDLHlFQUFBLGNBQUEsUUFBSSxXQUFKLEFBQWM7c0JBQWQ7d0JBQUEsQUFDa0M7QUFEbEM7dUJBQ2tDLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQWRuQyxBQWFDLEFBQ2tDLEFBRUosd0JBQUEsY0FBQSxRQUFJLFdBQUosQUFBYztzQkFBZDt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxZQUFRLFdBQVIsQUFBa0IsMEJBQXlCLE1BQTNDLEFBQWdEO3NCQUFoRDt3QkFBQSxBQUF5RDtBQUF6RDs0Q0FBNEQsV0FBSCxBQUFhO3NCQUFiO3dCQUQ3RCxBQUNJLEFBQXlELEFBQ3pEO0FBRHlEO3lCQUN6RCxjQUFBLFlBQVEsV0FBUixBQUFrQiw4QkFBNkIsTUFBL0MsQUFBb0Q7c0JBQXBEO3dCQUFBLEFBQTZEO0FBQTdEOzRDQUFnRSxXQUFILEFBQWE7c0JBQWI7d0JBL0MvRSxBQUN0QixBQUNJLEFBQ0ksQUFDSSxBQUNJLEFBWUksQUFXaEIsQUFDQyxBQWdCK0IsQUFFSSxBQUE2RDtBQUFBOztBQS9DekcsQUE0REE7O2tCQUFBLEFBQWUiLCJmaWxlIjoicHJvZHVjdG1hbmFnZW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BoYWNoYXJhL0Rlc2t0b3AvUHJvamVjdC8yMDE3L0hvbWV3b3JrL0RhdGFiYXNlSHVuc2EifQ==