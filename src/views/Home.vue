<template>
  <div class="home">
    <h1>I am the parent</h1>
    <Child :events="events"/>
    <Map v-bind:mdata="map" />
    <Funnel v-bind:events="events" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import Child from '@/components/Child'
import Map from '@/components/Map'
import Funnel from '@/components/Funnel'
 
export default {
  name: 'home',
  components: {
    HelloWorld,
    Child,
    Map,
    Funnel
  },
  // Data object scoped to a component
  data() {
    return {
      title: null,
      events: [],
      map: [],
    }
  },
  mounted() {
    this.loadData()
  },
  // Methods are called once
  methods: {
    loadData() {
            axios.get('http://haoshihui.wogengapp.cn/api/v1/users')
        .then((response) => {
          let data = response.data.users
          this.map = data

        }),
      axios.get('http://localhost:3000/api/v1/events')
        .then((response) => {
          let data = response.data.events
          this.events = data

        })

    }
  },
}
</script>
<style>

</style>

