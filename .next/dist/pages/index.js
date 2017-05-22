'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPosts() {
    return [{ id: 'hello-nextjs', title: 'Hello Next.js' }, { id: 'learn-nextjs', title: 'Learn Next.js is awesome' }, { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }];
}

var PostLink = function PostLink(_ref) {
    var post = _ref.post;
    return _react2.default.createElement('li', {
        'data-jsx': 564931920
    }, _react2.default.createElement(_link2.default, { as: '/p/' + post.id, href: '/post?title=' + post.title }, _react2.default.createElement('a', {
        'data-jsx': 564931920
    }, post.title)), _react2.default.createElement(_style2.default, {
        styleId: 564931920,
        css: 'li[data-jsx="564931920"] {list-style: none;margin: 5px 0;}a[data-jsx="564931920"] {text-decoration: none;color: blue;}a[data-jsx="564931920"]:hover {opacity: 0.6;}'
    }));
};

exports.default = function () {
    return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('h1', {
        'data-jsx': 428171708
    }, 'My Blog'), _react2.default.createElement('ul', {
        'data-jsx': 428171708
    }, getPosts().map(function (post) {
        return _react2.default.createElement(PostLink, { key: post.id, post: post });
    })), _react2.default.createElement(_style2.default, {
        styleId: 428171708,
        css: 'h1[data-jsx="428171708"],a[data-jsx="428171708"] {font-family: "Arial";}ul[data-jsx="428171708"] {padding: 0;}'
    }));
};