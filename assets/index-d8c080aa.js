import{a as e,j as a,F as d}from"./index-d10e8e5d.js";import{u as C}from"./useFetch-a811cfd9.js";import{w as E,C as L,G as B,k as m,x as F,y as h,z as I,A as x,D as y,F as G,I as _,J as T,r as b,P as n,i as g,K as z,N as k,Q as P,U as u,E as f,h as v,V as D,t as S,W as N,L as j,B as w,X as R}from"./vendor-a4a53e21.js";const p=({entry:t})=>{const s=E();return e(L,{hasSelectableInput:t!=null,isSelectableRaised:t!=null,onClick:()=>t&&s(`/blog/${t.id}`),children:a(B,{children:[e(m,{style:{height:"300px",backgroundPosition:"center",backgroundSize:"cover",backgroundImage:t&&`url('${t.cover_image}')`}}),a(m,{children:[e(F,{children:t?t.title:e(h,{})}),e(I,{children:t?t.description:e(h,{})}),e(x,{children:a(y,{children:[e(G,{children:t?t.readable_publish_date:e(h,{})}),t&&e(_,{isCompact:!0,children:t.tag_list.map((r,o)=>e(T,{isCompact:!0,color:"blue",children:r},o))})]})})]})]})})},$=()=>{const[t,s]=b.useState(1),{response:r,loading:o,error:c}=C(`https://dev.to/api/articles?username=akatsukilevi&page=${t}`);return b.useEffect(()=>{o?document.title="Felipe's Portfolio: Blog Loading":c?document.title="Felipe's Portfolio: Blog Error":document.title="Felipe's Portfolio: Blog"},[o,c]),a(d,{children:[a(n,{children:[e(g,{headingLevel:"h1",children:"Blog"}),a(z,{children:["Powered by ",e("a",{href:"https://dev.to/akatsukilevi",children:"DEV.to"})]})]}),e(k,{perPageComponent:"button",toggleTemplate:({firstIndex:l,lastIndex:i})=>e(d,{children:a("b",{children:[l," - ",i]})}),perPage:30,page:t,isDisabled:o||!r,variant:"top",onSetPage:(l,i)=>s(i),isCompact:!0,isSticky:!0}),o||!r?e(n,{children:a(P,{hasGutter:!0,children:[e(u,{children:e(p,{})}),e(u,{children:e(p,{})})]})}):c?e(n,{children:a(f,{children:[e(v,{icon:D}),e(g,{headingLevel:"h4",size:"lg",children:"An error ocurred!"}),e(S,{children:"Failed to fetch blog entries, please check your internet connection and try again later"}),e(N,{children:e(j,{to:"/",children:e(w,{variant:"link",children:"Return home"})})})]})}):r.length==0?e(n,{children:a(f,{children:[e(v,{icon:R}),e(g,{headingLevel:"h4",size:"lg",children:"No blog entries found"}),e(S,{children:"No entries found. Check if you aren't way too far on pagination and try again later"})]})}):e(n,{children:e(P,{hasGutter:!0,children:r.map((l,i)=>e(u,{children:e(p,{entry:l})},i))})}),e(k,{perPageComponent:"button",toggleTemplate:({firstIndex:l,lastIndex:i})=>e(d,{children:a("b",{children:[l," - ",i]})}),perPage:30,page:t,isDisabled:o||!r,variant:"bottom",onSetPage:(l,i)=>s(i),isCompact:!0,isSticky:!0})]})},K=$;export{K as default};
