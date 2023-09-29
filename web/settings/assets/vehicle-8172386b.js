import{_ as c,p as r,k as p,l as g,A as n,L as i,u as o,q as f,x as _}from"./vendor-59c39d33.js";import"./vendor-sortablejs-1a35b5ad.js";const m={name:"VehicleSocTronity",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},vehicleId:{required:!0}},data(){return{}},methods:{updateConfiguration(a,e=void 0){this.$emit("update:configuration",{value:a,object:e})}}},b={class:"vehicle-soc-http"},h={class:"small"};function v(a,e,l,C,y,s){const d=r("openwb-base-heading"),u=r("openwb-base-text-input");return p(),g("div",b,[n(d,null,{default:i(()=>[o(" Einstellungen für Tronity SoC "),f("span",h,"(Modul: "+_(a.$options.name)+")",1)]),_:1}),n(u,{title:"Vehicle ID",subtype:"text",required:"","model-value":l.configuration.vehicle_id,"onUpdate:modelValue":e[0]||(e[0]=t=>s.updateConfiguration(t,"configuration.vehicle_id"))},{help:i(()=>[o(" Vehicle ID aus Tronity angeben. Diese ist in den Assigned Vehicles zu finden. ")]),_:1},8,["model-value"]),n(u,{title:"Client ID",subtype:"text","model-value":l.configuration.client_id,"onUpdate:modelValue":e[1]||(e[1]=t=>s.updateConfiguration(t,"configuration.client_id"))},{help:i(()=>[o(" Client ID aus Tronity angeben. Diese ist in den Application Settings zu finden. ")]),_:1},8,["model-value"]),n(u,{title:"Client Secret",subtype:"password","model-value":l.configuration.client_secret,"onUpdate:modelValue":e[2]||(e[2]=t=>s.updateConfiguration(t,"configuration.client_secret"))},{help:i(()=>[o(" Client Secret aus Tronity angeben. Diese ist in den Application Settings zu finden. Das Client Secret kann nur einmalig abgerufen werden. Ggf. neu erzeugen, womit frühere Client Secrets ungültig werden. ")]),_:1},8,["model-value"])])}const x=c(m,[["render",v],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/tronity/vehicle.vue"]]);export{x as default};
