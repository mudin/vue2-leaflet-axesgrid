module.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=1)}([function(t,e,n){"use strict";var r=n(4),o=n.n(r),i=n(5);n.n(i);e.a={props:{options:{type:Object,default:function(){return{}}}},watch:{url:function(){this.updateLayer()},options:function(){this.updateLayer()}},mounted:function(){this.mapObject=o.a.axesGrid(this.options),this.options&&o.a.DomEvent.on(this.mapObject,this.$listeners),this.$parent._isMounted&&this.deferredMountedTo(this.$parent.mapObject)},beforeDestroy:function(){this.removeLayer()},methods:{deferredMountedTo:function(t){this.mapObject.addTo(t)},setAttribution:function(t,e){this.attributionControl.removeAttribution(e),this.attributionControl.addAttribution(t)},setToken:function(t){this.options.token=t},removeLayer:function(){this.$parent.mapObject.removeLayer(this.mapObject)},updateLayer:function(){this.removeLayer(),this.mapObject=o.a.axesGrid(this.options),this.deferredMountedTo(this.$parent.mapObject)}}}},function(t,e,n){t.exports=n(2)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(6),i=n(3),s=i(r.a,o.a,!1,null,null,null);e.default=s.exports},function(t,e){t.exports=function(t,e,n,r,o,i){var s,u=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(s=t,u=t.default);var c="function"==typeof u?u.options:u;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var d;if(i?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=d):r&&(d=r),d){var f=c.functional,p=f?c.render:c.beforeCreate;f?(c._injectStyles=d,c.render=function(t,e){return d.call(e),p(t,e)}):c.beforeCreate=p?[].concat(p,d):[d]}return{esModule:s,exports:u,options:c}}},function(t,e){t.exports=require("leaflet")},function(t,e){t.exports=require("leaflet.axesgrid")},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},o=[],i={render:r,staticRenderFns:o};e.a=i}]);