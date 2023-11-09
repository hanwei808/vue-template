import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({})

// 请求拦截器
request.interceptors.request.use(
  config => {
    // do something
    return config
  },
  error => {
    // do something
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    // do something
    return response
  },
  error => {
    // do something
    return Promise.reject(error)
  }
)

export default <T = unknown>(config: AxiosRequestConfig) => {
    return request(config).then(res => {
        return res.data as T
    })
}
