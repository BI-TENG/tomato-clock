import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck, faPen, faTimes, faUndo, faSave, faPlay, faPause, faStepForward, faHome, faMusic, faListUl } from '@fortawesome/free-solid-svg-icons'

import draggable from 'vuedraggable'
import RadialProgressBar from 'vue-radial-progress'

import 'noto-sans-tc/noto_sans_tc_regular/css.css'
import './style/style.styl'
import CircleMenu from 'vue-circle-menu'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: { id: 'UA-1234567-1' }
})

Vue.config.productionTip = false

library.add(faCheck, faPen, faTimes, faUndo, faSave, faPlay, faPause, faStepForward, faHome, faMusic, faListUl)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('draggable', draggable)
Vue.component('RadialProgressBar', RadialProgressBar)
Vue.component('CircleMenu', CircleMenu)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
