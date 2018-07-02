import axios from '@/utils/axios'

export interface MPaging {
    start: number
    count: number
    [key: string]: any
}

export function detail(id: string): Promise<any> {
    return axios({
        url: `api/v2/movie/subject/${id}`,
        method: 'GET'
    })
}

export function celebrityDetail(id: string): Promise<any> {
    return axios({
        url: `api/v2/movie/celebrity/${id}`,
        method: 'GET'
    })
}

export function subjectPhotos(id: string, params: MPaging): Promise<any> {
    return axios({
        url: `api/v2/movie/subject/${id}/photos`,
        method: 'GET',
        params
    })
}

export function reviews(id: string, params: MPaging): Promise<any> {
    return axios({
        url: `api/v2/movie/subject/${id}/reviews`,
        method: 'GET',
        params
    })
}

export function works(id: string, params: MPaging): Promise<any> {
    return axios({
        url: `api/v2/movie/celebrity/${id}/works`,
        method: 'GET',
        params
    })
}

export function celebrityPhotos(id: string, params: MPaging): Promise<any> {
    return axios({
        url: `api/v2/movie/celebrity/${id}/photos`,
        method: 'GET',
        params
    })
}

export function search(params: MPaging): Promise<any> {
    return axios({
        url: `api/v2/movie/search`,
        method: 'GET',
        params
    })
}

export function top250(params: MPaging): Promise<any> {
    return axios({
        url: `api/v2/movie/top250`,
        method: 'GET',
        params
    })
}

export function usBox(): Promise<any> {
    return axios({
        url: `api/v2/movie/us_box`,
        method: 'GET'
    })
}

export function weekly(): Promise<any> {
    return axios({
        url: `api/v2/movie/weekly`,
        method: 'GET'
    })
}

export function newMovies(): Promise<any> {
    return axios({
        url: `api/v2/movie/new_movies`,
        method: 'GET'
    })
}

export function theaters(params: MPaging): Promise<any> {
    return axios({
        url: `api/v2/movie/in_theaters`,
        method: 'GET',
        params
    })
}

export function comingSoon(params: MPaging): Promise<any> {
    return axios({
        url: `api/v2/movie/coming_soon`,
        method: 'GET',
        params
    })
}