"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[8209],{3905:(t,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>c});var A=o(67294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(t);e&&(A=A.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,A)}return o}function n(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,A,r=function(t,e){if(null==t)return{};var o,A,r={},a=Object.keys(t);for(A=0;A<a.length;A++)o=a[A],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(A=0;A<a.length;A++)o=a[A],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var l=A.createContext({}),s=function(t){var e=A.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):n(n({},e),t)),o},p=function(t){var e=s(t.components);return A.createElement(l.Provider,{value:e},t.children)},h="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return A.createElement(A.Fragment,{},e)}},m=A.forwardRef((function(t,e){var o=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),h=s(o),m=r,c=h["".concat(l,".").concat(m)]||h[m]||u[m]||a;return o?A.createElement(c,n(n({ref:e},p),{},{components:o})):A.createElement(c,n({ref:e},p))}));function c(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=o.length,n=new Array(a);n[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[h]="string"==typeof t?t:r,n[1]=i;for(var s=2;s<a;s++)n[s]=o[s];return A.createElement.apply(null,n)}return A.createElement.apply(null,o)}m.displayName="MDXCreateElement"},59356:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var A=o(87462),r=(o(67294),o(3905));const a={sidebar_position:100},n="Motor and ESC",i={unversionedId:"Tutorial-Setup/Motor-and-Esc",id:"Tutorial-Setup/Motor-and-Esc",title:"Motor and ESC",description:"The Motors tab is used to configure the ESC communications protocols ( Motor Control Protocol & Telemetry Protocol ) ,as well as to provide the ability to test motor operation. Depending on the selected ESC protocol and selected Rotorflight features, you might need to specify some other parameters as well.",source:"@site/docs/Tutorial-Setup/Motor-and-Esc.md",sourceDirName:"Tutorial-Setup",slug:"/Tutorial-Setup/Motor-and-Esc",permalink:"/docs/Tutorial-Setup/Motor-and-Esc",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial-Setup/Motor-and-Esc.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Power",permalink:"/docs/Tutorial-Setup/Power"},next:{title:"RPM Measurement",permalink:"/docs/Tutorial-Setup/Rpm-Measurement"}},l={},s=[{value:"PWM Protocol",id:"pwm-protocol",level:3},{value:"DSHOT Protocol",id:"dshot-protocol",level:3},{value:"Bidirectional DSHOT",id:"bidirectional-dshot",level:4},{value:"Gear Ratio Configuration",id:"gear-ratio-configuration",level:3},{value:"Motor Pole Count",id:"motor-pole-count",level:3},{value:"Motor Override",id:"motor-override",level:2}],p={toc:s},h="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(h,(0,A.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"motor-and-esc"},"Motor and ESC"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"Motors")," tab is used to configure the ESC communications protocols ",(0,r.kt)("strong",{parentName:"p"},"( Motor Control Protocol & Telemetry Protocol )")," ,as well as to provide the ability to test motor operation. Depending on the selected ESC protocol and selected Rotorflight features, you might need to specify some other parameters as well."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This section is about Rotorflight communicating with the ESC. The settings for your motor (such as timing, braking and motor update frequency) can only be set in your ESC, and not in Rotorflight.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Motor and ESC",src:o(13366).Z,width:"843",height:"204"})),(0,r.kt)("p",null,"Set the ESC protocol required for your ESC under ",(0,r.kt)("em",{parentName:"p"},"ESC/Motor protocol"),". Usually this would be ",(0,r.kt)("em",{parentName:"p"},"PWM")," or ",(0,r.kt)("em",{parentName:"p"},"DSHOT300"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Motor and ESC",src:o(4475).Z,width:"150",height:"168"})),(0,r.kt)("p",null,"Set the ESC ",(0,r.kt)("a",{parentName:"p",href:"/docs/Tutorial-Setup/ESC-Telemetry"},(0,r.kt)("em",{parentName:"a"},"Telemetry"))," protocol if your esc supports it."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Motor and ESC",src:o(87400).Z,width:"150",height:"168"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you want to use the Rotorflight ",(0,r.kt)("em",{parentName:"p"},"GOVERNOR")," or ",(0,r.kt)("em",{parentName:"p"},"RPM_FILTER")," features, the FC also needs to know the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Tutorial-Setup/Rpm-Measurement"},"RPM")," of the main rotor, and optionally the tail rotor. For this you have to exactly specify the ",(0,r.kt)("em",{parentName:"p"},"Motor pole count")," and the ",(0,r.kt)("em",{parentName:"p"},"Gear ratios"),". With this info, the FC can calculate the:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Main motor RPM = eRPM / (motor pole count / 2)"),(0,r.kt)("li",{parentName:"ul"},"Main rotor RPM = Main motor RPM * main motor pinion tooth count / main gear tooth count")),(0,r.kt)("p",{parentName:"admonition"},"If you don't use those features, you don't have to specify the gear ratios and motor pole counts.")),(0,r.kt)("h3",{id:"pwm-protocol"},"PWM Protocol"),(0,r.kt)("p",null,"Most RC helicopter ESCs manufacturers (e.g. Hobbywing, YGE, Scorpion ,or Castle) use ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Servo_control"},"PWM"),", an analog protocol."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Motor and ESC",src:o(18159).Z,width:"835",height:"395"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ESC Update Frequency:")," the PWM update frequency for your ESC. Usually between 50-400Hz."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Disarm Throttle PWM value:")," the value that is sent to the ESC when the craft is disarmed. It should stop the motors. Usually 1000\xb5s."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"0% Throttle PWM value:")," the value that is sent to the ESC when the craft is armed and at 0% throttle. Usually 1070\xb5s."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"100% Throttle PWM value:")," the value that is sent to the ESC when the craft is armed and at full throttle. Usually 2000\xb5s."),(0,r.kt)("h3",{id:"dshot-protocol"},"DSHOT Protocol"),(0,r.kt)("p",null,"Most drone ESCs support DSHOT, a digital protocol."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Motor and ESC",src:o(71027).Z,width:"837",height:"300"})),(0,r.kt)("p",null,"If you use DSHOT, use either DSHOT150 or DSHOT300. DSHOT600 is not recommended. Also make sure that the main motor isn't actively being braked by the ESC, especially if you don't have a ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/ahWzhT5Bn28"},"one way bearing")," on the main shaft."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BLHeli_32: set ",(0,r.kt)("em",{parentName:"li"},"Non Damped Mode")," to ",(0,r.kt)("em",{parentName:"li"},"On")," on the main motor ESC"),(0,r.kt)("li",{parentName:"ul"},"Bluejay: set ",(0,r.kt)("em",{parentName:"li"},"Maximum Breaking Strength")," to ",(0,r.kt)("em",{parentName:"li"},"0"))),(0,r.kt)("h4",{id:"bidirectional-dshot"},"Bidirectional DSHOT"),(0,r.kt)("p",null,"This switch is only visible when the ",(0,r.kt)("em",{parentName:"p"},"ESC/Motor protocol")," is DSHOTxxx. It enables motor eRPM telemetry on supported ESCs via ",(0,r.kt)("a",{parentName:"p",href:"/docs/Tutorial-Setup/Rpm-Measurement#bidirectional-dshot"},"bidirectional DSHOT")," and can be used to facilitate the ",(0,r.kt)("em",{parentName:"p"},"GOVERNOR")," and/or ",(0,r.kt)("em",{parentName:"p"},"RPM_FILTER")," features. If you use bidirectional DSHOT you don't have to use a frequency sensor for obtaining the eRPM of the motor(s)."),(0,r.kt)("h3",{id:"gear-ratio-configuration"},"Gear Ratio Configuration"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Motor and ESC",src:o(41772).Z,width:"831",height:"75"})),(0,r.kt)("p",null,"Enter the number of teeth for the main rotor gearing ","[Teeth on Pinion gear]","/","[Teeth on Main Gear]",". For a direct drive Main rotor this is just set to 1 / 1."),(0,r.kt)("p",null,"Enter the number of teeth for the Tail rotor gearing ","[Teeth on Tail gear]","/","[Teeth on Autorotation Gear]",". For a direct drive tail this is just set to 1 / 1."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If the gear tooth count is not know, you can use the gear ratio instead."),(0,r.kt)("p",{parentName:"admonition"},"For example if the main gear ratio is 11.8 then you set ",(0,r.kt)("em",{parentName:"p"},"[Teeth on Pinion gear =10]","/","[Teeth on Main Gear =118]"),"."),(0,r.kt)("p",{parentName:"admonition"},"Similarly if the tail gear ratio is 4.8 then you set ",(0,r.kt)("em",{parentName:"p"},"[Teeth on Tail gear =10]","/","[Teeth on Autorotation Gear =48]"),".")),(0,r.kt)("h3",{id:"motor-pole-count"},"Motor Pole Count"),(0,r.kt)("p",null,"Determine the number of magnetic poles for each motor. Count the number of magnets on the motors rotor. In the example below the magnets (circled) are fixed to the outer bell which in total has 14. This allows the flight controller to know how many electrical phase rotations are required to complete one physical motor revolution."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Motor and ESC",src:o(6691).Z,width:"818",height:"74"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Motor and ESC",src:o(81931).Z,width:"354",height:"402"})),(0,r.kt)("h2",{id:"motor-override"},"Motor Override"),(0,r.kt)("p",null,"Motor Override functionality is provided to test the operation of each motor directly. This functionality will make the motors spool up. Do this WITHOUT the main or tail rotors fitted!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Motor and ESC",src:o(58938).Z,width:"808",height:"757"})),(0,r.kt)("p",null,"Throttle - This is the command being sent from the flight controller to the ESC."),(0,r.kt)("p",null,"RPM - The measured RPM telemetry feedback. As the motor spins this should read a value related to the current speed."),(0,r.kt)("p",null,"Errors (only with DSHOT) - This shows the status of the RPM telemetry signal. This should be 0%."),(0,r.kt)("admonition",{title:"Slider",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you use the slider, make sure you release the mouse button. Nothing changes as long as you hold the mouse button down!")),(0,r.kt)("admonition",{title:"BLHeliSuite32",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The Test motors function in BLHeliSuite32 doesn't work when using Rotorflight. It will give an error like 'Initialization of Motor Test Mode failed! Please check current Unknown rev 4.3.0 support for this application function!'.")))}u.isMDXComponent=!0},58938:(t,e,o)=>{o.d(e,{Z:()=>A});const A=o.p+"assets/images/motor-6-6483942cee5421456499a8bd46feb37a.png"},71027:(t,e,o)=>{o.d(e,{Z:()=>A});const A=o.p+"assets/images/motor-dshot-04fe6bfd4e4fc71157899c6917619cf8.png"},41772:(t,e,o)=>{o.d(e,{Z:()=>A});const A="data:image/png;base64,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"},13366:(t,e,o)=>{o.d(e,{Z:()=>A});const A=o.p+"assets/images/motor-main-27d2cd369cb6181fbce245803d9a0cd0.png"},6691:(t,e,o)=>{o.d(e,{Z:()=>A});const A="data:image/png;base64,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"},81931:(t,e,o)=>{o.d(e,{Z:()=>A});const A=o.p+"assets/images/motor-pole-count-2-71efc3c67848e75efe564111e4e0ee1c.png"},4475:(t,e,o)=>{o.d(e,{Z:()=>A});const A="data:image/png;base64,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"},18159:(t,e,o)=>{o.d(e,{Z:()=>A});const A=o.p+"assets/images/motor-pwm-2d870129e543706d5ba99ebe1262effa.png"},87400:(t,e,o)=>{o.d(e,{Z:()=>A});const A="data:image/png;base64,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"}}]);