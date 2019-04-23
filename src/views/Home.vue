<template>
  <div class="home">
    <h1>I am the parent</h1>
    <Child :events="events"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import Child from '@/components/Child'
 
export default {
  name: 'home',
  components: {
    HelloWorld,
    Child
  },
  // Data object scoped to a component
  data() {
    return {
      title: null,
      events: []
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
        })
    }
  },
}
</script>
<style>

</style>

