import{C as r,_ as t}from"./index-b86abe73.js";import{_}from"./dynamic-import-helper-be004503.js";import{_ as m,a1 as p,u as d,l as i,m as u,G as A,E as v,z as E,a2 as I,y as c}from"./vendor-ea36120f.js";import"./vendor-fortawesome-c5ffc2b2.js";import"./vendor-bootstrap-038cab7c.js";import"./vendor-jquery-48e02303.js";import"./vendor-axios-1f03ee31.js";import"./vendor-sortablejs-c6aaccb3.js";const P={name:"InstallAssistantView",mixins:[r],emits:["sendCommand","save","reset","defaults"],data(){return{currentPage:0,lastPage:10,showEndAssistantModal:!1}},methods:{getInstallAssistantStepComponent(){return console.debug(`loading assistant page: ${this.currentPage}`),p({loader:()=>_(Object.assign({"../components/install_assistant/InstallAssistantStep0.vue":()=>t(()=>import("./InstallAssistantStep0-7ebb79de.js"),["assets/InstallAssistantStep0-7ebb79de.js","assets/index-b86abe73.js","assets/vendor-ea36120f.js","assets/vendor-sortablejs-c6aaccb3.js","assets/vendor-3a7c342f.css","assets/vendor-fortawesome-c5ffc2b2.js","assets/vendor-bootstrap-038cab7c.js","assets/vendor-jquery-48e02303.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-1f03ee31.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-667fc0d3.js","assets/InstallAssistantStepTemplate-930e3c07.css"]),"../components/install_assistant/InstallAssistantStep1.vue":()=>t(()=>import("./InstallAssistantStep1-988fdacd.js"),["assets/InstallAssistantStep1-988fdacd.js","assets/index-b86abe73.js","assets/vendor-ea36120f.js","assets/vendor-sortablejs-c6aaccb3.js","assets/vendor-3a7c342f.css","assets/vendor-fortawesome-c5ffc2b2.js","assets/vendor-bootstrap-038cab7c.js","assets/vendor-jquery-48e02303.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-1f03ee31.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-667fc0d3.js","assets/InstallAssistantStepTemplate-930e3c07.css","assets/DataManagement-e508e35b.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStep10.vue":()=>t(()=>import("./InstallAssistantStep10-09759616.js"),["assets/InstallAssistantStep10-09759616.js","assets/index-b86abe73.js","assets/vendor-ea36120f.js","assets/vendor-sortablejs-c6aaccb3.js","assets/vendor-3a7c342f.css","assets/vendor-fortawesome-c5ffc2b2.js","assets/vendor-bootstrap-038cab7c.js","assets/vendor-jquery-48e02303.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-1f03ee31.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-667fc0d3.js","assets/InstallAssistantStepTemplate-930e3c07.css"]),"../components/install_assistant/InstallAssistantStep2.vue":()=>t(()=>import("./InstallAssistantStep2-e761c797.js"),["assets/InstallAssistantStep2-e761c797.js","assets/index-b86abe73.js","assets/vendor-ea36120f.js","assets/vendor-sortablejs-c6aaccb3.js","assets/vendor-3a7c342f.css","assets/vendor-fortawesome-c5ffc2b2.js","assets/vendor-bootstrap-038cab7c.js","assets/vendor-jquery-48e02303.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-1f03ee31.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-667fc0d3.js","assets/InstallAssistantStepTemplate-930e3c07.css","assets/System-8c4bf2fb.js","assets/System-0f1d217b.css"]),"../components/install_assistant/InstallAssistantStep3.vue":()=>t(()=>import("./InstallAssistantStep3-a953fb30.js"),["assets/InstallAssistantStep3-a953fb30.js","assets/index-b86abe73.js","assets/vendor-ea36120f.js","assets/vendor-sortablejs-c6aaccb3.js","assets/vendor-3a7c342f.css","assets/vendor-fortawesome-c5ffc2b2.js","assets/vendor-bootstrap-038cab7c.js","assets/vendor-jquery-48e02303.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-1f03ee31.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-667fc0d3.js","assets/InstallAssistantStepTemplate-930e3c07.css","assets/GeneralConfig-3abb6c98.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStep4.vue":()=>t(()=>import("./InstallAssistantStep4-bfdb63f2.js"),["assets/InstallAssistantStep4-bfdb63f2.js","assets/index-b86abe73.js","assets/vendor-ea36120f.js","assets/vendor-sortablejs-c6aaccb3.js","assets/vendor-3a7c342f.css","assets/vendor-fortawesome-c5ffc2b2.js","assets/vendor-bootstrap-038cab7c.js","assets/vendor-jquery-48e02303.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-1f03ee31.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-667fc0d3.js","assets/InstallAssistantStepTemplate-930e3c07.css","assets/ChargePointInstallation-32662b75.js","assets/dynamic-import-helper-be004503.js","assets/ChargePointInstallation-7b9399a8.css"]),"../components/install_assistant/InstallAssistantStep5.vue":()=>t(()=>import("./InstallAssistantStep5-0608f6ba.js"),["assets/InstallAssistantStep5-0608f6ba.js","assets/index-b86abe73.js","assets/vendor-ea36120f.js","assets/vendor-sortablejs-c6aaccb3.js","assets/vendor-3a7c342f.css","assets/vendor-fortawesome-c5ffc2b2.js","assets/vendor-bootstrap-038cab7c.js","assets/vendor-jquery-48e02303.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-1f03ee31.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-667fc0d3.js","assets/InstallAssistantStepTemplate-930e3c07.css","assets/HardwareInstallation-4837f49f.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStep6.vue":()=>t(()=>import("./InstallAssistantStep6-1fc84ff9.js"),["assets/InstallAssistantStep6-1fc84ff9.js","assets/index-b86abe73.js","assets/vendor-ea36120f.js","assets/vendor-sortablejs-c6aaccb3.js","assets/vendor-3a7c342f.css","assets/vendor-fortawesome-c5ffc2b2.js","assets/vendor-bootstrap-038cab7c.js","assets/vendor-jquery-48e02303.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-1f03ee31.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-667fc0d3.js","assets/InstallAssistantStepTemplate-930e3c07.css","assets/ChargePointInstallation-32662b75.js","assets/dynamic-import-helper-be004503.js","assets/ChargePointInstallation-7b9399a8.css"]),"../components/install_assistant/InstallAssistantStep7.vue":()=>t(()=>import("./InstallAssistantStep7-3f18e9e7.js"),["assets/InstallAssistantStep7-3f18e9e7.js","assets/index-b86abe73.js","assets/vendor-ea36120f.js","assets/vendor-sortablejs-c6aaccb3.js","assets/vendor-3a7c342f.css","assets/vendor-fortawesome-c5ffc2b2.js","assets/vendor-bootstrap-038cab7c.js","assets/vendor-jquery-48e02303.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-1f03ee31.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-667fc0d3.js","assets/InstallAssistantStepTemplate-930e3c07.css","assets/LoadManagementConfig-7c754edd.js","assets/OpenwbSortableList-e07ef3b9.js","assets/OpenwbSortableList-7ba533e4.css"]),"../components/install_assistant/InstallAssistantStep8.vue":()=>t(()=>import("./InstallAssistantStep8-d4e40d6f.js"),["assets/InstallAssistantStep8-d4e40d6f.js","assets/index-b86abe73.js","assets/vendor-ea36120f.js","assets/vendor-sortablejs-c6aaccb3.js","assets/vendor-3a7c342f.css","assets/vendor-fortawesome-c5ffc2b2.js","assets/vendor-bootstrap-038cab7c.js","assets/vendor-jquery-48e02303.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-1f03ee31.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-667fc0d3.js","assets/InstallAssistantStepTemplate-930e3c07.css","assets/VehicleConfig-7044c520.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStep9.vue":()=>t(()=>import("./InstallAssistantStep9-8f265a35.js"),["assets/InstallAssistantStep9-8f265a35.js","assets/index-b86abe73.js","assets/vendor-ea36120f.js","assets/vendor-sortablejs-c6aaccb3.js","assets/vendor-3a7c342f.css","assets/vendor-fortawesome-c5ffc2b2.js","assets/vendor-bootstrap-038cab7c.js","assets/vendor-jquery-48e02303.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-1f03ee31.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-667fc0d3.js","assets/InstallAssistantStepTemplate-930e3c07.css","assets/DataManagement-e508e35b.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStepTemplate.vue":()=>t(()=>import("./InstallAssistantStepTemplate-667fc0d3.js"),["assets/InstallAssistantStepTemplate-667fc0d3.js","assets/index-b86abe73.js","assets/vendor-ea36120f.js","assets/vendor-sortablejs-c6aaccb3.js","assets/vendor-3a7c342f.css","assets/vendor-fortawesome-c5ffc2b2.js","assets/vendor-bootstrap-038cab7c.js","assets/vendor-jquery-48e02303.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-1f03ee31.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-930e3c07.css"])}),`../components/install_assistant/InstallAssistantStep${this.currentPage}.vue`)})},switchPage(s){s>=0&&s<=this.lastPage?this.currentPage=s:console.error(`invalid assistant page number: ${s}`)},endAssistantModal(){this.currentPage!=this.lastPage?this.showEndAssistantModal=!0:this.endAssistant("confirm")},endAssistant(s){this.showEndAssistantModal=!1,s=="confirm"&&(this.updateState("openWB/system/installAssistantDone",!0),this.$root.doPublish("openWB/set/system/installAssistantDone",!0),this.$router.push("/Status"))}}};function S(s,e,f,g,o,n){const l=d("openwb-base-modal-dialog");return i(),u("div",null,[A(l,{show:o.showEndAssistantModal,title:"Assistent beenden",subtype:"danger",buttons:[{text:"Beenden",event:"confirm",subtype:"danger"}],onModalResult:n.endAssistant},{default:v(()=>e[4]||(e[4]=[c(" Wollen Sie den Assistenten wirklich vorzeitig beenden? ")])),_:1},8,["show","onModalResult"]),(i(),E(I(n.getInstallAssistantStepComponent()),{onSendCommand:e[0]||(e[0]=a=>s.$emit("sendCommand",a)),onSave:e[1]||(e[1]=a=>s.$emit("save")),onReset:e[2]||(e[2]=a=>s.$emit("reset")),onDefaults:e[3]||(e[3]=a=>s.$emit("defaults")),onSwitchPage:n.switchPage,onEndAssistant:n.endAssistantModal},null,40,["onSwitchPage","onEndAssistant"]))])}const L=m(P,[["render",S],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/InstallAssistant.vue"]]);export{L as default};
