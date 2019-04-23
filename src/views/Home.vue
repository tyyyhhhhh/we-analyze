<template>
  <div class="home">
    <h1>I am the parent</h1>
    <Child :events="events"></Child>
    <Gender :users="users" :events="events"></Gender>
  </div>


</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import Child from '@/components/Child'
import Gender from '@/components/Gender'
import ApexCharts from 'apexcharts'

// ES6
// import name from 'path/to/file'


// ES5
// const name = require('path/to/file')


export default {
  name: 'home',
  components: {
    HelloWorld,
    Child,
    Gender
  },
  // Data object scoped to a component
  data() {
    return {
      title: null,
      events: [],
      users: []
    }
  },
  mounted() {
    this.loadData()
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
    }
  },
}
</script>
<style>



</style>

