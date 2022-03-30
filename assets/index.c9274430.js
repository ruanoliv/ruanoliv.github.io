var H=Object.defineProperty,T=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var S=(t,n,r)=>n in t?H(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,m=(t,n)=>{for(var r in n||(n={}))P.call(n,r)&&S(t,r,n[r]);if($)for(var r of $(n))R.call(n,r)&&S(t,r,n[r]);return t},b=(t,n)=>T(t,W(n));import{s as i,j as w,L as G,A as I,r as s,a as U,G as F,u as M,R as z,b as y,O as A,W as O,c as B,d as E,B as _}from"./vendor.121d2aa8.js";const J=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function d(o){if(o.ep)return;o.ep=!0;const l=r(o);fetch(o.href,l)}};J();const q=i.div`
  width: 100%;
`,K=i.div`

  .Navigator {
    background-color: #23212c;
    border-bottom: 1px solid #fff;
    width: 100%;
    height: 9vh;
  }

  .UList {
    list-style: none;
  }

  .link {
    text-decoration: none;
    color: #615f73;
  }
  .link svg {
    margin: 12px 0 0 20px;
  }
  .link:hover {
    color: #fff;
  }
`,e=w.exports.jsx,c=w.exports.jsxs,X=w.exports.Fragment;function Y(){return e(q,{children:e(K,{children:e("nav",{className:"Navigator",children:e("ul",{className:"UList",children:e("li",{children:e(G,{className:"link",to:"/",children:e(I,{size:25})})})})})})})}const Q=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,V=i.div`
  .Footer {
    background-color: #392f3d;
    height: 100px;
  }
`;function Z(){return e(Q,{children:e(V,{children:e("div",{className:"Footer"})})})}const ee=i.div`
  width: 100%;
  height: 32rem;
  background-color: #23212c;
  display: flex;
  justify-content: center;
  align-items: center;
`,te=i.div`
  .loading {
    border: 12px solid #fff;
    width: 60px;
    height: 60px;
    border-top: 12px solid #615f73;
    border-radius: 50%;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;function ne(){return e(ee,{children:e(te,{children:e("div",{className:"loading"})})})}const ie=i.div`
  margin: 20px 0 0 0;
  `,oe=i.div`
  .Button {
    width: ${t=>t.buttonWidth||"400px"};
    height:  ${t=>t.buttonHeight||"45px"};
    background-color: ${t=>t.buttonColor||"#392f3d"};
    border-radius: 5px;
    color: #615f73;
    font-size: 15px;
    cursor: pointer;
  }
`;function g(t){return e(ie,{children:e(oe,{buttonWidth:t.width,buttonHeight:t.height,buttonColor:t.color,children:e("button",{className:"Button",type:t.type||"button",onClick:t.clicked,disabled:t.disable,children:t.children})})})}const re=i.div`
  display: flex;
  flex-direction: column;
  background-color: #23212c;
  align-items: center;
  justify-content: center;
`,ae=i.div`
  width: 100%;

  .Input {
    width: 400px;
    height: 40px;
    margin: 10px 0 10px 0;
    background-color: #392f3d;
    border: none;
    border-radius: 5px;
    text-align: center;
  }
  .InputCheckbox {
    width: 20px;
    height: 20px;
    margin: 10px 0 10px 0;
    background-color: #392f3d;
    border: none;
  }
`;function v(t){const n=t.type!=="checkbox"?"Input":"InputCheckbox";return e(re,{children:e(ae,{children:e("input",{className:n,type:t.type||"text",name:t.name,placeholder:t.placeholder,onChange:t.changed})})})}var ce=[{id:0,name:"JavaScript"},{id:1,name:"PHP"},{id:2,name:"HTML"},{id:3,name:"CSS"},{id:4,name:"Java"}];const le=i.div`
  color: #615f73;
  margin: 30px 0 50px 0;
`;function se(t){return e(le,{children:e("form",{action:"",children:t.children})})}const de=i.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,he=i.div`
  width: 100%;

  .TextArea {
    width: 400px;
    height: 110px;
    margin: 10px 0 10px 0;
    background-color: #392f3d;
    border: none;
    border-radius: 5px;
    text-align: center;
    resize: none;
  }
`;function ue(t){return e(de,{children:e(he,{children:e("textarea",{className:"TextArea",name:t.name,placeholder:t.placeholder||"Your message",onChange:t.changed})})})}const ge=i.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #23212c;
  align-items: center;
  justify-content: center;
`,pe=i.div`
  .title {
    margin: 20px 0 0 0;
  }
  .Tecnologys {
    margin: 20px 0 0 0;
    display: grid;
    grid-template-columns: 150px 150px 150px;
    grid-gap: 10px;
  }
`;function L(){const[t,n]=s.exports.useState({github:"",linkedin:"",bioMessage:"",tecnologys:[]}),[r,d]=s.exports.useState(!0),o=a=>{n(b(m({},t),{[a.target.name]:a.target.value})),t.github!=""&&t.linkedin!=""&&t.bioMessage!=""&&t.tecnologys!=[]&&d(!1)},l=a=>{n(b(m({},t),{tecnologys:[...t.tecnologys,{name:a.target.name}]}))};return e(ge,{children:e(pe,{children:c(se,{children:[e(v,{name:"github",type:"text",placeholder:"Link github",changed:o}),e(v,{name:"linkedin",type:"text",placeholder:"Link linkedIn",changed:o}),e("p",{className:"title",children:"Tecnologias"}),e("div",{className:"Tecnologys",children:ce.map(a=>c("div",{children:[e(v,{type:"checkbox",width:"20px",height:"20px",value:a.name,name:a.name,changed:l}),c("label",{htmlFor:a.id,children:[" ",a.name," "]})]},a.id))}),e(ue,{name:"bioMessage",placeholder:"Bio",changed:o}),e(G,{to:"/home",state:t,children:e(g,{type:"button",content:"Go to portfolio",disable:r,children:"Ir para portfolio"})})]})})})}const xe=i.div`
  height: 42rem;
  background-color: #23212c;
  
  `,fe=i.div`
  color: #615f73;
  
  .Home{
    width: 100%;
    display: flex;
    flex-direction: colomn;
    justify-content: space-evenly;
    align-items: center;
  }
  .UserInformation{
    width: 244px;
    height: 194px;
  }
  .Content{
    width: 688px;
    height: 400px;
  }
`,me=i.div`
  width: 100%;
`,be=i.div`
  width: 244px;
  height: 194px;
  border-radius: 10px;
  background-color: #392f3d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .GitPhoto {
    margin: 0 0 30px 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #615f73;
  }
  a{
    text-decoration: none;
    color: #615f73;
  }
`;function ye(t){return e(me,{children:e(be,{children:c("a",{href:t.data.html_url,children:[e("img",{src:t.data.avatar_url,className:"GitPhoto"}),e("div",{className:"Name",children:t.data.name})]})})})}const ve=i.div`
  width: 100%;
  margin: 30px 0 0 0;
`,we=i.div`
  width: 244px;
  height: 288px;
  border-radius: 10px;
  background-color: #392f3d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  ul {
    word-break: break-word;
    width: 200px;
    font-size: 12px;
    color: #707070;
    list-style-type: none;
    padding: 0;
    zoom: 1;
}

ul:after {
    content: '';
    clear: both
}

.status li {
    padding: 8px 0;
}

.status li:last-of-type {
    box-shadow: none
}

.status strong {
    margin: 0px 0px 0px 10px;
    color: #615f73;
    font-size: 16px;
    line-height: 1.6
}

.status a {
    color: #707070;
    text-decoration: none
}

.status a:hover {
    color: #4183c4
}
`;function ke(t){return console.log(t.data),e(ve,{children:e(we,{children:e("div",{className:"github-card",children:c("ul",{class:"status",children:[e("li",{children:e("strong",{children:t.inputData.bioMessage})}),e("li",{children:c("a",{href:t.inputData.linkedin,children:[e(U,{size:20}),e("strong",{children:t.inputData.linkedin})]})}),c("li",{children:[e(F,{size:20}),e("strong",{children:t.apiData.location})]}),e("li",{children:e("strong",{})})]})})})})}const Ce=i.div`
  width: 100%;
`,Ne=i.div`
  .Controls {
    border-top: 2px solid #fff;
    margin: 120px 0 0 0;
    display: grid;
    grid-template-columns: 150px 150px 150px;
    grid-gap: 30px;
  }
  .Content {
    margin: 50px 0 0 0;
    width: 688px;
    height: 288px;
    border-radius: 10px;
    background-color: #392f3d;
  }
`,$e=i.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  `,Se=i.div`
  .allTech{
    display: grid;
    grid-template-columns: 150px 150px 150px;
    grid-gap: 10px;
  }
  .tech {
    margin: 20px 0px 0px 0px;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
    color: #000;
  }
  
`;function Le(t){return console.log(t.techs[0]),e($e,{children:e(Se,{children:e("div",{className:"allTech",children:t.techs.map((n,r)=>e("div",{className:`tech ${n.name}`,children:n.name},r))})})})}const Ge=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,je=i.div`
    max-width: 620px;
    text-align: justify;
    color: #615f73;
    margin: 30px 0px 0px 40px;
    
    ul {
    text-transform: uppercase;
    font-size: 12px;
    color: #707070;
    list-style-type: none;
    padding: 0;
    zoom: 1;
}

ul:after {
    content: '';
    clear: both
}

.status li {
    padding: 8px 0;
}

.status li:last-of-type {
    box-shadow: none
}

.status strong {
    color: #615f73;
    font-size: 16px;
    line-height: 1.6
}

.status a {
    color: #707070;
    text-decoration: none
}

.status a:hover {
    color: #4183c4
}
`;function De(t){return console.log(t.content),e(Ge,{children:e(je,{children:e("div",{className:"github-card",children:c("ul",{class:"status",children:[e("li",{children:c("a",{href:`https://github.com/${t.content.login}?tab=repositories`,target:"_top",children:["Reposit\xF3rios: ",e("strong",{children:t.content.public_repos})]})}),e("li",{children:c("a",{href:`https://gist.github.com/${t.content.login}`,target:"_top",children:["Gists: ",e("strong",{children:t.content.public_gists})]})}),e("li",{children:c("a",{href:`https://github.com/${t.content.login}/followers`,target:"_top",children:["Seguidores: ",e("strong",{children:t.content.followers})]})}),c("li",{children:["Github bio: ",e("strong",{children:t.content.bio})]})]})})})})}const He=i.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  `,Te=i.div`
  .allContainers{
    display: grid;
    grid-template-columns: 250px 250px;
    grid-gap: 10px;
    margin-left: 20px;  
  }
  `,We=i.div`
  width: 100%;
`,Pe=i.div`
  .container {
    width: 200px;
    height: 100px;
    background-color: #392f3d;
    border: 1px solid #23212c;
    box-shadow: 1px 1px #23212c;
    border-radius: 10px;
    color: #615f73;
}
.container .repoName{
    color: #615f73;
    text-align: center;
    margin: 10px 0 0 0;
  }
  .container .language{
    width: 100px;
    heigth: 20px;
    border-radius: 5px; 
    color: #000;
    margin: 10px 0 0 30px;
    text-align: center;
  }

  a{
      text-decoration: none;
  }
`;function Re(t){return e(We,{children:e(Pe,{children:e("a",{href:t.gitLink,children:c("div",{className:"container",children:[e("p",{className:"repoName",children:t.nameRepo}),e("p",{className:`language ${t.Language}`,children:t.Language})]})})})})}function Ie(t){return console.log(t.containers),e(He,{children:e(Te,{children:e("div",{className:"allContainers",children:t.containers.slice(0,4).map(n=>e(Re,{nameRepo:n.name,gitLink:n.html_url,Language:n.language}))})})})}function Ue(t){const[n,r]=s.exports.useState(!0),[d,o]=s.exports.useState(!1),[l,a]=s.exports.useState(!1);return e(Ce,{children:e(Ne,{children:c("div",{className:"Pagination",children:[c("div",{className:"Controls",children:[e(g,{width:"150px",height:"35px",clicked:()=>{d&&o(!1),l&&a(!1),r(!0)},color:n?"#000":"",children:"Github"}),e(g,{width:"150px",height:"35px",clicked:()=>{n&&r(!1),l&&a(!1),o(!0)},color:d?"#000":"",children:"Containers"}),e(g,{width:"150px",height:"35px",clicked:()=>{n&&r(!1),d&&o(!1),a(!0)},color:l?"#000":"",children:"Tecnologias"})]}),c("div",{className:"Content",children:[n?e(De,{content:t.data}):"",d?e(Ie,{containers:t.containers}):"",l?e(Le,{techs:t.tecnology.tecnologys}):""]})]})})})}function Fe(t){const n=M(),[r,d]=s.exports.useState({name:"carregando..."}),[o,l]=s.exports.useState({}),[a,k]=s.exports.useState(!0);async function C(){let h="https://api.github.com/users/"+n.state.github;return new Promise((x,D)=>{let u=new XMLHttpRequest;u.onreadystatechange=function(){if(this.readyState==4&&this.status==200){let f=JSON.parse(this.responseText);x(f)}},u.open("GET",h,!0),u.send()})}const p=s.exports.useCallback(async()=>{const h=await C();d(h)},[]);s.exports.useEffect(()=>{p()},[p]),s.exports.useEffect(()=>{a&&setTimeout(()=>{k(!1)},2e3)},[a]);async function j(){let h="https://api.github.com/users/"+n.state.github+"/repos";return new Promise((x,D)=>{let u=new XMLHttpRequest;u.onreadystatechange=function(){if(this.readyState==4&&this.status==200){let f=JSON.parse(this.responseText);x(f)}},u.open("GET",h,!0),u.send()})}const N=s.exports.useCallback(async()=>{const h=await j();l(h)},[]);return s.exports.useEffect(()=>{N()},[N]),console.log(r),console.log(o),e(xe,{children:e(fe,{children:a?e(ne,{}):c("section",{className:"Home",children:[c("div",{className:"UserInformation",children:[e(ye,{data:r}),e(ke,{inputData:n.state,apiData:r})]}),e("div",{className:"Content",children:e(Ue,{tecnology:n.state,data:r,containers:o})})]})})})}function Me(){return c(X,{children:[c(z,{children:[e(y,{index:!0,element:e(L,{})}),e(y,{path:"/*",element:e(L,{})}),e(y,{path:"/home",element:e(Fe,{})})]}),e(A,{})]})}function ze(){return c("div",{className:"container",children:[e(Y,{}),e(Me,{}),e(Z,{})]})}const Ae=O`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "ＭＳ Ｐゴシック", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  
  .JavaScript {
    background: #f7df1e;
  }
  .CSS {
    background: #264de4;
  }
  .HTML {
    background: #e34c26;
  }
  .PHP {
    background: #8993be;
  }
  .Java{
    background: #f89820;
  }

`;B.render(e(E.StrictMode,{children:c(_,{children:[e(ze,{}),e(Ae,{})]})}),document.getElementById("root"));
