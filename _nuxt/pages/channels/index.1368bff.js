(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{337:function(n,e,t){"use strict";var r={name:"StoreBaseView",props:{id:{type:String,default:"view"}},data:function(){return{sections:[]}}},o=t(5),c=t(31),l=t.n(c),f=t(360),v=t(333),component=Object(o.a)(r,(function(){var n=this.$createElement,e=this._self._c||n;return e("section",{attrs:{id:this.id}},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},this._l(this.sections,(function(section){return e("store-section-"+section,{key:section,tag:"component"})})),1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VCol:f.a,VRow:v.a})},338:function(n,e,t){"use strict";var r=t(345);e.a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{name:"LoadSections",components:n.reduce((function(n,e){var o=Object(r.upperFirst)(Object(r.camelCase)(e));return n["StoreSection".concat(o)]=function(){return t(339)("./".concat(o,".vue"))},n}),{}),data:function(){return{sections:n}}}}},339:function(n,e,t){var map={"./Channels.vue":[353,19,29],"./ChannelsList.vue":[351,1,18,30],"./Hero.vue":[354,23],"./PricingPlan.vue":[355,22],"./Setup.vue":[356,16],"./SubscribeIndex.vue":[352,1,24]};function r(n){if(!t.o(map,n))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[n],r=e[0];return Promise.all(e.slice(1).map(t.e)).then((function(){return t(r)}))}r.keys=function(){return Object.keys(map)},r.id=339,n.exports=r},466:function(n,e,t){"use strict";t.r(e);var r=t(337),o=t(338),c={layout:"store",name:"channels",metaInfo:{title:"IPTV list of channels"},extends:r.a,mixins:[Object(o.a)(["channels-list"])],props:{id:{type:String,default:"channels"}}},l=t(5),component=Object(l.a)(c,void 0,void 0,!1,null,null,null);e.default=component.exports}}]);