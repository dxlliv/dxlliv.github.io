import{u as v}from"./BCsePSXK.js";import{d,o as u,t as r,v as _,U as l,Q as w,r as a,c as h,a7 as S,I as g,_ as p,E as z,i as x,A as o,x as B,z as c}from"./DgB6JFDE.js";const V={init:"false",class:"dxlliv-slider-vertical fill-height"},$=d({__name:"SliderVertical",props:{initialSlide:{default:0},pageName:{}},setup(e){const n=v(),t=e;return u(()=>{n.initialize(t.pageName,t.initialSlide)}),(i,s)=>(r(),_("swiper-container",V,[l(i.$slots,"default")]))}}),C=w("slider/horizontal",()=>{const e=a(),n=h(()=>e.value.swiper),t=a(!0),i=a(!1);function s(){e.value=document.querySelector(".dxlliv-slider-horizontal");const m={spaceBetween:24,slidesPerView:1,breakpoints:{1280:{slidesPerView:1}},on:{init(){}}};e.value.addEventListener("swiperslidechange",()=>{t.value=e.value.swiper.isBeginning,i.value=e.value.swiper.isEnd}),Object.assign(e.value,m),e.value.initialize()}function f(){n.value.update()}return{instance:e,swiper:n,swiperIsBeginning:t,swiperIsEnd:i,initialize:s,update:f}}),E={class:"dxlliv-slider-horizontal",init:"false"},k=d({__name:"SliderHorizontal",setup(e){const n=C(),t=S();return u(()=>{n.initialize()}),g(()=>t.name,i=>{n.update()}),(i,s)=>(r(),_("swiper-container",E,[l(i.$slots,"default",{},void 0,!0)]))}}),H=p(k,[["__scopeId","data-v-6fd1bae9"]]),I={};function N(e,n){const t=$,i=x("v-card"),s=H;return r(),z(s,null,{default:o(()=>[B("swiper-slide",null,[c(i,{rounded:"",flat:"",class:"fill-height"},{default:o(()=>[c(t,{"page-name":"index"},{default:o(()=>[l(e.$slots,"default")]),_:3})]),_:3})])]),_:3})}const P=p(I,[["render",N]]);export{P as default};