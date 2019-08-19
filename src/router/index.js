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
      icon: 'table'
    },
    children: [
      {
        path: 'idcardManagement',//身份证管理
        name: 'idcardManagement',
        component: () => import('@/views/sampleManagement/idcardManagement'),
        meta: { title: 'idcardManagement' }
      },
      {
        path: 'idcardManagementDetail/:idcard', //身份证管理详情
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
        path: 'telManagementDetail/:mobile', //手机号管理详情
        name: 'telManagementDetail',
        component: () => import('@/views/sampleManagement/telManagementDetail'),
        meta: { title: 'telManagementDetail' },
        hidden: true
      },
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
