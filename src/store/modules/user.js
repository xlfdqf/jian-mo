import { login, logout, getInfo } from '@/api/login'
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
    browserHeaderTitle: getStore({
      name: 'browserHeaderTitle'
    }) || 'NxAdmin'
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_BROWSERHEADERTITLE: (state, action) => {
      state.browserHeaderTitle = action.browserHeaderTitle
    }
  },

  actions: {
    // 登录 获取用户信息
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          console.log("登录获取token：", response)
          const data = response
          setToken(data.token)
          commit('SET_TOKEN', data.token)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
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
