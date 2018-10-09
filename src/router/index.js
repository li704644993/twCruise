import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/common/main'
import Dashboard from '@/views/dashboard/Dashboard'
import Agent from '@/views/agent/agent'
import MyCruise from '@/views/myCruise/myCruise'
import Help from '@/views/help/help'
import Login from '@/views/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'app',
      component: Main,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: '/agent',
          name: 'agent',
          component: Agent
        },
        {
          path: '/help',
          name: 'help',
          component: Help
        },
        {
          path: '/myCruise',
          name: 'myCruise',
          component: MyCruise
        }
      ]
    },

    // {path: '/', redirect: '/app'},

    { path: '*', redirect: '/login' }
  ]
})
