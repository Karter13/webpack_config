import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { About } from '@/pages/About';
import classes from './App.module.scss';
import avatarPng from '@/assets/avatar.png';
import avatarJpg from '@/assets/avatar.jpg';
import Icon from '@/assets/app-image.svg';
// TREE SHAKING
function TODO(a) {
    console.log('TODOFUNCTION');
}
export var App = function () {
    var _a = useState(0), count = _a[0], setCount = _a[1];
    var increment = function () {
        setCount(function (prev) { return prev + 1; });
    };
    if (__PLATFORM__ === 'desktop') {
        return _jsx("div", { children: "IS DESKTOP PLATFORM" });
    }
    if (__PLATFORM__ === 'mobile') {
        return _jsx("div", { children: "IS MOBILE PLATFORM" });
    }
    TODO('dfdf');
    if (__ENV__ === 'development') {
        return _jsx("div", { children: "IS DEVELOPMENT" });
    }
    return (_jsxs("div", { children: [_jsxs("h1", { children: ["PLATFORM=", __PLATFORM__] }), _jsxs("div", { children: [_jsx("img", { width: 100, height: 100, src: avatarPng, alt: '' }), _jsx("img", { width: 100, height: 100, src: avatarJpg, alt: '' })] }), _jsx("div", { children: _jsx(Icon, { style: { color: 'red' }, width: 150, height: 150 }) }), _jsx(Link, { to: '/About', children: "about" }), _jsx("br", {}), _jsx(Link, { to: '/shop', children: "shop" }), _jsx("h1", { children: count }), _jsx("button", { className: classes.button, onClick: increment, children: "inc" }), _jsx(About, {})] }));
};
