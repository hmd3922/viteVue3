import { fetchGet } from '@/hooks/useUrlLoader'

export function getImg(params?:object) {
    return fetchGet('/rule') 
}