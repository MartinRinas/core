import{C as p}from"./ChargePointInstallation-8dff21bc.js";import{_ as s,u as t,k as u,l as m,D as i,N as d,y as l}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-f9fda857.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const _={name:"ChargePointExternalOpenwb",mixins:[p]},c={class:"charge-point-external-openwb"};function g(n,e,b,f,h,w){const r=t("openwb-base-text-input"),a=t("openwb-base-number-input");return u(),m("div",c,[i(r,{title:"IP oder Hostname",subtype:"host",required:"","model-value":n.chargePoint.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=o=>n.updateConfiguration(o,"configuration.ip_address"))},null,8,["model-value"]),i(a,{title:"Ladepunkt-Nummer",required:"",min:1,max:2,"model-value":n.chargePoint.configuration.duo_num+1,"onUpdate:modelValue":e[1]||(e[1]=o=>n.updateConfiguration(o-1,"configuration.duo_num"))},{help:d(()=>e[2]||(e[2]=[l(' Bei einfachen Ladepunkten ist hier immer eine "1" einzutragen. Lediglich bei einer openWB Duo kann mit "2" der zweite enthaltene Ladepunkt angesprochen werden. ')])),_:1},8,["model-value"])])}const $=s(_,[["render",g],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/external_openwb/chargePoint.vue"]]);export{$ as default};
