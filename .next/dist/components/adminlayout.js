'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _adminhead = require('./adminhead');

var _adminhead2 = _interopRequireDefault(_adminhead);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/phachara/Desktop/Project/2017/Homework/DatabaseHunsa/components/adminlayout.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    color: white;\n    margin-left: 1.2em;\n    font-size: 1.1em;\n'], ['\n    color: white;\n    margin-left: 1.2em;\n    font-size: 1.1em;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    .full-height-100vh{\n        min-height:100vh !important;\n    }\n'], ['\n    .full-height-100vh{\n        min-height:100vh !important;\n    }\n']);

var TopicFont = _styledComponents2.default.p(_templateObject);
(0, _styledComponents.injectGlobal)(_templateObject2);

var AdminLayout = function AdminLayout(props) {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement(_adminhead2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }), _react2.default.createElement('body', { className: 'fixed-header dashboard menu-pin menu-behind', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, _react2.default.createElement('nav', { className: 'page-sidebar', 'data-pages': 'sidebar', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, _react2.default.createElement('div', { className: 'sidebar-header', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, _react2.default.createElement('img', { src: '/static/admin/assets/img/logo_white.png', alt: 'logo', className: 'brand', 'data-src': '/static/admin/assets/img/logo_white.png', 'data-src-retina': '/static/admin/assets/img/logo_white_2x.png',
        width: '78', height: '22', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }), _react2.default.createElement('div', { className: 'sidebar-header-controls', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, _react2.default.createElement('button', { type: 'button', className: 'btn btn-xs sidebar-slide-toggle btn-link m-l-20 hidden-md-down', 'data-pages-toggle': '#appMenu', __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }, _react2.default.createElement('i', { className: 'fa fa-angle-down fs-16', __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    })), _react2.default.createElement('button', { type: 'button', className: 'btn btn-link hidden-md-down', 'data-toggle-pin': 'sidebar', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, _react2.default.createElement('i', { className: 'fa fs-12', __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    })))), _react2.default.createElement('div', { className: 'sidebar-menu', __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, _react2.default.createElement('ul', { className: 'menu-items', __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }, _react2.default.createElement('li', { className: 'm-t-30 ', __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }, _react2.default.createElement(_link2.default, { href: 'dashboard', passHref: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }, _react2.default.createElement('a', { href: '', className: 'w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    }, _react2.default.createElement('span', { className: 'title w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }, _react2.default.createElement('i', { className: 'pg-home mr-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }), 'Dashboard')))), _react2.default.createElement(TopicFont, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    }, 'Store Management'), _react2.default.createElement('li', { className: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 47
        }
    }, _react2.default.createElement(_link2.default, { href: 'productmanagement', passHref: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    }, _react2.default.createElement('a', { href: '', className: 'w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }, _react2.default.createElement('span', { className: 'title w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    }, _react2.default.createElement('i', { className: 'pg-social mr-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    }), 'Product Management')))), _react2.default.createElement('li', { className: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }, _react2.default.createElement(_link2.default, { href: 'ordermanagement', passHref: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    }, _react2.default.createElement('a', { href: '', className: 'w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 56
        }
    }, _react2.default.createElement('span', { className: 'title w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 57
        }
    }, _react2.default.createElement('i', { className: 'pg-social mr-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 57
        }
    }), 'Order Management')))), _react2.default.createElement(TopicFont, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 61
        }
    }, 'Account Management'), _react2.default.createElement('li', { className: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 62
        }
    }, _react2.default.createElement(_link2.default, { href: 'usermanagement', passHref: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 63
        }
    }, _react2.default.createElement('a', { href: '', className: 'w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 64
        }
    }, _react2.default.createElement('span', { className: 'title w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 65
        }
    }, _react2.default.createElement('i', { className: 'pg-like1 mr-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 65
        }
    }), 'User Management'))))), _react2.default.createElement('div', { className: 'clearfix', __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }))), _react2.default.createElement('div', { className: 'page-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 74
        }
    }, _react2.default.createElement('div', { className: 'header', __source: {
            fileName: _jsxFileName,
            lineNumber: 75
        }
    }, _react2.default.createElement('a', { href: '#', className: 'btn-link toggle-sidebar hidden-lg-up pg pg-menu', 'data-toggle': 'sidebar', __source: {
            fileName: _jsxFileName,
            lineNumber: 77
        }
    }), _react2.default.createElement('div', { className: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 80
        }
    }, _react2.default.createElement('div', { className: 'brand inline m-l-10', __source: {
            fileName: _jsxFileName,
            lineNumber: 81
        }
    }, '\u0E19\u0E35\u0E48\u0E42\u0E25\u0E42\u0E01\u0E49\u0E44\u0E07')), _react2.default.createElement('div', { className: 'd-flex align-items-center', __source: {
            fileName: _jsxFileName,
            lineNumber: 88
        }
    }, _react2.default.createElement('div', { className: 'pull-left p-r-10 fs-14 font-heading hidden-md-down', __source: {
            fileName: _jsxFileName,
            lineNumber: 90
        }
    }, _react2.default.createElement('span', { className: 'semi-bold', __source: {
            fileName: _jsxFileName,
            lineNumber: 91
        }
    }, '\u0E01\u0E39\u0E40\u0E2D\u0E07'), _react2.default.createElement('span', { className: 'text-master', __source: {
            fileName: _jsxFileName,
            lineNumber: 92
        }
    }, '\u0E41\u0E2D\u0E14\u0E21\u0E34\u0E19')), _react2.default.createElement('div', { className: 'dropdown pull-right hidden-md-down', __source: {
            fileName: _jsxFileName,
            lineNumber: 94
        }
    }, _react2.default.createElement('button', { className: 'profile-dropdown-toggle', type: 'button', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false', __source: {
            fileName: _jsxFileName,
            lineNumber: 95
        }
    }, _react2.default.createElement('span', { className: 'thumbnail-wrapper d32 circular inline', __source: {
            fileName: _jsxFileName,
            lineNumber: 96
        }
    }, _react2.default.createElement('img', { src: '/static/admin/assets/img/profiles/avatar.jpg', alt: '', 'data-src': '/static/admin/assets/img/profiles/avatar.jpg', 'data-src-retina': '/static/admin/assets/img/profiles/avatar_small2x.jpg',
        width: '32', height: '32', __source: {
            fileName: _jsxFileName,
            lineNumber: 97
        }
    }))), _react2.default.createElement('div', { className: 'dropdown-menu dropdown-menu-right profile-dropdown', role: 'menu', __source: {
            fileName: _jsxFileName,
            lineNumber: 101
        }
    }, _react2.default.createElement('a', { href: '#', className: 'dropdown-item', __source: {
            fileName: _jsxFileName,
            lineNumber: 102
        }
    }, _react2.default.createElement('i', { className: 'pg-power', __source: {
            fileName: _jsxFileName,
            lineNumber: 103
        }
    }), ' Logout'))))), _react2.default.createElement('div', { className: 'page-content-wrapper full-height-100vh', __source: {
            fileName: _jsxFileName,
            lineNumber: 109
        }
    }, _react2.default.createElement('div', { className: 'content sm-gutter', __source: {
            fileName: _jsxFileName,
            lineNumber: 110
        }
    }, _react2.default.createElement('div', { className: 'container-fluid padding-25 sm-padding-10', __source: {
            fileName: _jsxFileName,
            lineNumber: 111
        }
    }, props.children)), _react2.default.createElement('div', { className: ' container-fluid  container-fixed-lg footer', __source: {
            fileName: _jsxFileName,
            lineNumber: 115
        }
    }, _react2.default.createElement('div', { className: 'copyright sm-text-center', __source: {
            fileName: _jsxFileName,
            lineNumber: 116
        }
    }, _react2.default.createElement('p', { className: 'small no-margin pull-left sm-pull-reset', __source: {
            fileName: _jsxFileName,
            lineNumber: 117
        }
    }, _react2.default.createElement('span', { className: 'hint-text', __source: {
            fileName: _jsxFileName,
            lineNumber: 118
        }
    }, 'Copyright \xA9 2017 '), _react2.default.createElement('span', { className: 'font-montserrat', __source: {
            fileName: _jsxFileName,
            lineNumber: 119
        }
    }, 'DatabaseHunsa Group'), '.', _react2.default.createElement('span', { className: 'hint-text', __source: {
            fileName: _jsxFileName,
            lineNumber: 120
        }
    }, 'All rights reserved. ')), _react2.default.createElement('div', { className: 'clearfix', __source: {
            fileName: _jsxFileName,
            lineNumber: 123
        }
    })))))));
};

exports.default = AdminLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWRtaW5sYXlvdXQuanMiXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlZCIsImluamVjdEdsb2JhbCIsIkxpbmsiLCJUb3BpY0ZvbnQiLCJwIiwiQWRtaW5MYXlvdXQiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTzs7Ozs7Ozs7Ozs7QUFFUCxJQUFNLFlBQVksMkJBQVosQUFBbUIsRUFBekI7QUFLQTs7QUFNQSxJQUFNLGNBQWMsU0FBZCxBQUFjLFlBQUEsQUFBQyxPQUFEOzJCQUNoQixjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLEFBQUM7O3NCQUFEO3dCQURKLEFBQ0ksQUFDQTtBQURBO0FBQUEsd0JBQ0EsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7c0JBQWhCO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlLGdCQUFlLGNBQTlCLEFBQXlDO3NCQUF6Qzt3QkFBQSxBQUdJO0FBSEo7dUJBR0ksY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUNJO0FBREo7OENBQ1MsS0FBTCxBQUFTLDJDQUEwQyxLQUFuRCxBQUF1RCxRQUFPLFdBQTlELEFBQXdFLFNBQVEsWUFBaEYsQUFBeUYsMkNBQTBDLG1CQUFuSSxBQUFtSixBQUMvSTtlQURKLEFBQ1UsTUFBSyxRQURmLEFBQ3NCO3NCQUR0Qjt3QkFESixBQUNJLEFBRUE7QUFGQTt3QkFFQSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBLFlBQVEsTUFBUixBQUFhLFVBQVMsV0FBdEIsQUFBZ0Msa0VBQWlFLHFCQUFqRyxBQUFtSDtzQkFBbkg7d0JBQUEsQUFDSTtBQURKOzRDQUNPLFdBQUgsQUFBYTtzQkFBYjt3QkFGUixBQUNJLEFBQ0ksQUFFSjtBQUZJO3lC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QWU7c0JBQWY7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDSztBQURMO2FBRlIsQUFDSSxBQUNJLEFBQ1csQUFHZiw0QkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBLE9BQUcsV0FBSCxBQUFhO3NCQUFiO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBLFVBQU0sV0FBTixBQUFnQjtzQkFBaEI7d0JBQUE7QUFBQTtPQURKLEFBQ0ksQUFDQSx5Q0FBQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtzQkFBaEI7d0JBQUE7QUFBQTtPQUZKLEFBRUksd0JBQ0EscUJBQUEsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7c0JBQWhCO3dCQUFBO0FBQUE7T0FKUixBQUNJLEFBR0ksQUFHSixrRUFBSyxXQUFMLEFBQWU7c0JBQWY7d0JBM0dSLEFBQ2hCLEFBRUksQUF1REksQUFtQ0ksQUFNSSxBQUNJLEFBT0k7QUFBQTs7QUEzRzVCLEFBcUhBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImFkbWlubGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waGFjaGFyYS9EZXNrdG9wL1Byb2plY3QvMjAxNy9Ib21ld29yay9EYXRhYmFzZUh1bnNhIn0=