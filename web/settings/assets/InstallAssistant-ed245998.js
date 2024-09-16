import{C as r,_ as t}from"./index-69ef2d36.js";import{_}from"./dynamic-import-helper-be004503.js";import{_ as m,a2 as p,u as d,k as i,l as u,D as A,N as v,A as c,a3 as E,y as I}from"./vendor-f2b8aa6f.js";import"./vendor-fortawesome-71546160.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";const P={name:"InstallAssistantView",mixins:[r],emits:["sendCommand","save","reset","defaults"],data(){return{currentPage:0,lastPage:10,showEndAssistantModal:!1}},computed:{myStepComponent(){return console.debug(`loading assistant page: ${this.currentPage}`),p({loader:()=>_(Object.assign({"../components/install_assistant/InstallAssistantStep0.vue":()=>t(()=>import("./InstallAssistantStep0-795cb040.js"),["assets/InstallAssistantStep0-795cb040.js","assets/index-69ef2d36.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-71546160.js","assets/vendor-bootstrap-4ad604fa.js","assets/vendor-jquery-d3cb8fad.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-65ecee4b.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-06a9f1a7.js","assets/InstallAssistantStepTemplate-ff479f80.css"]),"../components/install_assistant/InstallAssistantStep1.vue":()=>t(()=>import("./InstallAssistantStep1-5a8a51d7.js"),["assets/InstallAssistantStep1-5a8a51d7.js","assets/index-69ef2d36.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-71546160.js","assets/vendor-bootstrap-4ad604fa.js","assets/vendor-jquery-d3cb8fad.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-65ecee4b.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-06a9f1a7.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/DataManagement-0dd4c76f.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStep10.vue":()=>t(()=>import("./InstallAssistantStep10-2fd9a62d.js"),["assets/InstallAssistantStep10-2fd9a62d.js","assets/index-69ef2d36.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-71546160.js","assets/vendor-bootstrap-4ad604fa.js","assets/vendor-jquery-d3cb8fad.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-65ecee4b.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-06a9f1a7.js","assets/InstallAssistantStepTemplate-ff479f80.css"]),"../components/install_assistant/InstallAssistantStep2.vue":()=>t(()=>import("./InstallAssistantStep2-c12663cc.js"),["assets/InstallAssistantStep2-c12663cc.js","assets/index-69ef2d36.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-71546160.js","assets/vendor-bootstrap-4ad604fa.js","assets/vendor-jquery-d3cb8fad.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-65ecee4b.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-06a9f1a7.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/System-ebad11a3.js","assets/System-0f1d217b.css"]),"../components/install_assistant/InstallAssistantStep3.vue":()=>t(()=>import("./InstallAssistantStep3-53904745.js"),["assets/InstallAssistantStep3-53904745.js","assets/index-69ef2d36.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-71546160.js","assets/vendor-bootstrap-4ad604fa.js","assets/vendor-jquery-d3cb8fad.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-65ecee4b.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-06a9f1a7.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/GeneralConfig-92f899f4.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStep4.vue":()=>t(()=>import("./InstallAssistantStep4-8b97ea50.js"),["assets/InstallAssistantStep4-8b97ea50.js","assets/index-69ef2d36.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-71546160.js","assets/vendor-bootstrap-4ad604fa.js","assets/vendor-jquery-d3cb8fad.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-65ecee4b.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-06a9f1a7.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/ChargePointInstallation-92c3e709.js","assets/dynamic-import-helper-be004503.js","assets/ChargePointInstallation-ed6a5c7e.css"]),"../components/install_assistant/InstallAssistantStep5.vue":()=>t(()=>import("./InstallAssistantStep5-290f8655.js"),["assets/InstallAssistantStep5-290f8655.js","assets/index-69ef2d36.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-71546160.js","assets/vendor-bootstrap-4ad604fa.js","assets/vendor-jquery-d3cb8fad.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-65ecee4b.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-06a9f1a7.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/HardwareInstallation-6046586c.js","assets/dynamic-import-helper-be004503.js","assets/HardwareInstallation-1ee9693f.css"]),"../components/install_assistant/InstallAssistantStep6.vue":()=>t(()=>import("./InstallAssistantStep6-90ce23b3.js"),["assets/InstallAssistantStep6-90ce23b3.js","assets/index-69ef2d36.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-71546160.js","assets/vendor-bootstrap-4ad604fa.js","assets/vendor-jquery-d3cb8fad.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-65ecee4b.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-06a9f1a7.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/ChargePointInstallation-92c3e709.js","assets/dynamic-import-helper-be004503.js","assets/ChargePointInstallation-ed6a5c7e.css"]),"../components/install_assistant/InstallAssistantStep7.vue":()=>t(()=>import("./InstallAssistantStep7-acefbf3b.js"),["assets/InstallAssistantStep7-acefbf3b.js","assets/index-69ef2d36.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-71546160.js","assets/vendor-bootstrap-4ad604fa.js","assets/vendor-jquery-d3cb8fad.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-65ecee4b.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-06a9f1a7.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/LoadManagementConfig-003e3bae.js","assets/OpenwbSortableList-641f6bb4.js","assets/OpenwbSortableList-7ba533e4.css"]),"../components/install_assistant/InstallAssistantStep8.vue":()=>t(()=>import("./InstallAssistantStep8-97580236.js"),["assets/InstallAssistantStep8-97580236.js","assets/index-69ef2d36.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-71546160.js","assets/vendor-bootstrap-4ad604fa.js","assets/vendor-jquery-d3cb8fad.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-65ecee4b.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-06a9f1a7.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/VehicleConfig-032e1c73.js","assets/dynamic-import-helper-be004503.js","assets/VehicleConfig-4aeda6ca.css"]),"../components/install_assistant/InstallAssistantStep9.vue":()=>t(()=>import("./InstallAssistantStep9-7029496d.js"),["assets/InstallAssistantStep9-7029496d.js","assets/index-69ef2d36.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-71546160.js","assets/vendor-bootstrap-4ad604fa.js","assets/vendor-jquery-d3cb8fad.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-65ecee4b.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-06a9f1a7.js","assets/InstallAssistantStepTemplate-ff479f80.css","assets/DataManagement-0dd4c76f.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStepTemplate.vue":()=>t(()=>import("./InstallAssistantStepTemplate-06a9f1a7.js"),["assets/InstallAssistantStepTemplate-06a9f1a7.js","assets/index-69ef2d36.js","assets/vendor-f2b8aa6f.js","assets/vendor-sortablejs-2f1828d0.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-71546160.js","assets/vendor-bootstrap-4ad604fa.js","assets/vendor-jquery-d3cb8fad.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-65ecee4b.js","assets/index-b3227821.css","assets/InstallAssistantStepTemplate-ff479f80.css"])}),`../components/install_assistant/InstallAssistantStep${this.currentPage}.vue`)})}},methods:{switchPage(s){s>=0&&s<=this.lastPage?this.currentPage=s:console.error(`invalid assistant page number: ${s}`)},endAssistantModal(){this.currentPage!=this.lastPage?this.showEndAssistantModal=!0:this.endAssistant("confirm")},endAssistant(s){this.showEndAssistantModal=!1,s=="confirm"&&(this.updateState("openWB/system/installAssistantDone",!0),this.$root.doPublish("openWB/set/system/installAssistantDone",!0),this.$router.push("/Status"))}}};function S(s,e,f,g,o,n){const l=d("openwb-base-modal-dialog");return i(),u("div",null,[A(l,{show:o.showEndAssistantModal,title:"Assistent beenden",subtype:"danger",buttons:[{text:"Beenden",event:"confirm",subtype:"danger"}],onModalResult:n.endAssistant},{default:v(()=>[I(" Wollen Sie den Assistenten wirklich vorzeitig beenden? ")]),_:1},8,["show","onModalResult"]),(i(),c(E(n.myStepComponent),{onSendCommand:e[0]||(e[0]=a=>s.$emit("sendCommand",a)),onSave:e[1]||(e[1]=a=>s.$emit("save")),onReset:e[2]||(e[2]=a=>s.$emit("reset")),onDefaults:e[3]||(e[3]=a=>s.$emit("defaults")),onSwitchPage:n.switchPage,onEndAssistant:n.endAssistantModal},null,40,["onSwitchPage","onEndAssistant"]))])}const L=m(P,[["render",S],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/InstallAssistant.vue"]]);export{L as default};