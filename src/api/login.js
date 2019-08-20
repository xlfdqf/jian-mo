import request from '@/utils/request'
import { get, post } from '@/utils/request'

// const baseUrl =  process.env.NODE_ENV=="development" ?  '/api':  'https://api.dsdatas.com/q';
// let baseUrl = 'http://10.10.2.8:8080';

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
// //测试接口 get
// export function getNewsDetail(params) {
//   return get(`/api/web/showNewBeforeModify`, { newNo: params });
// }

//身份证（手机号）管理 
export function getNewsList(params) {
  return post(`api/dsai/list`, params);
}

//身份证（手机号）管理详情
export function getNewsDetail(params) {
  return post(`api/dsai/detail`, params);
}
