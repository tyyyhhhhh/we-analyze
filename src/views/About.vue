<template>
  <div>
    <div class="wrapper">
      <el-row class="bg-white">
        <el-col :span="12">
          <el-row class="action-items">
            <el-col :span="4" class="x-right">
              <img id="logo" src="../assets/icon.png">
            </el-col>
            <el-col :span="4" class="x-left">
              <div id="logo-title">WeAnalyze</div>
            </el-col>
            <el-col :span="4"></el-col>
            <el-col :span="4"></el-col>
            <el-col :span="4"></el-col>
            <el-col :span="4"></el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row class="action-items">
            <el-col :span="6">
              <div>Contact us</div>
            </el-col>
            <el-col :span="6">
              <div>Solution</div>
            </el-col>
            <el-col :span="6">
              <div>Features</div>
            </el-col>
            <el-col :span="6">
              <b-button variant="outline-primary">Sign up</b-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
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


<style lang="scss">
.wrapper {
  background: white;
  height: 80px;
}

.action-items {
  height: 100%;
  display: flex;
  align-items: center;
}
.x-left {
  text-align: left;
}
.x-right {
  text-align: right;
}
.x-center {
  text-align: center;
}
.y-center {
  vertical-align: center;
}
.bg-white {
  background-color: white;
  height: 100%;
  display: flex;
  align-items: center;
}

#logo-title {
  font-weight: bold;
  font-size: 165%;
}

#logo {
  height: 60%;
  width: 60%;
  padding: 20px 5px;
  object-fit: contain;
}

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

#main-button {
  margin: 40px;
  padding: 10px;
  padding-left: 40px;
  padding-right: 40px;
}
</style>