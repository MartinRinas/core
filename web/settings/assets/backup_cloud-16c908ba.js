import{B as r}from"./DataManagement-c0d34f05.js";import{_ as p,u,k as i,l,G as d,E as c,y as o,x as n}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-3d19d475.js";import"./index-beac009d.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const f={name:"BackupCloudNfs",mixins:[r]},m={class:"backup-cloud-nfs"};function _(t,e,b,k,v,x){const a=u("openwb-base-text-input");return i(),l("div",m,[d(a,{title:"Pfad zum NFS Share",pattern:"^([^/: ]+):(\\/[^/: ]+)+$",required:"","model-value":t.backupCloud.configuration.nfs_share,"onUpdate:modelValue":e[0]||(e[0]=s=>t.updateConfiguration(s,"configuration.nfs_share"))},{help:c(()=>e[1]||(e[1]=[o(" 1. IP basierter Pfad: 1.2.3.4:/pfad/zum/nfs-share"),n("br",null,null,-1),o(" 2. Host (FQDN) basierter Pfad: backupserver.domain.net:/pfad/zum/nfs-share"),n("br",null,null,-1),o(" Bitte entgegen der Syntax das Protokoll nicht davor schreiben. Falsch wäre, “nfs://” davor zu setzen. ")])),_:1},8,["model-value"])])}const V=p(f,[["render",_],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/backup_clouds/nfs/backup_cloud.vue"]]);export{V as default};
