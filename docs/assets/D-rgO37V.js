import{u as v}from"./V22De2m9.js";import{d,o as u,t as r,v as _,S as l,O as w,r as a,i as S,a5 as h,G as g,_ as p,g as z,C as x,A as o,x as B,z as c}from"./CJKtdRxS.js";const V={init:"false",class:"dx-slider-vertical fill-height"},C=d({__name:"SliderVertical",props:{initialSlide:{default:0},pageName:{}},setup(e){const i=v(),t=e;return u(()=>{i.initialize(t.pageName,t.initialSlide)}),(n,s)=>(r(),_("swiper-container",V,[l(n.$slots,"default")]))}}),$=w("slider/horizontal",()=>{const e=a(),i=S(()=>e.value.swiper),t=a(!0),n=a(!1);function s(){e.value=document.querySelector(".dx-slider-horizontal");const m={spaceBetween:24,slidesPerView:1,breakpoints:{1280:{slidesPerView:1}},on:{init(){}}};e.value.addEventListener("swiperslidechange",()=>{t.value=e.value.swiper.isBeginning,n.value=e.value.swiper.isEnd}),Object.assign(e.value,m),e.value.initialize()}function f(){i.value.update()}return{instance:e,swiper:i,swiperIsBeginning:t,swiperIsEnd:n,initialize:s,update:f}}),k={class:"dx-slider-horizontal",init:"false"},E=d({__name:"SliderHorizontal",setup(e){const i=$(),t=h();return u(()=>{i.initialize()}),g(()=>t.name,n=>{i.update()}),(n,s)=>(r(),_("swiper-container",k,[l(n.$slots,"default",{},void 0,!0)]))}}),H=p(E,[["__scopeId","data-v-385b22a2"]]),N={};function b(e,i){const t=C,n=z("v-card"),s=H;return r(),x(s,null,{default:o(()=>[B("swiper-slide",null,[c(n,{rounded:"",flat:"",class:"fill-height"},{default:o(()=>[c(t,{"page-name":"index"},{default:o(()=>[l(e.$slots,"default")]),_:3})]),_:3})])]),_:3})}const O=p(N,[["render",b]]);export{O as default};