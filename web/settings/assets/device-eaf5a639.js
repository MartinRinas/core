import{_ as r,q as n,k as d,l as p,B as o,M as s,x as a,u,y as l}from"./vendor-b03da118.js";import"./vendor-sortablejs-595f2e06.js";const _={name:"DeviceSmaHm",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},m={class:"device-smahm"},f={class:"small"};function b(e,t,g,v,h,w){const i=n("openwb-base-heading"),c=n("openwb-base-alert");return d(),p("div",m,[o(i,null,{default:s(()=>[a(" Einstellungen für SMA Home Manager / Energy Meter "),u("span",f,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(c,{subtype:"info"},{default:s(()=>[a(" Dieses Gerät benötigt keine Einstellungen. ")]),_:1})])}const y=r(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sma_shm/device.vue"]]);export{y as default};