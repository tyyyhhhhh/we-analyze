<template>
  <div>
    <p>Unique Visitors:</p>
    <div>
      <fa-icon icon="chart-bar"/>
    </div>
    <el-button type="success" plain>{{users.length}}</el-button>
    <p>Total Visits:</p>
    <div>
      <fa-icon icon="chart-bar"/>
    </div>
    <el-button type="warning" plain>{{totalVisits}}</el-button>
    <p>Bounce Rate:</p>
    <div>
      <fa-icon icon="chart-bar"/>
    </div>
    <el-button type="danger" plain>{{bounceRate}}%</el-button>
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
    }
  },
  computed: {
    bounceRate() {
      let bounceRate0 = (1 - this.validVisits / this.totalVisits) * 100;

      let bounceRate = Number(bounceRate0).toFixed(2);

      return bounceRate;
    }
  }
};
</script>


<style>
</style>
