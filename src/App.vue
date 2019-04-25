<template>
  <div id="app">
    <div class="scontainer">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  background-color: #f9fafb;
}

body {
  margin: 0px;
  background-color: #f9fafb;
}

.scontainer {
  // margin: 50px 80px;
  width: 100%;
}
</style>
