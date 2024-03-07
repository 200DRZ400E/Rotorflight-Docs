"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[293],{3905:(e,t,i)=>{i.d(t,{Zo:()=>h,kt:()=>m});var l=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function n(e,t){if(null==e)return{};var i,l,r=function(e,t){if(null==e)return{};var i,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=l.createContext({}),s=function(e){var t=l.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},h=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,h=n(e,["components","mdxType","originalType","parentName"]),d=s(i),u=r,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||a;return i?l.createElement(m,o(o({ref:t},h),{},{components:i})):l.createElement(m,o({ref:t},h))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=u;var n={};for(var c in t)hasOwnProperty.call(t,c)&&(n[c]=t[c]);n.originalType=e,n[d]="string"==typeof e?e:r,o[1]=n;for(var s=2;s<a;s++)o[s]=i[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,i)}u.displayName="MDXCreateElement"},41310:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>n,toc:()=>s});var l=i(87462),r=(i(67294),i(3905));const a={sidebar_position:120},o="Mixer",n={unversionedId:"Tutorial-Setup/Mixer",id:"Tutorial-Setup/Mixer",title:"Mixer",description:"This section will describe the configuration of the mixer and calibrate the rotor blade angles.",source:"@site/docs/Tutorial-Setup/Mixer.md",sourceDirName:"Tutorial-Setup",slug:"/Tutorial-Setup/Mixer",permalink:"/docs/Tutorial-Setup/Mixer",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial-Setup/Mixer.md",tags:[],version:"current",sidebarPosition:120,frontMatter:{sidebar_position:120},sidebar:"tutorialSidebar",previous:{title:"Servos",permalink:"/docs/Tutorial-Setup/Servos"},next:{title:"RPM Filters",permalink:"/docs/Tutorial-Setup/RPM-Filters"}},c={},s=[{value:"Main Rotor Settings",id:"main-rotor-settings",level:3},{value:"Swashplate type",id:"swashplate-type",level:4},{value:"Rotor direction",id:"rotor-direction",level:4},{value:"Elevator Control direction",id:"elevator-control-direction",level:4},{value:"Aileron Control direction",id:"aileron-control-direction",level:4},{value:"Collective Control direction",id:"collective-control-direction",level:4},{value:"Swashplate Link Trims",id:"swashplate-link-trims",level:2},{value:"Main Rotor Geometry",id:"main-rotor-geometry",level:2},{value:"Cyclic and Collective calibration",id:"cyclic-and-collective-calibration",level:4},{value:"Collective geometry correction",id:"collective-geometry-correction",level:4},{value:"Collective blade pitch limit",id:"collective-blade-pitch-limit",level:4},{value:"Cyclic blade pitch limit",id:"cyclic-blade-pitch-limit",level:4},{value:"Total blade pitch limit",id:"total-blade-pitch-limit",level:4},{value:"Swashplate phase angle",id:"swashplate-phase-angle",level:4},{value:"Tail Rotor Settings",id:"tail-rotor-settings",level:2},{value:"Tail rotor type",id:"tail-rotor-type",level:3},{value:"Variable Pitch",id:"variable-pitch",level:4},{value:"Motorized",id:"motorized",level:4},{value:"Bidirectional",id:"bidirectional",level:4},{value:"Yaw Control Direction",id:"yaw-control-direction",level:3},{value:"Center Trim For Tail Rotor \xb0",id:"center-trim-for-tail-rotor-",level:3},{value:"Calibrating The mixer",id:"calibrating-the-mixer",level:2},{value:"Mixer override",id:"mixer-override",level:3},{value:"Collective Calibration",id:"collective-calibration",level:3},{value:"Cyclic Calibration",id:"cyclic-calibration",level:3},{value:"Variable pitch Yaw Calibration",id:"variable-pitch-yaw-calibration",level:3}],h={toc:s},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,l.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mixer"},"Mixer"),(0,r.kt)("p",null,"This section will describe the configuration of the mixer and calibrate the rotor blade angles."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before proceeding with setting up the mixer, make sure that ",(0,r.kt)("a",{parentName:"p",href:"./Configuration#board-and-sensor-alignment"},"gyro sensor alignment")," is correct.")),(0,r.kt)("h3",{id:"main-rotor-settings"},"Main Rotor Settings"),(0,r.kt)("h4",{id:"swashplate-type"},"Swashplate type"),(0,r.kt)("p",null,"Choose the swash type that suits your helicopter."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mixer Tab",src:i(32220).Z,width:"842",height:"201"})),(0,r.kt)("h4",{id:"rotor-direction"},"Rotor direction"),(0,r.kt)("p",null,"Choose the direction of rotation for the main rotor. This is looking down from on the top of the rotor."),(0,r.kt)("h4",{id:"elevator-control-direction"},"Elevator Control direction"),(0,r.kt)("p",null,"With the helicopter servos powered, tilt the heli forward (pitch down). The swash should now pitch up towards the tail of the helicopter. If this is not the case, change the control direction from ",(0,r.kt)("strong",{parentName:"p"},"[NORMAL]")," to ",(0,r.kt)("strong",{parentName:"p"},"[REVERSE]"),"."),(0,r.kt)("h4",{id:"aileron-control-direction"},"Aileron Control direction"),(0,r.kt)("p",null,"Roll the heli to the right (right Aileron). The swash should pitch towards the left. If this is not the case, change the control direction from ",(0,r.kt)("strong",{parentName:"p"},"[NORMAL]")," to ",(0,r.kt)("strong",{parentName:"p"},"[REVERSE]"),"."),(0,r.kt)("h4",{id:"collective-control-direction"},"Collective Control direction"),(0,r.kt)("p",null,"Push the collective stick forward (Increasing collective). The swash should now rise up towards the rotor head (to increase collective). If the swash goes down change the control direction from ",(0,r.kt)("strong",{parentName:"p"},"[NORMAL]")," to ",(0,r.kt)("strong",{parentName:"p"},"[REVERSE]"),"."),(0,r.kt)("h2",{id:"swashplate-link-trims"},"Swashplate Link Trims"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mixer Tab",src:i(69419).Z,width:"801",height:"170"})),(0,r.kt)("p",null,"Ideally the swashplate should be set with all 3 Collective servos at 90 deg while the blade angle is at 0 degrees. Some helicopters have fixed length swash links which means in order to get 0 degrees for blade centre the servo arms need to be raised or lowered. Use these link trims to provide that function."),(0,r.kt)("p",null,"For helicopters with adjustable swash links this should remain at 0 and the links adjusted to get a 0 degree blade angle."),(0,r.kt)("h2",{id:"main-rotor-geometry"},"Main Rotor Geometry"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mixer Tab",src:i(77265).Z,width:"840",height:"259"})),(0,r.kt)("h4",{id:"cyclic-and-collective-calibration"},"Cyclic and Collective calibration"),(0,r.kt)("p",null,"These settings are used to calibrate the mixer so that the blade angle matches the commanded angle for both the cyclic and collective. See the ",(0,r.kt)("a",{parentName:"p",href:"#calibrating-the-mixer"},"calibration procedure")," for details."),(0,r.kt)("h4",{id:"collective-geometry-correction"},"Collective geometry correction"),(0,r.kt)("p",null,"Adjust until the collective positive and negative deflections are equal."),(0,r.kt)("h4",{id:"collective-blade-pitch-limit"},"Collective blade pitch limit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Ideally, one should use this option to set the maximum allowed collective blade pitch. Therefore, if the person wants to change the collective pitch down the line, they should be able to adjust in the "rates" page confidently without worrying about servos binding.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Practically, for most 3D helicopters, this is set to the maximum collective you will ever need (15-16deg) if the helicopter is physically capable of doing it"))),(0,r.kt)("h4",{id:"cyclic-blade-pitch-limit"},"Cyclic blade pitch limit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This is NOT the same as the cyclic calibration on other FBLs (it's NOT the 8 deg cyclic on vbar for example) "),(0,r.kt)("li",{parentName:"ul"},"This is designed to let the FBL know how much cyclic travel the helicopter is PHYSICALLY capable of"),(0,r.kt)("li",{parentName:"ul"},"Usually adjust it so that around zero collective there is no physical interference anywhere. You might want to temporally increase the I gains (to around 200) on cyclic and move the cyclic stick to find the limits. MAKE SURE TO TURN THEM BACK"),(0,r.kt)("li",{parentName:"ul"},"Some 550+ size helicopter might be able to achieve 16+ degree of cyclic pitch, you could set it to the absolutely maximum but it is advised to limit around 16degree since practically it should never hit that much cyclic.")),(0,r.kt)("h4",{id:"total-blade-pitch-limit"},"Total blade pitch limit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This is probably the most difficult limit to understand and setup properly"),(0,r.kt)("li",{parentName:"ul"},"To find the total blade pitch limit, make sure the collective blade pitch limit and cyclic blade pitch limit are set up correctly. You might want to use the I-gain trick mentioned above"),(0,r.kt)("li",{parentName:"ul"},"Set the collective pitch to max, then move the cyclic. Increase the limit until either there is a physical limit or the fish-eye bearing (the ball) in the center of the swash drops at the max cyclic due to one servo reaching its limit."),(0,r.kt)("li",{parentName:"ul"},"Repeat at lowest collective pitch"),(0,r.kt)("li",{parentName:"ul"},"You could also increase cyclic servo travels to gain more total blade pitch. However, nothing should be interfering"),(0,r.kt)("li",{parentName:"ul"},"Double check that theres NO binding or interference at ANY combination of collective and cyclic in their whole range."),(0,r.kt)("li",{parentName:"ul"},"Make sure to turn the I-gains back to default in the end if the I-gain trick is used.")),(0,r.kt)("h4",{id:"swashplate-phase-angle"},"Swashplate phase angle"),(0,r.kt)("p",null,"Usually set it per manufacture recommendation. One could consider if theres bobbling that could not be resolved from changing the cross coupling gains or it is known that the rotor head design requires a non-zero phase angle."),(0,r.kt)("h2",{id:"tail-rotor-settings"},"Tail Rotor Settings"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mixer Tab",src:i(60594).Z,width:"844",height:"236"})),(0,r.kt)("h3",{id:"tail-rotor-type"},"Tail rotor type"),(0,r.kt)("h4",{id:"variable-pitch"},"Variable Pitch"),(0,r.kt)("p",null,"This is a variable pitch tail controlled by a servo (Servo#4)."),(0,r.kt)("h4",{id:"motorized"},"Motorized"),(0,r.kt)("p",null,"The tail has separate motor(M2) for controlling the yaw."),(0,r.kt)("h4",{id:"bidirectional"},"Bidirectional"),(0,r.kt)("p",null,"Motorized tail operating in bi-directional mode."),(0,r.kt)("h3",{id:"yaw-control-direction"},"Yaw Control Direction"),(0,r.kt)("p",null,"With the helicopter tail servo powered, move Rudder stick to the right. The tail slider should move to the inside (toward the tail case). If this is not the case, change the control direction from ",(0,r.kt)("strong",{parentName:"p"},"[NORMAL]")," to ",(0,r.kt)("strong",{parentName:"p"},"[REVERSE]"),"."),(0,r.kt)("h3",{id:"center-trim-for-tail-rotor-"},"Center Trim For Tail Rotor ","[\xb0]"),(0,r.kt)("p",null,"Set tail rotor trim for zero yaw command."),(0,r.kt)("h2",{id:"calibrating-the-mixer"},"Calibrating The mixer"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The purpose of the mixer calibration is to set the helicopters physical blade angle to the angle commanded by the FC")),(0,r.kt)("h3",{id:"mixer-override"},"Mixer override"),(0,r.kt)("p",null,"Set the mixer override at the bottom of the pages to ",(0,r.kt)("strong",{parentName:"p"},"ON"),". This will open the override window."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mixer Tab",src:i(24769).Z,width:"844",height:"444"})),(0,r.kt)("h3",{id:"collective-calibration"},"Collective Calibration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Confirm with a blade pitch tool that with collective mixer at 0 deg the blades are also at 0 deg.  "),(0,r.kt)("li",{parentName:"ul"},"Set the collective mixer override to 9 deg. Measure the blade angle.   "),(0,r.kt)("li",{parentName:"ul"},"If the Blade angle is different from the Override angle, increase or decrease ",(0,r.kt)("a",{parentName:"li",href:"#cyclic-and-collective-calibration"},"Collective Calibration %")," until the bade angle matches.  "),(0,r.kt)("li",{parentName:"ul"},"Set collective back to 0 deg.")),(0,r.kt)("h3",{id:"cyclic-calibration"},"Cyclic Calibration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set the pitch override to 9 deg.  "),(0,r.kt)("li",{parentName:"ul"},"Measure the blade pitch  "),(0,r.kt)("li",{parentName:"ul"},"Increase or decrease the ",(0,r.kt)("a",{parentName:"li",href:"#cyclic-and-collective-calibration"},"Cyclic Calibration %"))),(0,r.kt)("h3",{id:"variable-pitch-yaw-calibration"},"Variable pitch Yaw Calibration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set YAW override to 0 deg."),(0,r.kt)("li",{parentName:"ul"},"In servo page, set the center so that the yaw servo arm is leveled."),(0,r.kt)("li",{parentName:"ul"},"Adjust linkage to get the tail blades to 2-3 degrees or follow the manual"),(0,r.kt)("li",{parentName:"ul"},"Set the Center trim for tail rotor so that the tail blades are at 0 degrees"),(0,r.kt)("li",{parentName:"ul"},"Set the Override to a value (e.g. 30 deg)  "),(0,r.kt)("li",{parentName:"ul"},"Measure the tail blade angle (fold the tail blades and compare the angle to a 60 deg ruler)"),(0,r.kt)("li",{parentName:"ul"},"Adjust the ",(0,r.kt)("a",{parentName:"li",href:"#tail-rotor-settings"},"Yaw Calibration %")," so that the tail blade angle matches the commanded angle.")))}p.isMDXComponent=!0},77265:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/mixer-main-rotor-geometry-bc36b8d8663c3f23982020de6c5662ab.png"},32220:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/mixer-main-rotor-settings-880ad842dc90ce7327a264c5b617cbdb.png"},24769:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/mixer-override-6d8cd872a47d355de99dac1c66d9ec65.png"},69419:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/mixer-swashplate-link-trims-c1b640fb1c2173d674bdf743031e5f04.png"},60594:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/mixer-tail-rotor-settings-81501a3a65d5402828e2ef9b2c0dcc6a.png"}}]);