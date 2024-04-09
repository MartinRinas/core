import{C as y}from"./index-720fb9ac.js";import{l as w,K as L,F as x,L as k,M as C,c as T,N as z,O as S,P as A,Q as E,R as M,S as V}from"./vendor-fortawesome-9fdc06a9.js";import{_ as W,q as n,k as a,z as s,M as u,B as t,x as c,y as g,u as v,A as q,R as H,S as Z,l as I,I as P,J as $}from"./vendor-f0f38b48.js";import{C as K,p as F,a as J,L as G,b as Q,P as U,c as X,T as Y,i as ee,d as te,e as ne}from"./vendor-chartjs-3e4a7d38.js";import"./vendor-bootstrap-384bc385.js";import"./vendor-jquery-8576ed22.js";import"./vendor-axios-e59ef189.js";import"./vendor-sortablejs-cbf37f8f.js";import"./vendor-luxon-78deadb9.js";w.add(L);const oe={name:"ChargePointSumCard",mixins:[y],components:{FontAwesomeIcon:x}};function ae(e,_,o,h,m,r){const l=n("font-awesome-icon"),p=n("openwb-base-text-input"),d=n("openwb-base-heading"),i=n("openwb-base-card");return a(),s(i,{subtype:"primary",collapsible:!0,collapsed:!0},{header:u(()=>[t(l,{"fixed-width":"",icon:["fas","charging-station"]}),c(" Alle Ladepunkte ")]),default:u(()=>[t(p,{title:"Leistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/chargepoint/get/power",3,3,.001)},null,8,["model-value"]),t(p,{title:"Zählerstand laden",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/get/imported",3,3,.001)},null,8,["model-value"]),t(p,{title:"Zählerstand entladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/get/exported",3,3,.001)},null,8,["model-value"]),t(d,null,{default:u(()=>[c("Historie")]),_:1}),t(p,{title:"Heute geladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/get/daily_imported",3,3,.001)},null,8,["model-value"]),t(p,{title:"Heute entladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/get/daily_exported",3,3,.001)},null,8,["model-value"])]),_:1})}const re=W(oe,[["render",ae],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/ChargePointSumCard.vue"]]);w.add(k,C,T,L);const se={name:"ChargePointCard",mixins:[y],components:{FontAwesomeIcon:x},props:{installedChargePointKey:String,installedChargePoint:Object},data(){return{statusLevel:["success","warning","danger"]}},computed:{chargePointIndex:{get(){return parseInt(this.installedChargePointKey.match(/(?:\/)(\d+)(?=\/)/)[1])}}}},le=v("br",null,null,-1),ie=v("br",null,null,-1);function ce(e,_,o,h,m,r){const l=n("font-awesome-icon"),p=n("openwb-base-alert"),d=n("openwb-base-checkbox-input"),i=n("openwb-base-text-input"),f=n("openwb-base-heading"),B=n("openwb-base-card");return a(),s(B,{subtype:"primary",collapsible:!0,collapsed:!0},{header:u(()=>[t(l,{"fixed-width":"",icon:["fas","charging-station"]}),c(" "+g(o.installedChargePoint.name)+" (ID: "+g(r.chargePointIndex)+") ",1)]),default:u(()=>[t(p,{subtype:m.statusLevel[e.$store.state.mqtt["openWB/chargepoint/"+r.chargePointIndex+"/get/fault_state"]]},{default:u(()=>[e.$store.state.mqtt["openWB/chargepoint/"+r.chargePointIndex+"/get/fault_state"]==1?(a(),s(l,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/chargepoint/"+r.chargePointIndex+"/get/fault_state"]==2?(a(),s(l,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(a(),s(l,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),c(" Modulmeldung:"),le,c(" "+g(e.$store.state.mqtt["openWB/chargepoint/"+r.chargePointIndex+"/get/fault_str"]),1)]),_:1},8,["subtype"]),t(p,{subtype:"info"},{default:u(()=>[c(" Statusmeldung:"),ie,c(" "+g(e.$store.state.mqtt["openWB/chargepoint/"+r.chargePointIndex+"/get/state_str"]),1)]),_:1}),t(d,{title:"Fahrzeug angesteckt",disabled:"","model-value":e.$store.state.mqtt["openWB/chargepoint/"+r.chargePointIndex+"/get/plug_state"]==1},null,8,["model-value"]),t(d,{title:"Ladevorgang aktiv",disabled:"","model-value":e.$store.state.mqtt["openWB/chargepoint/"+r.chargePointIndex+"/get/charge_state"]==1},null,8,["model-value"]),t(i,{title:"Zählerstand laden",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/"+r.chargePointIndex+"/get/imported",3,3,.001)},null,8,["model-value"]),t(i,{title:"Zählerstand entladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/"+r.chargePointIndex+"/get/exported",3,3,.001)},null,8,["model-value"]),t(i,{title:"Heute geladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/"+r.chargePointIndex+"/get/daily_imported",3,3,.001)},null,8,["model-value"]),t(i,{title:"Heute entladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/"+r.chargePointIndex+"/get/daily_exported",3,3,.001)},null,8,["model-value"]),t(i,{title:"Wirkleistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/chargepoint/"+r.chargePointIndex+"/get/power",3,3,.001)},null,8,["model-value"]),t(i,{title:"Ladestromvorgabe",readonly:"",class:"text-right text-monospace",step:"0.01",unit:"A","model-value":e.formatNumberTopic("openWB/chargepoint/"+r.chargePointIndex+"/set/current",2)},null,8,["model-value"]),t(i,{title:"Netzfrequenz",readonly:"",class:"text-right text-monospace",step:"0.01",unit:"Hz","model-value":e.formatNumberTopic("openWB/chargepoint/"+r.chargePointIndex+"/get/frequency",2)},null,8,["model-value"]),t(f,null,{default:u(()=>[c("Werte pro Phase")]),_:1}),t(i,{title:"Spannung",readonly:"",class:"text-right text-monospace",unit:"V","model-value":e.formatPhaseArrayNumberTopic("openWB/chargepoint/"+r.chargePointIndex+"/get/voltages",1)},null,8,["model-value"]),t(i,{title:"Strom",readonly:"",class:"text-right text-monospace",unit:"A","model-value":e.formatPhaseArrayNumberTopic("openWB/chargepoint/"+r.chargePointIndex+"/get/currents",2)},null,8,["model-value"]),t(i,{title:"Wirkleistung",readonly:"",class:"text-right text-monospace",unit:"kW","model-value":e.formatPhaseArrayNumberTopic("openWB/chargepoint/"+r.chargePointIndex+"/get/powers",3,3,.001)},null,8,["model-value"]),t(i,{title:"Leistungsfaktor",readonly:"",class:"text-right text-monospace","model-value":e.formatPhaseArrayNumberTopic("openWB/chargepoint/"+r.chargePointIndex+"/get/power_factors",2)},null,8,["model-value"]),t(f,null,{default:u(()=>[c("Phasen")]),_:1}),e.$store.state.mqtt["openWB/general/extern"]===!0?(a(),s(i,{key:0,title:"Vorgabe",readonly:"",class:"text-right text-monospace","model-value":e.formatNumberTopic("openWB/internal_chargepoint/"+r.chargePointIndex+"/data/phases_to_use")},null,8,["model-value"])):(a(),s(i,{key:1,title:"Vorgabe",readonly:"",class:"text-right text-monospace","model-value":e.formatNumberTopic("openWB/chargepoint/"+r.chargePointIndex+"/set/phases_to_use")},null,8,["model-value"])),t(i,{title:"Aktuell",readonly:"",class:"text-right text-monospace","model-value":e.formatNumberTopic("openWB/chargepoint/"+r.chargePointIndex+"/get/phases_in_use")},null,8,["model-value"])]),_:1})}const ue=W(se,[["render",ce],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/ChargePointCard.vue"]]);w.add(k,C,T,z);const de={name:"CounterCard",mixins:[y],components:{FontAwesomeIcon:x},props:{counter:Object},data(){return{statusLevel:["success","warning","danger"]}}},pe=v("br",null,null,-1),me=v("br",null,null,-1);function ge(e,_,o,h,m,r){const l=n("font-awesome-icon"),p=n("openwb-base-alert"),d=n("openwb-base-heading"),i=n("openwb-base-text-input"),f=n("openwb-base-card");return a(),s(f,{subtype:"danger",collapsible:!0,collapsed:!0},{header:u(()=>[t(l,{"fixed-width":"",icon:["fas","gauge-high"]}),c(" "+g(o.counter.name)+" (ID: "+g(o.counter.id)+") ",1)]),default:u(()=>[t(p,{subtype:m.statusLevel[e.$store.state.mqtt["openWB/counter/"+o.counter.id+"/get/fault_state"]]},{default:u(()=>[e.$store.state.mqtt["openWB/counter/"+o.counter.id+"/get/fault_state"]==1?(a(),s(l,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/counter/"+o.counter.id+"/get/fault_state"]==2?(a(),s(l,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(a(),s(l,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),c(" Modulmeldung:"),pe,c(" "+g(e.$store.state.mqtt["openWB/counter/"+o.counter.id+"/get/fault_str"]),1)]),_:1},8,["subtype"]),e.$store.state.mqtt["openWB/counter/"+o.counter.id+"/get/state_str"]!=null?(a(),s(p,{key:0,subtype:"info"},{default:u(()=>[c(" Statusmeldung:"),me,c(" "+g(e.$store.state.mqtt["openWB/counter/"+o.counter.id+"/get/state_str"]),1)]),_:1})):q("",!0),t(d,null,{default:u(()=>[c("Zählerstände")]),_:1}),t(i,{title:"Export",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/counter/"+o.counter.id+"/get/exported",3,3,.001)},null,8,["model-value"]),t(i,{title:"Import",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/counter/"+o.counter.id+"/get/imported",3,3,.001)},null,8,["model-value"]),t(d,null,{default:u(()=>[c("Saldierte Werte")]),_:1}),t(i,{title:"Wirkleistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/counter/"+o.counter.id+"/get/power",3,3,.001)},null,8,["model-value"]),t(i,{title:"Netzfrequenz",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"Hz","model-value":e.formatNumberTopic("openWB/counter/"+o.counter.id+"/get/frequency",3)},null,8,["model-value"]),t(d,null,{default:u(()=>[c("Werte pro Phase")]),_:1}),t(i,{title:"Spannung",readonly:"",class:"text-right text-monospace",unit:"V","model-value":e.formatPhaseArrayNumberTopic("openWB/counter/"+o.counter.id+"/get/voltages",1)},null,8,["model-value"]),t(i,{title:"Strom",readonly:"",class:"text-right text-monospace",unit:"A","model-value":e.formatPhaseArrayNumberTopic("openWB/counter/"+o.counter.id+"/get/currents",2)},null,8,["model-value"]),t(i,{title:"Wirkleistung",readonly:"",class:"text-right text-monospace",unit:"kW","model-value":e.formatPhaseArrayNumberTopic("openWB/counter/"+o.counter.id+"/get/powers",3,3,.001)},null,8,["model-value"]),t(i,{title:"Leistungsfaktor",readonly:"",class:"text-right text-monospace","model-value":e.formatPhaseArrayNumberTopic("openWB/counter/"+o.counter.id+"/get/power_factors",2)},null,8,["model-value"])]),_:1})}const _e=W(de,[["render",ge],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/CounterCard.vue"]]);w.add(k,C,T,S);const he={name:"InverterSumCard",mixins:[y],components:{FontAwesomeIcon:x},data(){return{statusLevel:["success","warning","danger"]}}},fe=v("br",null,null,-1);function be(e,_,o,h,m,r){const l=n("font-awesome-icon"),p=n("openwb-base-alert"),d=n("openwb-base-text-input"),i=n("openwb-base-heading"),f=n("openwb-base-card");return a(),s(f,{subtype:"success",collapsible:!0,collapsed:!0},{header:u(()=>[t(l,{"fixed-width":"",icon:["fas","solar-panel"]}),c(" Alle Wechselrichter ")]),default:u(()=>[t(p,{subtype:m.statusLevel[e.$store.state.mqtt["openWB/pv/get/fault_state"]]},{default:u(()=>[e.$store.state.mqtt["openWB/pv/get/fault_state"]==1?(a(),s(l,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/pv/get/fault_state"]==2?(a(),s(l,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(a(),s(l,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),c(" Modulmeldung:"),fe,c(" "+g(e.$store.state.mqtt["openWB/pv/get/fault_str"]),1)]),_:1},8,["subtype"]),t(d,{title:"Zählerstand",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/pv/get/exported",3,3,.001)},null,8,["model-value"]),t(d,{title:"Leistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/pv/get/power",3,3,.001)},null,8,["model-value"]),t(i,null,{default:u(()=>[c("Erträge")]),_:1}),t(d,{title:"Heute",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/pv/get/daily_exported",3,3,.001)},null,8,["model-value"]),t(d,{title:"Dieser Monat",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/pv/get/monthly_exported",3,3,.001)},null,8,["model-value"]),t(d,{title:"Dieses Jahr",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/pv/get/yearly_exported",3,3,.001)},null,8,["model-value"])]),_:1})}const ve=W(he,[["render",be],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/InverterSumCard.vue"]]);w.add(k,C,T,S);const ye={name:"InverterCard",mixins:[y],components:{FontAwesomeIcon:x},props:{inverter:Object},data(){return{statusLevel:["success","warning","danger"]}}},We=v("br",null,null,-1);function we(e,_,o,h,m,r){const l=n("font-awesome-icon"),p=n("openwb-base-alert"),d=n("openwb-base-text-input"),i=n("openwb-base-heading"),f=n("openwb-base-card");return a(),s(f,{subtype:"success",collapsible:!0,collapsed:!0},{header:u(()=>[t(l,{"fixed-width":"",icon:["fas","solar-panel"]}),c(" "+g(o.inverter.name)+" (ID: "+g(o.inverter.id)+") ",1)]),default:u(()=>[t(p,{subtype:m.statusLevel[e.$store.state.mqtt["openWB/pv/"+o.inverter.id+"/get/fault_state"]]},{default:u(()=>[e.$store.state.mqtt["openWB/pv/"+o.inverter.id+"/get/fault_state"]==1?(a(),s(l,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/pv/"+o.inverter.id+"/get/fault_state"]==2?(a(),s(l,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(a(),s(l,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),c(" Modulmeldung:"),We,c(" "+g(e.$store.state.mqtt["openWB/pv/"+o.inverter.id+"/get/fault_str"]),1)]),_:1},8,["subtype"]),t(d,{title:"Zählerstand",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/pv/"+o.inverter.id+"/get/exported",3,3,.001)},null,8,["model-value"]),t(d,{title:"Leistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/pv/"+o.inverter.id+"/get/power",3,3,.001)},null,8,["model-value"]),t(i,null,{default:u(()=>[c("Erträge")]),_:1}),t(d,{title:"Heute",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/pv/"+o.inverter.id+"/get/daily_exported",3,3,.001)},null,8,["model-value"]),t(d,{title:"Dieser Monat",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/pv/"+o.inverter.id+"/get/monthly_exported",3,3,.001)},null,8,["model-value"]),t(d,{title:"Dieses Jahr",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/pv/"+o.inverter.id+"/get/yearly_exported",3,3,.001)},null,8,["model-value"])]),_:1})}const xe=W(ye,[["render",we],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/InverterCard.vue"]]);w.add(k,C,T,A);const Be={name:"BatterySumCard",mixins:[y],components:{FontAwesomeIcon:x},data(){return{statusLevel:["success","warning","danger"]}}},ke=v("br",null,null,-1);function Ce(e,_,o,h,m,r){const l=n("font-awesome-icon"),p=n("openwb-base-alert"),d=n("openwb-base-heading"),i=n("openwb-base-text-input"),f=n("openwb-base-number-input"),B=n("openwb-base-card");return a(),s(B,{subtype:"warning",collapsible:!0,collapsed:!0},{header:u(()=>[t(l,{"fixed-width":"",icon:["fas","car-battery"]}),c(" Alle Speicher ")]),default:u(()=>[t(p,{subtype:m.statusLevel[e.$store.state.mqtt["openWB/bat/get/fault_state"]]},{default:u(()=>[e.$store.state.mqtt["openWB/bat/get/fault_state"]==1?(a(),s(l,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/bat/get/fault_state"]==2?(a(),s(l,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(a(),s(l,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),c(" Modulmeldung:"),ke,c(" "+g(e.$store.state.mqtt["openWB/bat/get/fault_str"]),1)]),_:1},8,["subtype"]),t(d,null,{default:u(()=>[c("Zählerstände")]),_:1}),t(i,{title:"Ladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/get/imported",3,3,.001)},null,8,["model-value"]),t(i,{title:"Entladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/get/exported",3,3,.001)},null,8,["model-value"]),t(d,null,{default:u(()=>[c("Tageswerte")]),_:1}),t(i,{title:"Ladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/get/daily_imported",3,3,.001)},null,8,["model-value"]),t(i,{title:"Entladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/get/daily_exported",3,3,.001)},null,8,["model-value"]),t(d,null,{default:u(()=>[c("Saldierte Werte")]),_:1}),t(i,{title:"Leistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/bat/get/power",3,3,.001)},null,8,["model-value"]),t(f,{title:"Ladestand",readonly:"",class:"text-right text-monospace",unit:"%","model-value":e.$store.state.mqtt["openWB/bat/get/soc"]},null,8,["model-value"])]),_:1})}const Te=W(Be,[["render",Ce],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/BatterySumCard.vue"]]);w.add(k,C,T,A);const qe={name:"InverterCard",mixins:[y],components:{FontAwesomeIcon:x},props:{battery:Object},data(){return{statusLevel:["success","warning","danger"]}}},Ie=v("br",null,null,-1);function Ne(e,_,o,h,m,r){const l=n("font-awesome-icon"),p=n("openwb-base-alert"),d=n("openwb-base-heading"),i=n("openwb-base-text-input"),f=n("openwb-base-number-input"),B=n("openwb-base-card");return a(),s(B,{subtype:"warning",collapsible:!0,collapsed:!0},{header:u(()=>[t(l,{"fixed-width":"",icon:["fas","car-battery"]}),c(" "+g(o.battery.name)+" (ID: "+g(o.battery.id)+") ",1)]),default:u(()=>[t(p,{subtype:m.statusLevel[e.$store.state.mqtt["openWB/bat/"+o.battery.id+"/get/fault_state"]]},{default:u(()=>[e.$store.state.mqtt["openWB/bat/"+o.battery.id+"/get/fault_state"]==1?(a(),s(l,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/bat/"+o.battery.id+"/get/fault_state"]==2?(a(),s(l,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(a(),s(l,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),c(" Modulmeldung:"),Ie,c(" "+g(e.$store.state.mqtt["openWB/bat/"+o.battery.id+"/get/fault_str"]),1)]),_:1},8,["subtype"]),t(d,null,{default:u(()=>[c("Aktuelle Werte")]),_:1}),t(i,{title:"Leistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/bat/"+o.battery.id+"/get/power",3,3,.001)},null,8,["model-value"]),t(f,{title:"Ladestand",readonly:"",class:"text-right text-monospace",unit:"%","model-value":e.$store.state.mqtt["openWB/bat/"+o.battery.id+"/get/soc"]},null,8,["model-value"]),t(d,null,{default:u(()=>[c("Zählerstände")]),_:1}),t(i,{title:"Ladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/"+o.battery.id+"/get/imported",3,3,.001)},null,8,["model-value"]),t(i,{title:"Entladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/"+o.battery.id+"/get/exported",3,3,.001)},null,8,["model-value"])]),_:1})}const Pe=W(qe,[["render",Ne],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/BatteryCard.vue"]]);w.add(k,C,T,E);const $e={name:"RippleControlReceiverCard",mixins:[y],components:{FontAwesomeIcon:x},data(){return{mqttTopicsToSubscribe:["openWB/general/ripple_control_receiver/get/fault_state","openWB/general/ripple_control_receiver/get/fault_str","openWB/general/ripple_control_receiver/get/override_value","openWB/general/ripple_control_receiver/module"],statusLevel:["success","warning","danger"]}}},Le=v("br",null,null,-1);function Se(e,_,o,h,m,r){const l=n("font-awesome-icon"),p=n("openwb-base-alert"),d=n("openwb-base-text-input"),i=n("openwb-base-card");return e.$store.state.mqtt["openWB/general/ripple_control_receiver/module"]&&e.$store.state.mqtt["openWB/general/ripple_control_receiver/module"].type?(a(),s(i,{key:0,subtype:"secondary",collapsible:!0,collapsed:!0},{header:u(()=>[t(l,{icon:["fas","tower-broadcast"]}),c(" Steuerbare Verbrauchseinrichtung (RSE) ")]),default:u(()=>[t(p,{subtype:m.statusLevel[e.$store.state.mqtt["openWB/general/ripple_control_receiver/get/fault_state"]]},{default:u(()=>[e.$store.state.mqtt["openWB/general/ripple_control_receiver/get/fault_state"]==1?(a(),s(l,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/general/ripple_control_receiver/get/fault_state"]==2?(a(),s(l,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(a(),s(l,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),c(" Modulmeldung:"),Le,c(" "+g(e.$store.state.mqtt["openWB/general/ripple_control_receiver/get/fault_str"]),1)]),_:1},8,["subtype"]),t(d,{title:"Status",readonly:"","model-value":e.$store.state.mqtt["openWB/general/ripple_control_receiver/get/override_value"]==0?"Laden gesperrt":"Laden erlaubt ("+e.$store.state.mqtt["openWB/general/ripple_control_receiver/get/override_value"]+"%)"},null,8,["model-value"])]),_:1})):q("",!0)}const Ae=W($e,[["render",Se],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/RippleControlReceiver.vue"]]);w.add(k,C,T,M);const Oe={name:"VehicleCard",mixins:[y],components:{FontAwesomeIcon:x},props:{vehicle:Object,vehicleKey:String,vehicleName:String},data(){return{statusLevel:["success","warning","danger"]}},computed:{vehicleIndex:{get(){return parseInt(this.vehicleKey.match(/(?:\/)(\d+)(?=\/)/)[1])}},socTimestamp:{get(){return this.$store.state.mqtt["openWB/vehicle/"+this.vehicleIndex+"/get/soc_timestamp"]!==void 0?new Date(this.$store.state.mqtt["openWB/vehicle/"+this.vehicleIndex+"/get/soc_timestamp"]*1e3).toLocaleString():"-"}},socRange:{get(){return this.$store.state.mqtt["openWB/vehicle/"+this.vehicleIndex+"/get/range"]!==void 0?Math.round(this.$store.state.mqtt["openWB/vehicle/"+this.vehicleIndex+"/get/range"]):0}}}},je=v("br",null,null,-1);function Re(e,_,o,h,m,r){const l=n("font-awesome-icon"),p=n("openwb-base-alert"),d=n("openwb-base-heading"),i=n("openwb-base-number-input"),f=n("openwb-base-text-input"),B=n("openwb-base-card");return a(),s(B,{subtype:"info",collapsible:!0,collapsed:!0},{header:u(()=>[t(l,{"fixed-width":"",icon:["fas","car"]}),c(" "+g(o.vehicleName)+" (ID: "+g(r.vehicleIndex)+") ",1)]),default:u(()=>[e.$store.state.mqtt["openWB/vehicle/"+r.vehicleIndex+"/get/fault_state"]!==void 0?(a(),s(p,{key:0,subtype:m.statusLevel[e.$store.state.mqtt["openWB/vehicle/"+r.vehicleIndex+"/get/fault_state"]]},{default:u(()=>[e.$store.state.mqtt["openWB/vehicle/"+r.vehicleIndex+"/get/fault_state"]==1?(a(),s(l,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/vehicle/"+r.vehicleIndex+"/get/fault_state"]==2?(a(),s(l,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(a(),s(l,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),c(" Modulmeldung:"),je,c(" "+g(e.$store.state.mqtt["openWB/vehicle/"+r.vehicleIndex+"/get/fault_str"]),1)]),_:1},8,["subtype"])):q("",!0),t(d,null,{default:u(()=>[c("Fahrzeugdaten")]),_:1}),t(i,{title:"Ladestand",readonly:"",class:"text-right text-monospace",unit:"%","model-value":e.$store.state.mqtt["openWB/vehicle/"+r.vehicleIndex+"/get/soc"]},null,8,["model-value"]),t(i,{title:"Reichweite",readonly:"",class:"text-right text-monospace",unit:"km","model-value":r.socRange},null,8,["model-value"]),t(f,{title:"Letzter Zeitstempel",readonly:"",class:"text-right text-monospace","model-value":r.socTimestamp},null,8,["model-value"])]),_:1})}const De=W(Oe,[["render",Re],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/VehicleCard.vue"]]);w.add(k,C,T,V);K.register(F,J,G,Q,U,X,Y,ee,te);const ze={name:"ElectricityTariffCard",mixins:[y],components:{ChartjsLine:ne,FontAwesomeIcon:x},data(){return{mqttTopicsToSubscribe:["openWB/optional/et/provider","openWB/optional/et/get/fault_state","openWB/optional/et/get/fault_str","openWB/optional/et/get/prices"],statusLevel:["success","warning","danger"],chartDatasets:{datasets:[{label:"Stromtarif",unit:"ct/kWh",type:"line",stepped:!0,borderColor:"rgba(255, 0, 0, 0.7)",backgroundColor:"rgba(255, 10, 13, 0.3)",fill:!1,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!1,borderWidth:1,data:void 0,yAxisID:"y",parsing:{xAxisKey:"timestamp",yAxisKey:"price"}}]},chartOptions:{plugins:{title:{display:!1},tooltip:{enabled:!0},legend:{display:!1}},elements:{point:{radius:2}},responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},scales:{x:{type:"time",time:{unit:"hour",text:"Zeit",maxTicksLimit:24},display:!0,title:{display:!0,text:"Uhrzeit"},ticks:{font:{size:12},maxTicksLimit:0},grid:{}},y:{position:"left",type:"linear",display:"auto",title:{font:{size:12},display:!0,text:"Preis [ct/kWh]"},grid:{},ticks:{font:{size:12},stepSize:.01,maxTicksLimit:11}}}}}},computed:{electricityTariffConfigured(){const e=this.$store.state.mqtt["openWB/optional/et/provider"];return e!==void 0?e.type!==null:!1},chartDataRead(){return this.chartDataObject.datasets[0].data!=null},chartDataObject(){if(this.$store.state.mqtt["openWB/optional/et/get/prices"]){var e=this.$store.state.mqtt["openWB/optional/et/get/prices"],_=[];for(const[m,r]of Object.entries(e))_.push({timestamp:m*1e3,price:r*1e5});const h=_.slice(-1)[0];_.push({timestamp:h.timestamp+(60*60-1)*1e3,price:h.price})}const o=this.chartDatasets;return o.datasets[0].data=_,o}}},Ee=e=>(H("data-v-f4769d2f"),e=e(),Z(),e),Me=Ee(()=>v("br",null,null,-1)),Ve={class:"openwb-chart"};function He(e,_,o,h,m,r){const l=n("font-awesome-icon"),p=n("openwb-base-alert"),d=n("openwb-base-text-input"),i=n("chartjs-line"),f=n("openwb-base-card");return r.electricityTariffConfigured?(a(),s(f,{key:0,subtype:"secondary",collapsible:!0,collapsed:!0},{header:u(()=>[t(l,{"fixed-width":"",icon:["fas","ranking-star"]}),c(" Variabler Stromtarif ")]),default:u(()=>[t(p,{subtype:m.statusLevel[e.$store.state.mqtt["openWB/optional/et/get/fault_state"]]},{default:u(()=>[e.$store.state.mqtt["openWB/optional/et/get/fault_state"]==1?(a(),s(l,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/optional/et/get/fault_state"]==2?(a(),s(l,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(a(),s(l,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),c(" Modulmeldung:"),Me,c(" "+g(e.$store.state.mqtt["openWB/optional/et/get/fault_str"]),1)]),_:1},8,["subtype"]),t(d,{title:"Anbieter",readonly:"","model-value":e.$store.state.mqtt["openWB/optional/et/provider"].name},null,8,["model-value"]),v("div",Ve,[r.chartDataRead?(a(),s(i,{key:0,ref:"myChart",data:r.chartDataObject,options:m.chartOptions},null,8,["data","options"])):q("",!0)])]),_:1})):q("",!0)}const Ze=W(ze,[["render",He],["__scopeId","data-v-f4769d2f"],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/ElectricityTariffCard.vue"]]);const Ke={name:"OpenwbStatus",mixins:[y],components:{ChargePointSumCard:re,ChargePointCard:ue,CounterCard:_e,InverterSumCard:ve,InverterCard:xe,BatterySumCard:Te,BatteryCard:Pe,RippleControlReceiverCard:Ae,VehicleCard:De,ElectricityTariffCard:Ze},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/chargepoint/get/power","openWB/chargepoint/get/imported","openWB/chargepoint/get/exported","openWB/chargepoint/get/daily_imported","openWB/chargepoint/get/daily_exported","openWB/chargepoint/+/config","openWB/chargepoint/+/get/+","openWB/chargepoint/+/get/connected_vehicle/info","openWB/chargepoint/+/set/+","openWB/internal_chargepoint/+/data/phases_to_use","openWB/system/device/+/component/+/config","openWB/counter/+/get/+","openWB/pv/get/+","openWB/pv/+/get/+","openWB/bat/get/+","openWB/bat/+/get/+","openWB/vehicle/+/name","openWB/vehicle/+/get/+"]}},computed:{installedChargePoints:{get(){let e=this.getWildcardTopics("openWB/chargepoint/+/config"),_={};for(const[o,h]of Object.entries(e))(h.type==="internal_openwb"||this.$store.state.mqtt["openWB/general/extern"]===!1)&&(_[o]=h);return _}},numChargePointsInstalled:{get(){return Object.keys(this.installedChargePoints).length}},counterConfigs:{get(){return this.$store.state.mqtt["openWB/general/extern"]===!0?{}:this.filterComponentsByType(this.getWildcardTopics("openWB/system/device/+/component/+/config"),"counter")}},numInvertersInstalled:{get(){return Object.keys(this.inverterConfigs).length}},inverterConfigs:{get(){return this.$store.state.mqtt["openWB/general/extern"]===!0?{}:this.filterComponentsByType(this.getWildcardTopics("openWB/system/device/+/component/+/config"),"inverter")}},numBatteriesInstalled:{get(){return Object.keys(this.batteryConfigs).length}},batteryConfigs:{get(){return this.$store.state.mqtt["openWB/general/extern"]===!0?{}:this.filterComponentsByType(this.getWildcardTopics("openWB/system/device/+/component/+/config"),"bat")}},vehicleNames:{get(){return this.$store.state.mqtt["openWB/general/extern"]===!0?{}:this.getWildcardTopics("openWB/vehicle/+/name")}}},methods:{filterComponentsByType(e,_){return Object.keys(e).filter(o=>e[o].type.includes(_)).reduce((o,h)=>({...o,[h]:e[h]}),{})}}},Fe={class:"status"};function Je(e,_,o,h,m,r){const l=n("charge-point-sum-card"),p=n("charge-point-card"),d=n("counter-card"),i=n("inverter-sum-card"),f=n("inverter-card"),B=n("battery-sum-card"),O=n("battery-card"),j=n("vehicle-card"),R=n("electricity-tariff-card"),D=n("ripple-control-receiver-card");return a(),I("div",Fe,[r.numChargePointsInstalled>1&&e.$store.state.mqtt["openWB/general/extern"]===!1?(a(),s(l,{key:0})):q("",!0),(a(!0),I(P,null,$(r.installedChargePoints,(b,N)=>(a(),s(p,{key:N,installedChargePoint:b,installedChargePointKey:N},null,8,["installedChargePoint","installedChargePointKey"]))),128)),(a(!0),I(P,null,$(r.counterConfigs,b=>(a(),s(d,{key:b.id,counter:b},null,8,["counter"]))),128)),r.numInvertersInstalled>1&&e.$store.state.mqtt["openWB/general/extern"]===!1?(a(),s(i,{key:1})):q("",!0),(a(!0),I(P,null,$(r.inverterConfigs,b=>(a(),s(f,{key:b.id,inverter:b},null,8,["inverter"]))),128)),r.numBatteriesInstalled>1&&e.$store.state.mqtt["openWB/general/extern"]===!1?(a(),s(B,{key:2})):q("",!0),(a(!0),I(P,null,$(r.batteryConfigs,b=>(a(),s(O,{key:b.id,battery:b},null,8,["battery"]))),128)),(a(!0),I(P,null,$(r.vehicleNames,(b,N)=>(a(),s(j,{key:N,vehicleKey:N,vehicleName:b},null,8,["vehicleKey","vehicleName"]))),128)),t(R),t(D)])}const at=W(Ke,[["render",Je],["__scopeId","data-v-051028a3"],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/Status.vue"]]);export{at as default};
