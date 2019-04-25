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
#nav {
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 50px;
  overflow: hidden;
  border-bottom: 1px solid #eaeaea;

  height: 70px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  margin: 0px;
  background-color: #f9fafb;
}

.avatar {
  border-radius: 50%;
  width: 50px;
  border: 1px solid grey;
}

.scontainer {
  // margin: 50px 80px;
  width: 100%;
}

.company {
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  font-weight: bold;
  position: relative;
  margin: 0 0 0 15px;
}

.compname {
  position: absolute;
  top: 10px;
  left: 55px;
}

.logo {
  width: 50px;
}
</style>
