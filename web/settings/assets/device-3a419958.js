import{D as u}from"./HardwareInstallation-237f4420.js";import{_ as p,u as r,k as d,l as m,G as i,E as s,y as l}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-05d7e447.js";import"./index-90e11756.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const f={name:"DeviceKostalPikoOld",mixins:[u]},v={class:"device-kostal-piko-old"};function c(o,e,g,b,k,w){const a=r("openwb-base-heading"),n=r("openwb-base-text-input");return d(),m("div",v,[i(a,null,{default:s(()=>e[3]||(e[3]=[l(" Einstellungen für Kostal Piko (alte Generation) ")])),_:1}),i(n,{title:"URL",subtype:"url",required:"","model-value":o.device.configuration.url,"onUpdate:modelValue":e[0]||(e[0]=t=>o.updateConfiguration(t,"configuration.url"))},{help:s(()=>e[4]||(e[4]=[l(' Es wird eine komplette URL inklusive Protokoll erwartet. Normalerweise ist der Wechselrichter über "http://IP" zu erreichen. ')])),_:1},8,["model-value"]),i(n,{title:"Benutzername",subtype:"user",required:"","model-value":o.device.configuration.user,"onUpdate:modelValue":e[1]||(e[1]=t=>o.updateConfiguration(t,"configuration.user"))},null,8,["model-value"]),i(n,{title:"Passwort",subtype:"password",required:"","model-value":o.device.configuration.password,"onUpdate:modelValue":e[2]||(e[2]=t=>o.updateConfiguration(t,"configuration.password"))},null,8,["model-value"])])}const q=p(f,[["render",c],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/kostal/kostal_piko_old/device.vue"]]);export{q as default};