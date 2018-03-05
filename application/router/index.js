import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const IndexPage = () => import(/* webpackChunkName: "IndexPage" */ '../vue/pages/Index/index.vue');
const NotFoundPage = () => import(/* webpackChunkName: "NotFoundPage" */ '../vue/pages/NotFound/index.vue');


const routes = [
  {path: '/', component: IndexPage},

  {path: '*', component: NotFoundPage}
];


export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active active',
  routes
});
