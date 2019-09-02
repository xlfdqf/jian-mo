import request from '@/utils/request'
import { get, post } from '@/utils/request'

const api = process.env.NODE_ENV == "development" ? 'api' : '';

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

//登录
export function getLogin(params) {
  return post(`${api}/auth/login`, params);
}
//身份证、手机号管理 
export function getNewsList(params) {
  return post(`${api}/dsai/list`, params);
}
//身份证、手机号管理详情
export function getNewsDetail(params) {
  return post(`${api}/dsai/detail`, params);
}
// 特征来源
export function getFeatureSource(params) {
  return get(`${api}/featureconfig/page`, params);
}
// 特征离散分析表格
export function getDiscreteAnalysis(params) {
  return get(`${api}/aidiscrete/page`, params);
}
// 特征分箱报表
export function getFeatureBox(params) {
  return post(`${api}/aibin/getAiList`, params);
}
//特征分箱图表
export function getFeatureBoxChart(params) {
  return get(`${api}/aibin/page`, params);
}
// 特征IV值
export function getIVvalue(params) {
  // return post(`${api}/dsai/detail`, params);
}
// 特征分布分析
export function getAnalysisDistribution(params) {
  // return post(`${api}/dsai/detail`, params);
}
// 特征关联模型
export function getCorrelationModel(params) {
  // return post(`${api}/dsai/detail`, params);
}