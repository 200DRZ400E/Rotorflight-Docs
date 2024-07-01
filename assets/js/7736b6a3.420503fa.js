"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[9722],{78091:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var i=r(74848),s=r(28453);const t={sidebar_position:30},o="Flydragon V2.2",a={id:"Controllers/flydragon2.2",title:"Flydragon V2.2",description:"Flydragon v2.2",source:"@site/docs/Controllers/flydragon2.2.md",sourceDirName:"Controllers",slug:"/Controllers/flydragon2.2",permalink:"/docs/Controllers/flydragon2.2",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Controllers/flydragon2.2.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"ControllerSidebar",previous:{title:"Radiomaster NEXUS",permalink:"/docs/Controllers/rm-nexus"},next:{title:"Flywing Heli405",permalink:"/docs/Controllers/flywingf405heli"}},l={},d=[{value:"Hardware Specifications\uff1a",id:"hardware-specifications",level:3},{value:"Receiver specifications:",id:"receiver-specifications",level:3},{value:"Rotorflight Target",id:"rotorflight-target",level:3},{value:"Motorised Tail",id:"motorised-tail",level:3},{value:"Wiring",id:"wiring",level:3},{value:"UART ports",id:"uart-ports",level:3},{value:"Can I use a receiver other than ELRS?",id:"can-i-use-a-receiver-other-than-elrs",level:3},{value:"How to Enable/Disable the Internal Receiver:",id:"how-to-enabledisable-the-internal-receiver",level:4},{value:"Manuals",id:"manuals",level:3}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"flydragon-v22",children:"Flydragon V2.2"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Flydragon v2.2",src:r(3421).A+"",width:"947",height:"493"})}),"\n",(0,i.jsxs)(n.admonition,{title:"Specifications",type:"info",children:[(0,i.jsx)(n.h3,{id:"hardware-specifications",children:"Hardware Specifications\uff1a"}),(0,i.jsxs)(n.p,{children:["MCU: STM32F722RET6",(0,i.jsx)(n.br,{}),"\n","IMU: BMI270",(0,i.jsx)(n.br,{}),"\n","Black Box: W25N01G (128MB)",(0,i.jsx)(n.br,{}),"\n","Baro: SPL06 (I2C2\uff09\nLED: WS2812",(0,i.jsx)(n.br,{}),"\n","Beeper: 5V Active Buzzer",(0,i.jsx)(n.br,{}),"\n","USB: Type-C",(0,i.jsx)(n.br,{}),"\n","UARTS: UART2\uff0cUART3\uff0cUART5",(0,i.jsx)(n.br,{}),"\n","I2C: I2C1",(0,i.jsx)(n.br,{}),"\n","ADC: ADC1 (12S)",(0,i.jsx)(n.br,{}),"\n","Servo Pins: CH1-CH4",(0,i.jsx)(n.br,{}),"\n","RPM Inputs: RPM_E (ESC RPM Wire)\uff0cRPM_S (External RPM Sensor)",(0,i.jsx)(n.br,{}),"\n","Internal Receiver: ELRS Diversity Receiver 2.4G (UART1)",(0,i.jsx)(n.br,{}),"\n","External Receiver: CRSF, S.BUS, F.PORT, GHOST, SUMD, SUMH, IBUS, XBUS, XBUS/RJ01, EXBUS, PPM, MSP, DSM (Needs 3.3V step\ndown BEC module)",(0,i.jsx)(n.br,{}),"\n","BEC Voltage: 5-15V",(0,i.jsx)(n.br,{}),"\n","5V Power Output: 5V-1.5A",(0,i.jsx)(n.br,{}),"\n","Dimensions: 45mm x 27mm x 14.5mm",(0,i.jsx)(n.br,{}),"\n","Weight: 27g"]}),(0,i.jsx)(n.h3,{id:"receiver-specifications",children:"Receiver specifications:"}),(0,i.jsxs)(n.p,{children:["MCU\uff1aESP8285",(0,i.jsx)(n.br,{}),"\n","RF\uff1aSX1280",(0,i.jsx)(n.br,{}),"\n","LAN/PA\uff1aSE2431L",(0,i.jsx)(n.br,{}),"\n","Active crystal oscillator\uff1aTCXO 52MHz",(0,i.jsx)(n.br,{}),"\n","Antenna\uff1a2 sticks ipex1 200mm 2.4GHz",(0,i.jsx)(n.br,{}),"\n","RF frequency\uff1a2.4GHz (2400-2480GHz)",(0,i.jsx)(n.br,{}),"\n","Transmit power\uff1a100mW (MAX)",(0,i.jsx)(n.br,{}),"\n","Maximum accepted refresh rate\uff1a500HZ/F1000HZ",(0,i.jsx)(n.br,{}),"\n","Firmware version\uff1av3.3.2",(0,i.jsx)(n.br,{}),"\n","Firmware target\uff1aFlyDragonRC 2.4 GHz / FD R24D 2.4GHz RX"]})]}),"\n",(0,i.jsx)(n.h3,{id:"rotorflight-target",children:"Rotorflight Target"}),"\n",(0,i.jsx)(n.p,{children:"When updating Rotorflight firmware. Please use the FLYDRAGONF722_V2_2 target."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Flydragon V2.2 Target",src:r(40394).A+"",width:"657",height:"162"})}),"\n",(0,i.jsx)(n.h3,{id:"motorised-tail",children:"Motorised Tail"}),"\n",(0,i.jsx)(n.p,{children:"To use the Flydragon with a motorised tail the Servo 4 needs to be remapped to Motor 2. This can be done in the CLI using the following command (just copy and past this into the CLI then push [ENTER])."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"resource SERVO 4 none"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"resource MOTOR 2 C09"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"save"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Flydragon V2.2 Target",src:r(2753).A+"",width:"539",height:"242"})}),"\n",(0,i.jsx)(n.h3,{id:"wiring",children:"Wiring"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Wiring Diagram v2.2",src:r(77705).A+"",width:"1740",height:"1840"})}),"\n",(0,i.jsx)(n.h3,{id:"uart-ports",children:"UART ports"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"UART 1 - Internal ELRS Receiver - (disable as shown below if not used)"}),"\n",(0,i.jsx)(n.li,{children:"UART 2 - SBUS or FPORT connector"}),"\n",(0,i.jsx)(n.li,{children:"UART 3 - Rx and Tx on Extension port"}),"\n",(0,i.jsx)(n.li,{children:"UART 5 - Rx and Tx on GPS port (can also be used for the Receiver)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Save",src:r(26666).A+"",width:"830",height:"283"})}),"\n",(0,i.jsx)(n.h3,{id:"can-i-use-a-receiver-other-than-elrs",children:"Can I use a receiver other than ELRS?"}),"\n",(0,i.jsx)(n.p,{children:"External receivers can be connected to the SBUS, FPORT or any of the Extension UART ports (UART 3 or 5). If not using the inbuilt ELRS receiver it should be disabled."}),"\n",(0,i.jsx)(n.h4,{id:"how-to-enabledisable-the-internal-receiver",children:"How to Enable/Disable the Internal Receiver:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The internal receiver is default turned on. When using external receivers, we need to turn it off. Connect the Flydragon F722 V2 to\nthe Rotorflight Configurator. Go to CLI (command line) page:"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Command to ",(0,i.jsx)(n.strong,{children:"DISABLE"})," the receiver:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"set pinio_config = 1,1,1,1"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"disable",src:r(33278).A+"",width:"606",height:"261"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Command to ",(0,i.jsx)(n.strong,{children:"ENABLE"})," the receiver:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"set pinio_config = 1,1,1,1"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Enable",src:r(4141).A+"",width:"621",height:"250"})}),"\n",(0,i.jsx)(n.h3,{id:"manuals",children:"Manuals"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(74298).A+"",children:"Flydragon V2.2 Flight Controller Manual"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(74298).A+"",children:"Flydragon V2 internal ELRS Manual"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},74298:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/files/FlyDragonF722_v2_ELRS_Receiver_Manual-2965cd18738e4b3158659a527723e436.pdf"},33278:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/disable-55f0e7ed8a7757cc7b2a5663153bc422.png"},4141:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/enable-c045a227745f04ea36605ea6203acf3c.png"},2753:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/fd-motorised-a5c6b50fdb28ff6b04bd45f79ca4deb5.png"},40394:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/fd-target-77c9f45ba05d16ad6928c274094dcf60.png"},26666:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/fd-uarts-f3356456985d36f42573eb5b2a2e0f8b.png"},3421:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/flydragon2-2-e8de7bc86901aa8597ec7be63deebf49.png"},77705:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/wiring-diagram-v2-59bd2947b0d8a4230d387211d5e9e8f2.png"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var i=r(96540);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);