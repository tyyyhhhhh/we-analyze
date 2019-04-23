<template>
  <div>
    <h1>I am a {{events.length}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => {
        return "Child";
      }
    },
    data: {
      type: Object,
      default: () => {
        return {
          title: "Nathan",
          role: "Engineer"
        };
      }
    },
    events: {
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
