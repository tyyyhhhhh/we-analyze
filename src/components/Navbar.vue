<template>
  <div id="topbar" class="d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <div>
        <img id="logo" src="../assets/icon.png" alt>
      </div>
      <h2>WeAnalyze</h2>
    </div>
    <div id="features" class="d-flex">
      <h5 class="item">Contact us</h5>
      <h5 class="item">Solution</h5>
      <h5 class="item">Features</h5>
      <div>
        <b-button class="item" variant="outline-primary">Sign up</b-button>
      </div>
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
#topbar {
  height: 80px;
  background-color: white;
}

#features {
  padding-top: 10px;
  .item {
    padding: 3px 12px;
  }
}

#logo {
  height: 30%;
  width: 30%;
  padding: 0;
  object-fit: contain;
}
</style>
