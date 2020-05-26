import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    // 剩多少時間
    timeleft: parseInt(process.env.VUE_APP_TIMELEFT),
    // 鈴聲檔名
    alerm: '',
    // 現在正在做的事情
    current: '',
    // 是否在休息中
    isBreak: false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
