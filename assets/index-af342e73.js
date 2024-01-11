import{d as Y,u as c,h as K,a as y}from"./styled-components.browser.esm-bf785d72.js";import{a as w,j as l}from"./jsx-runtime-29545a09.js";import{r as b,R as m}from"./index-76fb7be0.js";function q(C,e){if(C==null)return{};var i={},H=Object.keys(C),V,M;for(M=0;M<H.length;M++)V=H[M],!(e.indexOf(V)>=0)&&(i[V]=C[V]);return i}var Q=["color"],J=b.forwardRef(function(C,e){var i=C.color,H=i===void 0?"currentColor":i,V=q(C,Q);return b.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},V,{ref:e}),b.createElement("path",{d:"M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z",fill:H,fillRule:"evenodd",clipRule:"evenodd"}))}),P={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},A=m.createContext&&m.createContext(P),d=globalThis&&globalThis.__assign||function(){return d=Object.assign||function(C){for(var e,i=1,H=arguments.length;i<H;i++){e=arguments[i];for(var V in e)Object.prototype.hasOwnProperty.call(e,V)&&(C[V]=e[V])}return C},d.apply(this,arguments)},X=globalThis&&globalThis.__rest||function(C,e){var i={};for(var H in C)Object.prototype.hasOwnProperty.call(C,H)&&e.indexOf(H)<0&&(i[H]=C[H]);if(C!=null&&typeof Object.getOwnPropertySymbols=="function")for(var V=0,H=Object.getOwnPropertySymbols(C);V<H.length;V++)e.indexOf(H[V])<0&&Object.prototype.propertyIsEnumerable.call(C,H[V])&&(i[H[V]]=C[H[V]]);return i};function I(C){return C&&C.map(function(e,i){return m.createElement(e.tag,d({key:i},e.attr),I(e.child))})}function W(C){return function(e){return m.createElement(p,d({attr:d({},C.attr)},e),I(C.child))}}function p(C){var e=function(i){var H=C.attr,V=C.size,M=C.title,Z=X(C,["attr","size","title"]),g=V||i.size||"1em",r;return i.className&&(r=i.className),C.className&&(r=(r?r+" ":"")+C.className),m.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,H,Z,{className:r,style:d(d({color:C.color||i.color},i.style),C.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),M&&m.createElement("title",null,M),C.children)};return A!==void 0?m.createElement(A.Consumer,null,function(i){return e(i)}):e(P)}function C1(C){return W({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"}}]})(C)}function l1(C){return W({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z"}}]})(C)}var t1=Object.defineProperty,n1=Object.defineProperties,e1=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,D=(C,e,i)=>e in C?t1(C,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):C[e]=i,t=(C,e)=>{for(var i in e||(e={}))E.call(e,i)&&D(C,i,e[i]);if(x)for(var i of x(e))O.call(e,i)&&D(C,i,e[i]);return C},n=(C,e)=>n1(C,e1(e)),u=(C,e)=>{var i={};for(var H in C)E.call(C,H)&&e.indexOf(H)<0&&(i[H]=C[H]);if(C!=null&&x)for(var H of x(C))e.indexOf(H)<0&&O.call(C,H)&&(i[H]=C[H]);return i},L={white:"#FFFFFF",black:"#000000",silver:"#F6F8F8",photoBlue:"#90A3AE",webColor:"#EBF7FF",gainsBoro:"#DCE4E6",disabled:"#DBDBDB",sky:"#46C4E2",pacificBlue:"#23AAC0",bluetiful:"#288EE9",blue:"#2181EB",azure:"#079BF2",bueRyb:"#0957EF",darkPurple:"#012F46",xiketic:"#16142E",green:"#46C4E2",blood:"#A33020",fog:"#B3B3B3",smoke:"#666666",fakeBlack:"#414042",deep:"#FFA23B",slateBlue:"#6C5CE7",permanent:"#D93031",aquamarine:"#00DC95",destaque:"#EB551A",green100:"#20A383",gradientTangerine:"linear-gradient(269.33deg, #FF9166 4.53%, #FFBC66 95.33%)",gradientBlue:"linear-gradient(248.85deg, #0957EF -1.77%, #46C4E2 104.39%)",gradientOrange:"linear-gradientlinear-gradient(90.8deg, #FF9572 -5.85%, #FF8F74 -4.17%, #FF8D75 3.02%, #FF8B75 9.74%, #FF8B75 13.18%, rgba(255, 134, 119, 0.94) 21.62%, rgba(255, 132, 119, 0.952884) 26.34%, rgba(254, 131, 118, 0.963585) 28.66%, rgba(254, 130, 118, 0.970631) 32.23%, rgba(254, 129, 118, 0.980444) 34.86%, rgba(253, 128, 117, 0.990354) 43.31%, #FD7F75 56.76%, #FD7F75 65.31%, #FD7F75 71.4%, #FD7F75 74.22%, #FD7F75 75.86%, #FD7F75 83.84%, #FD7F75 100.97%)"},N={bold:"700",regular:"400"},v={montserrat:"Montserrat",sfProDisplay:"SF Pro Display",merriweather:"Merriweather",nunito:"nunito"},i1={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},s={xxs2x:"0.5625rem",xxs:"0.6875rem",xs:"0.75rem",sm:"0.8125rem",md:"1rem",lg:"1.0625rem",xl:"1.125rem","2xl":"1.21875rem","3xl":"1.25rem","4xl":"1.28125rem","5xl":"1.375rem","6xl":"1.4375rem","7xl":"1.5625rem","8xl":"1.6875rem","9xl":"1.75rem","10xl":"1.9375rem","11xl":"2rem","12xl":"2.4375rem","13xl":"2.75rem","14xl":"3.375rem"},f={px:"1px",xs:"8px",sm:"12px",md:"15px",lg:"27px",full:"99999px"},a1={shorter:"100%",short:"120%",base:"140%",tall:"150%"};Y`
  /* Your global styles go here */
`;var a={colors:L,fontSizes:s,fontWeight:N,fonts:v,radii:f,lineHeight:a1,space:i1},H1=`
    background-color: ${a.colors.azure};
`,c1=`
    background-color: ${a.colors.blood};
`,V1=`
    background-color: ${a.colors.green100};
`,L1=`
    background-color: ${a.colors.destaque};
`,w1={primary:H1,danger:c1,success:V1,warning:L1},M1=c.div`
  @media (max-width: 750px) {
    width: 300px;
    height: 200px;
  }

  width: 526.401px;
  height: 415px;
  border: 1px solid ${a.colors.fog};
  border-radius: ${a.radii.sm};
  display: ${C=>C.isOpen?"flex":"none"};
  text-align: center;
  flex-shrink: 0;
  box-shadow: 9.79351px 9.79351px 24.48378px 0px rgba(37, 37, 39, 0.2),
    -9.79351px 0px 24.48378px 0px rgba(37, 37, 39, 0.2);
`,h1=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .Icon {
    width: 34.277px;
    height: 34.277px;
    color :${a.colors.white}
  }
  @media (max-width: 750px) {
    width: 50px;
    .Icon {
      width: 280px;
      height: 28px;
     
    }
  }

  width: 61.209px;
  height: 100%;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;

  ${({kind:C})=>w1[C]};
`,Z1=c.div`
  height: 70px;
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
  color: ${a.colors.smoke};
`,g1=c.h1`
  @media (max-width: 750px) {
    font-size: ${a.fontSizes["3xl"]};
  }
  font-size: ${a.fontSizes["4xl"]};
  font-family: ${a.fonts.montserrat};
  margin: auto;
`,r1=c.div`
  height: 100%;
  width: 100%;
`,f1=c.button`
  @media (max-width: 750px) {
    .CloseIcon {
      width: 17px;
      height: 17px;
     
    }
  }

  .CloseIcon {
    width: 20.811px;
    height: 20.811px;
    fill : ${a.colors.fakeBlack};
  }
  border: none;
  background: inherit;
  cursor: pointer;
  margin-right: ${a.space[5]};
  font-style: italic;
  font-weight: 300;
`,hV=c.p`
  @media (max-width: 500px) {
    font-size: ${C=>C.size?wV(C.size):a.fontSizes.lg};
  }

  font-family: ${C=>C.font?a.fonts[C.font]:a.fonts.sfProDisplay};
  font-size: ${C=>C.size?a.fontSizes[C.size]:a.fontSizes.lg};
  font-weight: ${C=>C.isBold?a.fontWeight.bold:a.fontWeight.regular};
  color: ${a.colors.fakeBlack};
  text-decoration: ${C=>C.underline?"underline":"none"};
  ${C=>C.placeHolder&&MV};
`;hV.displayName="Text";var ZV=c.h1`
  font-family: ${C=>{switch(C.font){case"merriweather":return a.fonts.merriweather;case"sfProDisplay":return a.fonts.sfProDisplay;default:return a.fonts.montserrat}}};
  font-size: ${C=>C.size?a.fontSizes[`${C.size}`]:a.fontSizes["13xl"]};
  font-weight: ${C=>C.isRegular?a.fontWeight.regular:a.fontWeight.bold};
  line-height: ${a.lineHeight.base};
  color: ${a.colors.fakeBlack};
`,gV=c.h2`
  font-family: ${C=>{switch(C.font){case"merriweather":return a.fonts.merriweather;case"sfProDisplay":return a.fonts.sfProDisplay;default:return a.fonts.montserrat}}};
  font-size: ${C=>C.size?a.fontSizes[`${C.size}`]:a.fontSizes["11xl"]};
  font-weight: ${C=>C.isRegular?a.fontWeight.regular:a.fontWeight.bold};
  line-height: ${a.lineHeight.base};
  color: ${a.colors.fakeBlack};
`,rV=c.h3`
  font-family: ${C=>{switch(C.font){case"merriweather":return a.fonts.merriweather;case"sfProDisplay":return a.fonts.sfProDisplay;default:return a.fonts.montserrat}}};
  font-size: ${C=>C.size?a.fontSizes[`${C.size}`]:a.fontSizes["5xl"]};
  font-weight: ${C=>C.isRegular?a.fontWeight.regular:a.fontWeight.bold};
  line-height: ${a.lineHeight.base};
  color: ${a.colors.fakeBlack};
`;ZV.displayName="H1";gV.displayName="H2";rV.displayName="H3";var fV=c.h4`
  font-family: ${C=>{switch(C.font){case"merriweather":return a.fonts.merriweather;case"sfProDisplay":return a.fonts.sfProDisplay;default:return a.fonts.montserrat}}};
  font-size: ${C=>C.size?a.fontSizes[`${C.size}`]:a.fontSizes["3xl"]};
  font-weight: ${C=>C.isRegular?a.fontWeight.regular:a.fontWeight.bold};
  line-height: ${a.lineHeight.base};
  color: ${a.colors.fakeBlack};
`;fV.displayName="Subtitle";var dV=`
  @media (max-width: 500px) {
    height: ${a.space[8]};
    width: ${a.space[8]};
  }
  height: ${a.space[10]};
  width: ${a.space[10]};
  background-color: ${a.colors.azure};
  padding: 0;
  .check {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`,uV=c.div`
  display: flex;
`,oV=c.div`
  @media (max-width: 500px) {
    font-size: ${a.fontSizes.lg};
  }
  border-radius: ${a.radii.full};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: ${a.fontWeight.bold};
  font-family: ${a.fonts.montserrat};
  font-size: ${a.fontSizes.xl};
  color: ${C=>C.isActive()?a.colors.azure:a.colors.fog};
`,mV=c.div`
  @media (max-width: 500px) {
    height: ${a.space[6]};
    width: ${a.space[6]};
  }

  border-radius: inherit;
  height: ${a.space[8]};
  width: ${a.space[8]};
  padding: ${a.space[1]};
  margin: ${a.space[1]};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #dbdbdb;
  ${C=>C.isNumeric()?"":dV}
`,vV=c.span`
  height: .125rem;
  margin: auto;
  margin-top: 20px;
  border-radius: .125rem;
  width: 100%;
  background-color:
    ${C=>C.isActive()?a.colors.azure:a.colors.fog};
`,sV=c.p`
  margin: 0;
  font-family: ${a.fonts.montserrat};
  font-size: 1rem;
  font-weight: ${a.fontWeight.bold};
  color: ${C=>C.isPassed()?a.colors.azure:a.colors.fog};
`;function xV({children:C,currentStep:e,mapKey:i,label:H,isFinal:V}){return w(uV,{children:[w(oV,{isActive:()=>e===i,children:[w(mV,{isNumeric:()=>e<=i,children:[e>i&&l(h,{color:"#fff",viewBox:"0 0 20 20",name:"ApproveTick",className:"check"}),e<=i&&C]}),l(sV,{isPassed:()=>e>=i,children:H})]},i),!V()&&l(vV,{isActive:()=>e>i})]})}var NV=c.div`
  display: grid;
  gap: ${a.space[1]};
  grid-template-columns: repeat(${C=>C.steps}, 1fr);
`,bV=c.div`
  align-items: center;
  align-content: center;
`;function kV({steps:C=4,currentStep:e=1,label:i="Etapa"}){return l(NV,{steps:C,children:Array.from({length:C},(H,V)=>V+1).map(H=>l(bV,{children:l(xV,{currentStep:e,mapKey:H,label:i,isFinal:()=>H==C,children:H})}))})}kV.displayName="MultiStep";var $=`
font-size: ${a.fontSizes["3xl"]};
width: ${a.space[16]};
height: ${a.space[16]};
`,BV=`
font-size: ${a.fontSizes.sm};
width: ${a.space[8]};
height: ${a.space[8]};
`,SV=`
font-size: ${a.fontSizes["11xl"]};
width: ${a.space[20]};
height: ${a.space[20]};
`,yV=c.div`
  ${C=>C.size==="small"?BV:C.size==="large"?SV:(C.size==="medium",$)}

  font-weight: ${a.fontWeight.regular};
  color: ${a.colors.white};
  font-family: sans-serif;
  border-radius: ${a.radii.full};
  display: inline-block;
  overflow: hidden;
`,F=c.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${C=>a.colors[C.color]};

  .personIcon {
    width: 240px;
    height: 240px;
    padding: 8px;
  }
`,AV=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;function FL({size:C,src:e,alt:i=""}){return l(yV,{size:C,children:e?l(AV,{src:e,alt:i}):i&&i.length>1?l(F,{color:"gradientBlue",children:i.slice(0,2).toUpperCase()}):l(F,{color:"azure",children:l(J,{className:"personIcon",color:"white"})})})}var DV=c.button`
  border: none;
  color: ${C=>C.isDisabled?a.colors.fog:a.colors.black};
  background-color: ${a.colors.white};
  cursor: pointer;

  .Icon {
    margin-top: ${a.space[1]};
    width: ${a.space[5]};
    height: ${a.space[5]};
  }
`;function k(C){var e=C,{direction:i="right",isDisabled:H=!1}=e,V=u(e,["direction","isDisabled"]);return l(DV,n(t({isDisabled:H},V),{children:i==="right"?l(h,{color:H?a.colors.fog:a.colors.black,name:"RightArrow",className:"Icon"}):l(h,{color:H?a.colors.fog:a.colors.black,name:"LeftArrow",className:"Icon"})}))}k.displayName="ArrowButton";var $V=`
.Page {
  height: ${a.space[7]};
  width: ${a.space[7]};
`,FV=`
.Page {
  height: ${a.space[3]};
  width: ${a.space[3]};
}
`,TV=`
.Page {
  height: ${a.space[1]};
  width: ${a.space[6]};
  border-radius: ${a.radii.px};
}
`,zV=c.div`
  margin: 0;
  padding: 0;
  display: flex;
`,RV=c.div`
  display: flex;
  gap: ${a.space[2]};
  margin-top: ${a.space[1]};

  ${C=>C.variant==="line"?TV:C.variant==="button"?FV:$V};
`,PV=c.button`
  color: ${C=>C.isActive?a.colors.white:a.colors.black};
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: ${a.radii.full};
  background-color: ${C=>C.isActive?a.colors.azure:a.colors[`${C.colorDisabled}`]};
`;function TL({pages:C=1,variant:e="default",currentPage:i=1,onClickPrevPage:H,onClickNextPage:V,onClickToPage:M}){var Z,g;const r=e==="default",B=o=>{o==="left"?H(i===1?1:i-1):V(i===C?C:i+1)},S={"default:left":l(k,{onClick:()=>B("left"),isDisabled:i===1,direction:"left"}),"default:right":l(k,{onClick:()=>B("right"),isDisabled:i===C,direction:"right"}),"line:left":"","line:right":"","button:left":"","button:right":""};return w(zV,{children:[(Z=S[`${e}:left`])!=null?Z:"",l(RV,{pages:C,variant:e,children:Array.from({length:C},(o,j)=>j+1).map(o=>l(PV,{colorDisabled:r?"white":"disabled",className:"Page",isActive:i===o,onClick:()=>M(o),children:r&&o},o))}),(g=S[`${e}:right`])!=null?g:""]})}c.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;var IV=`
.Radio {
  border: 1px solid ${a.colors.azure};
}
`,WV=`
color : ${a.colors.fog};
.Radio {
  background-color: ${a.colors.disabled} ;
  .IconRadio {
    background-color: ${a.colors.fog}
  }
}
`,EV=`
.Radio {
  border: 1px solid ${a.colors.blood};
  .IconRadio {
    background-color: ${a.colors.blood}
  }
}
`,OV={disabled:WV,error:EV,primary:IV},UV=c.div`
  margin: ${a.space[2]};

  ${({variant:C})=>OV[C]};
`,GV=c.button`
  background-color: ${a.colors.white};
  border: 1px solid ${a.colors.fog};
  border-radius: ${a.radii.full};
  text-decoration: none;
  width: 18px;
  height: 18px;
  cursor: pointer;
  padding: 4px;
  margin: 0;
`,_V=c.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: ${a.colors.azure};
  border-radius: inherit;
`,jV=c.span`
  font-size: ${a.fontSizes.md};
  font-family: ${a.fonts.montserrat};
  font-weight: ${a.fontWeight.regular};
  margin-left: ${a.space[3]};
`;function zL(C){var e=C,{isChecked:i=!1,variant:H,label:V}=e,M=u(e,["isChecked","variant","label"]);return w(UV,{variant:H,children:[l(GV,n(t({className:"Radio"},M),{children:i&&l(_V,{className:"IconRadio"})})),V&&l(jV,{children:V})]})}var YV=`
    background-color: ${a.colors.azure};
`,KV=`
    background-color: ${a.colors.blood};
`,qV=`
    background-color: ${a.colors.green100};
`,QV=`
    background-color: ${a.colors.destaque};
`,JV=K`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`,XV=c.div`
  @media (max-width: 750px) {
    width: 348px;
    height: 43px;
  }
  width: 480px;
  height: 60px;
  border: 1px solid ${a.colors.fog};
  border-radius: ${a.radii.sm};
  display: ${C=>C.isOpen?"flex":"none"};
  align-items: center;
  align-content: center;
  text-align: center;
  flex-shrink: 0;
  position: fixed;
  top: ${C=>C.isOpen?"0":"-60px"};
  animation: ${JV} 0.5s forwards; /* Aplica a animação quando a notificação é aberta */
`,pV={primary:YV,danger:KV,success:qV,warning:QV},CL=c.div`
  @media (max-width: 750px) {
    width: 29px;
    height: 43px;

  
  }

  .Icon {
    color : ${a.colors.white};
    position : relative;
    width: 90%;
    height: 60%;
    top : 27%;
    left: 4px;
  }

  width: 40px;
  height: 60px;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  position : relative;

  ${({variant:C})=>pV[C]};

 
`,lL=c.p`
  @media (max-width: 750px) {
    font-size: ${a.fontSizes.sm};
  }
  font-size: ${a.fontSizes.lg};
  font-family: ${a.fonts.nunito};
  margin: auto;
  color: ${a.colors.smoke};
`,tL=c.button`
@media (max-width: 750px) {
  width : 25px;
}

 width : 30px;

  .CloseIcon {
      width: 100%;
      height: 100%;
      fill: ${a.colors.smoke};
    }

  border: none;
  background: inherit;
  cursor: pointer;
  margin-right: ${a.space[5]};
`;function nL(C){var e=u(C,[]);return l(tL,n(t({},e),{children:l(h,{name:"Close2",viewBox:"0 0 25 25",className:"CloseIcon"})}))}function eL({variant:C}){return l(CL,{variant:C,children:{primary:l(h,{viewBox:"0 0 26 26",name:"ExclamationMark",className:"Icon"}),warning:l(h,{viewBox:"0 0 26 26",name:"ExclamationMark2",className:"Icon"}),success:l(h,{viewBox:"0 0 26 26",name:"Approve",className:"Icon"}),danger:l(h,{viewBox:"0 0 26 26",name:"Close",className:"Icon"})}[C]})}var T={CloseButton:nL,Label:eL};function RL({message:C="",isOpen:e=!0,variant:i="primary",onClose:H}){return w(XV,{isOpen:e,children:[l(T.Label,{variant:i}),l(lL,{children:C}),l(T.CloseButton,{onClick:H})]})}var iL=c.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-width: 8rem;
  cursor: pointer;
  margin: auto;
  font-size: ${s.md};
  font-weight: ${N.bold};
  border-radius: ${f.xs};
  font-family: ${v.montserrat};

  border-radius: ${C=>{switch(C.size){case"sm":return f.sm;case"lg":return f.xs;default:return f.lg}}};

  padding: ${C=>{let e;switch(C.size){case"sm":e=.31;break;case"lg":e=1.125;break;default:e=.62;break}return`${e}rem 3.375rem`}};

  background-color: ${C=>C.kind=="secondary"?`${L.white}`:`${L.azure}`};

  border: ${C=>C.kind=="secondary"?`${L.azure} 1px solid`:"none"};

  color: ${C=>C.kind=="secondary"?`${L.azure}`:`${L.white}`};

  &:hover {
    background-color: ${C=>{if(C.kind!=="secondary")return`${L.gradientBlue}`}};

    color: ${C=>{if(C.kind=="secondary")return`${L.gradientBlue}`}};

    border: ${C=>{if(C.kind=="secondary")return`${L.gradientBlue} 1px solid`}};
  }

  &:active {
    background-color: ${C=>{if(C.kind!=="secondary")return`${L.darkPurple}`}};

    color: ${C=>{if(C.kind=="secondary")return`${L.darkPurple}`}};

    border: ${C=>{if(C.kind=="secondary")return`${L.darkPurple} 1px solid`}};
  }

  &:disabled {
    cursor: not-allowed;

    background-color: ${C=>{if(C.kind!=="secondary")return`${L.fog}`}};

    color: ${C=>C.kind=="secondary"?`${L.fog}`:`${L.smoke}`};

    border: ${C=>{if(C.kind=="secondary")return`${L.fog} 1px solid`}};
  }

  @media (min-width: 720px) {
    min-width: 9.2rem;

    border-radius: ${C=>{switch(C.size){case"sm":return f.sm;case"lg":return f.md;default:return f.lg}}};

    padding: ${C=>{let e;switch(C.size){case"sm":e=.31;break;case"lg":e=1;break;default:e=.62;break}return`${e}rem 3.375rem`}};

    box-shadow: ${C=>{if(C.kind!=="secondary")return"2px 10px 30px 0px rgba(37, 37, 39, 0.20)"}};
  }
`;iL.displayName="Button";var aL=c.div`
  min-width: 9.25rem;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  color: ${C=>{switch(C.kind){case"completed":return"#20A383";case"error":return L.blood;default:return L.azure}}};
`,HL=c.div`
  width: 95%;
  background: ${C=>{switch(C.kind){case"completed":return"#20A383";case"error":return`linear-gradient(90deg, ${L.blood} 33%, ${L.gainsBoro} 33%);`;default:return`linear-gradient(90deg, ${L.azure} ${C.percentage||.2}%, ${L.gainsBoro} ${C.percentage||.2}%);`}}};
  height: ${C=>{switch(C.size){case"sm":return"0.25rem";default:return"0.5rem"}}};
  border-radius: ${f.sm};
`,cL=c.span`
  font-size: ${s.sm};
  font-weight: ${N.bold};
  font-family: ${v.montserrat};
`,PL=({kind:C,size:e,percentage:i})=>w(aL,{kind:C,size:e,children:[l(HL,{kind:C,size:e,percentage:i}),C=="percent"&&w(cL,{children:[i||0,"%"]}),C=="completed"&&l(C1,{}),C=="error"&&l(l1,{})]}),VL=c.label`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 26px;
  border-radius: 15px;
  background-color: ${C=>C.disabled?`${L.disabled}`:`${L.white}`};
  cursor: ${C=>C.disabled?"not-allowed":"pointer"};
  border: ${C=>C.disabled?`0.5px ${L.silver} solid`:`0.5px ${C.isChecked?L.white:L.azure} solid`};
`,LL=c.input`
  display: none;

  &:checked + span {
    background-color: ${({disabled:C})=>C?`${L.silver}`:`${L.azure}`};
  }

  &:checked + span:before {
    transform: translateX(34px);
    background-color: ${({disabled:C})=>C?`${L.fog}`:`${L.white}`};
  }
`,wL=c.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 15px;
  background-color: ${({disabled:C})=>C?`${L.silver}`:`${L.white}`};
  transition: 0.4s;
  display: flex;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    left: 4%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({disabled:C})=>C?`${L.fog}`:`${L.azure}`};
    transition: 0.4s;
  }
`,ML=c.span`
  font-family: ${v.montserrat};
  font-size: ${s.sm};
  display: ${({kind:C})=>C==="with-label"?"block":"none"};
  position: absolute;
  top: 50%;
  left: ${({isChecked:C})=>C?"5%":"50%"};
  transform: ${({isChecked:C})=>C?"translateX(0%)":"translateX(-50%)"};
  transform: translateY(-50%);
  font-size: 12px;
  color: ${({disabled:C,isChecked:e})=>C?`${L.fog}`:e?`${L.white}`:`${L.azure}`};
`,IL=C=>{var e=C,{kind:i,isChecked:H,disabled:V}=e,M=u(e,["kind","isChecked","disabled"]);return w(VL,{disabled:V,isChecked:H,children:[l(LL,t({type:"checkbox",checked:H,disabled:V},M)),l(wL,{disabled:V}),l(ML,{kind:i,isChecked:H,disabled:V,children:H?"ON":"OFF"})]})},z={default:L.azure,select:L.darkPurple,disabled:L.fog},hL=c.a`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.625rem;
  border-radius: ${f.xs};
  font-weight: ${N.bold};
  font-family: ${v.montserrat};
  font-size: ${s.sm};
  color: ${({kind:C})=>`${z[C]}`};

  ${({kind:C,options:e})=>{switch(e){case"inline":return y`
          text-decoration: underline;
        `;case"background":return y`
          background-color: ${z[C]};
          color: ${C=="disabled"?L.smoke:L.white};
        `;default:return}}}

  &:hover {
    cursor: ${({kind:C})=>C=="disabled"?"not-allowed":"pointer"};
  }
`;function ZL({kind:C,options:e}){const i={default:L.azure,select:L.darkPurple,disabled:L.fog};return l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:l("path",{d:"M15 9.01663C14.779 9.01663 14.567 9.10442 14.4107 9.2607C14.2545 9.41698 14.1667 9.62895 14.1667 9.84996V15.8333C14.1667 16.0543 14.0789 16.2663 13.9226 16.4225C13.7663 16.5788 13.5544 16.6666 13.3333 16.6666H4.16667C3.94566 16.6666 3.7337 16.5788 3.57742 16.4225C3.42114 16.2663 3.33334 16.0543 3.33334 15.8333L3.33334 6.66663C3.33334 6.44561 3.42114 6.23365 3.57742 6.07737C3.7337 5.92109 3.94566 5.83329 4.16667 5.83329L10.15 5.83329C10.371 5.83329 10.583 5.7455 10.7393 5.58922C10.8955 5.43293 10.9833 5.22097 10.9833 4.99996C10.9833 4.77895 10.8955 4.56698 10.7393 4.4107C10.583 4.25442 10.371 4.16663 10.15 4.16663H4.16667C3.50363 4.16663 2.86775 4.43002 2.3989 4.89886C1.93006 5.3677 1.66667 6.00358 1.66667 6.66663L1.66667 15.8333C1.66667 16.4963 1.93006 17.1322 2.3989 17.6011C2.86775 18.0699 3.50363 18.3333 4.16667 18.3333H13.3333C13.9964 18.3333 14.6323 18.0699 15.1011 17.6011C15.5699 17.1322 15.8333 16.4963 15.8333 15.8333V9.84996C15.8333 9.62895 15.7455 9.41698 15.5893 9.2607C15.433 9.10442 15.221 9.01663 15 9.01663ZM18.2667 2.18329C18.1821 1.97967 18.0203 1.81786 17.8167 1.73329C17.7165 1.69059 17.6089 1.66794 17.5 1.66663L12.5 1.66663C12.279 1.66663 12.067 1.75442 11.9108 1.9107C11.7545 2.06698 11.6667 2.27895 11.6667 2.49996C11.6667 2.72097 11.7545 2.93293 11.9108 3.08922C12.067 3.2455 12.279 3.33329 12.5 3.33329H15.4917L6.90834 11.9083C6.83023 11.9858 6.76824 12.0779 6.72593 12.1795C6.68362 12.281 6.66184 12.3899 6.66184 12.5C6.66184 12.61 6.68362 12.7189 6.72593 12.8204C6.76824 12.922 6.83023 13.0142 6.90834 13.0916C6.98581 13.1697 7.07798 13.2317 7.17952 13.274C7.28107 13.3163 7.39 13.3381 7.50001 13.3381C7.61002 13.3381 7.71894 13.3163 7.82049 13.274C7.92204 13.2317 8.0142 13.1697 8.09167 13.0916L16.6667 4.50829V7.49996C16.6667 7.72097 16.7545 7.93293 16.9107 8.08922C17.067 8.2455 17.279 8.33329 17.5 8.33329C17.721 8.33329 17.933 8.2455 18.0893 8.08922C18.2455 7.93293 18.3333 7.72097 18.3333 7.49996V2.49996C18.332 2.39106 18.3094 2.28348 18.2667 2.18329Z",fill:`${e=="background"&&C=="disabled"?L.smoke:e=="background"?L.white:i[C]}`})})}var WL=C=>{var e=C,{kind:i,options:H,children:V}=e,M=u(e,["kind","options","children"]);return w(hL,n(t({kind:i,options:H},M),{children:[V,l(ZL,{kind:i,options:H})]}))},gL={top:{top:"-12px",left:"20%",transform:"translateX(-50%)",borderBottom:`12px solid ${a.colors.azure}`,borderLeft:"12px solid transparent",borderRight:"12px solid transparent"},left:{left:"-12px",top:"20%",transform:"translateY(-50%)",borderTop:"12px solid transparent",borderBottom:"12px solid transparent",borderRight:`12px solid ${a.colors.azure}`},right:{right:"-12px",top:"20%",transform:"translateY(-50%)",borderTop:"12px solid transparent",borderBottom:"12px solid transparent",borderLeft:`12px solid ${a.colors.azure}`},bottom:{top:"100%",left:"12px",borderTop:`12px solid ${a.colors.azure}`,borderLeft:"12px solid transparent",borderRight:"12px solid transparent"}},rL=c.div`
  @media (max-width: 750px) {
    width: 163.74px;

    .text {
      font-size: ${a.fontSizes.md};
    }
  }

  height: 75.676px;
  width: 200px;
  position: relative;
  display: inline-block;
  text-align: center;

  .text {
    margin-top: 30px;
    color: ${a.colors.black};
    font-family: ${a.fonts.montserrat};
    font-size: ${a.fontSizes.lg};
    font-weight: ${a.fontWeight.regular};
  }
`,fL=c.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${a.colors.white};
  border: 1px solid ${a.colors.azure};
  border-radius: 4px;
  left: 50%;
  opacity: ${C=>C.isVisible?"1":"0"};
  transition: opacity 0.3s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    ${C=>gL[`${C.kind}`]}
  }
`,EL=({kind:C="bottom",isVisible:e=!0,text:i})=>l(rL,{children:l(fL,{kind:C,isVisible:e,children:l("p",{className:"text",children:i})})}),dL=c.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  font-family: ${v.montserrat};
  color: ${L.black};
`,uL=c.thead``,oL=c.table`
  background-color: ${L.white};
  width: 100%;
`,R=c.tr`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid ${L.gainsBoro};
`,mL=c.th`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  width: 7rem;
  padding: 0.5rem 1.3rem;
  font-size: ${s.sm};

  &:hover {
    cursor: pointer;
  }
`,vL=c.tbody``,sL=c.td`
  width: 7rem;
  padding: 0.5rem 1.3rem;
  font-size: ${s.xs};
`,xL=()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:l("path",{d:"M17.71 11.29L12.71 6.29002C12.6149 6.19898 12.5028 6.12761 12.38 6.08002C12.1365 5.98 11.8635 5.98 11.62 6.08002C11.4973 6.12761 11.3851 6.19898 11.29 6.29002L6.29 11.29C6.19676 11.3833 6.1228 11.4939 6.07234 11.6158C6.02188 11.7376 5.99591 11.8682 5.99591 12C5.99591 12.2663 6.1017 12.5217 6.29 12.71C6.47831 12.8983 6.7337 13.0041 7 13.0041C7.2663 13.0041 7.5217 12.8983 7.71 12.71L11 9.41002V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8947 11.7348 18 12 18C12.2652 18 12.5196 17.8947 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V9.41002L16.29 12.71C16.383 12.8037 16.4936 12.8781 16.6154 12.9289C16.7373 12.9797 16.868 13.0058 17 13.0058C17.132 13.0058 17.2627 12.9797 17.3846 12.9289C17.5064 12.8781 17.617 12.8037 17.71 12.71C17.8037 12.6171 17.8781 12.5065 17.9289 12.3846C17.9797 12.2627 18.0058 12.132 18.0058 12C18.0058 11.868 17.9797 11.7373 17.9289 11.6154C17.8781 11.4936 17.8037 11.383 17.71 11.29Z",fill:"#079BF2"})}),NL=()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:l("path",{d:"M6.29 12.71L11.29 17.71C11.3851 17.801 11.4973 17.8724 11.62 17.92C11.8635 18.02 12.1365 18.02 12.38 17.92C12.5028 17.8724 12.6149 17.801 12.71 17.71L17.71 12.71C17.8032 12.6167 17.8772 12.5061 17.9277 12.3842C17.9781 12.2624 18.0041 12.1318 18.0041 12C18.0041 11.7337 17.8983 11.4783 17.71 11.29C17.5217 11.1017 17.2663 10.9959 17 10.9959C16.7337 10.9959 16.4783 11.1017 16.29 11.29L13 14.59L13 6.99998C13 6.73477 12.8946 6.48041 12.7071 6.29287C12.5196 6.10534 12.2652 5.99998 12 5.99998C11.7348 5.99998 11.4804 6.10534 11.2929 6.29287C11.1054 6.48041 11 6.73477 11 6.99998L11 14.59L7.71 11.29C7.61704 11.1963 7.50644 11.1219 7.38458 11.0711C7.26272 11.0203 7.13201 10.9942 7 10.9942C6.86799 10.9942 6.73728 11.0203 6.61543 11.0711C6.49357 11.1219 6.38297 11.1963 6.29 11.29C6.19627 11.3829 6.12188 11.4935 6.07111 11.6154C6.02034 11.7373 5.9942 11.868 5.9942 12C5.9942 12.132 6.02034 12.2627 6.07111 12.3846C6.12188 12.5064 6.19627 12.617 6.29 12.71Z",fill:"#46C4E2"})}),OL=({columns:C,data:e})=>l(dL,{children:w(oL,{children:[l(()=>l(uL,{children:l(R,{children:C==null?void 0:C.map((V,M)=>w(mL,{children:[V.sortable&&V.direction=="ASC"&&l(xL,{}),V.sortable&&V.direction=="DSC"&&l(NL,{}),V.label]},M))})}),{}),l(()=>l(vL,{children:e==null?void 0:e.map((V,M)=>l(R,{children:C==null?void 0:C.map((Z,g)=>l(sL,{align:Z.align,children:V[Z.id]},g))},M))}),{})]})}),U=`
  border : 1px solid ${a.colors.azure};

  .Check {
    fill: ${a.colors.azure};
  }
  .Undefined {
    background-color: ${a.colors.azure};
  }
`,G=`
background-color:#DBDBDB;
 border : 1px solid ${a.colors.fog};
 .Check {
  fill: ${a.colors.fog};
 }
 .Undefined {
  background-color: ${a.colors.fog};
 }

 cursor: not-allowed;
`,_=`
  border : 1px solid ${a.colors.blood};
  .Check {
    fill: ${a.colors.blood};
  }
  .Undefined {
    background-color: ${a.colors.blood};
  }
`,bL={default:U,disabled:G,error:_},kL=c.div`
  color: ${C=>C.variant==="disabled"?a.colors.fakeBlack:a.colors.black};

  label {
    display: flex;
  }

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .Check {
    position: absolute;
    height: 18px;
    width: 18px;
  }

  .Label {
    font-family: ${v.montserrat};
  }
`,BL=c.div`
  ${({variant:C})=>bL[C]};
  cursor: pointer;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  position: relative;
  margin-right: 12px;
  ${({variant:C})=>C==="disabled"?G:C==="error"?_:U};
`,SL=c.div`
  position: absolute;
  left: 4px;
  top: 8px;
  height: 2px;
  border-radius: 3px;
  width: 10px;
`;function UL(C){var e=C,{variant:i="default",inputValue:H,label:V,isChecked:M=!1,isUndefined:Z=!1}=e,g=u(e,["variant","inputValue","label","isChecked","isUndefined"]);const r=()=>M?l(h,{viewBox:"0 0 25 25",name:"ApproveTick",className:"Check"}):"";return l(kL,{variant:i,children:w("label",{children:[l("input",n(t({value:H,type:"checkbox"},g),{checked:M})),l(BL,{variant:i,children:Z?l(SL,{className:"Undefined"}):r()}),l("span",{className:"Label",children:V})]})})}export{k as A,iL as B,UL as C,W as G,ZV as H,LV as I,WL as L,$L as M,RL as N,TL as P,zL as R,fV as S,OL as T,FL as a,gV as b,rV as c,kV as d,PL as e,hV as f,IL as g,EL as h};