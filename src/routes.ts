import { RouteDefinition } from '@solidjs/router/dist/types';
import { lazy } from 'solid-js';

import Home from './pages/Home';

export const routes: RouteDefinition[] = [
  {
    path: ['/'],
    component: Home,
  },
  {
    path: '/contactus',
    component: lazy(() => import('./pages/ContactUs')),
  },
  {
    path: '/counter',
    component: lazy(() => import('./pages/Counter')),
  },
  {
    path: '/bookshelf',
    component: lazy(() => import('./pages/Bookshelf')),
  },
  {
    path: '/chart',
    component: lazy(() => import('./pages/Chart')),
  },
  {
    path: '/tasks',
    component: lazy(() => import('./pages/Tasks')),
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/About')),
  },
];
