'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined,
    _jsxFileName = '/Users/phachara/Desktop/Project/2017/Homework/DatabaseHunsa/components/adminlayout.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    color: white;\n    margin-left: 1.2em;\n    font-size: 1.1em;\n'], ['\n    color: white;\n    margin-left: 1.2em;\n    font-size: 1.1em;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n    .full-height-100vh{\n        min-height:100vh !important;\n    }\n'], ['\n    .full-height-100vh{\n        min-height:100vh !important;\n    }\n']);

var TopicFont = _styledComponents2.default.p(_templateObject);
(0, _styledComponents.injectGlobal)(_templateObject2);
var logout = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        localStorage.removeItem("userdetail");
                        console.log('logout');
                        _index2.default.push({
                            pathname: '/admin'
                        });

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function logout() {
        return _ref.apply(this, arguments);
    };
}();
var AdminLayout = function AdminLayout(props) {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, _react2.default.createElement(_adminhead2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }), _react2.default.createElement('body', { className: 'fixed-header dashboard menu-pin menu-behind', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, _react2.default.createElement('nav', { className: 'page-sidebar', 'data-pages': 'sidebar', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, _react2.default.createElement('div', { className: 'sidebar-header', __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, _react2.default.createElement('img', { src: '/static/admin/assets/img/logo_white.png', alt: 'logo', className: 'brand', 'data-src': '/static/admin/assets/img/logo_white.png', 'data-src-retina': '/static/admin/assets/img/logo_white_2x.png',
        width: '78', height: '22', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }), _react2.default.createElement('div', { className: 'sidebar-header-controls', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, _react2.default.createElement('button', { type: 'button', className: 'btn btn-xs sidebar-slide-toggle btn-link m-l-20 hidden-md-down', 'data-pages-toggle': '#appMenu', __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, _react2.default.createElement('i', { className: 'fa fa-angle-down fs-16', __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    })), _react2.default.createElement('button', { type: 'button', className: 'btn btn-link hidden-md-down', 'data-toggle-pin': 'sidebar', __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, _react2.default.createElement('i', { className: 'fa fs-12', __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    })))), _react2.default.createElement('div', { className: 'sidebar-menu', __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }, _react2.default.createElement('ul', { className: 'menu-items', __source: {
            fileName: _jsxFileName,
            lineNumber: 44
        }
    }, _react2.default.createElement('li', { className: 'm-t-30 ', __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    }, _react2.default.createElement(_link2.default, { href: 'dashboard', passHref: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    }, _react2.default.createElement('a', { href: '', className: 'w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 47
        }
    }, _react2.default.createElement('span', { className: 'title w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    }, _react2.default.createElement('i', { className: 'pg-home mr-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    }), 'Dashboard')))), _react2.default.createElement(TopicFont, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 52
        }
    }, 'Store Management'), _react2.default.createElement('li', { className: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 53
        }
    }, _react2.default.createElement(_link2.default, { href: 'productmanagement', passHref: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }, _react2.default.createElement('a', { href: '', className: 'w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    }, _react2.default.createElement('span', { className: 'title w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 56
        }
    }, _react2.default.createElement('i', { className: 'pg-social mr-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 56
        }
    }), 'Product Management')))), _react2.default.createElement('li', { className: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 60
        }
    }, _react2.default.createElement(_link2.default, { href: 'ordermanagement', passHref: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 61
        }
    }, _react2.default.createElement('a', { href: '', className: 'w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 62
        }
    }, _react2.default.createElement('span', { className: 'title w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 63
        }
    }, _react2.default.createElement('i', { className: 'pg-social mr-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 63
        }
    }), 'Order Management')))), _react2.default.createElement(TopicFont, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 67
        }
    }, 'Account Management'), _react2.default.createElement('li', { className: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 68
        }
    }, _react2.default.createElement(_link2.default, { href: 'usermanagement', passHref: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 69
        }
    }, _react2.default.createElement('a', { href: '', className: 'w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 70
        }
    }, _react2.default.createElement('span', { className: 'title w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }, _react2.default.createElement('i', { className: 'pg-like1 mr-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }), 'User Management'))))), _react2.default.createElement('div', { className: 'clearfix', __source: {
            fileName: _jsxFileName,
            lineNumber: 77
        }
    }))), _react2.default.createElement('div', { className: 'page-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 80
        }
    }, _react2.default.createElement('div', { className: 'header', __source: {
            fileName: _jsxFileName,
            lineNumber: 81
        }
    }, _react2.default.createElement('a', { href: '#', className: 'btn-link toggle-sidebar hidden-lg-up pg pg-menu', 'data-toggle': 'sidebar', __source: {
            fileName: _jsxFileName,
            lineNumber: 83
        }
    }), _react2.default.createElement('div', { className: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 86
        }
    }, _react2.default.createElement('div', { className: 'brand inline m-l-10', __source: {
            fileName: _jsxFileName,
            lineNumber: 87
        }
    }, '\u0E19\u0E35\u0E48\u0E42\u0E25\u0E42\u0E01\u0E49\u0E44\u0E07')), _react2.default.createElement('div', { className: 'd-flex align-items-center', __source: {
            fileName: _jsxFileName,
            lineNumber: 94
        }
    }, _react2.default.createElement('div', { className: 'pull-left p-r-10 fs-14 font-heading hidden-md-down', __source: {
            fileName: _jsxFileName,
            lineNumber: 96
        }
    }, _react2.default.createElement('button', { className: 'btn btn-danger', onClick: logout, __source: {
            fileName: _jsxFileName,
            lineNumber: 97
        }
    }, 'Logout')), _react2.default.createElement('div', { className: 'dropdown pull-right hidden-md-down', __source: {
            fileName: _jsxFileName,
            lineNumber: 99
        }
    }, _react2.default.createElement('button', { className: 'profile-dropdown-toggle', type: 'button', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false', __source: {
            fileName: _jsxFileName,
            lineNumber: 100
        }
    }, _react2.default.createElement('span', { className: 'thumbnail-wrapper d32 circular inline', __source: {
            fileName: _jsxFileName,
            lineNumber: 101
        }
    }, _react2.default.createElement('img', { src: '/static/admin/assets/img/profiles/avatar.jpg', alt: '', 'data-src': '/static/admin/assets/img/profiles/avatar.jpg', 'data-src-retina': '/static/admin/assets/img/profiles/avatar_small2x.jpg',
        width: '32', height: '32', __source: {
            fileName: _jsxFileName,
            lineNumber: 102
        }
    }))), _react2.default.createElement('div', { className: 'dropdown-menu dropdown-menu-right profile-dropdown', role: 'menu', __source: {
            fileName: _jsxFileName,
            lineNumber: 106
        }
    }, _react2.default.createElement('a', { href: '#', className: 'dropdown-item', __source: {
            fileName: _jsxFileName,
            lineNumber: 107
        }
    }, _react2.default.createElement('i', { className: 'pg-power', __source: {
            fileName: _jsxFileName,
            lineNumber: 108
        }
    }), ' Logout'))))), _react2.default.createElement('div', { className: 'page-content-wrapper full-height-100vh', __source: {
            fileName: _jsxFileName,
            lineNumber: 114
        }
    }, _react2.default.createElement('div', { className: 'content sm-gutter', __source: {
            fileName: _jsxFileName,
            lineNumber: 115
        }
    }, _react2.default.createElement('div', { className: 'container-fluid padding-25 sm-padding-10', __source: {
            fileName: _jsxFileName,
            lineNumber: 116
        }
    }, props.children)), _react2.default.createElement('div', { className: ' container-fluid  container-fixed-lg footer', __source: {
            fileName: _jsxFileName,
            lineNumber: 120
        }
    }, _react2.default.createElement('div', { className: 'copyright sm-text-center', __source: {
            fileName: _jsxFileName,
            lineNumber: 121
        }
    }, _react2.default.createElement('p', { className: 'small no-margin pull-left sm-pull-reset', __source: {
            fileName: _jsxFileName,
            lineNumber: 122
        }
    }, _react2.default.createElement('span', { className: 'hint-text', __source: {
            fileName: _jsxFileName,
            lineNumber: 123
        }
    }, 'Copyright \xA9 2017 '), _react2.default.createElement('span', { className: 'font-montserrat', __source: {
            fileName: _jsxFileName,
            lineNumber: 124
        }
    }, 'DatabaseHunsa Group'), '.', _react2.default.createElement('span', { className: 'hint-text', __source: {
            fileName: _jsxFileName,
            lineNumber: 125
        }
    }, 'All rights reserved. ')), _react2.default.createElement('div', { className: 'clearfix', __source: {
            fileName: _jsxFileName,
            lineNumber: 128
        }
    })))))));
};

exports.default = AdminLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWRtaW5sYXlvdXQuanMiXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlZCIsImluamVjdEdsb2JhbCIsIkxpbmsiLCJSb3V0ZXIiLCJUb3BpY0ZvbnQiLCJwIiwibG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwicGF0aG5hbWUiLCJBZG1pbkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7Ozs7QUFDUCxJQUFNLFlBQVksMkJBQVosQUFBbUIsRUFBekI7QUFLQTtBQUtBLElBQU0scUJBQUE7d0ZBQVMsbUJBQUE7c0VBQUE7c0JBQUE7aURBQUE7eUJBQ1g7cUNBQUEsQUFBYSxXQUFiLEFBQXdCLEFBQ3hCO2dDQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7d0NBQUEsQUFBTztzQ0FISSxBQUdYLEFBQVksQUFDRTtBQURGLEFBQ1I7O3lCQUpPO3lCQUFBO3dDQUFBOztBQUFBO29CQUFBO0FBQVQ7OzZCQUFBO2dDQUFBO0FBQUE7QUFBTjtBQU9BLElBQU0sY0FBYyxTQUFkLEFBQWMsWUFBQSxBQUFDLE9BQUQ7MkJBQ2hCLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLEtBQUEsa0JBQ0ksQUFBQzs7c0JBQUQ7d0JBREosQUFDSSxBQUNBO0FBREE7QUFBQSx3QkFDQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtzQkFBaEI7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWUsZ0JBQWUsY0FBOUIsQUFBeUM7c0JBQXpDO3dCQUFBLEFBR0k7QUFISjt1QkFHSSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0k7QUFESjs4Q0FDUyxLQUFMLEFBQVMsMkNBQTBDLEtB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