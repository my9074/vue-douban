import axios from 'axios'

// 创建axios实例
const service = axios.create({
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => config,
  error => {
    // Do something with request error
    Promise.reject(error)
  })

// respone拦截器
service.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
)

export default service
