<template>
  <div id="home" class="w-100 h-100">
  <div class="h1 d-flex justify-content-center my-3">Pomodoro</div>
    <b-container class="d-flex flex-column justify-content-center align-items-center h-75" >
      <b-row class="flex-column justify-content-center align-items-center">
        <h1>{{ currentText }}</h1>
        <h2>{{ timetext }}</h2>
        <radial-progress-bar
          :diameter="300"
          :completed-steps="completedSteps"
          :total-steps="totalSteps"
          :start-color="startColor"
          :is-clockwise="isClockwise"
          :stop-color="stopColor">
          <img :src="'./img/01.gif'" height="170px" width="350px" v-if="status=='1'" @click="pause">
          <img :src="'./img/休息.gif'" height="170px" width="200px" v-else-if="status=='0'">
          <img :src="'./img/02.gif'" height="170px" width="200px" v-else-if="status=='2'">
        </radial-progress-bar>
      </b-row>
      <b-row class="justify-content-center align-items-center">
        <b-btn variant="link" v-if="status != 1" @click="start">
          <font-awesome-icon :icon="['fas', 'play']"></font-awesome-icon>
        </b-btn>
        <b-btn variant="link" v-if="status == 1" @click="pause">
          <font-awesome-icon :icon="['fas', 'pause']"></font-awesome-icon>
        </b-btn>
        <b-btn variant="link" v-if="current.length > 0 || todos.length > 0" @click="finish(true)">
          <font-awesome-icon :icon="['fas', 'step-forward']"></font-awesome-icon>
        </b-btn>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 0 = 停止
      // 1 = 播放
      // 2 = 暫停
      status: 0,
      timer: 0,
      // completedSteps: 0,
      // totalSteps: parseInt(process.env.VUE_APP_TIMELEFT),
      startColor: '#67EFFF',
      stopColor: '#C1D6FF',
      isClockwise: false
    }
  },
  computed: {
    currentText () {
      return this.current.length > 0
        ? this.current
        : this.todos.length > 0
          ? '點擊開始'
          : '請新增待辦事項'
    },
    timetext () {
      const m = Math.floor(this.timeleft / 60)
      const s = Math.floor(this.timeleft % 60)
      return `${m} : ${s}`
    },
    alarm () {
      return this.$store.getters.alarm
    },
    timeleft () {
      return this.$store.getters.timeleft
    },
    current () {
      return this.$store.getters.current
    },
    todos () {
      return this.$store.getters.todos
    },
    totalSteps () {
      return this.$store.getters.totaltimes
    },
    completedSteps () {
      return this.totalSteps - this.timeleft
    }
  },
  methods: {
    start () {
      // 暫停後繼續
      if (this.status === 2) {
        this.status = 1
        this.timer = setInterval(() => {
          this.$store.commit('countdown')
          if (this.timeleft <= 0) {
            this.finish(false)
          }
        }, 1000)
      } else {
        // 開始新倒數
        if (this.todos.length > 0) {
          this.$store.commit('start')
          this.status = 1
          this.timer = setInterval(() => {
            this.$store.commit('countdown')
            if (this.timeleft < 0) {
              this.finish(false)
            }
          }, 1000)
        }
      }
    },
    finish (skip) {
      clearInterval(this.timer)
      this.status = 0
      this.$store.commit('finish')

      if (!skip) {
        const audio = new Audio()
        audio.src = './alarms/' + this.alarm
        audio.play()
      }

      if (this.todos.length > 0) {
        this.start()
      } else {
        alert('結束')
      }
    },
    pause () {
      clearInterval(this.timer)
      this.status = 2
    }
  }
}
</script>
