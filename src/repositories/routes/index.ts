import { RouteRecordRaw } from 'vue-router';
import RouteNames from '@/shared/enums/route-names';
import Repositories from '../views/repositories.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/repositories/:id',
    name: RouteNames.Repositories,
    props: true,
    component: Repositories,
  },
];

export default routes;
