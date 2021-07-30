import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    component: () => import('../shared/views/page-not-found.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
