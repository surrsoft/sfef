import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/cards/:pageNum',
      component: () => import('./views/Cards')
    },
    {
      path: '/cardadd',
      component: () => import('./views/CardAdd')
    },
    {
      path: '/cardedit/:id',
      component: () => import('./views/CardEdit')
    },
    {
      path: '/cardRandom',
      component: () => import('./views/CardRandom')
    }
  ]
})
