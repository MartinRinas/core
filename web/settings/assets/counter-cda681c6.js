import{C as d}from"./HardwareInstallation-70f156e6.js";import{_ as u,u as n,k as m,l as c,D as r,N as i,y as o,x as l}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-f9fda857.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const f={name:"DeviceDiscovergyCounter",mixins:[d]},g={class:"device-discovergy-counter"};function _(t,e,v,b,w,x){const s=n("openwb-base-heading"),a=n("openwb-base-text-input");return m(),c("div",g,[r(s,null,{default:i(()=>e[1]||(e[1]=[o(" Einstellungen für Discovergy Zähler ")])),_:1}),r(a,{title:"Meter-ID",required:"","model-value":t.component.configuration.meter_id,"onUpdate:modelValue":e[0]||(e[0]=p=>t.updateConfiguration(p,"configuration.meter_id"))},{help:i(()=>e[2]||(e[2]=[o(" Um die ID herauszufinden mit dem Browser die Adresse "),l("a",{href:"https://api.discovergy.com/public/v1/meters",target:"_blank",rel:"noopener noreferrer"}," https://api.discovergy.com/public/v1/meters ",-1),o(" aufrufen und dort Benutzername und Passwort eingeben. Hier wird nun u.a. die ID des Zählers angezeigt. ")])),_:1},8,["model-value"])])}const z=u(f,[["render",_],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/discovergy/discovergy/counter.vue"]]);export{z as default};
