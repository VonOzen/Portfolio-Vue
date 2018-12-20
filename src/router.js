import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Portfolio from './views/Portfolio.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/portfolio',
      component: Portfolio,
      children: [
        {
          path: '',
          component: () => import('./views/Realisations/PortfolioStart.vue')
        },
        {
          path: 'moodinwood',
          name: 'moodinwood',
          component: () => import('./views/Realisations/MoodinWood.vue')
        },
        {
          path: 'portfolio2018',
          name: 'portfolio2018',
          component: () => import('./views/Realisations/Portfolio2018.vue')
        },
        {
          path: 'fakebnb',
          name: 'fakebnb',
          component: () => import('./views/Realisations/FakeBNB.vue')
        }
      ]
    },
    {
      path: '*',
      redirect: { name: 'home' }
    }
  ]
})
