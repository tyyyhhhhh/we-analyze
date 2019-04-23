<template>
  <div class="home">
    <h1>I am the parent</h1>
    <Child :events="events"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
import Child from "@/components/Child";

export default {
  name: "home",
  components: {
    HelloWorld,
    Child
  },
  // Data object scoped to a component
  data() {
    return {
      title: null,
      events: [],
      users: []
    };
  },
  mounted() {
    this.loadEventData();
    this.loadUserData();
  },
  // Methods are called once
  methods: {
    loadEventData() {
      axios
        .get("http://haoshihui.wogengapp.cn/api/v1/events")
        .then(response => {
          let data = response.data.events;
          this.events = data;
        });
    },

    loadUserData() {
      axios.get("http://haoshihui.wogengapp.cn/api/v1/users").then(response => {
        let data = response.data.users;
        this.users = data;
      });
    }
  }
};
</script>


<style>
</style>

