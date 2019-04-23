# vue2-leaflet-axesgrid

This is a [AxesGrid](https://github.com/Leaflet/Leaflet.AxesGrid) plugin extension for the [vue2-leaflet](https://github.com/KoRiGaN/Vue2Leaflet) package.

## Install

    npm install vue2-leaflet-axesgrid

## Quickstart

For a complete example, have a look at the demo code in the single-file component [example](example/example.vue).

### On &lt;template&gt; add something like this

```html
<v-map :crs="crs">
  <v-axesgrid :options="opts"/>
  <v-image-overlay :url="imageUrl" :bounds="bounds"/>
</v-map>
```

### on &lt;script&gt; add

```javascript
import Vue2Leaflet from 'vue2-leaflet'
import Vue2LeafletAxesGrid from 'vue2-leaflet-axesgrid'

export default {
  components: {
    'v-map': Vue2Leaflet.Map,
    'v-axesgrid': Vue2LeafletAxesGrid
  },
  data () {
    return {
      options: {
      	opt: { ... },
         ...  // More AxesGrid and Map options.
      }
    }
  }
}
```
## Demo

    git clone git@github.com:tesselo/vue2-leaflet-axesgrid.git
    cd vue2-leaflet-axesgrid

    npm install
    npm run example

Then you should be able to navigate with your browser and see the demo in http://localhost:4000/

## Develop and build

    npm install
    npm run build

## Acknowledgements

Thanks to Aaron Gong and  Julián Perelli, the authors of the [markercluster plugin](https://github.com/jperelli/vue2-leaflet-markercluster) and the [tracksymbol plugin](https://github.com/ais-one/vue2-leaflet-tracksymbol). Both packages have been used as a basis to build this plugin.
