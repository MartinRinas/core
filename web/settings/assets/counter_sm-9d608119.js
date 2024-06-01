import{_,q as a,k as f,l as g,B as o,M as s,x as r,u as d,y as u}from"./vendor-f0f38b48.js";import"./vendor-sortablejs-cbf37f8f.js";const h={name:"DeviceFroniusCounterSM",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},computed:{meterRealtimeUrl:{get(){return`http://${this.deviceIpAddress}/solar_api/v1/GetMeterRealtimeData.cgi?Scope=System`}},deviceIpAddress:{get(){var e;return(e=this.$store.state.mqtt[`openWB/system/device/${this.deviceId}/config`])==null?void 0:e.configuration.ip_address}}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},b={class:"device-fronius-counter-sm"},v={class:"small"},w=["href"],D=d("br",null,null,-1);function M(e,t,l,S,k,n){const m=a("openwb-base-heading"),c=a("openwb-base-select-input"),p=a("openwb-base-number-input");return f(),g("div",b,[o(m,null,{default:s(()=>[r(" Einstellungen für Fronius SmartMeter "),d("span",v,"(Modul: "+u(e.$options.name)+")",1)]),_:1}),o(c,{title:"Kompatibilitätsmodus",notSelected:"Bitte auswählen",options:[{value:0,text:"Aus"},{value:1,text:"Variante 1"},{value:2,text:"Variante 2"}],"model-value":l.configuration.variant,"onUpdate:modelValue":t[0]||(t[0]=i=>n.updateConfiguration(i,"configuration.variant"))},{help:s(()=>[r(" Gegebenenfalls auch für alte Modelle nach einem Softwareupdate erforderlich. Fronius hat derzeit keine Konsistente Schnittstelle. Speziell beim Gen24 kann Variante 1 oder 2 erforderlich sein. Nach speichern sollten nach etwa 10-20 Sekunden Daten angezeigt werden. Ist dies nicht der Fall die andere Variante ausprobieren. ")]),_:1},8,["model-value"]),o(p,{title:"Meter ID",required:"",min:"0",max:"65535","model-value":l.configuration.meter_id,"onUpdate:modelValue":t[1]||(t[1]=i=>n.updateConfiguration(i,"configuration.meter_id"))},{help:s(()=>[r(" Die Meter ID des SmartMeters. Diese ist normalerweise 1. Bei mehreren SmartMetern im System kann es notwendig sein, die Meter ID zu ändern. Zur Ermittlung kann der folgende Link verwendet werden. Die Meter ID kann den zurückgegebenen JSON Daten entnommen werden. "),d("a",{href:n.meterRealtimeUrl,target:"_blank",rel:"noopener noreferrer"},u(n.meterRealtimeUrl),9,w),D,r(' Im Abschnitt "Body" -> "Data" werden die installierten SmartMeter mit aktuellen Messwerten angezeigt. Die Meter ID ist die Zahl vor dem Doppelpunkt und den zugehörigen Messwerten. ')]),_:1},8,["model-value"])])}const B=_(h,[["render",M],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/fronius/counter_sm.vue"]]);export{B as default};
