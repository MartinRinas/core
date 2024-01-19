import{C as v}from"./index-4a56946a.js";import{l as w,K as L,F as B,L as k,M as C,c as T,N as D,O as $,P as A,Q as E,R as M}from"./vendor-fortawesome-cf9a975a.js";import{_ as y,q as n,k as r,z as l,M as u,B as t,x as c,y as g,u as W,A as I,R as V,S as R,l as q,I as N,J as S}from"./vendor-b03da118.js";import{C as Z,p as H,a as K,L as F,b as J,P as G,c as Q,T as U,i as X,d as Y,e as ee}from"./vendor-chartjs-d7444750.js";import"./vendor-bootstrap-ae747010.js";import"./vendor-jquery-9f6206bf.js";import"./vendor-axios-3d217103.js";import"./vendor-sortablejs-595f2e06.js";import"./vendor-luxon-78deadb9.js";w.add(L);const te={name:"ChargePointSumCard",mixins:[v],components:{FontAwesomeIcon:B}};function ne(e,m,a,h,_,o){const i=n("font-awesome-icon"),d=n("openwb-base-text-input"),p=n("openwb-base-heading"),s=n("openwb-base-card");return r(),l(s,{subtype:"primary",collapsible:!0,collapsed:!0},{header:u(()=>[t(i,{"fixed-width":"",icon:["fas","charging-station"]}),c(" Alle Ladepunkte ")]),default:u(()=>[t(d,{title:"Leistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/chargepoint/get/power",3,3,.001)},null,8,["model-value"]),t(d,{title:"Zählerstand laden",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/get/imported",3,3,.001)},null,8,["model-value"]),t(d,{title:"Zählerstand entladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/get/exported",3,3,.001)},null,8,["model-value"]),t(p,null,{default:u(()=>[c("Historie")]),_:1}),t(d,{title:"Heute geladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/get/daily_imported",3,3,.001)},null,8,["model-value"]),t(d,{title:"Heute entladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/get/daily_exported",3,3,.001)},null,8,["model-value"])]),_:1})}const ae=y(te,[["render",ne],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/ChargePointSumCard.vue"]]);w.add(k,C,T,L);const oe={name:"ChargePointCard",mixins:[v],components:{FontAwesomeIcon:B},props:{installedChargePointKey:String,installedChargePoint:Object},data(){return{statusLevel:["success","warning","danger"]}},computed:{chargePointIndex:{get(){return parseInt(this.installedChargePointKey.match(/(?:\/)(\d+)(?=\/)/)[1])}}}},re=W("br",null,null,-1),se=W("br",null,null,-1);function le(e,m,a,h,_,o){const i=n("font-awesome-icon"),d=n("openwb-base-alert"),p=n("openwb-base-checkbox-input"),s=n("openwb-base-text-input"),f=n("openwb-base-heading"),x=n("openwb-base-card");return r(),l(x,{subtype:"primary",collapsible:!0,collapsed:!0},{header:u(()=>[t(i,{"fixed-width":"",icon:["fas","charging-station"]}),c(" "+g(a.installedChargePoint.name)+" (ID: "+g(o.chargePointIndex)+") ",1)]),default:u(()=>[t(d,{subtype:_.statusLevel[e.$store.state.mqtt["openWB/chargepoint/"+o.chargePointIndex+"/get/fault_state"]]},{default:u(()=>[e.$store.state.mqtt["openWB/chargepoint/"+o.chargePointIndex+"/get/fault_state"]==1?(r(),l(i,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/chargepoint/"+o.chargePointIndex+"/get/fault_state"]==2?(r(),l(i,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(r(),l(i,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),c(" Modulmeldung:"),re,c(" "+g(e.$store.state.mqtt["openWB/chargepoint/"+o.chargePointIndex+"/get/fault_str"]),1)]),_:1},8,["subtype"]),t(d,{subtype:"info"},{default:u(()=>[c(" Statusmeldung:"),se,c(" "+g(e.$store.state.mqtt["openWB/chargepoint/"+o.chargePointIndex+"/get/state_str"]),1)]),_:1}),t(p,{title:"Fahrzeug angesteckt",disabled:"","model-value":e.$store.state.mqtt["openWB/chargepoint/"+o.chargePointIndex+"/get/plug_state"]==1},null,8,["model-value"]),t(p,{title:"Ladevorgang aktiv",disabled:"","model-value":e.$store.state.mqtt["openWB/chargepoint/"+o.chargePointIndex+"/get/charge_state"]==1},null,8,["model-value"]),t(s,{title:"Zählerstand laden",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/"+o.chargePointIndex+"/get/imported",3,3,.001)},null,8,["model-value"]),t(s,{title:"Zählerstand entladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/"+o.chargePointIndex+"/get/exported",3,3,.001)},null,8,["model-value"]),t(s,{title:"Heute geladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/"+o.chargePointIndex+"/get/daily_imported",3,3,.001)},null,8,["model-value"]),t(s,{title:"Heute entladen",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/chargepoint/"+o.chargePointIndex+"/get/daily_exported",3,3,.001)},null,8,["model-value"]),t(s,{title:"Wirkleistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/chargepoint/"+o.chargePointIndex+"/get/power",3,3,.001)},null,8,["model-value"]),t(s,{title:"Ladestromvorgabe",readonly:"",class:"text-right text-monospace",step:"0.01",unit:"A","model-value":e.formatNumberTopic("openWB/chargepoint/"+o.chargePointIndex+"/set/current",2)},null,8,["model-value"]),t(s,{title:"Netzfrequenz",readonly:"",class:"text-right text-monospace",step:"0.01",unit:"Hz","model-value":e.formatNumberTopic("openWB/chargepoint/"+o.chargePointIndex+"/get/frequency",2)},null,8,["model-value"]),t(f,null,{default:u(()=>[c("Werte pro Phase")]),_:1}),t(s,{title:"Spannung",readonly:"",class:"text-right text-monospace",unit:"V","model-value":e.formatPhaseArrayNumberTopic("openWB/chargepoint/"+o.chargePointIndex+"/get/voltages",1)},null,8,["model-value"]),t(s,{title:"Strom",readonly:"",class:"text-right text-monospace",unit:"A","model-value":e.formatPhaseArrayNumberTopic("openWB/chargepoint/"+o.chargePointIndex+"/get/currents",2)},null,8,["model-value"]),t(s,{title:"Wirkleistung",readonly:"",class:"text-right text-monospace",unit:"kW","model-value":e.formatPhaseArrayNumberTopic("openWB/chargepoint/"+o.chargePointIndex+"/get/powers",3,3,.001)},null,8,["model-value"]),t(s,{title:"Leistungsfaktor",readonly:"",class:"text-right text-monospace","model-value":e.formatPhaseArrayNumberTopic("openWB/chargepoint/"+o.chargePointIndex+"/get/power_factors",2)},null,8,["model-value"]),t(f,null,{default:u(()=>[c("Phasen")]),_:1}),t(s,{title:"Vorgabe",readonly:"",class:"text-right text-monospace","model-value":e.formatNumberTopic("openWB/chargepoint/"+o.chargePointIndex+"/set/phases_to_use")},null,8,["model-value"]),t(s,{title:"Aktuell",readonly:"",class:"text-right text-monospace","model-value":e.formatNumberTopic("openWB/chargepoint/"+o.chargePointIndex+"/get/phases_in_use")},null,8,["model-value"])]),_:1})}const ie=y(oe,[["render",le],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/ChargePointCard.vue"]]);w.add(k,C,T,D);const ce={name:"CounterCard",mixins:[v],components:{FontAwesomeIcon:B},props:{counter:Object},data(){return{statusLevel:["success","warning","danger"]}}},ue=W("br",null,null,-1),de=W("br",null,null,-1);function pe(e,m,a,h,_,o){const i=n("font-awesome-icon"),d=n("openwb-base-alert"),p=n("openwb-base-heading"),s=n("openwb-base-text-input"),f=n("openwb-base-card");return r(),l(f,{subtype:"danger",collapsible:!0,collapsed:!0},{header:u(()=>[t(i,{"fixed-width":"",icon:["fas","gauge-high"]}),c(" "+g(a.counter.name)+" (ID: "+g(a.counter.id)+") ",1)]),default:u(()=>[t(d,{subtype:_.statusLevel[e.$store.state.mqtt["openWB/counter/"+a.counter.id+"/get/fault_state"]]},{default:u(()=>[e.$store.state.mqtt["openWB/counter/"+a.counter.id+"/get/fault_state"]==1?(r(),l(i,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/counter/"+a.counter.id+"/get/fault_state"]==2?(r(),l(i,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(r(),l(i,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),c(" Modulmeldung:"),ue,c(" "+g(e.$store.state.mqtt["openWB/counter/"+a.counter.id+"/get/fault_str"]),1)]),_:1},8,["subtype"]),e.$store.state.mqtt["openWB/counter/"+a.counter.id+"/get/state_str"]!=null?(r(),l(d,{key:0,subtype:"info"},{default:u(()=>[c(" Statusmeldung:"),de,c(" "+g(e.$store.state.mqtt["openWB/counter/"+a.counter.id+"/get/state_str"]),1)]),_:1})):I("",!0),t(p,null,{default:u(()=>[c("Zählerstände")]),_:1}),t(s,{title:"Export",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/counter/"+a.counter.id+"/get/exported",3,3,.001)},null,8,["model-value"]),t(s,{title:"Import",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/counter/"+a.counter.id+"/get/imported",3,3,.001)},null,8,["model-value"]),t(p,null,{default:u(()=>[c("Saldierte Werte")]),_:1}),t(s,{title:"Wirkleistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/counter/"+a.counter.id+"/get/power",3,3,.001)},null,8,["model-value"]),t(s,{title:"Netzfrequenz",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"Hz","model-value":e.formatNumberTopic("openWB/counter/"+a.counter.id+"/get/frequency",3)},null,8,["model-value"]),t(p,null,{default:u(()=>[c("Werte pro Phase")]),_:1}),t(s,{title:"Spannung",readonly:"",class:"text-right text-monospace",unit:"V","model-value":e.formatPhaseArrayNumberTopic("openWB/counter/"+a.counter.id+"/get/voltages",1)},null,8,["model-value"]),t(s,{title:"Strom",readonly:"",class:"text-right text-monospace",unit:"A","model-value":e.formatPhaseArrayNumberTopic("openWB/counter/"+a.counter.id+"/get/currents",2)},null,8,["model-value"]),t(s,{title:"Wirkleistung",readonly:"",class:"text-right text-monospace",unit:"kW","model-value":e.formatPhaseArrayNumberTopic("openWB/counter/"+a.counter.id+"/get/powers",3,3,.001)},null,8,["model-value"]),t(s,{title:"Leistungsfaktor",readonly:"",class:"text-right text-monospace","model-value":e.formatPhaseArrayNumberTopic("openWB/counter/"+a.counter.id+"/get/power_factors",2)},null,8,["model-value"])]),_:1})}const me=y(ce,[["render",pe],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/CounterCard.vue"]]);w.add(k,C,T,$);const ge={name:"InverterSumCard",mixins:[v],components:{FontAwesomeIcon:B}};function he(e,m,a,h,_,o){const i=n("font-awesome-icon"),d=n("openwb-base-text-input"),p=n("openwb-base-heading"),s=n("openwb-base-card");return r(),l(s,{subtype:"success",collapsible:!0,collapsed:!0},{header:u(()=>[t(i,{"fixed-width":"",icon:["fas","solar-panel"]}),c(" Alle Wechselrichter ")]),default:u(()=>[t(d,{title:"Zählerstand",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/pv/get/exported",3,3,.001)},null,8,["model-value"]),t(d,{title:"Leistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/pv/get/power",3,3,.001)},null,8,["model-value"]),t(p,null,{default:u(()=>[c("Erträge")]),_:1}),t(d,{title:"Heute",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/pv/get/daily_exported",3,3,.001)},null,8,["model-value"]),t(d,{title:"Dieser Monat",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/pv/get/monthly_exported",3,3,.001)},null,8,["model-value"]),t(d,{title:"Dieses Jahr",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/pv/get/yearly_exported",3,3,.001)},null,8,["model-value"])]),_:1})}const _e=y(ge,[["render",he],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/InverterSumCard.vue"]]);w.add(k,C,T,$);const fe={name:"InverterCard",mixins:[v],components:{FontAwesomeIcon:B},props:{inverter:Object},data(){return{statusLevel:["success","warning","danger"]}}},be=W("br",null,null,-1);function ve(e,m,a,h,_,o){const i=n("font-awesome-icon"),d=n("openwb-base-alert"),p=n("openwb-base-text-input"),s=n("openwb-base-card");return r(),l(s,{subtype:"success",collapsible:!0,collapsed:!0},{header:u(()=>[t(i,{"fixed-width":"",icon:["fas","solar-panel"]}),c(" "+g(a.inverter.name)+" (ID: "+g(a.inverter.id)+") ",1)]),default:u(()=>[t(d,{subtype:_.statusLevel[e.$store.state.mqtt["openWB/pv/"+a.inverter.id+"/get/fault_state"]]},{default:u(()=>[e.$store.state.mqtt["openWB/pv/"+a.inverter.id+"/get/fault_state"]==1?(r(),l(i,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/pv/"+a.inverter.id+"/get/fault_state"]==2?(r(),l(i,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(r(),l(i,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),c(" Modulmeldung:"),be,c(" "+g(e.$store.state.mqtt["openWB/pv/"+a.inverter.id+"/get/fault_str"]),1)]),_:1},8,["subtype"]),t(p,{title:"Zählerstand",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/pv/"+a.inverter.id+"/get/exported",3,3,.001)},null,8,["model-value"]),t(p,{title:"Leistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/pv/"+a.inverter.id+"/get/power",3,3,.001)},null,8,["model-value"])]),_:1})}const ye=y(fe,[["render",ve],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/InverterCard.vue"]]);w.add(k,C,T,A);const We={name:"BatterySumCard",mixins:[v],components:{FontAwesomeIcon:B}},xe=W("br",null,null,-1);function we(e,m,a,h,_,o){const i=n("font-awesome-icon"),d=n("openwb-base-alert"),p=n("openwb-base-heading"),s=n("openwb-base-text-input"),f=n("openwb-base-number-input"),x=n("openwb-base-card");return r(),l(x,{subtype:"warning",collapsible:!0,collapsed:!0},{header:u(()=>[t(i,{"fixed-width":"",icon:["fas","car-battery"]}),c(" Alle Speicher ")]),default:u(()=>[t(d,{subtype:e.statusLevel[e.$store.state.mqtt["openWB/bat/get/fault_state"]]},{default:u(()=>[e.$store.state.mqtt["openWB/bat/get/fault_state"]==1?(r(),l(i,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/bat/get/fault_state"]==2?(r(),l(i,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(r(),l(i,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),c(" Modulmeldung:"),xe,c(" "+g(e.$store.state.mqtt["openWB/bat/get/fault_str"]),1)]),_:1},8,["subtype"]),t(p,null,{default:u(()=>[c("Zählerstände")]),_:1}),t(s,{title:"Ladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/get/imported",3,3,.001)},null,8,["model-value"]),t(s,{title:"Entladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/get/exported",3,3,.001)},null,8,["model-value"]),t(p,null,{default:u(()=>[c("Tageswerte")]),_:1}),t(s,{title:"Ladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/get/daily_imported",3,3,.001)},null,8,["model-value"]),t(s,{title:"Entladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/get/daily_exported",3,3,.001)},null,8,["model-value"]),t(p,null,{default:u(()=>[c("Saldierte Werte")]),_:1}),t(s,{title:"Leistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/bat/get/power",3,3,.001)},null,8,["model-value"]),t(f,{title:"Ladestand",readonly:"",class:"text-right text-monospace",unit:"%","model-value":e.$store.state.mqtt["openWB/bat/get/soc"]},null,8,["model-value"])]),_:1})}const Be=y(We,[["render",we],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/BatterySumCard.vue"]]);w.add(k,C,T,A);const ke={name:"InverterCard",mixins:[v],components:{FontAwesomeIcon:B},props:{battery:Object},data(){return{statusLevel:["success","warning","danger"]}}},Ce=W("br",null,null,-1);function Te(e,m,a,h,_,o){const i=n("font-awesome-icon"),d=n("openwb-base-alert"),p=n("openwb-base-heading"),s=n("openwb-base-text-input"),f=n("openwb-base-number-input"),x=n("openwb-base-card");return r(),l(x,{subtype:"warning",collapsible:!0,collapsed:!0},{header:u(()=>[t(i,{"fixed-width":"",icon:["fas","car-battery"]}),c(" "+g(a.battery.name)+" (ID: "+g(a.battery.id)+") ",1)]),default:u(()=>[t(d,{subtype:_.statusLevel[e.$store.state.mqtt["openWB/bat/"+a.battery.id+"/get/fault_state"]]},{default:u(()=>[e.$store.state.mqtt["openWB/bat/"+a.battery.id+"/get/fault_state"]==1?(r(),l(i,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/bat/"+a.battery.id+"/get/fault_state"]==2?(r(),l(i,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(r(),l(i,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),c(" Modulmeldung:"),Ce,c(" "+g(e.$store.state.mqtt["openWB/bat/"+a.battery.id+"/get/fault_str"]),1)]),_:1},8,["subtype"]),t(p,null,{default:u(()=>[c("Aktuelle Werte")]),_:1}),t(s,{title:"Leistung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kW","model-value":e.formatNumberTopic("openWB/bat/"+a.battery.id+"/get/power",3,3,.001)},null,8,["model-value"]),t(f,{title:"Ladestand",readonly:"",class:"text-right text-monospace",unit:"%","model-value":e.$store.state.mqtt["openWB/bat/"+a.battery.id+"/get/soc"]},null,8,["model-value"]),t(p,null,{default:u(()=>[c("Zählerstände")]),_:1}),t(s,{title:"Ladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/"+a.battery.id+"/get/imported",3,3,.001)},null,8,["model-value"]),t(s,{title:"Entladung",readonly:"",class:"text-right text-monospace",step:"0.001",unit:"kWh","model-value":e.formatNumberTopic("openWB/bat/"+a.battery.id+"/get/exported",3,3,.001)},null,8,["model-value"])]),_:1})}const Ie=y(ke,[["render",Te],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/BatteryCard.vue"]]);w.add(k,C,T,E);const qe={name:"VehicleCard",mixins:[v],components:{FontAwesomeIcon:B},props:{vehicle:Object,vehicleKey:String,vehicleName:String},data(){return{statusLevel:["success","warning","danger"]}},computed:{vehicleIndex:{get(){return parseInt(this.vehicleKey.match(/(?:\/)(\d+)(?=\/)/)[1])}},socTimestamp:{get(){return this.$store.state.mqtt["openWB/vehicle/"+this.vehicleIndex+"/get/soc_timestamp"]!==void 0?new Date(this.$store.state.mqtt["openWB/vehicle/"+this.vehicleIndex+"/get/soc_timestamp"]*1e3).toLocaleString():"-"}},socRange:{get(){return this.$store.state.mqtt["openWB/vehicle/"+this.vehicleIndex+"/get/range"]!==void 0?Math.round(this.$store.state.mqtt["openWB/vehicle/"+this.vehicleIndex+"/get/range"]):0}}}},Pe=W("br",null,null,-1);function Ne(e,m,a,h,_,o){const i=n("font-awesome-icon"),d=n("openwb-base-alert"),p=n("openwb-base-heading"),s=n("openwb-base-number-input"),f=n("openwb-base-text-input"),x=n("openwb-base-card");return r(),l(x,{subtype:"info",collapsible:!0,collapsed:!0},{header:u(()=>[t(i,{"fixed-width":"",icon:["fas","car"]}),c(" "+g(a.vehicleName)+" (ID: "+g(o.vehicleIndex)+") ",1)]),default:u(()=>[e.$store.state.mqtt["openWB/vehicle/"+o.vehicleIndex+"/get/fault_state"]!==void 0?(r(),l(d,{key:0,subtype:_.statusLevel[e.$store.state.mqtt["openWB/vehicle/"+o.vehicleIndex+"/get/fault_state"]]},{default:u(()=>[e.$store.state.mqtt["openWB/vehicle/"+o.vehicleIndex+"/get/fault_state"]==1?(r(),l(i,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/vehicle/"+o.vehicleIndex+"/get/fault_state"]==2?(r(),l(i,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(r(),l(i,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),c(" Modulmeldung:"),Pe,c(" "+g(e.$store.state.mqtt["openWB/vehicle/"+o.vehicleIndex+"/get/fault_str"]),1)]),_:1},8,["subtype"])):I("",!0),t(p,null,{default:u(()=>[c("Fahrzeugdaten")]),_:1}),t(s,{title:"Ladestand",readonly:"",class:"text-right text-monospace",unit:"%","model-value":e.$store.state.mqtt["openWB/vehicle/"+o.vehicleIndex+"/get/soc"]},null,8,["model-value"]),t(s,{title:"Reichweite",readonly:"",class:"text-right text-monospace",unit:"km","model-value":o.socRange},null,8,["model-value"]),t(f,{title:"Letzter Zeitstempel",readonly:"",class:"text-right text-monospace","model-value":o.socTimestamp},null,8,["model-value"])]),_:1})}const Se=y(qe,[["render",Ne],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/VehicleCard.vue"]]);w.add(k,C,T,M);Z.register(H,K,F,J,G,Q,U,X,Y);const Le={name:"ElectricityTariffCard",mixins:[v],components:{ChartjsLine:ee,FontAwesomeIcon:B},data(){return{mqttTopicsToSubscribe:["openWB/optional/et/provider","openWB/optional/et/get/fault_state","openWB/optional/et/get/fault_str","openWB/optional/et/get/prices"],statusLevel:["success","warning","danger"],chartDatasets:{datasets:[{label:"Stromtarif",unit:"ct/kWh",type:"line",stepped:!0,borderColor:"rgba(255, 0, 0, 0.7)",backgroundColor:"rgba(255, 10, 13, 0.3)",fill:!1,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!1,borderWidth:1,data:void 0,yAxisID:"y",parsing:{xAxisKey:"timestamp",yAxisKey:"price"}}]},chartOptions:{plugins:{title:{display:!1},tooltip:{enabled:!0},legend:{display:!1}},elements:{point:{radius:2}},responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},scales:{x:{type:"time",time:{unit:"hour",text:"Zeit",maxTicksLimit:24},display:!0,title:{display:!0,text:"Uhrzeit"},ticks:{font:{size:12},maxTicksLimit:0},grid:{}},y:{position:"left",type:"linear",display:"auto",title:{font:{size:12},display:!0,text:"Preis [ct/kWh]"},grid:{},ticks:{font:{size:12},stepSize:.01,maxTicksLimit:11}}}}}},computed:{electricityTariffConfigured(){const e=this.$store.state.mqtt["openWB/optional/et/provider"];return e!==void 0?(console.log(e.type),e.type!==null):!1},chartDataRead(){return this.chartDataObject.datasets[0].data!=null},chartDataObject(){if(this.$store.state.mqtt["openWB/optional/et/get/prices"]){var e=this.$store.state.mqtt["openWB/optional/et/get/prices"],m=[];for(const[_,o]of Object.entries(e))m.push({timestamp:_*1e3,price:o*1e5});const h=m.slice(-1)[0];m.push({timestamp:h.timestamp+(60*60-1)*1e3,price:h.price})}const a=this.chartDatasets;return a.datasets[0].data=m,a}}},$e=e=>(V("data-v-f4769d2f"),e=e(),R(),e),Ae=$e(()=>W("br",null,null,-1)),Oe={class:"openwb-chart"};function je(e,m,a,h,_,o){const i=n("font-awesome-icon"),d=n("openwb-base-alert"),p=n("openwb-base-text-input"),s=n("chartjs-line"),f=n("openwb-base-card");return o.electricityTariffConfigured?(r(),l(f,{key:0,subtype:"secondary",collapsible:!0,collapsed:!0},{header:u(()=>[t(i,{"fixed-width":"",icon:["fas","ranking-star"]}),c(" Variabler Stromtarif ")]),default:u(()=>[t(d,{subtype:_.statusLevel[e.$store.state.mqtt["openWB/optional/et/get/fault_state"]]},{default:u(()=>[e.$store.state.mqtt["openWB/optional/et/get/fault_state"]==1?(r(),l(i,{key:0,"fixed-width":"",icon:["fas","exclamation-triangle"]})):e.$store.state.mqtt["openWB/optional/et/get/fault_state"]==2?(r(),l(i,{key:1,"fixed-width":"",icon:["fas","times-circle"]})):(r(),l(i,{key:2,"fixed-width":"",icon:["fas","check-circle"]})),c(" Modulmeldung:"),Ae,c(" "+g(e.$store.state.mqtt["openWB/optional/et/get/fault_str"]),1)]),_:1},8,["subtype"]),t(p,{title:"Anbieter",readonly:"","model-value":e.$store.state.mqtt["openWB/optional/et/provider"].name},null,8,["model-value"]),W("div",Oe,[o.chartDataRead?(r(),l(s,{key:0,ref:"myChart",data:o.chartDataObject,options:_.chartOptions},null,8,["data","options"])):I("",!0)])]),_:1})):I("",!0)}const ze=y(Le,[["render",je],["__scopeId","data-v-f4769d2f"],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/ElectricityTariffCard.vue"]]);const De={name:"OpenwbStatus",mixins:[v],components:{ChargePointSumCard:ae,ChargePointCard:ie,CounterCard:me,InverterSumCard:_e,InverterCard:ye,BatterySumCard:Be,BatteryCard:Ie,VehicleCard:Se,ElectricityTariffCard:ze},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/chargepoint/get/power","openWB/chargepoint/get/imported","openWB/chargepoint/get/exported","openWB/chargepoint/get/daily_imported","openWB/chargepoint/get/daily_exported","openWB/chargepoint/+/config","openWB/chargepoint/+/get/+","openWB/chargepoint/+/get/connected_vehicle/info","openWB/chargepoint/+/set/+","openWB/system/device/+/component/+/config","openWB/counter/+/get/+","openWB/pv/get/+","openWB/pv/+/get/+","openWB/bat/get/+","openWB/bat/+/get/+","openWB/vehicle/+/name","openWB/vehicle/+/get/+"]}},computed:{installedChargePoints:{get(){let e=this.getWildcardTopics("openWB/chargepoint/+/config"),m={};for(const[a,h]of Object.entries(e))(h.type==="internal_openwb"||this.$store.state.mqtt["openWB/general/extern"]===!1)&&(m[a]=h);return m}},numChargePointsInstalled:{get(){return Object.keys(this.installedChargePoints).length}},counterConfigs:{get(){return this.$store.state.mqtt["openWB/general/extern"]===!0?{}:this.filterComponentsByType(this.getWildcardTopics("openWB/system/device/+/component/+/config"),"counter")}},numInvertersInstalled:{get(){return Object.keys(this.inverterConfigs).length}},inverterConfigs:{get(){return this.$store.state.mqtt["openWB/general/extern"]===!0?{}:this.filterComponentsByType(this.getWildcardTopics("openWB/system/device/+/component/+/config"),"inverter")}},numBatteriesInstalled:{get(){return Object.keys(this.batteryConfigs).length}},batteryConfigs:{get(){return this.$store.state.mqtt["openWB/general/extern"]===!0?{}:this.filterComponentsByType(this.getWildcardTopics("openWB/system/device/+/component/+/config"),"bat")}},vehicleNames:{get(){return this.$store.state.mqtt["openWB/general/extern"]===!0?{}:this.getWildcardTopics("openWB/vehicle/+/name")}}},methods:{filterComponentsByType(e,m){return Object.keys(e).filter(a=>e[a].type.includes(m)).reduce((a,h)=>({...a,[h]:e[h]}),{})}}},Ee={class:"status"};function Me(e,m,a,h,_,o){const i=n("charge-point-sum-card"),d=n("charge-point-card"),p=n("counter-card"),s=n("inverter-sum-card"),f=n("inverter-card"),x=n("battery-sum-card"),O=n("battery-card"),j=n("vehicle-card"),z=n("electricity-tariff-card");return r(),q("div",Ee,[o.numChargePointsInstalled>1&&e.$store.state.mqtt["openWB/general/extern"]===!1?(r(),l(i,{key:0})):I("",!0),(r(!0),q(N,null,S(o.installedChargePoints,(b,P)=>(r(),l(d,{key:P,installedChargePoint:b,installedChargePointKey:P},null,8,["installedChargePoint","installedChargePointKey"]))),128)),(r(!0),q(N,null,S(o.counterConfigs,b=>(r(),l(p,{key:b.id,counter:b},null,8,["counter"]))),128)),o.numInvertersInstalled>1&&e.$store.state.mqtt["openWB/general/extern"]===!1?(r(),l(s,{key:1})):I("",!0),(r(!0),q(N,null,S(o.inverterConfigs,b=>(r(),l(f,{key:b.id,inverter:b},null,8,["inverter"]))),128)),o.numBatteriesInstalled>1&&e.$store.state.mqtt["openWB/general/extern"]===!1?(r(),l(x,{key:2})):I("",!0),(r(!0),q(N,null,S(o.batteryConfigs,b=>(r(),l(O,{key:b.id,battery:b},null,8,["battery"]))),128)),(r(!0),q(N,null,S(o.vehicleNames,(b,P)=>(r(),l(j,{key:P,vehicleKey:P,vehicleName:b},null,8,["vehicleKey","vehicleName"]))),128)),t(z)])}const Ue=y(De,[["render",Me],["__scopeId","data-v-051028a3"],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/Status.vue"]]);export{Ue as default};
