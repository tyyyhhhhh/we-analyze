<template>
  <div class="home">
    <OverallStats
      v-if="events.length>0"
      :users="users"
      :totalVisits="totalVisits"
      :validVisits="validVisits"
      :totalTimeSpent="totalTimeSpent"
    />

  <div class="dailystats">
    <DailyStatsUV v-if="events.length>0" :users="users" :events="events"/>
    <Gender :users="users" :events="events"></Gender>
  </div>
    <Map  v-if="map.length>0" v-bind:mdata="map" />
    <Funnel v-if="events.length>0" v-bind:events="events" />



     <!--     <DailyStats v-if="events.length>0" :users="users" :events="events"/> -->






  </div>
</template>

<script>
// @ is an alias to /src


import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import Child from '@/components/Child'

import Map from '@/components/Map'
import Funnel from '@/components/Funnel'


import Gender from '@/components/Gender'
import ApexCharts from 'apexcharts'
import OverallStats from '@/components/OverallStats'
import DailyStatsUV from '@/components/DailyStatsUV'


// ES6
// import name from 'path/to/file'
// ES5
// const name = require('path/to/file')


export default {
  name: "home",
  components: {
    HelloWorld,
    Child,

    Map,
    Funnel,
    Gender,

    OverallStats,
    // DailyStats,
    DailyStatsUV
  },
  // Data object scoped to a component
  data() {
    return {
      title: null,
      events: [],
      map: [],
      users: [],
      totalVisits: 0,
      validVisits: 0,
      averageTimeSpent: 0,
      totalTimeSpent: 0
    };
  },

  mounted() {
    // setInterval(() => {
      this.loadTotalVisitsData();
      this.loadData();
    // }, 3000);
  },
  // Methods are called once
  methods: {
    loadData() {

        axios
          .get("https://haoshihui.wogengapp.cn/api/v1/users")
          .then(response => {
            let data = response.data.users;
            this.users = data;
                      this.map = data
            let validVisits = 0;
            data.forEach(user => {
              if (user.nickName) {
                validVisits = validVisits + 1;
              }
            });
            this.validVisits = validVisits;
            console.log("Valid visits", validVisits);
          });
    },

    loadTotalVisitsData() {
      axios
        .get("http://haoshihui.wogengapp.cn/api/v1/events")
        .then(response => {
          let data = response.data;
                    this.events = data.events

          let totalVisits = 0;
          data.events.forEach(event => {
            if (event.description === "customerOpenApp") {
              totalVisits = totalVisits + 1;
            }
          });
          this.totalVisits = totalVisits;

          let totalTimeSpent = [];
          let initSession = "";
          let endSession = "";
          let timeSpent = 0;
          data.events.forEach(event => {
            if (event.description === "customerOpenApp") {
              initSession = event;
              //console.log("initSession", initSession);
            }
            if (
              event.description === "customerLeft" &&
              event.user_open_id === initSession.user_open_id
            ) {
              endSession = event;
              console.log("endSession", endSession);

              timeSpent =
                parseInt(endSession.timestamp) -
                parseInt(initSession.timestamp);
              console.log(`${timeSpent} is the timeSpent`);
              totalTimeSpent.push(timeSpent);
            }
          });
          console.log("totalTimespent", totalTimeSpent);
          let total = 0;
          for (let i = 0; i < totalTimeSpent.length; i++) {
            total += totalTimeSpent[i];
          }
          console.log("total", total);
          this.totalTimeSpent = {
            total: total,
            totalTimeSpentArray: totalTimeSpent
          };

          let averageTimeSpentFloat = total / totalTimeSpent.length;
          let averageTimeSpent = Number(averageTimeSpentFloat).toFixed(0);
          console.log("averageTimesSpent", averageTimeSpent);
          this.averageTimeSpent = averageTimeSpent;
        });
    }
  }
};
</script>



<style>

.dailystats {
  display: flex;
  justify-content: space-between;
  height: 550px;
}

</style>

