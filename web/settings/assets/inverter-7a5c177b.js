import{_ as c,q as t,k as d,l as p,B as o,M as s,x as a,u,y as l}from"./vendor-b03da118.js";import"./vendor-sortablejs-595f2e06.js";const _={name:"DeviceSonnenbatterieInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,n=void 0){this.$emit("update:configuration",{value:e,object:n})}}},f={class:"device-sonnenbatterie-inverter"},m={class:"small"};function b(e,n,v,g,h,w){const r=t("openwb-base-heading"),i=t("openwb-base-alert");return d(),p("div",f,[o(r,null,{default:s(()=>[a(" Einstellungen für SonnenBatterie Wechselrichter "),u("span",m,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(i,{subtype:"info"},{default:s(()=>[a(" Diese Komponente erfordert keine Einstellungen. ")]),_:1})])}const x=c(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sonnenbatterie/inverter.vue"]]);export{x as default};
