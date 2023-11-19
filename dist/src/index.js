import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from '@/components/App/App';
import { About } from '@/pages/About';
import { Shop } from '@/pages/Shop';
var root = document.getElementById('root');
if (!root) {
    throw new Error('No root element');
}
var container = createRoot(root);
var router = createBrowserRouter([
    {
        path: '/',
        element: _jsx(App, {}),
        children: [
            {
                path: '/About',
                element: _jsxs(Suspense, { fallback: 'Loading...', children: [" ", _jsx(About, {}), " "] })
            },
            {
                path: '/shop',
                element: _jsxs(Suspense, { fallback: 'Loading...', children: [" ", _jsx(Shop, {})] })
            }
        ]
    },
]);
container.render(_jsx(RouterProvider, { router: router }));
