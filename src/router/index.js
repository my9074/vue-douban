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
      children: [
        {
          path: 'form',
          component: Form
        },
        {
          path: 'table',
          component: Table
        }
      ]
    },
    {
      path: '*',
      redirect: '/form'
    }
  ]
})
