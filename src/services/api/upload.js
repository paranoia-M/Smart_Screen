import request from '@/services/request'

export function getFiles() {
  return request({
    url: '/getList/file',
    method: 'get'
  })
}
export function getCounter() {
  return request({
    url: '/counter/getCounter',
    method: 'get'
  })
}

export function uploadFile(data) {
  return request({
    url: '/upload/file',
    data,
    method: 'post'
  })
}