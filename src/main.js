import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueApexCharts from 'vue-apexcharts'

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faChartBar, faCoffee, faHistory, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faChartBar } from '@fortawesome/free-regular-svg-icons'

library.add(faUserSecret, faChartBar, faCoffee, faHistory)


Vue.component('fa-icon', FontAwesomeIcon)

Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
