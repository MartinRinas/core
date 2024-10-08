import{u as z}from"./index-CtySFcBa.js";import{D as V}from"./DashBoardCard-BterAPyf.js";import{o,l as x,n as d,k as m,s as R,j as n,e as c,F as C,A as S,y as g,i as u,x as w,O as p,q as v}from"./vendor-CZ1MGz7j.js";import{_ as f}from"./vendor-inkline-Ce5aFAnW.js";import"./vendor-fortawesome-C68yAli-.js";const P={name:"DashboardFlowCard",components:{DashBoardCard:V},props:{changesLocked:{required:!1,type:Boolean,default:!1}},data(){return{mqttStore:z(),svgSize:{xMin:0,xMax:150,yMin:0,yMax:105,circleRadius:10,strokeWidth:.5,textSize:5,numRows:4,numColumns:3}}},computed:{svgViewBox(){return`${this.svgSize.xMin} ${this.svgSize.yMin} ${this.svgSize.xMax} ${this.svgSize.yMax}`},svgFontSize(){return`${this.svgSize.textSize}px`},svgRectWidth(){return(this.svgSize.xMax-this.svgSize.xMin-this.svgSize.strokeWidth-this.svgSize.numColumns)/this.svgSize.numColumns},svgStrokeWidth(){return this.svgSize.strokeWidth},svgIconWidth(){return this.svgSize.circleRadius},svgIconHeight(){return this.svgSize.circleRadius},gridPower(){return this.mqttStore.getGridPower("object")},pvPower(){return this.mqttStore.getPvPower("object")},homePower(){return this.mqttStore.getHomePower("object")},batteryPower(){return this.mqttStore.getBatteryPower("object")},batterySoc(){return this.mqttStore.getBatterySoc("object").value/100},connectedChargePoints(){return this.mqttStore.getChargePointIds},chargePointSumPower(){return this.mqttStore.getChargePointSumPower("object")},chargePoint1Power(){return this.connectedChargePoints.length>0?this.mqttStore.getChargePointPower(this.connectedChargePoints[0],"object")||{textValue:"Loading..."}:{textValue:"N/A"}},chargePoint2Power(){return this.connectedChargePoints.length>1?this.mqttStore.getChargePointPower(this.connectedChargePoints[1],"object")||{textValue:"Loading..."}:{textValue:"N/A"}},chargePoint3Power(){return this.connectedChargePoints.length>2?this.mqttStore.getChargePointPower(this.connectedChargePoints[2],"object")||{textValue:"Loading..."}:{textValue:"N/A"}},chargePoint1Name(){return this.mqttStore.getChargePointName(this.connectedChargePoints[0])},chargePoint2Name(){return this.mqttStore.getChargePointName(this.connectedChargePoints[1])},chargePoint3Name(){return this.mqttStore.getChargePointName(this.connectedChargePoints[2])},chargePoint1VehicleConnected(){return this.mqttStore.getChargePointPlugState(this.connectedChargePoints[0])},chargePoint2VehicleConnected(){return this.mqttStore.getChargePointPlugState(this.connectedChargePoints[1])},chargePoint3VehicleConnected(){return this.mqttStore.getChargePointPlugState(this.connectedChargePoints[2])},chargePoint1ConnectedVehicleName(){return this.mqttStore.getChargePointConnectedVehicleName(this.connectedChargePoints[0])},chargePoint2ConnectedVehicleName(){return this.mqttStore.getChargePointConnectedVehicleName(this.connectedChargePoints[1])},chargePoint3ConnectedVehicleName(){return this.mqttStore.getChargePointConnectedVehicleName(this.connectedChargePoints[2])},chargePoint1ConnectedVehicleChargeMode(){return this.mqttStore.getChargePointConnectedVehicleChargeMode(this.connectedChargePoints[0])},chargePoint2ConnectedVehicleChargeMode(){return this.mqttStore.getChargePointConnectedVehicleChargeMode(this.connectedChargePoints[1])},chargePoint3ConnectedVehicleChargeMode(){return this.mqttStore.getChargePointConnectedVehicleChargeMode(this.connectedChargePoints[2])},chargePoint1ConnectedVehicleSoc(){return this.mqttStore.getChargePointConnectedVehicleSoc(this.connectedChargePoints[0]).soc/100},chargePoint2ConnectedVehicleSoc(){return this.mqttStore.getChargePointConnectedVehicleSoc(this.connectedChargePoints[1]).soc/100},chargePoint3ConnectedVehicleSoc(){return this.mqttStore.getChargePointConnectedVehicleSoc(this.connectedChargePoints[2]).soc/100},gridConsumption(){return this.gridPower.value>0},gridFeedIn(){return this.gridPower.value<0},homeConsumption(){return this.homePower.value>0},homeProduction(){return this.homePower.value<0},pvProduction(){return this.pvPower.value>0},batteryDischarging(){return this.batteryPower.value<0},batteryCharging(){return this.batteryPower.value>0},chargePointSumCharging(){return this.chargePointSumPower.value>0},chargePointSumDischarging(){return this.chargePointSumPower.value<0},chargePoint1Charging(){return this.chargePoint1Power.value>0},chargePoint1Discharging(){return this.chargePoint1Power.value<0},chargePoint2Charging(){return this.chargePoint2Power.value>0},chargePoint2Discharging(){return this.chargePoint2Power.value<0},chargePoint3Charging(){return this.chargePoint3Power.value>0},chargePoint3Discharging(){return this.chargePoint3Power.value<0},svgComponents(){var e=[];return this.mqttStore.getThemeConfiguration.enable_dashboard_card_grid&&e.push({id:"grid",class:{base:"grid",valueLabel:this.gridFeedIn?"fill-success":this.gridConsumption?"fill-danger":"",animated:this.gridConsumption,animatedReverse:this.gridFeedIn},position:{row:0,column:0},label:["EVU",this.gridPower.textValue],icon:"icons/owbGrid.svg"}),this.mqttStore.getThemeConfiguration.enable_dashboard_card_home_consumption&&e.push({id:"home",class:{base:"home",valueLabel:"",animated:this.homeProduction,animatedReverse:this.homeConsumption},position:{row:0,column:2},label:["Haus",this.homePower.textValue],icon:"icons/owbHouse.svg"}),this.mqttStore.getPvConfigured&&this.mqttStore.getThemeConfiguration.enable_dashboard_card_inverter_sum&&e.push({id:"pv",class:{base:"pv",valueLabel:this.pvProduction?"fill-success":"",animated:this.pvProduction,animatedReverse:!1},position:{row:1,column:0},label:["PV",this.pvPower.textValue],icon:"icons/owbPV.svg"}),this.mqttStore.getBatteryConfigured&&this.mqttStore.getThemeConfiguration.enable_dashboard_card_battery_sum&&e.push({id:"battery",class:{base:"battery",valueLabel:"",animated:this.batteryDischarging,animatedReverse:this.batteryCharging},position:{row:1,column:2},label:["Speicher",this.batteryPower.textValue],soc:this.batterySoc,icon:"icons/owbBattery.svg"}),this.connectedChargePoints.length>0&&this.mqttStore.getThemeConfiguration.enable_dashboard_card_charge_point_sum&&(this.connectedChargePoints.length<=3?(e.push({id:"charge-point-1",class:{base:"charge-point",valueLabel:"",animated:this.chargePoint1Discharging,animatedReverse:this.chargePoint1Charging},position:{row:2,column:this.connectedChargePoints.length>1?0:1},label:[this.chargePoint1Name,this.chargePoint1Power.textValue],icon:"icons/owbChargePoint.svg"}),this.chargePoint1VehicleConnected&&this.mqttStore.getThemeConfiguration.enable_dashboard_card_vehicles&&e.push({id:"vehicle-1",class:{base:"vehicle",valueLabel:"fill-"+this.chargePoint1ConnectedVehicleChargeMode.class},position:{row:3,column:this.connectedChargePoints.length>1?0:1},label:[this.chargePoint1ConnectedVehicleName||"---",this.chargePoint1ConnectedVehicleChargeMode.label||"---"],soc:this.chargePoint1ConnectedVehicleSoc,icon:"icons/owbVehicle.svg"}),this.connectedChargePoints.length>1&&(e.push({id:"charge-point-2",class:{base:"charge-point",valueLabel:"",animated:this.chargePoint2Discharging,animatedReverse:this.chargePoint2Charging},position:{row:2,column:this.connectedChargePoints.length>2?1:2},label:[this.chargePoint2Name,this.chargePoint2Power.textValue],icon:"icons/owbChargePoint.svg"}),this.chargePoint2VehicleConnected&&this.mqttStore.getThemeConfiguration.enable_dashboard_card_vehicles&&e.push({id:"vehicle-2",class:{base:"vehicle",valueLabel:"fill-"+this.chargePoint2ConnectedVehicleChargeMode.class},position:{row:3,column:this.connectedChargePoints.length>2?1:2},label:[this.chargePoint2ConnectedVehicleName||"---",this.chargePoint2ConnectedVehicleChargeMode.label||"---"],soc:this.chargePoint2ConnectedVehicleSoc,icon:"icons/owbVehicle.svg"}),this.connectedChargePoints.length>2&&(e.push({id:"charge-point-3",class:{base:"charge-point",valueLabel:"",animated:this.chargePoint3Discharging,animatedReverse:this.chargePoint3Charging},position:{row:2,column:2},label:[this.chargePoint3Name,this.chargePoint3Power.textValue],icon:"icons/owbChargePoint.svg"}),this.chargePoint3VehicleConnected&&this.mqttStore.getThemeConfiguration.enable_dashboard_card_vehicles&&e.push({id:"vehicle-3",class:{base:"vehicle",valueLabel:"fill-"+this.chargePoint3ConnectedVehicleChargeMode.class},position:{row:3,column:2},label:[this.chargePoint3ConnectedVehicleName||"---",this.chargePoint3ConnectedVehicleChargeMode.label||"---"],soc:this.chargePoint3ConnectedVehicleSoc,icon:"icons/owbVehicle.svg"})))):e.push({id:"charge-point-sum",class:{base:"charge-point",valueLabel:"",animated:this.chargePointSumDischarging,animatedReverse:this.chargePointSumCharging},position:{row:2,column:1},label:["Ladepunkte",this.chargePointSumPower.textValue],icon:"icons/owbChargePoint.svg"})),(!this.mqttStore.getThemeConfiguration.enable_dashboard_card_vehicles||this.connectedChargePoints.length===0||this.connectedChargePoints.length>3)&&this.setSvgNumRows(3),e}},methods:{setSvgNumRows(e){this.svgSize.numRows=e},calcRowY(e){let r=this.svgSize.yMin+this.svgSize.strokeWidth+this.svgSize.circleRadius,a=this.svgSize.yMax-this.svgSize.strokeWidth-this.svgSize.circleRadius-r;return e*(a/(this.svgSize.numRows-1))+r},calcColumnX(e){let r=this.svgSize.xMin+this.svgSize.strokeWidth+this.svgRectWidth/2,a=this.svgSize.xMax-this.svgSize.strokeWidth-this.svgRectWidth/2-r;return e*(a/(this.svgSize.numColumns-1))+r},calcFlowLineAnchorX(e){let r=this.calcColumnX(e);return e<(this.svgSize.numColumns-1)/2?r+this.svgRectWidth/2-this.svgSize.circleRadius:e>(this.svgSize.numColumns-1)/2?r-this.svgRectWidth/2+this.svgSize.circleRadius:r},calcSvgElementBoundingBox(e){let r=document.getElementById(e);if(r==null)return{x:0,y:0,width:0,height:0};let h=r.getBBox();return{x:h.x,y:h.y,width:h.width,height:h.height}},beginAnimation(e){var r;this.$refs[e]!=null&&((r=this.$refs[e][0])==null||r.beginElement())}}},b=()=>{p(e=>({"2d21ce23":e.svgStrokeWidth,"0cb0615b":e.svgFontSize}))},_=P.setup;P.setup=_?(e,r)=>(b(),_(e,r)):b;const q={class:"svg-container"},M=["viewBox"],W={id:"layer1",style:{display:"inline"}},k=["d"],N={id:"layer2",style:{display:"inline"}},B=["cx","cy","r"],L=["transform","onClick"],F=["id"],D=["x","y","width","height"],j=["id"],I=["x","y","width","height","rx","ry"],E=["x","y","width","height","rx","ry"],T=["clip-path"],A=["id","x","y"],X=["values"],H=["id","x","y"],Y=["transform"],G=["r"],O=["r","clip-path"],U=["href","x","y","height","width"];function J(e,r,h,a,t,s){const l=v("i-container"),y=v("dash-board-card");return o(),x(y,{color:"primary"},{headerLeft:d(()=>r[0]||(r[0]=[m(" Übersicht - Energiefluss ")])),default:d(()=>[R(l,null,{default:d(()=>[n("div",q,[(o(),c("svg",{viewBox:s.svgViewBox,version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},[n("g",W,[(o(!0),c(C,null,S(s.svgComponents,i=>(o(),c("path",{key:i.id,class:g([i.class.base,{animated:i.class.animated},{animatedReverse:i.class.animatedReverse}]),d:i.class.base!=="vehicle"?`M ${s.calcFlowLineAnchorX(i.position.column)}, ${s.calcRowY(i.position.row)} ${s.calcColumnX(1)}, ${s.calcRowY(1)}`:""},null,10,k))),128))]),n("g",N,[n("circle",{id:"center",cx:s.calcColumnX(1),cy:s.calcRowY(1),r:t.svgSize.circleRadius/3},null,8,B),(o(!0),c(C,null,S(s.svgComponents,i=>(o(),c("g",{key:i.id,class:g(i.class.base),transform:`translate(${s.calcColumnX(i.position.column)}, ${s.calcRowY(i.position.row)})`,onClick:$=>s.beginAnimation(`animate-label-${i.id}`)},[n("defs",null,[i.soc?(o(),c("clipPath",{key:0,id:`clip-soc-${i.id}`},[n("rect",{x:-t.svgSize.circleRadius-t.svgSize.strokeWidth,y:(t.svgSize.circleRadius+t.svgSize.strokeWidth)*(1-2*i.soc),width:(t.svgSize.circleRadius+t.svgSize.strokeWidth)*2,height:(t.svgSize.circleRadius+t.svgSize.strokeWidth)*2*i.soc},null,8,D)],8,F)):u("",!0),n("clipPath",{id:`clip-label-${i.id}`},[n("rect",{x:-s.svgRectWidth/2,y:-t.svgSize.circleRadius,width:s.svgRectWidth,height:t.svgSize.circleRadius*2,rx:t.svgSize.circleRadius,ry:t.svgSize.circleRadius},null,8,I)],8,j)]),n("rect",{x:-s.svgRectWidth/2,y:-t.svgSize.circleRadius,width:s.svgRectWidth,height:t.svgSize.circleRadius*2,rx:t.svgSize.circleRadius,ry:t.svgSize.circleRadius},null,8,E),n("text",{"clip-path":`url(#clip-label-${i.id})`},[n("tspan",{id:`label-${i.id}`,"text-anchor":"start",x:-s.svgRectWidth/2+2*t.svgSize.circleRadius+t.svgSize.strokeWidth,y:-t.svgSize.textSize/2},[s.calcSvgElementBoundingBox(`label-${i.id}`).width>s.svgRectWidth-2*t.svgSize.circleRadius-2*t.svgSize.strokeWidth?(o(),c("animate",{key:0,ref_for:!0,ref:`animate-label-${i.id}`,xmlns:"http://www.w3.org/2000/svg",attributeName:"x",dur:"5s",values:"0; "+(-s.calcSvgElementBoundingBox(`label-${i.id}`).width+s.svgRectWidth-2.5*t.svgSize.circleRadius-2*t.svgSize.strokeWidth)+"; 0;",repeatCount:"0",begin:"2s",additive:"sum"},null,8,X)):u("",!0),m(" "+w(i.label[0]),1)],8,A),n("tspan",{id:`value-${i.id}`,class:g(i.class.valueLabel),"text-anchor":"end",x:2*t.svgSize.circleRadius+t.svgSize.strokeWidth,y:t.svgSize.textSize},w(i.label[1]),11,H)],8,T),n("g",{transform:`translate(${t.svgSize.circleRadius-s.svgRectWidth/2}, 0)`},[n("circle",{cx:"0",cy:"0",r:t.svgSize.circleRadius,class:g({soc:i.soc})},null,10,G),i.soc?(o(),c("circle",{key:0,cx:"0",cy:"0",r:t.svgSize.circleRadius,"clip-path":`url(#clip-soc-${i.id})`},null,8,O)):u("",!0),n("image",{href:i.icon,x:-s.svgIconWidth/2,y:-s.svgIconHeight/2,height:s.svgIconHeight,width:s.svgIconWidth},null,8,U)],8,Y)],10,L))),128))])],8,M))])]),_:1})]),_:1})}const K=f(P,[["render",J],["__scopeId","data-v-9e868ed0"]]),Q={name:"EnergyFlowView",components:{FlowCard:K},props:{changesLocked:{required:!1,type:Boolean,default:!1}}};function Z(e,r,h,a,t,s){const l=v("FlowCard");return o(),x(l)}const ne=f(Q,[["render",Z]]);export{ne as default};
