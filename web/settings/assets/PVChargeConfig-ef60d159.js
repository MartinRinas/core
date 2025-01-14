import{C as B}from"./index-90e11756.js";import{l as S,W as V,a4 as k,a5 as z,F as y}from"./vendor-fortawesome-05d7e447.js";import{_ as E,u as g,k as s,l as u,x as o,G as i,E as a,y as t,F as C,z as _,B as f}from"./vendor-06e11d0e.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";S.add(V,k,z);const M={name:"OpenwbPVChargeConfigView",components:{FontAwesomeIcon:y},mixins:[B],emits:["save","reset","defaults"],data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/general/chargemode_config/pv_charging/control_range","openWB/general/chargemode_config/pv_charging/feed_in_yield","openWB/general/chargemode_config/pv_charging/switch_on_threshold","openWB/general/chargemode_config/pv_charging/switch_on_delay","openWB/general/chargemode_config/pv_charging/switch_off_threshold","openWB/general/chargemode_config/pv_charging/switch_off_delay","openWB/general/chargemode_config/pv_charging/phases_to_use","openWB/general/chargemode_config/pv_charging/bat_mode","openWB/general/chargemode_config/pv_charging/bat_power_reserve","openWB/general/chargemode_config/pv_charging/bat_power_reserve_active","openWB/general/chargemode_config/pv_charging/bat_power_discharge","openWB/general/chargemode_config/pv_charging/bat_power_discharge_active","openWB/general/chargemode_config/pv_charging/min_bat_soc"],calculatedControlMode:void 0}},computed:{controlMode:{get(){if(this.calculatedControlMode!==void 0)return this.calculatedControlMode;const n="openWB/general/chargemode_config/pv_charging/control_range";let e=this.$store.state.mqtt[n];var p="individual";return typeof e<"u"&&(e[0]===-230&&e[1]===0?p="export":e[0]===0&&e[1]===230?p="import":e[0]===-115&&e[1]===115?p="balanced":p="individual"),p},set(n){const e="openWB/general/chargemode_config/pv_charging/control_range";switch(this.calculatedControlMode=n,n){case"export":this.updateState(e,[-230,0]);break;case"import":this.updateState(e,[0,230]);break;case"balanced":this.updateState(e,[-115,115]);break}}},batMode:{get(){return this.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_mode"]},set(n){this.updateState("openWB/general/chargemode_config/pv_charging/bat_mode",n)}}},watch:{controlMode(n){this.calculatedControlMode=n}}},q={class:"pvChargeConfig"},L={name:"pvChargeConfigForm"},$={key:0},A={key:1},U={key:0},P={key:1},R={key:0},D={key:1},F={key:0};function N(n,e,p,I,G,l){const b=g("openwb-base-alert"),m=g("openwb-base-button-group-input"),d=g("openwb-base-number-input"),c=g("openwb-base-card"),h=g("font-awesome-icon"),w=g("openwb-base-range-input"),v=g("openwb-base-heading"),W=g("openwb-base-submit-buttons");return s(),u("div",q,[o("form",L,[i(c,{title:"Regelparameter"},{default:a(()=>[n.$store.state.mqtt["openWB/general/extern"]===!0?(s(),u("div",$,[i(b,{subtype:"info"},{default:a(()=>e[18]||(e[18]=[t(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')])),_:1})])):(s(),u("div",A,[i(m,{modelValue:l.controlMode,"onUpdate:modelValue":e[0]||(e[0]=r=>l.controlMode=r),title:"Regelmodus",buttons:[{buttonValue:"export",text:"Einspeisung"},{buttonValue:"import",text:"Bezug"},{buttonValue:"balanced",text:"Ausgewogen"},{buttonValue:"individual",text:"Individuell"}]},{help:a(()=>e[19]||(e[19]=[t(" Die Ladeleistung kann nicht mit absoluter Genauigkeit eingestellt werden, sodass am EVU-Punkt nicht auf exakt 0W geregelt werden kann. Der Regelmodus legt fest, ob diese Differenz am EVU-Punkt (ca. 200-300W) zu geringem Netzbezug oder geringer Netzeinspeisung führen soll."),o("br",null,null,-1),t(" Bei Speichervorrang erzeugt die Regelung bei Bedarf unabhängig vom eingestellten Regelmodus Einspeisung, damit der Speicher seine Ladeleistung erhöht."),o("br",null,null,-1),t(" Achtung: bei unlogischen Einstellungen kann die Regelung gestört werden! Im Zweifel bitte unsere vordefinierten Modi verwenden. ")])),_:1},8,["modelValue"]),i(d,{disabled:l.controlMode!=="individual",readonly:l.controlMode!=="individual",title:"Minimum",step:.005,unit:"kW",required:"","model-value":Array.isArray(n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/control_range"])?n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/control_range"][0]/1e3:void 0,"onUpdate:modelValue":e[1]||(e[1]=r=>n.updateState("openWB/general/chargemode_config/pv_charging/control_range",r*1e3,"0"))},{help:a(()=>e[20]||(e[20]=[t(" Untere Grenze des Regelbereichs. ")])),_:1},8,["disabled","readonly","model-value"]),i(d,{disabled:l.controlMode!=="individual",readonly:l.controlMode!=="individual",title:"Maximum",step:.005,unit:"kW",required:"","model-value":Array.isArray(n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/control_range"])?n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/control_range"][1]/1e3:void 0,"onUpdate:modelValue":e[2]||(e[2]=r=>n.updateState("openWB/general/chargemode_config/pv_charging/control_range",r*1e3,"1"))},{help:a(()=>e[21]||(e[21]=[t(" Obere Grenze des Regelbereichs. ")])),_:1},8,["disabled","readonly","model-value"]),e[27]||(e[27]=o("hr",null,null,-1)),i(b,{subtype:"danger"},{default:a(()=>[t(" Die Differenzleistung zw. Ein- und Abschaltschwelle sollte mind. 1.4kW (230V x 6A) betragen. (Konfiguriert: "+C((n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_on_threshold"]-n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_off_threshold"])/1e3)+" kW) ",1)]),_:1}),i(d,{title:"Einschaltschwelle",min:0,step:.05,unit:"kW",required:"","model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_on_threshold"]/1e3,"onUpdate:modelValue":e[3]||(e[3]=r=>n.updateState("openWB/general/chargemode_config/pv_charging/switch_on_threshold",r*1e3))},{help:a(()=>e[22]||(e[22]=[t(" Wird der Regelbereich in Richtung Einspeisung um diese Leistung überschritten, so wird der Ladevorgang gestartet."),o("br",null,null,-1),t(" Dieser Wert wird pro Phase genutzt und ist daher immer für eine Phase anzugeben. ")])),_:1},8,["model-value"]),i(d,{title:"Einschaltverzögerung",min:0,step:1,unit:"s",required:"","model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_on_delay"],"onUpdate:modelValue":e[4]||(e[4]=r=>n.updateState("openWB/general/chargemode_config/pv_charging/switch_on_delay",r))},{help:a(()=>e[23]||(e[23]=[t(" Die Einschaltschwelle muss für die hier angegebene Zeit dauerhaft überschritten werden, bevor ein Ladevorgang gestartet wird."),o("br",null,null,-1),t(" Wenn ein Ladevorgang aktiv ist und auf PV-Laden umgeschaltet wird, wird weiter geladen, wenn die Abschaltschwelle nicht unterschritten wird. ")])),_:1},8,["model-value"]),e[28]||(e[28]=o("hr",null,null,-1)),i(d,{title:"Abschaltschwelle",step:.05,unit:"kW",required:"","model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_off_threshold"]/1e3,"onUpdate:modelValue":e[5]||(e[5]=r=>n.updateState("openWB/general/chargemode_config/pv_charging/switch_off_threshold",r*1e3))},{help:a(()=>e[24]||(e[24]=[t(" Wird der Regelbereich in Richtung Netzbezug um diese Leistung überschritten, so wird der Ladevorgang beendet. Wenn ein Speicher im System vorhanden ist, gilt die Abschaltschwelle auch für die Speicherentladung. Die Abschaltschwelle übersteuert den Mindest-SoC des Speichers (siehe Speicher-Beachtung unten)."),o("br",null,null,-1),t(" Dieser Wert ist unabhängig von der Anzahl genutzter Phasen. ")])),_:1},8,["model-value"]),i(d,{title:"Abschaltverzögerung",min:0,step:1,unit:"s",required:"","model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_off_delay"],"onUpdate:modelValue":e[6]||(e[6]=r=>n.updateState("openWB/general/chargemode_config/pv_charging/switch_off_delay",r))},{help:a(()=>e[25]||(e[25]=[t(" Die Abschaltschwelle muss für die hier angegebene Zeit dauerhaft unterschritten werden, bevor ein Ladevorgang beendet wird."),o("br",null,null,-1),t(" Wenn ein Ladevorgang aktiv ist und auf PV-Laden umgeschaltet wird, wird die Ladung sofort beendet, wenn die Abschaltschwelle unterschritten wird. ")])),_:1},8,["model-value"]),e[29]||(e[29]=o("hr",null,null,-1)),i(d,{title:"Regelpunkt Einspeisegrenze",min:0,step:.05,unit:"kW",required:"","model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/feed_in_yield"]/1e3,"onUpdate:modelValue":e[7]||(e[7]=r=>n.updateState("openWB/general/chargemode_config/pv_charging/feed_in_yield",r*1e3))},{help:a(()=>e[26]||(e[26]=[t(" Ein Wert größer 0kW bewirkt, dass weniger PV-Leistung zum Laden benutzt wird."),o("br",null,null,-1),t(" Die Nutzung dieser Option ergibt nur Sinn, wenn ein Wechselrichter mit separatem Smart-Meter am EVU-Punkt verbaut ist (nicht der originale Zähler des Versorgers!), welches eine dynamische Begrenzung der Einspeiseleistung am EVU-Punkt durch den PV-Wechselrichter bietet (bitte bei ev. Problemen immer vorab prüfen lassen)."),o("br",null,null,-1),t(' Ist eine Einspeiseleistungsreduzierung verbaut (in vielen älteren, privaten Einspeiseverträgen z.B. als 70% Regelung bekannt), wird mit Eingabe des Wertes "Regelpunkt Einspeisegrenze" ein eigenverbrauchsoptimiertes Fahrzeugladen mit PV-Überschussenergie möglich, die sonst abgeregelt werden würde (Nutzung der PV-Peaks).'),o("br",null,null,-1),t(' Wird in einem "Ladeprofil" die Option "Einspeisegrenze beachten" eingeschaltet, so wird der Regelpunkt auf diesen Wert verschoben und die Ladung startet erst, wenn der hinterlegte Wert "Regelpunkt Einspeisegrenze" überschritten wird.'),o("br",null,null,-1),t(" Zur optimalen Eigenverbrauchssteuerung sollte der Wert einige hundert Watt UNTER der im Wechselrichter hinterlegten EVU-Einspeiseleistungsgrenze liegen, damit openWB die Ladung freigibt, BEVOR der Wechselrichter begrenzt wird. ")])),_:1},8,["model-value"])]))]),_:1}),i(c,{title:"Phasenumschaltung"},{default:a(()=>[n.$store.state.mqtt["openWB/general/extern"]===!0?(s(),u("div",U,[i(b,{subtype:"info"},{default:a(()=>e[30]||(e[30]=[t(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')])),_:1})])):(s(),u("div",P,[i(m,{title:"Anzahl Phasen",buttons:[{buttonValue:1,text:"1"},{buttonValue:3,text:"Maximum"},{buttonValue:0,text:"Automatik"}],"model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/phases_to_use"],"onUpdate:modelValue":e[8]||(e[8]=r=>n.updateState("openWB/general/chargemode_config/pv_charging/phases_to_use",r))},{help:a(()=>e[31]||(e[31]=[t(' Hier kann eingestellt werden, ob Ladevorgänge im Modus "PV-Laden" mit nur einer Phase oder dem möglichen Maximum in Abhängigkeit der "Ladepunkt"- und "Fahrzeug"-Einstellungen durchgeführt werden. Im Modus "Automatik" entscheidet die Regelung, welche Einstellung genutzt wird, um den verfügbaren Überschuss in die Fahrzeuge zu laden. Voraussetzung ist die verbaute Umschaltmöglichkeit zwischen einer und mehreren Phasen (sog. 1p3p). ')])),_:1},8,["model-value"])]))]),_:1}),i(c,{title:"Speicher-Beachtung"},{default:a(()=>[n.$store.state.mqtt["openWB/general/extern"]===!0?(s(),u("div",R,[i(b,{subtype:"info"},{default:a(()=>e[32]||(e[32]=[t(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')])),_:1})])):(s(),u("div",D,[i(m,{modelValue:l.batMode,"onUpdate:modelValue":e[9]||(e[9]=r=>l.batMode=r),title:"Laden mit Überschuss",buttons:[{buttonValue:"ev_mode"},{buttonValue:"bat_mode"},{buttonValue:"min_soc_bat_mode"}]},{"label-ev_mode":a(()=>[i(h,{"fixed-width":"",icon:["fas","car-side"]}),e[33]||(e[33]=t(" Fahrzeuge "))]),"label-bat_mode":a(()=>[i(h,{"fixed-width":"",icon:["fas","fa-car-battery"]}),e[34]||(e[34]=t(" Speicher "))]),"label-min_soc_bat_mode":a(()=>[i(h,{"fixed-width":"",icon:["fas","fa-battery-half"]}),e[35]||(e[35]=t(" Mindest-SoC des Speichers "))]),help:a(()=>[e[42]||(e[42]=o("p",null,' Sofern ein Hausstromspeicher (im Folgenden "Speicher" genannt) im Energiesystem verbaut ist, kann dieser beim Fahrzeugladen mit berücksichtigt werden. Dies erfolgt passiv über die Berücksichtigung der Speicherleistungswerte und des Speicher-SoC. Eine aktive Speichersteuerung durch openWB ist aktuell mangels Speicherschnittstelle nicht möglich. ',-1)),o("p",null,[e[36]||(e[36]=t(' Bei Auswahl " ')),i(h,{"fixed-width":"",icon:["fas","car-side"]}),e[37]||(e[37]=t(' Fahrzeuge" wird der gesamte Überschuss in das EV geladen. Ist die maximale Ladeleistung der Fahrzeuge erreicht und es wird eingespeist, wird dieser Überschuss in den Speicher geladen. '))]),o("p",null,[e[38]||(e[38]=t(' Bei Auswahl " ')),i(h,{"fixed-width":"",icon:["fas","fa-car-battery"]}),e[39]||(e[39]=t(' Speicher" wird der gesamte Überschuss in den Speicher geladen. Ist die maximale Ladeleistung des Speichers erreicht und es wird eingespeist, wird dieser Überschuss unter Beachtung der Einschaltschwelle in die Fahrzeuge geladen. '))]),o("p",null,[e[40]||(e[40]=t(' Bei Auswahl " ')),i(h,{"fixed-width":"",icon:["fas","fa-battery-half"]}),e[41]||(e[41]=t(' Mindest-SoC des Speichers" wird der Überschuss bis zum Mindest-SoC in den Speicher geladen. Ist die maximale Ladeleistung des Speichers erreicht und es wird eingespeist, wird dieser Überschuss in die Fahrzeuge geladen. Wird der Mindest-SoC überschritten, wird der Überschuss ins Fahrzeug geladen. '))])]),_:1},8,["modelValue"]),l.batMode==="min_soc_bat_mode"?(s(),u("div",F,[i(w,{title:"Mindest-SoC des Speichers",min:0,max:100,step:1,unit:"%",required:"","model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/min_bat_soc"],"onUpdate:modelValue":e[10]||(e[10]=r=>n.updateState("openWB/general/chargemode_config/pv_charging/min_bat_soc",r))},null,8,["model-value"]),i(v,null,{default:a(()=>e[43]||(e[43]=[t(" Speicher-SoC unterhalb Mindest-SoC ")])),_:1}),i(m,{title:"Ladeleistung für Speicher reservieren",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_power_reserve_active"],"onUpdate:modelValue":e[11]||(e[11]=r=>n.updateState("openWB/general/chargemode_config/pv_charging/bat_power_reserve_active",r))},{help:a(()=>e[44]||(e[44]=[t(" ACHTUNG: Der hier eingestellte Wert darf die maximale Ladeleistung des Speichers nicht überschreiten."),o("br",null,null,-1),t(" Wird der Mindest-SoC des Speichers nicht erreicht, wird der Speicher mit der hier eingestellten Leistung geladen. Mit dem verbleibenden Überschuss werden die Fahrzeuge geladen. ")])),_:1},8,["model-value"]),n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_power_reserve_active"]?(s(),_(d,{key:0,title:"Reserve Ladeleistung",min:.1,step:.1,unit:"kW",required:"","model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_power_reserve"]/1e3,"onUpdate:modelValue":e[12]||(e[12]=r=>n.updateState("openWB/general/chargemode_config/pv_charging/bat_power_reserve",r*1e3))},null,8,["model-value"])):f("",!0),i(v,null,{default:a(()=>e[45]||(e[45]=[t(" Speicher-SoC oberhalb Mindest-SoC ")])),_:1}),i(m,{title:"Entladung des Speichers erlauben",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_power_discharge_active"],"onUpdate:modelValue":e[13]||(e[13]=r=>n.updateState("openWB/general/chargemode_config/pv_charging/bat_power_discharge_active",r))},{help:a(()=>e[46]||(e[46]=[t(" Wird der Mindest-SoC überschritten, wird der Überschuss ins Fahrzeug geladen und der Speicher mit der hier eingestellten Leistung in die Fahrzeuge entladen. Die Entladeleistung des Speichers wird dem Überschuss zum Erreichen der Einschaltschwelle hinzugerechnet. ")])),_:1},8,["model-value"]),n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_power_discharge_active"]?(s(),_(d,{key:1,title:"Erlaubte Entladeleistung",min:.1,step:.1,unit:"kW",required:"","model-value":n.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_power_discharge"]/1e3,"onUpdate:modelValue":e[14]||(e[14]=r=>n.updateState("openWB/general/chargemode_config/pv_charging/bat_power_discharge",r*1e3))},null,8,["model-value"])):f("",!0)])):f("",!0)]))]),_:1}),i(W,{"form-name":"pvChargeConfigForm",onSave:e[15]||(e[15]=r=>n.$emit("save")),onReset:e[16]||(e[16]=r=>n.$emit("reset")),onDefaults:e[17]||(e[17]=r=>n.$emit("defaults"))})])])}const j=E(M,[["render",N],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/PVChargeConfig.vue"]]);export{j as default};
