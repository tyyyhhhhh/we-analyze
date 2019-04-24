<template>
  <div id="app">


    <div id="nav">
      <img class="avatar" src="https://img.freepik.com/free-vector/man-eating-pasta_1087-14.jpg?size=338&ext=jpg" alt="">
     <!--  <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;

}
#nav {
  background-color:white;
  padding: 10px;
  height: 50px;
  overflow: hidden;
  border-bottom: 1px solid #EAEAEA;
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
  background-color: #F9FAFB;
}

.avatar {
  border-radius: 50%;
  width: 50px;
  border: 1px solid grey;
  float: right;
}

.container {
  margin: 50px;
}

</style>
