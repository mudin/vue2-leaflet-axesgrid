<template>
  <div id="app">
    <v-map
      :zoom="initialZoom"
      :minZoom="minZoom"
      :maxZoom="maxZoom"
      :center="initialLocation"
      :crs="crs">
      <v-axesgrid :options="opts"></v-axesgrid>
      <v-image-overlay
        :url="imageUrl"
        :bounds="bounds">
      </v-image-overlay>
    </v-map>
  </div>
</template>

<script>
import L from 'leaflet'
import {LMap, LImageOverlay} from 'vue2-leaflet'
import Vue2LeafletAxesGrid from '../Vue2LeafletAxesGrid'

export default {
  components: {
    'v-map': LMap,
    'v-image-overlay':LImageOverlay,
    'v-axesgrid': Vue2LeafletAxesGrid
  },
  methods:{
    getBounds(w,h) {
			const scale = Math.ceil(w / 2.);
			const southWest = [-h / scale / 2.0, -w / scale / 2.0];
			const northEast = [h / scale / 2.0, w / scale / 2.0];
			return [southWest, northEast];
		}
  },
  mounted() {
    this.bounds = this.getBounds(1101,784);
  },
  data () {
    return {
      crs: L.CRS.Simple,
      initialLocation: L.latLng(0, 0),
      initialZoom: 10,
      minZoom: 5,
      maxZoom: 13,
      imageUrl:"./floorplan.png",
      bounds:[],
      options:{
        zoomControl:false,
        crs: L.CRS.Simple,
        minZoom:5,
        maxZoom:13
      },
      opts:{
        showLabel:true
      }
    }
  }
}
</script>

<style>
  .leaflet-layer  {
    z-index: 2!important;
  }
  .leaflet-pane, .leaflet-overlay-pane {
    z-index: unset;
  }
  @import "~leaflet/dist/leaflet.css";
  html, body {
    margin: 0;
    height: 100%;
  }
  #app {
    height: 100%;
  }
</style>
