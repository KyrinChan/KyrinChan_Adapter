import{bk as b,Q as y,a1 as x,a3 as T,D as e,aP as d,H as g,a2 as C,O as _,o as I,r as D,S as a,aQ as M,a0 as l,bl as P,aR as L,a4 as c,W as v,Z as U,a8 as B,_ as R,T as n,$ as m,aG as S,Y as V,U as j,aO as p}from"./index.69b87e29.js";import{a as A,b as F,c as H,d as N}from"./auth-v1-tree.f5524167.js";import{b as h}from"./route-block.7577f022.js";import{V as $}from"./VCheckbox.860dc908.js";import"./VCheckboxBtn.eae578de.js";const E={__name:"AuthProvider",setup(k){const o=b(),u=[{icon:"mdi-facebook",color:"#4267b2",colorInDark:"#4267b2"},{icon:"mdi-twitter",color:"#1da1f2",colorInDark:"#1da1f2"},{icon:"mdi-github",color:"#272727",colorInDark:"#fff"},{icon:"mdi-google",color:"#db4437",colorInDark:"#db4437"}];return(f,r)=>(y(),x(C,null,T(u,i=>e(g,{key:i.icon,icon:i.icon,variant:"text",color:d(o).global.name.value==="dark"?i.colorInDark:i.color},null,8,["icon","color"])),64))}};const O={class:"auth-wrapper d-flex align-center justify-center pa-4"},Q={class:"d-flex"},G=["innerHTML"],W=l("h5",{class:"text-h5 font-weight-semibold mb-1"}," Adventure starts here \u{1F680} ",-1),Y=l("p",{class:"mb-0"}," Make your app management easy and fun! ",-1),Z={class:"d-flex align-center mt-1 mb-4"},q=l("span",{class:"me-1"},"I agree to",-1),z=l("a",{href:"javascript:void(0)",class:"text-primary"},"privacy policy & terms",-1),J=l("span",null,"Already have an account?",-1),K=l("span",{class:"mx-4"},"or",-1),X={__name:"register",setup(k){const o=_({username:"",email:"",password:"",privacyPolicies:!1}),u=b(),f=I(()=>u.global.name.value==="light"?A:F),r=_(!1);return(i,t)=>{const w=D("RouterLink");return y(),x("div",O,[e(j,{class:"auth-card pa-4 pt-7","max-width":"448"},{default:a(()=>[e(M,{class:"justify-center"},{prepend:a(()=>[l("div",Q,[l("div",{innerHTML:d(P)},null,8,G)])]),default:a(()=>[e(L,{class:"font-weight-semibold text-2xl text-uppercase"},{default:a(()=>[c(" Materio ")]),_:1})]),_:1}),e(v,{class:"pt-2"},{default:a(()=>[W,Y]),_:1}),e(v,null,{default:a(()=>[e(U,{onSubmit:t[5]||(t[5]=B(()=>{},["prevent"]))},{default:a(()=>[e(R,null,{default:a(()=>[e(n,{cols:"12"},{default:a(()=>[e(m,{modelValue:o.value.username,"onUpdate:modelValue":t[0]||(t[0]=s=>o.value.username=s),label:"Username"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:a(()=>[e(m,{modelValue:o.value.email,"onUpdate:modelValue":t[1]||(t[1]=s=>o.value.email=s),label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:a(()=>[e(m,{modelValue:o.value.password,"onUpdate:modelValue":t[2]||(t[2]=s=>o.value.password=s),label:"Password",type:r.value?"text":"password","append-inner-icon":r.value?"mdi-eye-off-outline":"mdi-eye-outline","onClick:appendInner":t[3]||(t[3]=s=>r.value=!r.value)},null,8,["modelValue","type","append-inner-icon"]),l("div",Z,[e($,{id:"privacy-policy",modelValue:o.value.privacyPolicies,"onUpdate:modelValue":t[4]||(t[4]=s=>o.value.privacyPolicies=s),inline:""},null,8,["modelValue"]),e(S,{for:"privacy-policy",style:{opacity:"1"}},{default:a(()=>[q,z]),_:1})]),e(g,{block:"",type:"submit"},{default:a(()=>[c(" Sign up ")]),_:1})]),_:1}),e(n,{cols:"12",class:"text-center text-base"},{default:a(()=>[J,e(w,{class:"text-primary ms-2",to:"login"},{default:a(()=>[c(" Sign in instead ")]),_:1})]),_:1}),e(n,{cols:"12",class:"d-flex align-center"},{default:a(()=>[e(V),K,e(V)]),_:1}),e(n,{cols:"12",class:"text-center"},{default:a(()=>[e(E)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{class:"auth-footer-start-tree d-none d-md-block",src:d(H),width:250},null,8,["src"]),e(p,{src:d(N),class:"auth-footer-end-tree d-none d-md-block",width:350},null,8,["src"]),e(p,{class:"auth-footer-mask d-none d-md-block",src:d(f)},null,8,["src"])])}}};typeof h=="function"&&h(X);export{X as default};
