import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck, faPen, faTimes } from '@fortawesome/free-solid-svg-icons'

import draggable from 'vuedraggable'

Vue.config.productionTip = false

library.add(faCheck, faPen, faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('draggable', draggable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
