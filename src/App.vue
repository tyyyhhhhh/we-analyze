<template>
  <div id="app">
    <div id="nav">
      <div class="company">
        <img
          class="logo"
          src="https://img.freepik.com/free-vector/man-eating-pasta_1087-14.jpg?size=338&ext=jpg"
          alt
        >
        <div class="compname">WeAnalyze</div>
      </div>
      <div>
        <img
          class="avatar"
          src="https://img.freepik.com/free-vector/man-eating-pasta_1087-14.jpg?size=338&ext=jpg"
          alt
        >
      </div>
      <!--  <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
    </div>
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
}
#nav {
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 50px;
  overflow: hidden;
  border-bottom: 1px solid #eaeaea;
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
