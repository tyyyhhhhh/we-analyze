
<template>
  <div class="bg-forchart">
      <h4>Daily Statistics by the Week</h4>
   <div id="chart">
      <apexchart v-if="dailyStatistics" type=line height=350 :options="chartOptions" :series="dailyStatistics" />
    </div>
  </div>
</template>

<script>

const todayDateTimestamp = new Date().getTime()
const todayDate = new Date(todayDateTimestamp)
const yy = todayDate.getFullYear()
const mm = todayDate.getMonth() + 1
const dd = todayDate.getDate()

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
  12: 0,
}
const dailystats = {}

const days_permonth = []
let counter_hash = {}


export default {
   data() {
    return {
        series: [{
            name: "Mini Program",
            data: []
        }],

        chartOptions: {
          xaxis: {

                // categories: [ '21/4','22/4', '23/4','24/4','25/4', '26/4'],
                categories: ['20/4', '21/4', '22/4', '23/4', '24/4', '25/5', '26/4'],
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
                curve: 'straight'
            },
            title: {
                text: 'Unique Visitors Per Day',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },

        }
      }
  },


    mounted() {
      this.dailyStatistics()
    },

  computed: {

    dailyStatistics() {
      let days = {}
      this.events.forEach((event) => {
        let timestamp = event.timestamp
        let date = new Date(timestamp * 1000)
        let userDate = date.getDate()
        // console.log('counter', counter)
        // console.log('user id',event.user_open_id)
        let uniqueID = event.user_open_id

        if(uniqueID) {
          days_permonth.push(userDate)
          if(days[userDate]) {
            if(!days[userDate].includes(uniqueID)) {
              days[userDate].push(uniqueID)

            }
          } else {
            days[userDate] = [uniqueID]
          }
        }
      })

        var uniqDays = days_permonth.reduce(function(a,b){
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
        },[]);

        console.log('num', uniqDays)

        uniqDays.forEach((day) => {
          // console.log("why not workin???", day, days[day].length)
          days[day] = days[day].length
        })

        // console.log('after', days[dd-1])
        const array_display_data = [3, 8, 4, 6, 7,days[dd-1],days[dd]]
        console.log(array_display_data)

      let weeklyData = array_display_data.map((element) => {
      if(!element) { return 0 }
      return element
      })


      this.series[0].data = weeklyData
      const changedData = this.series
      console.log("weekly Data working?", changedData)
      return changedData

    },
  },

    props: {
        title: {
            type: String,
            default: () => {
                return 'DailyStats'
            }
        },
        events: {
            type: Array,
            default: () => {
                return []
            }
        },

        users: {
            type: Array,
            default: () => {
                return []
            }
        }
    }
}
</script>


<style>

.bg-forchart {
  background-color: white;
  padding: 20px;
  margin: 30px 0;
  border: 1px solid #EAEAEA;
  width: 650px;
}

</style>
