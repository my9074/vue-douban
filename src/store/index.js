/**
 * Created by my9074 on 2017/3/21.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import movie from './movies/module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movie
  }
})
