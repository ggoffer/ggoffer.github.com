(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{337:function(n,t,e){"use strict";var o={name:"StoreBaseView",props:{id:{type:String,default:"view"}},data:function(){return{sections:[]}}},r=e(5),c=e(31),l=e.n(c),f=e(354),v=e(333),component=Object(r.a)(o,(function(){var n=this.$createElement,t=this._self._c||n;return t("section",{attrs:{id:this.id}},[t("v-row",{attrs:{"no-gutters":""}},[t("v-col",{attrs:{cols:"12"}},this._l(this.sections,(function(section){return t("store-section-"+section,{key:section,tag:"component"})})),1)],1)],1)}),[],!1,null,null,null);t.a=component.exports;l()(component,{VCol:f.a,VRow:v.a})},338:function(n,t,e){"use strict";var o=e(344);t.a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{name:"LoadSections",components:n.reduce((function(n,t){var r=Object(o.upperFirst)(Object(o.camelCase)(t));return n["StoreSection".concat(r)]=function(){return e(339)("./".concat(r,".vue"))},n}),{}),data:function(){return{sections:n}}}}},339:function(n,t,e){var map={"./Channels.vue":[349,1,26],"./ChannelsList.vue":[347,1,16,27],"./Hero.vue":[350,21],"./PricingPlan.vue":[351,20],"./Setup.vue":[352,15]};function o(n){if(!e.o(map,n))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[n],o=t[0];return Promise.all(t.slice(1).map(e.e)).then((function(){return e(o)}))}o.keys=function(){return Object.keys(map)},o.id=339,n.exports=o},461:function(n,t,e){"use strict";e.r(t);var o=e(337),r=e(338),c={layout:"store",name:"channels",metaInfo:{title:"IPTV list of channels"},extends:o.a,mixins:[Object(r.a)(["channels-list"])],props:{id:{type:String,default:"channels"}}},l=e(5),component=Object(l.a)(c,void 0,void 0,!1,null,null,null);t.default=component.exports}}]);