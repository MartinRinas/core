import{C as s}from"./HardwareInstallation-70f156e6.js";import{_ as a,u as t,k as m,l,D as i,N as d,y as c}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-f9fda857.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const b={name:"DeviceVictronInverter",mixins:[s]},_={class:"device-victron-inverter"};function f(o,e,v,g,w,V){const r=t("openwb-base-heading"),p=t("openwb-base-number-input"),u=t("openwb-base-button-group-input");return m(),l("div",_,[i(r,null,{default:d(()=>e[2]||(e[2]=[c(" Einstellungen für Victron Wechselrichter ")])),_:1}),i(p,{title:"Modbus ID",required:"","model-value":o.component.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=n=>o.updateConfiguration(n,"configuration.modbus_id"))},null,8,["model-value"]),i(u,{title:"MPPT",buttons:[{buttonValue:!1,text:"Nein"},{buttonValue:!0,text:"Ja"}],"model-value":o.component.configuration.mppt,"onUpdate:modelValue":e[1]||(e[1]=n=>o.updateConfiguration(n,"configuration.mppt"))},null,8,["model-value"])])}const I=a(b,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/victron/victron/inverter.vue"]]);export{I as default};
