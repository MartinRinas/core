import{_ as d,p as t,k as p,l as c,A as n,L as l,u as _,q as f,x as m}from"./vendor-59c39d33.js";import"./vendor-sortablejs-1a35b5ad.js";const b={name:"DevicePowerdogCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(o,e=void 0){this.$emit("update:configuration",{value:o,object:e})}}},g={class:"device-powerdog-counter"},v={class:"small"};function w(o,e,u,h,x,a){const i=t("openwb-base-heading"),s=t("openwb-base-button-group-input");return p(),c("div",g,[n(i,null,{default:l(()=>[_(" Einstellungen für Powerdog Zähler "),f("span",v,"(Modul: "+m(o.$options.name)+")",1)]),_:1}),n(s,{title:"Einbau-Position",buttons:[{buttonValue:!1,text:"Hausverbrauch"},{buttonValue:!0,text:"EVU-Punkt"}],"model-value":u.configuration.position_evu,"onUpdate:modelValue":e[0]||(e[0]=r=>a.updateConfiguration(r,"configuration.position_evu"))},null,8,["model-value"])])}const k=d(b,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/powerdog/counter.vue"]]);export{k as default};
