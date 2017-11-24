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

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Nattanat\\Documents\\gib\\DB project\\databasehunsa\\components\\adminlayout.js';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGFkbWlubGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZWQiLCJpbmplY3RHbG9iYWwiLCJMaW5rIiwiVG9waWNGb250IiwicCIsIkFkbWluTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU87Ozs7Ozs7Ozs7O0FBRVAsSUFBTSxZQUFZLDJCQUFaLEFBQW1CLEVBQXpCO0FBS0E7O0FBTUEsSUFBTSxjQUFjLFNBQWQsQUFBYyxZQUFBLEFBQUMsT0FBRDsyQkFDaEIsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxBQUFDOztzQkFBRDt3QkFESixBQUNJLEFBQ0E7QUFEQTtBQUFBLHdCQUNBLGNBQUEsVUFBTSxXQUFOLEFBQWdCO3NCQUFoQjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZSxnQkFBZSxjQUE5QixBQUF5QztzQkFBekM7d0JBQUEsQUFHSTtBQUhKO3VCQUdJLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDSTtBQURKOzhDQUNTLEtBQUwsQUFBUywyQ0FBMEMsS0FBbkQsQUFBdUQsUUFBTyxXQUE5RCxBQUF3RSxTQUFRLFlBQWhGLEFBQXlGLDJDQUEwQyxtQkFBbkksQUFBbUosQUFDL0k7ZUFESixBQUNVLE1BQUssUUFEZixBQUNzQjtzQkFEdEI7d0JBREosQUFDSSxBQUVBO0FBRkE7d0JBRUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxZQUFRLE1BQVIsQUFBYSxVQUFTLFdBQXRCLEFBQWdDLGtFQUFpRSxxQkFBakcsQUFBbUg7c0JBQW5IO3dCQUFBLEFBQ0k7QUFESjs0Q0FDTyxXQUFILEFBQWE7c0JBQWI7d0JBRlIsQUFDSSxBQUNJLEFBRUo7QUFGSTt5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QUFlO3NCQUFmO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0s7QUFETDthQUZSLEFBQ0ksQUFDSSxBQUNXLEFBR2YsNEJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxPQUFHLFdBQUgsQUFBYTtzQkFBYjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxVQUFNLFdBQU4sQUFBZ0I7c0JBQWhCO3dCQUFBO0FBQUE7T0FESixBQUNJLEFBQ0EseUNBQUEsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7c0JBQWhCO3dCQUFBO0FBQUE7T0FGSixBQUVJLHdCQUNBLHFCQUFBLGNBQUEsVUFBTSxXQUFOLEFBQWdCO3NCQUFoQjt3QkFBQTtBQUFBO09BSlIsQUFDSSxBQUdJLEFBR0osa0VBQUssV0FBTCxBQUFlO3NCQUFmO3dCQTNHUixBQUNoQixBQUVJLEFBdURJLEFBbUNJLEFBTUksQUFDSSxBQU9JO0FBQUE7O0FBM0c1QixBQXFIQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJhZG1pbmxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9OYXR0YW5hdC9Eb2N1bWVudHMvZ2liL0RCIHByb2plY3QvZGF0YWJhc2VodW5zYSJ9