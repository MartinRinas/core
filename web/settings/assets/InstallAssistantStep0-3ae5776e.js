import{C as u}from"./index-f9fda857.js";import d from"./InstallAssistantStepTemplate-3c026c08.js";import{_ as p,u as i,k as m,A as g,N as a,D as h,y as c,x as t}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";const f={name:"InstallAssistantStep0",components:{InstallAssistantStepTemplate:d},mixins:[u],emits:["switchPage","endAssistant"],data:()=>({mqttTopicsToSubscribe:[],showModalWarning:!1}),methods:{requestNextPage(){this.showModalWarning=!0},nextPage(s){this.showModalWarning=!1,s==="confirm"&&this.$emit("switchPage",1)},previousPage(){},endAssistant(){this.$emit("endAssistant")}}};function A(s,e,b,w,P,n){const l=i("openwb-base-modal-dialog"),r=i("InstallAssistantStepTemplate");return m(),g(r,{title:"Start","hide-previous":!0,onNextPage:n.requestNextPage,onPreviousPage:n.previousPage,onEndAssistant:n.endAssistant},{content:a(()=>[h(l,{show:s.showModalWarning,title:"Achtung!",subtype:"danger",buttons:[{text:"Ok",event:"confirm",subtype:"success"}],onModalResult:e[0]||(e[0]=o=>n.nextPage(o))},{default:a(()=>e[1]||(e[1]=[c(" Bevor der Assistent gestartet wird ist sicherzustellen, dass kein Ladevorgang aktiv ist! Zur Sicherheit bitte zusätzlich alle Fahrzeuge von der Ladestation / den Ladestationen abstecken! ")])),_:1},8,["show"]),e[2]||(e[2]=t("h2",null,"Vielen Dank, dass Du Dich für openWB entschieden hast.",-1)),e[3]||(e[3]=t("p",null," Dieser Assistent führt Dich durch die Konfiguration der einzelnen Module: ",-1)),e[4]||(e[4]=t("ol",null,[t("li",null,"Datensicherung - Eine Sicherung erstellen"),t("li",null,"Aktualisierung des Systems"),t("li",null," Allgemeine Einstellungen: Auswahl des Betriebsmodus primary / secondary ")],-1)),e[5]||(e[5]=t("p",null," Wird diese openWB als secondary betrieben, dann werden nur noch die lokalen Ladepunkte eingerichtet. Im Betriebsmodus primary werden die folgenden zusätzlichen Schritte durchlaufen: ",-1)),e[6]||(e[6]=t("ol",{start:"4"},[t("li",null,"Energiesystem - Geräte und Komponenten einrichten"),t("li",null,"Einrichten der Ladepunkte (openWB als primary)"),t("li",null,"Konfiguration des Lastmanagements"),t("li",null,"Einrichten der Fahrzeuge"),t("li",null,"Datensicherung - Eine Sicherung erstellen")],-1)),e[7]||(e[7]=t("p",null,"Danach ist die Grundkonfiguration abgeschlossen.",-1))]),_:1},8,["onNextPage","onPreviousPage","onEndAssistant"])}const z=p(f,[["render",A],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/install_assistant/InstallAssistantStep0.vue"]]);export{z as default};
