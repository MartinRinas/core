import{D as a}from"./HardwareInstallation-4a6cfb78.js";import{_ as p,u as t,k as l,l as d,G as n,E as m,y as u}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-05d7e447.js";import"./index-2ffdea6f.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const _={name:"DeviceSolarLog",mixins:[a]},c={class:"device-solar_log"};function f(o,e,g,v,b,x){const i=t("openwb-base-heading"),s=t("openwb-base-text-input");return l(),d("div",c,[n(i,null,{default:m(()=>e[1]||(e[1]=[u(" Einstellungen für Solar-Log ")])),_:1}),n(s,{title:"IP oder Hostname",subtype:"host",required:"","model-value":o.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=r=>o.updateConfiguration(r,"configuration.ip_address"))},null,8,["model-value"])])}const y=p(_,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solar_log/solar_log/device.vue"]]);export{y as default};