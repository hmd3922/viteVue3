import request from '../utils/request/request'

export const register = (data: object) => request.post('/user/register', data)
export const login = (data: object) => request.post('/user/login', data)