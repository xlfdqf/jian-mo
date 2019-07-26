import Vue from 'vue'
import Router from 'vue-router'

// const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
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
  {
    path: '/charts',
    component: Layout,
    redirect: '/charts/DiscountFigure',
    name: 'charts',
    meta: { title: 'charts', icon: 'chart' },
    children: [
      {
        path: 'DiscountFigure',
        name: 'DiscountFigure',
        component: () => import('@/views/charts/DiscountFigure'),
        meta: { title: 'DiscountFigure', icon: 'discounting' }
      },
      {
        path: 'columnar',
        name: 'columnar',
        component: () => import('@/views/charts/columnar'),
        meta: { title: 'columnar', icon: 'columnar' }
      },
      {
        path: 'pieChart',
        name: 'pieChart',
        component: () => import('@/views/charts/pieChart'),
        meta: { title: 'pieChart', icon: 'pieChart' }
      },
      {
        path: 'funnelCharts',
        name: 'funnelCharts',
        component: () => import('@/views/charts/funnelCharts'),
        meta: { title: 'funnelCharts', icon: 'funnelCharts' }
      },
    ]
  },
  // 表单
  {
    path: '/form',
    component: Layout,
    redirect: '/form/BaseForm',
    name: 'form',
    meta: {
      title: 'form',
      icon: 'form'
    },
    children: [
      {
        path: 'VueEditor',
        name: 'VueEditor',
        component: () => import('@/views/form/VueEditor'),
        meta: {
          title: 'VueEditor'
        }
      },
      {
        path: 'Upload',
        name: 'Upload',
        component: () => import('@/views/form/Upload'),
        meta: { title: 'Upload' }
      }
    ]
  },
  // 表格
  {
    path: '/table',
    component: Layout,
    redirect: '/table/complex-table',
    name: 'table',
    meta: {
      title: 'Table',
      icon: 'table'
    },
    children: [
      {
        path: 'complex-table',
        name: 'complex-table',
        component: () => import('@/views/table/complex-table'),
        meta: { title: 'complexTable' }
      },
      {
        path: 'TreeTable',
        name: 'TreeTable',
        component: () => import('@/views/table/tree-table/index'),
        meta: { title: 'treeTable' }
      }

    ]
  },
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
//动态添加路由
export const asyncRouterMap = [
  { path: '*', redirect: '/404', hidden: true }
]
