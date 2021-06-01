import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Demo from '../views/Demo.vue';
import Cart from '../views/Cart.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/get-started',
    name: 'Get started',
    component: () => import('../views/Start.vue')
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('../views/Catalog.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
