(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66aeef54"],{"433a":function(n,t,e){"use strict";e("76c6")},"76c6":function(n,t,e){},a715:function(n,t,e){"use strict";e.r(t);var o=e("7a23");const s={class:"docs-wrapper"},i=Object(o["g"])("h1",{id:"css-animation-chang-yong-dong-hua",tabindex:"-1"},[Object(o["g"])("a",{class:"header-anchor",href:"#css-animation-chang-yong-dong-hua"},"#"),Object(o["i"])(" Css Animation 常用动画")],-1),a=Object(o["g"])("h2",{id:"x-y-z-zhou-xuan-zhuan-dong-hua",tabindex:"-1"},[Object(o["g"])("a",{class:"header-anchor",href:"#x-y-z-zhou-xuan-zhuan-dong-hua"},"#"),Object(o["i"])(" X Y Z 轴旋转动画")],-1),c=Object(o["g"])("p",null,"rotateX：定义沿着 X 轴的 3D 旋转。",-1),r=Object(o["g"])("p",null,"rotateY：定义沿着 Y 轴的 3D 旋转。",-1),l=Object(o["g"])("p",null,"rotateZ：定义沿着 Z 轴的 3D 旋转。",-1),m=Object(o["g"])("pre",null,[Object(o["i"])("      "),Object(o["g"])("code",null,"<div class='demo__css-animation-1 demo-flex'>\n  <div :class='className'></div>\n  <button class='demo-btn' @click='switchShow'>{{ isShow ? '暂停': '播放' }}</button>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        isShow: true,\n        className: ''\n      }\n    },\n    methods: {\n      switchShow: function() {\n        this.isShow = !this.isShow\n        let str = 'demo__css-animation-1--'\n        this.className = str + (this.isShow ? 'play' : 'stop')\n      }\n    }\n  }\n<\/script>\n\n<style>\n  .demo__css-animation-1 > div {\n    width: 100PX;\n    height: 100PX;\n    background-color: #ededed;\n    animation: rotate1 3s linear infinite; /* 动画名称 时长 动画速度 动画播放次数 */\n  }\n  @keyframes rotate1 {\n    from {\n      /* transform: rotateX(0deg); */\n      /* transform: rotateY(0deg); */\n\n      transform: rotateZ(0deg);\n    }\n    to {\n      /* transform: rotateX(360deg); */\n      /* transform: rotateY(360deg); */\n\n      transform: rotateZ(360deg);\n    }\n  }\n\n  /* 暂停播放动画 */\n  .demo__css-animation-1--stop {\n    animation-play-state: paused !important; \n  }\n\n  /* 继续播放动画 */\n  .demo__css-animation-1--play {\n    animation-play-state: running !important;\n  }\n</style>\n"),Object(o["i"])("\n    ")],-1),d=Object(o["g"])("h2",{id:"dan-chu-shan-shuo-dan-qi",tabindex:"-1"},[Object(o["g"])("a",{class:"header-anchor",href:"#dan-chu-shan-shuo-dan-qi"},"#"),Object(o["i"])(" 淡出/闪烁/弹起")],-1),h=Object(o["g"])("pre",null,[Object(o["i"])("      "),Object(o["g"])("code",null,"<div class='demo-flex'>\n  <div :class='className'>淡入/淡出</div>\n  <button @click='switchShow' class='demo-btn'>{{ isShow ? '淡出' : '淡入'}}</button>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        isShow: true,\n        className: ''\n      }\n    },\n    methods: {\n      switchShow: function() {\n        this.isShow = !this.isShow\n        let str = 'demo__css-animation-2__'\n        this.className = str + (this.isShow ? 'fead-in' : 'fead-out')\n      }\n    }\n  }\n<\/script>\n\n<style>\n.demo__css-animation-2__fead-in {\n  animation: feadin 0.5s forwards; /* 动画名称 时长 保持最后一帧的状态*/\n}\n\n@keyframes feadin {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.demo__css-animation-2__fead-out {\n  animation: feadout 0.5s forwards;\n}\n\n@keyframes feadout {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n</style>\n"),Object(o["i"])("\n    ")],-1),b=Object(o["g"])("pre",null,[Object(o["i"])("      "),Object(o["g"])("code",null,"<div class='demo__css-animation-2__flash'></div>\n\n<style>\n.demo__css-animation-2__flash {\n  width: 100PX;\n  height: 100PX;\n  background-color: #ededed;\n  text-align: center;\n  line-height: 100PX;\n  border-radius: 50%;\n  animation: flash 1s linear infinite;\n}\n\n@keyframes flash {\n  0% {\n    opacity: 0.3;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.3;\n  }\n}\n\n</style>\n"),Object(o["i"])("\n    ")],-1),u=Object(o["g"])("pre",null,[Object(o["i"])("      "),Object(o["g"])("code",null,"<div class='demo-flex'>\n  <div :class='[\"demo__css-animation-5\", className]'></div>\n  <button @click='switchShow' class='demo-btn'>{{ isShow ? '弹出' : '弹起'}}</button>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        isShow: true,\n        className: ''\n      }\n    },\n    methods: {\n      switchShow: function() {\n        this.isShow = !this.isShow\n        let str = 'demo__css-animation-5__'\n        this.className = str + (this.isShow ? 'barrage-in' : 'barrage-out')\n      }\n    }\n  }\n<\/script>\n\n<style>\n.demo__css-animation-5 {\n  width: 200PX;\n  height: 100PX;\n  background-color: #ededed;\n}\n\n.demo__css-animation-5__barrage-in {\n  animation: bar-scale-in 0.5s ease forwards;\n  opacity: 0;\n  transform-origin: bottom left;\n  transform: scale(0.1);\n}\n@keyframes bar-scale-in {\n  50% {\n    opacity: 0.5;\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n.demo__css-animation-5__barrage-out {\n  animation: bar-scale-out 0.5s ease forwards;\n  opacity: 1;\n  transform-origin: bottom left;\n  transform: scale(1);\n}\n@keyframes bar-scale-out {\n  0% {\n    opacity: 0.8;\n    transform: scale(0.8);\n  }\n  100% {\n    transform: scale(0);\n    opacity: 0.2;\n  }\n}\n"),Object(o["i"])("\n    ")],-1),f=Object(o["g"])("h2",{id:"shang-xia-zuo-you-hua-dong",tabindex:"-1"},[Object(o["g"])("a",{class:"header-anchor",href:"#shang-xia-zuo-you-hua-dong"},"#"),Object(o["i"])(" 上/下/左/右 滑动")],-1),j=Object(o["g"])("p",null,"translateX：为 左右方向、从左到右 0% - 100%",-1),w=Object(o["g"])("p",null,"translateY：为 上下方向、从上到下 0% - 100%",-1),_=Object(o["g"])("pre",null,[Object(o["i"])("      "),Object(o["g"])("code",null,"<div>\n  <button style='margin-left: 0;' @click='switchShow' class='demo-btn'>{{ isShow ? '右滑' : '左滑'}}</button>\n  <div :class='[\"demo__css-animation-3\", className]'></div>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        isShow: true,\n        className: ''\n      }\n    },\n    methods: {\n      switchShow: function() {\n        this.isShow = !this.isShow\n        let str = 'demo__css-animation-3__slide-'\n        this.className = str + (this.isShow ? 'left' : 'right')\n      }\n    }\n  }\n<\/script>\n\n<style>\n.demo__css-animation-3 {\n  width: 100PX;\n  height: 100PX;\n  background-color: #ededed;\n  margin-top: 20PX;\n}\n\n.demo__css-animation-3__slide-right {\n  animation: slideright 1s forwards;\n}\n@keyframes slideright {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(200%);\n  }\n}\n\n.demo__css-animation-3__slide-left {\n  animation: slideleft 1s forwards;\n}\n@keyframes slideleft {\n  from {\n    transform: translateX(200%);\n  }\n  to {\n    transform: translateX(0%);\n  }\n}\n</style>\n"),Object(o["i"])("\n    ")],-1),O=Object(o["g"])("h2",{id:"jin-ru-tui-chu-suo-fang",tabindex:"-1"},[Object(o["g"])("a",{class:"header-anchor",href:"#jin-ru-tui-chu-suo-fang"},"#"),Object(o["i"])(" 进入/退出 缩放")],-1),g=Object(o["g"])("pre",null,[Object(o["i"])("      "),Object(o["g"])("code",null,"<div class='demo-flex'>\n  <div :class='[\"demo__css-animation-4\", className]'></div>\n  <button @click='switchShow' class='demo-btn'>{{ isShow ? '退出' : '进入'}}</button>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        isShow: true,\n        className: ''\n      }\n    },\n    methods: {\n      switchShow: function() {\n        this.isShow = !this.isShow\n        let str = 'demo__css-animation-4__'\n        this.className = str + (this.isShow ? 'zoom-in' : 'zoom-out')\n      }\n    }\n  }\n<\/script>\n\n<style>\n.demo__css-animation-4 {\n  width: 100PX;\n  height: 100PX;\n  border-radius: 50%;\n  background-color: #ededed;\n}\n\n.demo__css-animation-4__zoom-in {\n  animation: zoomin 1s forwards;\n}\n@keyframes zoomin {\n  from {\n    transform: scale(0.1);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n.demo__css-animation-4__zoom-out {\n  animation: zoomout 1s forwards;\n}\n@keyframes zoomout {\n  from {\n    transform: scale(1);\n    opacity: 1;\n  }\n  to {\n    transform: scale(0.1);\n    opacity: 0;\n  }\n}\n</style>\n"),Object(o["i"])("\n    ")],-1);function p(n,t,e,p,S,y){const v=Object(o["F"])("moto-inline-component436"),x=Object(o["F"])("demo-block"),N=Object(o["F"])("moto-inline-component3161"),k=Object(o["F"])("moto-inline-component5081"),X=Object(o["F"])("moto-inline-component6053"),z=Object(o["F"])("moto-inline-component8945"),M=Object(o["F"])("moto-inline-component11379"),P=Object(o["G"])("highlight");return Object(o["N"])((Object(o["x"])(),Object(o["f"])("div",s,[i,a,c,r,l,Object(o["j"])(x,null,{component:Object(o["M"])(()=>[Object(o["j"])(v)]),code:Object(o["M"])(()=>[m]),_:1}),d,Object(o["j"])(x,null,{component:Object(o["M"])(()=>[Object(o["j"])(N)]),code:Object(o["M"])(()=>[h]),_:1}),Object(o["j"])(x,null,{component:Object(o["M"])(()=>[Object(o["j"])(k)]),code:Object(o["M"])(()=>[b]),_:1}),Object(o["j"])(x,null,{component:Object(o["M"])(()=>[Object(o["j"])(X)]),code:Object(o["M"])(()=>[u]),_:1}),f,j,w,Object(o["j"])(x,null,{component:Object(o["M"])(()=>[Object(o["j"])(z)]),code:Object(o["M"])(()=>[_]),_:1}),O,Object(o["j"])(x,null,{component:Object(o["M"])(()=>[Object(o["j"])(M)]),code:Object(o["M"])(()=>[g]),_:1})])),[[P]])}var S=e("8248"),y=e("bc48"),v={name:"component-docs",components:{demoBlock:S["a"],"moto-inline-component436":function(){const n={class:"demo__css-animation-1 demo-flex"};function t(t,e){return Object(o["x"])(),Object(o["f"])("div",n,[Object(o["g"])("div",{class:Object(o["q"])(t.className)},null,2),Object(o["g"])("button",{class:"demo-btn",onClick:e[0]||(e[0]=(...n)=>t.switchShow&&t.switchShow(...n))},Object(o["I"])(t.isShow?"暂停":"播放"),1)])}const e={data(){return{isShow:!0,className:""}},methods:{switchShow:function(){this.isShow=!this.isShow;let n="demo__css-animation-1--";this.className=n+(this.isShow?"play":"stop")}}};return{render:t,...e}}(),"moto-inline-component3161":function(){const n={class:"demo-flex"};function t(t,e){return Object(o["x"])(),Object(o["f"])("div",n,[Object(o["g"])("div",{class:Object(o["q"])(t.className)},"淡入/淡出",2),Object(o["g"])("button",{onClick:e[0]||(e[0]=(...n)=>t.switchShow&&t.switchShow(...n)),class:"demo-btn"},Object(o["I"])(t.isShow?"淡出":"淡入"),1)])}const e={data(){return{isShow:!0,className:""}},methods:{switchShow:function(){this.isShow=!this.isShow;let n="demo__css-animation-2__";this.className=n+(this.isShow?"fead-in":"fead-out")}}};return{render:t,...e}}(),"moto-inline-component5081":function(){const n={class:"demo__css-animation-2__flash"};function t(t,e){return Object(o["x"])(),Object(o["f"])("div",n)}const e={};return{render:t,...e}}(),"moto-inline-component6053":function(){const n={class:"demo-flex"};function t(t,e){return Object(o["x"])(),Object(o["f"])("div",n,[Object(o["g"])("div",{class:Object(o["q"])(["demo__css-animation-5",t.className])},null,2),Object(o["g"])("button",{onClick:e[0]||(e[0]=(...n)=>t.switchShow&&t.switchShow(...n)),class:"demo-btn"},Object(o["I"])(t.isShow?"弹出":"弹起"),1)])}const e={data(){return{isShow:!0,className:""}},methods:{switchShow:function(){this.isShow=!this.isShow;let n="demo__css-animation-5__";this.className=n+(this.isShow?"barrage-in":"barrage-out")}}};return{render:t,...e}}(),"moto-inline-component8945":function(){function n(n,t){return Object(o["x"])(),Object(o["f"])("div",null,[Object(o["g"])("button",{style:{"margin-left":"0"},onClick:t[0]||(t[0]=(...t)=>n.switchShow&&n.switchShow(...t)),class:"demo-btn"},Object(o["I"])(n.isShow?"右滑":"左滑"),1),Object(o["g"])("div",{class:Object(o["q"])(["demo__css-animation-3",n.className])},null,2)])}const t={data(){return{isShow:!0,className:""}},methods:{switchShow:function(){this.isShow=!this.isShow;let n="demo__css-animation-3__slide-";this.className=n+(this.isShow?"left":"right")}}};return{render:n,...t}}(),"moto-inline-component11379":function(){const n={class:"demo-flex"};function t(t,e){return Object(o["x"])(),Object(o["f"])("div",n,[Object(o["g"])("div",{class:Object(o["q"])(["demo__css-animation-4",t.className])},null,2),Object(o["g"])("button",{onClick:e[0]||(e[0]=(...n)=>t.switchShow&&t.switchShow(...n)),class:"demo-btn"},Object(o["I"])(t.isShow?"退出":"进入"),1)])}const e={data(){return{isShow:!0,className:""}},methods:{switchShow:function(){this.isShow=!this.isShow;let n="demo__css-animation-4__";this.className=n+(this.isShow?"zoom-in":"zoom-out")}}};return{render:t,...e}}()},directives:{highlight:y["a"]}},x=(e("433a"),e("b9a6")),N=e.n(x);const k=N()(v,[["render",p]]);t["default"]=k}}]);