import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Gender from './components/Gender.vue'
import DailyStatsUV from './components/DailyStatsUV.vue'
import OverallStats from './components/OverallStats'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {

      path: '/gender',
      name: 'Gender',
      component: Gender
    },
    {
      path: '/overallstats',
      name: 'overall stats',
      component: OverallStats
    },
    {
      path: '/dailystatsuv',
      name: 'daily stats uv',
      component: DailyStatsUV
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    }
  ]
})
