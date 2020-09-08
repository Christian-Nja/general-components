'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = CustomButton;

var _react = _interopRequireDefault(require('react'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function CustomButton(props) {
    return /*#__PURE__*/_react['default'].createElement('button', {
        onClick: props.onClick
    }, props.text);
}