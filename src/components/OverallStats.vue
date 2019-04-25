<template>
  <div class="overallStats-Container">
    <div class="outterBox">
      <p>Total Visits:</p>
      <div class="innerBox">
        <fa-icon icon="chart-bar" class="chart-bar-warning"/>
        <el-button type="warning" size="mini" round plain>{{totalVisits}}</el-button>
      </div>
    </div>
    <div class="outterBox">
      <p>Unique Visitors:</p>
      <div class="innerBox">
        <fa-icon icon="chart-bar" class="chart-bar-success"/>
        <el-button type="success" size="mini" round plain>{{users.length}}</el-button>
      </div>
    </div>
    <div class="outterBox">
      <p>Bounce Rate:</p>
      <div class="innerBox">
        <fa-icon icon="chart-bar" class="chart-bar-danger"/>
        <el-button type="danger" size="mini" round plain>{{bounceRate}}%</el-button>
      </div>
    </div>
    <div class="outterBox">
      <p>Avg Time Spent:</p>
      <div class="innerBox">
        <fa-icon icon="history" class="history-icon-primary"/>
        <el-button type="primary" size="mini" round plain>{{averageTimeSpent}}min</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      default: () => {
        return [];
      }
    },
    totalVisits: {
      type: Number
    },
    validVisits: {
      type: Number
    },
    totalTimeSpent: {}
  },
  computed: {
    averageTimeSpent() {
      let { total, totalTimeSpentArray } = this.totalTimeSpent;
      let averageTimeSpentFloat = total / totalTimeSpentArray.length;
      let averageSecSpent = Number(averageTimeSpentFloat).toFixed(0);
      let averageTimeSpent = Number(averageSecSpent / 60).toFixed(0);
      return averageTimeSpent;
    },
    bounceRate() {
      let bounceRateFloat = (1 - this.validVisits / this.totalVisits) * 100;
      let bounceRate = Number(bounceRateFloat).toFixed(0);
      return bounceRate;
    }
  }
};
</script>


<style scoped lang="scss">
.overallStats-Container {
  display: flex;
  justify-content: space-between;
}

.innerBox {
  display: flex;
  justify-content: space-between;
}

.outterBox {
  width: 120px;
  background-color: white;
  padding: 20px 30px;
  width: 240px;
  text-align: left;
  border: 1px solid #eaeaea;
}

.outterBox p {
  margin: 0 0 15px 0;
}

.chart-bar-success {
  color: #67c23a;
  font-size: 30px;
}

.chart-bar-warning {
  color: #e6a23c;
  font-size: 30px;
}

.chart-bar-danger {
  color: #f56c6c;
  font-size: 30px;
}

.history-icon-primary {
  color: #409eff;
  font-size: 30px;
}
</style>
