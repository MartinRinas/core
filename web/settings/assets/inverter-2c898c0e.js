import{C as d}from"./HardwareInstallation-70f156e6.js";import{_ as m,u as r,k as u,l as c,D as n,N as i,y as o,x as l}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-f9fda857.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const v={name:"DeviceDiscovergyInverter",mixins:[d]},f={class:"device-discovergy-inverter"};function g(t,e,_,b,w,x){const s=r("openwb-base-heading"),a=r("openwb-base-text-input");return u(),c("div",f,[n(s,null,{default:i(()=>e[1]||(e[1]=[o(" Einstellungen für Discovergy Wechselrichter ")])),_:1}),n(a,{title:"Meter-ID",required:"","model-value":t.component.configuration.meter_id,"onUpdate:modelValue":e[0]||(e[0]=p=>t.updateConfiguration(p,"configuration.meter_id"))},{help:i(()=>e[2]||(e[2]=[o(" Um die ID herauszufinden mit dem Browser die Adresse "),l("a",{href:"https://api.discovergy.com/public/v1/meters",target:"_blank",rel:"noopener noreferrer"}," https://api.discovergy.com/public/v1/meters ",-1),o(" aufrufen und dort Benutzername und Passwort eingeben. Hier wird nun u.a. die ID des Zählers angezeigt. ")])),_:1},8,["model-value"])])}const $=m(v,[["render",g],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/discovergy/discovergy/inverter.vue"]]);export{$ as default};
