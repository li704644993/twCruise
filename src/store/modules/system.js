// 系统模块
import {
  // 用户
  getUserList
} from '@/api/system'

const userManage = {
  state: {
    userList: [],
    userTotal: 0
  },

  mutations: {
    SET_USER_LIST: (state, userList) => {
      state.userList = userList
    },
    SET_USER_TOTAL: (state, userTotal) => {
      state.userTotal = userTotal
    }
  },

  actions: {
    GetUserList({ commit }, param) {
      return new Promise((resolve, reject) => {
        getUserList(param).then(response => {
          const data = response.data
          commit('SET_USER_LIST', data.result)
          commit('SET_USER_TOTAL', data.total)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default userManage