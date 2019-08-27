import { login, logout, getLogin } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import {
  setStore,
  getStore,
  removeStore
} from '@/utils/store'
const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    browserHeaderTitle: '大圣数据建模系统'
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERINFO: (state, { token, name, avatar }) => {
      state.token = token;
      state.name = name;
      state.avatar = avatar;
    },
    // 设置浏览器标题
    SET_BROWSERHEADERTITLE: (state, action) => {
      state.browserHeaderTitle = action.browserHeaderTitle
    }
  },

  actions: {
    // 登录 获取用户信息
    Login({ commit }, userInfo) {
      let param = {
        username: userInfo.username,
        password: userInfo.password,
        randomStr: "051307229000357",
        code: "aaa8" //验证码
      }
      return new Promise((resolve, reject) => {
        getLogin(param).then(response => {
          const data = response
          setToken(data.data.access_token)
          commit('SET_TOKEN', data.data.access_token)
          commit('SET_USERINFO', { token: data.data.access_token, name: data.data.username })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },
  }
}

export default user
