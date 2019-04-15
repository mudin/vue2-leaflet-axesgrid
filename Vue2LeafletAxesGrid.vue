<template></template>

<script>
import L from 'leaflet'
import 'leaflet.axesgrid'

export default {
  props: {
    options: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  watch: {
    url() {
      this.updateLayer()
    },
    options() {
      this.updateLayer()
    },
  },
  mounted () {
    this.mapObject = L.axesGrid(this.options)
    if (this.options) {
      L.DomEvent.on(this.mapObject, this.$listeners)
    }
    if (this.$parent._isMounted)  {
      this.deferredMountedTo(this.$parent.mapObject);
    }
  },
  beforeDestroy() {
    this.removeLayer()
  },
  methods: {
    deferredMountedTo(parent) {
      this.mapObject.addTo(parent);
    },

    setAttribution(val, old) {
      this.attributionControl.removeAttribution(old);
      this.attributionControl.addAttribution(val);
    },

    setToken(val) {
      this.options.token = val;
    },
    removeLayer() {
      this.$parent.mapObject.removeLayer(this.mapObject);
    },
    updateLayer() {
      this.removeLayer()
      this.mapObject = L.axesGrid(this.options)
      this.deferredMountedTo(this.$parent.mapObject);
    }
  }
}
</script>
