import{a as i}from"./ChargePointInstallation-8dff21bc.js";import{_ as r,u as p,k as d,l as c,D as u,N as m,y as l}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-f9fda857.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const g={name:"ChargePointCommandsOpenwbPro",mixins:[i],methods:{async triggerUpdate(){let t=new FormData;t.append("command","update"),t.append("data",'{"ip_address":"'+this.chargePoint.configuration.ip_address+'"}');const o="Die Aktualisierung der openWB Pro wird gestartet...";this.$root.postClientMessage(o,"info"),console.debug(location),this.axios.post(location.protocol+"//"+location.host+"/openWB/web/settings/modules/charge_points/openwb_pro/commands.php",t,{timeout:5e3}).then(()=>{const e="Die Aktualisierung der openWB Pro wurde erfolgreich gestartet.";this.$root.postClientMessage(e,"success")}).catch(e=>{var s="Aktualisierung fehlgeschlagen!<br />";e.response?(console.error(e.response.status,e.response.data),s+=e.response.status+": "+e.response.data):e.request?(console.error(e.request),s+="Es wurde keine Antwort vom Server empfangen."):(console.error("Error",e.message),s+="Es ist ein unbekannter Fehler aufgetreten."),this.$root.postClientMessage(s,"danger")})}}},h={class:"charge-point-commands-openwb-pro"};function _(t,o,e,s,f,n){const a=p("openwb-base-button-input");return d(),c("div",h,[u(a,{title:"Ladepunkt aktualisieren","button-text":"Update anfordern",subtype:"success",disabled:t.chargePoint.configuration.ip_address==null,onButtonClicked:n.triggerUpdate},{help:m(()=>o[0]||(o[0]=[l(" Mit diesem Befehl können Sie die Aktualisierung der openWB Pro anstoßen. Bitte beachten Sie, dass kein Fahrzeug angesteckt ist. ")])),_:1},8,["disabled","onButtonClicked"])])}const $=r(g,[["render",_],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/openwb_pro/commands.vue"]]);export{$ as default};
