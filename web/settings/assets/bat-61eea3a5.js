import{C as d}from"./HardwareInstallation-70f156e6.js";import{_ as u,u as l,k as p,l as m,D as o,N as a,y as r,x as g}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-f9fda857.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const f={name:"DeviceJsonBat",mixins:[d]},b={class:"device-json-bat"};function w(t,e,v,j,q,_){const s=l("openwb-base-heading"),i=l("openwb-base-text-input");return p(),m("div",b,[o(s,null,{default:a(()=>e[4]||(e[4]=[r(" Einstellungen für JSON Batteriespeicher ")])),_:1}),o(i,{title:"Abfrage für Leistung",subtype:"text",required:"","model-value":t.component.configuration.jq_power,"onUpdate:modelValue":e[0]||(e[0]=n=>t.updateConfiguration(n,"configuration.jq_power"))},{help:a(()=>e[5]||(e[5]=[r(' Zur Analyse der Werte aus dem json-Objekt wird jq benutzt. Ist die Json Antwort z.B. {"PowerInstalledPeak":4655, "PowerProduced":132, "PowerOut":897.08172362555717, "PowerSelfSupplied":234.9182763744428} So muss hier .PowerOut eingetragen werden. '),g("br",null,null,-1),r(" Es wird vom Server eine Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen erwartet, welche die aktuelle Leistung in Watt (positiv Ladung, negativ Entladung) darstellt. ")])),_:1},8,["model-value"]),o(i,{title:"Abfrage für Ladestand",subtype:"text",required:"","model-value":t.component.configuration.jq_soc,"onUpdate:modelValue":e[1]||(e[1]=n=>t.updateConfiguration(n,"configuration.jq_soc"))},null,8,["model-value"]),o(i,{title:"Abfrage für Zählerstand Ladung",subtype:"text","model-value":t.component.configuration.jq_imported,"onUpdate:modelValue":e[2]||(e[2]=n=>t.updateConfiguration(n,"configuration.jq_imported"))},{help:a(()=>e[6]||(e[6]=[r(" Wird dieses Feld leer gelassen, dann werden Zählerstände intern simuliert. ")])),_:1},8,["model-value"]),o(i,{title:"Abfrage für Zählerstand Entladung",subtype:"text","model-value":t.component.configuration.jq_exported,"onUpdate:modelValue":e[3]||(e[3]=n=>t.updateConfiguration(n,"configuration.jq_exported"))},{help:a(()=>e[7]||(e[7]=[r(" Wird dieses Feld leer gelassen, dann werden Zählerstände intern simuliert. ")])),_:1},8,["model-value"])])}const N=u(f,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/generic/json/bat.vue"]]);export{N as default};
