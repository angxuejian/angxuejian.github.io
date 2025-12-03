import{_ as f}from"./index.vue_vue_type_script_setup_true_lang-DTHUNUlY.js";import{h as m,r as b,o as i,e as u,f as e,a as n,w as s,b as d,t as w,d as O,g as h,_ as k}from"./index-akwbTLob.js";const y={style:{width:"100px",height:"100px",position:"relative","margin-bottom":"10px"}},_={__name:"Oar25",setup(p){const o=m(!1);return(a,t)=>{const r=b("OarMask"),v=b("OarButton");return i(),u("div",null,[e("div",y,[n(r,{show:o.value,"onUpdate:show":t[0]||(t[0]=l=>o.value=l)},{default:s(()=>t[2]||(t[2]=[e("div",{style:{color:"#fff"}},"Content",-1)])),_:1},8,["show"])]),n(v,{onClick:t[1]||(t[1]=l=>o.value=!o.value)},{default:s(()=>[d(w(o.value?"Close":"Open")+" Mask",1)]),_:1})])}}},M={__name:"Oar26",setup(p){const o=m(!1);return(a,t)=>{const r=b("OarMask"),v=b("OarButton");return i(),u("div",null,[n(r,{show:o.value,"onUpdate:show":t[0]||(t[0]=l=>o.value=l),to:"body"},{default:s(()=>t[2]||(t[2]=[e("div",{style:{color:"#fff"}},"Mounted to body",-1)])),_:1},8,["show"]),n(v,{onClick:t[1]||(t[1]=l=>o.value=!o.value)},{default:s(()=>t[3]||(t[3]=[d("Open")])),_:1})])}}},c={style:{width:"100px",height:"100px",position:"relative","margin-bottom":"10px"}},x={__name:"Oar27",setup(p){const o=m(!1);return(a,t)=>{const r=b("OarMask"),v=b("OarButton");return i(),u("div",null,[e("div",c,[n(r,{show:o.value,"onUpdate:show":t[0]||(t[0]=l=>o.value=l),closeOnClick:!1},{default:s(()=>t[2]||(t[2]=[e("div",{style:{color:"#fff"}},"Click mask won't close",-1)])),_:1},8,["show"])]),n(v,{onClick:t[1]||(t[1]=l=>o.value=!o.value)},{default:s(()=>[d(w(o.value?"Close":"Open")+" Mask",1)]),_:1})])}}},B={__name:"Oar28",setup(p){const o=m(!1);return(a,t)=>{const r=b("OarMask"),v=b("OarButton");return i(),u("div",null,[n(r,{show:o.value,"onUpdate:show":t[0]||(t[0]=l=>o.value=l),to:"body",opacity:.2},{default:s(()=>t[2]||(t[2]=[e("div",{style:{color:"#fff"}},"20% opacity",-1)])),_:1},8,["show"]),n(v,{onClick:t[1]||(t[1]=l=>o.value=!o.value)},{default:s(()=>t[3]||(t[3]=[d("Open")])),_:1})])}}},C={class:"markdown-body"},g=O({__name:"mask",setup(p){return(o,a)=>(i(),u("div",C,[a[0]||(a[0]=e("h1",null,"Mask 遮罩层",-1)),a[1]||(a[1]=e("p",null,"用于创建页面的遮罩层，可用于弹窗、抽屉等场景。",-1)),a[2]||(a[2]=e("h2",null,"基础用法",-1)),a[3]||(a[3]=e("p",null,[d("通过 v-model:show 控制遮罩的显示。默认会锁定滚动，点击遮罩可关闭。不设置"),e("code",null,"to"),d("时，需要将父元素设置"),e("code",null,"相对定位")],-1)),n(f,{code:`<template>
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
`},{default:s(()=>[n(_)]),_:1}),a[4]||(a[4]=e("h2",null,"Teleport 挂载位置",-1)),a[5]||(a[5]=e("p",null,[d("通过 "),e("code",null,"to"),d(" 属性设置挂载位置，支持 "),e("code",null,"body"),d(" 或任意 "),e("code",null,"HTMLElement"),d("。")],-1)),n(f,{code:`<template>
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
`},{default:s(()=>[n(M)]),_:1}),a[6]||(a[6]=e("h2",null,"点击遮罩关闭",-1)),a[7]||(a[7]=e("p",null,[d("设置 "),e("code",null,"closeOnClick"),d(" 控制点击空白区域是否关闭遮罩。")],-1)),n(f,{code:`<template>
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
`},{default:s(()=>[n(x)]),_:1}),a[8]||(a[8]=e("h2",null,"设置透明度",-1)),a[9]||(a[9]=e("p",null,[d("设置 "),e("code",null,"opacity"),d(" 调整遮罩的透明度。")],-1)),n(f,{code:`<template>
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
`},{default:s(()=>[n(B)]),_:1}),a[10]||(a[10]=h("<h2 data-v-596eb18b>Mask Attributes</h2><table data-v-596eb18b><thead data-v-596eb18b><tr data-v-596eb18b><th data-v-596eb18b>属性名</th><th data-v-596eb18b>说明</th><th data-v-596eb18b>类型</th><th data-v-596eb18b>默认值</th></tr></thead><tbody data-v-596eb18b><tr data-v-596eb18b><td data-v-596eb18b>show</td><td data-v-596eb18b>是否显示遮罩（v-model）</td><td data-v-596eb18b>boolean</td><td data-v-596eb18b>false</td></tr><tr data-v-596eb18b><td data-v-596eb18b>to</td><td data-v-596eb18b>Teleport 挂载位置</td><td data-v-596eb18b>string｜HTMLElement</td><td data-v-596eb18b>—</td></tr><tr data-v-596eb18b><td data-v-596eb18b>lockScroll</td><td data-v-596eb18b>是否在显示时锁定 body 滚动</td><td data-v-596eb18b>boolean</td><td data-v-596eb18b>true</td></tr><tr data-v-596eb18b><td data-v-596eb18b>closeOnClick</td><td data-v-596eb18b>是否点击遮罩关闭</td><td data-v-596eb18b>boolean</td><td data-v-596eb18b>true</td></tr><tr data-v-596eb18b><td data-v-596eb18b>opacity</td><td data-v-596eb18b>背景透明度（0-1）</td><td data-v-596eb18b>number</td><td data-v-596eb18b>0.5</td></tr></tbody></table><h2 data-v-596eb18b>Mask Events</h2><table data-v-596eb18b><thead data-v-596eb18b><tr data-v-596eb18b><th data-v-596eb18b>事件名</th><th data-v-596eb18b>说明</th><th data-v-596eb18b>回调参数</th></tr></thead><tbody data-v-596eb18b><tr data-v-596eb18b><td data-v-596eb18b>close</td><td data-v-596eb18b>遮罩关闭时触发</td><td data-v-596eb18b>—</td></tr></tbody></table><h2 data-v-596eb18b>Mask Slots</h2><table data-v-596eb18b><thead data-v-596eb18b><tr data-v-596eb18b><th data-v-596eb18b>插槽名</th><th data-v-596eb18b>说明</th></tr></thead><tbody data-v-596eb18b><tr data-v-596eb18b><td data-v-596eb18b>default</td><td data-v-596eb18b>遮罩内容区域插槽</td></tr></tbody></table>",6))]))}}),E=k(g,[["__scopeId","data-v-596eb18b"]]);export{E as default};
