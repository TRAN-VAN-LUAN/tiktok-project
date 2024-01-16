import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Live from '~/pages/Live';
import DefaultLayout from '~/components/layout/DefaultLayout';

export const publicRoutes = [
    { path: '/', coponent: Home },
    { path: '/following', coponent: Following, layout: null },
    { path: '/live', coponent: Live },
];

export const privateRoutes = [];
