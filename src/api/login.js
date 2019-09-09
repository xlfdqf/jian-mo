import request from '@/utils/request'
import { get, post, deletes, put } from '@/utils/request'

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
  return get(`${api}/aibin/search`, params);
}
//特征分箱图表
export function getFeatureBoxChart(params) {
  return get(`${api}/aibin/search`, params);
}
// 特征分箱搜索
export function searchFeatureBox(params) {
  return post(`${api}/aibin/searchByFeatureBin`, params);
}
// 特征IV值
export function getIVvalue(params) {
  return get(`${api}/aibin/getSumIvNoPage`, params);
}
//特征iv值搜索
export function searchIVvalue(params) {
  return post(`${api}/aibin/searchByFeatureIv`, params);
}
// 特征分布分析
export function getAnalysisDistribution(params) {
  return get(`${api}/aibin/analysis`, params);
}
// 特征分布分析搜索
export function searchAnalysisDistribution(params) {
  return post(`${api}/aibin/searchAnalysisByFeature`, params);
}
// 特征关联模型
export function getCorrelationModel(params) {
  return get(`${api}/featureconfig/modellist`, params);
}
//模型管理评分卡
export function getScoreCard(params) {
  // return get(`${api}/aitransfer/list`, params);
}
//模型管理相似度对比查询列表
export function getSimilarityRatio(params) {
  return get(`${api}/featureconfig/list`, params);
}
//模型管理相似度对比搜索、非准入规则查询
export function searchSimilarityRatio(params) {
  return get(`${api}/featureconfig/page`, params);
}
//模型管理相似度对比删除、添加（修改状态）
export function SimilarityRatioDelete(params) {
  return put(`${api}/featureconfig`, params);
}
//模型管理转移矩阵
export function getTransferMatrix(params) {
  return get(`${api}/aitransfer/list`, params);
}

//模型结果展示相似度比对结果
export function getSimilarityRatio2(params) {
  return post(`${api}/ScoreCard/Literacy`, params);
}
//模型结果展示转移矩阵结果
export function getTransferMatrix2(params) {
  // return get(`${api}/aitransfer/list`, params);
}
//模型结果展示评分卡结果
export function getScoreCard2(params) {
  // return get(`${api}/aitransfer/list`, params);
}
//模型结果展示评分卡详情
export function getScoreCard2Details(params) {
  // return get(`${api}/aitransfer/list`, params);
}