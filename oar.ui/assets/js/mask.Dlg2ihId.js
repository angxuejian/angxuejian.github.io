import{_ as f}from"./index.vue_vue_type_script_setup_true_lang.BzMyRLuE.js";import{i as m,r,d as i,k as p,l as a,n,p as s,q as d,v as w,j as O,V as k}from"./vendor.B8knQlvs.js";import{_ as h}from"../index.BNn8yK7z.js";import"./vicons.BNz2LP8I.js";import"./vueuse.Cvm5TgXm.js";import"./throttle-debounce.DNtPP7FE.js";const y={style:{width:"100px",height:"100px",position:"relative","margin-bottom":"10px"}},_={__name:"Oar25",setup(u){const e=m(!1);return(o,t)=>{const b=r("OarMask"),v=r("OarButton");return i(),p("div",null,[a("div",y,[n(b,{show:e.value,"onUpdate:show":t[0]||(t[0]=l=>e.value=l)},{default:s(()=>t[2]||(t[2]=[a("div",{style:{color:"#fff"}},"Content",-1)])),_:1},8,["show"])]),n(v,{onClick:t[1]||(t[1]=l=>e.value=!e.value)},{default:s(()=>[d(w(e.value?"Close":"Open")+" Mask",1)]),_:1})])}}},M={__name:"Oar26",setup(u){const e=m(!1);return(o,t)=>{const b=r("OarMask"),v=r("OarButton");return i(),p("div",null,[n(b,{show:e.value,"onUpdate:show":t[0]||(t[0]=l=>e.value=l),to:"body"},{default:s(()=>t[2]||(t[2]=[a("div",{style:{color:"#fff"}},"Mounted to body",-1)])),_:1},8,["show"]),n(v,{onClick:t[1]||(t[1]=l=>e.value=!e.value)},{default:s(()=>t[3]||(t[3]=[d("Open")])),_:1})])}}},c={style:{width:"100px",height:"100px",position:"relative","margin-bottom":"10px"}},x={__name:"Oar27",setup(u){const e=m(!1);return(o,t)=>{const b=r("OarMask"),v=r("OarButton");return i(),p("div",null,[a("div",c,[n(b,{show:e.value,"onUpdate:show":t[0]||(t[0]=l=>e.value=l),closeOnClick:!1},{default:s(()=>t[2]||(t[2]=[a("div",{style:{color:"#fff"}},"Click mask won't close",-1)])),_:1},8,["show"])]),n(v,{onClick:t[1]||(t[1]=l=>e.value=!e.value)},{default:s(()=>[d(w(e.value?"Close":"Open")+" Mask",1)]),_:1})])}}},B={__name:"Oar28",setup(u){const e=m(!1);return(o,t)=>{const b=r("OarMask"),v=r("OarButton");return i(),p("div",null,[n(b,{show:e.value,"onUpdate:show":t[0]||(t[0]=l=>e.value=l),to:"body",opacity:.2},{default:s(()=>t[2]||(t[2]=[a("div",{style:{color:"#fff"}},"20% opacity",-1)])),_:1},8,["show"]),n(v,{onClick:t[1]||(t[1]=l=>e.value=!e.value)},{default:s(()=>t[3]||(t[3]=[d("Open")])),_:1})])}}},C={class:"markdown-body"},$=O({__name:"mask",setup(u){return(e,o)=>(i(),p("div",C,[o[0]||(o[0]=a("h1",null,"Mask 遮罩层",-1)),o[1]||(o[1]=a("p",null,"用于创建页面的遮罩层，可用于弹窗、抽屉等场景。",-1)),o[2]||(o[2]=a("h2",null,"基础用法",-1)),o[3]||(o[3]=a("p",null,[d("通过 v-model:show 控制遮罩的显示。默认会锁定滚动，点击遮罩可关闭。不设置"),a("code",null,"to"),d("时，需要将父元素设置"),a("code",null,"相对定位")],-1)),n(f,{code:`<template>
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
`},{default:s(()=>[n(_)]),_:1}),o[4]||(o[4]=a("h2",null,"Teleport 挂载位置",-1)),o[5]||(o[5]=a("p",null,[d("通过 "),a("code",null,"to"),d(" 属性设置挂载位置，支持 "),a("code",null,"body"),d(" 或任意 "),a("code",null,"HTMLElement"),d("。")],-1)),n(f,{code:`<template>
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
`},{default:s(()=>[n(M)]),_:1}),o[6]||(o[6]=a("h2",null,"点击遮罩关闭",-1)),o[7]||(o[7]=a("p",null,[d("设置 "),a("code",null,"closeOnClick"),d(" 控制点击空白区域是否关闭遮罩。")],-1)),n(f,{code:`<template>
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
`},{default:s(()=>[n(x)]),_:1}),o[8]||(o[8]=a("h2",null,"设置透明度",-1)),o[9]||(o[9]=a("p",null,[d("设置 "),a("code",null,"opacity"),d(" 调整遮罩的透明度。")],-1)),n(f,{code:`<template>
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
`},{default:s(()=>[n(B)]),_:1}),o[10]||(o[10]=k("<h2 data-v-596eb18b>Mask Attributes</h2><table data-v-596eb18b><thead data-v-596eb18b><tr data-v-596eb18b><th data-v-596eb18b>属性名</th><th data-v-596eb18b>说明</th><th data-v-596eb18b>类型</th><th data-v-596eb18b>默认值</th></tr></thead><tbody data-v-596eb18b><tr data-v-596eb18b><td data-v-596eb18b>show</td><td data-v-596eb18b>是否显示遮罩（v-model）</td><td data-v-596eb18b>boolean</td><td data-v-596eb18b>false</td></tr><tr data-v-596eb18b><td data-v-596eb18b>to</td><td data-v-596eb18b>Teleport 挂载位置</td><td data-v-596eb18b>string｜HTMLElement</td><td data-v-596eb18b>—</td></tr><tr data-v-596eb18b><td data-v-596eb18b>lockScroll</td><td data-v-596eb18b>是否在显示时锁定 body 滚动</td><td data-v-596eb18b>boolean</td><td data-v-596eb18b>true</td></tr><tr data-v-596eb18b><td data-v-596eb18b>closeOnClick</td><td data-v-596eb18b>是否点击遮罩关闭</td><td data-v-596eb18b>boolean</td><td data-v-596eb18b>true</td></tr><tr data-v-596eb18b><td data-v-596eb18b>opacity</td><td data-v-596eb18b>背景透明度（0-1）</td><td data-v-596eb18b>number</td><td data-v-596eb18b>0.5</td></tr></tbody></table><h2 data-v-596eb18b>Mask Events</h2><table data-v-596eb18b><thead data-v-596eb18b><tr data-v-596eb18b><th data-v-596eb18b>事件名</th><th data-v-596eb18b>说明</th><th data-v-596eb18b>回调参数</th></tr></thead><tbody data-v-596eb18b><tr data-v-596eb18b><td data-v-596eb18b>close</td><td data-v-596eb18b>遮罩关闭时触发</td><td data-v-596eb18b>—</td></tr></tbody></table><h2 data-v-596eb18b>Mask Slots</h2><table data-v-596eb18b><thead data-v-596eb18b><tr data-v-596eb18b><th data-v-596eb18b>插槽名</th><th data-v-596eb18b>说明</th></tr></thead><tbody data-v-596eb18b><tr data-v-596eb18b><td data-v-596eb18b>default</td><td data-v-596eb18b>遮罩内容区域插槽</td></tr></tbody></table>",6))]))}}),U=h($,[["__scopeId","data-v-596eb18b"]]);export{U as default};
