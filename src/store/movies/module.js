/**
 * Created by my9074 on 2017/3/21.
 */
import * as type from './type'
import * as api from './api'

const mutations = {
  [type.FETCH_MOVIES] (state, payload) {
    state.movies[payload.type].subjects = payload.subjects
    state.movies[payload.type].total = payload.subjects.total
  }
}

const actions = {
  [type.FETCH_MOVIES] (context, payload) {
    api.fetchMovies(payload.type, {start: payload.start || 0})
      .then(data => context.commit(type.FETCH_MOVIES, {
        type: payload.type,
        subjects: data.subjects,
        total: data.total
      }))
  }
}

export default {
  state: {
    movies: {
      [api.MOVIESTYPE.inTheaters]: {
        total: 0,
        subjects: [],
        describe: ''
      },
      [api.MOVIESTYPE.comingSoon]: {
        total: 0,
        subjects: [],
        describe: ''
      }
    }
  },
  mutations,
  actions
}