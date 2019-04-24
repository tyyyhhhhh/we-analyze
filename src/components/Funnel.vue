// First get the all the events 
Count all the init session & save this as a 1st event
Look for another event with a higher timestamp until you find an event = customerleft
save that other event as event #2
<template>
  <div class='chart'>
    <chart-sankey :data='funnelData' :config='chartConfig'></chart-sankey>
  </div>
</template>




<script>

import _ from 'lodash'
import { ChartSankey } from 'vue-d2b'

export default {    
  
    data () {
      return {
        // The chart data varies from chart to chart. To see what type of data
        // to provide each chart type head over to the d2bjs.org docs.
        chartData: {
          nodes: [],
          links: []
        },

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
    mounted() {},
    components: {
      ChartSankey
    },
    props: {
        events: Array
    },
    computed: {
        funnelData(){    
            this.chartData.nodes.push({name: undefined})   
            console.log(this.chartData.links)  
            const userSession = []
 

            this.events.forEach((event) => {
                if(event.description === "onShow" && event.page === "pages/newcustomer/newcustomer"){
                    let initSession = event
                    console.log(initSession)
                                            
                    this.events.forEach((event)=> {
                        if(event.description !== "customerLeft" && event.user_open_id === initSession.user_open_id){
                            
                                
                                userSession.push(event.page)
                                
                                if ((_.find(this.chartData.nodes, {name: event.page}))=== undefined){
                                    this.chartData.nodes.push({name: event.page})
                                    console.log(this.chartData.nodes)
                                }


                        }
                      
                    }) 

                                      
                }
            })
            console.log(userSession)
                                                userSession.forEach((page)=> {
                                    let pageIndex = _.indexOf(userSession, page)
                                    console.log(pageIndex, page)
                                    let linkToFind = {source: userSession[pageIndex - 1], target: userSession[pageIndex]}
                                    if (_.find(this.chartData.links, linkToFind) !== undefined ){
                                        _.find(this.chartData.links, linkToFind).value = _.find(this.chartData.links, linkToFind).value +1
                                    } else {
                                        this.chartData.links.push({source: userSession[pageIndex - 1] || undefined, target: userSession[pageIndex], value: 1})
                                    }
                                })
                                console.log(userSession.length) 
            return this.chartData
        }
    }
  }
</script>

<style scoped>
  .chart{
    height: 500px;
    width: 90vw;
  }
</style>
