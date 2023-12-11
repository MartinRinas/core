import{_ as d,p as s,k as p,l as m,A as a,L as b,u as l,q as r}from"./vendor-20bb207d.js";import"./vendor-sortablejs-ad1d2cc8.js";const c={name:"BackupCloudSamba",emits:["update:configuration"],props:{backupCloud:{type:Object,required:!0}},data(){return{}},methods:{updateConfiguration(i,e=void 0){this.$emit("update:configuration",{value:i,object:e})}}},_={class:"backup-cloud-samba"},f=r("br",null,null,-1),g=r("br",null,null,-1),v=r("br",null,null,-1);function C(i,e,t,k,w,u){const n=s("openwb-base-text-input");return p(),m("div",_,[a(n,{title:"Server",subtype:"host",required:"","model-value":t.backupCloud.configuration.smb_server,"onUpdate:modelValue":e[0]||(e[0]=o=>u.updateConfiguration(o,"configuration.smb_server"))},null,8,["model-value"]),a(n,{title:"Freigabe",required:"","model-value":t.backupCloud.configuration.smb_share,"onUpdate:modelValue":e[1]||(e[1]=o=>u.updateConfiguration(o,"configuration.smb_share"))},null,8,["model-value"]),a(n,{title:"Unterordner (optional)","model-value":t.backupCloud.configuration.smb_path,pattern:'([^\\\\:"\\|*?<>]+/)*',"onUpdate:modelValue":e[2]||(e[2]=o=>u.updateConfiguration(o,"configuration.smb_path"))},{help:b(()=>[l(" Jeder Unterordner muss mit / enden."),f,l(' Die Zeichen \\:"|*?<> sind verboten!'),g,l(" Beispiel 1: openwb/ "),v,l(" Beispiel 2: openwb/lp2/ ")]),_:1},8,["model-value"]),a(n,{title:"Benutzer",subtype:"user","model-value":t.backupCloud.configuration.smb_user,"onUpdate:modelValue":e[3]||(e[3]=o=>u.updateConfiguration(o,"configuration.smb_user"))},null,8,["model-value"]),a(n,{title:"Kennwort",subtype:"password","model-value":t.backupCloud.configuration.smb_password,"onUpdate:modelValue":e[4]||(e[4]=o=>u.updateConfiguration(o,"configuration.smb_password"))},null,8,["model-value"])])}const x=d(c,[["render",C],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/backup_clouds/samba/backup_cloud.vue"]]);export{x as default};
