// First get the all the events
Count all the init session & save this as a 1st event
Look for another event with a higher timestamp until you find an event = customerleft
save that other event as event #2
<template>
  <div class='chart'>
      <div ref="chartdiv" class="chartdiv">
    
  </div>
  </div>

</template>




<script>
let rankedPages = {
  "pages/newcustomer/newcustomer": 1,
  "pages/shops/shops": 2,
  "pages/shop/shop": 3,
  "map/map": 4,
  "pages/newshop/new": 5,
  "pages/payment/payment": 6
}
let arr = []
let cleanArr = []
import _ from 'lodash'
import { ChartSankey } from 'vue-d2b'
      import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {


    data () {
      return {
        // The chart data varies from chart to chart. To see what type of data
        // to provide each chart type head over to the d2bjs.org docs.
        chartData: null ,
        chart: null,
        


        // There are many configuration options for each chart type, checkout
        // the d2bjs.org docs for more information.
        chartConfig (chart) {
          chart
            // returns the d2b svg sankey generator
            .sankey()
            // returns the d3 sankey generator
            .sankey()
            // now configure the d3 sankey generator through method chaining
            .nodePadding(50)
        }
      }
    },
    mounted() {
      let chart = am4core.create(this.$refs.chartdiv, am4charts.SankeyDiagram);
            this.chart = chart

            chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

let hoverState = chart.links.template.states.create("hover");
hoverState.properties.fillOpacity = 0.6;

chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";

// for right-most label to fit
chart.paddingRight = 30;

// make nodes draggable
let nodeTemplate = chart.nodes.template;
nodeTemplate.inert = true;
nodeTemplate.readerTitle = "Drag me!";
nodeTemplate.showSystemTooltip = true;
nodeTemplate.width = 20;

// make nodes draggable
nodeTemplate = chart.nodes.template;
nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
nodeTemplate.showSystemTooltip = true;
nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer

      this.sankeyChart()


/* Chart code */
// Themes begin

// Themes end


    },
    components: {
      ChartSankey
    },
    props: {
        events: Array
    },
    methods: {
      sankeyChart() {
        console.log(this.events)
        let users = (_.groupBy(this.events, (event) => { return event.user_open_id }))
        let userAllSessions = Object.values(users)
        let finalArr = []
        userAllSessions.forEach((userSessions) => {
          let OrderedEvents = (_.sortBy(userSessions, (event) =>{return event.timestamp}))
          OrderedEvents.forEach((event) => {
            let nextEvent = _.findIndex(OrderedEvents, event) + 1 
              event && OrderedEvents[nextEvent] && arr.push({ from: event.page, to: OrderedEvents[nextEvent].page, value: 1, source_description: event.description, target_description: OrderedEvents[nextEvent].description })

            //  else if(event == null && OrderedEvents[nextEvent] != null) {
            //    console.log("TEST C")
            //    console.log(OrderedEvents[nextEvent])
            //   arr.push({ from: "Opened the app", to: OrderedEvents[nextEvent].page, value: 1 })
            // } else {
            //   console.log("TEST D")

            //    && arr.push({ from: event.page , to: OrderedEvents[nextEvent].page, value: 1 })
            })

            
         })
         let testObj = {}
          arr.forEach((element) => {
            if (testObj[`${element.from} + ${element.to}`]) {} else {
              testObj[`${element.from} + ${element.to}`] = 1
            }
            if(element.from == null && element.source_description !== "customerOpenApp" ){

            } else if (element.to == null && element.target_description !== "customerLeft"){

            } else if (element.to === element.from){

            }
            else {
              
              if (_.find(cleanArr, {from: element.from, to: element.to, value: element.value})){
                _.pull(cleanArr, element)

                testObj[`${element.from} + ${element.to}`] ++
                element.value ++

              } else {
                cleanArr.push({from: element.from, to: element.to, value: element.value})
              }
              
            }
          })
          Object.entries(testObj).forEach(([key, value]) => {
            
            let newArr = (_.split(key, ' + '))
            if(newArr[0] !== newArr[1]){
              if(newArr[0] === "null"){
                newArr[0] = "Landing"
              } else if(newArr[1] === "null") {
                newArr[1] = "Left"
              }
              if (rankedPages[newArr[0]] < rankedPages[newArr[1]]) {
              finalArr.push({from: newArr[0], to: newArr[1], value: value})
              }
              
            } 
            
            }
          )

          console.log(finalArr)
           this.chart.data = finalArr

//           this.chart.data = [
//  {from: "pages/newcustomer/newcustomer", to: "pages/newshop/newshop", value: 3},
//  {from: "pages/newshop/newshop", to: "pages/shop/shop", value: 3},
//  {from: "pages/shop/shop", to: "pages/shops/shops", value: 37},
//  {from: "pages/shop/shop", to: "pages/newshop/newshop", value: 37}
// ];

        }
        
        

        // get user sessions by splitting at customerLeft
        // users.forEach((user) =>{
        //   console.log(user)
        // })
      }
    }
    
  
</script>

<style>
  .chartdiv{
    height: 500px;
    width: 80vw;
  }

</style>
