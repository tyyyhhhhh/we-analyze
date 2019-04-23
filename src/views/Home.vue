<template>
  <div class="home">
    <h1>I am the parent</h1>
    <Child :events="events"></Child>
    <Gender :users="users" :events="events"></Gender>

    <h1>Here are the Overall Stats Components:</h1>
    <OverallStats :users="users" :totalVisits="totalVisits" :validVisits="validVisits"/>
  </div>
</template>

<script>
// @ is an alias to /src

import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
import Child from "@/components/Child";
import Gender from "@/components/Gender";
import ApexCharts from "apexcharts";
import OverallStats from "@/components/OverallStats";

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

    OverallStats
  },
  // Data object scoped to a component
  data() {
    return {
      title: null,
      events: [],
      users: [],
      totalVisits: 0,
      validVisits: 0
    };
  },
  mounted() {
    this.loadTotalVisitsData();
    this.loadData();
  },
  // Methods are called once
  methods: {
    loadData() {
      axios
        .get("http://haoshihui.wogengapp.cn/api/v1/events")
        .then(response => {
          let data = response.data.events;
          this.events = data;
        }),
        axios
          .get("https://haoshihui.wogengapp.cn/api/v1/users")
          .then(response => {
            let data = response.data.users;
            this.users = data;
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
          let totalVisits = 0;

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

