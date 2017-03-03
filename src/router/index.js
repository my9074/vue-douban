import Vue from 'vue'
import Router from 'vue-router'
import Form from 'views/Form'
import Home from 'views/Home'
import Table from 'views/Table'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
      children: [
        {
          path: 'form',
          name: 'form',
          component: Form
        },
        {
          path: 'table',
          name: 'table',
          component: Table
        }
      ]
    },
    {
      path: '*',
      hidden: true,
      redirect: '/form'
    }
  ]
})
