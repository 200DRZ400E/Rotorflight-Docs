"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[2982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),g=u(n),c=o,d=g["".concat(s,".").concat(c)]||g[c]||p[c]||a;return n?r.createElement(d,i(i({ref:t},h),{},{components:n})):r.createElement(d,i({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:45},i="Tune the Governor",l={unversionedId:"Tuning/Tune-Governor",id:"Tuning/Tune-Governor",title:"Tune the Governor",description:"If using the governor you must first enable the RPM Measurement and configure the Governor",source:"@site/docs/Tuning/Tune-Governor.md",sourceDirName:"Tuning",slug:"/Tuning/Tune-Governor",permalink:"/docs/Tuning/Tune-Governor",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tuning/Tune-Governor.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{sidebar_position:45},sidebar:"tuningSidebar",previous:{title:"Tune the Tail",permalink:"/docs/Tuning/Tune-the-Tail"},next:{title:"Tune Feedforward",permalink:"/docs/Tuning/Tune-Feedforward"}},s={},u=[{value:"Preparation",id:"preparation",level:2},{value:"Tuning steps",id:"tuning-steps",level:2},{value:"1. Tune the F-gain",id:"1-tune-the-f-gain",level:3},{value:"2. Tune I-gain",id:"2-tune-i-gain",level:3},{value:"3. Tune P-gain",id:"3-tune-p-gain",level:3},{value:"4. Tune D-gain",id:"4-tune-d-gain",level:3},{value:"The result",id:"the-result",level:2}],h={toc:u},g="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(g,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tune-the-governor"},"Tune the Governor"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If using the governor you must first enable the ",(0,o.kt)("a",{parentName:"p",href:"/docs/Tutorial-Setup/Rpm-Measurement"},"RPM Measurement")," and configure the ",(0,o.kt)("a",{parentName:"p",href:"/docs/Tutorial-Setup/Governor"},"Governor")," ")),(0,o.kt)("p",null,"Our goal here is to have a more or less constant headspeed, without any motor oscillations. Ideally the feedforward term should do most of the work, while the P-term is only used for quick corrections. The I-term should maintain the headspeed over time. "),(0,o.kt)("p",null,"But beware: a well tuned governor might generate too much torque for the tail to counteract. If that's the case, you might want to decrease torque by detuning the governor a bit, or reducing the collective range, for example. Alternatively you could try to increase tail authority by using different (bigger) tail rotor blades, or a higher tail rotor speed, for example."),(0,o.kt)("h2",{id:"preparation"},"Preparation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you're using TTA, disable it by setting ",(0,o.kt)("em",{parentName:"li"},"TTA gain")," to 0 on the ",(0,o.kt)("em",{parentName:"li"},"Profiles")," tab. You can enable it again once you're done tuning the governor."),(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("em",{parentName:"li"},"Blackbox debug mode")," to ",(0,o.kt)("em",{parentName:"li"},"Governor")," and ",(0,o.kt)("em",{parentName:"li"},"Blackbox logging rate")," to ",(0,o.kt)("em",{parentName:"li"},"1kHz")," on the ",(0,o.kt)("em",{parentName:"li"},"Blackbox")," tab."),(0,o.kt)("li",{parentName:"ul"},"Start with governor ",(0,o.kt)("em",{parentName:"li"},"P-gain")," and ",(0,o.kt)("em",{parentName:"li"},"I-gain")," really low, e.g. 10 for P and 20 for I. Spool up might now take a bit longer.")),(0,o.kt)("h2",{id:"tuning-steps"},"Tuning steps"),(0,o.kt)("p",null,"When you're using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/Tutorial-Setup/LUA-Scripts"},"Rotorflight Lua scripts"),", you can change all gain values on the field. My routine is to make logs of 3 or 4 different values around the default value for one specific gain. Example: the governor F-gain has a default value of 15, so try 10, 15, 20 and 25. Start with 10, do some pitch pumps (give it full collective for a short period of time) and disarm. Change the value to 15 and save, arm, do some pitch pumps, and so on. The result will be one log file with 4 partial logs, which you can select with the dropdown in the upper-right corner of the Blackbox Explorer. Then look in the Blackbox Explorer to see what gain value works best. If you think you might need higher or lower values for a specific gain, make a new log with adjusted values."),(0,o.kt)("p",null,"Try increments of 10 for the F-gain, increments of 25 for the I-gain and increments of 10 for the P-gain."),(0,o.kt)("h3",{id:"1-tune-the-f-gain"},"1. Tune the F-gain"),(0,o.kt)("p",null,"The F-gain determines the feedforward term, together with cyclic and collective precompensation. As stated, the better the F-gain is tuned, the less the PID-loop has to correct. Here's an example where the F-gain is too low, since the headspeed drops quite a bit when doing pitch pumps."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"f-gain too low",src:n(9959).Z,width:"1076",height:"560"})),(0,o.kt)("p",null,"If the F-gain is too high, the headspeed will be temporarily too high."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"f-gain too high",src:n(9538).Z,width:"1075",height:"561"})),(0,o.kt)("h3",{id:"2-tune-i-gain"},"2. Tune I-gain"),(0,o.kt)("p",null,"After you have found and set the best value for F-gain you can increase the I-gain until it starts playing up, then reduce it with 1/3. Here you can see an I-gain value which is too high, since there are some slow oscillations during and/or after the pitch pump."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"i-gain too high",src:n(7006).Z,width:"1074",height:"559"})),(0,o.kt)("h3",{id:"3-tune-p-gain"},"3. Tune P-gain"),(0,o.kt)("p",null,"After setting the optimal value for I-gain start increasing the P-gain till there are slight oscillations, then reduce it with 1/3. Here is an example of a P-gain that is clearly too high and introduces fast oscillations."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"p-gain too high",src:n(1369).Z,width:"1075",height:"564"})),(0,o.kt)("h3",{id:"4-tune-d-gain"},"4. Tune D-gain"),(0,o.kt)("p",null,"Unless you're flying a 500+ heli you probably won't need D, since there's hardly any momentum in the rotor."),(0,o.kt)("h2",{id:"the-result"},"The result"),(0,o.kt)("p",null,"This is the result of tuning a Scorpion HKII-2208 3600KV motor in a Gaui X2."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Result",src:n(4124).Z,width:"1079",height:"562"})),(0,o.kt)("p",null,"And these are the gain values found for this heli:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Result",src:n(9622).Z,width:"532",height:"282"})))}p.isMDXComponent=!0},9538:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gov-f-gain-too-high-06f6413f243a7d7f13c67ff8b0eda391.png"},9959:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gov-f-gain-too-low-eedc6cacd93d560fce9ad34e288c874f.png"},7006:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gov-i-gain-too-high-48ddc97721353f494a76ec48653f61e0.png"},1369:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gov-p-gain-too-high-6d366d1c9ad63068b6a5f2000dba6d33.png"},4124:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gov-result-graph-c9effeac87d21537524157a41006b285.png"},9622:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gov-result-b9be2510b8dea1fb9b81139139aa3c9c.png"}}]);