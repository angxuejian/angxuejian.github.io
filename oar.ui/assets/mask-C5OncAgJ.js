import{_ as f}from"./index.vue_vue_type_script_setup_true_lang-sjS5oHsS.js";import{h as m,r,o as u,e as p,f as o,a as d,w as s,b as e,t as w,d as O,g as h,_ as k}from"./index-CHHuxPb9.js";const y={style:{width:"100px",height:"100px",position:"relative","margin-bottom":"10px"}},_={__name:"Oar21",setup(c){const n=m(!1);return(a,t)=>{const v=r("OarMask"),i=r("OarButton");return u(),p("div",null,[o("div",y,[d(v,{show:n.value,"onUpdate:show":t[0]||(t[0]=l=>n.value=l)},{default:s(()=>t[2]||(t[2]=[o("div",{style:{color:"#fff"}},"Content",-1)])),_:1},8,["show"])]),d(i,{onClick:t[1]||(t[1]=l=>n.value=!n.value)},{default:s(()=>[e(w(n.value?"Close":"Open")+" Mask",1)]),_:1})])}}},b={__name:"Oar22",setup(c){const n=m(!1);return(a,t)=>{const v=r("OarMask"),i=r("OarButton");return u(),p("div",null,[d(v,{show:n.value,"onUpdate:show":t[0]||(t[0]=l=>n.value=l),to:"body"},{default:s(()=>t[2]||(t[2]=[o("div",{style:{color:"#fff"}},"Mounted to body",-1)])),_:1},8,["show"]),d(i,{onClick:t[1]||(t[1]=l=>n.value=!n.value)},{default:s(()=>t[3]||(t[3]=[e("Open")])),_:1})])}}},M={style:{width:"100px",height:"100px",position:"relative","margin-bottom":"10px"}},x={__name:"Oar23",setup(c){const n=m(!1);return(a,t)=>{const v=r("OarMask"),i=r("OarButton");return u(),p("div",null,[o("div",M,[d(v,{show:n.value,"onUpdate:show":t[0]||(t[0]=l=>n.value=l),closeOnClick:!1},{default:s(()=>t[2]||(t[2]=[o("div",{style:{color:"#fff"}},"Click mask won't close",-1)])),_:1},8,["show"])]),d(i,{onClick:t[1]||(t[1]=l=>n.value=!n.value)},{default:s(()=>[e(w(n.value?"Close":"Open")+" Mask",1)]),_:1})])}}},B={__name:"Oar24",setup(c){const n=m(!1);return(a,t)=>{const v=r("OarMask"),i=r("OarButton");return u(),p("div",null,[d(v,{show:n.value,"onUpdate:show":t[0]||(t[0]=l=>n.value=l),to:"body",opacity:.2},{default:s(()=>t[2]||(t[2]=[o("div",{style:{color:"#fff"}},"20% opacity",-1)])),_:1},8,["show"]),d(i,{onClick:t[1]||(t[1]=l=>n.value=!n.value)},{default:s(()=>t[3]||(t[3]=[e("Open")])),_:1})])}}},C={class:"markdown-body"},g=O({__name:"mask",setup(c){return(n,a)=>(u(),p("div",C,[a[0]||(a[0]=o("h1",null,"Mask 遮罩层",-1)),a[1]||(a[1]=o("p",null,"用于创建页面的遮罩层，可用于弹窗、抽屉等场景。",-1)),a[2]||(a[2]=o("h2",null,"基础用法",-1)),a[3]||(a[3]=o("p",null,[e("通过 v-model:show 控制遮罩的显示。默认会锁定滚动，点击遮罩可关闭。不设置"),o("code",null,"to"),e("时，需要将父元素设置"),o("code",null,"相对定位")],-1)),d(f,{code:`<template>
<div>
<div style='width: 100px; height: 100px; position: relative; margin-bottom: 10px;'>
<OarMask v-model:show='show'>
<div style='color: #fff'>Content</div>
</OarMask>
</div>
<OarButton @click='show = !show'>{{ show ? 'Close' : 'Open' }} Mask</OarButton>
</div>
</template>

<script setup> 
import { ref } from 'vue'
 
const show = ref(false) 
<\/script>
`},{default:s(()=>[d(_)]),_:1}),a[4]||(a[4]=o("h2",null,"Teleport 挂载位置",-1)),a[5]||(a[5]=o("p",null,[e("通过 "),o("code",null,"to"),e(" 属性设置挂载位置，支持 "),o("code",null,"body"),e(" 或任意 "),o("code",null,"HTMLElement"),e("。")],-1)),d(f,{code:`<template>
<div>
<OarMask v-model:show='show' to='body'>
<div style='color: #fff'>Mounted to body</div>
</OarMask>
<OarButton @click='show = !show'>Open</OarButton>
</div>
</template>

<script setup> 
import { ref } from 'vue'
 
const show = ref(false) 
<\/script>
`},{default:s(()=>[d(b)]),_:1}),a[6]||(a[6]=o("h2",null,"点击遮罩关闭",-1)),a[7]||(a[7]=o("p",null,[e("设置 "),o("code",null,"closeOnClick"),e(" 控制点击空白区域是否关闭遮罩。")],-1)),d(f,{code:`<template>
<div>
<div style='width: 100px; height: 100px; position: relative; margin-bottom: 10px;'>
<OarMask v-model:show='show' :closeOnClick='false'>
<div style='color: #fff'>Click mask won't close</div>
</OarMask>
</div>
<OarButton @click='show = !show'>{{ show ? 'Close' : 'Open' }} Mask</OarButton>
</div>
</template>

<script setup> 
import { ref } from 'vue'
 
const show = ref(false) 
<\/script>
`},{default:s(()=>[d(x)]),_:1}),a[8]||(a[8]=o("h2",null,"设置透明度",-1)),a[9]||(a[9]=o("p",null,[e("设置 "),o("code",null,"opacity"),e(" 调整遮罩的透明度。")],-1)),d(f,{code:`<template>
<div>
<OarMask v-model:show='show' to='body' :opacity='0.2'>
<div style='color: #fff'>20% opacity</div>
</OarMask>
<OarButton @click='show = !show'>Open</OarButton>
</div>
</template>

<script setup> 
import { ref } from 'vue'
 
const show = ref(false) 
<\/script>
`},{default:s(()=>[d(B)]),_:1}),a[10]||(a[10]=h("<h2 data-v-7136733c>Mask Attributes</h2><table data-v-7136733c><thead data-v-7136733c><tr data-v-7136733c><th data-v-7136733c>属性名</th><th data-v-7136733c>说明</th><th data-v-7136733c>类型</th><th data-v-7136733c>默认值</th></tr></thead><tbody data-v-7136733c><tr data-v-7136733c><td data-v-7136733c>show</td><td data-v-7136733c>是否显示遮罩（v-model）</td><td data-v-7136733c>boolean</td><td data-v-7136733c>false</td></tr><tr data-v-7136733c><td data-v-7136733c>to</td><td data-v-7136733c>Teleport 挂载位置</td><td data-v-7136733c>string｜HTMLElement</td><td data-v-7136733c>—</td></tr><tr data-v-7136733c><td data-v-7136733c>lockScroll</td><td data-v-7136733c>是否在显示时锁定 body 滚动</td><td data-v-7136733c>boolean</td><td data-v-7136733c>true</td></tr><tr data-v-7136733c><td data-v-7136733c>closeOnClick</td><td data-v-7136733c>是否点击遮罩关闭</td><td data-v-7136733c>boolean</td><td data-v-7136733c>true</td></tr><tr data-v-7136733c><td data-v-7136733c>opacity</td><td data-v-7136733c>背景透明度（0-1）</td><td data-v-7136733c>number</td><td data-v-7136733c>0.5</td></tr></tbody></table><h2 data-v-7136733c>Mask Events</h2><table data-v-7136733c><thead data-v-7136733c><tr data-v-7136733c><th data-v-7136733c>事件名</th><th data-v-7136733c>说明</th><th data-v-7136733c>回调参数</th></tr></thead><tbody data-v-7136733c><tr data-v-7136733c><td data-v-7136733c>close</td><td data-v-7136733c>遮罩关闭时触发</td><td data-v-7136733c>—</td></tr></tbody></table><h2 data-v-7136733c>Mask Slots</h2><table data-v-7136733c><thead data-v-7136733c><tr data-v-7136733c><th data-v-7136733c>插槽名</th><th data-v-7136733c>说明</th></tr></thead><tbody data-v-7136733c><tr data-v-7136733c><td data-v-7136733c>default</td><td data-v-7136733c>遮罩内容区域插槽</td></tr></tbody></table>",6))]))}}),E=k(g,[["__scopeId","data-v-7136733c"]]);export{E as default};
