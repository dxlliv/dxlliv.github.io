import{e as i,h as o,o as c,n as h,q as a,a2 as m,a3 as p,a4 as u,u as g,a5 as l}from"./Dbj4BaeI.js";const d="img",f=i({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(r){const t=r,n=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=p(u(g().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return l(e,t.src)}return t.src});return(s,e)=>(c(),h(m(a(d)),{src:a(n),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}}),S=Object.assign(f,{__name:"ProseImg"});export{S as default};