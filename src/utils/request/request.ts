import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '../../router/index'

const instance = axios.create({
  baseURL: '/api',
  timeout: 10000
})

// 请求拦截器
instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 响应拦截器
instance.interceptors.response.use(
  response => {
    const data = response.data
    if (data.code !== 200) {
      ElMessage.error(data.message || '请求失败')
      return Promise.reject(new Error(data.message || '未知错误'))
    }
    return data.data
  },
  error => {
    if (error.response?.status === 401) {
      ElMessage.error('登录已过期，请重新登录')
      localStorage.removeItem('token')
      router.push('/login').catch(() => {})
    } else {
      ElMessage.error(error.message || '网络异常')
    }
    return Promise.reject(error)
  }
)

// 高级封装层
const request = {
  get: <T>(url: string, params?: object): Promise<T> => {
    return instance.get(url, { params }).then(response => response as T).catch(err => {
      ElMessage.error(err.message || 'GET 请求失败')
      return Promise.reject<T>(err)
    })
  },

  post: <T>(url: string, data?: object): Promise<T> => {
    return instance.post(url, data).then(response => response as T).catch(err => {
      ElMessage.error(err.message || 'POST 请求失败')
      return Promise.reject<T>(err)
    })
  }
}

export default request