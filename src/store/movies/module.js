/**
 * Created by my9074 on 2017/3/21.
 */
import * as type from './type'
import * as api from '../../api/movie'

const mutations = {
  [type.FETCH_MOVIES] (state, payload) {
    state.movies[payload.type].subjects = [...state.movies[payload.type].subjects, ...payload.subjects]
    state.movies[payload.type].total = state.movies[payload.type].subjects.length
  },

  [type.FETCH_MOVIES_TOP250] (state, payload) {
    state.movies[payload.type].subjects = [...state.movies[payload.type].subjects, ...payload.subjects]
    state.movies[payload.type].total = state.movies[payload.type].subjects.length
  },

  [type.CLEAR_MOVIES] (state, payload) {
    state.movies[payload.type].subjects = []
    state.movies[payload.type].total = 0
  }
}

const actions = {
  [type.FETCH_MOVIES] (context, payload) {
    return api.fetchMovies(payload.type, {start: payload.start || 0})
      .then(data => {
        context.commit(type.FETCH_MOVIES, {
          type: payload.type,
          subjects: data.subjects,
          total: data.total
        })

        return data
      })
  },
  [type.FETCH_MOVIES_TOP250] (context, payload) {
    return api.fetchTopMovies({start: payload.start || 0})
      .then(data => {
        context.commit(type.FETCH_MOVIES_TOP250, {
          type: payload.type,
          subjects: data.subjects,
          total: data.total
        })

        return data
      })
  },
  [type.CLEAR_MOVIES] (context, payload) {
    context.commit(type.CLEAR_MOVIES, payload)
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
      },
      [api.MOVIESTYPE.top250]: {
        total: 0,
        subjects: [],
        describe: ''
      }
    }
  },
  mutations,
  actions
}
