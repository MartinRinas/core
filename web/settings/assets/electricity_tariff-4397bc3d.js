import{_ as o,q as c,k as s,l,B as u,M as d,x as f}from"./vendor-b03da118.js";import"./vendor-sortablejs-595f2e06.js";const p={name:"ElectricityTariffAwattar",emits:["update:configuration"],props:{electricityTariff:{type:Object,required:!0}},data(){return{}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},_={class:"electricity-tariff-awattar"};function m(t,e,a,b,w,r){const i=c("openwb-base-select-input");return s(),l("div",_,[u(i,{title:"Land",notSelected:"Bitte auswählen",options:[{value:"de",text:"Deutschland"},{value:"at",text:"Österreich"}],"model-value":a.electricityTariff.configuration.country,"onUpdate:modelValue":e[0]||(e[0]=n=>r.updateConfiguration(n,"configuration.country"))},{help:d(()=>[f(" Es werden die abgefragten Börsenpreise verwendet, die aWATTar bereitstellt. aWATTar-Gebühren oder Steuern werden nicht berücksichtigt. ")]),_:1},8,["model-value"])])}const v=o(p,[["render",m],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/electricity_tariffs/awattar/electricity_tariff.vue"]]);export{v as default};
