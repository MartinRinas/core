import{C as m}from"./HardwareInstallation-774805b0.js";import{_ as d,u as o,l as u,m as l,G as t,E as i,y as r}from"./vendor-0c15df0c.js";import"./vendor-fortawesome-231ff303.js";import"./index-6ffbdc7e.js";import"./vendor-bootstrap-83e2d5a1.js";import"./vendor-jquery-84e2bf4a.js";import"./vendor-axios-c9d2afa0.js";import"./vendor-sortablejs-1a751103.js";import"./dynamic-import-helper-be004503.js";const g={name:"DeviceSigenergyInverter",mixins:[m]},_={class:"device-sigenergy-inverter"};function c(n,e,b,f,v,y){const s=o("openwb-base-heading"),p=o("openwb-base-number-input");return u(),l("div",_,[t(s,null,{default:i(()=>e[1]||(e[1]=[r(" Einstellungen für Sigenergy Wechselrichter ")])),_:1}),t(p,{title:"Modbus ID",required:"","model-value":n.component.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=a=>n.updateConfiguration(a,"configuration.modbus_id"))},{help:i(()=>e[2]||(e[2]=[r(" Die Standard-Modbus-ID von Sigenergy ist 247 ")])),_:1},8,["model-value"])])}const M=d(g,[["render",c],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sigenergy/sigenergy/inverter.vue"]]);export{M as default};
