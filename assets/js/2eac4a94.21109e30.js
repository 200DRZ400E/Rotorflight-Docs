"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[8661],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),d=o,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1776:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:40},l="Design Requirements",i={unversionedId:"Manufacturers/Design-Requirements",id:"Manufacturers/Design-Requirements",title:"Design Requirements",description:"This page collects the generic hardware requirements for all Flight Controller designs for Rotorflight.",source:"@site/docs/Manufacturers/Design-Requirements.md",sourceDirName:"Manufacturers",slug:"/Manufacturers/Design-Requirements",permalink:"/docs/Manufacturers/Design-Requirements",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Manufacturers/Design-Requirements.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"manufactSidebar",previous:{title:"Manufacturers stuff?",permalink:"/docs/Manufacturers/Developers"},next:{title:"Reference Design",permalink:"/docs/Manufacturers/Reference-Design"}},s={},u=[{value:"General",id:"general",level:2},{value:"Features",id:"features",level:2},{value:"Gyroscope &amp; Accelerometer",id:"gyroscope--accelerometer",level:3},{value:"Barometer",id:"barometer",level:3},{value:"Blackbox Flash",id:"blackbox-flash",level:3},{value:"Connectors",id:"connectors",level:2},{value:"Servo and Motor Outputs",id:"servo-and-motor-outputs",level:2},{value:"Cyclic Servos",id:"cyclic-servos",level:3},{value:"Tail servo / ESC",id:"tail-servo--esc",level:3},{value:"Main ESC",id:"main-esc",level:3},{value:"ESC telemetry / RPM",id:"esc-telemetry--rpm",level:3},{value:"Extension Ports",id:"extension-ports",level:2},{value:"UARTs",id:"uarts",level:3},{value:"Receiver",id:"receiver",level:3},{value:"DSM",id:"dsm",level:4},{value:"Compass",id:"compass",level:3},{value:"GPS",id:"gps",level:3},{value:"LED STRIP",id:"led-strip",level:3},{value:"Other Features",id:"other-features",level:2},{value:"LEDs",id:"leds",level:3},{value:"Boot/DFU button",id:"bootdfu-button",level:3},{value:"SWD",id:"swd",level:3},{value:"Power",id:"power",level:2},{value:"5V",id:"5v",level:3},{value:"VX (BEC power)",id:"vx-bec-power",level:3},{value:"ESD Protection",id:"esd-protection",level:2},{value:"Miscellaneous Notes",id:"miscellaneous-notes",level:2},{value:"TIM1 and TIM8",id:"tim1-and-tim8",level:3}],p={toc:u},c="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"design-requirements"},"Design Requirements"),(0,o.kt)("p",null,"This page collects the generic hardware requirements for all Flight Controller designs for Rotorflight."),(0,o.kt)("p",null,"The actual Reference Designs for Rotorflight-2 can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rotorflight/rotorflight/wiki/Rotorflight-FC-Reference-Design"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For an FC to be fully supported by Rotorflight-2 (RF2), it must follow one of the Reference Designs.")),(0,o.kt)("h2",{id:"general"},"General"),(0,o.kt)("p",null,"Rotorflight is based on Betaflight, and thus has the same basic requirements for the hardware."),(0,o.kt)("p",null,"Please read the Design Guidelines for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/betaflight/betaflight/blob/4.4.0-RC5/docs/Manufacturer%20Design%20Guidelines.md"},"Betaflight"),"\nfirst."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,"The following features and peripherals are mandatory:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Gyroscope & Accelerometer"),(0,o.kt)("li",{parentName:"ul"},"Barometer"),(0,o.kt)("li",{parentName:"ul"},"Blackbox (flash chip or SD card)"),(0,o.kt)("li",{parentName:"ul"},"Indicator LEDs (Power, GPIO)"),(0,o.kt)("li",{parentName:"ul"},"DFU button"),(0,o.kt)("li",{parentName:"ul"},"USB socket"),(0,o.kt)("li",{parentName:"ul"},"Regulated +5V for external devices (RPM sensor, GPS, Compass, LED strips, etc.)"),(0,o.kt)("li",{parentName:"ul"},"Voltage sensor (ADC) for Vx and +5V")),(0,o.kt)("p",null,"Optional peripherals and features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Voltage sensor (ADC) for main battery (Vbat)")),(0,o.kt)("h3",{id:"gyroscope--accelerometer"},"Gyroscope & Accelerometer"),(0,o.kt)("p",null,"The supported gyro&acc chips are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"BMI270"),(0,o.kt)("li",{parentName:"ul"},"ICM42688P"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("del",{parentName:"li"},"ICM20689")," (supported but poor performance)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("del",{parentName:"li"},"ICM20602")," (supported but poor performance)")),(0,o.kt)("p",null,"Other models are not supported."),(0,o.kt)("h3",{id:"barometer"},"Barometer"),(0,o.kt)("p",null,"The supported barometer chips are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SPL06"),(0,o.kt)("li",{parentName:"ul"},"DPS310"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("del",{parentName:"li"},"BMP280")," (supported but poor performance)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("del",{parentName:"li"},"BMP388")," (supported but poor performance)")),(0,o.kt)("p",null,"Other barometer models - like BMP390 - will be supported in the future."),(0,o.kt)("h3",{id:"blackbox-flash"},"Blackbox Flash"),(0,o.kt)("p",null,"The minimum suggested flash size for the Blackbox is 1Gbit (128Mb x 8)."),(0,o.kt)("p",null,"The supported SPI flash chips are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Winbond W25N01G"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("del",{parentName:"li"},"Winbond W25Q64")," (supported but not large enough for RF use)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("del",{parentName:"li"},"Winbond W25Q128")," (supported but not large enough for RF use)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("del",{parentName:"li"},"Winbond W25Q256")," (supported but not large enough for RF use)")),(0,o.kt)("p",null,"Larger flash chips - like W25N02 and W25N04 - will be supported in the future."),(0,o.kt)("h2",{id:"connectors"},"Connectors"),(0,o.kt)("p",null,'A helicopter Flight Controller typically have two kinds of connectors. The servo and motors are connected to standard 0.1" pin headers, with 6V-8.4V power on the center pin. The power is usually provided by a BEC in the ESC. The other connectors are usually UARTs or multi-function connectors, with 5V power. Most commonly these are JST type connectors (XH,PA,GH,etc).'),(0,o.kt)("p",null,"It is also very useful to have the motor/servo headers on one end of the FC, and the other connectors on the other. This helps to remember that the other side has BEC (>6V) voltage, and the other side has 5V."),(0,o.kt)("p",null,'The standard "JR" style servo plugs are thicker than 0.1", usually 2.65mm. If more than 4 headers are located side by side, an extra gap of 0.5mm is required after every 4x3 header block. Otherwise the servo plugs will not fit in properly.'),(0,o.kt)("h2",{id:"servo-and-motor-outputs"},"Servo and Motor Outputs"),(0,o.kt)("h3",{id:"cyclic-servos"},"Cyclic Servos"),(0,o.kt)("p",null,"Three servos are required for cyclic. The reference designs also have a pin for an optional fourth cyclic servo, which can be a solder pad on the PCB."),(0,o.kt)("p",null,"The servo pins should be selected so that they are ",(0,o.kt)("em",{parentName:"p"},"on the same timer"),".\nDMA is not required for servos, but the pins should have it available for future use."),(0,o.kt)("p",null,"The servo header is a standard 0.1\" pin header. It's common to have the cyclic servos side-by-side, as a 3x3 header block."),(0,o.kt)("h3",{id:"tail-servo--esc"},"Tail servo / ESC"),(0,o.kt)("p",null,"The tail servo pin should be selected so that it is on a different timer than the cyclic servos. For ESC/motor use, DMA must also be available without conflicts. The pin and timer selection must allow DShot BitBang."),(0,o.kt)("h3",{id:"main-esc"},"Main ESC"),(0,o.kt)("p",null,"Main ESC/motor pin should be selected so that it is on a different timer than the tail motor/servo. The pin must have DMA available without conflicts. The pin and timer selection must allow DShot BitBang."),(0,o.kt)("h3",{id:"esc-telemetry--rpm"},"ESC telemetry / RPM"),(0,o.kt)("p",null,"The ESC telemetry pin can be an Rx on any UART."),(0,o.kt)("p",null,"If a combined ESC telemetry and RPM input pin is preferred, then the pin should be selected so that it can act as a UART Rx, and a timer input, for example PA1 or PA3."),(0,o.kt)("p",null,"The RPM input requires a free timer. The timer can't be shared with other functions. "),(0,o.kt)("p",null,"TIM2 and TIM5 can accommodate 4 RPM inputs, one on each channel. Other timers can accommodate only one RPM input.\nIt is preferred to use TIM2 or TIM5 for RPM inputs."),(0,o.kt)("p",null,"The RPM inputs require over-voltage protection diodes. Any pin header that provides the servo power (VX) and can act as an RPM input, must have the protection diode on the signal pin. This is due to a shortcoming in a commonly used HobbyWing RPM sensor."),(0,o.kt)("h2",{id:"extension-ports"},"Extension Ports"),(0,o.kt)("p",null,"The extension ports are for any extra peripherals, including receivers."),(0,o.kt)("p",null,"The ports are primarily for UARTs, but because of the STM32 flexibility, they can be configured for other functions too."),(0,o.kt)("p",null,"Possible functions are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"UART"),(0,o.kt)("li",{parentName:"ul"},"I2C"),(0,o.kt)("li",{parentName:"ul"},"RPM input"),(0,o.kt)("li",{parentName:"ul"},"LED strip"),(0,o.kt)("li",{parentName:"ul"},"Extra PWM (servo) output"),(0,o.kt)("li",{parentName:"ul"},"Extra DShot (motor) output"),(0,o.kt)("li",{parentName:"ul"},"Camera Control"),(0,o.kt)("li",{parentName:"ul"},"Voltage and current measurements (ADC)"),(0,o.kt)("li",{parentName:"ul"},"RSSI input"),(0,o.kt)("li",{parentName:"ul"},"External OSD"),(0,o.kt)("li",{parentName:"ul"},"Video Tx Control (VTX)")),(0,o.kt)("p",null,"The physical connector should be 4-pin JST-GH ","[GND, 5V, RX, TX]",", or other JST style polarised connector."),(0,o.kt)("h3",{id:"uarts"},"UARTs"),(0,o.kt)("p",null,"It is preferable to have as many UARTs available as possible."),(0,o.kt)("h3",{id:"receiver"},"Receiver"),(0,o.kt)("p",null,"Typically, any of the UART connectors can be used for connecting the receiver."),(0,o.kt)("p",null,"If a dedicated receiver port is preferred, UART3/4 on PC10/PC11 is the best choice due to its flexibility."),(0,o.kt)("h4",{id:"dsm"},"DSM"),(0,o.kt)("p",null,"Spektrum DSM can't be connected to a UART socket, as it requires 3.3V.\nThe DSM socket is a JST-ZH with ","[3.3V GND DATA]"," pins."),(0,o.kt)("p",null,"The options for connecting a DSM receiver are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provide a standard DSM socket"),(0,o.kt)("li",{parentName:"ul"},"Connect to a generic UART socket with 3.3V power (instead of 5V)"),(0,o.kt)("li",{parentName:"ul"},"Connect to a generic UART socket with an adapter, converting 5V to 3.3V")),(0,o.kt)("h3",{id:"compass"},"Compass"),(0,o.kt)("p",null,"An external compass connects to an I2C interface, which can be provided by one of the multi-function headers (UART/I2C/...)"),(0,o.kt)("p",null,"Usually a compass is integrated into an external GPS unit."),(0,o.kt)("p",null,"Note! The external I2C can't be shared with the internal barometer, as this would not allow using that pin header for anything else than I2C."),(0,o.kt)("h3",{id:"gps"},"GPS"),(0,o.kt)("p",null,"An external GPS connects to any of the UART (multi-function) headers."),(0,o.kt)("p",null,"If a GPS specific header is preferred, a 6-pin socket with ","[GND,SDA,SCL,TX,RX,5V]"," can be added (Pixhawk compatible)."),(0,o.kt)("h3",{id:"led-strip"},"LED STRIP"),(0,o.kt)("p",null,"The WS2812B LED strip requires a GPIO pin with a timer and DMA capability."),(0,o.kt)("p",null,"It can be provided on one of the multi-function header (shared with UART etc.)"),(0,o.kt)("h2",{id:"other-features"},"Other Features"),(0,o.kt)("h3",{id:"leds"},"LEDs"),(0,o.kt)("p",null,"At least one power LED and one indicator LED (GPIO) are mandatory."),(0,o.kt)("p",null,"Preferably, a two colour (green+red) indicator LED on two GPIO pins can be used."),(0,o.kt)("h3",{id:"bootdfu-button"},"Boot/DFU button"),(0,o.kt)("p",null,"There ",(0,o.kt)("em",{parentName:"p"},"must")," be a bootloader DFU button on the PCB, accessible ",(0,o.kt)("em",{parentName:"p"},"without")," opening the FC case."),(0,o.kt)("h3",{id:"swd"},"SWD"),(0,o.kt)("p",null,"The SWD pins PA13 and PA14 must be exposed on test pads on the PCB, along with the GND and +3.3V pads."),(0,o.kt)("h2",{id:"power"},"Power"),(0,o.kt)("h3",{id:"5v"},"5V"),(0,o.kt)("p",null,"A 5V power must be provided for the external devices."),(0,o.kt)("p",null,"The regulator should be able to provide at last 1A current, preferably 2A."),(0,o.kt)("h3",{id:"vx-bec-power"},"VX (BEC power)"),(0,o.kt)("p",null,"The system is powered from the VX Power bus, which can be provided by a BEC or a 2S LiPo battery."),(0,o.kt)("p",null,"The VX power is fed into the FC via the ESC pin headers (Throttle, Telem, RPM)."),(0,o.kt)("p",null,"Large ESCs usually have two or three pairs of BEC power wires, for increasing the current capacity. The FC should have input pins for all of them."),(0,o.kt)("p",null,"For very large helicopters, it may be reasonable to have a separate connector (XT30) for the VX power input."),(0,o.kt)("h2",{id:"esd-protection"},"ESD Protection"),(0,o.kt)("p",null,"The STM32 GPIO pins are ",(0,o.kt)("em",{parentName:"p"},"NOT")," protected for over-voltage (details in ST Application Notes).\nThus, any pins exposed on external connectors should be protected by TVS diodes and current limiting resistors."),(0,o.kt)("p",null,"The signal pins on the sockets with servo power (Vx) should have 470ohm resistors."),(0,o.kt)("p",null,"The signal pins on the expansion sockets with +5V power should have 22ohm resistors."),(0,o.kt)("p",null,"The higher resistance (470ohm) on the servo/ESC pins provides protection against accidental polarity reversal (unplugging the ESC/BEC plug wrong way around)."),(0,o.kt)("p",null,"The lower resistance (22ohm) on the expansion sockets is required for the various protocols used.\nIt is still offering some over-current protection, while not interfering with the signals."),(0,o.kt)("p",null,"The easiest way to implement the protection is to use an ESD protection IC with integrated steering and TVS diodes:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ESD Array",src:r(4006).Z,width:"2560",height:"1920"})),(0,o.kt)("p",null,"Or using discrete components:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ESD Diodes",src:r(7742).Z,width:"2560",height:"1920"})),(0,o.kt)("h2",{id:"miscellaneous-notes"},"Miscellaneous Notes"),(0,o.kt)("h3",{id:"tim1-and-tim8"},"TIM1 and TIM8"),(0,o.kt)("p",null,'DShot BitBang requires one "pacing" timer, either TIM1 or TIM8. In the design, one of them must be reserved for BitBang use.'),(0,o.kt)("p",null,'One "pacing" timer channel and one DMA channel is required for each GPIO port (PA,PB,PC,PD) with motor pins. It is preferred to have all motor pins located on the same GPIO port, thus using only one timer and DMA channel.'))}h.isMDXComponent=!0},4006:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ESD-Array-a07888b045e0d6ab9bb09af17af38b93.jpeg"},7742:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ESD-Diodes-82c12788a9df8e735d57e182f737efad.jpeg"}}]);