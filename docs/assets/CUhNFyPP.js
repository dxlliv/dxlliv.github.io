import{u as T}from"./CM4gDnG2.js";import{e as m,q as A,G as B,f as V,z as C,o as _,c as p,h as $,_ as f,r,b as e,w as a,d as b,a as h,g as w,u,k as y,s as k,F as U,H as I,i as M}from"./1YHrdJCX.js";import{_ as q}from"./BV645TuJ.js";import{V as R,u as E,a as L,b as j,_ as N}from"./m9MEQRdn.js";import{R as P,Q}from"./8DF4_iwM.js";const G=["slide-to-clicked-slide","centered-slides"],W=m({__name:"SliderHorizontal",setup(d){const n=A(),o=T(),l=B();return V(()=>{o.initialize(),setTimeout(()=>{n.xs.value&&o.slideTo(1)},150)}),C(()=>l.name,()=>{setTimeout(()=>{o.update(),setTimeout(()=>{o.slideReset()},500)},1e3)}),(t,s)=>(_(),p("swiper-container",{class:"dx-slider-horizontal",init:"false","space-between":0,"slide-to-clicked-slide":t.$vuetify.display.smAndUp,"allow-touch-move":"",mousewheel:"",pagination:"","centered-slides":t.$vuetify.display.smAndUp},[$(t.$slots,"default",{},void 0,!0)],8,G))}}),J=f(W,[["__scopeId","data-v-28e719e0"]]),K={class:"dx-footer"},O=m({__name:"Footer",setup(d){return(n,o)=>{const l=r("v-col"),t=r("v-row");return _(),p("div",K,[e(t,null,{default:a(()=>[e(l,{md:3,class:"hidden-sm-and-down","align-self":"center"}),e(l,{md:6},{default:a(()=>o[0]||(o[0]=[b(" Turning visions into reality."),h("br",null,null,-1),b(" Powered by the modern web. "),h("div",{class:"text-grey-lighten-1 font-weight-thin"},"dxlliv, formerly Diego Villa",-1)])),_:1}),e(l,{md:3,class:"hidden-sm-and-down","align-self":"center"})]),_:1})])}}}),X=f(O,[["__scopeId","data-v-5f715b13"]]),Y=["innerHTML"],S='<span class="mx-6">—</span>',Z=m({__name:"ToolbarMarquee",setup(d){const n=["welcome on dxlliv dot dev","digital pixel perfectionist","website redesign in progress","accepting drone video commissions for 2025","stay tuned for new drone clips","accepting ui/ux, web design and development commissions for 2025"];return(o,l)=>(_(),w(u(R),{duration:n.join(" ").length/2.5,class:"text-grey py-4 overflow-hidden","pause-on-hover":"","pause-on-click":""},{default:a(()=>[h("div",{innerHTML:n.join(S)+S},null,8,Y)]),_:1},8,["duration"]))}}),ee={class:"pa-6"},te=m({__name:"ContactBottomSheet",props:{fullscreen:{type:Boolean}},setup(d){const n=y(!1),o=y(!1);function l(){n.value=!1,o.value=!0}return C(()=>n.value,t=>{t||E().$v.$reset()}),(t,s)=>{const c=L,i=r("v-card"),x=r("v-bottom-sheet"),g=j;return _(),p(U,null,[e(x,{modelValue:u(n),"onUpdate:modelValue":s[0]||(s[0]=v=>k(n)?n.value=v:null),transition:"dialog-bottom-transition",activator:"parent"},{default:a(()=>[e(i,{class:"v-card--rounded-top"},{default:a(()=>[h("div",ee,[e(c,{onSent:l})])]),_:1})]),_:1},8,["modelValue"]),e(g,{modelValue:u(o),"onUpdate:modelValue":s[1]||(s[1]=v=>k(o)?o.value=v:null)},null,8,["modelValue"])],64)}}}),oe=f(te,[["__scopeId","data-v-a2d667aa"]]),ne={class:"dx-toolbar__availability"},se="dxlliv",ae=m({__name:"ToolbarAvailability",setup(d){const n=y("");V(()=>{l()});const o=I(()=>n.value?new Date>n.value:!1);function l(){fetch("https://api.github.com/users/"+se+"/events/public").then(function(t){if(!t.ok)throw new Error("User not found or request failed");return t.json()}).then(function(t){let s=null;for(let c of t)if(c.type==="PushEvent"){if(c.repo.url.endsWith("/status"))continue;let i=new Date(c.created_at);(!s||i>s)&&(s=i)}n.value=new Date(s.setDate(s.getDate()+7))}).catch(function(t){console.error("Error fetching commit data:",t)})}return(t,s)=>{const c=r("v-badge");return _(),p("div",ne,[s[0]||(s[0]=b(" availability ")),e(c,{class:"ml-6","offset-y":-17,color:u(o)?"grey-darken-3":"green"},null,8,["color"]),$(t.$slots,"default",{},void 0,!0)])}}}),le=f(ae,[["__scopeId","data-v-950eea28"]]),re={class:"dx-toolbar"},ce=m({__name:"Toolbar",setup(d){const n=T();return(o,l)=>{const t=r("v-divider"),s=M,c=q,i=r("v-col"),x=Z,g=r("v-breadcrumbs-item"),v=r("v-breadcrumbs"),D=N,z=oe,F=le,H=r("v-row");return _(),p("div",re,[e(t),e(H,{"no-gutters":""},{default:a(()=>[e(i,{class:"flex-grow-0 px-5 hidden-xs","align-self":"center"},{default:a(()=>[e(c,{to:"/"},{default:a(()=>[e(s,{name:"toolbar"})]),_:1})]),_:1}),e(i,{class:"flex-grow-1 px-0 text-right overflow-hidden","align-self":"center"},{default:a(()=>[e(x,{onClick:l[0]||(l[0]=me=>u(n).slideTo(0))})]),_:1}),e(i,{class:"flex-grow-0 px-5 hidden-xs","align-self":"center"},{default:a(()=>[e(v,{class:"px-0"},{default:a(()=>[e(g,{href:"https://github.com/sponsors/dxlliv",target:"_blank"},{default:a(()=>[e(u(P),{size:21,style:{"margin-top":"-1px"}})]),_:1}),e(g,{href:"https://instagram.com/dxlliv",target:"_blank",class:"ml-3"},{default:a(()=>[e(u(Q),{size:20})]),_:1})]),_:1})]),_:1}),e(t,{vertical:""}),e(i,{class:"flex-grow-0 pa-5","align-self":"center"},{default:a(()=>[e(F,null,{default:a(()=>[o.$vuetify.display.smAndUp?(_(),w(D,{key:0})):(_(),w(z,{key:1}))]),_:1})]),_:1})]),_:1})])}}}),ie=f(ce,[["__scopeId","data-v-1078ca70"]]),_e={},de={class:"flex"};function ue(d,n){const o=J,l=r("v-layout"),t=X,s=ie;return _(),p("div",de,[e(l,null,{default:a(()=>[e(o,null,{default:a(()=>[$(d.$slots,"default",{},void 0,!0)]),_:3})]),_:3}),e(t),e(s)])}const xe=f(_e,[["render",ue],["__scopeId","data-v-54fde2ed"]]);export{xe as default};