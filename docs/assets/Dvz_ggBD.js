import{_ as D,a as L,b as F,c as N}from"./C3iZISz0.js";import{d as f,g as d,t as a,C as p,A as c,x as i,y,z as t,K as B,_ as u,E as O,B as S,v as $,L as z,i as A,D as g,M as P,r as H,N as U,P as q,O as w,G,H as W,Q as R,J as I,R as E,o as Q,S as X,F as J}from"./P9GDf1ex.js";import{c as V,_ as K,a as Y,d as Z,u as nn,b as tn,g as on,e as en,f as sn}from"./BuJcIFrS.js";import{a as cn,_ as _n,b as ln,r as an}from"./C7ROEraj.js";import{Q as rn,u as dn,_ as pn}from"./ltB8T0jj.js";import{u as mn}from"./CxtqJNWg.js";import{u as un}from"./rGG1tFDy.js";const gn=["textContent"],fn=f({__name:"BlockHeroBottomSheetList",props:{title:{}},setup(_){return(n,s)=>{const e=d("v-list"),o=d("v-card"),l=d("v-card-text");return a(),p(l,{class:"pa-6"},{default:c(()=>[i("div",{class:"text-overline text-grey mt-n2 mb-2",textContent:y(n.title)},null,8,gn),t(o,{rounded:"",flat:"",class:"bg-grey-lighten-4"},{default:c(()=>[t(e,{density:"compact",class:"bg-transparent py-0 overflow-hidden text-subtitle-1"},{default:c(()=>[B(n.$slots,"default",{},void 0,!0)]),_:3})]),_:3})]),_:3})}}}),vn=Object.assign(u(fn,[["__scopeId","data-v-1901a072"]]),{__name:"BlockHeroBottomSheetList"}),hn={};function Sn(_,n){const s=d("v-list-item"),e=vn,o=V;return a(),p(o,null,{default:c(({close:l})=>[t(e,{title:"What you looking for"},{default:c(()=>[t(s,{onClick:n[0]||(n[0]=O(()=>{},["stop"])),to:"/drones"},{default:c(()=>n[2]||(n[2]=[S(" Immersive Shots ")])),_:1}),t(s,{onClick:n[1]||(n[1]=O(()=>{},["stop"])),to:"/experience"},{default:c(()=>n[3]||(n[3]=[S(" Design & Development ")])),_:1})]),_:1})]),_:1})}const $n=Object.assign(u(hn,[["render",Sn]]),{__name:"BlockMeMenu"}),kn={};function bn(_,n){const s=D,e=L,o=$n,l=K,r=Y,m=F;return a(),p(m,{id:"me-block","slide-next":_.$vuetify.display.xs},{default:c(({slideNext:v})=>[t(s,{title:"It's Diego Villa"}),t(e,null,{default:c(()=>n[0]||(n[0]=[i("p",null,[S(" Shaping the dream. "),i("span",{class:"text-grey"},"199X"),i("br"),S(" Self-built Developer by passion"),i("br"),S(" Drone Pilot by adventure ")],-1)])),_:1}),_.$vuetify.display.smAndUp?(a(),p(o,{key:0})):(a(),p(r,{key:1},{default:c(()=>[t(l,null,{default:c(()=>[n[1]||(n[1]=S(" Welcome ")),t(o,{attach:"#me-block"})]),_:1})]),_:1}))]),_:1},8,["slide-next"])}const xn=Object.assign(u(kn,[["render",bn]]),{__name:"BlockMe"}),yn={};function wn(_,n){const s=Z;return a(),p(s,{image:"/media/me.jpg"})}const Bn=Object.assign(u(yn,[["render",wn]]),{__name:"BlockMeImage"}),Hn={};function Cn(_,n){const s=d("v-badge");return a(),$("div",null,[t(s,{dot:"",color:"red"}),n[0]||(n[0]=i("strong",null,"REC",-1))])}const Tn=Object.assign(u(Hn,[["render",Cn],["__scopeId","data-v-56853de4"]]),{__name:"ShootingRec"}),In={class:"dx-nav__top"},Mn=["href"],jn=["href"],On=f({__name:"ShootingNav",emits:["close"],setup(_,{emit:n}){const s=nn(),e=z(),o=n,l=A(()=>e.smAndDown.value?72:e.mdAndUp.value?96:64);return(r,m)=>{const v=Tn,k=d("v-icon"),h=d("v-list-item"),b=d("v-list"),x=d("v-navigation-drawer");return a(),p(x,{permanent:"",rail:"",app:"",persistent:"",width:g(l),"rail-width":g(l),class:"text-center"},{default:c(()=>[i("div",In,[t(v)]),t(b,{nav:""},{default:c(()=>[t(h,{class:"mb-n1 hidden-md-and-up"},{default:c(()=>[i("a",{class:"cursor-pointer",onClick:m[0]||(m[0]=T=>o("close"))},[t(k,{icon:"mdi-arrow-left",size:30,color:"grey-lighten-1"})])]),_:1}),t(h,{class:"mb-n2"},{default:c(()=>[i("a",{href:g(s).links.instagram,target:"_blank"},[t(g(rn))],8,Mn)]),_:1}),t(h,{class:"mb-2"},{default:c(()=>[i("a",{href:g(s).links.email},[t(k,{icon:"mdi-at",size:27})],8,jn)]),_:1})]),_:1})]),_:1},8,["width","rail-width"])}}}),Dn=Object.assign(u(On,[["__scopeId","data-v-eb420930"]]),{__name:"ShootingNav"}),M=P("slider/shooting",()=>{const _=H(),n=A(()=>{var o;return(o=_.value)==null?void 0:o.swiper});function s(o,l){_.value=document.querySelector(".dx-slider-vertical");const r={modules:[U,q],initialSlide:l,direction:"vertical",pagination:!0,mousewheelForceToAxis:!0,mousewheel:{enabled:!0}};Object.assign(_.value,r),_.value.initialize()}function e(o){_.value.swiper.slideTo(o,1e3)}return{instance:_,swiper:n,slideTo:e,initialize:s}}),Ln={class:"dx-section-intro-title"},An={class:"font-weight text-uppercase cursor-pointer"},Rn={class:"dx-links mt-6"},Vn=f({__name:"ShootingSectionIntroTitle",emits:["close"],setup(_,{emit:n}){const s=mn(),e=M();return(o,l)=>{const r=d("v-btn");return a(),$("div",Ln,[i("h1",An,[i("div",{class:w(["dx-section-intro-title-1 dx-section-intro-title--animation",{"dx-section-intro-title--animated":g(s).isReady}])},y(o.$vuetify.display.width>=699?o.$t("shooting.intro.title1"):o.$t("shooting.intro.title1Mobile")),3),i("div",{class:w(["dx-section-intro-title-2 dx-section-intro-title--animation",{"dx-section-intro-title--animated":g(s).isReady}])},y(o.$vuetify.display.width>=699?o.$t("shooting.intro.title2"):o.$t("shooting.intro.title2Mobile")),3),i("div",{class:w(["dx-section-intro-title-3 dx-section-intro-title--animation",{"dx-section-intro-title--animated":g(s).isReady}])},y(o.$t("shooting.intro.titleServiceVideo")),3)]),i("div",Rn,[t(r,{flat:"",rounded:"",size:"large",color:"black",onClick:l[0]||(l[0]=m=>g(e).slideTo(4))},{default:c(()=>[S(y(o.$t(o.$vuetify.display.mdAndUp?"shooting.form.open.desktop":"shooting.form.open.mobile")),1)]),_:1})])])}}}),Fn=Object.assign(u(Vn,[["__scopeId","data-v-ba63173c"]]),{__name:"ShootingSectionIntroTitle"}),Nn={class:"dx-section-intro"},zn={class:"dx-section-intro__inner"},Pn=f({__name:"ShootingSectionIntro",emits:["close","intersect"],setup(_,{emit:n}){const s=n;function e(o){o&&s("intersect")}return(o,l)=>{const r=Dn,m=d("v-col"),v=R,k=Fn,h=d("v-row"),b=G("intersect");return a(),$("div",Nn,[t(h,{"no-gutters":""},{default:c(()=>[t(m,{class:"flex-grow-0"},{default:c(()=>[t(r,{onClose:l[0]||(l[0]=x=>s("close"))})]),_:1}),t(m,{class:"flex-grow-1",style:{"margin-left":"72px"}},{default:c(()=>[i("div",zn,[t(v,{name:"shooting",subtitle:o.$vuetify.display.sm&&o.$vuetify.display.height>600||o.$vuetify.display.height>700||o.$vuetify.display.xs&&o.$vuetify.display.height>500},null,8,["subtitle"]),W(t(k,{onClose:l[1]||(l[1]=x=>s("close"))},null,512),[[b,e]])])]),_:1})]),_:1})])}}}),Un=Object.assign(u(Pn,[["__scopeId","data-v-ec46c659"]]),{__name:"ShootingSectionIntro"}),qn=["src"],Gn=f({__name:"BlockHeroIcon",props:{icon:{},avatar:{},image:{},dark:{type:Boolean}},setup(_){return(n,s)=>{const e=d("v-icon"),o=d("v-img"),l=d("v-avatar");return n.icon?(a(),p(e,{key:0,icon:n.icon,size:"180",class:w(["dx-block__icon v-icon--big mt-n3 mt-lg-0 mb-8 mb-lg-0",{"text-grey":n.dark},{"text-grey-lighten-2":!n.dark}])},null,8,["icon","class"])):n.avatar?(a(),p(l,{key:1,size:"180px",class:"mb-6 no-pointer-events"},{default:c(()=>[t(o,{src:n.avatar,alt:""},null,8,["src"])]),_:1})):n.image?(a(),$("img",{key:2,src:n.image,"max-width":"80vw",width:"400px",class:"mx-auto mb-12 no-pointer-events"},null,8,qn)):I("",!0)}}}),Wn=Object.assign(u(Gn,[["__scopeId","data-v-c221442f"]]),{__name:"BlockHeroIcon"}),En={class:"text-center"},Qn=f({__name:"BlockHeroContent",props:{title:{},icon:{},avatar:{},image:{},dark:{type:Boolean}},emits:["iconClick"],setup(_,{emit:n}){const s=n;return(e,o)=>{const l=Wn,r=D,m=L;return a(),$("div",En,[e.$slots.image?B(e.$slots,"image",{key:1}):(a(),p(l,{key:0,avatar:e.avatar,image:e.image,icon:e.icon,dark:e.dark,onClick:o[0]||(o[0]=v=>s("iconClick"))},null,8,["avatar","image","icon","dark"])),e.title?(a(),p(r,{key:2,title:e.title,dark:e.dark},null,8,["title","dark"])):I("",!0),t(m,{dark:e.dark,margin:e.$slots.actions},{default:c(()=>[B(e.$slots,"description")]),_:3},8,["dark","margin"])])}}}),j=Object.assign(Qn,{__name:"BlockHeroContent"}),Xn={class:"dx-section__inner"},Jn=f({__name:"ShootingSection",props:{dark:{type:Boolean}},setup(_){return(n,s)=>(a(),$("div",{class:w(["dx-section",{"dx-section--dark":n.dark}])},[i("div",Xn,[B(n.$slots,"default",{},void 0,!0)])],2))}}),C=Object.assign(u(Jn,[["__scopeId","data-v-eb698cd6"]]),{__name:"ShootingSection"}),Kn={},Yn=["innerHTML"],Zn=["innerHTML"];function nt(_,n){const s=j,e=C;return a(),p(e,null,{default:c(()=>[t(s,{image:"/media/equipment/geprc-ds20.webp"},{description:c(()=>[i("p",{innerHTML:_.$t("shooting.section.indoorShots.description.p1")},null,8,Yn),i("p",{innerHTML:_.$t("shooting.section.indoorShots.description.p2")},null,8,Zn)]),_:1})]),_:1})}const tt=Object.assign(u(Kn,[["render",nt]]),{__name:"ShootingSectionHomeIndoorShots"}),ot={},et=["innerHTML"],st=["innerHTML"];function it(_,n){const s=j,e=C;return a(),p(e,null,{default:c(()=>[t(s,{image:"/media/equipment/geprc-cl25.webp"},{description:c(()=>[i("p",{innerHTML:_.$t("shooting.section.actionShots.description.p1")},null,8,et),i("p",{innerHTML:_.$t("shooting.section.actionShots.description.p2")},null,8,st)]),_:1})]),_:1})}const ct=Object.assign(u(ot,[["render",it]]),{__name:"ShootingSectionHomeActionShots"}),_t={},lt=["innerHTML"],at=["innerHTML"];function rt(_,n){const s=j,e=C;return a(),p(e,null,{default:c(()=>[t(s,{image:"/media/equipment/dji-mini.webp"},{description:c(()=>[i("p",{innerHTML:_.$t("shooting.section.regularShots.description.p1")},null,8,lt),i("p",{innerHTML:_.$t("shooting.section.regularShots.description.p2")},null,8,at)]),_:1})]),_:1})}const dt=Object.assign(u(_t,[["render",rt]]),{__name:"ShootingSectionHomeRegularShots"}),pt=f({__name:"ShootingSectionForm",setup(_){const n=H(!1),s=H(!1);function e(){n.value=!1,s.value=!0}return E(()=>n.value,o=>{o||dn().$v.$reset()}),(o,l)=>{const r=pn,m=d("v-container"),v=C;return a(),p(v,null,{default:c(()=>[t(m,{class:"pa-0","max-width":488},{default:c(()=>[t(r,{class:"px-9",onSent:e})]),_:1})]),_:1})}}}),mt=Object.assign(pt,{__name:"ShootingSectionForm"}),ut={class:"dx-video"},gt=f({__name:"ShootingSectionFooter",setup(_){const n=M(),s=H();return(e,o)=>{const l=R,r=C;return a(),p(r,{class:"text-center"},{default:c(()=>[i("div",ut,[i("video",{src:"https://dxlliv.github.io/media/dxvfpv.mp4",ref_key:"video",ref:s,muted:"",playsinline:"",autoplay:""},null,512)]),t(l,{class:"cursor-pointer",name:"shooting",subtitle:"",onClick:o[0]||(o[0]=m=>g(n).slideTo(0))})]),_:1})}}}),ft=Object.assign(u(gt,[["__scopeId","data-v-a8d6abc4"]]),{__name:"ShootingSectionFooter"}),vt={init:"false",class:"dx-slider-vertical fill-height"},ht=f({__name:"ShootingSlider",props:{initialSlide:{default:0},pageName:{}},setup(_){const n=M(),s=_;return Q(()=>{n.initialize(s.pageName,s.initialSlide)}),(e,o)=>(a(),$("swiper-container",vt,[B(e.$slots,"default")]))}}),St=Object.assign(ht,{__name:"ShootingSlider"}),$t={key:0},kt=f({__name:"ShootingDialog",setup(_){const n=H(!1);return(s,e)=>{const o=Un,l=tt,r=ct,m=dt,v=mt,k=ft,h=St,b=d("v-card"),x=d("v-dialog");return a(),p(x,{activator:"parent",modelValue:g(n),"onUpdate:modelValue":e[1]||(e[1]=T=>X(n)?n.value=T:null),width:800,height:600,fullscreen:s.$vuetify.display.xs},{default:c(()=>[t(b,{rounded:s.$vuetify.display.smAndUp},{default:c(()=>[t(h,{"page-name":"index"},{default:c(()=>[i("swiper-slide",null,[t(o,{onClose:e[0]||(e[0]=T=>n.value=!1)})]),i("swiper-slide",null,[t(l)]),i("swiper-slide",null,[t(r)]),i("swiper-slide",null,[t(m)]),s.$vuetify.display.smAndUp?(a(),$("swiper-slide",$t,[t(v)])):I("",!0),i("swiper-slide",null,[t(k)])]),_:1})]),_:1},8,["rounded"])]),_:1},8,["modelValue","fullscreen"])}}}),bt=Object.assign(u(kt,[["__scopeId","data-v-8b1b9063"]]),{__name:"ShootingDialog"}),xt={};function yt(_,n){const s=tn,e=V,o=on;return a(),p(o,{title:"planner","slide-next":!1},{trigger:c(()=>[t(e,null,{default:c(()=>[t(s,null,{default:c(()=>n[0]||(n[0]=[i("a",{href:"https://dxlliv.github.io/planner/",target:"_blank"}," Try it online ",-1)])),_:1})]),_:1})]),default:c(()=>[n[1]||(n[1]=S(" Plan your profile grids")),n[2]||(n[2]=i("br",null,null,-1)),n[3]||(n[3]=S(" like a pro with planner "))]),_:1})}const wt=Object.assign(u(xt,[["render",yt]]),{__name:"BlockSlideProjectPlanner"}),Ot=f({__name:"index",setup(_){return un({title:"Your No Label Developer"}),(n,s)=>{const e=N,o=xn,l=Bn,r=cn,m=_n,v=bt,k=ln,h=wt,b=en,x=sn;return a(),$(J,null,[i("swiper-slide",null,[t(e)]),i("swiper-slide",null,[t(o)]),i("swiper-slide",null,[t(l)]),i("swiper-slide",null,[t(r)]),i("swiper-slide",null,[t(m,{video:("routeRawVideoClip"in n?n.routeRawVideoClip:g(an))("2024/AQPvg5ClEWLL9efbgAkokCXSzspsWJYRsiP7S_ojM-pG4GeABI2WAM1Dp-qhO5SHs5sBOK19c-li9h7-f0rleT_k")},null,8,["video"])]),i("swiper-slide",null,[t(k,null,{default:c(()=>[t(v)]),_:1})]),i("swiper-slide",null,[t(h)]),i("swiper-slide",null,[t(b)]),i("swiper-slide",null,[t(x)])],64)}}});export{Ot as default};