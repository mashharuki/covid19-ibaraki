(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{287:function(t,e,n){var content=n(290);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("790a7675",content,!0,{sourceMap:!1})},289:function(t,e,n){"use strict";var r=n(287);n.n(r).a},290:function(t,e,n){(e=n(17)(!1)).push([t.i,".header[data-v-174a4490]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-174a4490]{font-size:30px;font-size:1.875rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-174a4490]{font-size:20px;font-size:1.25rem}}",""]),t.exports=e},291:function(t,e,n){"use strict";var r=n(1).a.extend({props:{icon:{type:String}}}),o=(n(289),n(9)),c=n(40),l=n.n(c),d=n(279),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"174a4490",null);e.a=component.exports;l()(component,{VIcon:d.a})},338:function(t,e,n){var content=n(479);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("0f0f4320",content,!0,{sourceMap:!1})},339:function(t,e,n){var content=n(482);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("41b7eead",content,!0,{sourceMap:!1})},478:function(t,e,n){"use strict";var r=n(338);n.n(r).a},479:function(t,e,n){(e=n(17)(!1)).push([t.i,".StaticInfo{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;background-color:#fff;border:1px solid #d9d9d9;box-shadow:0 0 2px rgba(0,0,0,.15);border-radius:4px;padding:.5em 1em;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.StaticInfo:hover{text-decoration:underline}.StaticInfo-Button{flex:1 0 auto;text-align:right}.StaticInfo-Button>span{padding:4px 8px;font-size:14px;font-size:0.875rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #003fab;color:#003fab;cursor:pointer}.StaticInfo-Button>span:hover{background-color:#003fab;color:#fff}.StaticInfo-Button>span:hover>i{color:#fff !important}@media screen and (max-width: 600px){.StaticInfo-Button{margin-top:4px}}",""]),t.exports=e},480:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/03/27","url":"https://www.pref.ibaraki.jp/1saigai/2019-ncov/documents/200327.pdf","text":"新型コロナウイルス感染症対策に係る都市部への移動について(PDF)"}]}')},481:function(t,e,n){"use strict";var r=n(339);n.n(r).a},482:function(t,e,n){(e=n(17)(!1)).push([t.i,".MainPage .Header[data-v-30195f26]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width: 600px){.MainPage .Header[data-v-30195f26]{flex-direction:column;align-items:baseline}}.MainPage .UpdatedAt[data-v-30195f26]{font-size:14px;font-size:0.875rem;color:#707070;margin-bottom:.2rem}.MainPage .Annotation[data-v-30195f26]{font-size:12px;font-size:0.75rem;color:#707070}@media screen and (min-width: 601px){.MainPage .Annotation[data-v-30195f26]{margin:0 0 0 auto}}.MainPage .DataBlock[data-v-30195f26]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-30195f26]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-30195f26]{padding:4px 8px}}",""]),t.exports=e},492:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(291),c=r.a.extend({props:{url:{type:String,default:""},text:{type:String,default:""},btnText:{type:String,default:""}},computed:{linkTag:function(){return this.isInternalLink?"nuxt-link":"a"},linkAttrs:function(){return this.isInternalLink?{to:this.url,class:"StaticInfo"}:{href:this.url,class:"StaticInfo"}},isInternalLink:function(){return!/^https?:\/\//.test(this.url)}}}),l=(n(478),n(9)),d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.linkTag,t._b({tag:"component"},"component",t.linkAttrs,!1),[n("span",[t._v(t._s(t.text))]),t._v(" "),t.btnText?n("div",{staticClass:"StaticInfo-Button"},[n("span",[t._v("\n      "+t._s(t.btnText)+"\n    ")])]):t._e()])}),[],!1,null,null,null).exports,f=n(105),v=n(480),m=n(352),x=n(358),h=n(353),w=n(355),y=n(356),j=n(123),_=r.a.extend({components:{PageHeader:o.a,StaticInfo:d,ConfirmedCasesDetailsCard:m.a,ConfirmedCasesNumberCard:x.a,ConfirmedCasesAttributesCard:h.a,InspectionPersonsNumberCard:w.a,TelephoneAdvisoryReportsNumberCard:y.a},data:function(){var data={Data:f,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("県内の最新感染動向")},newsItems:v.newsItems};return data},computed:{updatedAt:function(){return Object(j.b)(this.$data.Data.lastUpdate)}},head:function(){return{title:this.$t("県内の最新感染動向")}}}),C=(n(481),n(40)),O=n.n(C),S=n(350),k=(n(30),n(13),n(3)),I=(n(41),n(171),n(44),n(6),n(4),n(16),n(36),n(37),n(172),n(134)),P=n(10);function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var z=["sm","md","lg","xl"],M=["start","end","center"];function B(t,e){return z.reduce((function(n,r){return n[t+Object(P.z)(r)]=e(),n}),{})}var A=function(t){return[].concat(M,["baseline","stretch"]).includes(t)},$=B("align",(function(){return{type:String,default:null,validator:A}})),T=function(t){return[].concat(M,["space-between","space-around"]).includes(t)},E=B("justify",(function(){return{type:String,default:null,validator:T}})),N=function(t){return[].concat(M,["space-between","space-around","stretch"]).includes(t)},H=B("alignContent",(function(){return{type:String,default:null,validator:N}})),L={align:Object.keys($),justify:Object.keys(E),alignContent:Object.keys(H)},U={align:"align",justify:"justify",alignContent:"align-content"};function J(t,e,n){var r=U[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var V=new Map,G=r.a.extend({name:"v-row",functional:!0,props:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(k.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:A}},$,{justify:{type:String,default:null,validator:T}},E,{alignContent:{type:String,default:null,validator:N}},H),render:function(t,e){var n=e.props,data=e.data,r=e.children,o="";for(var c in n)o+=String(n[c]);var l=V.get(o);return l||function(){var t,e;for(e in l=[],L)L[e].forEach((function(t){var r=n[t],o=J(e,t,r);o&&l.push(o)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(k.a)(t,"align-".concat(n.align),n.align),Object(k.a)(t,"justify-".concat(n.justify),n.justify),Object(k.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),V.set(o,l)}(),t(n.tag,Object(I.a)(data,{staticClass:"row",class:l}),r)}}),R=Object(l.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("div",{staticClass:"Header mb-3"},[n("page-header",{attrs:{icon:t.headerItem.icon}},[t._v("\n      "+t._s(t.headerItem.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新"))+" ")]),t._v(" "),n("time",{attrs:{datetime:t.updatedAt}},[t._v(t._s(t.Data.lastUpdate))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈"))+" ")])])],1),t._v(" "),n("static-info",{staticClass:"mb-4",attrs:{text:t.$t("このページは随時更新されます。更新作業を手伝っていただけると幸いです。"),url:t.localePath("/helpus")}}),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("confirmed-cases-details-card"),t._v(" "),n("confirmed-cases-attributes-card"),t._v(" "),n("confirmed-cases-number-card"),t._v(" "),n("inspection-persons-number-card"),t._v(" "),n("telephone-advisory-reports-number-card")],1),t._v(" "),n("v-divider")],1)}),[],!1,null,"30195f26",null);e.default=R.exports;O()(R,{VDivider:S.a,VRow:G})}}]);