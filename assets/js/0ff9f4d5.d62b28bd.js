"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[4638],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?o.createElement(f,a(a({ref:t},p),{},{components:r})):o.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9052:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:1},a="Help - Frequent questions?",l={unversionedId:"Tutorial-Setup/Help-Common-Questions",id:"Tutorial-Setup/Help-Common-Questions",title:"Help - Frequent questions?",description:"A list of common config issues and the solutions?",source:"@site/docs/Tutorial-Setup/Help-Common-Questions.md",sourceDirName:"Tutorial-Setup",slug:"/Tutorial-Setup/Help-Common-Questions",permalink:"/docs/Tutorial-Setup/Help-Common-Questions",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial-Setup/Help-Common-Questions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Converting from RF1 to RF2",permalink:"/docs/Tutorial-Quickstart/Converting-from-RF1-to-RF2"},next:{title:"Backup and restore",permalink:"/docs/Tutorial-Setup/Backup-and-restore"}},s={},u=[{value:"Motor won&#39;t start",id:"motor-wont-start",level:2},{value:"Telemetry",id:"telemetry",level:2},{value:"servo don&#39;t respond",id:"servo-dont-respond",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"help---frequent-questions"},"Help - Frequent questions?"),(0,n.kt)("p",null,"A list of common config issues and the solutions?"),(0,n.kt)("h2",{id:"motor-wont-start"},"Motor won't start"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Is ARM mode configured? ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Please check your Arm Mode has been enabled. See details in the ",(0,n.kt)("a",{parentName:"li",href:"./Modes#arm"},"Modes")," "),(0,n.kt)("li",{parentName:"ul"},"Note!! Arm and Throttle hold need to be on different switches. The FC must see minimum throttle before Arm is enabled; therefore, if Arm activates at the same time as throttle hold is removed, it will fail the minimum check. "),(0,n.kt)("li",{parentName:"ul"},"Check status page for Arming disables  ")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Using a Governor?  ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Does the Motor spool in Governor 'passthrough'. If not this could indicate a pin or timer allocation issue. Also please check your Receiver is connected and has the correct channel order.  "),(0,n.kt)("li",{parentName:"ul"},"Does the Motor spool in Governor 'Mode 1'. Please confirm you have either Frequency input or Bi-directional Dshot enabled and functioning. Using the Motor override run the motor at minimum speed and confirm there an RPM signal present  "),(0,n.kt)("li",{parentName:"ul"},"Governor mode 'Mode 2'. If the motor is able to spool in the other modes but not Mode 2 it means the Battery Voltage is not available. Please update this in the Power tab. ")),(0,n.kt)("h2",{id:"telemetry"},"Telemetry"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"}),(0,n.kt)("li",{parentName:"ol"}),(0,n.kt)("li",{parentName:"ol"})),(0,n.kt)("h2",{id:"servo-dont-respond"},"servo don't respond"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Are servos visible in the servo Tab? ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Review the ",(0,n.kt)("a",{parentName:"li",href:"/docs/Tutorial-Setup/Remapping"},"remapping")," and add servos")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"From the servo override does the servo move?")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Confirm connection of the servos"),(0,n.kt)("li",{parentName:"ul"},"Confirm servos are powered"),(0,n.kt)("li",{parentName:"ul"},"Check all servos.")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Servo moves in override but not ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Confirm miser has been chosen from the ",(0,n.kt)("a",{parentName:"li",href:"/docs/Tutorial-Setup/Mixer"},"Mixer")," tab")))}c.isMDXComponent=!0}}]);