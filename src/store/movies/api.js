/**
 * Created by my9074 on 2017/3/21.
 */
import fetch from './../base'

export const MOVIESTYPE = {
  inTheaters: 'in_theaters',
  comingSoon: 'coming_soon'
}

export function fetchMovies (type, {city = '北京', start = 0} = {}) {
  return fetch(`movie/${type}`, {city, start})
}
