// import axios from 'axios'
import axios from 'axios'
axios.defaults.timeout = 50000
const _baseUrl =
    process.env.NODE_ENV === 'development'
    ? ''
        : process.env.VUE_APP_BASE_API

axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

const fetchGet = (url:string, param?:any) => {
    return new Promise((resolve:(value:object)=>void,reject:(value:object)=>void) => {
    axios.get(_baseUrl + url, {
        params: param
    })
        .then(
        (response) => {
            resolve(response)
        },
        )
        .catch((error) => {
        reject(error)
        })
    })
}
const fetchPost = (url:string, param?:any) => {
    return new Promise((resolve:(value:object)=>void,reject:(value:object)=>void) => {
    axios.post(_baseUrl + url, {
        params: param
    })
        .then(
        (response) => {
            resolve(response)
        },
        (err) => {
            reject(err)
        }
        )
        .catch((error) => {
        reject(error)
        })
    })
}
export {
    fetchGet,
    fetchPost
}
