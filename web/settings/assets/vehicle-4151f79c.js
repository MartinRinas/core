import{_ as l,q as s,k as p,l as c,B as r,M as a,x as u}from"./vendor-b03da118.js";import"./vendor-sortablejs-595f2e06.js";const m={name:"VehicleSocVwid",emits:["update:configuration"],props:{vehicleId:{required:!0,type:Number},vehicle:{required:!0,type:Object}},data(){return{}},methods:{updateConfiguration(d,e=void 0){this.$emit("update:configuration",{value:d,object:e})}}},v={class:"vehicle-soc-vwid"};function f(d,e,n,g,_,o){const i=s("openwb-base-text-input");return p(),c("div",v,[r(i,{title:"Benutzername",required:"",subtype:"user","model-value":n.vehicle.configuration.user_id,"onUpdate:modelValue":e[0]||(e[0]=t=>o.updateConfiguration(t,"configuration.user_id"))},{help:a(()=>[u(" Der Benutzername für die Anmeldung an den VW-Servern. ")]),_:1},8,["model-value"]),r(i,{title:"Kennwort",required:"",subtype:"password","model-value":n.vehicle.configuration.password,"onUpdate:modelValue":e[1]||(e[1]=t=>o.updateConfiguration(t,"configuration.password"))},{help:a(()=>[u(" Das Passwort für die Anmeldung an den VW-Servern. ")]),_:1},8,["model-value"]),r(i,{title:"VIN",required:"","model-value":n.vehicle.configuration.vin,"onUpdate:modelValue":e[2]||(e[2]=t=>o.updateConfiguration(t,"configuration.vin"))},{help:a(()=>[u(" Die Fahrgestellnummer des Fahrzeugs. ")]),_:1},8,["model-value"])])}const b=l(m,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/vwid/vehicle.vue"]]);export{b as default};
