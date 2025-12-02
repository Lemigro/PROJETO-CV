import{r as a}from"./index.CVf8TyFT.js";var p={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=a,_=Symbol.for("react.element"),k=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,h=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function y(t,e,s){var r,o={},n=null,i=null;s!==void 0&&(n=""+s),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)v.call(e,r)&&!b.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:_,type:t,key:n,ref:i,props:o,_owner:h.current}}u.Fragment=k;u.jsx=y;u.jsxs=y;p.exports=u;var S=p.exports;/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var E={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),j=(t,e)=>{const s=a.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:c="",children:l,...f},m)=>a.createElement("svg",{ref:m,...E,width:o,height:o,stroke:r,strokeWidth:i?Number(n)*24/Number(o):n,className:["lucide",`lucide-${R(t)}`,c].join(" "),...f},[...e.map(([d,x])=>a.createElement(d,x)),...Array.isArray(l)?l:[l]]));return s.displayName=`${t}`,s};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=j("Sword",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}]]);export{g as S,j as c,S as j};
