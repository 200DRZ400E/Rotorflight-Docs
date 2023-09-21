"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[4611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:50},i=void 0,l={unversionedId:"Tutorial - Setup/Receiver",id:"Tutorial - Setup/Receiver",title:"Receiver",description:"One of the first things you should do is connect a receiver to the FC. Your FC has several UARTs, and each UART has an RX and a TX. A receiver needs to be connected to an RX and/or TX pad, depending on the kind of receiver.",source:"@site/docs/Tutorial - Setup/Receiver.md",sourceDirName:"Tutorial - Setup",slug:"/Tutorial - Setup/Receiver",permalink:"/docs/Tutorial - Setup/Receiver",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tutorial - Setup/Receiver.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/Tutorial - Setup/Configuration"},next:{title:"Servos",permalink:"/docs/Tutorial - Setup/Servos"}},s={},c=[{value:"Configure your receiver",id:"configure-your-receiver",level:2},{value:"Deadband",id:"deadband",level:3},{value:"OpenTX / EdgeTX",id:"opentx--edgetx",level:3},{value:"But... my transmitter can&#39;t set endpoints!",id:"but-my-transmitter-cant-set-endpoints",level:3},{value:"I&#39;m only using RX2 for my receiver. Can I use TX2 for something else?",id:"im-only-using-rx2-for-my-receiver-can-i-use-tx2-for-something-else",level:3},{value:"Calibrating Stability Mode",id:"calibrating-stability-mode",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"One of the first things you should do is connect a receiver to the FC. Your FC has several UARTs, and each UART has an RX and a TX. A receiver needs to be connected to an RX and/or TX pad, depending on the kind of receiver."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DSM2/DMSX/IBUS/TBS need to be connected to a free UART RX. "),(0,a.kt)("li",{parentName:"ul"},"SBUS also needs to be connected to an RX pad. However, it's an inverted signal, so ",(0,a.kt)("inlineCode",{parentName:"li"},"set serialrx_inverted = ON")," if you have an F7 processor. If you're using an F4, use the SBUS pad and read ","[this]","fix link (F4-and-Inverted-Signals)."),(0,a.kt)("li",{parentName:"ul"},"FPort can be connected to a TX pad. It's also an inverted signal."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.expresslrs.org/2.0/quick-start/receivers/wiring-up/"},"ELRS")," needs an RX and a TX on the same UART. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://oscarliang.com/sbus-smartport-telemetry-naze32/"},"SBUS with SmartPort")," needs to be connected to a free UART RX and a TX of ",(0,a.kt)("em",{parentName:"li"},"another free UART"),". Both signals are inverted.")),(0,a.kt)("p",null,"Please see the documentation for your FC for more details on how to connect your receiver. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Receiver Tab",src:n(4940).Z,width:"1025",height:"576"})),(0,a.kt)("h2",{id:"configure-your-receiver"},"Configure your receiver"),(0,a.kt)("p",null,"Connect the FC to your computer and go to the ",(0,a.kt)("em",{parentName:"p"},"Receiver")," tab in Rotorflight Configurator to configure your receiver."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check ",(0,a.kt)("em",{parentName:"li"},"Channel Map")," and make sure the ",(0,a.kt)("em",{parentName:"li"},"Receiver Channels")," respond as expected."),(0,a.kt)("li",{parentName:"ul"},"Revert channels on your transmitter if a channel responds the wrong way around. "),(0,a.kt)("li",{parentName:"ul"},"Make sure that centre stick is at 1500\xb5s. You might need to recalibrate your transmitter now and then."),(0,a.kt)("li",{parentName:"ul"},"Set channel endpoints to 1000\xb5s and 2000\xb5s."),(0,a.kt)("li",{parentName:"ul"},"Do not use trim for Roll, Pitch or Yaw on your transmitter. "),(0,a.kt)("li",{parentName:"ul"},"You can use trim for Collective to adjust zero collective pitch.")),(0,a.kt)("p",null,"You should end up with something like this:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"Receiver tab",src:n(4904).Z,width:"520",height:"131"})),(0,a.kt)("h3",{id:"deadband"},"Deadband"),(0,a.kt)("p",null,"Set ",(0,a.kt)("em",{parentName:"p"},"RC deadband")," and ",(0,a.kt)("em",{parentName:"p"},"Yaw deadband")," to the smallest possible value that doesn't make your model drift in the preview window."),(0,a.kt)("h3",{id:"opentx--edgetx"},"OpenTX / EdgeTX"),(0,a.kt)("p",null,"The channel mid- and endpoints can be set on the ",(0,a.kt)("em",{parentName:"p"},"Output")," page of your model. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("em",{parentName:"li"},"Min")," so that full left/down stick indicates 1000\xb5s (e.g. -97.8)."),(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("em",{parentName:"li"},"Max")," so that full right/up shows 2000\xb5s."),(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("em",{parentName:"li"},"PPM Center")," to 1500.")),(0,a.kt)("h3",{id:"but-my-transmitter-cant-set-endpoints"},"But... my transmitter can't set endpoints!"),(0,a.kt)("p",null,"Some old transmitters can't adjust endpoints. In that case you could use the ",(0,a.kt)("inlineCode",{parentName:"p"},"rxrange")," CLI command to scale the output of your transmitter to 1000-2000\xb5s. ",(0,a.kt)("a",{parentName:"p",href:"https://oscarliang.com/adjust-tx-channel-mid-end-point/"},"Oscar")," can show you how."),(0,a.kt)("h3",{id:"im-only-using-rx2-for-my-receiver-can-i-use-tx2-for-something-else"},"I'm only using RX2 for my receiver. Can I use TX2 for something else?"),(0,a.kt)("p",null,"No. You can't connect two different devices to the same UART. So you can't connect an SBUS receiver to RX2 and OpenLager to TX2, for example."),(0,a.kt)("h3",{id:"calibrating-stability-mode"},"Calibrating Stability Mode"),(0,a.kt)("p",null,"The stability modes (Angle, Horizon or Rescue) can be calibrated so that the heli doesn't drift much when using such a mode. This can only be done via the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rotorflight/rotorflight/wiki/Using-stability-modes/_edit#calibrating-stability-modes"},"accelerometer trims"),". Do not use trim on your transmitter."))}p.isMDXComponent=!0},4940:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/reciever-1-c1e7f075cfe8d4106736dc6e26bada57.png"},4904:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tx-output-calibrated-24f660212880e31d7b3fcc7f09a49801.gif"}}]);