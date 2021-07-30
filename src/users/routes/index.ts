import { RouteRecordRaw } from 'vue-router';
import RouteNames from '@/shared/enums/route-names';
import Home from '../views/home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteNames.Home,
    component: Home,
  },
];

export default routes;
