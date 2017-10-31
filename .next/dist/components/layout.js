'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/phachara/Desktop/Project/2017/Homework/DatabaseHunsa/components/layout.js';


var MyLayout = function MyLayout(props) {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement('meta', { charset: 'UTF-8', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }), _react2.default.createElement('meta', { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge', __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/bootstrap.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }), _react2.default.createElement('script', { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js', integrity: 'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN', crossorigin: 'anonymous', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js', integrity: 'sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh', crossorigin: 'anonymous', __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js', integrity: 'sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ', crossorigin: 'anonymous', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    })), _react2.default.createElement(_header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }), _react2.default.createElement('div', { style: { background: '#fff', padding: 24, minHeight: 380 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, props.children), _react2.default.createElement(_footer2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }));
};

exports.default = MyLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIkZvb3RlciIsIkhlYWQiLCJzdHlsZWQiLCJpbmplY3RHbG9iYWwiLCJNeUxheW91dCIsInByb3BzIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJtaW5IZWlnaHQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBVTs7Ozs7Ozs7O0FBTWpCLElBQU0sV0FBVyxTQUFYLEFBQVcsU0FBQSxBQUFDLE9BQUQ7MkJBQ2IsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSwrQ0FDVSxTQUFOLEFBQWM7c0JBQWQ7d0JBREosQUFDSSxBQUNBO0FBREE7Z0RBQ00sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEI7c0JBQTlCO3dCQUZKLEFBRUksQUFDQTtBQURBO2dEQUNNLGNBQU4sQUFBaUIsbUJBQWtCLFNBQW5DLEFBQTJDO3NCQUEzQzt3QkFISixBQUdJLEFBQ0E7QUFEQTtnREFDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtzQkFBNUI7d0JBSkosQUFJSSxBQUNBO0FBREE7a0RBQ1EsS0FBUixBQUFZLG9EQUFtRCxXQUEvRCxBQUF5RSwyRUFBMEUsYUFBbkosQUFBK0o7c0JBQS9KO3dCQUxKLEFBS0ksQUFDQTtBQURBO2tEQUNRLEtBQVIsQUFBWSw2RUFBNEUsV0FBeEYsQUFBa0csMkVBQTBFLGFBQTVLLEFBQXdMO3NCQUF4TDt3QkFOSixBQU1JLEFBQ0E7QUFEQTtrREFDUSxLQUFSLEFBQVksOEVBQTZFLFdBQXpGLEFBQW1HLDJFQUEwRSxhQUE3SyxBQUF5TDtzQkFBekw7d0JBUlIsQUFDSSxBQU9JLEFBRUo7QUFGSTt5QkFFSixBQUFDOztzQkFBRDt3QkFWSixBQVVJLEFBQ0k7QUFESjtBQUFBLHdCQUNJLGNBQUEsU0FBSyxPQUFPLEVBQUUsWUFBRixBQUFjLFFBQVEsU0FBdEIsQUFBK0IsSUFBSSxXQUEvQyxBQUFZLEFBQThDO3NCQUExRDt3QkFBQSxBQUNLO0FBREw7YUFYUixBQVdRLEFBQ1csQUFFZiwyQkFBQSxBQUFDOztzQkFBRDt3QkFmUyxBQUNiLEFBY0k7QUFBQTtBQUFBO0FBZlIsQUFtQkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waGFjaGFyYS9EZXNrdG9wL1Byb2plY3QvMjAxNy9Ib21ld29yay9EYXRhYmFzZUh1bnNhIn0=