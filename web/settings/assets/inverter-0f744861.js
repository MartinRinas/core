import{C as u}from"./HardwareInstallation-d3cc612f.js";import{_ as l,u as t,k as m,l as c,G as r,E as i,y as n,x as s}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-05d7e447.js";import"./index-d08be5ed.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const f={name:"DevicePowerfoxInverter",mixins:[u]},b={class:"device-powerfox-inverter"};function g(o,e,v,w,x,_){const a=t("openwb-base-heading"),p=t("openwb-base-text-input");return m(),c("div",b,[r(a,null,{default:i(()=>e[1]||(e[1]=[n(" Einstellungen für Powerfox Wechselrichter ")])),_:1}),r(p,{title:"ID",required:"","model-value":o.component.configuration.id,"onUpdate:modelValue":e[0]||(e[0]=d=>o.updateConfiguration(d,"configuration.id"))},{help:i(()=>e[2]||(e[2]=[n(" Um die ID herauszufinden mit dem Browser die Adresse "),s("a",{href:"https://backend.powerfox.energy/api/2.0/my/all/devices",target:"_blank",rel:"noopener noreferrer"}," https://backend.powerfox.energy/api/2.0/my/all/devices ",-1),n(" aufrufen und dort Benutzername und Passwort eingeben. Die DeviceID ist exakt so einzutragen, wie in der Antwort des Servers. Das bedeutet insbesondere auch, die Groß-/Kleinschreibung ist zu beachten! In dem Feld ist nur die Zeichenfolge direkt hinter "),s("span",{class:"font-weight-bold text-monospace",style:{display:"contents"}},' "DeviceID" ',-1),n(" ohne den Doppelpunkt und Anführungszeichen einzutragen. ")])),_:1},8,["model-value"])])}const $=l(f,[["render",g],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/powerfox/powerfox/inverter.vue"]]);export{$ as default};