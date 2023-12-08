"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[2371],{3905:(e,t,a)=>{a.d(t,{Zo:()=>g,kt:()=>h});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=s(a),d=r,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||n;return a?o.createElement(h,i(i({ref:t},g),{},{components:a})):o.createElement(h,i({ref:t},g))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<n;s++)i[s]=a[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},48272:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var o=a(87462),r=(a(67294),a(3905));const n={sidebar_position:170},i="Blackbox logging",l={unversionedId:"Tutorial-Setup/Blackbox",id:"Tutorial-Setup/Blackbox",title:"Blackbox logging",description:"What is Blackbox",source:"@site/docs/Tutorial-Setup/Blackbox.md",sourceDirName:"Tutorial-Setup",slug:"/Tutorial-Setup/Blackbox",permalink:"/docs/Tutorial-Setup/Blackbox",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial-Setup/Blackbox.md",tags:[],version:"current",sidebarPosition:170,frontMatter:{sidebar_position:170},sidebar:"tutorialSidebar",previous:{title:"Beepers",permalink:"/docs/Tutorial-Setup/Beepers"},next:{title:"Failsafe",permalink:"/docs/Tutorial-Setup/Failsafe"}},c={},s=[{value:"What is Blackbox",id:"what-is-blackbox",level:2},{value:"what are the blackbox logging devices?",id:"what-are-the-blackbox-logging-devices",level:2},{value:"Blackbox data can be logged to:",id:"blackbox-data-can-be-logged-to",level:3},{value:"Connecting OpenLog or OpenLager",id:"connecting-openlog-or-openlager",level:2},{value:"OpenLog",id:"openlog",level:2},{value:"OpenLager",id:"openlager",level:2},{value:"Configure Blackbox Logging",id:"configure-blackbox-logging",level:2}],g={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blackbox-logging"},"Blackbox logging"),(0,r.kt)("h2",{id:"what-is-blackbox"},"What is Blackbox"),(0,r.kt)("p",null,"Blackbox is a flight data recording feature in Rotorflight. A Blackbox log contains a lot of data, such as the attitude of the heli, gyro sensor measurements, PID data,  RC commands, motor outputs etc. It\u2019s an extremely powerful tool for tuning and troubleshooting the heli."),(0,r.kt)("h2",{id:"what-are-the-blackbox-logging-devices"},"what are the blackbox logging devices?"),(0,r.kt)("h3",{id:"blackbox-data-can-be-logged-to"},"Blackbox data can be logged to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An SD card on the FC. This is probably the best way to log: it's fast and storage is only limited by the capacity of the SD card."),(0,r.kt)("li",{parentName:"ul"},"A flash chip on the FC. Logging is fast, but storage is limited and copying log files can be slow."),(0,r.kt)("li",{parentName:"ul"},"Or to an external logging device: OpenLog or OpenLager. Both devices use a micro SD card. OpenLog is slow, OpenLager is a lot faster.")),(0,r.kt)("p",null,"A flash chip or an SD card on the FC are nice, but if your FC doesn't have that you can connect an OpenLog or OpenLager logging device."),(0,r.kt)("h2",{id:"connecting-openlog-or-openlager"},"Connecting OpenLog or OpenLager"),(0,r.kt)("p",null,"OpenLog and OpenLager can be connected to the FC using just three wires: +5V, ground and a TX output pad from a free UART on the FC, which is connected to the RX pad of the logging device. As soon as you power the device on, it will create a new log file on the SD card. Then it'll log everything it receives to that file. Simple but effective. For maximum performance the SD card should be formatted with the ",(0,r.kt)("a",{parentName:"p",href:"https://www.sdcard.org/downloads/formatter"},"SD Association's special formatting tool"),". A fast SD card is needed, e.g. the Sandisk Extreme 16GB Class 10 UHS microSDHC."),(0,r.kt)("h2",{id:"openlog"},"OpenLog"),(0,r.kt)("p",null,"OpenLog is a ",(0,r.kt)("a",{parentName:"p",href:"https://www.sparkfun.com/products/13712"},"data logger developed by SparkFun"),". It can record up to 250kbps, but since it doesn't have a write buffer data can be lost. For better results the original SparkFun firmware should be replaced with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cleanflight/blackbox-firmware"},"Blackbox firmware"),". You need an FTDI cable/adapter to update the OpenLog board. There are also OpenLog clones for sale that are already equipped with Blackbox firmware. You can check your firmware by inspecting the Config.txt file on the SD card, a file that will be created if it doesn't already exist. If it just states the baud rate (e.g. a line with a number and then a line with the word baud), it's using the Blackbox firmware. The SparkFun firmware specifies more properties in Config.txt: baud, escape, esc#, mode, verb, echo, ignoreRX."),(0,r.kt)("h2",{id:"openlager"},"OpenLager"),(0,r.kt)("p",null,"OpenLager is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/d-ronin/openlager/wiki"},"Blackbox data logger developed by dRonin"),". It can log a lot faster (up to 2470kbps) and uses a write buffer. It's superior to OpenLog, and unless you're on a very tight budget there's no excuse not to use OpenLager."),(0,r.kt)("p",null,"Some versions use an open/lock hinge mechanism instead of a 'push to eject' SD card socket, so you can't wrap it in heat shrink tube. You can fix that by carefully flattening the SD card retainer pin a little bit."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"OpenLarger",src:a(7134).Z,width:"817",height:"767"})),(0,r.kt)("h2",{id:"configure-blackbox-logging"},"Configure Blackbox Logging"),(0,r.kt)("p",null,"After you've connected OpenLog/OpenLager, you should configure your helicopter for logging in Rotorflight Configurator."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure that your TX output pad has been assigned a resource with ",(0,r.kt)("inlineCode",{parentName:"li"},"resource SERIAL_TX")," (see ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/betaflight/unified-targets/tree/master/configs/default"},"Betaflight Unified Targets Repo"),")."),(0,r.kt)("li",{parentName:"ul"},"Specify which UART is connected to OpenLog/OpenLager. Go to the Serial Ports tab, then select ",(0,r.kt)("em",{parentName:"li"},"Blackbox logging")," under ",(0,r.kt)("em",{parentName:"li"},"Peripherals")," for the UART used for logging. For OpenLog, select a baudrate of 250kbps, for OpenLager select 2000kbps. Click ",(0,r.kt)("em",{parentName:"li"},"Save")," and ",(0,r.kt)("em",{parentName:"li"},"Reboot"),"."),(0,r.kt)("li",{parentName:"ul"},"Now you can assign a transmitter switch for logging under the Modes tab. Find the Blackbox mode and assign a range. You can choose a very broad range in order to log always. Click Save."),(0,r.kt)("li",{parentName:"ul"},"Configure what to log in the ",(0,r.kt)("em",{parentName:"li"},"Blackbox")," tab. Select ",(0,r.kt)("em",{parentName:"li"},"Serial Port")," as your ",(0,r.kt)("em",{parentName:"li"},"Blackbox logging device")," and a log rate of ",(0,r.kt)("em",{parentName:"li"},"500 Hz")," for OpenLog or ",(0,r.kt)("em",{parentName:"li"},"2 kHz")," for OpenLager. Under ",(0,r.kt)("em",{parentName:"li"},"Blackbox debug mode")," you can specify what should be logged. There are a lot of choices, but you can select ",(0,r.kt)("em",{parentName:"li"},"GYRO_SCALED")," for PID tuning, ",(0,r.kt)("em",{parentName:"li"},"GOVERNOR")," for analyzing the governor or ",(0,r.kt)("em",{parentName:"li"},"CYCLETIME")," if you're interested in CPU time. Click ",(0,r.kt)("em",{parentName:"li"},"Save")," and ",(0,r.kt)("em",{parentName:"li"},"Reboot"),"."),(0,r.kt)("li",{parentName:"ul"},"When logging mode is active and ",(0,r.kt)("inlineCode",{parentName:"li"},"blackbox_mode")," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"NORMAL"),", logging will start when you arm your helicopter. You can set ",(0,r.kt)("inlineCode",{parentName:"li"},"blackbox_mode")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"ALWAYS")," for testing purposes, but be aware that you won't see log files unless the FC is rebooted (using LUA or the Configurator).")),(0,r.kt)("p",null,"The log files can be read with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rotorflight/rotorflight-blackbox"},"Rotorflight Blackbox Explorer"),"."))}u.isMDXComponent=!0},7134:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/OpenLager-slide-in-fix-5452f2aa24f61563946181b7cbeb4437.png"}}]);