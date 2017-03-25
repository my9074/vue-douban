import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home'
import MovieList from 'views/movie/MovieList'
import MovieDetail from 'views/movie/MovieDetail'

import * as api from './../api/movie'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      redirect: { name: '热映' },
      name: '电影',
      children: [
        {
          path: '/movie/hot-list',
          name: '热映',
          component: MovieList,
          meta: {
            type: api.MOVIESTYPE.inTheaters
          }
        },
        {
          path: '/movie/coming-list',
          name: '即将',
          component: MovieList,
          meta: {
            type: api.MOVIESTYPE.comingSoon
          }
        },
        {
          path: '/movie/subject/:id',
          name: '详情',
          hidden: true,
          component: MovieDetail
        }
      ]
    },
    {
      path: '/',
      component: Home,
      redirect: { name: 'other1' },
      name: 'other',
      children: [
        {
          path: '/other/other1',
          name: 'other1'
        },
        {
          path: '/other/other2',
          name: 'other2'
        }
      ]
    },
    {
      path: '*',
      hidden: true,
      redirect: '/movie/hot-list'
    }
  ]
})
