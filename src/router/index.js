import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '../views/layout/Layout'
//所有权限通用路由表 
//如首页和登录页和一些不用权限的公用页面
export const constantRouterMap = [
  {
    path: '',
    component: Layout,
    redirect: '/dashboard/dashboard'
  },
  { path: '/login', component: () => import('@/views/login'), name: '登录NxAdmin', hidden: true },
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },
  // 首页
  {
    path: '/dashboard',
    component: Layout,

    meta: { title: 'dashboard', icon: 'dashboard' },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/dashboard'),
        meta: { title: 'dashboard', icon: 'dashboard' }
      }
    ]
  },
  // 图表
  // {
  //   path: '/charts',
  //   component: Layout,
  //   redirect: '/charts/DiscountFigure',
  //   name: 'charts',
  //   meta: { title: 'charts', icon: 'chart' },
  //   children: [
  //     {
  //       path: 'DiscountFigure',
  //       name: 'DiscountFigure',
  //       component: () => import('@/views/charts/DiscountFigure'),
  //       meta: { title: 'DiscountFigure', icon: 'discounting' }
  //     },
  //     {
  //       path: 'columnar',
  //       name: 'columnar',
  //       component: () => import('@/views/charts/columnar'),
  //       meta: { title: 'columnar', icon: 'columnar' }
  //     },
  //     {
  //       path: 'pieChart',
  //       name: 'pieChart',
  //       component: () => import('@/views/charts/pieChart'),
  //       meta: { title: 'pieChart', icon: 'pieChart' }
  //     },
  //     {
  //       path: 'funnelCharts',
  //       name: 'funnelCharts',
  //       component: () => import('@/views/charts/funnelCharts'),
  //       meta: { title: 'funnelCharts', icon: 'funnelCharts' }
  //     },
  //   ]
  // },
  // 表单
  // {
  //   path: '/form',
  //   component: Layout,
  //   redirect: '/form/BaseForm',
  //   name: 'form',
  //   meta: {
  //     title: 'form',
  //     icon: 'form'
  //   },
  //   children: [
  //     {
  //       path: 'VueEditor',
  //       name: 'VueEditor',
  //       component: () => import('@/views/form/VueEditor'),
  //       meta: {
  //         title: 'VueEditor'
  //       }
  //     },
  //     {
  //       path: 'Upload',
  //       name: 'Upload',
  //       component: () => import('@/views/form/Upload'),
  //       meta: { title: 'Upload' }
  //     }
  //   ]
  // },
  // 样本管理
  {
    path: '/sampleManagement',
    component: Layout,
    redirect: '/sampleManagement/telManagement',
    name: 'sampleManagement',
    meta: {
      title: 'sampleManagement',
      icon: 'sampleManagement'
    },
    children: [
      {
        path: 'idcardManagement',//身份证管理
        name: 'idcardManagement',
        component: () => import('@/views/sampleManagement/idcardManagement'),
        meta: { title: 'idcardManagement' }
      },
      {
        path: 'idcardManagementDetail', //身份证管理详情
        name: 'idcardManagementDetail',
        component: () => import('@/views/sampleManagement/idcardManagementDetail'),
        meta: { title: 'idcardManagementDetail' },
        hidden: true
      },
      {
        path: 'telManagement',//手机号管理
        name: 'telManagement',
        component: () => import('@/views/sampleManagement/telManagement'),
        meta: { title: 'telManagement' }
      },
      {
        path: 'telManagementDetail', //手机号管理详情
        name: 'telManagementDetail',
        component: () => import('@/views/sampleManagement/telManagementDetail'),
        meta: { title: 'telManagementDetail' },
        hidden: true
      },
    ]
  },
  //数据工程
  {
    path: '/dataEngineering',
    component: Layout,
    redirect: '/dataEngineering/discreteAnalysis',
    name: 'dataEngineering',
    meta: {
      title: 'dataEngineering',
      icon: 'characteristics'
    },
    children: [
      {
        path: 'discreteAnalysis',//特征离散分析
        name: 'discreteAnalysis',
        component: () => import('@/views/dataEngineering/discreteAnalysis'),
        meta: { title: 'discreteAnalysis' }
      }, {
        path: 'IVvalue',//特征iv值
        name: 'IVvalue',
        component: () => import('@/views/dataEngineering/IVvalue'),
        meta: { title: 'IVvalue' }
      }]
  },
  // 特征工程
  {
    path: '/characteristics',
    component: Layout,
    redirect: '/characteristics/characteristicSource',
    name: 'characteristics',
    meta: {
      title: 'characteristics',
      icon: 'characteristics'
    },
    children: [
      {
        path: 'characteristicSource',//特征来源
        name: 'characteristicSource',
        component: () => import('@/views/characteristics/characteristicSource'),
        meta: { title: 'characteristicSource' }
      }, {
        path: 'featureBox',//特征分箱
        name: 'featureBox',
        component: () => import('@/views/characteristics/featureBox'),
        meta: { title: 'featureBox' }
      }, {
        path: 'analysisDistribution',//特征分布分析
        name: 'analysisDistribution',
        component: () => import('@/views/characteristics/analysisDistribution'),
        meta: { title: 'analysisDistribution' }
      }, {
        path: 'correlationModel',//特征关联模型
        name: 'correlationModel',
        component: () => import('@/views/characteristics/correlationModel'),
        meta: { title: 'correlationModel' }
      }
    ]
  },
  // 模型管理
  {
    path: '/modelManagement',
    component: Layout,
    redirect: '/modelManagement/scoreCard',
    name: 'modelManagement',
    meta: {
      title: 'modelManagement',
      icon: 'characteristics'
    },
    children: [
      {
        path: 'scoreCard',//评分卡
        name: 'scoreCard',
        component: () => import('@/views/modelManagement/scoreCard'),
        meta: { title: 'scoreCard' }
      }, {
        path: 'similarityRatio',//相似度比对
        name: 'similarityRatio',
        component: () => import('@/views/modelManagement/similarityRatio'),
        meta: { title: 'similarityRatio' }
      }, {
        path: 'transferMatrix',//转移矩阵
        name: 'transferMatrix',
        component: () => import('@/views/modelManagement/transferMatrix'),
        meta: { title: 'transferMatrix' }
      }
    ]
  },
  //模型结果展示
  {
    path: '/modelResults',
    component: Layout,
    redirect: '/modelResults/scoreCard2',
    name: 'modelResults',
    meta: {
      title: 'modelResults',
      icon: 'characteristics'
    },
    children: [
      {
        path: 'scoreCard2',//评分卡
        name: 'scoreCard2',
        component: () => import('@/views/modelResults/scoreCard2'),
        meta: { title: 'scoreCard2' }
      }, {
        path: 'scoreCardDetails',//评分卡详情
        name: 'scoreCardDetails',
        component: () => import('@/views/modelResults/scoreCardDetails'),
        meta: { title: 'scoreCardDetails' },
        hidden: true
      }, {
        path: 'transferMatrix2',//转移矩阵
        name: 'transferMatrix2',
        component: () => import('@/views/modelResults/transferMatrix2'),
        meta: { title: 'transferMatrix2' }
      }, {
        path: 'similarityRatio2',//相似度比对
        name: 'similarityRatio2',
        component: () => import('@/views/modelResults/similarityRatio2'),
        meta: { title: 'similarityRatio2' }
      }
    ]
  },
  //模型评价
  {
    path: '/modelEvaluation',
    component: Layout,
    redirect: '/modelEvaluation/mxpj',
    name: 'modelEvaluation',
    meta: {
      title: 'modelEvaluation',
      icon: 'characteristics'
    },
    children: [
      {
        path: 'mxpj',//模型评价
        name: 'mxpj',
        component: () => import('@/views/modelEvaluation/mxpj'),
        meta: { title: 'mxpj' }
      }, {
        path: 'modelWarning',//模型预警
        name: 'modelWarning',
        component: () => import('@/views/modelEvaluation/modelWarning'),
        meta: { title: 'modelWarning' },
      }
    ]
  },
  // 表格
  // {
  //   path: '/table',
  //   component: Layout,
  //   redirect: '/table/complex-table',
  //   name: 'table',
  //   meta: {
  //     title: 'Table',
  //     icon: 'table'
  //   },
  //   children: [
  //     {
  //       path: 'TestTable',
  //       name: 'TestTable',
  //       component: () => import('@/views/table/test-table'),
  //       meta: { title: 'testTable' }
  //     },
  //     {
  //       path: 'TestTableDeatil', // 封装表格详情页
  //       name: 'TestTableDeatil',
  //       component: () => import('@/views/table/test-table-detail'),
  //       meta: { title: 'testTableDetail' },
  //       hidden: true
  //     },
  //     {
  //       path: 'complex-table',
  //       name: 'complex-table',
  //       component: () => import('@/views/table/complex-table'),
  //       meta: { title: 'complexTable' }
  //     },
  //     {
  //       path: 'fraud-judge',
  //       name: 'fraud-judge',
  //       component: () => import('@/views/table/fraud-judge'),
  //       meta: { title: 'fraudJudge' }
  //     },
  //     {
  //       path: 'transfer-matrix',
  //       name: 'transfer-matrix',
  //       component: () => import('@/views/table/transfer-matrix'),
  //       meta: { title: 'transferMatrix' }
  //     },
  //     {
  //       path: 'score-card',
  //       name: 'score-card',
  //       component: () => import('@/views/table/score-card'),
  //       meta: { title: 'scoreCard' }
  //     },
  //   ]
  // },
]

//实例化vue的时候只挂载constantRouter
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
//异步挂载的路由
//动态需要根据权限加载的路由表 
export const asyncRouterMap = [
  { path: '*', redirect: '/404', hidden: true }
]
