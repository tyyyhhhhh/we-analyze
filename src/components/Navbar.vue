<template>
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
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {}
};
</script>

<style lang="scss">
#nav {
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 50px;
  overflow: hidden;
  margin-bottom: 30px;
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
