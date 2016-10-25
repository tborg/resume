import Vue from 'vue';
import VueRouter from 'vue-router';
import Resume from './components/Resume';

Vue.use(VueRouter);

const routes = [
  { path: '/resume', component: Resume },
];

export default new VueRouter({
  routes,
  mode: 'history',
});

