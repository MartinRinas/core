import{D as d}from"./HardwareInstallation-2c646227.js";import{_ as u,u as t,k as c,l as m,G as o,E as s,y as i}from"./vendor-f90150d8.js";import"./vendor-fortawesome-8488187c.js";import"./index-0eaa3ed7.js";import"./vendor-bootstrap-99f0c261.js";import"./vendor-jquery-99ccf6d7.js";import"./vendor-axios-871a0510.js";import"./vendor-sortablejs-cfc19546.js";import"./dynamic-import-helper-be004503.js";const _={name:"DeviceKostalPiko",mixins:[d]},f={class:"device-kostal-piko"};function b(n,e,v,g,k,h){const a=t("openwb-base-heading"),r=t("openwb-base-alert"),p=t("openwb-base-text-input");return c(),m("div",f,[o(a,null,{default:s(()=>e[1]||(e[1]=[i(" Einstellungen für Kostal Piko ")])),_:1}),o(r,{subtype:"info"},{default:s(()=>e[2]||(e[2]=[i(" Der Wechselrichter liefert Werte nur, solange er auch PV-Leistung liefert. Nachts geht er in den Standby. Die Hausanschlussüberwachung ist nur aktiv, wenn der Wechselrichter auch aktiv ist. ")])),_:1}),o(p,{title:"IP oder Hostname",subtype:"host",required:"","model-value":n.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=l=>n.updateConfiguration(l,"configuration.ip_address"))},null,8,["model-value"])])}const B=u(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/kostal/kostal_piko/device.vue"]]);export{B as default};