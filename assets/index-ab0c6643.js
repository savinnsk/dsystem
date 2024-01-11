import{d as _,u as s,h as Y,a as B}from"./styled-components.browser.esm-bf785d72.js";import{j as l}from"./jsx-runtime-ffb262ed.js";import{r as v,R as d}from"./index-76fb7be0.js";function K(C,e){if(C==null)return{};var i={},H=Object.keys(C),c,L;for(L=0;L<H.length;L++)c=H[L],!(e.indexOf(c)>=0)&&(i[c]=C[c]);return i}var q=["color"],Q=v.forwardRef(function(C,e){var i=C.color,H=i===void 0?"currentColor":i,c=K(C,q);return v.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c,{ref:e}),v.createElement("path",{d:"M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z",fill:H,fillRule:"evenodd",clipRule:"evenodd"}))}),z={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},S=d.createContext&&d.createContext(z),g=globalThis&&globalThis.__assign||function(){return g=Object.assign||function(C){for(var e,i=1,H=arguments.length;i<H;i++){e=arguments[i];for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&(C[c]=e[c])}return C},g.apply(this,arguments)},J=globalThis&&globalThis.__rest||function(C,e){var i={};for(var H in C)Object.prototype.hasOwnProperty.call(C,H)&&e.indexOf(H)<0&&(i[H]=C[H]);if(C!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,H=Object.getOwnPropertySymbols(C);c<H.length;c++)e.indexOf(H[c])<0&&Object.prototype.propertyIsEnumerable.call(C,H[c])&&(i[H[c]]=C[H[c]]);return i};function R(C){return C&&C.map(function(e,i){return d.createElement(e.tag,g({key:i},e.attr),R(e.child))})}function P(C){return function(e){return d.createElement(X,g({attr:g({},C.attr)},e),R(C.child))}}function X(C){var e=function(i){var H=C.attr,c=C.size,L=C.title,M=J(C,["attr","size","title"]),h=c||i.size||"1em",w;return i.className&&(w=i.className),C.className&&(w=(w?w+" ":"")+C.className),d.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,H,M,{className:w,style:g(g({color:C.color||i.color},i.style),C.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),L&&d.createElement("title",null,L),C.children)};return S!==void 0?d.createElement(S.Consumer,null,function(i){return e(i)}):e(z)}function p(C){return P({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"}}]})(C)}function C1(C){return P({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z"}}]})(C)}var l1=Object.defineProperty,t1=Object.defineProperties,n1=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,y=(C,e,i)=>e in C?l1(C,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):C[e]=i,t=(C,e)=>{for(var i in e||(e={}))I.call(e,i)&&y(C,i,e[i]);if(o)for(var i of o(e))W.call(e,i)&&y(C,i,e[i]);return C},n=(C,e)=>t1(C,n1(e)),r=(C,e)=>{var i={};for(var H in C)I.call(C,H)&&e.indexOf(H)<0&&(i[H]=C[H]);if(C!=null&&o)for(var H of o(C))e.indexOf(H)<0&&W.call(C,H)&&(i[H]=C[H]);return i},V={white:"#FFFFFF",black:"#000000",silver:"#F6F8F8",photoBlue:"#90A3AE",webColor:"#EBF7FF",gainsBoro:"#DCE4E6",disabled:"#DBDBDB",sky:"#46C4E2",pacificBlue:"#23AAC0",bluetiful:"#288EE9",blue:"#2181EB",azure:"#079BF2",bueRyb:"#0957EF",darkPurple:"#012F46",xiketic:"#16142E",green:"#46C4E2",blood:"#A33020",fog:"#B3B3B3",smoke:"#666666",fakeBlack:"#414042",deep:"#FFA23B",slateBlue:"#6C5CE7",permanent:"#D93031",aquamarine:"#00DC95",destaque:"#EB551A",green100:"#20A383",gradientTangerine:"linear-gradient(269.33deg, #FF9166 4.53%, #FFBC66 95.33%)",gradientBlue:"linear-gradient(248.85deg, #0957EF -1.77%, #46C4E2 104.39%)",gradientOrange:"linear-gradientlinear-gradient(90.8deg, #FF9572 -5.85%, #FF8F74 -4.17%, #FF8D75 3.02%, #FF8B75 9.74%, #FF8B75 13.18%, rgba(255, 134, 119, 0.94) 21.62%, rgba(255, 132, 119, 0.952884) 26.34%, rgba(254, 131, 118, 0.963585) 28.66%, rgba(254, 130, 118, 0.970631) 32.23%, rgba(254, 129, 118, 0.980444) 34.86%, rgba(253, 128, 117, 0.990354) 43.31%, #FD7F75 56.76%, #FD7F75 65.31%, #FD7F75 71.4%, #FD7F75 74.22%, #FD7F75 75.86%, #FD7F75 83.84%, #FD7F75 100.97%)"},m={bold:"700",regular:"400"},j={montserrat:"Montserrat",sfProDisplay:"SF Pro Display",merriweather:"Merriweather",nunito:"nunito"},e1={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},u={xxs2x:"0.5625rem",xxs:"0.6875rem",xs:"0.75rem",sm:"0.8125rem",md:"1rem",lg:"1.0625rem",xl:"1.125rem","2xl":"1.21875rem","3xl":"1.25rem","4xl":"1.28125rem","5xl":"1.375rem","6xl":"1.4375rem","7xl":"1.5625rem","8xl":"1.6875rem","9xl":"1.75rem","10xl":"1.9375rem","11xl":"2rem","12xl":"2.4375rem","13xl":"2.75rem","14xl":"3.375rem"},Z={px:"1px",xs:"8px",sm:"12px",md:"15px",lg:"27px",full:"99999px"},i1={shorter:"100%",short:"120%",base:"140%",tall:"150%"};_`
  /* Your global styles go here */
`;var a={colors:V,fontSizes:u,fontWeight:m,fonts:j,radii:Z,lineHeight:i1,space:e1},a1=`
    background-color: ${a.colors.azure};
`,H1=`
    background-color: ${a.colors.blood};
`,s1=`
    background-color: ${a.colors.green100};
`,c1=`
    background-color: ${a.colors.destaque};
`,V1={primary:a1,danger:H1,success:s1,warning:c1},L1=s.div`
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
`,x1=s.div`
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

  ${({kind:C})=>V1[C]};
`,w1=s.div`
  height: 70px;
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
  color: ${a.colors.smoke};
`,M1=s.h1`
  @media (max-width: 750px) {
    font-size: ${a.fontSizes["3xl"]};
  }
  font-size: ${a.fontSizes["4xl"]};
  font-family: ${a.fonts.montserrat};
  margin: auto;
`,h1=s.div`
  height: 100%;
  width: 100%;
`,Z1=s.button`
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
`,xc=s.p`
  @media (max-width: 500px) {
    font-size: ${C=>C.size?Vc(C.size):a.fontSizes.lg};
  }

  font-family: ${C=>C.font?a.fonts[C.font]:a.fonts.sfProDisplay};
  font-size: ${C=>C.size?a.fontSizes[C.size]:a.fontSizes.lg};
  font-weight: ${C=>C.isBold?a.fontWeight.bold:a.fontWeight.regular};
  color: ${a.colors.fakeBlack};
  text-decoration: ${C=>C.underline?"underline":"none"};
  ${C=>C.placeHolder&&Lc};
`;xc.displayName="Text";var wc=s.h1`
  font-family: ${C=>{switch(C.font){case"merriweather":return a.fonts.merriweather;case"sfProDisplay":return a.fonts.sfProDisplay;default:return a.fonts.montserrat}}};
  font-size: ${C=>C.size?a.fontSizes[`${C.size}`]:a.fontSizes["13xl"]};
  font-weight: ${C=>C.isRegular?a.fontWeight.regular:a.fontWeight.bold};
  line-height: ${a.lineHeight.base};
  color: ${a.colors.fakeBlack};
`,Mc=s.h2`
  font-family: ${C=>{switch(C.font){case"merriweather":return a.fonts.merriweather;case"sfProDisplay":return a.fonts.sfProDisplay;default:return a.fonts.montserrat}}};
  font-size: ${C=>C.size?a.fontSizes[`${C.size}`]:a.fontSizes["11xl"]};
  font-weight: ${C=>C.isRegular?a.fontWeight.regular:a.fontWeight.bold};
  line-height: ${a.lineHeight.base};
  color: ${a.colors.fakeBlack};
`,hc=s.h3`
  font-family: ${C=>{switch(C.font){case"merriweather":return a.fonts.merriweather;case"sfProDisplay":return a.fonts.sfProDisplay;default:return a.fonts.montserrat}}};
  font-size: ${C=>C.size?a.fontSizes[`${C.size}`]:a.fontSizes["5xl"]};
  font-weight: ${C=>C.isRegular?a.fontWeight.regular:a.fontWeight.bold};
  line-height: ${a.lineHeight.base};
  color: ${a.colors.fakeBlack};
`;wc.displayName="H1";Mc.displayName="H2";hc.displayName="H3";var Zc=s.h4`
  font-family: ${C=>{switch(C.font){case"merriweather":return a.fonts.merriweather;case"sfProDisplay":return a.fonts.sfProDisplay;default:return a.fonts.montserrat}}};
  font-size: ${C=>C.size?a.fontSizes[`${C.size}`]:a.fontSizes["3xl"]};
  font-weight: ${C=>C.isRegular?a.fontWeight.regular:a.fontWeight.bold};
  line-height: ${a.lineHeight.base};
  color: ${a.colors.fakeBlack};
`;Zc.displayName="Subtitle";var gc=`
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
`,rc=s.div`
  display: flex;
`,fc=s.div`
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
`,dc=s.div`
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
  ${C=>C.isNumeric()?"":gc}
`,jc=s.span`
  height: .125rem;
  margin: auto;
  margin-top: 20px;
  border-radius: .125rem;
  width: 100%;
  background-color:
    ${C=>C.isActive()?a.colors.azure:a.colors.fog};
`,uc=s.p`
  margin: 0;
  font-family: ${a.fonts.montserrat};
  font-size: 1rem;
  font-weight: ${a.fontWeight.bold};
  color: ${C=>C.isPassed()?a.colors.azure:a.colors.fog};
`;function oc({children:C,currentStep:e,mapKey:i,label:H,isFinal:c}){return l.jsxs(rc,{children:[l.jsxs(fc,{isActive:()=>e===i,children:[l.jsxs(dc,{isNumeric:()=>e<=i,children:[e>i&&l.jsx(x,{color:"#fff",viewBox:"0 0 20 20",name:"ApproveTick",className:"check"}),e<=i&&C]}),l.jsx(uc,{isPassed:()=>e>=i,children:H})]},i),!c()&&l.jsx(jc,{isActive:()=>e>i})]})}var mc=s.div`
  display: grid;
  gap: ${a.space[1]};
  grid-template-columns: repeat(${C=>C.steps}, 1fr);
`,vc=s.div`
  align-items: center;
  align-content: center;
`;function Nc({steps:C=4,currentStep:e=1,label:i="Etapa"}){return l.jsx(mc,{steps:C,children:Array.from({length:C},(H,c)=>c+1).map(H=>l.jsx(vc,{children:l.jsx(oc,{currentStep:e,mapKey:H,label:i,isFinal:()=>H==C,children:H})}))})}Nc.displayName="MultiStep";var A=`
font-size: ${a.fontSizes["3xl"]};
width: ${a.space[16]};
height: ${a.space[16]};
`,bc=`
font-size: ${a.fontSizes.sm};
width: ${a.space[8]};
height: ${a.space[8]};
`,kc=`
font-size: ${a.fontSizes["11xl"]};
width: ${a.space[20]};
height: ${a.space[20]};
`,Bc=s.div`
  ${C=>C.size==="small"?bc:C.size==="large"?kc:(C.size==="medium",A)}

  font-weight: ${a.fontWeight.regular};
  color: ${a.colors.white};
  font-family: sans-serif;
  border-radius: ${a.radii.full};
  display: inline-block;
  overflow: hidden;
`,D=s.div`
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
`,Sc=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;function DV({size:C,src:e,alt:i=""}){return l.jsx(Bc,{size:C,children:e?l.jsx(Sc,{src:e,alt:i}):i&&i.length>1?l.jsx(D,{color:"gradientBlue",children:i.slice(0,2).toUpperCase()}):l.jsx(D,{color:"azure",children:l.jsx(Q,{className:"personIcon",color:"white"})})})}var yc=s.button`
  border: none;
  color: ${C=>C.isDisabled?a.colors.fog:a.colors.black};
  background-color: ${a.colors.white};
  cursor: pointer;

  .Icon {
    margin-top: ${a.space[1]};
    width: ${a.space[5]};
    height: ${a.space[5]};
  }
`;function N(C){var e=C,{direction:i="right",isDisabled:H=!1}=e,c=r(e,["direction","isDisabled"]);return l.jsx(yc,n(t({isDisabled:H},c),{children:i==="right"?l.jsx(x,{color:H?a.colors.fog:a.colors.black,name:"RightArrow",className:"Icon"}):l.jsx(x,{color:H?a.colors.fog:a.colors.black,name:"LeftArrow",className:"Icon"})}))}N.displayName="ArrowButton";var Ac=`
.Page {
  height: ${a.space[7]};
  width: ${a.space[7]};
`,Dc=`
.Page {
  height: ${a.space[3]};
  width: ${a.space[3]};
}
`,$c=`
.Page {
  height: ${a.space[1]};
  width: ${a.space[6]};
  border-radius: ${a.radii.px};
}
`,Fc=s.div`
  margin: 0;
  padding: 0;
  display: flex;
`,Tc=s.div`
  display: flex;
  gap: ${a.space[2]};
  margin-top: ${a.space[1]};

  ${C=>C.variant==="line"?$c:C.variant==="button"?Dc:Ac};
`,zc=s.button`
  color: ${C=>C.isActive?a.colors.white:a.colors.black};
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: ${a.radii.full};
  background-color: ${C=>C.isActive?a.colors.azure:a.colors[`${C.colorDisabled}`]};
`;function $V({pages:C=1,variant:e="default",currentPage:i=1,onClickPrevPage:H,onClickNextPage:c,onClickToPage:L}){var M,h;const w=e==="default",b=f=>{f==="left"?H(i===1?1:i-1):c(i===C?C:i+1)},k={"default:left":l.jsx(N,{onClick:()=>b("left"),isDisabled:i===1,direction:"left"}),"default:right":l.jsx(N,{onClick:()=>b("right"),isDisabled:i===C,direction:"right"}),"line:left":"","line:right":"","button:left":"","button:right":""};return l.jsxs(Fc,{children:[(M=k[`${e}:left`])!=null?M:"",l.jsx(Tc,{pages:C,variant:e,children:Array.from({length:C},(f,G)=>G+1).map(f=>l.jsx(zc,{colorDisabled:w?"white":"disabled",className:"Page",isActive:i===f,onClick:()=>L(f),children:w&&f},f))}),(h=k[`${e}:right`])!=null?h:""]})}s.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;var Rc=`
.Radio {
  border: 1px solid ${a.colors.azure};
}
`,Pc=`
color : ${a.colors.fog};
.Radio {
  background-color: ${a.colors.disabled} ;
  .IconRadio {
    background-color: ${a.colors.fog}
  }
}
`,Ic=`
.Radio {
  border: 1px solid ${a.colors.blood};
  .IconRadio {
    background-color: ${a.colors.blood}
  }
}
`,Wc={disabled:Pc,error:Ic,primary:Rc},Ec=s.div`
  margin: ${a.space[2]};

  ${({variant:C})=>Wc[C]};
`,Oc=s.button`
  background-color: ${a.colors.white};
  border: 1px solid ${a.colors.fog};
  border-radius: ${a.radii.full};
  text-decoration: none;
  width: 18px;
  height: 18px;
  cursor: pointer;
  padding: 4px;
  margin: 0;
`,Uc=s.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: ${a.colors.azure};
  border-radius: inherit;
`,Gc=s.span`
  font-size: ${a.fontSizes.md};
  font-family: ${a.fonts.montserrat};
  font-weight: ${a.fontWeight.regular};
  margin-left: ${a.space[3]};
`;function FV(C){var e=C,{isChecked:i=!1,variant:H,label:c}=e,L=r(e,["isChecked","variant","label"]);return l.jsxs(Ec,{variant:H,children:[l.jsx(Oc,n(t({className:"Radio"},L),{children:i&&l.jsx(Uc,{className:"IconRadio"})})),c&&l.jsx(Gc,{children:c})]})}var _c=`
    background-color: ${a.colors.azure};
`,Yc=`
    background-color: ${a.colors.blood};
`,Kc=`
    background-color: ${a.colors.green100};
`,qc=`
    background-color: ${a.colors.destaque};
`,Qc=Y`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`,Jc=s.div`
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
  animation: ${Qc} 0.5s forwards; /* Aplica a animação quando a notificação é aberta */
`,Xc={primary:_c,danger:Yc,success:Kc,warning:qc},pc=s.div`
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

  ${({variant:C})=>Xc[C]};

 
`,CV=s.p`
  @media (max-width: 750px) {
    font-size: ${a.fontSizes.sm};
  }
  font-size: ${a.fontSizes.lg};
  font-family: ${a.fonts.nunito};
  margin: auto;
  color: ${a.colors.smoke};
`,lV=s.button`
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
`;function tV(C){var e=r(C,[]);return l.jsx(lV,n(t({},e),{children:l.jsx(x,{name:"Close2",viewBox:"0 0 25 25",className:"CloseIcon"})}))}function nV({variant:C}){const e={primary:l.jsx(x,{viewBox:"0 0 26 26",name:"ExclamationMark",className:"Icon"}),warning:l.jsx(x,{viewBox:"0 0 26 26",name:"ExclamationMark2",className:"Icon"}),success:l.jsx(x,{viewBox:"0 0 26 26",name:"Approve",className:"Icon"}),danger:l.jsx(x,{viewBox:"0 0 26 26",name:"Close",className:"Icon"})};return l.jsx(pc,{variant:C,children:e[C]})}var $={CloseButton:tV,Label:nV};function TV({message:C="",isOpen:e=!0,variant:i="primary",onClose:H}){return l.jsxs(Jc,{isOpen:e,children:[l.jsx($.Label,{variant:i}),l.jsx(CV,{children:C}),l.jsx($.CloseButton,{onClick:H})]})}var eV=s.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-width: 8rem;
  cursor: pointer;
  margin: auto;
  font-size: ${u.md};
  font-weight: ${m.bold};
  border-radius: ${Z.xs};
  font-family: ${j.montserrat};

  border-radius: ${C=>{switch(C.size){case"sm":return Z.sm;case"lg":return Z.xs;default:return Z.lg}}};

  padding: ${C=>{let e;switch(C.size){case"sm":e=.31;break;case"lg":e=1.125;break;default:e=.62;break}return`${e}rem 3.375rem`}};

  background-color: ${C=>C.kind=="secondary"?`${V.white}`:`${V.azure}`};

  border: ${C=>C.kind=="secondary"?`${V.azure} 1px solid`:"none"};

  color: ${C=>C.kind=="secondary"?`${V.azure}`:`${V.white}`};

  &:hover {
    background-color: ${C=>{if(C.kind!=="secondary")return`${V.gradientBlue}`}};

    color: ${C=>{if(C.kind=="secondary")return`${V.gradientBlue}`}};

    border: ${C=>{if(C.kind=="secondary")return`${V.gradientBlue} 1px solid`}};
  }

  &:active {
    background-color: ${C=>{if(C.kind!=="secondary")return`${V.darkPurple}`}};

    color: ${C=>{if(C.kind=="secondary")return`${V.darkPurple}`}};

    border: ${C=>{if(C.kind=="secondary")return`${V.darkPurple} 1px solid`}};
  }

  &:disabled {
    cursor: not-allowed;

    background-color: ${C=>{if(C.kind!=="secondary")return`${V.fog}`}};

    color: ${C=>C.kind=="secondary"?`${V.fog}`:`${V.smoke}`};

    border: ${C=>{if(C.kind=="secondary")return`${V.fog} 1px solid`}};
  }

  @media (min-width: 720px) {
    min-width: 9.2rem;

    border-radius: ${C=>{switch(C.size){case"sm":return Z.sm;case"lg":return Z.md;default:return Z.lg}}};

    padding: ${C=>{let e;switch(C.size){case"sm":e=.31;break;case"lg":e=1;break;default:e=.62;break}return`${e}rem 3.375rem`}};

    box-shadow: ${C=>{if(C.kind!=="secondary")return"2px 10px 30px 0px rgba(37, 37, 39, 0.20)"}};
  }
`;eV.displayName="Button";var iV=s.div`
  min-width: 9.25rem;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  color: ${C=>{switch(C.kind){case"completed":return"#20A383";case"error":return V.blood;default:return V.azure}}};
`,aV=s.div`
  width: 95%;
  background: ${C=>{switch(C.kind){case"completed":return"#20A383";case"error":return`linear-gradient(90deg, ${V.blood} 33%, ${V.gainsBoro} 33%);`;default:return`linear-gradient(90deg, ${V.azure} ${C.percentage||.2}%, ${V.gainsBoro} ${C.percentage||.2}%);`}}};
  height: ${C=>{switch(C.size){case"sm":return"0.25rem";default:return"0.5rem"}}};
  border-radius: ${Z.sm};
`,HV=s.span`
  font-size: ${u.sm};
  font-weight: ${m.bold};
  font-family: ${j.montserrat};
`,zV=({kind:C,size:e,percentage:i})=>l.jsxs(iV,{kind:C,size:e,children:[l.jsx(aV,{kind:C,size:e,percentage:i}),C=="percent"&&l.jsxs(HV,{children:[i||0,"%"]}),C=="completed"&&l.jsx(p,{}),C=="error"&&l.jsx(C1,{})]}),sV=s.label`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 26px;
  border-radius: 15px;
  background-color: ${C=>C.disabled?`${V.disabled}`:`${V.white}`};
  cursor: ${C=>C.disabled?"not-allowed":"pointer"};
  border: ${C=>C.disabled?`0.5px ${V.silver} solid`:`0.5px ${C.isChecked?V.white:V.azure} solid`};
`,cV=s.input`
  display: none;

  &:checked + span {
    background-color: ${({disabled:C})=>C?`${V.silver}`:`${V.azure}`};
  }

  &:checked + span:before {
    transform: translateX(34px);
    background-color: ${({disabled:C})=>C?`${V.fog}`:`${V.white}`};
  }
`,VV=s.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 15px;
  background-color: ${({disabled:C})=>C?`${V.silver}`:`${V.white}`};
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
    background-color: ${({disabled:C})=>C?`${V.fog}`:`${V.azure}`};
    transition: 0.4s;
  }
`,LV=s.span`
  font-family: ${j.montserrat};
  font-size: ${u.sm};
  display: ${({kind:C})=>C==="with-label"?"block":"none"};
  position: absolute;
  top: 50%;
  left: ${({isChecked:C})=>C?"5%":"50%"};
  transform: ${({isChecked:C})=>C?"translateX(0%)":"translateX(-50%)"};
  transform: translateY(-50%);
  font-size: 12px;
  color: ${({disabled:C,isChecked:e})=>C?`${V.fog}`:e?`${V.white}`:`${V.azure}`};
`,RV=C=>{var e=C,{kind:i,isChecked:H,disabled:c}=e,L=r(e,["kind","isChecked","disabled"]);return l.jsxs(sV,{disabled:c,isChecked:H,children:[l.jsx(cV,t({type:"checkbox",checked:H,disabled:c},L)),l.jsx(VV,{disabled:c}),l.jsx(LV,{kind:i,isChecked:H,disabled:c,children:H?"ON":"OFF"})]})},F={default:V.azure,select:V.darkPurple,disabled:V.fog},xV=s.a`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.625rem;
  border-radius: ${Z.xs};
  font-weight: ${m.bold};
  font-family: ${j.montserrat};
  font-size: ${u.sm};
  color: ${({kind:C})=>`${F[C]}`};

  ${({kind:C,options:e})=>{switch(e){case"inline":return B`
          text-decoration: underline;
        `;case"background":return B`
          background-color: ${F[C]};
          color: ${C=="disabled"?V.smoke:V.white};
        `;default:return}}}

  &:hover {
    cursor: ${({kind:C})=>C=="disabled"?"not-allowed":"pointer"};
  }
`;function wV({kind:C,options:e}){const i={default:V.azure,select:V.darkPurple,disabled:V.fog};return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:l.jsx("path",{d:"M15 9.01663C14.779 9.01663 14.567 9.10442 14.4107 9.2607C14.2545 9.41698 14.1667 9.62895 14.1667 9.84996V15.8333C14.1667 16.0543 14.0789 16.2663 13.9226 16.4225C13.7663 16.5788 13.5544 16.6666 13.3333 16.6666H4.16667C3.94566 16.6666 3.7337 16.5788 3.57742 16.4225C3.42114 16.2663 3.33334 16.0543 3.33334 15.8333L3.33334 6.66663C3.33334 6.44561 3.42114 6.23365 3.57742 6.07737C3.7337 5.92109 3.94566 5.83329 4.16667 5.83329L10.15 5.83329C10.371 5.83329 10.583 5.7455 10.7393 5.58922C10.8955 5.43293 10.9833 5.22097 10.9833 4.99996C10.9833 4.77895 10.8955 4.56698 10.7393 4.4107C10.583 4.25442 10.371 4.16663 10.15 4.16663H4.16667C3.50363 4.16663 2.86775 4.43002 2.3989 4.89886C1.93006 5.3677 1.66667 6.00358 1.66667 6.66663L1.66667 15.8333C1.66667 16.4963 1.93006 17.1322 2.3989 17.6011C2.86775 18.0699 3.50363 18.3333 4.16667 18.3333H13.3333C13.9964 18.3333 14.6323 18.0699 15.1011 17.6011C15.5699 17.1322 15.8333 16.4963 15.8333 15.8333V9.84996C15.8333 9.62895 15.7455 9.41698 15.5893 9.2607C15.433 9.10442 15.221 9.01663 15 9.01663ZM18.2667 2.18329C18.1821 1.97967 18.0203 1.81786 17.8167 1.73329C17.7165 1.69059 17.6089 1.66794 17.5 1.66663L12.5 1.66663C12.279 1.66663 12.067 1.75442 11.9108 1.9107C11.7545 2.06698 11.6667 2.27895 11.6667 2.49996C11.6667 2.72097 11.7545 2.93293 11.9108 3.08922C12.067 3.2455 12.279 3.33329 12.5 3.33329H15.4917L6.90834 11.9083C6.83023 11.9858 6.76824 12.0779 6.72593 12.1795C6.68362 12.281 6.66184 12.3899 6.66184 12.5C6.66184 12.61 6.68362 12.7189 6.72593 12.8204C6.76824 12.922 6.83023 13.0142 6.90834 13.0916C6.98581 13.1697 7.07798 13.2317 7.17952 13.274C7.28107 13.3163 7.39 13.3381 7.50001 13.3381C7.61002 13.3381 7.71894 13.3163 7.82049 13.274C7.92204 13.2317 8.0142 13.1697 8.09167 13.0916L16.6667 4.50829V7.49996C16.6667 7.72097 16.7545 7.93293 16.9107 8.08922C17.067 8.2455 17.279 8.33329 17.5 8.33329C17.721 8.33329 17.933 8.2455 18.0893 8.08922C18.2455 7.93293 18.3333 7.72097 18.3333 7.49996V2.49996C18.332 2.39106 18.3094 2.28348 18.2667 2.18329Z",fill:`${e=="background"&&C=="disabled"?V.smoke:e=="background"?V.white:i[C]}`})})}var PV=C=>{var e=C,{kind:i,options:H,children:c}=e,L=r(e,["kind","options","children"]);return l.jsxs(xV,n(t({kind:i,options:H},L),{children:[c,l.jsx(wV,{kind:i,options:H})]}))},MV={top:{top:"-12px",left:"20%",transform:"translateX(-50%)",borderBottom:`12px solid ${a.colors.azure}`,borderLeft:"12px solid transparent",borderRight:"12px solid transparent"},left:{left:"-12px",top:"20%",transform:"translateY(-50%)",borderTop:"12px solid transparent",borderBottom:"12px solid transparent",borderRight:`12px solid ${a.colors.azure}`},right:{right:"-12px",top:"20%",transform:"translateY(-50%)",borderTop:"12px solid transparent",borderBottom:"12px solid transparent",borderLeft:`12px solid ${a.colors.azure}`},bottom:{top:"100%",left:"12px",borderTop:`12px solid ${a.colors.azure}`,borderLeft:"12px solid transparent",borderRight:"12px solid transparent"}},hV=s.div`
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
`,ZV=s.div`
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
    ${C=>MV[`${C.kind}`]}
  }
`,IV=({kind:C="bottom",isVisible:e=!0,text:i})=>l.jsx(hV,{children:l.jsx(ZV,{kind:C,isVisible:e,children:l.jsx("p",{className:"text",children:i})})}),gV=s.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  font-family: ${j.montserrat};
  color: ${V.black};
`,rV=s.thead``,fV=s.table`
  background-color: ${V.white};
  width: 100%;
`,T=s.tr`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid ${V.gainsBoro};
`,dV=s.th`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  width: 7rem;
  padding: 0.5rem 1.3rem;
  font-size: ${u.sm};

  &:hover {
    cursor: pointer;
  }
`,jV=s.tbody``,uV=s.td`
  width: 7rem;
  padding: 0.5rem 1.3rem;
  font-size: ${u.xs};
`,oV=()=>l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M17.71 11.29L12.71 6.29002C12.6149 6.19898 12.5028 6.12761 12.38 6.08002C12.1365 5.98 11.8635 5.98 11.62 6.08002C11.4973 6.12761 11.3851 6.19898 11.29 6.29002L6.29 11.29C6.19676 11.3833 6.1228 11.4939 6.07234 11.6158C6.02188 11.7376 5.99591 11.8682 5.99591 12C5.99591 12.2663 6.1017 12.5217 6.29 12.71C6.47831 12.8983 6.7337 13.0041 7 13.0041C7.2663 13.0041 7.5217 12.8983 7.71 12.71L11 9.41002V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8947 11.7348 18 12 18C12.2652 18 12.5196 17.8947 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V9.41002L16.29 12.71C16.383 12.8037 16.4936 12.8781 16.6154 12.9289C16.7373 12.9797 16.868 13.0058 17 13.0058C17.132 13.0058 17.2627 12.9797 17.3846 12.9289C17.5064 12.8781 17.617 12.8037 17.71 12.71C17.8037 12.6171 17.8781 12.5065 17.9289 12.3846C17.9797 12.2627 18.0058 12.132 18.0058 12C18.0058 11.868 17.9797 11.7373 17.9289 11.6154C17.8781 11.4936 17.8037 11.383 17.71 11.29Z",fill:"#079BF2"})}),mV=()=>l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M6.29 12.71L11.29 17.71C11.3851 17.801 11.4973 17.8724 11.62 17.92C11.8635 18.02 12.1365 18.02 12.38 17.92C12.5028 17.8724 12.6149 17.801 12.71 17.71L17.71 12.71C17.8032 12.6167 17.8772 12.5061 17.9277 12.3842C17.9781 12.2624 18.0041 12.1318 18.0041 12C18.0041 11.7337 17.8983 11.4783 17.71 11.29C17.5217 11.1017 17.2663 10.9959 17 10.9959C16.7337 10.9959 16.4783 11.1017 16.29 11.29L13 14.59L13 6.99998C13 6.73477 12.8946 6.48041 12.7071 6.29287C12.5196 6.10534 12.2652 5.99998 12 5.99998C11.7348 5.99998 11.4804 6.10534 11.2929 6.29287C11.1054 6.48041 11 6.73477 11 6.99998L11 14.59L7.71 11.29C7.61704 11.1963 7.50644 11.1219 7.38458 11.0711C7.26272 11.0203 7.13201 10.9942 7 10.9942C6.86799 10.9942 6.73728 11.0203 6.61543 11.0711C6.49357 11.1219 6.38297 11.1963 6.29 11.29C6.19627 11.3829 6.12188 11.4935 6.07111 11.6154C6.02034 11.7373 5.9942 11.868 5.9942 12C5.9942 12.132 6.02034 12.2627 6.07111 12.3846C6.12188 12.5064 6.19627 12.617 6.29 12.71Z",fill:"#46C4E2"})}),WV=({columns:C,data:e})=>{const i=()=>l.jsx(rV,{children:l.jsx(T,{children:C==null?void 0:C.map((c,L)=>l.jsxs(dV,{children:[c.sortable&&c.direction=="ASC"&&l.jsx(oV,{}),c.sortable&&c.direction=="DSC"&&l.jsx(mV,{}),c.label]},L))})}),H=()=>l.jsx(jV,{children:e==null?void 0:e.map((c,L)=>l.jsx(T,{children:C==null?void 0:C.map((M,h)=>l.jsx(uV,{align:M.align,children:c[M.id]},h))},L))});return l.jsx(gV,{children:l.jsxs(fV,{children:[l.jsx(i,{}),l.jsx(H,{})]})})},E=`
  border : 1px solid ${a.colors.azure};

  .Check {
    fill: ${a.colors.azure};
  }
  .Undefined {
    background-color: ${a.colors.azure};
  }
`,O=`
background-color:#DBDBDB;
 border : 1px solid ${a.colors.fog};
 .Check {
  fill: ${a.colors.fog};
 }
 .Undefined {
  background-color: ${a.colors.fog};
 }

 cursor: not-allowed;
`,U=`
  border : 1px solid ${a.colors.blood};
  .Check {
    fill: ${a.colors.blood};
  }
  .Undefined {
    background-color: ${a.colors.blood};
  }
`,vV={default:E,disabled:O,error:U},NV=s.div`
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
    font-family: ${j.montserrat};
  }
`,bV=s.div`
  ${({variant:C})=>vV[C]};
  cursor: pointer;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  position: relative;
  margin-right: 12px;
  ${({variant:C})=>C==="disabled"?O:C==="error"?U:E};
`,kV=s.div`
  position: absolute;
  left: 4px;
  top: 8px;
  height: 2px;
  border-radius: 3px;
  width: 10px;
`;function EV(C){var e=C,{variant:i="default",inputValue:H,label:c,isChecked:L=!1,isUndefined:M=!1}=e,h=r(e,["variant","inputValue","label","isChecked","isUndefined"]);const w=()=>L?l.jsx(x,{viewBox:"0 0 25 25",name:"ApproveTick",className:"Check"}):"";return l.jsx(NV,{variant:i,children:l.jsxs("label",{children:[l.jsx("input",n(t({value:H,type:"checkbox"},h),{checked:L})),l.jsx(bV,{variant:i,children:M?l.jsx(kV,{className:"Undefined"}):w()}),l.jsx("span",{className:"Label",children:c})]})})}export{N as A,eV as B,EV as C,P as G,wc as H,cc as I,PV as L,AV as M,TV as N,$V as P,FV as R,Zc as S,WV as T,DV as a,Mc as b,hc as c,Nc as d,zV as e,xc as f,RV as g,IV as h};