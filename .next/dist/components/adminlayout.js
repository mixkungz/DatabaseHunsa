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
            lineNumber: 16
        }
    }, _react2.default.createElement(_adminhead2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }), _react2.default.createElement('body', { className: 'fixed-header dashboard menu-pin menu-behind', __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement('nav', { className: 'page-sidebar', 'data-pages': 'sidebar', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, _react2.default.createElement('div', { className: 'sidebar-overlay-slide from-top', id: 'appMenu', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, _react2.default.createElement('div', { className: 'row', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, _react2.default.createElement('div', { className: 'col-xs-6 no-padding', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, _react2.default.createElement('a', { href: '#', className: 'p-l-40', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, _react2.default.createElement('img', { src: '/static/admin/assets/img/demo/social_app.svg', alt: 'socail', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }))), _react2.default.createElement('div', { className: 'col-xs-6 no-padding', __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }, _react2.default.createElement('a', { href: '#', className: 'p-l-10', __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }, _react2.default.createElement('img', { src: '/static/admin/assets/img/demo/email_app.svg', alt: 'socail', __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    })))), _react2.default.createElement('div', { className: 'row', __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, _react2.default.createElement('div', { className: 'col-xs-6 m-t-20 no-padding', __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    }, _react2.default.createElement('a', { href: '#', className: 'p-l-40', __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }, _react2.default.createElement('img', { src: '/static/admin/assets/img/demo/calendar_app.svg', alt: 'socail', __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }))), _react2.default.createElement('div', { className: 'col-xs-6 m-t-20 no-padding', __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }, _react2.default.createElement('a', { href: '#', className: 'p-l-10', __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }, _react2.default.createElement('img', { src: '/static/admin/assets/img/demo/add_more.svg', alt: 'socail', __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    }))))), _react2.default.createElement('div', { className: 'sidebar-header', __source: {
            fileName: _jsxFileName,
            lineNumber: 47
        }
    }, _react2.default.createElement('img', { src: '/static/admin/assets/img/logo_white.png', alt: 'logo', className: 'brand', 'data-src': '/static/admin/assets/img/logo_white.png', 'data-src-retina': '/static/admin/assets/img/logo_white_2x.png',
        width: '78', height: '22', __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    }), _react2.default.createElement('div', { className: 'sidebar-header-controls', __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    }, _react2.default.createElement('button', { type: 'button', className: 'btn btn-xs sidebar-slide-toggle btn-link m-l-20 hidden-md-down', 'data-pages-toggle': '#appMenu', __source: {
            fileName: _jsxFileName,
            lineNumber: 51
        }
    }, _react2.default.createElement('i', { className: 'fa fa-angle-down fs-16', __source: {
            fileName: _jsxFileName,
            lineNumber: 52
        }
    })), _react2.default.createElement('button', { type: 'button', className: 'btn btn-link hidden-md-down', 'data-toggle-pin': 'sidebar', __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }, _react2.default.createElement('i', { className: 'fa fs-12', __source: {
            fileName: _jsxFileName,
            lineNumber: 55
        }
    })))), _react2.default.createElement('div', { className: 'sidebar-menu', __source: {
            fileName: _jsxFileName,
            lineNumber: 60
        }
    }, _react2.default.createElement('ul', { className: 'menu-items', __source: {
            fileName: _jsxFileName,
            lineNumber: 62
        }
    }, _react2.default.createElement('li', { className: 'm-t-30 ', __source: {
            fileName: _jsxFileName,
            lineNumber: 63
        }
    }, _react2.default.createElement('a', { href: 'social.html', className: 'w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 64
        }
    }, _react2.default.createElement('span', { className: 'title w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 65
        }
    }, _react2.default.createElement('i', { className: 'pg-home mr-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 65
        }
    }), 'Dashboard'))), _react2.default.createElement(TopicFont, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 68
        }
    }, 'Store Management'), _react2.default.createElement('li', { className: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 69
        }
    }, _react2.default.createElement('a', { href: 'social.html', className: 'w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 70
        }
    }, _react2.default.createElement('span', { className: 'title w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }, _react2.default.createElement('i', { className: 'pg-social mr-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }), 'Product Management'))), _react2.default.createElement('li', { className: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 74
        }
    }, _react2.default.createElement('a', { href: 'social.html', className: 'w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 75
        }
    }, _react2.default.createElement('span', { className: 'title w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 76
        }
    }, _react2.default.createElement('i', { className: 'pg-social mr-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 76
        }
    }), 'Order Management'))), _react2.default.createElement(TopicFont, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 79
        }
    }, 'Account Management'), _react2.default.createElement('li', { className: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 80
        }
    }, _react2.default.createElement('a', { href: 'social.html', className: 'w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 81
        }
    }, _react2.default.createElement('span', { className: 'title w-100', __source: {
            fileName: _jsxFileName,
            lineNumber: 82
        }
    }, _react2.default.createElement('i', { className: 'pg-like1 mr-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 82
        }
    }), 'User Management')))), _react2.default.createElement('div', { className: 'clearfix', __source: {
            fileName: _jsxFileName,
            lineNumber: 87
        }
    }))), _react2.default.createElement('div', { className: 'page-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 90
        }
    }, _react2.default.createElement('div', { className: 'header', __source: {
            fileName: _jsxFileName,
            lineNumber: 91
        }
    }, _react2.default.createElement('a', { href: '#', className: 'btn-link toggle-sidebar hidden-lg-up pg pg-menu', 'data-toggle': 'sidebar', __source: {
            fileName: _jsxFileName,
            lineNumber: 93
        }
    }), _react2.default.createElement('div', { className: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 96
        }
    }, _react2.default.createElement('div', { className: 'brand inline m-l-10', __source: {
            fileName: _jsxFileName,
            lineNumber: 97
        }
    }, _react2.default.createElement('img', { src: '/static/admin/assets/img/logo.png', alt: 'logo', 'data-src': '/static/admin/assets/img/logo.png', 'data-src-retina': '/static/admin/assets/img/logo_2x.png', width: '78',
        height: '22', __source: {
            fileName: _jsxFileName,
            lineNumber: 98
        }
    }))), _react2.default.createElement('div', { className: 'd-flex align-items-center', __source: {
            fileName: _jsxFileName,
            lineNumber: 103
        }
    }, _react2.default.createElement('div', { className: 'pull-left p-r-10 fs-14 font-heading hidden-md-down', __source: {
            fileName: _jsxFileName,
            lineNumber: 105
        }
    }, _react2.default.createElement('span', { className: 'semi-bold', __source: {
            fileName: _jsxFileName,
            lineNumber: 106
        }
    }, '\u0E01\u0E39\u0E40\u0E2D\u0E07'), _react2.default.createElement('span', { className: 'text-master', __source: {
            fileName: _jsxFileName,
            lineNumber: 107
        }
    }, '\u0E41\u0E2D\u0E14\u0E21\u0E34\u0E19')), _react2.default.createElement('div', { className: 'dropdown pull-right hidden-md-down', __source: {
            fileName: _jsxFileName,
            lineNumber: 109
        }
    }, _react2.default.createElement('button', { className: 'profile-dropdown-toggle', type: 'button', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false', __source: {
            fileName: _jsxFileName,
            lineNumber: 110
        }
    }, _react2.default.createElement('span', { className: 'thumbnail-wrapper d32 circular inline', __source: {
            fileName: _jsxFileName,
            lineNumber: 111
        }
    }, _react2.default.createElement('img', { src: '/static/admin/assets/img/profiles/avatar.jpg', alt: '', 'data-src': '/static/admin/assets/img/profiles/avatar.jpg', 'data-src-retina': '/static/admin/assets/img/profiles/avatar_small2x.jpg',
        width: '32', height: '32', __source: {
            fileName: _jsxFileName,
            lineNumber: 112
        }
    }))), _react2.default.createElement('div', { className: 'dropdown-menu dropdown-menu-right profile-dropdown', role: 'menu', __source: {
            fileName: _jsxFileName,
            lineNumber: 116
        }
    }, _react2.default.createElement('a', { href: '#', className: 'dropdown-item', __source: {
            fileName: _jsxFileName,
            lineNumber: 117
        }
    }, _react2.default.createElement('i', { className: 'pg-power', __source: {
            fileName: _jsxFileName,
            lineNumber: 118
        }
    }), ' Logout'))))), _react2.default.createElement('div', { className: 'page-content-wrapper full-height-100vh', __source: {
            fileName: _jsxFileName,
            lineNumber: 124
        }
    }, _react2.default.createElement('div', { className: 'content sm-gutter', __source: {
            fileName: _jsxFileName,
            lineNumber: 125
        }
    }, _react2.default.createElement('div', { className: 'container-fluid padding-25 sm-padding-10', __source: {
            fileName: _jsxFileName,
            lineNumber: 126
        }
    }, props.children)), _react2.default.createElement('div', { className: ' container-fluid  container-fixed-lg footer', __source: {
            fileName: _jsxFileName,
            lineNumber: 130
        }
    }, _react2.default.createElement('div', { className: 'copyright sm-text-center', __source: {
            fileName: _jsxFileName,
            lineNumber: 131
        }
    }, _react2.default.createElement('p', { className: 'small no-margin pull-left sm-pull-reset', __source: {
            fileName: _jsxFileName,
            lineNumber: 132
        }
    }, _react2.default.createElement('span', { className: 'hint-text', __source: {
            fileName: _jsxFileName,
            lineNumber: 133
        }
    }, 'Copyright \xA9 2017 '), _react2.default.createElement('span', { className: 'font-montserrat', __source: {
            fileName: _jsxFileName,
            lineNumber: 134
        }
    }, 'DatabaseHunsa Group'), '.', _react2.default.createElement('span', { className: 'hint-text', __source: {
            fileName: _jsxFileName,
            lineNumber: 135
        }
    }, 'All rights reserved. ')), _react2.default.createElement('div', { className: 'clearfix', __source: {
            fileName: _jsxFileName,
            lineNumber: 138
        }
    })))))));
};

exports.default = AdminLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWRtaW5sYXlvdXQuanMiXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlZCIsImluamVjdEdsb2JhbCIsIlRvcGljRm9udCIsInAiLCJBZG1pbkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVzs7Ozs7Ozs7Ozs7QUFFbEIsSUFBTSxZQUFZLDJCQUFaLEFBQW1CLEVBQXpCO0FBS0E7O0FBTUEsSUFBTSxjQUFjLFNBQWQsQUFBYyxZQUFBLEFBQUMsT0FBRDsyQkFDaEIsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxBQUFDOztzQkFBRDt3QkFESixBQUNJLEFBQ0E7QUFEQTtBQUFBLHdCQUNBLGNBQUEsVUFBTSxXQUFOLEFBQWdCO3NCQUFoQjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZSxnQkFBZSxjQUE5QixBQUF5QztzQkFBekM7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWUsa0NBQWlDLElBQWhELEFBQW1EO3NCQUFuRDt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxPQUFHLE1BQUgsQUFBUSxLQUFJLFdBQVosQUFBc0I7c0JBQXRCO3dCQUFBLEFBQ0k7QUFESjs4Q0FDUyxLQUFMLEFBQVMsZ0RBQStDLEtBQXhELEFBQTREO3NCQUE1RDt3QkFIWixBQUNJLEFBQ0ksQUFDSSxBQUdSO0FBSFE7MEJBR1IsY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxPQUFHLE1BQUgsQUFBUSxLQUFJLFdBQVosQUFBc0I7c0JBQXRCO3dC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UixBQUNJLEFBQ0ksQUFDVyxBQUdmLDRCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUEsT0FBRyxXQUFILEFBQWE7c0JBQWI7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUEsVUFBTSxXQUFOLEFBQWdCO3NCQUFoQjt3QkFBQTtBQUFBO09BREosQUFDSSxBQUNBLHlDQUFBLGNBQUEsVUFBTSxXQUFOLEFBQWdCO3NCQUFoQjt3QkFBQTtBQUFBO09BRkosQUFFSSx3QkFDQSxxQkFBQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtzQkFBaEI7d0JBQUE7QUFBQTtPQUpSLEFBQ0ksQUFHSSxBQUdKLGtFQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkEzSFIsQUFDaEIsQUFFSSxBQXdFSSxBQWtDSSxBQU1JLEFBQ0ksQUFPSTtBQUFBOztBQTNINUIsQUFxSUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiYWRtaW5sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BoYWNoYXJhL0Rlc2t0b3AvUHJvamVjdC8yMDE3L0hvbWV3b3JrL0RhdGFiYXNlSHVuc2EifQ==