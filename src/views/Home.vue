<template>
  <div class="home">

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
            <el-col :span="6"></el-col>
            <el-col :span="6"></el-col>
            <el-col :span="6"></el-col>
            <el-col :span="6">
              <img class="user-avatar" src="../assets/Adrien.jpeg" alt>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="d-container">
      <OverallStats
        v-if="events.length>0"
        :users="users"
        :totalVisits="totalVisits"
        :validVisits="validVisits"
        :totalTimeSpent="totalTimeSpent"
      />


      <Funnel v-bind:events="events" v-if="events.length>0"/>

      <div class="dailystats">
        <Map v-bind:mdata="map" v-if="events.length>0"/>
        <Gender :users="users" :events="events"></Gender>
      </div>

      <DailyStatsUV v-if="events.length>0" :users="users" :events="events"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Map from "@/components/Map";
import Funnel from "@/components/Funnel";
import Gender from "@/components/Gender";
import ApexCharts from "apexcharts";
import OverallStats from "@/components/OverallStats";
import DailyStatsUV from "@/components/DailyStatsUV";

export default {
  name: "home",
  components: {
    Map,
    Funnel,
    Gender,
    OverallStats,
    DailyStatsUV
  },
  // Data object scoped to a component
  data() {
    return {
      title: null,
      events: [],
      map: [],
      users: [],
      totalVisits: 0,
      validVisits: 0,
      averageTimeSpent: 0,
      totalTimeSpent: 0
    };
  },

  mounted() {
    // setInterval(() => {
    this.loadTotalVisitsData();
    this.loadData();
    // }, 3000);
  },
  // Methods are called once
  methods: {
    loadData() {

        axios
          .get("https://haoshihui.wogengapp.cn/api/v1/users")
          .then(response => {
            let data = response.data.users;
            this.users = data;
                      this.map = data
            let validVisits = 0;
            data.forEach(user => {
              if (user.nickName) {
                validVisits = validVisits + 1;
              }
            });
            this.validVisits = validVisits;
            console.log("Valid visits", validVisits);
          });
    },

    loadTotalVisitsData() {
      axios
        .get("https://haoshihui.wogengapp.cn/api/v1/events")
        .then(response => {
          let data = response.data;
                    this.events = data.events

          let totalVisits = 0;
          data.events.forEach(event => {
            if (event.description === "customerOpenApp") {
              totalVisits = totalVisits + 1;
            }
          });
          this.totalVisits = totalVisits;

          let totalTimeSpent = [];
          let initSession = "";
          let endSession = "";
          let timeSpent = 0;
          data.events.forEach(event => {
            if (event.description === "customerOpenApp") {
              initSession = event;
              //console.log("initSession", initSession);
            }
            if (
              event.description === "customerLeft" &&
              event.user_open_id === initSession.user_open_id
            ) {
              endSession = event;
              console.log("endSession", endSession);

              timeSpent =
                parseInt(endSession.timestamp) -
                parseInt(initSession.timestamp);
              console.log(`${timeSpent} is the timeSpent`);
              totalTimeSpent.push(timeSpent);
            }
          });
          console.log("totalTimespent", totalTimeSpent);
          let total = 0;
          for (let i = 0; i < totalTimeSpent.length; i++) {
            total += totalTimeSpent[i];
          }
          console.log("total", total);
          this.totalTimeSpent = {
            total: total,
            totalTimeSpentArray: totalTimeSpent
          };

          let averageTimeSpentFloat = total / totalTimeSpent.length;
          let averageTimeSpent = Number(averageTimeSpentFloat).toFixed(0);
          console.log("averageTimesSpent", averageTimeSpent);
          this.averageTimeSpent = averageTimeSpent;
        });
    }
  }
};
</script>



<style>
.d-container {
  width: 76vw;
  margin: 30px auto;
}

.wrapper {
  background: white;
  height: 80px;
  margin-bottom: 30px;
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

.user-avatar {
  height: 40%;
  width: 40%;
  padding: 20px 5px;
  object-fit: contain;
  border-radius: 50%;
}
.dailystats {
  display: flex;
  justify-content: space-between;
}

body {
  margin: 0px;
  background-color: #F9FAF;
}
</style>

