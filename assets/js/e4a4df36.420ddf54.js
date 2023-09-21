"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[8571],{3905:(e,t,A)=>{A.d(t,{Zo:()=>u,kt:()=>h});var r=A(7294);function n(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function a(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,r)}return A}function o(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?a(Object(A),!0).forEach((function(t){n(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):a(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function i(e,t){if(null==e)return{};var A,r,n=function(e,t){if(null==e)return{};var A,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)A=a[r],t.indexOf(A)>=0||(n[A]=e[A]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)A=a[r],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(n[A]=e[A])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),A=t;return e&&(A="function"==typeof e?e(t):o(o({},t),e)),A},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var A=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(A),p=n,h=c["".concat(l,".").concat(p)]||c[p]||d[p]||a;return A?r.createElement(h,o(o({ref:t},u),{},{components:A})):r.createElement(h,o({ref:t},u))}));function h(e,t){var A=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=A.length,o=new Array(a);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<a;s++)o[s]=A[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,A)}p.displayName="MDXCreateElement"},1197:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=A(7462),n=(A(7294),A(3905));const a={sidebar_position:40},o="Configuration",i={unversionedId:"Tutorial - Setup/Configuration",id:"Tutorial - Setup/Configuration",title:"Configuration",description:"System Configuration",source:"@site/docs/Tutorial - Setup/Configuration.md",sourceDirName:"Tutorial - Setup",slug:"/Tutorial - Setup/Configuration",permalink:"/docs/Tutorial - Setup/Configuration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tutorial - Setup/Configuration.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Remapping",permalink:"/docs/Tutorial - Setup/Remapping"},next:{title:"Receiver",permalink:"/docs/Tutorial - Setup/Receiver"}},l={},s=[{value:"System Configuration",id:"system-configuration",level:2},{value:"PID Loop Speed",id:"pid-loop-speed",level:3},{value:"Accelerometer",id:"accelerometer",level:3},{value:"Barometer",id:"barometer",level:3},{value:"Magnetometer",id:"magnetometer",level:3},{value:"Serial Ports",id:"serial-ports",level:2},{value:"Serial Rx",id:"serial-rx",level:3},{value:"GPS",id:"gps",level:3},{value:"ESC Telemetry",id:"esc-telemetry",level:3},{value:"Blackbox Logging",id:"blackbox-logging",level:3},{value:"Board and Sensor alignment",id:"board-and-sensor-alignment",level:2},{value:"Features",id:"features",level:2},{value:"Accelerometer Trim",id:"accelerometer-trim",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"configuration"},"Configuration"),(0,n.kt)("h2",{id:"system-configuration"},"System Configuration"),(0,n.kt)("h3",{id:"pid-loop-speed"},"PID Loop Speed"),(0,n.kt)("p",null,"This is the frequency that the control loop operates at. Set to between 1kHz and 2kHz. There is limited or no benifit in higher rates and will result in high loads for your flight controller. This could be an issue for F405 and F411 boards.  "),(0,n.kt)("h3",{id:"accelerometer"},"Accelerometer"),(0,n.kt)("p",null,"This must be selected if you wish to use stability (6G modes) such as Angle, Horizon or Rescue modes. "),(0,n.kt)("h3",{id:"barometer"},"Barometer"),(0,n.kt)("p",null,"This is used for Altitude hold Rescue which is currently still being developed"),(0,n.kt)("h3",{id:"magnetometer"},"Magnetometer"),(0,n.kt)("p",null,"Currently this does not provide any control functionality; however, can be used for telemetry. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Configuration Tab",src:A(642).Z,width:"806",height:"420"})),(0,n.kt)("h2",{id:"serial-ports"},"Serial Ports"),(0,n.kt)("p",null,"Please choose the functions you wish to assign to your UART. "),(0,n.kt)("h3",{id:"serial-rx"},"Serial Rx"),(0,n.kt)("p",null,"One of the first things you should do is connect a receiver to the FC. Your FC has several UARTs, and each UART has an RX and a TX. A receiver needs to be connected to an RX and/or TX pad, depending on the kind of receiver."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DSM2/DMSX/IBUS/TBS need to be connected to a free UART RX.  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SBUS also needs to be connected to an RX pad. However, it's an inverted signal, so set serialrx_inverted = ON if you have an F7 processor. If you're using an F4, use the SBUS pad and read this.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"FPort can be connected to a TX pad. It's also an inverted signal.  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ELRS needs an RX and a TX on the same UART.  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SBUS with SmartPort needs to be connected to a free UART RX and a TX of another free UART. Both signals are inverted.\nPlease see the documentation for your FC for more details on how to connect your receiver.  "))),(0,n.kt)("h3",{id:"gps"},"GPS"),(0,n.kt)("p",null,"GPS is not currently used for Rotorflight for any flight controls. This can be used for telemetry purposes."),(0,n.kt)("h3",{id:"esc-telemetry"},"ESC Telemetry"),(0,n.kt)("p",null,"Set a UART to ESC Telemetry if you wish to use the ",(0,n.kt)("a",{parentName:"p",href:"#features"},"ESC_Sensor Feature"),"."),(0,n.kt)("h3",{id:"blackbox-logging"},"Blackbox Logging"),(0,n.kt)("p",null,"This enables a UART for external logging to an OpenLarger."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"}," Link to go here "))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Configuration Tab",src:A(7300).Z,width:"1233",height:"347"})),(0,n.kt)("h2",{id:"board-and-sensor-alignment"},"Board and Sensor alignment"),(0,n.kt)("p",null,"Change the roll, pitch and yaw gyro alignment value until the model on the status page moves in the same direction as the gyro board."),(0,n.kt)("p",null,"A method of determining what settings to use: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"set Roll, Pitch and Yaw values to 0 degrees.  "),(0,n.kt)("li",{parentName:"ul"},"set Gyro alignment to CW-0 degrees.  "),(0,n.kt)("li",{parentName:"ul"},'Move the FC around until the movement of the FC matches the movement of the helicopter on the "Status" page. You may have to "reset Z axis".  '),(0,n.kt)("li",{parentName:"ul"},"Now take note of how you have to rotate/flip the board in order to get the FC oriented in the way you wish to mount it in the helicopter. An example would be that you have to rotate the board 180 and flip. You would chose 'CW180 Flip' in the Gyro alignment dropdown.    ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Configuration Tab",src:A(3097).Z,width:"801",height:"201"})),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This section is used to enable or disable features. Features such as the Serial Rx, GPS, ESC Telemetry must be selected in the ",(0,n.kt)("a",{parentName:"p",href:"#serial-ports"},"Serial ports")," section before selecting the Feature here. ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Configuration Tab",src:A(9989).Z,width:"801",height:"381"})),(0,n.kt)("h2",{id:"accelerometer-trim"},"Accelerometer Trim"),(0,n.kt)("p",null,"This section is used to trim the roll and pitch axis while the helicopter is in Stability mode (e.g Angle, horizon or Rescue). "),(0,n.kt)("p",null,"The Transmitter trims for each cyclic axis must be at neutral when using Rotorflight (at 1500us). This will usually result in the helicopter drifting while in a stable hover. To correct for this drift the Accelerometer roll and pitch trims are to be used. "),(0,n.kt)("p",null,"This can be done either directly by the configurator or via the transmitter with Lua or Adjustments ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"}," Links required"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Configuration Tab",src:A(4188).Z,width:"801",height:"141"})))}d.isMDXComponent=!0},642:(e,t,A)=>{A.d(t,{Z:()=>r});const r=A.p+"assets/images/config-1-541fca7a1831e8ce5a0fb598ad45bde5.png"},7300:(e,t,A)=>{A.d(t,{Z:()=>r});const r=A.p+"assets/images/config-2-91aaebab078ff1ab4b78cee18afdeb24.png"},3097:(e,t,A)=>{A.d(t,{Z:()=>r});const r=A.p+"assets/images/config-3-f70cf684fc279d6df2813b93f3fa0e53.png"},9989:(e,t,A)=>{A.d(t,{Z:()=>r});const r=A.p+"assets/images/config-4-bdcfc51073dfd31e2db19095cdac8c8f.png"},4188:(e,t,A)=>{A.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);