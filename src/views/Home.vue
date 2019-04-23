<template>
  <div class="home">
    <h1>I am the parent : Home Page</h1>
    <OverallStats :users="users" :totalVisits="totalVisits"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
import Child from "@/components/Child";
import OverallStats from "@/components/OverallStats.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Child,
    OverallStats
  },
  // Data object scoped to a component
  data() {
    return {
      title: null,
      events: [],
      users: [],
      totalVisits: 0,
      bounceRate: 0
    };
  },
  mounted() {
    this.loadEventData();
    this.loadUserData();
    this.loadTotalVisitsData();
  },
  // Methods are called once
  methods: {
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

