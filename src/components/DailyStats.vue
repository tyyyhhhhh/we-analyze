<template>
  <div id="chart">
    <h1>DailyStats:{{events.length}}</h1>

    <apexchart type="line" height="350" :options="chartOptions" :series="series"/>
  </div>
</template>

<script>
const todayDateTimestamp = new Date().getTime();
const todayDate = new Date(todayDateTimestamp);
const yy = todayDate.getFullYear();
const mm = todayDate.getMonth() + 1;
const dd = todayDate.getDate();

const hashes_bymonth_dailystats = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0
};
const dailystats = {};

export default {
  data() {
    return {
      series: [
        {
          name: "Desktops",
          data: [0, 0, 0, 0, 0, 0, 0]
        }

      ],

      chartOptions: {
        xaxis: {
          // categories: [ '21/4','22/4', '23/4','24/4','25/4', '26/4'],
          categories: ["20/4", "21/4", "22/4", "23/4", "24/4", "25/5", "26/4"]
        },

        chart: {
          height: 350,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight"
        },
        title: {
          text: "Daily Statistics",
          align: "left"
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        }
      }
    };

  },

  mounted() {
    this.dailyStatistics();
  },

  methods: {
    dailyStatistics() {
      this.events.forEach(event => {
        let timestamp = event.timestamp;
        let date = new Date(timestamp * 1000);

        let userDate = date.getDate();
        if (!dailystats[userDate]) {
          dailystats[userDate] = 1;
        } else if (dailystats[userDate] > 0) {
          dailystats[userDate] = dailystats[userDate] + 1;
        }
        let userMonth = date.getMonth() + 1;
        hashes_bymonth_dailystats[userMonth] = dailystats;
      });

      const thisMonthsData = hashes_bymonth_dailystats[mm];

      const array_data = [
        thisMonthsData[dd - 6],
        thisMonthsData[dd - 5],
        thisMonthsData[dd - 4],
        thisMonthsData[dd - 3],
        thisMonthsData[dd - 2],
        thisMonthsData[dd - 1],
        thisMonthsData[dd]
      ];

      let monthlyData = array_data.map(element => {
        if (!element) {
          return 0;
        }
        return element;
      });



    this.events.forEach((event) => {

      //this is the old daily stats
      let timestamp = event.timestamp
      let date = new Date(timestamp * 1000)

      let userDate = date.getDate()
      if (!dailystats[userDate]){
        dailystats[userDate] = 1
      } else if (dailystats[userDate] > 0 ){
        dailystats[userDate] = dailystats[userDate] + 1
      }
      let userMonth = date.getMonth()+1;
      hashes_bymonth_dailystats[userMonth] = dailystats
    })

    const thisMonthsData = hashes_bymonth_dailystats[mm]


    const array_data = [thisMonthsData[dd-6],thisMonthsData[dd-5],thisMonthsData[dd-4],thisMonthsData[dd-3],thisMonthsData[dd-2],thisMonthsData[dd-1],thisMonthsData[dd]]


    let monthlyData = array_data.map((element) => {
      if(!element) { return 0 }
      return element
    })
     console.log("hashes test", hashes_bymonth_dailystats)

    this.series[0].data = monthlyData
    console.log("MOnthly Data", monthlyData)


    const weekly = [`${mm}/${dd -6}`, `${mm}/${dd -5}`, `${mm}/${dd -4}`, `${mm}/${dd -3}`, `${mm}/${dd - 2}`, `${mm}/${dd -1}`, `${mm}/${dd}`]

    // this.chartOptions.xaxis.categories = weekly
    console.log('xaxis test weeky ', weekly)


    // const todaysData = thisMonthsData[dd]


    // const prev1Data = thisMonthsData[dd - 1]
    // console.log('test6',thisMonthsData[dd - 6])


    // const prev2Data = thisMonthsData[dd - 2]


      const weekly = [
        `${mm}/${dd - 6}`,
        `${mm}/${dd - 5}`,
        `${mm}/${dd - 4}`,
        `${mm}/${dd - 3}`,
        `${mm}/${dd - 2}`,
        `${mm}/${dd - 1}`,
        `${mm}/${dd}`
      ];

      // this.chartOptions.xaxis.categories = weekly
      // console.log('xaxis test weeky ', weekly)

      // const todaysData = thisMonthsData[dd]

      // const prev1Data = thisMonthsData[dd - 1]
      // console.log('test6',thisMonthsData[dd - 6])

      // const prev2Data = thisMonthsData[dd - 2]

      // const prev3Data = thisMonthsData[dd - 3]

      // const prev4Data = thisMonthsData[dd - 4]

      // const prev5Data = thisMonthsData[dd - 5]

      // const prev6Data = thisMonthsData[dd - 6]

      // console.log('series ',this.series[0].data)

      // this.series[0].data = [prev6Data, prev5Data, prev4Data, prev3Data, prev2Data, prev1Data, todaysData]
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
        return "DailyStats";
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
</style>
