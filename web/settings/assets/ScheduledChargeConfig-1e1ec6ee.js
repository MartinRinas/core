import{C as g}from"./index-0f20630f.js";import{_,p as o,l as a,q as h,A as s,L as i,k as r,u}from"./vendor-93bd3532.js";import"./vendor-fortawesome-221885f6.js";import"./vendor-bootstrap-ca63a7a7.js";import"./vendor-jquery-15a435dc.js";import"./vendor-axios-566cac60.js";import"./vendor-sortablejs-b80cade1.js";const c={name:"OpenwbScheduledChargeConfig",mixins:[g],data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/general/chargemode_config/scheduled_charging/phases_to_use"]}}},b={class:"scheduledChargeConfig"},f={name:"scheduledChargeConfigForm"},v={key:0},w={key:1};function C(t,e,$,k,B,V){const d=o("openwb-base-alert"),l=o("openwb-base-button-group-input"),m=o("openwb-base-card"),p=o("openwb-base-submit-buttons");return r(),a("div",b,[h("form",f,[s(m,{title:"Phasenumschaltung"},{default:i(()=>[t.$store.state.mqtt["openWB/general/extern"]===!0?(r(),a("div",v,[s(d,{subtype:"info"},{default:i(()=>[u(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Modus "Nur Ladepunkt" befindet. ')]),_:1})])):(r(),a("div",w,[s(l,{title:"Anzahl Phasen",buttons:[{buttonValue:1,text:"1"},{buttonValue:3,text:"Maximum"},{buttonValue:0,text:"Automatik"}],"model-value":t.$store.state.mqtt["openWB/general/chargemode_config/scheduled_charging/phases_to_use"],"onUpdate:modelValue":e[0]||(e[0]=n=>t.updateState("openWB/general/chargemode_config/scheduled_charging/phases_to_use",n))},{help:i(()=>[u(' Hier kann eingestellt werden, ob Ladevorgänge im Modus "Zielladen" mit nur einer Phase oder dem möglichen Maximum in Abhängigkeit vom Ladepunkt und Fahrzeug durchgeführt werden. Im Modus "Automatik" entscheidet die Regelung, welche Einstellung genutzt wird, um das Ziel zu erreichen. ')]),_:1},8,["model-value"])]))]),_:1}),s(p,{formName:"scheduledChargeConfigForm",onSave:e[1]||(e[1]=n=>t.$emit("save")),onReset:e[2]||(e[2]=n=>t.$emit("reset")),onDefaults:e[3]||(e[3]=n=>t.$emit("defaults"))})])])}const z=_(c,[["render",C],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/ScheduledChargeConfig.vue"]]);export{z as default};