import{C as g}from"./index-2ffdea6f.js";import{l as v,ap as y,aq as w,F as x}from"./vendor-fortawesome-05d7e447.js";import{_ as k,u as r,k as i,l as a,G as t,E as s,x as n,y as c,B as p,m as _}from"./vendor-06e11d0e.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";const B="/openWB/web/settings/img/openWB_logo_light.png";v.add(y,w);const h={name:"InstallAssistantStepTemplate",components:{FontAwesomeIcon:x},mixins:[g],props:{title:{type:String,required:!0},hidePrevious:{type:Boolean,required:!1,default:!1},hideNext:{type:Boolean,required:!1,default:!1},hideEnd:{type:Boolean,required:!1,default:!1}},emits:["previousPage","nextPage","endAssistant"],methods:{nextPage(){window.scrollTo(0,0),this.$emit("nextPage")},previousPage(){window.scrollTo(0,0),this.$emit("previousPage")},endAssistant(){this.$emit("endAssistant")}}},A={class:"row justify-content-center mb-1"},C={key:0,class:"col-md-4 d-flex py-1 justify-content-center"},P={key:1,class:"col-md-4 d-flex py-1 justify-content-center"},S={key:2,class:"col-md-4 d-flex py-1 justify-content-center"},T={class:"row justify-content-center"},I={class:"page-help-text col-md-3 py-2"},N={class:"col py-2"};function $(u,e,o,j,q,l){const m=r("font-awesome-icon"),d=r("openwb-base-click-button"),b=r("openwb-base-card");return i(),a("div",null,[t(b,{title:o.title,"body-bg":"white",class:"p-0 mx-3"},{footer:s(()=>[n("div",A,[o.hidePrevious?p("",!0):(i(),a("div",C,[t(d,{class:"btn-block btn-warning",onButtonClicked:e[0]||(e[0]=f=>l.previousPage())},{default:s(()=>[t(m,{"fixed-width":"",icon:["fas","caret-left"]}),e[3]||(e[3]=c(" Zurück "))]),_:1})])),o.hideNext?p("",!0):(i(),a("div",P,[t(d,{class:"btn-block btn-success",onButtonClicked:e[1]||(e[1]=f=>l.nextPage())},{default:s(()=>[e[4]||(e[4]=c(" Weiter ")),t(m,{"fixed-width":"",icon:["fas","caret-right"]})]),_:1})])),o.hideEnd?p("",!0):(i(),a("div",S,[t(d,{class:"btn-block btn-danger",onButtonClicked:e[2]||(e[2]=f=>l.endAssistant())},{default:s(()=>e[5]||(e[5]=[c(" Assistent beenden ")])),_:1})]))])]),default:s(()=>[n("div",T,[n("div",I,[_(u.$slots,"help",{},()=>[e[6]||(e[6]=n("img",{src:B,alt:"openWB Logo",class:"w-100"},null,-1))],!0)]),n("div",N,[_(u.$slots,"content",{},void 0,!0)])])]),_:3},8,["title"])])}const Z=k(h,[["render",$],["__scopeId","data-v-db9e78cb"],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/install_assistant/InstallAssistantStepTemplate.vue"]]);export{Z as default};
