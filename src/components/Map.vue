
<template>
    <div class="map-container">
        <h4>Location Demographics</h4>
        <div id="world-map" class="jvmap-smart">
        </div>
    </div>
</template>



<script>
window.jQuery = require('jquery');
var $ = window.jQuery;
require('jvectormap');

require('./chinaMap.js');

let obj = {}

const mapProvinces = {
  "Jiangsu":"CN-32",
  "Guizhou":"CN-52",
  "Yunnan":"CN-53",
  "Chongqing":"CN-50",
  "Sichuan":"CN-51",
  "Shanghai":"CN-31",
  "Xizang":"CN-54",
  "Zhejiang":"CN-33",
  "Inner Mongol":"CN-15",
  "Shanxi":"CN-14",
  "Fujian":"CN-",
  "Tianjin":"CN-12",
  "Hebei":"CN-13",
  "Beijing":"CN-11",
  "Anhui":"CN-34",
  "Jiangxi":"CN-36",
  "Shandong":"CN-37",
  "Henan":"CN-41",
  "Hunan":"CN-43",
  "Hubei":"CN-42",
  "Guangxi":"CN-45",
  "Guangdong":"CN-44",
  "Hainan":"CN-46",
  "Xinjiang":"CN-65",
  "Ningxia":"CN-64",
  "Qinghai":"CN-63",
  "Gansu":"CN-62",
  "Shaanxi":"CN-61",
  "Heilongjiang":"CN-23",
  "Jilin":"CN-22",
  "Liaoning":"CN-21"
}

export default {
    data() {
        return {
            mapOptions: {
  map: 'cn_mill',
  backgroundColor: '#fff',
  borderColor: '#fff',
  borderOpacity: 0.25,
  borderWidth: 0,
  color: '#e6e6e6',
  regionStyle : {
    initial : {
      fill : '#e4ecef',
    },
  },

  markerStyle: {
    initial: {
      r: 7,
      'fill': '#fff',
      'fill-opacity':1,
      'stroke': '#000',
      'stroke-width' : 2,
      'stroke-opacity': 0.4,
    },
  },

  series: {
    regions: [{
      values: obj,
      scale: ['#C8EEFF', '#0071A4'],
      normalizeFunction: 'polynomial',
    }],
  },
  hoverOpacity: null,
  normalizeFunction: 'linear',
  zoomOnScroll: false,
  scaleColors: ['#b6d6ff', '#005ace'],
  selectedColor: '#c9dfaf',
  selectedRegions: [],
  enableZoom: false,
  hoverColor: '#fff',
},
        }
    },
    mounted(){
        this.drawMap();
    },
    methods:{
        drawMap(){
                  this.mapData();
            $('#world-map').vectorMap(this.mapOptions);
            $('#world-map').vectorMap('get', 'mapObject').updateSize()
        },
          mapData() {
          console.log("hey")

          let userProvinces =[]
        this.mdata.forEach((user) => {
          if(user.province !== null && user.province !== ""){
            userProvinces.push(user.province)
          }
        })
        let newObj = {}
        Object.entries(mapProvinces).forEach((province) => {
          userProvinces.forEach((userProvince) => {
              if (province[0] === userProvince) {
              let userProvince = province[1];
                if (obj[userProvince]) {
                  obj[userProvince] ++
                } else {
                  obj[userProvince] = 1
                }
              }

              // if (obj[userProvince]){
              // console.log(obj.userProvince)
              // obj[userProvince] += 1
              // } else {
              // obj[userProvince] = 1
              // }
          })
        })
        console.log(newObj)


            // })



        console.log(userProvinces)
        console.log(_.countBy([userProvinces], "value"))

        //

        //   console.log(obj)


        // }
      // });
      console.log("this one is the real one")
      console.log(obj)
      return obj
        }
    },
    props: {
        mdata: Array
    },
    computed: {


    }
}
</script>

<style>
.jvmap-smart {
    height: 500px;
}
.jvectormap-container {
    height: 300px;
}

.map-container {
  background-color: white;
  padding: 20px 0;
  height: 420px;
  border: 1px solid #EAEAEA;
  width: 610px;
}
</style>
