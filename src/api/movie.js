/**
 * Created by my9074 on 2017/3/21.
 */
import fetch from './base'

export const MOVIESTYPE = {
  inTheaters: 'in_theaters',
  comingSoon: 'coming_soon',
  top250: 'top250'
}

export function fetchMovies (type, {city = '北京', start = 0} = {}) {
  return fetch(`movie/${type}`, {city, start})
}

export function fetchMovieSubject (id) {
  return fetch(`movie/subject/${id}`)
}

export function fetchTopMovies ({start = 0} = {}) {
  return fetch(`movie/top250`, {start})
}
