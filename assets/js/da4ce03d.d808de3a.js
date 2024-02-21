"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[6435],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=l,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(h,n(n({ref:t},c),{},{components:r})):a.createElement(h,n({ref:t},c))}));function h(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,n=new Array(o);n[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:l,n[1]=i;for(var s=2;s<o;s++)n[s]=r[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},60586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(87462),l=(r(67294),r(3905));const o={sidebar_position:90},n="Power",i={unversionedId:"Tutorial-Setup/Power",id:"Tutorial-Setup/Power",title:"Power",description:"Set up all your power and battery related settings. Set the voltage and current sensor sources and calibration so that the FC can read the values and warn you accordingly. You can also check the current power measurements.",source:"@site/docs/Tutorial-Setup/Power.md",sourceDirName:"Tutorial-Setup",slug:"/Tutorial-Setup/Power",permalink:"/docs/Tutorial-Setup/Power",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial-Setup/Power.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"Failsafe",permalink:"/docs/Tutorial-Setup/Failsafe"},next:{title:"Motor and ESC",permalink:"/docs/Tutorial-Setup/Motor-and-Esc"}},u={},s=[{value:"Power State",id:"power-state",level:2},{value:"Battery",id:"battery",level:2},{value:"Battery Voltage Source",id:"battery-voltage-source",level:3},{value:"Battery Current Source",id:"battery-current-source",level:3},{value:"Min/Max/Warning Cell Voltage",id:"minmaxwarning-cell-voltage",level:3},{value:"Capacity",id:"capacity",level:3},{value:"Voltage Meters",id:"voltage-meters",level:2},{value:"Battery",id:"battery-1",level:3},{value:"BEC",id:"bec",level:3},{value:"5V",id:"5v",level:3},{value:"EXT",id:"ext",level:3},{value:"MCU",id:"mcu",level:3},{value:"Scale",id:"scale",level:4},{value:"Divider / Multiplier Value",id:"divider--multiplier-value",level:4},{value:"Example:",id:"example",level:5}],c={toc:s},d="wrapper";function p(e){let{components:t,...o}=e;return(0,l.kt)(d,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"power"},"Power"),(0,l.kt)("p",null,"Set up all your power and battery related settings. Set the voltage and current sensor sources and calibration so that the FC can read the values and warn you accordingly. You can also check the current power measurements."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Power",src:r(51441).Z,width:"870",height:"694"})),(0,l.kt)("h2",{id:"power-state"},"Power State"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Connected - Yes/No, if Yes, also shows cell count"),(0,l.kt)("li",{parentName:"ul"},"Voltage - Voltage of the battery"),(0,l.kt)("li",{parentName:"ul"},"Current - Current draw"),(0,l.kt)("li",{parentName:"ul"},"mAh Used - Capacity used in mAh"),(0,l.kt)("li",{parentName:"ul"},"Charge Level - Battery charge percentage")),(0,l.kt)("h2",{id:"battery"},"Battery"),(0,l.kt)("h3",{id:"battery-voltage-source"},"Battery Voltage Source"),(0,l.kt)("p",null,"Select the source for the voltage measurements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"None - No voltage measurements will be available"),(0,l.kt)("li",{parentName:"ul"},"Battery ADC - Use the ADC on the flight controller to get the voltage measurements"),(0,l.kt)("li",{parentName:"ul"},"ESC Telemetry - Use the ESC telemetry to get the voltage measurements")),(0,l.kt)("h3",{id:"battery-current-source"},"Battery Current Source"),(0,l.kt)("p",null,"Select the source for the current measurements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"None - No current measurements will be available"),(0,l.kt)("li",{parentName:"ul"},"Battery ADC - Use the ADC on the flight controller to get the current measurements"),(0,l.kt)("li",{parentName:"ul"},"ESC Sensor - Use the ESC telemetry to get the current measurements")),(0,l.kt)("h3",{id:"minmaxwarning-cell-voltage"},"Min/Max/Warning Cell Voltage"),(0,l.kt)("p",null,"Minimum Cell Voltage - The voltage that is considered critically low, and will trigger the corresponding warnings\nMaximum Cell Voltage - The voltage of a fully charged Cell\nWarning Cell Voltage - The voltage that is considered low, and will trigger the corresponding warnings"),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"The warning voltage should be set to a value where you can still land safely, usually 3.6-3.5V.\nThe minimum voltage should be set to a value where damage is imminent, usually 3.3V."),(0,l.kt)("p",{parentName:"admonition"},"If you fly a battery to less than 3.3V, it will start to be damaged and will not be able to hold a charge anymore, and can even be dangerous.")),(0,l.kt)("h3",{id:"capacity"},"Capacity"),(0,l.kt)("p",null,"The capacity of the battery in mAh. This is used to calculate the remaining battery capacity in percent."),(0,l.kt)("h2",{id:"voltage-meters"},"Voltage Meters"),(0,l.kt)("p",null,"Settings for the voltage meter to measure the battery voltage correctly."),(0,l.kt)("h3",{id:"battery-1"},"Battery"),(0,l.kt)("p",null,"Main Pack voltage."),(0,l.kt)("h3",{id:"bec"},"BEC"),(0,l.kt)("p",null,"Servo Bus voltage."),(0,l.kt)("h3",{id:"5v"},"5V"),(0,l.kt)("p",null,"VBus voltage."),(0,l.kt)("h3",{id:"ext"},"EXT"),(0,l.kt)("p",null,"External voltage input voltage."),(0,l.kt)("h3",{id:"mcu"},"MCU"),(0,l.kt)("p",null,"MCU voltage."),(0,l.kt)("h4",{id:"scale"},"Scale"),(0,l.kt)("p",null,"The scale of the voltage meter. This is used to calculate the correct voltage from the ADC value. If the battery voltage is not displayed correctly, you can adjust this value up/down to fix it"),(0,l.kt)("h4",{id:"divider--multiplier-value"},"Divider / Multiplier Value"),(0,l.kt)("p",null,"This defines how the value read by the ICs ADC converts into a voltage value that makes sense to the pilot. In easy terms this sets how the ratio difference between the two voltage divider resistors are used in the voltage calculation formula."),(0,l.kt)("h5",{id:"example"},"Example:"),(0,l.kt)("p",null,'Scale: 110 = 10:1 voltage divider (10k:1k ohm resistors)\nDivider: 10 = sets the direct resistor to resistor ratio\nMultiplier: 1 = this is to fine tune the outcome of the calculation, a value of 1 is "no correction".'))}p.isMDXComponent=!0},51441:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/power-main-bfa17f31b2435dca5d9b8d8ffef13ae5.png"}}]);