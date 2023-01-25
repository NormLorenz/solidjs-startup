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
    path: '/about',
    component: lazy(() => import('./pages/About')),
  },
  // {
  //   path: '/charts',
  //   component: lazy(() => import('./pages/Charts/Charts')),
  // },
  // {
  //   path: '/shopping',
  //   component: lazy(() => import('./pages/Shopping/Shopping')),
  // },
  // {
  //   path: '/about',
  //   component: lazy(() => import('./pages/About')),
  //   data: AboutData,
  // },
  // {
  //   path: '/bookshelf',
  //   component: lazy(() => import('./pages/BookShelf/BookShelf')),
  // },
  // {
  //   path: '/tasks',
  //   component: lazy(() => import('./pages/Tasks/Tasks')),
  // },
  // {
  //   path: '/contactus',
  //   component: lazy(() => import('./pages/ContactUs/ContactUs')),
  // },
  // // {
  // //   path: ['login', 'sign-up'],
  // //   component: lazy(() => import('./pages/Auth')),
  // // },
  // {
  //   path: '**',
  //   component: lazy(() => import('./pages/Error')),
  // },
];
