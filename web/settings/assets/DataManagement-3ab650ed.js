import{l as E,ak as P,al as R,am as $,an as U,ao as q,F as H}from"./vendor-fortawesome-231ff303.js";import{_ as B,C as N}from"./index-6ffbdc7e.js";import{_ as x}from"./dynamic-import-helper-be004503.js";import{_ as w,u as f,l as u,m,z as C,E as s,y as i,F as h,G as n,x as o,a1 as L,a2 as T,N as W,B as _,q as M,M as A,D as I}from"./vendor-0c15df0c.js";const G={props:{backupCloud:{type:Object,required:!0}},emits:["update:configuration","sendCommand"],methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})},sendSystemCommand(t,e={}){this.$emit("sendCommand",{command:t,data:e})}}},J=w(G,[["__file","/opt/openWB-dev/openwb-ui-settings/src/components/backup_clouds/BackupCloudConfigMixin.vue"]]),K={name:"BackupCloudConfigFallback",mixins:[J]},Z={class:"backup-cloud-fallback"},Q={key:1};function X(t,e,l,b,r,a){const g=f("openwb-base-alert"),d=f("openwb-base-textarea");return u(),m("div",Z,[Object.keys(t.backupCloud.configuration).length==0?(u(),C(g,{key:0,subtype:"info"},{default:s(()=>[i(' Die Backup-Cloud "'+h(t.backupCloud.name)+'" bietet keine Einstellungen. ',1)]),_:1})):(u(),m("div",Q,[n(g,{subtype:"warning"},{default:s(()=>[i(' Es wurde keine Konfigurationsseite für die Backup-Cloud "'+h(t.backupCloud.name)+'" gefunden. Die Einstellungen können als JSON direkt bearbeitet werden. ',1)]),_:1}),n(d,{title:"Konfiguration",subtype:"json","model-value":t.backupCloud.configuration,"onUpdate:modelValue":e[0]||(e[0]=y=>t.updateConfiguration(y,"configuration"))},{help:s(()=>e[1]||(e[1]=[i(" Bitte prüfen Sie, ob die Eingaben richtig interpretiert werden. ")])),_:1},8,["model-value"]),n(g,{subtype:"info"},{default:s(()=>[o("pre",null,h(JSON.stringify(t.backupCloud.configuration,void 0,2)),1)]),_:1})]))])}const Y=w(K,[["render",X],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/backup_clouds/OpenwbBackupCloudConfigFallback.vue"]]),ee={name:"OpenwbBackupCloudProxy",props:{backupCloud:{type:Object,required:!0}},emits:["update:configuration","sendCommand"],computed:{myComponent(){return console.debug(`loading backup cloud: ${this.backupCloud.type}`),L({loader:()=>x(Object.assign({"./nextcloud/backup_cloud.vue":()=>B(()=>import("./backup_cloud-1299a7eb.js"),["assets/backup_cloud-1299a7eb.js","assets/vendor-0c15df0c.js","assets/vendor-sortablejs-1a751103.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-231ff303.js","assets/index-6ffbdc7e.js","assets/vendor-bootstrap-83e2d5a1.js","assets/vendor-jquery-84e2bf4a.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-c9d2afa0.js","assets/index-932929b9.css","assets/dynamic-import-helper-be004503.js"]),"./nfs/backup_cloud.vue":()=>B(()=>import("./backup_cloud-84c01439.js"),["assets/backup_cloud-84c01439.js","assets/vendor-0c15df0c.js","assets/vendor-sortablejs-1a751103.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-231ff303.js","assets/index-6ffbdc7e.js","assets/vendor-bootstrap-83e2d5a1.js","assets/vendor-jquery-84e2bf4a.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-c9d2afa0.js","assets/index-932929b9.css","assets/dynamic-import-helper-be004503.js"]),"./onedrive/backup_cloud.vue":()=>B(()=>import("./backup_cloud-d81a65ab.js"),["assets/backup_cloud-d81a65ab.js","assets/vendor-0c15df0c.js","assets/vendor-sortablejs-1a751103.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-231ff303.js","assets/index-6ffbdc7e.js","assets/vendor-bootstrap-83e2d5a1.js","assets/vendor-jquery-84e2bf4a.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-c9d2afa0.js","assets/index-932929b9.css","assets/dynamic-import-helper-be004503.js"]),"./samba/backup_cloud.vue":()=>B(()=>import("./backup_cloud-fc4b5fba.js"),["assets/backup_cloud-fc4b5fba.js","assets/vendor-0c15df0c.js","assets/vendor-sortablejs-1a751103.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-231ff303.js","assets/index-6ffbdc7e.js","assets/vendor-bootstrap-83e2d5a1.js","assets/vendor-jquery-84e2bf4a.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-c9d2afa0.js","assets/index-932929b9.css","assets/dynamic-import-helper-be004503.js"])}),`./${this.backupCloud.type}/backup_cloud.vue`),errorComponent:Y})}},methods:{updateConfiguration(t){this.$emit("update:configuration",t)},sendCommand(t){this.$emit("sendCommand",t)}}};function te(t,e,l,b,r,a){const g=f("openwb-base-heading");return u(),m(W,null,[n(g,null,{default:s(()=>[i(' Einstellungen für Backup-Cloud Modul "'+h(l.backupCloud.name)+'" ',1)]),_:1}),(u(),C(T(a.myComponent),{"backup-cloud":l.backupCloud,"onUpdate:configuration":e[0]||(e[0]=d=>a.updateConfiguration(d)),onSendCommand:e[1]||(e[1]=d=>a.sendCommand(d))},null,40,["backup-cloud"]))],64)}const ne=w(ee,[["render",te],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/backup_clouds/OpenwbBackupCloudProxy.vue"]]),oe={props:{monitoring:{type:Object,required:!0}},emits:["update:configuration"],methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},ie=w(oe,[["__file","/opt/openWB-dev/openwb-ui-settings/src/components/monitoring/MonitoringConfigMixin.vue"]]),se={name:"MonitoringConfigFallback",mixins:[ie]},ae={class:"monitoring-fallback"};function re(t,e,l,b,r,a){const g=f("openwb-base-alert"),d=f("openwb-base-textarea");return u(),m("div",ae,[n(g,{subtype:"warning"},{default:s(()=>[i(' Es wurde keine Konfigurationsseite für den Anbieter "'+h(t.monitoring.name)+'" gefunden. Die Einstellungen können als JSON direkt bearbeitet werden. ',1)]),_:1}),n(d,{title:"Konfiguration",subtype:"json","model-value":t.monitoring.configuration,"onUpdate:modelValue":e[0]||(e[0]=y=>t.updateConfiguration(y,"configuration"))},{help:s(()=>e[1]||(e[1]=[i(" Bitte prüfen Sie, ob die Eingaben richtig interpretiert werden. ")])),_:1},8,["model-value"]),n(g,{subtype:"info"},{default:s(()=>[o("pre",null,h(JSON.stringify(t.monitoring.configuration,void 0,2)),1)]),_:1})])}const le=w(se,[["render",re],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/monitoring/OpenwbMonitoringConfigFallback.vue"]]),ue={name:"OpenwbMonitoringProxy",props:{monitoring:{type:Object,required:!0}},emits:["update:configuration"],computed:{myComponent(){return console.debug(`loading monitoring: ${this.monitoring.type}`),L({loader:()=>x(Object.assign({"./zabbix/monitoring.vue":()=>B(()=>import("./monitoring-7d0b4180.js"),["assets/monitoring-7d0b4180.js","assets/vendor-0c15df0c.js","assets/vendor-sortablejs-1a751103.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-231ff303.js","assets/index-6ffbdc7e.js","assets/vendor-bootstrap-83e2d5a1.js","assets/vendor-jquery-84e2bf4a.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-c9d2afa0.js","assets/index-932929b9.css","assets/dynamic-import-helper-be004503.js"])}),`./${this.monitoring.type}/monitoring.vue`),errorComponent:le})}},methods:{updateConfiguration(t){this.$emit("update:configuration",t)}}};function de(t,e,l,b,r,a){const g=f("openwb-base-heading");return u(),m(W,null,[n(g,null,{default:s(()=>[i(' Einstellungen für Modul "'+h(l.monitoring.name)+'" ',1)]),_:1}),(u(),C(T(a.myComponent),{monitoring:l.monitoring,"onUpdate:configuration":e[0]||(e[0]=d=>a.updateConfiguration(d))},null,40,["monitoring"]))],64)}const pe=w(ue,[["render",de],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/monitoring/OpenwbMonitoringProxy.vue"]]);E.add(P,R,$,U,q);const ce={name:"OpenwbDataManagementView",components:{FontAwesomeIcon:H,OpenwbBackupCloudProxy:ne,OpenwbMonitoringProxy:pe},mixins:[N],props:{installAssistantActive:{type:Boolean,required:!1,default:!1},showBackupCloudSection:{type:Boolean,required:!1,default:!0}},emits:["sendCommand","save","reset","defaults"],data(){return{mqttTopicsToSubscribe:["openWB/system/configurable/backup_clouds","openWB/system/configurable/monitoring","openWB/system/backup_cloud/config","openWB/system/backup_cloud/backup_before_update","openWB/system/device/+/component/+/config","openWB/chargepoint/+/config","openWB/optional/monitoring/config","openWB/vehicle/+/name","openWB/LegacySmartHome/config/get/Devices/+/device_configured","openWB/LegacySmartHome/config/get/Devices/+/device_name"],warningAcknowledged:!1,showRestoreSection:!this.installAssistantActive,selectedRestoreFile:void 0,restoreUploadDone:!1,selectedDataMigrationFile:void 0,dataMigrationUploadDone:!1,dataMigrationConfig:[{sectionName:"Ladepunkte",sectionComponents:[{key:"cp1",label:"Ladepunkt 1",validTypes:["chargePoint"]},{key:"cp2",label:"Ladepunkt 2",validTypes:["chargePoint"]},{key:"cp3",label:"Ladepunkt 3",validTypes:["chargePoint"]},{key:"cp4",label:"Ladepunkt 4",validTypes:["chargePoint"]},{key:"cp5",label:"Ladepunkt 5",validTypes:["chargePoint"]},{key:"cp6",label:"Ladepunkt 6",validTypes:["chargePoint"]},{key:"cp7",label:"Ladepunkt 7",validTypes:["chargePoint"]},{key:"cp8",label:"Ladepunkt 8",validTypes:["chargePoint"]}]},{sectionName:"Zähler",sectionComponents:[{key:"evu",label:"EVU",validTypes:["counter"]},{key:"consumer1",label:"Verbraucher 1",validTypes:["counter"]},{key:"consumer2",label:"Verbraucher 2",validTypes:["counter"]},{key:"consumer3",label:"Verbraucher 3",validTypes:["counter"]}]},{sectionName:"Wechselrichter",sectionComponents:[{key:"pvAll",label:"Wechselrichter (Summe)",validTypes:["inverter"],help:"Die 1.9er Version von openWB speichert lediglich die Summen-Leistung aller Wechselrichter."}]},{sectionName:"Batteriespeicher",sectionComponents:[{key:"bat",label:"Speicher 1",validTypes:["battery"]}]},{sectionName:"Fahrzeuge",sectionComponents:[{key:"ev1",label:"Fahrzeug von Ladepunkt 1",validTypes:["vehicle"]},{key:"ev2",label:"Fahrzeug von Ladepunkt 2",validTypes:["vehicle"]}]},{sectionName:"SmartHome 2.0",sectionComponents:[{key:"sh1",label:"Gerät 1",validTypes:["smartHome"]},{key:"sh2",label:"Gerät 2",validTypes:["smartHome"]},{key:"sh3",label:"Gerät 3",validTypes:["smartHome"]},{key:"sh4",label:"Gerät 4",validTypes:["smartHome"]},{key:"sh5",label:"Gerät 5",validTypes:["smartHome"]},{key:"sh6",label:"Gerät 6",validTypes:["smartHome"]},{key:"sh7",label:"Gerät 7",validTypes:["smartHome"]},{key:"sh8",label:"Gerät 8",validTypes:["smartHome"]},{key:"sh9",label:"Gerät 9",validTypes:["smartHome"]}]}],dataMigrationMapping:{cp1:void 0,cp2:void 0,cp3:void 0,cp4:void 0,cp5:void 0,cp6:void 0,cp7:void 0,cp8:void 0,evu:void 0,pvAll:void 0,bat:void 0,consumer1:void 0,consumer2:void 0,consumer3:void 0,sh1:void 0,sh2:void 0,sh3:void 0,sh4:void 0,sh5:void 0,sh6:void 0,sh7:void 0,sh8:void 0,sh9:void 0,ev1:void 0,ev2:void 0}}},computed:{backupCloudList(){return this.$store.state.mqtt["openWB/system/configurable/backup_clouds"]},componentConfigurations(){return this.getWildcardTopics("openWB/system/device/+/component/+/config")},chargePointOptions(){let t=this.getWildcardTopics("openWB/chargepoint/+/config");var e=[];for(const l of Object.values(t))e.push({value:l.id,text:l.name});return e},counterOptions(){var t=[];for(const e of Object.values(this.componentConfigurations))this.isComponentType(e.type,"counter")&&t.push({value:e.id,text:e.name});return t},inverterOptions(){var t=[];for(const e of Object.values(this.componentConfigurations))this.isComponentType(e.type,"inverter")&&t.push({value:e.id,text:e.name});return t},monitoringList(){return this.$store.state.mqtt["openWB/system/configurable/monitoring"]},batteryOptions(){var t=[];for(const e of Object.values(this.componentConfigurations))this.isComponentType(e.type,"bat")&&t.push({value:e.id,text:e.name});return t},vehicleOptions(){let t=this.getWildcardTopics("openWB/vehicle/+/name");var e=[];for(const[l,b]of Object.entries(t)){let r=parseInt(l.match(/\/(\d\d?)\//)[1]);e.push({value:r,text:b})}return e},smartHomeOptions(){let t=this.getWildcardTopics("openWB/LegacySmartHome/config/get/Devices/+/device_configured");var e=[];for(const[l,b]of Object.entries(t))if(b==1){let r=parseInt(l.match(/\/(\d\d?)\//)[1]);e.push({value:r,text:this.$store.state.mqtt[`openWB/LegacySmartHome/config/get/Devices/${r}/device_name`]})}return e}},methods:{isComponentType(t,e){return t.split("_").includes(e)},getBackupCloudDefaultConfiguration(t){const e=this.backupCloudList.find(l=>l.value==t);return Object.prototype.hasOwnProperty.call(e,"defaults")?{...JSON.parse(JSON.stringify(e.defaults))}:(console.warn("no default configuration found for backup cloud type!",t),{})},sendSystemCommand(t,e={}){this.$emit("sendCommand",{command:t,data:e})},getMigrationOptions(t){var e=[{value:void 0,text:"-- nicht übernehmen --"}];return t.includes("chargePoint")&&e.push(...this.chargePointOptions),t.includes("counter")&&e.push(...this.counterOptions),t.includes("inverter")&&e.push(...this.inverterOptions),t.includes("battery")&&e.push(...this.batteryOptions),t.includes("vehicle")&&e.push(...this.vehicleOptions),t.includes("smartHome")&&e.push(...this.smartHomeOptions),e},updateConfiguration(t,e){console.debug("updateConfiguration",t,e),this.updateState(t,e.value,e.object)},updateSelectedBackupCloud(t){this.updateState("openWB/system/backup_cloud/config",t,"type"),this.updateState("openWB/system/backup_cloud/config",this.getBackupCloudDefaultConfiguration(t))},updateSelectedRestoreFile(t){this.selectedRestoreFile=t.target.files[0]},updateSelectedDataMigrationFile(t){this.selectedDataMigrationFile=t.target.files[0]},uploadFile(t,e,l){return new Promise(b=>{if(e!==void 0){this.$root.postClientMessage("Hochladen der Datei gestartet.","info");let r=new FormData;r.append("file",e),r.append("target",t),this.axios.post(location.protocol+"//"+location.host+"/openWB/web/settings/uploadFile.php",r,{headers:{"Content-Type":"multipart/form-data"}}).then(()=>{this.$root.postClientMessage(l,"success"),b(!0)}).catch(a=>{if(a.response){console.error(a.response.status,a.response.data);var g="Hochladen der Datei fehlgeschlagen!<br />"+a.response.status+": "+a.response.data}else a.request?(console.error(a.request),g+="Es wurde keine Antwort vom Server empfangen."):(console.error("Error",a.message),g+="Es ist ein unbekannter Fehler aufgetreten.");this.$root.postClientMessage(g,"danger"),b(!1)})}else console.error("no file selected for upload"),b(!1)})},getMonitoringDefaultConfiguration(t){const e=this.monitoringList.find(l=>l.value==t);return Object.prototype.hasOwnProperty.call(e,"defaults")?{...e.defaults}:(console.warn("no default configuration found for monitoring type!",t),{})},updateSelectedMonitoring(t){this.updateState("openWB/optional/monitoring/config",t,"type"),this.updateState("openWB/optional/monitoring/config",this.getMonitoringDefaultConfiguration(t))},async uploadRestoreFile(){const t="Die Sicherungsdatei wurde erfolgreich hochgeladen. Sie können die Wiederherstellung jetzt starten.";this.restoreUploadDone=await this.uploadFile("restore",this.selectedRestoreFile,t)},async uploadDataMigrationFile(){const t="Die Sicherungsdatei wurde erfolgreich hochgeladen. Sie können den Import jetzt starten.";this.dataMigrationUploadDone=await this.uploadFile("migrate",this.selectedDataMigrationFile,t)},restoreBackup(){this.sendSystemCommand("restoreBackup"),this.$store.commit("storeLocal",{name:"reloadRequired",value:!0})},dataMigration(){this.sendSystemCommand("dataMigration",this.dataMigrationMapping)},factoryReset(){this.sendSystemCommand("factoryReset",{}),this.$store.commit("storeLocal",{name:"reloadRequired",value:!0})}}},me={class:"system"},ge={key:1},fe={name:"backupForm"},be={class:"row justify-content-center"},he={class:"col-md-4 d-flex py-1 justify-content-center"},ke={key:0,name:"restoreForm"},ye={class:"input-group"},ve={class:"input-group-prepend"},_e={class:"input-group-text"},we={class:"custom-file"},Ce={id:"input-file-label",class:"custom-file-label",for:"input-file","data-browse":"Suchen"},Be={class:"input-group-append"},De=["disabled"],Se={class:"row justify-content-center"},Me={class:"col-md-4 d-flex py-1 justify-content-center"},We={key:1,name:"cloudBackupForm"},Oe={key:0},Fe={name:"dataMigrationForm"},Ae={class:"input-group"},xe={class:"input-group-prepend"},Le={class:"input-group-text"},Te={class:"custom-file"},ze={id:"data-migration-file-label",class:"custom-file-label",for:"data-migration-file","data-browse":"Suchen"},Ve={class:"input-group-append"},je=["disabled"],Ee={class:"row justify-content-center"},Pe={class:"col-md-4 d-flex py-1 justify-content-center"},Re={key:1,name:"resetForm"},$e={class:"row justify-content-center"},Ue={class:"col-md-4 d-flex py-1 justify-content-center"},qe={key:2,name:"zabbixConfigured"},He={key:0},Ne={key:1},Ie={key:0};function Ge(t,e,l,b,r,a){const g=f("openwb-base-button-group-input"),d=f("openwb-base-alert"),y=f("openwb-base-heading"),v=f("font-awesome-icon"),D=f("openwb-base-click-button"),O=f("openwb-base-select-input"),z=f("openwb-base-button-input"),V=f("openwb-backup-cloud-proxy"),F=f("openwb-base-submit-buttons"),S=f("openwb-base-card"),j=f("openwb-monitoring-proxy");return u(),m("div",me,[l.installAssistantActive?_("",!0):(u(),C(d,{key:0,subtype:"danger"},{default:s(()=>[e[21]||(e[21]=o("h2",null,"Achtung!",-1)),e[22]||(e[22]=o("p",null," Vor allen Aktionen auf dieser Seite ist sicherzustellen, dass kein Ladevorgang aktiv ist! Zur Sicherheit bitte zusätzlich alle Fahrzeuge von der Ladestation / den Ladestationen abstecken! ",-1)),n(g,{modelValue:r.warningAcknowledged,"onUpdate:modelValue":e[0]||(e[0]=p=>r.warningAcknowledged=p),title:"Ich habe die Warnung verstanden",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}]},null,8,["modelValue"])]),_:1})),r.warningAcknowledged||l.installAssistantActive?(u(),m("div",ge,[n(S,{title:"Sicherung / Wiederherstellung",subtype:"success",collapsible:!0,collapsed:!l.installAssistantActive},{default:s(()=>{var p,k;return[o("form",fe,[n(y,null,{default:s(()=>e[23]||(e[23]=[i("Sicherung")])),_:1}),n(d,{subtype:"danger"},{default:s(()=>e[24]||(e[24]=[i(' Aktuell können nur Sicherungen wiederhergestellt werden, die in den Entwicklungszweigen "master", "Beta" oder "Release" erstellt wurden! ')])),_:1}),n(d,{subtype:"info"},{default:s(()=>e[25]||(e[25]=[i(" Nachdem die Sicherung abgeschlossen ist, kann die erstellte Datei über den Link in der Benachrichtigung oder "),o("a",{href:"/openWB/data/backup/",target:"_blank"},"hier",-1),i(" heruntergeladen werden. Beim Herunterladen bitte darauf achten, dass die Datei mit der Endung .tar.gz gespeichert wird. Ggf. das automatische Entpacken des Browsers deaktivieren. ")])),_:1}),o("div",be,[o("div",he,[n(D,{class:"btn-success clickable",onButtonClicked:e[1]||(e[1]=c=>a.sendSystemCommand("createBackup",{use_extended_filename:!0}))},{default:s(()=>[e[26]||(e[26]=i(" Sicherung erstellen ")),n(v,{"fixed-width":"",icon:["fas","archive"]})]),_:1})])])]),r.showRestoreSection?(u(),m("form",ke,[e[31]||(e[31]=o("hr",null,null,-1)),n(y,null,{default:s(()=>e[27]||(e[27]=[i("Wiederherstellung")])),_:1}),n(d,{subtype:"danger"},{default:s(()=>e[28]||(e[28]=[i(" Für die Wiederherstellung wird eine aktive Internetverbindung benötigt."),o("br",null,null,-1),i(' Aktuell können nur Sicherungen wiederhergestellt werden, die in den Entwicklungszweigen "master", "Beta" oder "Release" erstellt wurden! ')])),_:1}),o("div",ye,[o("div",ve,[o("div",_e,[n(v,{"fixed-width":"",icon:["fas","file-archive"]})])]),o("div",we,[o("input",{id:"input-file",type:"file",class:"custom-file-input",accept:".tar.gz,application/gzip,application/tar+gzip",onChange:e[2]||(e[2]=c=>a.updateSelectedRestoreFile(c))},null,32),o("label",Ce,h(r.selectedRestoreFile?r.selectedRestoreFile.name:"Bitte eine Datei auswählen"),1)]),o("div",Be,[o("button",{class:M(["btn",r.selectedRestoreFile?"btn-success clickable":"btn-outline-success"]),disabled:!r.selectedRestoreFile,type:"button",onClick:e[3]||(e[3]=c=>a.uploadRestoreFile())},[e[29]||(e[29]=i(" Hochladen ")),n(v,{"fixed-width":"",icon:["fas","upload"]})],10,De)])]),o("div",Se,[o("div",Me,[n(D,{class:M(r.restoreUploadDone?"btn-success clickable":"btn-outline-success"),disabled:!r.restoreUploadDone,onButtonClicked:e[4]||(e[4]=c=>a.restoreBackup())},{default:s(()=>[e[30]||(e[30]=i(" Wiederherstellung starten ")),n(v,{"fixed-width":"",icon:["fas","box-open"]})]),_:1},8,["class","disabled"])])])])):_("",!0),l.showBackupCloudSection?(u(),m("form",We,[e[35]||(e[35]=o("hr",null,null,-1)),n(y,null,{default:s(()=>e[32]||(e[32]=[i(" Automatische Sicherung in einen Cloud-Dienst ")])),_:1}),n(d,{subtype:"info"},{default:s(()=>e[33]||(e[33]=[i(" Ist die openWB als primary konfiguriert, wird zwischen Mitternacht und 5:00 Uhr automatisch eine Sicherung erstellt und in den angegebenen Cloud-Dienst (nicht openWB Cloud!) hochgeladen. Ist kein Cloud-Dienst konfiguriert, wird keine automatische Sicherung erstellt. Die automatische Sicherung kann unabhängig von der openWB Cloud genutzt werden."),o("br",null,null,-1),i(" Die manuelle Cloud-Sicherung und -falls aktiviert- die Sicherung vor einem Update werden sowohl von einer primary als auch von einer secondary durchgeführt."),o("br",null,null,-1),i(" Die Anleitung zur Konfiguration des Cloud-Dienstes findest Du "),o("a",{href:"https://github.com/openWB/core/wiki/Cloud-Sicherung",target:"_blank",rel:"noopener noreferrer"}," hier ",-1),i(" . ")])),_:1}),n(O,{class:"mb-2",title:"Backup-Cloud",options:a.backupCloudList,"model-value":(p=t.$store.state.mqtt["openWB/system/backup_cloud/config"])==null?void 0:p.type,"onUpdate:modelValue":e[5]||(e[5]=c=>a.updateSelectedBackupCloud(c))},null,8,["options","model-value"]),(k=t.$store.state.mqtt["openWB/system/backup_cloud/config"])!=null&&k.type?(u(),m("div",Oe,[n(g,{title:"Sicherung vor System-Update",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":t.$store.state.mqtt["openWB/system/backup_cloud/backup_before_update"],"onUpdate:modelValue":e[6]||(e[6]=c=>t.updateState("openWB/system/backup_cloud/backup_before_update",c))},{help:s(()=>e[34]||(e[34]=[i(" Ist diese Option aktiviert, dann wird vor jedem System-Update automatisch eine Sicherung erstellt und diese in die Backup-Cloud hochgeladen. ")])),_:1},8,["model-value"]),n(z,{title:"Manuelle Cloud-Sicherung","button-text":"Sicherung erstellen und hochladen",subtype:"success",onButtonClicked:e[7]||(e[7]=c=>a.sendSystemCommand("createCloudBackup",{}))}),n(V,{"backup-cloud":t.$store.state.mqtt["openWB/system/backup_cloud/config"],"onUpdate:configuration":e[8]||(e[8]=c=>a.updateConfiguration("openWB/system/backup_cloud/config",c)),onSendCommand:e[9]||(e[9]=c=>a.sendSystemCommand(c.command,c.args))},null,8,["backup-cloud"])])):_("",!0),n(F,{"form-name":"cloudBackupForm","hide-reset":!0,"hide-defaults":!0,onSave:e[10]||(e[10]=c=>t.$emit("save")),onReset:e[11]||(e[11]=c=>t.$emit("reset")),onDefaults:e[12]||(e[12]=c=>t.$emit("defaults"))})])):_("",!0)]}),_:1},8,["collapsed"]),l.installAssistantActive?_("",!0):(u(),C(S,{key:0,title:"Datenübernahme",subtype:"success",collapsible:!0,collapsed:!0},{default:s(()=>[o("form",Fe,[n(d,{subtype:"info"},{default:s(()=>e[36]||(e[36]=[i(" Hier kann die Sicherung einer älteren 1.9er Version hochgeladen werden, um vorhandene historische Daten (Diagramme und Ladeprotokolle) sowie Cloud-Daten und Seriennummer in diese Installation zu importieren. Die Zuordnung zwischen den alten und neuen Komponenten muss manuell durchgeführt werden. ")])),_:1}),n(d,{subtype:"danger"},{default:s(()=>e[37]||(e[37]=[i(" Die Portierung kann bei vielen historischen Daten von mehreren Jahren durchaus bis zu 30 Minuten dauern. Die openWB in dieser Zeit bitte nicht herunterfahren! Du erhältst eine Meldung, wenn die Datenübernahme abgeschlossen ist."),o("br",null,null,-1),i(" Vor der Datenübernahme unbedingt eine Sicherung erstellen."),o("br",null,null,-1),i(" Die Datenübernahme kann nur durch Einspielen einer Sicherung rückgängig gemacht werden! ")])),_:1}),o("div",Ae,[o("div",xe,[o("div",Le,[n(v,{"fixed-width":"",icon:["fas","file-archive"]})])]),o("div",Te,[o("input",{id:"data-migration-file",type:"file",class:"custom-file-input",accept:".tar.gz,application/gzip,application/tar+gzip",onChange:e[13]||(e[13]=p=>a.updateSelectedDataMigrationFile(p))},null,32),o("label",ze,h(r.selectedDataMigrationFile?r.selectedDataMigrationFile.name:"Bitte eine Datei auswählen"),1)]),o("div",Ve,[o("button",{class:M(["btn",r.selectedDataMigrationFile?"btn-success clickable":"btn-outline-success"]),disabled:!r.selectedDataMigrationFile,type:"button",onClick:e[14]||(e[14]=p=>a.uploadDataMigrationFile())},[e[38]||(e[38]=i(" Hochladen ")),n(v,{"fixed-width":"",icon:["fas","upload"]})],10,je)])]),n(y,null,{default:s(()=>e[39]||(e[39]=[i(" Zuordnung der Komponenten ")])),_:1}),(u(!0),m(W,null,A(r.dataMigrationConfig,p=>(u(),m("div",{key:p.sectionName},[n(y,null,{default:s(()=>[i(h(p.sectionName),1)]),_:2},1024),(u(!0),m(W,null,A(p.sectionComponents,k=>(u(),C(O,{key:k.key,modelValue:r.dataMigrationMapping[k.key],"onUpdate:modelValue":c=>r.dataMigrationMapping[k.key]=c,title:k.label,options:a.getMigrationOptions(k.validTypes)},I({_:2},[k.help?{name:"help",fn:s(()=>[i(h(k.help),1)]),key:"0"}:void 0]),1032,["modelValue","onUpdate:modelValue","title","options"]))),128))]))),128)),o("div",Ee,[o("div",Pe,[n(D,{class:M(r.dataMigrationUploadDone?"btn-success clickable":"btn-outline-success"),disabled:!r.dataMigrationUploadDone,onButtonClicked:e[15]||(e[15]=p=>a.dataMigration())},{default:s(()=>[e[40]||(e[40]=i(" Datenübernahme starten ")),n(v,{"fixed-width":"",icon:["fas","box-open"]})]),_:1},8,["class","disabled"])])])])]),_:1})),l.installAssistantActive?_("",!0):(u(),m("form",Re,[n(S,{title:"Zurücksetzen",subtype:"danger",collapsible:!0,collapsed:!0},{footer:s(()=>[o("div",$e,[o("div",Ue,[n(D,{class:"btn-danger clickable",onButtonClicked:e[16]||(e[16]=p=>a.factoryReset())},{default:s(()=>[n(v,{"fixed-width":"",icon:["fas","skull-crossbones"]}),e[42]||(e[42]=i(" Zurücksetzen ")),n(v,{"fixed-width":"",icon:["fas","skull-crossbones"]})]),_:1})])])]),default:s(()=>[n(d,{subtype:"danger"},{default:s(()=>e[41]||(e[41]=[i(" Alle Einstellungen, angelegte Geräte/Komponenten, Ladepunkte und Fahrzeuge, etc., Tages-, Monats- und Jahresauswertungen sowie das Ladeprotokoll werden unwiederbringlich gelöscht. Auch die Vorkonfiguration im Auslieferungszustand wird gelöscht. Die openWB muss danach komplett neu eingerichtet werden. Die openWB wird hierfür automatisch neu gestartet. Bitte erstelle vor dem Zurücksetzen eine Sicherung! ")])),_:1})]),_:1})])),l.installAssistantActive?_("",!0):(u(),m("form",qe,[n(S,{title:"Monitoring",subtype:"success",collapsible:!0,collapsed:!0},{footer:s(()=>[n(F,{"form-name":t.zabbixConfigured,"hide-defaults":!0,onSave:e[19]||(e[19]=p=>t.$emit("save")),onReset:e[20]||(e[20]=p=>t.$emit("reset"))},null,8,["form-name"])]),default:s(()=>[t.$store.state.mqtt["openWB/general/extern"]===!0?(u(),m("div",He,[n(d,{subtype:"info"},{default:s(()=>e[43]||(e[43]=[i(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')])),_:1})])):(u(),m("div",Ne,[n(d,{subtype:"info"},{default:s(()=>e[44]||(e[44]=[i(" Das Monitoring informiert Dich sofort per E-Mail, wenn eine Deiner Kompnenten oder Ladepunkte ein Problem hat oder die openWB nicht mehr erreichbar ist. ")])),_:1}),n(O,{class:"mb-2",title:"Anbieter",options:a.monitoringList,"model-value":t.$store.state.mqtt["openWB/optional/monitoring/config"]?t.$store.state.mqtt["openWB/optional/monitoring/config"].type:"","onUpdate:modelValue":e[17]||(e[17]=p=>a.updateSelectedMonitoring(p))},null,8,["options","model-value"]),t.$store.state.mqtt["openWB/optional/monitoring/config"]&&t.$store.state.mqtt["openWB/optional/monitoring/config"].type?(u(),m("div",Ie,[n(j,{monitoring:t.$store.state.mqtt["openWB/optional/monitoring/config"],"onUpdate:configuration":e[18]||(e[18]=p=>a.updateConfiguration("openWB/optional/monitoring/config",p))},null,8,["monitoring"])])):_("",!0)]))]),_:1})]))])):_("",!0)])}const Je=w(ce,[["render",Ge],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/DataManagement.vue"]]),Ye=Object.freeze(Object.defineProperty({__proto__:null,default:Je},Symbol.toStringTag,{value:"Module"}));export{J as B,Je as D,ie as M,Ye as a};
