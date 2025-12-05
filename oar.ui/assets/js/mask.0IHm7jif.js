import{_ as f}from"./index.vue_vue_type_script_setup_true_lang.BzMyRLuE.js";import{i as m,r,d as p,k as u,l as o,n,p as s,q as e,v as w,j as O,V as k}from"./vendor.B8knQlvs.js";import{_ as h}from"../index.BQE6912r.js";import"./vicons.BNz2LP8I.js";import"./vueuse.Cvm5TgXm.js";import"./throttle-debounce.DNtPP7FE.js";const y={style:{width:"100px",height:"100px",position:"relative","margin-bottom":"10px"}},_={__name:"Oar30",setup(b){const a=m(!1);return(d,t)=>{const v=r("OarMask"),i=r("OarButton");return p(),u("div",null,[o("div",y,[n(v,{show:a.value,"onUpdate:show":t[0]||(t[0]=l=>a.value=l)},{default:s(()=>t[2]||(t[2]=[o("div",{style:{color:"#fff"}},"Content",-1)])),_:1},8,["show"])]),n(i,{onClick:t[1]||(t[1]=l=>a.value=!a.value)},{default:s(()=>[e(w(a.value?"Close":"Open")+" Mask",1)]),_:1})])}}},M={__name:"Oar31",setup(b){const a=m(!1);return(d,t)=>{const v=r("OarMask"),i=r("OarButton");return p(),u("div",null,[n(v,{show:a.value,"onUpdate:show":t[0]||(t[0]=l=>a.value=l),to:"body"},{default:s(()=>t[2]||(t[2]=[o("div",{style:{color:"#fff"}},"Mounted to body",-1)])),_:1},8,["show"]),n(i,{onClick:t[1]||(t[1]=l=>a.value=!a.value)},{default:s(()=>t[3]||(t[3]=[e("Open")])),_:1})])}}},c={style:{width:"100px",height:"100px",position:"relative","margin-bottom":"10px"}},x={__name:"Oar32",setup(b){const a=m(!1);return(d,t)=>{const v=r("OarMask"),i=r("OarButton");return p(),u("div",null,[o("div",c,[n(v,{show:a.value,"onUpdate:show":t[0]||(t[0]=l=>a.value=l),closeOnClick:!1},{default:s(()=>t[2]||(t[2]=[o("div",{style:{color:"#fff"}},"Click mask won't close",-1)])),_:1},8,["show"])]),n(i,{onClick:t[1]||(t[1]=l=>a.value=!a.value)},{default:s(()=>[e(w(a.value?"Close":"Open")+" Mask",1)]),_:1})])}}},B={__name:"Oar33",setup(b){const a=m(!1);return(d,t)=>{const v=r("OarMask"),i=r("OarButton");return p(),u("div",null,[n(v,{show:a.value,"onUpdate:show":t[0]||(t[0]=l=>a.value=l),to:"body",opacity:.2},{default:s(()=>t[2]||(t[2]=[o("div",{style:{color:"#fff"}},"20% opacity",-1)])),_:1},8,["show"]),n(i,{onClick:t[1]||(t[1]=l=>a.value=!a.value)},{default:s(()=>t[3]||(t[3]=[e("Open")])),_:1})])}}},C={class:"markdown-body"},$=O({__name:"mask",setup(b){return(a,d)=>(p(),u("div",C,[d[0]||(d[0]=o("h1",null,"Mask 遮罩层",-1)),d[1]||(d[1]=o("p",null,"用于创建页面的遮罩层，可用于弹窗、抽屉等场景。",-1)),d[2]||(d[2]=o("h2",null,"基础用法",-1)),d[3]||(d[3]=o("p",null,[e("通过 v-model:show 控制遮罩的显示。默认会锁定滚动，点击遮罩可关闭。不设置"),o("code",null,"to"),e("时，需要将父元素设置"),o("code",null,"相对定位")],-1)),n(f,{code:`<template>
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
`},{default:s(()=>[n(_)]),_:1}),d[4]||(d[4]=o("h2",null,"Teleport 挂载位置",-1)),d[5]||(d[5]=o("p",null,[e("通过 "),o("code",null,"to"),e(" 属性设置挂载位置，支持 "),o("code",null,"body"),e(" 或任意 "),o("code",null,"HTMLElement"),e("。")],-1)),n(f,{code:`<template>
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
`},{default:s(()=>[n(M)]),_:1}),d[6]||(d[6]=o("h2",null,"点击遮罩关闭",-1)),d[7]||(d[7]=o("p",null,[e("设置 "),o("code",null,"closeOnClick"),e(" 控制点击空白区域是否关闭遮罩。")],-1)),n(f,{code:`<template>
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
`},{default:s(()=>[n(x)]),_:1}),d[8]||(d[8]=o("h2",null,"设置透明度",-1)),d[9]||(d[9]=o("p",null,[e("设置 "),o("code",null,"opacity"),e(" 调整遮罩的透明度。")],-1)),n(f,{code:`<template>
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
`},{default:s(()=>[n(B)]),_:1}),d[10]||(d[10]=k("<h2 data-v-b602d148>Mask Attributes</h2><table data-v-b602d148><thead data-v-b602d148><tr data-v-b602d148><th data-v-b602d148>属性名</th><th data-v-b602d148>说明</th><th data-v-b602d148>类型</th><th data-v-b602d148>默认值</th></tr></thead><tbody data-v-b602d148><tr data-v-b602d148><td data-v-b602d148>show</td><td data-v-b602d148>是否显示遮罩（v-model）</td><td data-v-b602d148>boolean</td><td data-v-b602d148>false</td></tr><tr data-v-b602d148><td data-v-b602d148>to</td><td data-v-b602d148>Teleport 挂载位置</td><td data-v-b602d148>string｜HTMLElement</td><td data-v-b602d148>—</td></tr><tr data-v-b602d148><td data-v-b602d148>lockScroll</td><td data-v-b602d148>是否在显示时锁定 body 滚动</td><td data-v-b602d148>boolean</td><td data-v-b602d148>true</td></tr><tr data-v-b602d148><td data-v-b602d148>closeOnClick</td><td data-v-b602d148>是否点击遮罩关闭</td><td data-v-b602d148>boolean</td><td data-v-b602d148>true</td></tr><tr data-v-b602d148><td data-v-b602d148>opacity</td><td data-v-b602d148>背景透明度（0-1）</td><td data-v-b602d148>number</td><td data-v-b602d148>0.5</td></tr></tbody></table><h2 data-v-b602d148>Mask Events</h2><table data-v-b602d148><thead data-v-b602d148><tr data-v-b602d148><th data-v-b602d148>事件名</th><th data-v-b602d148>说明</th><th data-v-b602d148>回调参数</th></tr></thead><tbody data-v-b602d148><tr data-v-b602d148><td data-v-b602d148>close</td><td data-v-b602d148>遮罩关闭时触发</td><td data-v-b602d148>—</td></tr></tbody></table><h2 data-v-b602d148>Mask Slots</h2><table data-v-b602d148><thead data-v-b602d148><tr data-v-b602d148><th data-v-b602d148>插槽名</th><th data-v-b602d148>说明</th></tr></thead><tbody data-v-b602d148><tr data-v-b602d148><td data-v-b602d148>default</td><td data-v-b602d148>遮罩内容区域插槽</td></tr></tbody></table>",6))]))}}),U=h($,[["__scopeId","data-v-b602d148"]]);export{U as default};
