import{R as r}from"./index-76fb7be0.js";import{d as T,t as S}from"./styled-components.browser.esm-bf785d72.js";import{c as p,f as R,a as b,b as v,r as _,l as y,s as O}from"./index-7383ee4a.js";import"./_commonjsHelpers-de833af9.js";const{useParameter:P,addons:G,useEffect:Q,useMemo:H}=__STORYBOOK_MODULE_PREVIEW_API__;var I=Object.defineProperty,M=(t,e)=>{for(var a in e)I(t,a,{get:e[a],enumerable:!0})},k={};M(k,{initializeThemeState:()=>f,pluckThemeFromContext:()=>u,useThemeParameters:()=>h});var x="@storybook/addon-styling",$=`${x}/theme-switcher`,j="theming",z="theme",C={},D={REGISTER_THEMES:`${$}/REGISTER_THEMES`};function u({globals:t}){return t[z]||""}function h(){return P(j,C)}function f(t,e){G.getChannel().emit(D.REGISTER_THEMES,{defaultTheme:e,themes:t})}var w=([t,e])=>e,A=({Provider:t,GlobalStyles:e,defaultTheme:a,themes:o={}})=>{let s=Object.keys(o),n=a||s[0];return f(s,n),(l,E)=>{let{themeOverride:m}=h(),i=u(E),d=H(()=>{let g=m||i||n,c=Object.entries(o);return c.length===1?w(c[0]):o[g]},[o,i,m]);return t?r.createElement(t,{theme:d},e&&r.createElement(e,null),l()):r.createElement(r.Fragment,null,e&&r.createElement(e,null),l())}};const F=T`
  /* Your global styles go here */
`,W={colors:p,fontSizes:R,fontWeight:b,fonts:v,radii:_,lineHeight:y,space:O},U={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}},V=[A({themes:{default:W},defaultTheme:"default",Provider:S,GlobalStyles:F})];export{V as decorators,U as default};
