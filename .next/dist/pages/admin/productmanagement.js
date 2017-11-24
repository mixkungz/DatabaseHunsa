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

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Nattanat\\Documents\\gib\\DB project\\databasehunsa\\pages\\admin\\productmanagement.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    .img-thumbnail-table{\n        max-width:100px;\n    }\n    /* The switch - the box around the slider */\n    .switch {\n      position: relative;\n      display: inline-block;\n      width: 60px;\n      height: 34px;\n    }\n    \n    /* Hide default HTML checkbox */\n    .switch input {display:none;}\n    \n    /* The slider */\n    .slider {\n      position: absolute;\n      cursor: pointer;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: #ccc;\n      -webkit-transition: .4s;\n      transition: .4s;\n    }\n    \n    .slider:before {\n      position: absolute;\n      content: "";\n      height: 26px;\n      width: 26px;\n      left: 4px;\n      bottom: 4px;\n      background-color: white;\n      -webkit-transition: .4s;\n      transition: .4s;\n    }\n    \n    input:checked + .slider {\n      background-color: #2196F3;\n    }\n    \n    input:focus + .slider {\n      box-shadow: 0 0 1px #2196F3;\n    }\n    \n    input:checked + .slider:before {\n      -webkit-transform: translateX(26px);\n      -ms-transform: translateX(26px);\n      transform: translateX(26px);\n    }\n    \n    /* Rounded sliders */\n    .slider.round {\n      border-radius: 34px;\n    }\n    \n    .slider.round:before {\n      border-radius: 50%;\n    }\n'], ['\n    .img-thumbnail-table{\n        max-width:100px;\n    }\n    /* The switch - the box around the slider */\n    .switch {\n      position: relative;\n      display: inline-block;\n      width: 60px;\n      height: 34px;\n    }\n    \n    /* Hide default HTML checkbox */\n    .switch input {display:none;}\n    \n    /* The slider */\n    .slider {\n      position: absolute;\n      cursor: pointer;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: #ccc;\n      -webkit-transition: .4s;\n      transition: .4s;\n    }\n    \n    .slider:before {\n      position: absolute;\n      content: "";\n      height: 26px;\n      width: 26px;\n      left: 4px;\n      bottom: 4px;\n      background-color: white;\n      -webkit-transition: .4s;\n      transition: .4s;\n    }\n    \n    input:checked + .slider {\n      background-color: #2196F3;\n    }\n    \n    input:focus + .slider {\n      box-shadow: 0 0 1px #2196F3;\n    }\n    \n    input:checked + .slider:before {\n      -webkit-transform: translateX(26px);\n      -ms-transform: translateX(26px);\n      transform: translateX(26px);\n    }\n    \n    /* Rounded sliders */\n    .slider.round {\n      border-radius: 34px;\n    }\n    \n    .slider.round:before {\n      border-radius: 50%;\n    }\n']);

(0, _styledComponents.injectGlobal)(_templateObject);
var ProductManagement = function ProductManagement() {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }, _react2.default.createElement(_adminlayout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 72
        }
    }, _react2.default.createElement('div', { className: 'row', __source: {
            fileName: _jsxFileName,
            lineNumber: 73
        }
    }, _react2.default.createElement('div', { className: 'col-12', __source: {
            fileName: _jsxFileName,
            lineNumber: 74
        }
    }, _react2.default.createElement(_portlet2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 75
        }
    }, _react2.default.createElement('div', { className: 'd-flex', __source: {
            fileName: _jsxFileName,
            lineNumber: 76
        }
    }, _react2.default.createElement('div', { className: 'mr-auto', __source: {
            fileName: _jsxFileName,
            lineNumber: 77
        }
    }, _react2.default.createElement('h3', { className: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 78
        }
    }, 'Product Management')), _react2.default.createElement('div', { className: 'align-self-center', __source: {
            fileName: _jsxFileName,
            lineNumber: 80
        }
    }, _react2.default.createElement(_link2.default, { href: 'productedit', __source: {
            fileName: _jsxFileName,
            lineNumber: 81
        }
    }, _react2.default.createElement('button', { className: 'btn btn-info', __source: {
            fileName: _jsxFileName,
            lineNumber: 82
        }
    }, '\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32')))), _react2.default.createElement('hr', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 86
        }
    }), _react2.default.createElement('table', { className: 'table table-hover table-responsive-block', id: 'tableWithSearch', __source: {
            fileName: _jsxFileName,
            lineNumber: 87
        }
    }, _react2.default.createElement('thead', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 88
        }
    }, _react2.default.createElement('tr', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 89
        }
    }, _react2.default.createElement('th', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 90
        }
    }, '#'), _react2.default.createElement('th', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 91
        }
    }, 'Thumbnail'), _react2.default.createElement('th', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 92
        }
    }, 'Category'), _react2.default.createElement('th', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 93
        }
    }, 'Product name'), _react2.default.createElement('th', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 94
        }
    }, 'Stock'), _react2.default.createElement('th', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 95
        }
    }, 'Status'), _react2.default.createElement('th', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 96
        }
    }, 'Action'))), _react2.default.createElement('tbody', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 99
        }
    }, _react2.default.createElement('tr', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 100
        }
    }, _react2.default.createElement('td', { className: 'v-align-middle semi-bold', __source: {
            fileName: _jsxFileName,
            lineNumber: 101
        }
    }, _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 102
        }
    }, '1')), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
            fileName: _jsxFileName,
            lineNumber: 104
        }
    }, _react2.default.createElement('img', { src: '/static/img/product/cosmetic.jpg', className: 'img-thumbnail img-thumbnail-table', __source: {
            fileName: _jsxFileName,
            lineNumber: 105
        }
    })), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
            fileName: _jsxFileName,
            lineNumber: 107
        }
    }, _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 108
        }
    }, 'Face')), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
            fileName: _jsxFileName,
            lineNumber: 110
        }
    }, _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 111
        }
    }, 'UCANBE Brand 8 Colors Moisturizing Smooth Lipsticks')), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
            fileName: _jsxFileName,
            lineNumber: 113
        }
    }, _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 114
        }
    }, '32')), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
            fileName: _jsxFileName,
            lineNumber: 116
        }
    }, _react2.default.createElement('label', { 'class': 'switch', __source: {
            fileName: _jsxFileName,
            lineNumber: 117
        }
    }, _react2.default.createElement('input', { type: 'checkbox', __source: {
            fileName: _jsxFileName,
            lineNumber: 118
        }
    }), _react2.default.createElement('span', { 'class': 'slider round', __source: {
            fileName: _jsxFileName,
            lineNumber: 119
        }
    }))), _react2.default.createElement('td', { className: 'v-align-middle', __source: {
            fileName: _jsxFileName,
            lineNumber: 122
        }
    }, _react2.default.createElement('button', { className: 'btn btn-primary m-b-10', type: 'button', __source: {
            fileName: _jsxFileName,
            lineNumber: 123
        }
    }, _react2.default.createElement('i', { className: 'pg-form', __source: {
            fileName: _jsxFileName,
            lineNumber: 123
        }
    })), _react2.default.createElement('button', { className: 'btn btn-danger m-b-10 mx-1', type: 'button', __source: {
            fileName: _jsxFileName,
            lineNumber: 124
        }
    }, _react2.default.createElement('i', { className: 'pg-trash', __source: {
            fileName: _jsxFileName,
            lineNumber: 124
        }
    })))))))))));
};

exports.default = ProductManagement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxhZG1pblxccHJvZHVjdG1hbmFnZW1lbnQuanMiXSwibmFtZXMiOlsiQWRtaW5MYXlvdXQiLCJQb3J0bGV0IiwiQ2FyZCIsInN0eWxlZCIsImluamVjdEdsb2JhbCIsIkxpbmsiLCJQcm9kdWN0TWFuYWdlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU87Ozs7Ozs7Ozs7QUFFUDtBQStEQSxJQUFNLG9CQUFvQixTQUFwQixBQUFvQixvQkFBQTsyQkFDdEIsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBO0FBQUE7T0FGUixBQUNJLEFBQ0ksQUFFSix3Q0FBQSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxBQUFDLGdDQUFLLE1BQU4sQUFBVztzQkFBWDt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxZQUFRLFdBQVIsQUFBa0I7c0JBQWxCO3dCQUFBO0FBQUE7T0FQaEIsQUFDSSxBQUlJLEFBQ0ksQUFDSSxBQUlaOztzQkFBQTt3QkFYSixBQVdJLEFBQ0E7QUFEQTtBQUFBLHdCQUNBLGNBQUEsV0FBTyxXQUFQLEFBQWlCLDRDQUEyQyxJQUE1RCxBQUErRDtzQkFBL0Q7d0JBQUEsQUFDaEI7QUFEZ0I7dUJBQ2hCLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0M7QUFERDtBQUFBLHVCQUNDLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0M7QUFERDtBQUFBLHVCQUNDLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQURELEFBQ0MsQUFDQSxzQkFBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FGRCxBQUVDLEFBQ0EsOEJBQUEsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BSEQsQUFHQyxBQUNBLDZCQUFBLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUpELEFBSUMsQUFDQSxpQ0FBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FMRCxBQUtDLEFBQ0EsMEJBQUEsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BTkQsQUFNQyxBQUNBLDJCQUFBLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQVRjLEFBQ2hCLEFBQ0MsQUFPQyxBQUdGLDZCQUFBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0M7QUFERDtBQUFBLHVCQUNDLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0M7QUFERDtBQUFBLHVCQUNDLGNBQUEsUUFBSSxXQUFKLEFBQWM7c0JBQWQ7d0JBQUEsQUFDQztBQUREO3VCQUNDLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUZGLEFBQ0MsQUFDQyxBQUVELHVCQUFBLGNBQUEsUUFBSSxXQUFKLEFBQWM7c0JBQWQ7d0JBQUEsQUFDa0M7QUFEbEM7OENBQ3VDLEtBQUwsQUFBUyxvQ0FBbUMsV0FBNUMsQUFBc0Q7c0JBQXREO3dCQUxuQyxBQUlDLEFBQ2tDLEFBRWxDO0FBRmtDO3lCQUVsQyxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBLEFBQ2tDO0FBRGxDO3VCQUNrQyxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FSbkMsQUFPQyxBQUNrQyxBQUVsQywwQkFBQSxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBLEFBQ2tDO0FBRGxDO3VCQUNrQyxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FYbkMsQUFVQyxBQUNrQyxBQUVsQyx5RUFBQSxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBLEFBQ2tDO0FBRGxDO3VCQUNrQyxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FkbkMsQUFhQyxBQUNrQyxBQUVsQyx3QkFBQSxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBLEFBQ2tDO0FBRGxDO3VCQUNrQyxjQUFBLFdBQU8sU0FBUCxBQUFhO3NCQUFiO3dCQUFBLEFBQ0k7QUFESjtnREFDVyxNQUFQLEFBQVk7c0JBQVo7d0JBREosQUFDSSxBQUNBO0FBREE7Z0RBQ00sU0FBTixBQUFZO3NCQUFaO3dCQW5CdkMsQUFnQkMsQUFDa0MsQUFFSSxBQUdSO0FBSFE7MEJBR1IsY0FBQSxRQUFJLFdBQUosQUFBYztzQkFBZDt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxZQUFRLFdBQVIsQUFBa0IsMEJBQXlCLE1BQTNDLEFBQWdEO3NCQUFoRDt3QkFBQSxBQUF5RDtBQUF6RDs0Q0FBNEQsV0FBSCxBQUFhO3NCQUFiO3dCQUQ3RCxBQUNJLEFBQXlELEFBQ3pEO0FBRHlEO3lCQUN6RCxjQUFBLFlBQVEsV0FBUixBQUFrQiw4QkFBNkIsTUFBL0MsQUFBb0Q7c0JBQXBEO3dCQUFBLEFBQTZEO0FBQTdEOzRDQUFnRSxXQUFILEFBQWE7c0JBQWI7d0JBdEQvRSxBQUN0QixBQUNJLEFBQ0ksQUFDSSxBQUNJLEFBWUksQUFZaEIsQUFDQyxBQXNCK0IsQUFFSSxBQUE2RDtBQUFBOztBQXREekcsQUFtRUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoicHJvZHVjdG1hbmFnZW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvTmF0dGFuYXQvRG9jdW1lbnRzL2dpYi9EQiBwcm9qZWN0L2RhdGFiYXNlaHVuc2EifQ==