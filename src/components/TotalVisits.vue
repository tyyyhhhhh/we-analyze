<template>
  <div>
    <p>Total Visits:</p>
    <div>
      <fa-icon icon="chart-bar"/>
    </div>
    <el-button type="warning" plain>{{users.length}}</el-button>
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
    }
  }
};
</script>


<style>
</style>
