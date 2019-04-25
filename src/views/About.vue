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
       <!--  <h1>Understand your customers. </h1> -->
          <h1 id="h1bold">Boost your Mini Program.</h1>
        <h5>Analyze customer behaviours on your app through reliable live data.</h5>
        <a href="home" id="main-button" class="btn btn-primary" role="button">Implement in 5 mins</a>
      </div>

      <div id="video-container">
        <video src="../assets/introvid.mp4" controls></video>
      </div>

      <div>
        <img id="spin" src="../assets/Component 2.png" alt>
        <h2>Iterate</h2>
      </div>

      <div class="d-flex justify-content-around secondary-box">
        <div class="left-box d-flex">
          <div class="box-text">
            <h3>Measure</h3>
            <p>Get real time, accurate data that matters for your business.</p>
          </div>
          <img class="graphimg" src="../assets/Component.png" alt>
        </div>
        <div class="left-box d-flex">
          <div class="box-text">
            <h3>Optimize</h3>
            <p>Change your app and see the effect on your KPIs: conversions, acquisitions, bounce rate etc...</p>
          </div>
          <img class="phoneimg" src="../assets/image.png" alt>
        </div>
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

#h1bold {
  font-size: 60px;
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
  margin: 10px 0 0 0;
}

.left-box {
  width: 400px;
}

.box-text {
  width: 280px;
}

.graphimg {
  padding: 20px;
  width: 200px;
  height: 140px;
}

.phoneimg {
  width: 110px;
  padding: 20px;
  height: 140px;
}
.secondary-box {
  padding-top: 30px;
  height: 40vh;
  margin: 0 auto;
}
#spin {
  margin: 50px 0 20px 0;
}
#video-container {
  margin: 0 auto;
  border-radius: 3px;
}
.text-middle {
  padding-top: 40px;
}
#main-container {
  margin: 0 auto;
  width: 75vw;
}

#main-button {
  margin: 40px;
  padding: 10px;
  padding-left: 40px;
  padding-right: 40px;
}
</style>
