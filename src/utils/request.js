// axios封装
import axios from 'axios'
import { Message } from 'element-ui'
import store from '../store'
import { getToken, setToken } from '@/utils/auth'

// 创建axios实例
// const service = axios.create({
//   baseURL: process.env.BASE_API, // api的base_url
//   timeout: 15000 // 请求超时时间
// })


// 环境的切换
// if (process.env.NODE_ENV == 'development') {
//   axios.defaults.baseURL = '/api';
// } else if (process.env.NODE_ENV == 'debug') {
//   axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {
//   axios.defaults.baseURL = 'http://api.123dailu.com/';
// }

// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(
  config => {
    const token = store.getters.token;
    // token && (config.headers.Token = token);
    return config;
  },
  error => {
    return Promise.error(error);
  })

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是200的情况    
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录                
        // 未登录则跳转登录页面，并携带当前页面的路径                
        // 在登录成功后返回当前页面，这一步需要在登录页操作。                
        case 401:
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }
          });
          break;
        // 403 token过期                
        // 登录过期对用户进行提示                
        // 清除本地token和清空vuex中token对象                
        // 跳转登录页面                
        case 403:
          Message({
            message: '登录过期，请重新登录！',
            duration: 1000,
            forbidClick: true
          });
          // 清除token                    
          setToken();
          store.commit('SET_TOKEN', '');
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            });
          }, 1000);
          break;
        // 404请求不存在                
        case 404:
          Message({
            showClose: true,
            message: '网络请求不存在！',
            type: "error"
          });
          break;
        // 500服务器错误            
        case 500:
          Message({
            showClose: true,
            message: '服务器错误！',
            type: "error"
          });
          break;
        // 504网关超时                
        case 504:
          Message({
            showClose: true,
            message: '网关超时！',
            type: "error"
          });
          break;
        // 其他错误，直接抛出错误提示                
        default:
          Message({
            showClose: true,
            message: '未知错误！',
            type: "error"
          });
      }
      return Promise.reject(error.response);
    }
  }
);
/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}

export default axios;