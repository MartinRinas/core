import{C as r}from"./HardwareInstallation-70f156e6.js";import{_ as m,u as t,k as p,l,D as n,N as u,y as d}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-f9fda857.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceSolarmaxBat",mixins:[r]},b={class:"device-solarmax-bat"};function _(o,e,f,x,v,g){const a=t("openwb-base-alert"),s=t("openwb-base-number-input");return p(),l("div",b,[n(a,{subtype:"info"},{default:u(()=>e[1]||(e[1]=[d(" Solarmax MAX.STORAGE / MAX.STORAGE Ultimate Batteriespeicher sind Teil eines Hybridsystems. Daher muss auch eine Komponente Wechselrichter angelegt werden. ")])),_:1}),n(s,{title:"Modbus ID",required:"","model-value":o.component.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=i=>o.updateConfiguration(i,"configuration.modbus_id"))},null,8,["model-value"])])}const T=m(c,[["render",_],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solarmax/solarmax/bat.vue"]]);export{T as default};
