"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[1546],{72832:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2024/04/15/RC2 2.0.0","metadata":{"permalink":"/announcement/2024/04/15/RC2 2.0.0","source":"@site/announcement/2024-04-15-RC2 2.0.0.md","title":"Release Candidate 2 2.0.0 20240415","description":"Rotorflight Release Candidate 2 2.0.0 is ready","date":"2024-04-15T00:00:00.000Z","formattedDate":"April 15, 2024","tags":[],"readingTime":3.025,"hasTruncateMarker":false,"authors":[{"name":"Rotorflight","image_url":"https://github.com/rotorflight.png","imageURL":"https://github.com/rotorflight.png"}],"frontMatter":{"title":"Release Candidate 2 2.0.0 20240415","authors":{"name":"Rotorflight","image_url":"https://github.com/rotorflight.png","imageURL":"https://github.com/rotorflight.png"}},"nextItem":{"title":"Release Candidate 2 2.0.0 20240415","permalink":"/announcement/2024/04/15/RC2-2.0.0"}},"content":"Rotorflight Release Candidate 2 2.0.0 is ready\\n\\n## NOTE! This is the second public release of Rotorflight-2, suitable for all audiences.\\n\\n\\n:::tip Downloads \\n#### [Download The Configurator here](https://github.com/rotorflight/rotorflight-configurator/releases/tag/release/2.0.0-RC2).  \\n#### [Download Blackbox here](https://github.com/rotorflight/rotorflight-blackbox/releases/tag/release/2.0.0-RC2).  \\n#### [OpenTX/EdgeTX LUA Scripts](https://github.com/rotorflight/rotorflight-lua-scripts/releases/tag/release/2.0.0-RC2)  \\n#### [Ethos LUA Scripts](https://github.com/rotorflight/rotorflight-lua-ethos/releases/tag/release/2.0.0-RC2)\\n:::\\n\\n## Notes\\nThere is a new website www.rotorflight.org for Rotorflight 2. The old Wiki in github is deprecated, and is for Rotorflight-1 only. Rotorflight 2 is NOT backward compatible with RF1. You MUST NOT load your configuration dump from RF1 into RF2. If coming from RF1, please setup your helicopter from scratch for RF2. Follow the instructions on the website! As always, please double check your configuration on the bench before flying!\\n\\n### Support\\nThe main source of Rotorflight information and instructions is now the [Website](https://www.rotorflight.org).\\n\\nRotorflight has a strong presence on the Discord platform - [you can join us here](https://discord.gg/6QUySXdEvd). Discord is the primary location for support, questions and discussions. The developers are all active there, many pro pilots and several manufacturers of RF Flight Controllers. This is a great place to ask for advice or discuss any complicated problems or even new ideas.\\n\\nThere is also a [Rotorflight Facebook Group](https://www.facebook.com/groups/876445460825093/) for hanging out with other Rotorflight pilots. \\n\\n:::note\\n**DONATIONS ARE NOW ACCEPTED!**\\n\\n\ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \\n\\nTo our surprise, Rotorflight is finally starting to gain momentum \ud83d\ude0a\\n\\nThis is really great news, but it also means we need to start taking things a bit more seriously.\\nWhile preparing for the RF2 release, we have been also setting up the IT infrastructure, like\\nrotorflight.org domain, the website, CI, etc. This is obviously more work, but it is now\\nalso requiring money.\\n\\nIf you ever wondered what to do with the money you don\'t need to spend on \\nthe commercial FBLs, we can now help with that too!\\n\\nToday we are happy to announce that we are finally accepting donations!\\n\\nA direct link to Paypal is here:\\n\\nhttps://www.paypal.com/donate/?hosted_button_id=LLP4MT8C8TPVJ\\n\\nYou can also find the Donation link in the RC2 Configurator start page.\\n\\nNOW!! Who\'s going to be the first one? \ud83d\ude06 \ud83d\ude06 \\n\\nThank you for your support!\\n:::\\n\\n### Changes from 2.0.0-RC1\\n\\nNot many changes in this one. Just a few minor bug fixes and some defaults changed.\\nAlso, the Configurator is now translated to a few language (pending polishing).\\n\\nFrom now on, only critical bug fixes will be accepted!\\n\\n**EVERYBODY** please test the Release Candidates best to your capabilities. Your help is appreciated. \\n\\n#### Changes to the Firmware:\\n\\nIntroduce default PID D-gains\\nChange default motor protocol to PWM\\nSimplify RC frame rate calculation\\nReduce default RC smoothing level to minimum\\nAdd OpenYGE v3 protocol\\nFix Kontronik telemetry protocol\\nAdd github CI workflows\\nAdd GOV_MODE FrSky telemetry sensor\\nFix TTA headroom calculation in Passthrough mode\\nFix RPM filter error check with DD motors\\nFix scale lights terminology and documentation\\nImplement Horizon mode inverted self-leveling\\n\\n#### Changes to the Configurator:\\nAccept all MSP compatible firmware\\nExtend yaw Mixer override to -60\xb0..60\xb0\\nAdjust RPM filter defaults\\nAdd GOV_MODE to FrSky telemetry sensors\\nFix top bar battery gadget to show battery info from the FC\\nUpdate links to point to www.rotorflight.org\\nAdd a notice for Configurator development versions\\nUpdate english messages\\nUpdate translations (de,nl,fr)\\nHide untranslated locales\\nUpdate startup page\\nAdd Donation info\\nHide builtin ChangeLog\\nUpdate README.md and HOWTO.md\\nRemove old NSIS installer\\n\\n#### Changes to the Blackbox:\\nFix installer issue: force installation of all files\\nAdd friendly names for TTA debug\\nUpdate README.md and HOWTO.md\\n\\n#### Changes to LUA Scripts:\\nRemove cyclic (swash) ring\\nRemove Rescue Altitude hold\\nRemove PID mode\\nUpdate README.md\\n\\nHappy tweaking and flying!"},{"id":"/2024/04/15/RC2-2.0.0","metadata":{"permalink":"/announcement/2024/04/15/RC2-2.0.0","source":"@site/announcement/2024-04-15-RC2-2.0.0.md","title":"Release Candidate 2 2.0.0 20240415","description":"Rotorflight Release Candidate 2 2.0.0 is ready","date":"2024-04-15T00:00:00.000Z","formattedDate":"April 15, 2024","tags":[],"readingTime":3.165,"hasTruncateMarker":false,"authors":[{"name":"Rotorflight","image_url":"https://github.com/rotorflight.png","imageURL":"https://github.com/rotorflight.png"}],"frontMatter":{"title":"Release Candidate 2 2.0.0 20240415","authors":{"name":"Rotorflight","image_url":"https://github.com/rotorflight.png","imageURL":"https://github.com/rotorflight.png"}},"prevItem":{"title":"Release Candidate 2 2.0.0 20240415","permalink":"/announcement/2024/04/15/RC2 2.0.0"},"nextItem":{"title":"Release Candidate 1 2.0.0 20240329","permalink":"/announcement/2024/02/29/RC1-2.0.0"}},"content":"Rotorflight Release Candidate 2 2.0.0 is ready\\n\\n:::tip Downloads \\n#### [Download The Configurator here](https://github.com/rotorflight/rotorflight-configurator/releases/tag/release/2.0.0-RC2).  \\n#### [Download Blackbox here](https://github.com/rotorflight/rotorflight-blackbox/releases/tag/release/2.0.0-RC2).  \\n#### [OpenTX/EdgeTX LUA Scripts](https://github.com/rotorflight/rotorflight-lua-scripts/releases/tag/release/2.0.0-RC2)  \\n#### [Ethos LUA Scripts](https://github.com/rotorflight/rotorflight-lua-ethos/releases/tag/release/2.0.0-RC2)\\n:::\\n\\n## Notes\\nThere is a new website www.rotorflight.org for Rotorflight 2. The old Wiki in github is deprecated, and is for Rotorflight-1 only. Rotorflight 2 is NOT backward compatible with RF1. You MUST NOT load your configuration dump from RF1 into RF2. If coming from RF1, please setup your helicopter from scratch for RF2. Follow the instructions on the website! As always, please double check your configuration on the bench before flying!\\n\\n### Support\\nThe main source of Rotorflight information and instructions is now the [Website](https://www.rotorflight.org).\\n\\nRotorflight has a strong presence on the Discord platform - [you can join us here](https://discord.gg/6QUySXdEvd). Discord is the primary location for support, questions and discussions. The developers are all active there, many pro pilots and several manufacturers of RF Flight Controllers. This is a great place to ask for advice or discuss any complicated problems or even new ideas.\\n\\nThere is also a [Rotorflight Facebook Group](https://www.facebook.com/groups/876445460825093/) for hanging out with other Rotorflight pilots. \\n\\n### Changes from 2.0.0-RC1\\n\\nNot many changes in this one. Just a few minor bug fixes and some defaults changed.\\nAlso, the Configurator is now translated to a few language (pending polishing).\\n\\nFrom now on, only critical bug fixes will be accepted!\\n\\nEVERYBODY please test the Release Candidates best to your capabilities. Your help is appreciated.\\n\\n#### Changes to the Firmware:\\n* Introduce default PID D-gains\\n* Change default motor protocol to PWM\\n* Simplify RC frame rate calculation\\n* Reduce default RC smoothing level to minimum\\n* Add OpenYGE v3 protocol\\n* Fix Kontronik telemetry protocol\\n* Add github CI workflows\\n* Add GOV_MODE FrSky telemetry sensor\\n* Fix TTA headroom calculation in Passthrough mode\\n* Fix RPM filter error check with DD motors\\n* Fix scale lights terminology and documentation\\n* Implement Horizon mode inverted self-leveling*\\n\\n#### Changes to the Configurator:\\n* Accept all MSP compatible firmware\\n* Extend yaw Mixer override to -60\xb0..60\xb0\\n* Adjust RPM filter defaults\\n* Add GOV_MODE to FrSky telemetry sensors\\n* Fix top bar battery gadget to show battery info from the FC\\n* Update links to point to www.rotorflight.org\\n* Add a notice for Configurator development versions\\n* Update english messages\\n* Update translations (de,nl,fr)\\n* Hide untranslated locales\\n* Update startup page\\n* Add Donation info\\n* Hide builtin ChangeLog\\n* Update README.md and HOWTO.md\\n* Remove old NSIS installer\\n\\n#### Changes to the Blackbox:\\n* Fix installer issue: force installation of all files\\n* Add friendly names for TTA debug\\n* Update README.md and HOWTO.md\\n\\n#### Changes to LUA Scripts:\\n* Remove cyclic (swash) ring\\n* Remove Rescue Altitude hold\\n* Remove PID mode\\n* Update README.md\\n\\n\ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0  \\nDONATIONS ARE NOW ACCEPTED!  \\n\ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0 \ud83d\udcb0  \\n\\nTo our surprise, Rotorflight is finally starting to gain momentum \ud83d\ude0a\\n\\nThis is really great news, but it also means we need to start taking things a bit more seriously.\\nWhile preparing for the RF2 release, we have been also setting up the IT infrastructure, like\\nrotorflight.org domain, the website, CI, etc. This is obviously more work, but it is now\\nalso requiring money.\\n\\nIf you ever wondered what to do with the money you don\'t need to spend on \\nthe commercial FBLs, we can now help with that too!\\n\\nToday we are happy to announce that we are finally accepting donations!\\n\\nA direct link to Paypal is here: [Rotorflight PayPal](https://www.paypal.com/donate/?hosted_button_id=LLP4MT8C8TPVJ)\\n\\nYou can also find the Donation link in the RC2 Configurator start page.\\n\\nNOW!! Who\'s going to be the first one? \ud83d\ude06 \ud83d\ude06 \\n\\nThank you for your support!"},{"id":"/2024/02/29/RC1-2.0.0","metadata":{"permalink":"/announcement/2024/02/29/RC1-2.0.0","source":"@site/announcement/2024-02-29-RC1-2.0.0.md","title":"Release Candidate 1 2.0.0 20240329","description":"Rotorflight Release Candidate 1 2.0.0 is ready","date":"2024-02-29T00:00:00.000Z","formattedDate":"February 29, 2024","tags":[],"readingTime":1.76,"hasTruncateMarker":false,"authors":[{"name":"Rotorflight","image_url":"https://github.com/rotorflight.png","imageURL":"https://github.com/rotorflight.png"}],"frontMatter":{"title":"Release Candidate 1 2.0.0 20240329","authors":{"name":"Rotorflight","image_url":"https://github.com/rotorflight.png","imageURL":"https://github.com/rotorflight.png"}},"prevItem":{"title":"Release Candidate 2 2.0.0 20240415","permalink":"/announcement/2024/04/15/RC2-2.0.0"},"nextItem":{"title":"snapshot 2.0.0-20240218","permalink":"/announcement/2024/02/18/snapshot 2.0.0"}},"content":"Rotorflight Release Candidate 1 2.0.0 is ready\\n\\n## NOTE! This is the first public release of Rotorflight-2, suitable for all audiences.\\n\\nTwo years of hard work, blood and tears, and lost hair has gone into this release. Big thanks to everybody who have helped along the way!\\n\\n:::tip Downloads \\n#### [Download The Configurator here](https://github.com/rotorflight/rotorflight-configurator/releases/tag/release/2.0.0-RC1).  \\n#### [Download Blackbox here](https://github.com/rotorflight/rotorflight-blackbox/releases/tag/release/2.0.0-RC1).  \\n#### [OpenTX/EdgeTX LUA Scripts](https://github.com/rotorflight/rotorflight-lua-scripts/releases/tag/release/2.0.0-RC1)  \\n#### [Ethos LUA Scripts](https://github.com/rotorflight/rotorflight-lua-ethos/releases/tag/release/2.0.0-RC1)\\n:::\\n\\n## Notes\\nThere is a new website www.rotorflight.org for Rotorflight 2. The old Wiki in github is deprecated, and is for Rotorflight-1 only. Rotorflight 2 is NOT backward compatible with RF1. You MUST NOT load your configuration dump from RF1 into RF2. If coming from RF1, please setup your helicopter from scratch for RF2. Follow the instructions on the website! As always, please double check your configuration on the bench before flying!\\n\\n### Support\\nThe main source of Rotorflight information and instructions is now the [Website](https://www.rotorflight.org).\\n\\nRotorflight has a strong presence on the Discord platform - [you can join us here](https://discord.gg/6QUySXdEvd). Discord is the primary location for support, questions and discussions. The developers are all active there, many pro pilots and several manufacturers of RF Flight Controllers. This is a great place to ask for advice or discuss any complicated problems or even new ideas.\\n\\nThere is also a [Rotorflight Facebook Group](https://www.facebook.com/groups/876445460825093/) for hanging out with other Rotorflight pilots. \\n\\n### Changes from 2.0.0-20240218\\n\\n#### Changes to the Firmware:\\n* Refactor MSP_SERVO_CONFIGURATIONS\\n* Use internal pull-up on FREQ input\\n* Use falling edge trigger on FREQ input\\n* Change default yaw precomp parameters\\n* Change default governor master gain\\n* Change default rates response time to 0 (no limit)\\n* Change default dynamic notch count to 4\\n\\n#### Changes to the Configurator:\\n* Fix Zoom function\\n* Relax servo rate limits\\n* Refactor MSP_SERVO_CONFIGURATIONS\\n* Change default channel order to AECR1T23\\n* Add vendor names in receiver protocols\\n* Many fixes in labels and help texts\\n* Update locales for translation\\n\\n#### Changes to the Blackbox:\\n* NONE\\n\\n#### Changes to LUA Scripts:\\n* Added Servos page\\n* Ethos: added support for dark and normal mode"},{"id":"/2024/02/18/snapshot 2.0.0","metadata":{"permalink":"/announcement/2024/02/18/snapshot 2.0.0","source":"@site/announcement/2024-02-18-snapshot 2.0.0.md","title":"snapshot 2.0.0-20240218","description":"Rotorflight snapshot 2.0.0-20240218 is ready","date":"2024-02-18T00:00:00.000Z","formattedDate":"February 18, 2024","tags":[],"readingTime":2.29,"hasTruncateMarker":false,"authors":[{"name":"Rotorflight","image_url":"https://github.com/rotorflight.png","imageURL":"https://github.com/rotorflight.png"}],"frontMatter":{"title":"snapshot 2.0.0-20240218","authors":{"name":"Rotorflight","image_url":"https://github.com/rotorflight.png","imageURL":"https://github.com/rotorflight.png"}},"prevItem":{"title":"Release Candidate 1 2.0.0 20240329","permalink":"/announcement/2024/02/29/RC1-2.0.0"},"nextItem":{"title":"snapshot 2.0.0-20240128","permalink":"/announcement/2024/01/28/snapshot 2.0.0"}},"content":"Rotorflight snapshot 2.0.0-20240218 is ready\\n\\n If you wish to become involved in testing these snapshots please contact us on the [Discord](https://discord.gg/6QUySXdEvd)\\n\\n:::danger\\nThis snapshot is not suitable for end-users. It is intended for beta-testers. Please realize that this software is under heavy development and as such there may be bugs or unintended control issues. Please test with care.\\n:::\\n\\n\\n:::tip Downloads \\n#### [Download The Configurator here](https://github.com/rotorflight/rotorflight-configurator/releases/tag/snapshot%2F2.0.0-20240218).  \\n#### [Download Blackbox here](https://github.com/rotorflight/rotorflight-blackbox/releases/tag/snapshot%2F2.0.0-20240218).  \\n#### [OpenTX/EdgeTX LUA Scripts](https://github.com/rotorflight/rotorflight-lua-scripts/releases/tag/snapshot%2F2.0.0-20240218)  \\n#### [Ethos LUA Scripts](https://github.com/rotorflight/rotorflight-lua-ethos/releases/tag/snapshot%2F2.0.0-20240218)\\n:::\\n\\nPlease also read the [Snapshots Wiki page](https://github.com/rotorflight/rotorflight/wiki/Snapshots) for general information about snapshots.\\n\\n\\n### Changes from 2.0.0-20240128\\n\\n#### Changes to the Firmware:\\n\\n* More CRSF reuse options\\n* Fix CRSF headspeed reuse with EdgeTx >= 2.9.3\\n* Fix governor autorotation timeout limits\\n* Fix battery cell count detection with 10S and 12S\\n* Add OpenYGE ESC telemetry\\n* Add lowpass filter to governor feedforward\\n* Refactor MSP_BATTERY_CONFIG\\n* Improved defaults\\n  * Stick deadband and deflection\\n  * Rescue gains and collective levels\\n  * Governor filter cutoffs\\n  * Cross-coupling gain\\n  * PID error limits\\n\\n#### Changes to the Configurator:\\n\\n* Add OpenYGE ESC protocol\\n* Add Battery Cell Count to Power tag\\n* Add Governor Precomp Bandwidth to Motors tab\\n* Relax servo parameter checks\\n* Increase max yaw to 60\xb0 in Mixer\\n* Improved code in Status page\\n* Refactor MSP_BATTERY_CONFIG\\n\\n#### Changes to the BlackBox:\\n\\n* Add friendly names for RESCUE_ALTHOLD debug\\n\\n#### Changes to the LUA Scripts:\\n\\n* Aligned with the firmware changes\\n\\n\\n### A few notes about the 20240218 snapshot\\n\\n#### CRSF Reuse\\n\\nEdgeTx 2.9.3 broke the CRSF sensor reuse by changing the sensor scaling.\\nThe CRSF reuse has now been refactored for better support for different EdgeTx versions.\\n\\nThere are now more sensors that can be reused. The reusable sensors in the GPS frame are altitude, heading, ground speed, and satellite count.\\n\\nThe reuse options are now selected based on the original sensor scaling, so that the reused value can be expressed correctly.\\n\\nFor most reuse options, the \\"ratio\\" in EdgeTx is a variation of 255.\\nE.g. 25.5, 255, 2550, 25500. (including RPM!)\\n\\nThe voltage sensors use 20 or 200.\\n\\n#### OpenYGE ESC Telemetry\\n\\nThere is now telemetry support for YGE ESCs (thanks Bob!). This is a brand new protocol implemented by YGE especially for Rotorflight. It will be available in the next ESC firmware update from YGE.\\n\\n#### Default values in the Firmware\\n\\nMany defaults have been improved. Please note that you won\'t get any new defaults if you load a dump all from the previous snapshot. Probably better to use a diff all, which will apply only the parameter values that are not on default values.\\n\\nNext one will be a Release Candidate, so please report any issues promptly!\\n\\nHappy tuning (and maybe even flying)!"},{"id":"/2024/01/28/snapshot 2.0.0","metadata":{"permalink":"/announcement/2024/01/28/snapshot 2.0.0","source":"@site/announcement/2024-01-28-snapshot 2.0.0.md","title":"snapshot 2.0.0-20240128","description":"Rotorflight snapshot 2.0.0-20240128 is ready","date":"2024-01-28T00:00:00.000Z","formattedDate":"January 28, 2024","tags":[],"readingTime":2.51,"hasTruncateMarker":false,"authors":[{"name":"Rotorflight","image_url":"https://github.com/rotorflight.png","imageURL":"https://github.com/rotorflight.png"}],"frontMatter":{"title":"snapshot 2.0.0-20240128","authors":{"name":"Rotorflight","image_url":"https://github.com/rotorflight.png","imageURL":"https://github.com/rotorflight.png"}},"prevItem":{"title":"snapshot 2.0.0-20240218","permalink":"/announcement/2024/02/18/snapshot 2.0.0"},"nextItem":{"title":"snapshot 2.0.0-20240105","permalink":"/announcement/2024/01/05/snapshot 2.0.0"}},"content":"Rotorflight snapshot 2.0.0-20240128 is ready\\n\\n If you wish to become involved in testing these snapshots please contact us on the [Discord](https://discord.gg/6QUySXdEvd)\\n\\n:::danger\\nThis snapshot is not suitable for end-users. It is intended for beta-testers. Please realize that this software is under heavy development and as such there may be bugs or unintended control issues. Please test with care.\\n:::\\n\\n\\n:::tip Downloads \\n#### [Download The Configurator here](https://github.com/rotorflight/rotorflight-configurator/releases/tag/snapshot%2F2.0.0-20240128).  \\n#### [Download Blackbox here](https://github.com/rotorflight/rotorflight-blackbox/releases/tag/snapshot%2F2.0.0-20240128).  \\n#### [OpenTX/EdgeTX LUA Scripts](https://github.com/rotorflight/rotorflight-lua-scripts/releases/tag/snapshot%2F2.0.0-20240128)  \\n#### [Ethos LUA Scripts](https://github.com/rotorflight/rotorflight-lua-ethos/releases/tag/snapshot%2F2.0.0-20240128)\\n:::\\n\\nPlease also read the [Snapshots Wiki page](https://github.com/rotorflight/rotorflight/wiki/Snapshots) for general information about snapshots.\\n\\n\\nChanges from 2.0.0-20240105\\n\\n* Fix tail trim rounding\\n* Fix yaw direction in Rates tab\\n* Refactor config handling in Power tab\\n* Show Charge level in Power tab\\n* Show Realtime Load on the bottom bar\\n* Add Yaw precomp (lowpass filter) cutoff\\n* Move RPM Sensor switch to Motors tab\\n* Add GOVERNOR to ARMING Disabled flags\\n* Update zh_CN locale\\n* Add TTA Debug mode\\n* Add CMS feature flag\\n* Add Setpoint Response time and acceleration on Rates tab\\n\\n\\n### A few notes about the 20240128 snapshot\\n\\n#### New ARMING disable flags\\nArming is now disabled if there is no fast RPM signal available, and the governor or/and RPM filter is enabled.\\nAlso, the governor mode 2 requires battery voltage. Arming is disabled if it is not available.\\n\\n#### Realtime Load\\nThere is a new Load figure on the bottom bar in the Configurator.\\nIt is showing the peak \\"real-time load\\" in the FC.\\nThe realtime load is the percentage of CPU time used in real-time tasks after every gyro sample.\\nIt must stay below 70% or so for the FC to work at all.\\n\\n#### Blackbox logging is the single most CPU intensive task in the FC.\\nOnce enabled, it can easily double the load.\\nPlease check that the FC stays below 70% with logging enabled!\\n\\n#### CRSF Voltage telemetry\\nThere are new options for voltage telemetry in the CRSF reuse.\\nPlease set the ratio in EdgeTx to 20.\\n\\n#### Setpoint Response time\\nThis per-axis parameter replaces the old \\"Setpoint Smoothness\\".\\nIt does exactly the same thing, but now has a physically meaningful value.\\nIt represents the speed the setpoint will converge to the commanded value in ms.\\nIt is important not to set much lower than the heli\'s natural reaction time.\\nThe default is 20ms for cyclic and 15ms for tail. Most helis simply can\'t move faster than this.\\n\\nSetting this too low will cause unnecessary I-term windup and other PID issues.\\n\\nValues higher than the heli\'s reaction time will simply slow it down even more.\\nThis is especially neat for scale flying, or just for the pilots preference.\\n\\n#### CMS\\nCMS is now disabled by default.\\n\\nThere is a Feature flag for enabling it. This will also enable the necessary stick commands - BE AWARE!\\n\\n#### Servo limits\\nServo limits have been extended to 70deg, as requested.\\nAs before, they need to be adjusted if the default value is not suitable for the heli."},{"id":"/2024/01/05/snapshot 2.0.0","metadata":{"permalink":"/announcement/2024/01/05/snapshot 2.0.0","source":"@site/announcement/2024-01-05-snapshot 2.0.0.md","title":"snapshot 2.0.0-20240105","description":"Rotorflight snapshot 2.0.0-20240105 is ready","date":"2024-01-05T00:00:00.000Z","formattedDate":"January 5, 2024","tags":[],"readingTime":1.055,"hasTruncateMarker":false,"authors":[{"name":"Rotorflight","image_url":"https://github.com/rotorflight.png","imageURL":"https://github.com/rotorflight.png"}],"frontMatter":{"title":"snapshot 2.0.0-20240105","authors":{"name":"Rotorflight","image_url":"https://github.com/rotorflight.png","imageURL":"https://github.com/rotorflight.png"}},"prevItem":{"title":"snapshot 2.0.0-20240128","permalink":"/announcement/2024/01/28/snapshot 2.0.0"},"nextItem":{"title":"snapshot 2.0.0-20231127","permalink":"/announcement/2023/11/27/snapshot 2.0.0"}},"content":"Rotorflight snapshot 2.0.0-20240105 is ready\\n\\n If you wish to become involved in testing these snapshots please contact us on the [Discord](https://discord.gg/6QUySXdEvd)\\n\\n:::danger\\nThis snapshot is not suitable for end-users. It is intended for beta-testers. Please realize that this software is under heavy development and as such there may be bugs or unintended control issues. Please test with care.\\n:::\\n\\n\\n:::tip Downloads \\n#### [Download The Configurator here](https://github.com/rotorflight/rotorflight-configurator/releases/tag/snapshot%2F2.0.0-20240105).  \\n#### [Download Blackbox here](https://github.com/rotorflight/rotorflight-blackbox/releases/tag/snapshot%2F2.0.0-20231127).  \\n#### [OpenTX/EdgeTX LUA Scripts](https://github.com/rotorflight/rotorflight-lua-scripts/releases/tag/snapshot%2F2.0.0-20240105)  \\n#### [Ethos LUA Scripts](https://github.com/rotorflight/rotorflight-lua-ethos/releases/tag/snapshot%2F2.0.0-20240105)\\n:::\\n\\nPlease also read the [Snapshots Wiki page](https://github.com/rotorflight/rotorflight/wiki/Snapshots) for general information about snapshots.\\n\\n\\nChanges from 2.0.0-20231127\\n\\n* Change default PID mode to 3\\n* Change swashplate trims to RPC\\n* Change tail trim value limits\\n* Refactor Voltage and Current sensors\\n* Update Dynamic Notch debug names\\n* Add temperature and voltage logging to Blackbox\\n* Fix Cancel button in Enable Arming dialog\\n* Fix dark colors in a few places\\n* Show positive yaw limits with both CW & CCW\\n* Move Gyro and Beepers tabs lower\\n* Add Collective geometry correction\\n* Add dynamic Wiki links\\n* Add labels to Mixer override sliders\\n* Fix blade pitch limit maximum\\n* Fix value limits enforcement in number fields\\n* Hide Rescue Alt Hold\\n* Hide OSD Feature\\n* Update locales for translation"},{"id":"/2023/11/27/snapshot 2.0.0","metadata":{"permalink":"/announcement/2023/11/27/snapshot 2.0.0","source":"@site/announcement/2023-11-27-snapshot 2.0.0.md","title":"snapshot 2.0.0-20231127","description":"Rotorflight snapshot 2.0.0-20231127 is ready","date":"2023-11-27T00:00:00.000Z","formattedDate":"November 27, 2023","tags":[],"readingTime":0.965,"hasTruncateMarker":false,"authors":[{"name":"Rotorflight","image_url":"https://github.com/rotorflight.png","imageURL":"https://github.com/rotorflight.png"}],"frontMatter":{"title":"snapshot 2.0.0-20231127","authors":{"name":"Rotorflight","image_url":"https://github.com/rotorflight.png","imageURL":"https://github.com/rotorflight.png"}},"prevItem":{"title":"snapshot 2.0.0-20240105","permalink":"/announcement/2024/01/05/snapshot 2.0.0"},"nextItem":{"title":"snapshot 2.0.0-20231018","permalink":"/announcement/2023/10/18/snapshot 2.0.0"}},"content":"Rotorflight snapshot 2.0.0-20231127 is ready\\n\\n If you wish to become involved in testing these snapshots please contact us on the [Discord](https://discord.gg/6QUySXdEvd)\\n\\n:::danger\\nThis snapshot is not suitable for end-users. It is intended for beta-testers. Please realize that this software is under heavy development and as such there may be bugs or unintended control issues. Please test with care.\\n:::\\n\\n:::note\\nThis snapshot is a HotFix for the [20231118](https://github.com/rotorflight/rotorflight/wiki/News#rotorflight-snapshot-200-20231118-is-ready) snapshot. There are no new features.\\n:::\\n\\n:::tip Downloads \\n#### [Download The Configurator here](https://github.com/rotorflight/rotorflight-configurator/releases/tag/snapshot%2F2.0.0-20231127).  \\n#### [Download Blackbox here](https://github.com/rotorflight/rotorflight-blackbox/releases/tag/snapshot%2F2.0.0-20231127).  \\n#### [OpenTX/EdgeTX LUA Scripts](https://github.com/rotorflight/rotorflight-lua-scripts/releases/tag/snapshot%2F2.0.0-20231118)  \\n#### [Ethos LUA Scripts](https://github.com/rotorflight/rotorflight-lua-ethos/releases/tag/snapshot%2F2.0.0-20231118)\\n:::\\n\\nPlease also read the [Snapshots Wiki page](https://github.com/rotorflight/rotorflight/wiki/Snapshots) for general information about snapshots.\\n\\nChanges to the Firmware:\\n* Governor throttle jump fixed\\n* More BB fields enabled by default\\n\\nChanges to the Configurator:\\n* Fix MSP_ESC_SENSOR_CONFIG (hw4 parameter corruption)\\n* Fix Adjustment slider limits on double-click\\n* Fix Arming box size limits\\n* Add limits to Throttle values in Receiver tab\\n* Use reference design port names in Serial port config\\n\\nChanges to the BlackBox:\\n* Show frequency with one decimal with Shift-Mouse\\n* Update DYN_NOTCH debug fields\\n* Fix RC Command units\\n\\nChanges to LUA Scripts:\\n* N/A"},{"id":"/2023/10/18/snapshot 2.0.0","metadata":{"permalink":"/announcement/2023/10/18/snapshot 2.0.0","source":"@site/announcement/2023-10-18-snapshot 2.0.0.md","title":"snapshot 2.0.0-20231018","description":"This snapshot is not suitable for end-users. It is intended for beta-testers. Please realise that this software is under heavy development and as such there may be bugs or unintended control issues. Please test with care","date":"2023-10-18T00:00:00.000Z","formattedDate":"October 18, 2023","tags":[],"readingTime":1.65,"hasTruncateMarker":false,"authors":[{"name":"Rotorflight","image_url":"https://github.com/rotorflight.png","imageURL":"https://github.com/rotorflight.png"}],"frontMatter":{"title":"snapshot 2.0.0-20231018","authors":{"name":"Rotorflight","image_url":"https://github.com/rotorflight.png","imageURL":"https://github.com/rotorflight.png"}},"prevItem":{"title":"snapshot 2.0.0-20231127","permalink":"/announcement/2023/11/27/snapshot 2.0.0"},"nextItem":{"title":"snapshot 2.0.0-20230912","permalink":"/announcement/2023/09/12/snapshot 2.0.0"}},"content":":::danger\\n This snapshot is not suitable for end-users. It is intended for beta-testers. Please realise that this software is under heavy development and as such there may be bugs or unintended control issues. Please test with care\\n\\n If you wish to become involved in testing these snapshots please contact us on the [Discord](https://discord.gg/6QUySXdEvd) \\n:::\\n\\nRotorflight snapshot 2.0.0-20231018 is ready\\nNOTE! This snapshot is not suitable for end-users. It is intended for beta-testers.\\n\\n:::tip Downloads \\n#### [Download The Configurator here](https://github.com/rotorflight/rotorflight-configurator/releases/tag/snapshot%2F2.0.0-20231018).  \\n#### [Download Blackbox here](https://github.com/rotorflight/rotorflight-blackbox/releases/tag/snapshot%2F2.0.0-20230912).  \\n#### [OpenTX/EdgeTX LUA Scripts](https://github.com/rotorflight/rotorflight-lua-scripts/releases/tag/snapshot%2F2.0.0-20231019)  \\n#### [Ethos LUA Scripts](https://github.com/rotorflight/rotorflight-lua-ethos/releases/tag/snapshot%2F2.0.0-20231019)\\n:::\\n\\nPlease also read the Snapshots Wiki page for general information about snapshots.\\n\\nChanges to the Firmware:\\n* RX subsystem refactored\\n* RX failsafe refactored\\n* Dynamic Notch filter adapted for helis\\n* ESC telemetry implemented for various ESCs  \\n  - Hobbywing Platinum V4  \\n  - Hobbywing Platinum V5  \\n  - Hobbywing FlyFun V5  \\n  - Scorpion UNC  \\n  - Kontronik  \\n  - OMP Hobby  \\n  - ZTW Skyhawk  \\n  - APD Pro/HV  \\n* Servo speed calculation fixed to use ms/60\xb0\\n* PID Mode 3 fixed to use P-term on error\\n* PT1 filter cutoff calculation fixed\\n* MSP over FrSky telemetry speed improved\\n* RPM calculation accuracy improved\\n* More CRSF FM reuse options added\\n\\nChanges to the Configurator:\\n* Receiver tab refactored to match firmware\\n* Receiver telemetry added\\n* Rates tab fixed to use new MSP messages\\n* Status tab fixed to show correct channel values\\n* Failsafe refactored - advanced failsafe disabled\\n* ESC telemetry added to Motors tab\\n* Governor max throttle added to Profiles\\n* Governor feature handling simplified\\n* RPM filter feature handling simplified\\n* Dynamic Notch filter added to Gyro tab\\n* Localization improved - most texts are translated\\n* All locales updated with new english messages\\n\\nChanges to the LUA Scripts:\\n* Aligned MSP messages with firmware 20231018\\n* Added MSP API version check\\n* Added dynamic notch filters to the Filters page\\n* Added LUA version to screen title\\n* Removed Failsafe page\\n* Cleaned up code"},{"id":"/2023/09/12/snapshot 2.0.0","metadata":{"permalink":"/announcement/2023/09/12/snapshot 2.0.0","source":"@site/announcement/2023-09-12-snapshot 2.0.0.md","title":"snapshot 2.0.0-20230912","description":"Rotorflight snapshot 2.0.0-20230912 is ready","date":"2023-09-12T00:00:00.000Z","formattedDate":"September 12, 2023","tags":[],"readingTime":1.45,"hasTruncateMarker":false,"authors":[{"name":"Rotorflight","image_url":"https://github.com/rotorflight.png","imageURL":"https://github.com/rotorflight.png"}],"frontMatter":{"title":"snapshot 2.0.0-20230912","authors":{"name":"Rotorflight","image_url":"https://github.com/rotorflight.png","imageURL":"https://github.com/rotorflight.png"}},"prevItem":{"title":"snapshot 2.0.0-20231018","permalink":"/announcement/2023/10/18/snapshot 2.0.0"}},"content":"Rotorflight snapshot 2.0.0-20230912 is ready\\nNOTE! This snapshot is not suitable for end-users. It is intended for beta-testers.\\n\\n* The Configurator is available to download [here](https://github.com/rotorflight/rotorflight-configurator/releases/tag/snapshot%2F2.0.0-20230912).\\n* The Blackbox is available to download [here](https://github.com/rotorflight/rotorflight-blackbox/releases/tag/snapshot%2F2.0.0-20230912).\\n* The LUA scripts is available to download [here](https://github.com/rotorflight/rotorflight-lua-scripts/releases/tag/snapshot%2F2.0.0-20230912).\\n\\nPlease also read the Snapshots Wiki page for general information about snapshots.\\n\\nChanges to the Firmware:\\n* Governor gov_max_throttle parameter added\\n* Governor tracking_speed fixed in passthrough mode\\n* RPM filter fixed if only main rotor RPM available\\n* RPM filter update fixed for lower CPU load\\n* Cyclic Cross-Coupling refactored\\n* Collective-to-yaw precomp not used during spoolup\\n* TTA Collective correction refactored\\n* TTA not used during spoolup\\n* H7 TIMUP configuration bug fixed\\n* BlackBox multi-file logging fixed (works on W25N01G too)\\n* BlackBox erase refactored - works also while logging\\n* Boost and Offset terms added to BlackBox\\n* PID Test Mode 3 added for HSI testing\\n* Tail center trim scaling changed\\n* Tail motor thrust law changed to linear\\n* Many new parameters added to MSP\\n* Many new parameters added to Adjustment Functions\\n\\nChanges to the Configurator:\\n* Chinese translation added\\n* MSP aligned with the firmware\\n* PID Test Mode 3 added to Profiles\\n* Boost gains and cutoffs added to Profiles\\n* Offset gains and limits added to Profiles\\n* Cyclic Cross-coupling compensation added to Profiles\\n* Governor max throttle added to Profiles\\n* Tail Center Trim added to Mixer\\n\\nChanges to the Blackbox:\\n* Fix a drag&drop bug\\n* Fix adjustment labels\\n* Fix RPM_FILTER debug mode labels\\n* Fix collective setpoint scaling\\n* Changes to the LUA Scripts:\\n\\nAligned MSP messages with firmware 20230912\\nAdded Boost cutoffs\\nAdded Offset gains\\nAdded Cyclic Cross-Coupling\\nAdded Governor Max Throttle"}]}')}}]);