<template>
  <div id="chart">
    <h1>GenderStats:{{events.length}}</h1>
    <apexchart
      @click="genderStats"
      type="donut"
      width="380"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script>
let femaleCount = 0;
let maleCount = 0;

export default {
  data() {
    return {
      series: [1, 1],

      chartOptions: {
        labels: ["Male", "Female"],
        colors: ["#258FFB", "#E91E63", "#9C27B0"],

        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      }
    };
  },

  mounted() {
    this.genderStats();
  },

  methods: {
    genderStats() {
      this.users.forEach(user => {
        if (user.gender === "2") {
          femaleCount += 1;
        } else if (user.gender === "1") {
          maleCount += 1;
        }
        let genderRatio = (femaleCount / (femaleCount + maleCount)) * 100;
        // console.log(genderRatio)
      });
      this.series = [maleCount, femaleCount];
    },

    changeData() {
      setInterval(() => {
        this.series = [1, 2, 3, 4];
      }, 100);
    }
  },
  props: {
    title: {
      type: String,
      default: () => {
        return "GenderStats";
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
    },

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
@import url(https://fonts.googleapis.com/css?family=Roboto);

body {
  font-family: Roboto, sans-serif;
}

#chart {
  max-width: 650px;
  margin: 35px auto;
}
</style>
