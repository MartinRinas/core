import{l as H,d as G,a0 as Q,A as X,a1 as Y,a2 as K,K as ee,a3 as te,F as ne,I as ae}from"./vendor-fortawesome-994bfc1e.js";import{_ as B,C as oe}from"./index-22e7bacc.js";import{_ as E}from"./dynamic-import-helper-be004503.js";import{_ as x,q as c,k as l,l as g,z as k,M as o,x as i,y as v,B as n,u as p,a1 as D,a2 as M,I as S,J as I,A as _,p as F,a3 as O,O as ie,R as le,S as se}from"./vendor-d624aab7.js";import"./vendor-bootstrap-f73ddddf.js";import"./vendor-jquery-b0321e08.js";import"./vendor-axios-e5457936.js";import"./vendor-sortablejs-c0fcb1ea.js";const re={name:"ChargePointConfigFallback",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},chargePointId:{default:void 0},chargePointType:String},methods:{updateConfiguration(e,a=void 0){this.$emit("update:configuration",{value:e,object:a})}}},ue={class:"device-fallback"},de={key:1};function pe(e,a,u,P,m,d){const C=c("openwb-base-alert"),f=c("openwb-base-textarea");return l(),g("div",ue,[Object.keys(u.configuration).length==0?(l(),k(C,{key:0,subtype:"info"},{default:o(()=>[i(' Der Ladepunkt-Typ "'+v(u.chargePointType)+'" bietet keine Einstellungen. ',1)]),_:1})):(l(),g("div",de,[n(C,{subtype:"warning"},{default:o(()=>[i(' Es wurde keine Konfigurationsseite für den Ladepunkt-Typ "'+v(u.chargePointType)+'" gefunden. Die Einstellungen können als JSON direkt bearbeitet werden. ',1)]),_:1}),n(f,{title:"Konfiguration",subtype:"json","model-value":u.configuration,"onUpdate:modelValue":a[0]||(a[0]=L=>d.updateConfiguration(L,"configuration"))},{help:o(()=>[i(" Bitte prüfen Sie, ob die Eingaben richtig interpretiert werden. ")]),_:1},8,["model-value"]),n(C,{subtype:"info"},{default:o(()=>[p("pre",null,v(JSON.stringify(u.configuration,void 0,2)),1)]),_:1})]))])}const me=x(re,[["render",pe],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/OpenwbChargePointConfigFallback.vue"]]),ce={name:"ChargePointCommandsFallback",props:{configuration:{type:Object,required:!0},chargePointId:{default:void 0},chargePointType:String}},ge={class:"charge-point-commands-fallback"};function he(e,a,u,P,m,d){const C=c("openwb-base-alert");return l(),g("div",ge,[n(C,{subtype:"secondary"},{default:o(()=>[i(' Der Ladepunkt-Typ "'+v(u.chargePointType)+'" bietet keine Befehle an. ',1)]),_:1})])}const fe=x(ce,[["render",he],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/OpenwbChargePointCommandsFallback.vue"]]),be={name:"OpenwbChargePointProxy",emits:["update:configuration"],props:{chargePointId:{required:!0},chargePointType:{type:String,required:!0},configuration:{type:Object,required:!0},moduleName:{type:String,required:!1,default:void 0}},computed:{myChargePointSettingsComponent(){return console.debug(`loading charge point settings: ${this.chargePointType}`),D({loader:()=>E(Object.assign({"./external_openwb/chargePoint.vue":()=>B(()=>import("./chargePoint-1ef07072.js"),["assets/chargePoint-1ef07072.js","assets/vendor-d624aab7.js","assets/vendor-sortablejs-c0fcb1ea.js","assets/vendor-aab9f734.css"]),"./internal_openwb/chargePoint.vue":()=>B(()=>import("./chargePoint-0b9f9c90.js"),["assets/chargePoint-0b9f9c90.js","assets/vendor-d624aab7.js","assets/vendor-sortablejs-c0fcb1ea.js","assets/vendor-aab9f734.css"]),"./mqtt/chargePoint.vue":()=>B(()=>import("./chargePoint-50edf03b.js"),["assets/chargePoint-50edf03b.js","assets/vendor-d624aab7.js","assets/vendor-sortablejs-c0fcb1ea.js","assets/vendor-aab9f734.css"]),"./openwb_pro/chargePoint.vue":()=>B(()=>import("./chargePoint-27dcccca.js"),["assets/chargePoint-27dcccca.js","assets/vendor-d624aab7.js","assets/vendor-sortablejs-c0fcb1ea.js","assets/vendor-aab9f734.css"]),"./openwb_series2_satellit/chargePoint.vue":()=>B(()=>import("./chargePoint-0566cc01.js"),["assets/chargePoint-0566cc01.js","assets/vendor-d624aab7.js","assets/vendor-sortablejs-c0fcb1ea.js","assets/vendor-aab9f734.css"]),"./smartwb/chargePoint.vue":()=>B(()=>import("./chargePoint-e717ad09.js"),["assets/chargePoint-e717ad09.js","assets/vendor-d624aab7.js","assets/vendor-sortablejs-c0fcb1ea.js","assets/vendor-aab9f734.css"])}),`./${this.chargePointType}/chargePoint.vue`),errorComponent:me})},myChargePointCommandsComponent(){return console.debug(`loading charge point commands: ${this.chargePointType}`),D({loader:()=>E(Object.assign({"./openwb_pro/commands.vue":()=>B(()=>import("./commands-b16cfbca.js"),["assets/commands-b16cfbca.js","assets/vendor-d624aab7.js","assets/vendor-sortablejs-c0fcb1ea.js","assets/vendor-aab9f734.css"])}),`./${this.chargePointType}/commands.vue`),errorComponent:fe})}},methods:{updateConfiguration(e){this.$emit("update:configuration",e)}}},_e=p("hr",null,null,-1);function we(e,a,u,P,m,d){const C=c("openwb-base-heading");return l(),g(S,null,[n(C,null,{default:o(()=>[i(" Einstellungen für Ladepunkt "+v(u.moduleName),1)]),_:1}),(l(),k(M(d.myChargePointSettingsComponent),{configuration:u.configuration,chargePointId:u.chargePointId,chargePointType:u.chargePointType,"onUpdate:configuration":a[0]||(a[0]=f=>d.updateConfiguration(f))},null,40,["configuration","chargePointId","chargePointType"])),_e,n(C,null,{default:o(()=>[i(" Befehle für Ladepunkt "+v(u.moduleName),1)]),_:1}),(l(),k(M(d.myChargePointCommandsComponent),{configuration:u.configuration,chargePointId:u.chargePointId,chargePointType:u.chargePointType},null,8,["configuration","chargePointId","chargePointType"]))],64)}const ke=x(be,[["render",we],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/OpenwbChargePointProxy.vue"]]);H.add(G,Q,X,Y,K,ee,te);const ve={name:"OpenwbChargePointInstallation",mixins:[oe],emits:["sendCommand"],components:{FontAwesomeIcon:ne,FontAwesomeLayers:ae,OpenwbChargePointProxy:ke},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/optional/rfid/active","openWB/chargepoint/+/config","openWB/chargepoint/template/+","openWB/chargepoint/template/+/autolock/+","openWB/system/configurable/chargepoints","openWB/system/configurable/chargepoints_internal"],chargePointToAdd:void 0,showChargePointModal:!1,modalChargePointIndex:void 0,showChargePointTemplateModal:!1,modalChargePointTemplateIndex:void 0,showChargePointTemplateAutolockPlanModal:!1,modalChargePointTemplateAutolockPlanIndex:void 0}},computed:{installedChargePoints:{get(){let e=this.getWildcardTopics("openWB/chargepoint/+/config"),a={};for(const[u,P]of Object.entries(e))(P.type==="internal_openwb"||this.$store.state.mqtt["openWB/general/extern"]===!1)&&(a[u]=P);return a}},chargePointTemplates:{get(){return this.getWildcardTopics("openWB/chargepoint/template/+")}},chargePointTemplateList:{get(){let e=[];return Object.keys(this.chargePointTemplates).forEach(a=>{let u=parseInt(a.match(/([0-9]+)/g)[0]),P=this.$store.state.mqtt["openWB/chargepoint/template/"+u].name;e.push({value:u,text:P})}),e}}},methods:{addChargePoint(e){e.stopPropagation(),this.$emit("sendCommand",{command:"addChargepoint",data:{type:this.chargePointToAdd}})},removeChargePointModal(e,a){a.stopPropagation(),this.modalChargePointIndex=parseInt(e.match(/(?:\/)(\d+)(?=\/)/)[1]),this.showChargePointModal=!0},removeChargePoint(e,a){this.showChargePointModal=!1,a=="confirm"&&(console.debug("request removal of charge point '"+e+"'"),this.$emit("sendCommand",{command:"removeChargepoint",data:{id:e}}))},getChargePointList(){return this.$store.state.mqtt["openWB/general/extern"]===!1?this.$store.state.mqtt["openWB/system/configurable/chargepoints"]:this.$store.state.mqtt["openWB/system/configurable/chargepoints_internal"]},getChargePointName(e){return this.$store.state.mqtt["openWB/chargepoint/"+e+"/config"]?this.$store.state.mqtt["openWB/chargepoint/"+e+"/config"].name:"Ladepunkt "+e},getChargePointTemplateName(e){return this.$store.state.mqtt["openWB/chargepoint/template/"+e]?this.$store.state.mqtt["openWB/chargepoint/template/"+e].name:"Profil "+e},addChargePointTemplate(e){e.stopPropagation(),this.$emit("sendCommand",{command:"addChargepointTemplate",data:{}})},getChargePointTemplateIndex(e){return parseInt(e.match(/([^/]+)$/)[0])},removeChargePointTemplateModal(e,a){a.stopPropagation(),this.modalChargePointTemplateIndex=this.getChargePointTemplateIndex(e),this.showChargePointTemplateModal=!0},removeChargePointTemplate(e,a){this.showChargePointTemplateModal=!1,a=="confirm"&&(console.debug("request removal of chargePoint template '"+e+"'"),this.$emit("sendCommand",{command:"removeChargepointTemplate",data:{id:e}}))},addChargePointTemplateAutolockPlan(e,a){a.stopPropagation(),console.info("requesting new charge point template autolock plan...");let u=this.getChargePointTemplateIndex(e);this.$emit("sendCommand",{command:"addAutolockPlan",data:{template:u}})},removeChargePointTemplateAutolockPlanModal(e,a,u){u.stopPropagation(),this.modalChargePointTemplateIndex=this.getChargePointTemplateIndex(e),this.modalChargePointTemplateAutolockPlanIndex=parseInt(a.match(/([^/]+)$/)[0]),this.showChargePointTemplateAutolockPlanModal=!0},removeChargePointTemplateAutolockPlan(e,a,u){this.showChargePointTemplateAutolockPlanModal=!1,u=="confirm"&&(console.debug("request removal of chargePoint template '"+e+"' autolock plan '"+a+"'"),this.$emit("sendCommand",{command:"removeAutolockPlan",data:{template:e,plan:a}}))},getChargePointTemplateAutolockPlanName(e,a){return this.$store.state.mqtt["openWB/chargepoint/template/"+e+"/autolock/"+a]?this.$store.state.mqtt["openWB/chargepoint/template/"+e+"/autolock/"+a].name:"Autolock Zeitplan "+e+"/"+a},getChargePointTemplateAutolockPlans(e){let a=this.getChargePointTemplateIndex(e);return this.getWildcardTopics("openWB/chargepoint/template/"+a+"/autolock/+")},updateConfiguration(e,a){console.debug("updateConfiguration",e,a),this.updateState(e,a.value,a.object)}}},w=e=>(le("data-v-75fe5743"),e=e(),se(),e),Ce={class:"chargePointInstallation"},ye={name:"chargePointInstallationForm"},Pe={key:0},Ve=w(()=>p("hr",null,null,-1)),Le={key:1},Be=w(()=>p("hr",null,null,-1)),Te=w(()=>p("br",null,null,-1)),We=w(()=>p("br",null,null,-1)),Se=w(()=>p("br",null,null,-1)),Ae=w(()=>p("br",null,null,-1)),Ie={key:0},xe={class:"col-1"},Ue=w(()=>p("br",null,null,-1)),qe=w(()=>p("ul",null,[p("li",null," Interne openWB - wenn diese openWB über einen verbauten Ladepunkt mit Regelcontroller verfügt (z.B. Standard(+), Custom, Duo, Buchse, NICHT Standalone); ansonsten immer anlegen, egal ob diese openWB steuert = primary oder ferngesteuert wird = secondary "),p("li",null," Externe openWB - wenn diese openWB (primary) die Fernsteuerung von externen openWB (secondary) übernimmt "),p("li",null," MQTT-Ladepunkt - nur zur Nutzung des openWB-Simulators zugelassen "),p("li",null," openWB Pro - wenn diese openWB (primary) die Fernsteuerung einer openWB Pro (secondary) übernimmt "),p("li",null," openWB series2 Satellit/Satellit Duo - wenn diese openWB (primary) die Fernsteuerung einer openWB series2 Satellit/Satellit Duo (secondary) übernimmt "),p("li",null," smartWB/EVSE-Wifi - wenn diese openWB (primary) die Fernsteuerung einer smartWB/EVSE-Wifi übernimmt ")],-1)),ze=w(()=>p("hr",{class:"border-secondary"},null,-1)),Ee={key:0},De={key:1},Me=w(()=>p("hr",null,null,-1)),Fe=w(()=>p("hr",null,null,-1)),Oe=w(()=>p("br",null,null,-1)),Ne=w(()=>p("br",null,null,-1)),Re=w(()=>p("a",{href:"https://github.com/openWB/core/wiki/Lastmanagement-und-kaskadierte-Z%C3%A4hler",target:"_blank",rel:"noopener noreferrer"},"Wiki zum Lastmanagement",-1)),je=w(()=>p("hr",null,null,-1)),Ze=["onClick"],$e={key:0},Je={key:1},He={key:2},Ge={key:2};function Qe(e,a,u,P,m,d){const C=c("openwb-base-modal-dialog"),f=c("font-awesome-icon"),L=c("openwb-base-avatar"),V=c("openwb-base-text-input"),U=c("openwb-base-select-input"),N=c("openwb-charge-point-proxy"),T=c("openwb-base-heading"),y=c("openwb-base-button-group-input"),A=c("openwb-base-card"),R=c("openwb-base-click-button"),j=c("font-awesome-layers"),q=c("openwb-base-alert"),Z=c("openwb-base-array-input"),z=c("openwb-base-range-input"),$=c("openwb-base-submit-buttons");return l(),g(S,null,[n(C,{show:m.showChargePointModal,title:"Ladepunkt löschen",subtype:"danger",buttons:[{text:"Löschen",event:"confirm",subtype:"danger"}],onModalResult:a[0]||(a[0]=s=>d.removeChargePoint(m.modalChargePointIndex,s))},{default:o(()=>[i(' Wollen Sie den Ladepunkt "'+v(d.getChargePointName(m.modalChargePointIndex))+'" (ID: '+v(m.modalChargePointIndex)+") wirklich entfernen? Dieser Vorgang kann nicht rückgängig gemacht werden! ",1)]),_:1},8,["show"]),n(C,{show:m.showChargePointTemplateModal,title:"Ladepunkt-Profil löschen",subtype:"danger",buttons:[{text:"Löschen",event:"confirm",subtype:"danger"}],onModalResult:a[1]||(a[1]=s=>d.removeChargePointTemplate(m.modalChargePointTemplateIndex,s))},{default:o(()=>[i(' Wollen Sie das Ladepunkt-Profil "'+v(d.getChargePointTemplateName(m.modalChargePointTemplateIndex))+'" (ID: '+v(m.modalChargePointTemplateIndex)+") wirklich entfernen? Dieser Vorgang kann nicht rückgängig gemacht werden! ",1)]),_:1},8,["show"]),n(C,{show:m.showChargePointTemplateAutolockPlanModal,title:"Autolock Zeitplan löschen",subtype:"danger",buttons:[{text:"Löschen",event:"confirm",subtype:"danger"}],onModalResult:a[2]||(a[2]=s=>d.removeChargePointTemplateAutolockPlan(m.modalChargePointTemplateIndex,m.modalChargePointTemplateAutolockPlanIndex,s))},{default:o(()=>[i(' Wollen Sie den Autolock Zeitplan "'+v(d.getChargePointTemplateAutolockPlanName(m.modalChargePointTemplateIndex,m.modalChargePointTemplateAutolockPlanIndex))+'" wirklich entfernen? Dieser Vorgang kann nicht rückgängig gemacht werden! ',1)]),_:1},8,["show"]),p("div",Ce,[p("form",ye,[n(A,{title:"Ladepunkte",subtype:"primary",collapsible:!0,collapsed:!0},{header:o(()=>[n(f,{"fixed-width":"",icon:["fas","charging-station"]}),i(" Ladepunkte ")]),default:o(()=>[(l(!0),g(S,null,I(d.installedChargePoints,(s,r)=>(l(),k(A,{key:r,title:s.name+" (ID: "+s.id+")",collapsible:!0,collapsed:!0,subtype:"primary"},{actions:o(t=>[t.collapsed?_("",!0):(l(),k(L,{key:0,class:"bg-danger clickable",onClick:b=>d.removeChargePointModal(r,b)},{default:o(()=>[n(f,{"fixed-width":"",icon:["fas","trash"]})]),_:2},1032,["onClick"]))]),default:o(()=>[n(V,{title:"Bezeichnung",subtype:"text","model-value":s.name,"onUpdate:modelValue":t=>e.updateState(r,t,"name")},null,8,["model-value","onUpdate:modelValue"]),n(V,{title:"Modul",subtype:"text",disabled:"",readonly:"","model-value":e.$store.state.mqtt[r].type},null,8,["model-value"]),s.type!=="internal_openwb"||e.$store.state.mqtt["openWB/general/extern"]===!1?(l(),g("span",Pe,[n(U,{title:"Ladepunkt-Profil",options:d.chargePointTemplateList,"model-value":e.$store.state.mqtt[r].template,"onUpdate:modelValue":t=>e.updateState(r,t,"template")},null,8,["options","model-value","onUpdate:modelValue"])])):_("",!0),Ve,n(N,{chargePointId:s.id,chargePointType:e.$store.state.mqtt[r].type,moduleName:e.$store.state.mqtt[r].name,configuration:s.configuration,"onUpdate:configuration":t=>d.updateConfiguration(r,t)},null,8,["chargePointId","chargePointType","moduleName","configuration","onUpdate:configuration"]),s.type!=="internal_openwb"||e.$store.state.mqtt["openWB/general/extern"]===!1?(l(),g("div",Le,[Be,n(T,null,{default:o(()=>[i("Hardware-Optionen")]),_:1}),n(y,{title:"automatische Phasenumschaltung vorhanden",buttons:[{buttonValue:!1,text:"Nein"},{buttonValue:!0,text:"Ja"}],"model-value":s.auto_phase_switch_hw,"onUpdate:modelValue":t=>e.updateState(r,t,"auto_phase_switch_hw")},null,8,["model-value","onUpdate:modelValue"]),n(y,{title:"Control-Pilot-Unterbrechung vorhanden",buttons:[{buttonValue:!1,text:"Nein"},{buttonValue:!0,text:"Ja"}],"model-value":s.control_pilot_interruption_hw,"onUpdate:modelValue":t=>e.updateState(r,t,"control_pilot_interruption_hw")},{help:o(()=>[i(' Die Control-Pilot-Leitung ist im Ladekabel integriert und dient der Steuerung der Fahrzeugladung (An/Aus/Stromvorgaben). Bei einigen Fahrzeugen können durch die Regelung erzwungene, längere Ladestopps (z.B. beim PV-Laden) zu unerwünschten "Einschlaf"-Effekten des Fahrzeuges führen. Mit diesem feature, welches hardwareseitig verbaut sein muss, kann ein Abstecken des Ladesteckers simuliert werden, um ein Aufwecken des Fahrzeuges zu ermöglichen. Die Funktion hängt immer auch vom Fahrzeugtyp ab. ')]),_:2},1032,["model-value","onUpdate:modelValue"]),n(T,null,{default:o(()=>[i(" Elektrischer Anschluss ")]),_:1}),n(y,{title:"Anzahl angeschlossener Phasen",buttons:[{buttonValue:1,text:"1"},{buttonValue:2,text:"2"},{buttonValue:3,text:"3"}],"model-value":s.connected_phases,"onUpdate:modelValue":t=>e.updateState(r,t,"connected_phases")},null,8,["model-value","onUpdate:modelValue"]),n(y,{title:"Phase 1 des Ladekabels",buttons:[{buttonValue:0,text:"unbekannt",class:"btn-outline-danger"},{buttonValue:1,text:"EVU L1",class:"btn-outline-success"},{buttonValue:2,text:"EVU L2",class:"btn-outline-success"},{buttonValue:3,text:"EVU L3",class:"btn-outline-success"}],"model-value":s.phase_1,"onUpdate:modelValue":t=>e.updateState(r,t,"phase_1")},{help:o(()=>[i(" Hier ist anzugeben, an welcher Phase des Hausanschlusses (EVU-Punkt) die Phase 1 dieses Ladepunktes angeschlossen ist. Diese Information wird für das Lastmanagement benötigt, um bei einer Schieflast gezielt einzelne Ladepunkte zu drosseln."),Te,i(' Bei mehreren Ladepunkten macht es Sinn, die Phasen der LP rotierend anzuschließen, damit mehrere "nicht-dreiphasig" ladende Fahrzeuge mit optimaler Leistung laden können, bevor das Lastmanagement eingreift.'),We,i(" Es wird vorausgesetzt, dass das Drehfeld innerhalb der Installation gleich bleibt. Wenn z.B. L1 des Ladepunktes auf EVU-L2 liegt, muss L2 des Ladepunktes auf EVU-L3 aufgelegt sein (und L3 des Ladepunktes auf EVU-L1)."),Se,i(" Eine Möglichkeit, die zur Ladepunktphase L1 zugehörige EVU-Phase zu ermitteln, ist eine einphasige Ladung zu starten und die Phasenströme am EVU-Zähler zu beobachten. Mit einem zweiphasig ladenden Fahrzeug kann danach auch der Anschluss von L2 ermittelt und so das Drehfeld kontrolliert werden."),Ae,i(" Im Zweifel bitte das Drehfeld von einer Fachkraft prüfen und korrigieren lassen. ")]),_:2},1032,["model-value","onUpdate:modelValue"])])):_("",!0)]),_:2},1032,["title"]))),128)),Object.keys(d.installedChargePoints).length>0?(l(),g("hr",Ie)):_("",!0),n(U,{class:"mb-2",title:"Verfügbare Ladepunkte",notSelected:"Bitte auswählen",options:d.getChargePointList(),"model-value":m.chargePointToAdd,"onUpdate:modelValue":a[3]||(a[3]=s=>m.chargePointToAdd=s)},{append:o(()=>[p("span",xe,[n(R,{class:F(m.chargePointToAdd===void 0?"btn-outline-success":"btn-success"),disabled:m.chargePointToAdd===void 0,onButtonClicked:d.addChargePoint},{default:o(()=>[n(f,{"fixed-width":"",icon:["fas","plus"]})]),_:1},8,["class","disabled","onButtonClicked"])])]),help:o(()=>[i(" Bitte einen Ladepunkt auswählen, der der openWB-Regelung hinzugefügt werden soll."),Ue,qe]),_:1},8,["options","model-value"])]),_:1}),ze,n(A,{title:"Ladepunkt-Profile",collapsible:!0,collapsed:!0},{header:o(()=>[n(j,{"fixed-width":"",class:"fa-lg"},{default:o(()=>[n(f,{"fixed-width":"",icon:["far","file"]}),n(f,{"fixed-width":"",icon:["fas","charging-station"],transform:"shrink-8"})]),_:1}),i(" Ladepunkt-Profile ")]),actions:o(()=>[e.$store.state.mqtt["openWB/general/extern"]===!1?(l(),k(L,{key:0,class:"bg-success clickable",onClick:d.addChargePointTemplate},{default:o(()=>[n(f,{"fixed-width":"",icon:["fas","plus"]})]),_:1},8,["onClick"])):_("",!0)]),default:o(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(l(),g("div",Ee,[n(q,{subtype:"info"},{default:o(()=>[i(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(l(),g("div",De,[(l(!0),g(S,null,I(d.chargePointTemplates,(s,r)=>(l(),k(A,{key:r,title:s.name+" (ID: "+d.getChargePointTemplateIndex(r)+")",collapsible:!0,collapsed:!0},O({default:o(()=>[n(V,{title:"Bezeichnung",subtype:"text","model-value":s.name,"onUpdate:modelValue":t=>e.updateState(r,t,"name"),disabled:r.endsWith("/0")},O({_:2},[r.endsWith("/0")?{name:"help",fn:o(()=>[i(" Das Standard-Profil kann nicht umbenannt werden. ")]),key:"0"}:void 0]),1032,["model-value","onUpdate:modelValue","disabled"]),Me,n(T,null,{default:o(()=>[i(" Zugangskontrolle ")]),_:1}),n(y,{title:"Sperre nach Abstecken",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":s.disable_after_unplug,"onUpdate:modelValue":t=>e.updateState(r,t,"disable_after_unplug")},{help:o(()=>[i(" Sperrt den Ladepunkt nach Abstecken eines Fahrzeuges ")]),_:2},1032,["model-value","onUpdate:modelValue"]),s.disable_after_unplug?(l(),k(Z,{key:0,title:"Zugeordnete ID-Tags",noElementsMessage:"Keine ID-Tags zugeordnet.","model-value":s.valid_tags,"onUpdate:modelValue":t=>e.updateState(r,t,"valid_tags")},{help:o(()=>[i(" Die hier eingetragenen ID-Tags dienen ausschließlich zum Entsperren des Ladepunktes. ")]),_:2},1032,["model-value","onUpdate:modelValue"])):_("",!0),Fe,n(T,null,{default:o(()=>[i(" Angaben zum konfigurierten Ladestrom der openWB ")]),_:1}),n(q,{subtype:"info"},{default:o(()=>[i(" Hier werden die maximalen Ladeströme entsprechend der in dem zugeordneten Ladepunkt genutzten Phasen eingestellt."),Oe,i(" Generell gilt, dass diese Werte in Übereinstimmung mit der Ausführung des Ladepunktes und des elektrischen Anschlusses bzw. der Absicherung zu wählen sind. Bei einer openWB mit 22kW Maximalleistung sind hier jeweils 32A einzustellen. Ist die openWB beispielsweise auf 11kW begrenzt (KfW-Förderung oder die Zuleitung ist mit 16A abgesichert), dann sind hier jeweils 16A einzustellen."),Ne,i(" Komplexere Installationen mit mehreren Ladepunkten werden im "),Re,i(" beschrieben. ")]),_:1}),n(z,{title:"Maximalstrom bei einer Phase",min:6,max:32,step:1,unit:"A","model-value":s.max_current_single_phase,"onUpdate:modelValue":t=>e.updateState(r,t,"max_current_single_phase")},null,8,["model-value","onUpdate:modelValue"]),n(z,{title:"Maximalstrom mehrere Phasen",min:6,max:32,step:1,unit:"A","model-value":s.max_current_multi_phases,"onUpdate:modelValue":t=>e.updateState(r,t,"max_current_multi_phases")},null,8,["model-value","onUpdate:modelValue"]),je,n(T,null,{default:o(()=>[i("Automatische Sperre")]),_:1}),n(y,{title:"Automatische Sperre aktiv",buttons:[{buttonValue:!1,text:"Nein"},{buttonValue:!0,text:"Ja"}],"model-value":s.autolock.active,"onUpdate:modelValue":t=>e.updateState(r,t,"autolock.active")},{help:o(()=>[i(" Wird die automatische Sperre aktiviert, können Fahrzeugladungen mittels Zeitplan auf gewünschte Zeitbereiche eingeschränkt werden. Dies kann z.B. bei Zugänglichkeiten zu Ladepunkten in öffentlichen oder halb-öffentlichen Bereichen sinnvoll sein. ")]),_:2},1032,["model-value","onUpdate:modelValue"]),n(y,{title:"Erst nach Ladeende sperren",buttons:[{buttonValue:!1,text:"Nein"},{buttonValue:!0,text:"Ja"}],"model-value":s.autolock.wait_for_charging_end,"onUpdate:modelValue":t=>e.updateState(r,t,"autolock.wait_for_charging_end")},{help:o(()=>[i(' Wenn ein Zeitplan die automatische Sperre aktiviert, werden alle Ladepunkte direkt gesperrt und laufende Ladevorgänge beendet. Wird hier "Ja" ausgewählt, dann werden laufende Ladevorgänge NICHT beendet und diese Ladepunkte erst nach abgeschlossener Ladung gesperrt. ')]),_:2},1032,["model-value","onUpdate:modelValue"]),n(T,null,{actions:o(()=>[n(L,{class:"bg-success clickable",onClick:t=>d.addChargePointTemplateAutolockPlan(r,t)},{default:o(()=>[n(f,{"fixed-width":"",icon:["fas","plus"]})]),_:2},1032,["onClick"])]),default:o(()=>[i(" Zeitpläne für die automatische Sperre ")]),_:2},1024),(l(!0),g(S,null,I(d.getChargePointTemplateAutolockPlans(r),(t,b)=>(l(),k(A,{key:b,title:t.name,collapsible:!0,collapsed:!0},{actions:o(h=>[h.collapsed==!0?(l(),g("span",{key:0,onClick:ie(W=>e.updateState(b,!t.active,"active"),["stop"]),class:F(["subheader pill clickable",t.active?"bg-success":"bg-danger"])},[n(f,{"fixed-width":"",icon:["fas","clock"]}),i(" "+v(t.time[0])+" - "+v(t.time[1])+" ",1),t.frequency.selected=="once"?(l(),g("span",$e,[n(f,{"fixed-width":"",icon:["fas","calendar-day"]}),i(" "+v(e.formatDate(t.frequency.once[0])==e.formatDate(t.frequency.once[1])?e.formatDate(t.frequency.once[0]):e.formatDate(t.frequency.once[0])+" - "+e.formatDate(t.frequency.once[1])),1)])):_("",!0),t.frequency.selected=="daily"?(l(),g("span",Je,[n(f,{"fixed-width":"",icon:["fas","calendar-week"]})])):_("",!0),t.frequency.selected=="weekly"?(l(),g("span",He,[n(f,{"fixed-width":"",icon:["fas","calendar-alt"]})])):_("",!0)],10,Ze)):_("",!0),h.collapsed==!1?(l(),k(L,{key:1,class:"bg-danger clickable",onClick:W=>d.removeChargePointTemplateAutolockPlanModal(r,b,W)},{default:o(()=>[n(f,{"fixed-width":"",icon:["fas","trash"]})]),_:2},1032,["onClick"])):_("",!0)]),default:o(()=>[n(V,{title:"Bezeichnung","model-value":t.name,"onUpdate:modelValue":h=>e.updateState(b,h,"name")},null,8,["model-value","onUpdate:modelValue"]),n(y,{title:"Zeitplan aktiv",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":t.active,"onUpdate:modelValue":h=>e.updateState(b,h,"active")},null,8,["model-value","onUpdate:modelValue"]),n(V,{title:"Sperren um",subtype:"time","model-value":t.time[0],"onUpdate:modelValue":h=>e.updateState(b,h,"time.0")},null,8,["model-value","onUpdate:modelValue"]),n(V,{title:"Freigeben um",subtype:"time","model-value":t.time[1],"onUpdate:modelValue":h=>e.updateState(b,h,"time.1")},null,8,["model-value","onUpdate:modelValue"]),n(y,{title:"Wiederholungen",buttons:[{buttonValue:"once",text:"Einmalig",class:"btn-outline-info"},{buttonValue:"daily",text:"Täglich",class:"btn-outline-info"},{buttonValue:"weekly",text:"Wöchentlich",class:"btn-outline-info"}],"model-value":t.frequency.selected,"onUpdate:modelValue":h=>e.updateState(b,h,"frequency.selected")},null,8,["model-value","onUpdate:modelValue"]),t.frequency.selected=="once"?(l(),k(V,{key:0,title:"Sperren ab ...",subtype:"date","model-value":t.frequency.once[0],"onUpdate:modelValue":h=>e.updateState(b,h,"frequency.once.0")},null,8,["model-value","onUpdate:modelValue"])):_("",!0),t.frequency.selected=="once"?(l(),k(V,{key:1,title:"... bis",subtype:"date",min:t.frequency.once[0],"model-value":t.frequency.once[1],"onUpdate:modelValue":h=>e.updateState(b,h,"frequency.once.1")},null,8,["min","model-value","onUpdate:modelValue"])):_("",!0),t.frequency.selected=="weekly"?(l(),g("div",Ge,[(l(!0),g(S,null,I(e.weekdays,(h,W)=>(l(),k(y,{key:W,title:h,buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":t.frequency.weekly[W],"onUpdate:modelValue":J=>e.updateState(b,J,"frequency.weekly."+W)},null,8,["title","model-value","onUpdate:modelValue"]))),128))])):_("",!0)]),_:2},1032,["title"]))),128))]),_:2},[r.endsWith("/0")?void 0:{name:"actions",fn:o(t=>[t.collapsed?_("",!0):(l(),k(L,{key:0,class:"bg-danger clickable",onClick:b=>d.removeChargePointTemplateModal(r,b)},{default:o(()=>[n(f,{"fixed-width":"",icon:["fas","trash"]})]),_:2},1032,["onClick"]))]),key:"0"}]),1032,["title"]))),128))]))]),_:1}),n($,{formName:"chargePointInstallationForm",onSave:a[4]||(a[4]=s=>e.$emit("save")),onReset:a[5]||(a[5]=s=>e.$emit("reset")),onDefaults:a[6]||(a[6]=s=>e.$emit("defaults"))})])])],64)}const it=x(ve,[["render",Qe],["__scopeId","data-v-75fe5743"],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/ChargePointInstallation.vue"]]);export{it as default};
