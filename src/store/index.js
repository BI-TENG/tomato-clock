import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    // 剩多少時間
    timeleft: parseInt(process.env.VUE_APP_TIMELEFT),
    // 鈴聲檔名
    alarm: 'alarm1.mp3',
    // 現在正在做的事情
    current: '',
    // 是否在休息中
    isBreak: false
  },
  getters: {
    alarm (state) {
      return state.alarm
    }
  },
  mutations: {
    selectAlarm (state, data) {
      state.alarm = data
    },
    addTodo (state, data) {
      state.todos.push({ name: data, edit: false, model: data })
    }
  },
  actions: {
  },
  modules: {
  }
})
