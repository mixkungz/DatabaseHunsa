'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nav = require('./nav');

var _nav2 = _interopRequireDefault(_nav);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _carousel = require('./carousel');

var _carousel2 = _interopRequireDefault(_carousel);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/phachara/Desktop/Project/2017/Homework/DatabaseHunsa/components/layout.js';


var MyLayout = function MyLayout(props) {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement('title', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, 'DatabaseHunsa | Layout'), _react2.default.createElement('meta', { charset: 'UTF-8', __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }), _react2.default.createElement('meta', { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/bootstrap.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/font-awesome.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }), _react2.default.createElement('script', { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js', integrity: 'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN', crossorigin: 'anonymous', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js', integrity: 'sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh', crossorigin: 'anonymous', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js', integrity: 'sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ', crossorigin: 'anonymous', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    })), _react2.default.createElement(_nav2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }), _react2.default.createElement('div', { style: { background: '#fff' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }, _react2.default.createElement(_carousel2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }), props.children), _react2.default.createElement(_footer2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }));
};

exports.default = MyLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIkZvb3RlciIsIkhlYWQiLCJDYXJvdXNlbCIsInN0eWxlZCIsImluamVjdEdsb2JhbCIsIk15TGF5b3V0IiwicHJvcHMiLCJiYWNrZ3JvdW5kIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7Ozs7Ozs7QUFNakIsSUFBTSxXQUFXLFNBQVgsQUFBVyxTQUFBLEFBQUMsT0FBRDsyQkFDYixjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQURKLEFBQ0ksQUFDQSxtRUFBTSxTQUFOLEFBQWM7c0JBQWQ7d0JBRkosQUFFSSxBQUNBO0FBREE7Z0RBQ00sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEI7c0JBQTlCO3dCQUhKLEFBR0ksQUFDQTtBQURBO2dEQUNNLGNBQU4sQUFBaUIsbUJBQWtCLFNBQW5DLEFBQTJDO3NCQUEzQzt3QkFKSixBQUlJLEFBQ0E7QUFEQTtnREFDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtzQkFBNUI7d0JBTEosQUFLSSxBQUNBO0FBREE7Z0RBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7c0JBQTVCO3dCQU5KLEFBTUksQUFDQTtBQURBO2dEQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCLFlBQVcsTUFBdkMsQUFBNEM7c0JBQTVDO3dCQVBKLEFBT0ksQUFDQTtBQURBO2dEQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCLFlBQVcsTUFBdkMsQUFBNEM7c0JBQTVDO3dCQVJKLEFBUUksQUFDQTtBQURBO2tEQUNRLEtBQVIsQUFBWSxvREFBbUQsV0FBL0QsQUFBeUUsMkVBQTBFLGFBQW5KLEFBQStKO3NCQUEvSjt3QkFUSixBQVNJLEFBQ0E7QUFEQTtrREFDUSxLQUFSLEFBQVksNkVBQTRFLFdBQXhGLEFBQWtHLDJFQUEwRSxhQUE1SyxBQUF3TDtzQkFBeEw7d0JBVkosQUFVSSxBQUNBO0FBREE7a0RBQ1EsS0FBUixBQUFZLDhFQUE2RSxXQUF6RixBQUFtRywyRUFBMEUsYUFBN0ssQUFBeUw7c0JBQXpMO3dCQVpSLEFBQ0ksQUFXSSxBQUVKO0FBRkk7eUJBRUosQUFBQzs7c0JBQUQ7d0JBZEosQUFjSSxBQUNBO0FBREE7QUFBQSx3QkFDQSxjQUFBLFNBQUssT0FBTyxFQUFFLFlBQWQsQUFBWSxBQUFjO3NCQUExQjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksQUFBQzs7c0JBQUQ7d0JBREosQUFDSSxBQUNDO0FBREQ7QUFBQSxjQWhCUixBQWVJLEFBRVcsQUFHWCwyQkFBQSxBQUFDOztzQkFBRDt3QkFyQlMsQUFDYixBQW9CSTtBQUFBO0FBQUE7QUFyQlIsQUEwQkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waGFjaGFyYS9EZXNrdG9wL1Byb2plY3QvMjAxNy9Ib21ld29yay9EYXRhYmFzZUh1bnNhIn0=