"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[2452],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(r),d=i,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8817:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:85},a="RPM Measurement",l={unversionedId:"Tutorial-Setup/Rpm-Measurement",id:"Tutorial-Setup/Rpm-Measurement",title:"RPM Measurement",description:"In order to use the Governor or RPM filters (and why wouldn't you!!) you must measure the RPM. There are two options for this:",source:"@site/docs/Tutorial-Setup/Rpm-Measurement.md",sourceDirName:"Tutorial-Setup",slug:"/Tutorial-Setup/Rpm-Measurement",permalink:"/docs/Tutorial-Setup/Rpm-Measurement",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial-Setup/Rpm-Measurement.md",tags:[],version:"current",sidebarPosition:85,frontMatter:{sidebar_position:85},sidebar:"tutorialSidebar",previous:{title:"Motor and ESC",permalink:"/docs/Tutorial-Setup/Motor-and-Esc"},next:{title:"Governor",permalink:"/docs/Tutorial-Setup/Governor"}},s={},u=[{value:"Frequency Sensor",id:"frequency-sensor",level:2},{value:"Configuration",id:"configuration",level:3},{value:"The lines which configure the frequency signal",id:"the-lines-which-configure-the-frequency-signal",level:3},{value:"Bidirectional DSHOT",id:"bidirectional-dshot",level:2},{value:"Supported ESC Firmware",id:"supported-esc-firmware",level:3},{value:"BLHeli_32",id:"blheli_32",level:4},{value:"BLHeli_S",id:"blheli_s",level:4},{value:"1. Bluejay",id:"1-bluejay",level:5},{value:"2. BLheli_M",id:"2-blheli_m",level:5},{value:"3. JESC",id:"3-jesc",level:5},{value:"More information",id:"more-information",level:2}],c={toc:u},h="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(h,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rpm-measurement"},"RPM Measurement"),(0,i.kt)("p",null,"In order to use the Governor or RPM filters (and why wouldn't you!!) you must measure the RPM. There are two options for this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Frequency sensor"),(0,i.kt)("li",{parentName:"ol"},"Bidirectional DSHOT")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"RPM can sometimes also be read via ESC telemetry. However, this is at a refresh frequency that is generally too slow to be used for filtering of governing.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"RPM filtering is used to remove frequencies related to the rotating components. This allows a much higher tune; HOWEVER!! If the helicopter is flown in an OverSpeed condition the rotation of the one way bearing means that the RPM measurement will not be correct. If the helicopter is tuned too critically this could mean the helicopter could become out of tune resulting in unwanted oscillations.")),(0,i.kt)("h2",{id:"frequency-sensor"},"Frequency Sensor"),(0,i.kt)("p",null,"Typically it is used when the RPM is not available via ESC telemetry. Only BLHeli_32, some BLHeli_S and APD F3 ESCs support Dshot/KISS telemetry, so this feature is needed with a wide range of traditional ESCs."),(0,i.kt)("p",null,"The RPM signal is used in multiple places in the FC, e.g. in the PID control, the governor and the RPM-filter. If these features are not needed, then there is no need for the frequency sensor either."),(0,i.kt)("p",null,"An electrical frequency signal is provided by some ESCs, e.g. Hobbywing with the \"yellow\" wire. Or it can come from an RPM sensor, which is converting the motor three-phase voltages into a frequency signal - e.g. Hobbywing RPM sensor. Please refer to your ESC's or sensor's manuals how to connect them correctly."),(0,i.kt)("p",null,"Note about the Hobbywing RPM sensor: it's safest to power it with 3.3V, as the input voltage of the sensor is also the output voltage of the RPM signal it generates. All inputs on a STM32 MCU tolerate 3.3V, and some will also accept 5V. But if you're using a 8.4V BEC to power the sensor, you'll likely damage the MCU."),(0,i.kt)("p",null,"Up to two frequency sensors are supported, for acquiring motor #1 and motor #2 speed."),(0,i.kt)("p",null,"If both Frequency Sensor and telemetry RPM signals are available, the Frequency Sensor has precedence."),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"First, a pin must be configured for frequency sensor use. The pin ",(0,i.kt)("em",{parentName:"p"},"must")," be connected to a timer with exclusive access.\nIn other words, there must be a free timer, not used by anything else, and one of its positive channels must be available\non a pin that is connected to the FC's solder pads. Negative channels, like CH3N, can't be used as inputs. Once we know which timer and pin we can use, it can be configured for\nfrequency sensor use. This can be done via the ",(0,i.kt)("a",{parentName:"p",href:"./Remapping"},"Custom defaults remapping spreadsheet")," or by reading through the STM32 manual for your processor."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"We recommend that Freq inputs are allocated to pins that have Timer 2 or Timer 5 available. If 2 Freq inputs are required (e.g. Motorized tail) then both inputs can share the same timer. In the remapping spreadsheet these pins are indicated by the green box marked Freq.")),(0,i.kt)("p",null,"In this example, we have chosen to use the LED_STRIP pin as our frequency input. We see there is only one option (Timer1) on AF1. We can use this pin but must not allocate any of the Servos or Motors to Timer1. Only the motor pins share this timer so we can choose either AF2 (timer3) or AF3 (timer8)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"frequency_1",src:r(1713).Z,width:"1190",height:"1058"})),(0,i.kt)("h3",{id:"the-lines-which-configure-the-frequency-signal"},"The lines which configure the frequency signal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"resource LED_STRIP 1 NONE\nresource Freq  1 A09\ntimer A09 AF1 # Freq - pin A09: TIM1 CH2 (AF1)\ndma pin A09 0 # Freq - 0: DMA2 Stream 6 Channel 0\n")),(0,i.kt)("p",null,"Then the frequency sensor can be turned ON with the feature flag located on the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Configuration"))," tab."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"frequency_2",src:r(7375).Z,width:"773",height:"370"})),(0,i.kt)("h2",{id:"bidirectional-dshot"},"Bidirectional DSHOT"),(0,i.kt)("p",null,"Several features of Rotorflight require telemetry data for the motor speed such as the Govenor and RPM Filtering. One method for the FC to get this motor speed is via Bidirectional DSHOT. Bidirectional DSHOT is an ESC protocol which enables communications in both directions between the FC and the ESC. The speed command can be sent by the FC to the ESC and the ESC responds by sending the current motor eRPM (electrical RPM)."),(0,i.kt)("p",null,"From the ",(0,i.kt)("strong",{parentName:"p"},"Motors")," tab in Rotorflight Configurator select an DSHOT ESC protocol (DSHOT150-DSHOT600) and enable Bidirectional DSHOT. This requires ESC firmware that supports Bidirectional DSHOT."),(0,i.kt)("h3",{id:"supported-esc-firmware"},"Supported ESC Firmware"),(0,i.kt)("h4",{id:"blheli_32"},"BLHeli_32"),(0,i.kt)("p",null,"Bidirectional DSHOT is fully supported from firmware version 32.7.0 onward. ESCs with earlier firmware will have to be updated before speed telemetry will operate."),(0,i.kt)("h4",{id:"blheli_s"},"BLHeli_S"),(0,i.kt)("p",null,"BLHeli_S ESCs do not support Bidirectional DSHOT. In order to access this functionality with a BLheli_S ESC, alternative firmware must be flashed. There are currently 3 options for this."),(0,i.kt)("h5",{id:"1-bluejay"},"1. Bluejay"),(0,i.kt)("p",null,"Bluejay is an open source firmware for BLheli_S ESCs which supports Bidirectional DSHOT, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mathiasvr/bluejay"},"BlueJay"),". This firmware has been used successfully for several Rotorflight builds. Bluejay is capable of flashing individual settings to each ESC (tail and main) which is important when using an all in one (AIO) board. Bluejay v0.15 and later also supports disabling ",(0,i.kt)("em",{parentName:"p"},"damped light")," (regenerative breaking), a must if your helicopter doesn't have a one way bearing. For example, a K110 will yaw/spin rapidly on throttle hold if ",(0,i.kt)("em",{parentName:"p"},"damped light")," is enabled. See ",(0,i.kt)("a",{parentName:"p",href:"https://oscarliang.com/bluejay-blheli-s/"},"Flashing Bluejay")," for details."),(0,i.kt)("h5",{id:"2-blheli_m"},"2. BLheli_M"),(0,i.kt)("p",null,"BLheli_M is developed by JazzMaverick. It supports Bidirectional DSHOT, but you can't disable ",(0,i.kt)("em",{parentName:"p"},"damped light")," mode and it does not have the ability to download individual config to each ESC. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/JazzMaverick/BLHeli/tree/JazzMaverick-patch-1/BLHeli_S%20SiLabs"},"JazzMaverick on GitHub")),(0,i.kt)("h5",{id:"3-jesc"},"3. JESC"),(0,i.kt)("p",null,"Jesc is a paid firmware version for BLheli_S ESCs which supports Bidirectional DSHOT. ",(0,i.kt)("a",{parentName:"p",href:"https://jflight.net/index.php"},"JESC"),"."),(0,i.kt)("h2",{id:"more-information"},"More information"),(0,i.kt)("p",null,"More details on Bidirectional DSHOT and RPM filtering at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/betaflight/betaflight/wiki/Bidirectional-DSHOT-and-RPM-Filter"},"betaflight"),"."))}p.isMDXComponent=!0},1713:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/frequency_1-fee92965b2dc819dc007a9ddbbaa9177.png"},7375:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/frequency_2-783de77b6d70a8dcec93fcfbb5e4b3f9.png"}}]);