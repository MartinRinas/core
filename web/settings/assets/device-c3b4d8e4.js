import{D as u}from"./HardwareInstallation-70f156e6.js";import{_ as l,u as i,k as p,l as d,D as t,N as m,y as v}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-f9fda857.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const f={name:"DeviceSolarView",mixins:[u]},_={class:"device-solar-view"};function c(o,e,b,g,w,V){const a=i("openwb-base-heading"),s=i("openwb-base-text-input"),r=i("openwb-base-number-input");return p(),d("div",_,[t(a,null,{default:m(()=>e[3]||(e[3]=[v(" Einstellungen für SolarView ")])),_:1}),t(s,{title:"IP oder Hostname",subtype:"host",required:"","model-value":o.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=n=>o.updateConfiguration(n,"configuration.ip_address"))},null,8,["model-value"]),t(r,{title:"Port",required:"",min:1,max:65535,"model-value":o.device.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=n=>o.updateConfiguration(n,"configuration.port"))},null,8,["model-value"]),t(r,{title:"Timeout",required:"","model-value":o.device.configuration.timeout,"onUpdate:modelValue":e[2]||(e[2]=n=>o.updateConfiguration(n,"configuration.timeout"))},null,8,["model-value"])])}const y=l(f,[["render",c],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solar_view/solar_view/device.vue"]]);export{y as default};
