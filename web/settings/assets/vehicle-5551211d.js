import{_ as l,q as s,k as p,l as m,B as r,M as a,x as u}from"./vendor-b03da118.js";import"./vendor-sortablejs-595f2e06.js";const c={name:"VehicleSocKia",emits:["update:configuration"],props:{vehicleId:{required:!0,type:Number},vehicle:{required:!0,type:Object}},data(){return{}},methods:{updateConfiguration(d,e=void 0){this.$emit("update:configuration",{value:d,object:e})}}},v={class:"vehicle-soc-kia"};function f(d,e,t,g,_,i){const o=s("openwb-base-text-input");return p(),m("div",v,[r(o,{title:"Benutzername",required:"",subtype:"user","model-value":t.vehicle.configuration.user_id,"onUpdate:modelValue":e[0]||(e[0]=n=>i.updateConfiguration(n,"configuration.user_id"))},{help:a(()=>[u(" Der Benutzername für die Anmeldung an den Servern. ")]),_:1},8,["model-value"]),r(o,{title:"Kennwort",required:"",subtype:"password","model-value":t.vehicle.configuration.password,"onUpdate:modelValue":e[1]||(e[1]=n=>i.updateConfiguration(n,"configuration.password"))},{help:a(()=>[u(" Das Passwort für die Anmeldung an den Servern. ")]),_:1},8,["model-value"]),r(o,{title:"PIN",required:"",subtype:"password","model-value":t.vehicle.configuration.pin,"onUpdate:modelValue":e[2]||(e[2]=n=>i.updateConfiguration(n,"configuration.pin"))},{help:a(()=>[u(" Die PIN für die Anmeldung an den Servern. ")]),_:1},8,["model-value"]),r(o,{title:"VIN",required:"","model-value":t.vehicle.configuration.vin,"onUpdate:modelValue":e[3]||(e[3]=n=>i.updateConfiguration(n,"configuration.vin"))},{help:a(()=>[u(" Die Fahrgestellnummer des Fahrzeugs. ")]),_:1},8,["model-value"])])}const w=l(c,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/kia/vehicle.vue"]]);export{w as default};
