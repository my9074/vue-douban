import axios from '@/utils/axios'

export function detail(id: string): Promise<any> {
    return axios(`api/v2/movie/subject/${id}`)
}

export function theaters(): Promise<any> {
    return axios(`api/v2/movie/in_theaters`)
}