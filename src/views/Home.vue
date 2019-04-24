<template>
  <div class="home">

    <h1>I am the parent</h1>
    <Child :events="events"></Child>
    <Gender :users="users" :events="events"></Gender>

    <h1>I am the parent : Home Page</h1>
    <OverallStats :users="users" :totalVisits="totalVisits"/>
 <!--     <DailyStats v-if="events.length>0" :users="users" :events="events"/> -->
      <DailyStatsUV v-if="events.length>0" :users="users" :events="events"/>


  </div>


</template>

<script>
// @ is an alias to /src

import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import Child from '@/components/Child'
import Gender from '@/components/Gender'
import ApexCharts from 'apexcharts'
import OverallStats from '@/components/OverallStats'
// import DailyStats from '@/components/DailyStats'
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
      users: [],
      totalVisits: 0
    }
  },

  mounted() {
    this.loadData();
    this.loadTotalVisitsData();
  },
  // Methods are called once
  methods: {

    loadData() {
      axios.get('http://haoshihui.wogengapp.cn/api/v1/events')
        .then((response) => {
          let data = response.data.events
          this.events = data
        }),

      axios.get('https://haoshihui.wogengapp.cn/api/v1/users')
        .then((response) => {
          let data = response.data.users
          // console.log(data)
          this.users = data
        })

    },

    loadTotalVisitsData() {
      axios
        .get("http://haoshihui.wogengapp.cn/api/v1/events")
        .then(response => {
          console.log(response);
          let data = response.data;
          let totalVisits = 0;
          console.log(data);
          data.events.forEach(event => {
            if (event.description === "newCustomer onLoad") {
              totalVisits = totalVisits + 1;
            }
          });
          console.log("Total visits", totalVisits);
          this.totalVisits = totalVisits;
        });
    }
  }
};
</script>



<style>

</style>

