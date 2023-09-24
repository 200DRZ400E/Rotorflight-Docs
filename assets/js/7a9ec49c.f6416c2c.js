"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[1781],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>E});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),A=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=A(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=A(r),p=a,E=u["".concat(l,".").concat(p)]||u[p]||c[p]||n;return r?o.createElement(E,i(i({ref:t},d),{},{components:r})):o.createElement(E,i({ref:t},d))}));function E(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var A=2;A<n;A++)i[A]=r[A];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4844:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>A});var o=r(7462),a=(r(7294),r(3905));const n={sidebar_position:80},i="Motor and ESC",s={unversionedId:"Tutorial - Setup/Motor and ESC",id:"Tutorial - Setup/Motor and ESC",title:"Motor and ESC",description:"The motor tab is used to configure the motor and ESC communications protocol as well as to provide the ability to test operation.",source:"@site/docs/Tutorial - Setup/Motor and ESC.md",sourceDirName:"Tutorial - Setup",slug:"/Tutorial - Setup/Motor and ESC",permalink:"/docs/Tutorial - Setup/Motor and ESC",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial - Setup/Motor and ESC.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"Mixer",permalink:"/docs/Tutorial - Setup/Mixer"},next:{title:"RPM Measurement",permalink:"/docs/Tutorial - Setup/Frequency"}},l={},A=[],d={toc:A},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"motor-and-esc"},"Motor and ESC"),(0,a.kt)("p",null,"The motor tab is used to configure the motor and ESC communications protocol as well as to provide the ability to test operation."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Motor and ESC",src:r(7785).Z,width:"1280",height:"422"})),(0,a.kt)("h1",{id:"escmotor-features"},"ESC/Motor Features"),(0,a.kt)("p",null,"Select ESC communications"),(0,a.kt)("p",null,"ESC/Motor Protocol - Determine the ESC protocol required for your ESC. It is recommended that either DSHOT150 or DSHOT300 be used with a suitable BLheli_32 or BLheli_s (with updated firmware). DSHOT600 or faster are not required or recommended."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Motor and ESC",src:r(185).Z,width:"173",height:"204"})),(0,a.kt)("p",null,"Bi-Directional D-shot - This switch is visible when ESC/Protocol is DSHOTxxx. It enables motor eRPM telemetry from supported ESC's via bi-directional dshot (i.e. the FC receives a speed feedback from the ESC). Please see Bidirectional DSHOT for more details. This is a requirement for the Governor and RPM filtering features unless other RPM feedback methods are used such as shown HERE.\nGear Ratio Configuration"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Motor and ESC",src:r(7826).Z,width:"575",height:"74"})),(0,a.kt)("p",null,"Enter the number of teeth for the main rotor gearing ","[Teeth on Pinion gear]","/","[Teeth on Main Gear]",". For a direct drive Main rotor this is just set to ","[ 1 ]","/","[ 1 ]","."),(0,a.kt)("p",null,"Enter the number of teeth for the Tail rotor gearing ","[Teeth on Tail gear]","/","[Teeth on Autorotation Gear]",". For a direct drive tail this is just set to ","[ 1 ]","/","[ 1 ]","."),(0,a.kt)("p",null,"Note! - Some large helicopters may use a 2 stage gearing system (e.g. Pinion-1/Main-1/Pinion-2/Main-2). This will have to be calculated and entered as: ","[Pinion-1 X Pinion-2]"," / ","[Main-1 x Main-2]","."),(0,a.kt)("p",null,"Motor Pole count - Determine the number of magnetic poles for each motor. Count the number of magnets on the motors rotor. In the example below the magnets (circled) are fixed to the outer bell which in total has 14. This allows the flight controller to know how many electrical phase rotations are required to complete one physical motor revolution."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Motor and ESC",src:r(534).Z,width:"354",height:"402"})),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Motor Override function"),(0,a.kt)("h2",{parentName:"admonition",id:"big-warning"},"Big warning!"),(0,a.kt)("p",{parentName:"admonition"},"This functionality will make the motors spool up. Do this WITHOUT the main or tail rotors fitted!!  "),(0,a.kt)("p",{parentName:"admonition"},"Motor Override functionality is provided to test the operation of each motor directly.  ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Motor and ESC",src:r(1833).Z,width:"575",height:"74"})),(0,a.kt)("p",null,"Note: If you use the slider, make sure you release the mouse button. Nothing changes as long as you hold the mouse button down!"),(0,a.kt)("p",null,"Note: The Test motors function in BLHeliSuite32 doesn't work when using Rotorflight. It will give an error like 'Initialization of Motor Test Mode failed! Please check current Unknown rev 4.2.13 support for this application function!'."),(0,a.kt)("p",null,"Motor and ESC Status\nThrottle - This is the command being sent from the flight controller to the ESC.\nRPM - The measured RPM telemetry feedback. As the motor spins this should read a value related to the current speed.\nErrors - This shows the status of the RPM telemetry signal. This should be 0%"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Motor and ESC",src:r(1933).Z,width:"832",height:"631"})))}c.isMDXComponent=!0},7785:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/motor-1-cec25a82333b80fd36db93e43a8ee8f1.png"},185:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAADMCAIAAACOZbTrAAAAA3NCSVQICAjb4U/gAAAZA0lEQVR4nO2dX2wbx53HvyQlS3JaCQgsi7xLLAZJi9ax1RRokyWangkb7lNsqrFjL69nJMiTnuKi9tVke71axbVUXB9wORwCow+Gi7TlBr5cxeQpcZwwQABuCwdVasdJkLheI0G5gQG7aeK4qqSde5jd2dm/XPGPLJHzgUHQszOzI85vZ36z893fxgghAN54442tW7dC0KvEb3UDBKsCYQcCQNiBgCLsQAAAfdGz6rqu6/rNmzc71xpB2xkaGkqlUmNjY+HZotpBvV7/5JNPtmzZsn79+pbbJlg5PvvsM03TCCHJZDIkW9R54aOPPrrrrruEEaw51q9fn06ndV0PzxbVDm7evHnbbbe13CrBLWD9+vUNZ3PhJwqA5u1AVyZjTmbUwOPcIXXGndOTos4ElvRCM9jHJhVuAGSNcKTauZ0N6WlaGQ9y5TqxqJWKGfa76spkKi/V2DFkov7kujIZy8BR0ioqFdipgJKVpSBBVyYzKm1KvYx8ym7FVB7lOk2dYpagzmSKpZrZZGEJJsuwA+LEmfLAkT//Jlecod1x+XIFP9v2ADv26G9yxVdrrJyrIjulXp7K4zd/PmKX5Gv1KUAIIWRs/2+N3+4fI4SQsW37c1AvU5t4Vank9m8bI2Rs/5GfVZRXaSW1V4tm25zNWqMcPXr0+vXrfMr169ePHj3qytaSHUSsyzw8Nv4AKtplQggZT+/GD6r2Lzy2//+WrM71VsxS6lWlsnv/tjH+4Ni2/bsrSrXuW8ADX8NlrYIHxsesImbT6pqK3elxM5VA1ep+Fa0Njh49Oj09vX37dmYKf/nLX7Zv3z49PT09Pb2srvS3A29uTxtAQJyp4+O7zZ91bN/Tv979g28kEolEIvFtpe4sBusI5Rs/gFmTdvl5u+csxsYfwPOXNVcVxNOguvLtROIf//n5nx7ZN2Zl2z0+bjeNsL/KOsfY+ANBBrU2eOKJJyYmJubm5qgpXL9+ffv27XNzc1/5yleeeOIJV+bw/nXbgSsHX4u3XkIMwzCIT6axfc8tLCwsLHzwq93Pf+eOvr6+J1U7z09fX+B4/aeO03r/Wk+qbzZ6xg9+9btvWOdy5LL/E/5XrSlGRkbOnj07MTHx5ptv7tixY8eOHXNzcxMTE2fPnh0ZGeFzuv5ob1877CAoE/H8YobPb6hpz+N+1+U8tu9///73v3/wq10/fNCyhGD/YHx8F1RNdx7UNRW7rOvaVcDL2L5//Q/8sGoawvOaZjeNFWXn0DUVIXWtCUZGRl5++WVqCm+++ebExMTLL788PDzsuD6tzgq61MHfV/Ye81qAfYgQYg4HVpnfV/8Nu57ZZBjG738++PP0ldOPsFvao5vuNwcP0Dq4YlzK6Df37fqXZ6v1vXZJfFR99oVd+/5nlCvhrYLjI+132LVvk2EYm8Z3QTOzEYJd6U2GYZhNoe02CHD/ptGAmtYMw8PDZ86c2blzJ4AzZ84MDw/zPRWLxeDse5ZCv9DvPv4BiTJeGgQAZ3PqsX/6EX5yaO9GQsjXv/mTFw6MH7NmAlJ/9tiP8JNvft0qRwx3TWbKxr3//UvCl1SPjR94wazVr4BZ/d7Bvc9SJ0T95YEXHtr74EZCyMYH9z70o2PP1un5zUSzcb9Uzbxmq9Y6w8PDL7744osvvkiNIApwXvl9fN/zRsAbkU95gxC88OhdQ49aFT106tKne8eWlpYAfO17n17aJN89NOQ9Ru2HZqM4Ukb3KJ/e+Z+fYyWnX/n00/vBZ/dWMbpHeUX7nNWU6Vc+3TO6tLQEjO556tTpu+8aehR46NQlMxH42vdemf5cdujfad6vOeteu3z+85+PxWJ0bGMXeiwWI4TQT77X+XSaOUYPnzt3buvWrV4jYN9VVX3wwQfhNA44bUqwGjD71fqkX15//XVJkvhEV7Y++PUlcfoK4QOLMIXVg9cIKKzLeJ+AfYfXT/SdCwzDGBgY+OSTT4aGhlwZIOxgNeEaBuiXv/3tbwMDA4ZhxONxPiezDEKIvw7FZQSGYWzYsEHTtDvvvHNwcNDXDoQ13Fp8pwNqBB988MGGDRuo6+AyBfbdYQe8N8EbgWEYGzduXFpaunDhws2bN71TA4Qd3Gp43xDcpDA0NDQ2NrZhw4alpSU2AMRisUQiAW5t6V4v0O+uuxCGYRw7diwej/MWJFgr0B48dOhQIpEghCQSiXg8TqcJ1qF9rgHA6x/Q8SAejx87duyW/SmC1vj+97+/sLBACOnr63N5jpRA/wDcwGAYhhgJ1jSxWGxxcZF9570ESuP7iXQ88OTyyINMzY+uTPKiE12ZdMqBTPkRLe5VJrm1Q4J2sbCwsLi4aBjG0tIS7VN+PAjbd+ZNwTdbyZYYMCVQMi2hWGX9q2mVXA5KlamBqkWUshIA5HI5LiM9JOgYi4uLS0tLvBEE2oHrmGt9GEpSLpRo/0vZElTN7He1WiwVClJF0+j/dU21zACQJN4QdE3NlUq5Zv9MQQOoHfArAHCdG6hHcs0OyzhhOp2z+l3X1Fw6LWVLVn9rWiWXTlsZs7JtCHpVgZxNuysTtAs2GPh2qG0HroUDPCuIUHRlxhrwk6x7ad8mkU5bCZqak7PsuRrOEIQZdBrDMN555x3DMC5evEgIeeuttwghFy5cAHD+/PkG44H3O08xw7zEVB7leoEO+Mm0RGcGTatI6SS1DFXTmV0wrAPQqwrNKugUhmF88YtfBPClL30JwObNmwFs2bKFfsYR3M0NB4MSL/adlVk3StlSRdOgVoumL5DMylCqumUXNsm0VFGqul5VKsxtEHSKkN4MXC+E/Lcx6XRO1VRNZb5AMi1VtKqmejpbypYqyqlTwgw6TvgA3/j5hWUbAej1r1U1bhKQsiVVUcB8RIaULVWKRWEGK0FIV3bo+cZkWioWi/wkkE6j4nQOTKRsCRBmcItZRhwMJ1IhdJyQCoQU+ISkPEtkx/FZb02uTIIVQzzvLACEHQgowg4EgLADAUXYgQAQdiCgtGgHfPgbt9rEqTKx9SnekDp8Xv+AOroy6RKoeFL8mxIWTcfdMHcBrnpnm7swikordqDOxFKKbEU3qMtKytkzxZlAaVHOHeKEblE1HVAnsCmB0XQoujKZyldYNVyIHWeMHU2rcE0udN9Nr+btgMYZsneXkvJsrVTJn2L9lsvxYYkioWkV/tai9FjZKVlqtim+6MpkLJWXSiU7KSnPsv2yZFbOWYIaXVPR3duhTdsBJzBjSNkSp0mTCoVSZXmWkE7neFEbkvJshIuvcVMCzlaoE1LIRmiXQz7TlTQdN09T4f1p0umcrUkDpELQZVnJp3w0rkjKJ8o5S9XgFqw6y9jDeaSm+JCUpLArXD2Vr5iiGV1TubN3oXfQ8fWCVPCPTufyDxxDujk75+gvb5d1lqmXOyll1JXJTDFXPkHbpWkVdvZaqZjpQkl1s3aQTEtg6lOGplXc86j0WDnXRJxCag/1KGUjNyUqujKZyqNcZ9YpFWxTlR4r5yq2/rpbaHo88JuA/SZqc6yfOaU1rlOdcU0GyXQUzzxyU6JgLVk4eZXPGbvOZ2x+XqBDvt1v5lD6mPe3T8onyigWK54DniqzpYq9VnOIX9vUlEaoM7zQ0q6O2aeuTOW7UTTTin8gFehK3XTcFLkedBUl5ULJkeDyE2P2ar9eVpn6NaXI9WiL9ehNCUWtFl1tm1GBpDzLKvcxk64gRgXtb7zxxr333ks9MPboE1W80yiHv/jFL5588slb3VpBkxw5cuThhx8eHBwcGhoaHBzs7+9ft25dX19fIpGg9i72FwSA2GcSUIQdCABhBwKKsAMBIPQHVh6W4q8/6Hp6XH8AumltfQ/UH3Q9Paw/AADoyoyaYztWQfqD7qeX9QeArkwp8okuvD24bHpYfwCop/JSIej2M6c/6Bbee+89AG+//TaAt956CwCNg3HhwoUe1h+oMxnUAsYCp/6gW/jCF74A4Mtf/jKAe++9F644GM2w5vUHujKjBuxIevQHPUCv6g/0qlKxJppMEShmzFNH0h90H72qP7DmH25JOSsn/fUHvYDQH/D46w96AaE/6AmE/kAQCWEHAkDYgYAi7EAACDsQUIQdCIBW9hsbvFAlVDniUH4gQJpCMzuy+otUIqhUAvQyUVQqvUEr40H7XqjC7u7Vyzl7P8l1J6j9IpUIKpVeoaV5YWVfqLLyIpUeoiU7WNkXqqy0SKWnaM1PXNEXqoSKVIJUKs2LVHqLFtcLK/tClRCRyopGyehCWl03Br5QxV8d0h5uZZCMLqXl+wfRX6jS4o+/GoJkdC+t30cKeqGKlC2Bu16jakpCz3Nrg2R0M02/h8NGypYAeDtEKpAaYpmYdVOhVHO490X7CJCLoAaUCqSenkyxF03nynUSSWsiFUhdmUzF8sss10sIHUpPIHQogkgIOxAAwg4EFGEHAkDYgYDSov7Ab9feR0zAVu9u4YE7ha/VGcwiqFRIVA1PE3spsMUyaWk84N7z7Qo/7bjbX4v4+Ls6E2NRKKhOIGLHBUTVcDWxXkY+ao09R7vmBSlbCtxOiBiaWtdUcA+aJ+VCqa0BrYXwIIR22UEbbtkn0xIcHS8V2v20qdhvDqIlOyiyJxFjGTX46dCoESVo2IyUv0iQO1eMPqJsExBVw0snN0HXAJ2Kg8FPvrKS4vrO0TNOXVgYll6wVqL9zvUody5TT2gTGFVD4KADcTDcJOUCv7/LeqZWArjNvYgDM7WHqP5ldPzVSYLO3z+QCuHx5+yecb1HEdRo2opeVYT+xJ922UGwGsCUFdIuTmblHH+Rc65DMivnHGvPdgeq0pWpfEUID/xpl58YFkaEzhm0i5PybL0M5j1kVFt4kJRnSU2yHYsMokanCYiq4Wli74W7iYzQH/QEQn8giISwAwEg7EBAEXYgAIQdCCjCDgRAO3Uort2d5StKfAqGaVvcp3Q97+Qs4X3dSi8GuwihbftMDpFHs4oSXZmMZeAIdUE7rFGgDHXGtQUJTatw20/mHS4aC8GUzQhL4GjfPhMn8mhSUaIrU867klKhXs6FvN2Hos7EYhnVFYFD11TvToItkogaRKNnaKN/YO8lNqco0auKZz8hmZUbS5myNUJmH0s70jSt4tlYdO82CkWKTRvtgBN5NKUo8X0eOoJyRJK82xq6pnK7DlwLrBNEe1i6d+jUeqFJRUm70LQKcyNcElqBH220A1+RxzIUJb4alSaVI1LB9iIdMlnrBLomnAOe9tmBLfJoUlHi5wv4+QxNIaWTnrlAKFJs2qdDsUUezSpKkvIJp3ZJnUnlK6XAN6qFtcYOo6krU3kzSoeUtZY06ql84wAuvURLcTAcoSy4MBdJeZakZ2Is8gRKNTIb5Uc3C7JQF6UaIc10VlKerYNFvsixtahUqJXMyBylWlM1dytCh9ITCB2KIBLCDgSAsAMBRdiBAFjWemH8qc41Q9BZ5EYZxHggAFq5f3D2IO7h/z+P6RM4yf67E1c2+xw6exC4iB1nHPU4UviC1zD+DADgPvxxG0Y8bai9BnkOyhQyA878fBFnw1izTz+Fw8v8k7uYlsaD9y9i/CnzXw348RQepwd24spm1F4zD01f5Q6F8vgeXNmM01adp4ErB3EcwBwmaOJr+Bh2zfIcjh9A5ob53/dvxx/3mFUpEvCh2bDvWonHD+Ceaxh/Cqev4ZEDrfzp3Ubb5gX5BN4fwHd2AsDjw8A8XpozD518Du8P4Fv3NariPnz3DtResy/Tw8+gNo9v7QkrdPgZewz4wzWMrDer2jyAi5cAQL6EkVHTCr96O97XAeDweXx8O44v70/sZtrpH1ydx+gwAJz8K+Ds+B1PQZ4LKmfy+N0Y4ayH8tJVuxcbwroZoxgBPmRVDWAzgPswCly9aue/o6FpdhchcTDaEGeb8eENZOjleAank3hkG65sAzwz8T2bOQ8AAPA+AGDzeuAG52EAAE7+FT++A87sPhw/gEduB+YxzfyMeVykX67iY76R1DjmcHVbtL+qi1iBOBhuDj9jzdnAIwdxhfMPeK+CZmjX6U7fiOqICFy00w7uuA0ff+ZO3EE7e8B21oK4+Blwm7sXqatxMVoDDp/Hx2w+GrBGkVHHQsOcC+7DaLQ6e4T22cF92DyAq38FAGUKZ3c6Dl6db1zByUtcL1p8axQfX3VPFoEwt8A5F5iWNIerzuwfNnJZeoe22YEiYWQevz4DAC9dxT2bobAe3YmM5b2HMYf/+hCZbbYbf/wAMgN46bmwQscP4Iq1AlTuBq7hMIA5XLQWGsrdtiX94RoyWwHg+FaMXBP3D2xa8hMdHh93D+fkczi5E1csPxGRb9qYBQ/iEVZno5vZh5/BHVO4chAAMI9pqw2yij9uw5WDwDymn7Mzf/Wgmfm0uE3OsQwdivIPQoeyVpH/LHQogggIOxAAwg4ElGX4iaYvJliDHDnSIIMYDwRAl8TBsItwNbEi7mgZIg6GD2s/DoauTJrBLUi9rFqPUZmxFGjDpux2iTgY/qz5OBh6VamUarRMUp41n261n4vkTy7iYASy1uNg6FXFG/DCE0uBRlAQcTCC6YI4GJDSms+sz3rc8bC1iIPhTzfEwShmqlkR8aI1uiEOBnungiPiBRtFNK1i5xVxMPxZ63EwvOO7lE56TkgtScTBCGbNx8GwY1vw0S2SWdlcaOjKTNE6t4iDEcjaj4MhFUjNKpIr183zJOUTZSWViuWBXLluWZKIgxGEiIPRE4g4GIJICDsQAMIOBBRhBwJA2IGAIuxAAHREh+KjGXHd9OdzuPcDHKUdOhRnTk+Kf6WeZnq2vtx3P/31K92uammrDsX+NbhXobh3F9SZWEqReY2Kw4RSecmhQ4n2CwdWau13kVqJay+TOOjKZCrPbT8E6Fe6X9XSPh1KoYQAZQe//UN/O1uM4NCvQNMq/MvCo6pFwisNQlcmY6m8VOI3PP31Kz2gallh/8D+7WykLLOgdDrnMKakPEsCXh4evdJA0oU6IYUsn+SrX+kaVUtIHIz27TPNeDvDxN5m8t9F5oRM8olyztKpuD0H51vd7eG8UaVBJCXJbwPLX7/SFaqWTsXB4JRFKaey0NFnzkE7HEuQWi/naB0BPgeplyNsZQui0i4/kTgFiKzPaiVOJxKgMvMTpFF7qJdzjT2w6JVGwl+/0u2qlk77B1LBsZLwm7bt6d31Ks6o4214pcvCV7/SC6qWzvuJ5pxvWoJUcIoIdWUyU7QGDClbqvCrzzCngye00uU11le/0gOqlnbGSwsiKRdK+UxmMl2flZOQCqSusHelIFeuEzajSAVST0+mmA7FcTCMsEqX2VY//Ur3q1qEDqUnEDoUQSSEHQgAYQcCirADASDsQEDpTBwMR3ALf0WBs6LASBjOQt4wGr75WWsaBesQWHQmDoZNQ0WBWi2WSiXP1iBXdaSnV50Pz/J3uSM0UtCZOBgcDRQFujJTLGUfS4dFu5CypYaPvrfWSEFn4mC4EoMVBXpVqZSyUni0iya3CpbRSEGH4mBwiWGKAtMM/CLncFvaGZXf0Q7AGVwjWM0WJa5GL9LYDmLsbn9zBCsK9KoCFrog6zQEflaXlVRDmaLLP2gsYupFQrrS3w5cBaKZQoOQFR5FgXoqX7H1KpkiAmbuMOnjsokSV6M74TvR26Fx31SWmxLpPHYcDI4QRYFaLToVRrX29fbyGtkzhPRm4LwQbj4e+DgYHMGKArVadIXGCJKWRlUhNCagkb0B60Tf3oz75qPfecfLt2qHPlGq+cXGkwqkXlZZvpQi10lBcug57LzZEqz1Y7D00eERssHG5SdyXkiERvYEfFe6ujUWi8UMwwBw7ty5LVu2UC0ClSAwFcLi4uLCwsLTTz8t9AdrlyNHjuzbt29wcHBwcHBgYKC/v7+/v7+vry8ej8disXg87pgXXJd+qysFwWrCtzdZjweuF1x0to2CFSGkW33swOscCDvoAsKv7bD7BzQ3nUKoGyFYoywuLsbjcdqVvLfIMvTFYjFCiCuVEMKbQiKRuHHjxqFDh/r6VkLfLGgvS0tLN2/epF6h1xQoZr+63MN4PE4HAFagWCwuLCzMz88vLCwsLi5SKTNdXNBS7IvglhBz3h5gHRyPxxOJBDMCagfwrAn6vHXxw0M8HieEJBIJtp6kiXRJSXPyn4JbhWuo5/2ARCJBTYEK1X2twX+c56ujxRKJBABCSDweX1xcZHcaICxgNeFrDQkLlx34jwfUUWBDAhsPAFAjoCm0OmEHqxPeDtgnmxGYQbhMIUafY/EuC73uwjvvvPPuu+/29/e/9957/f39ly5dWrdu3Z/+9Cf6OTAwID5Xw+elS5f4z3Xr1tFP2mvvvvtuIpF4++234/E4jYBx/vx5+mkuFs6dO7d161Y4J3t2xdOrn7/rzB+FGBJWBy5XEc59BDYG+K4e3esFNjuwqQGWt8gWEexeguj+1Yl37QDAt/tZTh8/0WUEfCJdOLBdCWEHqxPXtA7PCOHN5vYTXd+DXIego4LVQ4g1eL+77x/wpoDg/uaPClYbDR1/7yH3vODqYFbGO1N4MwtuOSEjdLhx/D9Uzz4h4uk58gAAAABJRU5ErkJggg=="},7826:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,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"},534:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/motor-4-71efc3c67848e75efe564111e4e0ee1c.png"},1833:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,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"},1933:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/motor-6-b394d77d75a425854c02b87e83e09af1.png"}}]);