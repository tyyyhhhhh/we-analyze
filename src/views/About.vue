<template>
  <div>
    <div id="topbar" class="d-flex justify-content-between">
      <div class="d-flex">
        <img id="logo" src="../assets/icon.png" alt>
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
    <div id="main-container">
      <div class="text-middle">
        <h1>Understand your customers. Boost your miniprogram.</h1>
        <h5>Analyze customer behaviours on your app through reliable live data.</h5>
        <b-button id="main-button" variant="primary">Implement in 5 mins</b-button>
      </div>
      <div id="video-container"></div>
    </div>

    <div>
      <img id="spin" src="../assets/Component 2.png" alt>
      <h2>Iterate</h2>
    </div>
    <div class="d-flex justify-content-around secondary-box">
      <div id="left-box" class="d-flex">
        <div>
          <h3>Measure</h3>
          <p>Get real time, accurate data that matters for your business.</p>
        </div>
        <img id="graph" src="../assets/Component.png" alt>
      </div>
      <div id="left-box" class="d-flex">
        <div>
          <h3>Optimize</h3>
          <p>Change your app and see the effect on your KPIs: conversions, acquisitions, bounce rate etc...</p>
        </div>
        <img id="graph" src="../assets/image.png" alt>
      </div>
    </div>
    <div id="footer">
      <h2 id="footer-text">What will your data teach you about your business?</h2>
      <button type="button" class="btn btn-outline-light">Find out now</button>
    </div>
  </div>
</template>


<style>
#footer-text {
  color: white;
  padding: 20px;
}
#footer {
  background-color: #4c8ced;
  height: 150px;
  margin: 0;
}
#left-box {
  width: 30vw;
  height: 20vh;
}
#graph {
  object-fit: contain;
  padding: 20px;
}
.secondary-box {
  padding-top: 30px;
  height: 40vh;
  margin: 0 auto;
}
#spin {
  margin: 10px;
}
#video-container {
  width: 70vw;
  height: 30vh;
  background-color: #c4c4c4;
  margin: 0 auto;
  border-radius: 3px;
}
.text-middle {
  padding-top: 40px;
}
#main-container {
  background-color: #fbfafa;
  height: 70vh;
  margin: 0;
}
#topbar {
  height: 100px;
}
#main-button {
  margin: 40px;
  padding: 10px;
  padding-left: 40px;
  padding-right: 40px;
}
#features {
  padding-top: 10px;
}
#features .item {
  padding: 3px 12px;
}

#logo-container {
  padding: 0px;
}
#title {
  margin: 0px;
}
#logo {
  height: 40%;
  width: 40%;
  padding: 0;
  object-fit: contain;
}
.margin-right {
  margin-right: 20px;
}

.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 20px 0;
  background-color: #f9fafc;
}
</style>