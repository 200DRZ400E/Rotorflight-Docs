"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[7977],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(i),p=r,m=h["".concat(s,".").concat(p)]||h[p]||d[p]||o;return i?n.createElement(m,a(a({ref:t},u),{},{components:i})):n.createElement(m,a({ref:t},u))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},4175:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(7462),r=(i(7294),i(3905));const o={sidebar_position:4},a="Using Stability Modes",l={unversionedId:"Tutorial-Walkthroughs/Using-StabilityModes",id:"Tutorial-Walkthroughs/Using-StabilityModes",title:"Using Stability Modes",description:"Purpose",source:"@site/docs/Tutorial-Walkthroughs/Using-StabilityModes.md",sourceDirName:"Tutorial-Walkthroughs",slug:"/Tutorial-Walkthroughs/Using-StabilityModes",permalink:"/docs/Tutorial-Walkthroughs/Using-StabilityModes",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial-Walkthroughs/Using-StabilityModes.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Tuning using Adjustments",permalink:"/docs/Tutorial-Walkthroughs/Tuning-using-Adjustments"}},s={},c=[{value:"Purpose",id:"purpose",level:2},{value:"Aim",id:"aim",level:2},{value:"Configure the Tx",id:"configure-the-tx",level:3},{value:"Configure flight controller",id:"configure-flight-controller",level:3},{value:"Calibrating stability modes",id:"calibrating-stability-modes",level:3},{value:"## Warning ## - do not use your transmitter trims!!",id:"-warning----do-not-use-your-transmitter-trims",level:4},{value:"Calibration using Lua Scripts",id:"calibration-using-lua-scripts",level:4}],u={toc:c},h="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(h,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-stability-modes"},"Using Stability Modes"),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"  6G modes provide self stabilization/leveling of the helicopter when the sticks are moved to the centre. This is the opposite to the standard Acro mode (used for aerobatics and 3D) which will not self level after sticks are centered and thus is inherently unstable. These modes are generally used for beginners or those wanting more of a drone feel to their helicopter. 6G modes do not provide position fixing as found with GPS systems so the heli will drift around in the wind.")),(0,r.kt)("h2",{id:"aim"},"Aim"),(0,r.kt)("p",null,"In this example we will configure a 3 position switch (SwC) to select between Stability modes. With the SwC fully down we will have ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Acro"))," mode, SwC in the centre will be ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Horizon"))," Mode and in the fully up position we will enable ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Angle"))," mode.    "),(0,r.kt)("h3",{id:"configure-the-tx"},"Configure the Tx"),(0,r.kt)("p",null,"We need to assign a spare channel to your 3 position switch (SwC) (can be any channel or switch). "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE")," This example shows the process for EdgeTx (same for OpenTX) but is really the same process for any transmitter."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1:")," Assign Ch8 to the SwC in the ",(0,r.kt)("strong",{parentName:"p"},"Mixers")," tab"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Stability Mode",src:i(4097).Z,width:"949",height:"450"})),(0,r.kt)("h3",{id:"configure-flight-controller"},"Configure flight controller"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2:")," looking at the channels in the ",(0,r.kt)("strong",{parentName:"p"},"receiver")," tab we can see that Aux3 is the eight channel. This matches our TX assignment from step 1.  Confirm the 3 position switch changes the value seen on Aux3,  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Stability Mode",src:i(4893).Z,width:"1138",height:"420"})," "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3:")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to the ",(0,r.kt)("strong",{parentName:"li"},"Modes")," tab. Disable hide unused modes if nothing is visible."),(0,r.kt)("li",{parentName:"ul"},"Chose the Horizon Mode. Enter AUX3 in the channel and adjust the range to cover the middle section of the control channel as shown in the picture below. "),(0,r.kt)("li",{parentName:"ul"},"Chose the Angle Mode. Enter Aux3 in the channel and adjust the range to cover the top section of the control range as shown in the pic below.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Stability Mode",src:i(4189).Z,width:"1122",height:"482"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4:")," Test and confirm the switch position enables and disables modes as required These values are added to the Profile so will result in (e.g. SwC down = No mode active = Acro, SwC middle = Horizon Mode, SwC up = Angle Mode).     "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Stability Mode",src:i(8879).Z,width:"1576",height:"636"})),(0,r.kt)("h3",{id:"calibrating-stability-modes"},"Calibrating stability modes"),(0,r.kt)("h4",{id:"-warning----do-not-use-your-transmitter-trims"},"## Warning ## - do not use your transmitter trims!!"),(0,r.kt)("p",null,"Your Roll, Pitch and Yaw should all be trimmed to 1500 at centre stick always "),(0,r.kt)("p",null,"Stability modes will try to stabilize to the calibrated flight controller level. This is rarely perfectly aligned with the actual helicopters attitude where there is no drift (least drift... there will always be some due to wind etc). In order to calibrate this in-flight we have 2 methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stick controls (needs more work)"),(0,r.kt)("li",{parentName:"ul"},'Using the "Rotorflight Lua Scripts](Lua-Scripts)" ## FIXME')),(0,r.kt)("p",null,"Note that it's also possible to adjust accelerometer trim values in the ",(0,r.kt)("em",{parentName:"p"},"Configuration")," tab of the Configurator, though it's not recommended to do this in-flight."),(0,r.kt)("h4",{id:"calibration-using-lua-scripts"},"Calibration using Lua Scripts"),(0,r.kt)("p",null,"Select ",(0,r.kt)("em",{parentName:"p"},"Accelerometer Trims")," from the Rotorflight main menu. Test fly the heli tail-in in either Angle or Horizon mode, with sticks at centre. If the heli drifts left, increase roll trim. If it drifts backwards, increase pitch trim. Each time you make a change to the trims long press the wheel/roller. The Page menu should now pop up. Select Save page. Adjust trims until the heli flies hands off without any pronounced drift in any direction.    "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Stability Mode",src:i(1861).Z,width:"1013",height:"272"})))}d.isMDXComponent=!0},4097:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Stability_1-ffa682b3fa035b7df24959c066740a6f.png"},4893:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Stability_2-036b7c5d0fb74b4a10c69db3c24dfe8f.png"},4189:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Stability_3-f307411be80469651e0a4a30d28dd02b.png"},8879:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Stability_4-b1a098cc439e2b317e1c96686ad2c1d8.png"},1861:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Stability_5-7481c6e6d5f19af31252f51f8cc8abac.png"}}]);