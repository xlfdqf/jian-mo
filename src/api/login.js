import request from '@/utils/request'
import { get, post } from '@/utils/request'

// const baseUrl =  process.env.NODE_ENV=="development" ?  '/api':  'https://api.dsdatas.com/q';
let baseUrl = 'http://qo.bzhuan888.com';

export function login(username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

// //测试接口 post
export function getNewsList(params) {
  return post(`${baseUrl}/web/listNews`, params);
}
// //测试接口 get
// export function getNewsDetail(params) {
//   return get(`/api/web/showNewBeforeModify`, { newNo: params });
// }