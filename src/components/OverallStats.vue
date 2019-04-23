<template>
  <div>
    <p>Unique Visitors:</p>
    <div>
      <fa-icon icon="chart-bar"/>
    </div>
    <el-button type="danger" plain>{{users.length}}</el-button>
    <p>Total Visits:</p>
    <div>
      <fa-icon icon="chart-bar"/>
    </div>
    <el-button type="warning" plain>{{totalVisits}}</el-button>
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
    }
  }
};
</script>


<style>
</style>
