import{_ as c,q as n,k as p,l as d,B as o,M as a,x as s,u,y as l}from"./vendor-b03da118.js";import"./vendor-sortablejs-595f2e06.js";const _={name:"DeviceBatterXBat",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},b={class:"device-batterx-bat"},f={class:"small"};function m(e,t,g,h,v,B){const i=n("openwb-base-heading"),r=n("openwb-base-alert");return p(),d("div",b,[o(i,null,{default:a(()=>[s(" Einstellungen für BatterX Batteriespeicher "),u("span",f,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(r,{subtype:"info"},{default:a(()=>[s(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const $=c(_,[["render",m],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/batterx/bat.vue"]]);export{$ as default};
