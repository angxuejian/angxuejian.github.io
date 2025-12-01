import{_ as m}from"./index.vue_vue_type_script_setup_true_lang-sjS5oHsS.js";import{d as u,h as O,r,o as p,e as f,a as n,w as s,b as v,f as e,g as h,_ as x}from"./index-CHHuxPb9.js";const y={style:{display:"flex",gap:"10px"}},_=u({__name:"Oar30",setup(w){const a=O(!1);return(d,t)=>{const o=r("OarButton"),i=r("OarWindow");return p(),f("div",y,[n(o,{onClick:t[0]||(t[0]=l=>a.value=!0)},{default:s(()=>t[2]||(t[2]=[v("打开窗口")])),_:1}),n(i,{center:"",show:a.value,"onUpdate:show":t[1]||(t[1]=l=>a.value=l),title:"Basic Window",width:300,height:200},{default:s(()=>t[3]||(t[3]=[e("div",null,"内容",-1)])),_:1},8,["show"])])}}}),W={style:{display:"flex",gap:"10px"}},B=u({__name:"Oar31",setup(w){const a=O(!1);return(d,t)=>{const o=r("OarButton"),i=r("OarWindow");return p(),f("div",W,[n(o,{onClick:t[0]||(t[0]=l=>a.value=!0)},{default:s(()=>t[2]||(t[2]=[v("打开窗口")])),_:1}),n(i,{show:a.value,"onUpdate:show":t[1]||(t[1]=l=>a.value=l),title:"Default Position",width:300,height:200,defaultPosition:{x:50,y:80}},{default:s(()=>t[3]||(t[3]=[e("div",null,"设置位置：x:50, y: 80",-1)])),_:1},8,["show"])])}}}),b={style:{display:"flex",gap:"10px"}},C=u({__name:"Oar32",setup(w){const a=O(!1);return(d,t)=>{const o=r("OarButton"),i=r("OarWindow");return p(),f("div",b,[n(o,{onClick:t[0]||(t[0]=l=>a.value=!0)},{default:s(()=>t[2]||(t[2]=[v("居中窗口")])),_:1}),n(i,{center:"",show:a.value,"onUpdate:show":t[1]||(t[1]=l=>a.value=l),title:"Basic Window",width:300,height:200},{default:s(()=>t[3]||(t[3]=[e("div",null,"内容",-1)])),_:1},8,["show"])])}}}),$={style:{display:"flex",gap:"10px"}},k=u({__name:"Oar33",setup(w){const a=O(!1);return(d,t)=>{const o=r("OarButton"),i=r("OarWindow");return p(),f("div",$,[n(o,{onClick:t[0]||(t[0]=l=>a.value=!0)},{default:s(()=>t[2]||(t[2]=[v("打开内容窗口")])),_:1}),n(i,{show:a.value,"onUpdate:show":t[1]||(t[1]=l=>a.value=l),title:"Custom Content",width:300,height:200,contentStyle:"padding: 10px; background:#f4f4f4"},{default:s(()=>t[3]||(t[3]=[e("div",null,"这里是内容区域，你可以放任何组件。",-1)])),_:1},8,["show"])])}}}),P={style:{display:"flex",gap:"10px"}},S=u({__name:"Oar34",setup(w){const a=O(!1);return(d,t)=>{const o=r("OarButton"),i=r("OarWindow");return p(),f("div",P,[n(o,{onClick:t[0]||(t[0]=l=>a.value=!0)},{default:s(()=>t[2]||(t[2]=[v("可拖拽窗口")])),_:1}),n(i,{show:a.value,"onUpdate:show":t[1]||(t[1]=l=>a.value=l),title:"Draggable Window",width:300,height:200},{default:s(()=>t[3]||(t[3]=[e("div",null,"去试试拖拽",-1)])),_:1},8,["show"])])}}}),U={style:{display:"flex",gap:"10px"}},N=u({__name:"Oar35",setup(w){const a=O(!1),d=()=>alert("窗口已关闭");return(t,o)=>{const i=r("OarButton"),l=r("OarWindow");return p(),f("div",U,[n(i,{onClick:o[0]||(o[0]=g=>a.value=!0)},{default:s(()=>o[2]||(o[2]=[v("打开窗口")])),_:1}),n(l,{show:a.value,"onUpdate:show":o[1]||(o[1]=g=>a.value=g),title:"Close Event",center:"",onClose:d,width:300,height:200},{default:s(()=>o[3]||(o[3]=[e("div",null,"关闭后，会有回调",-1)])),_:1},8,["show"])])}}}),D={class:"markdown-body"},E=u({__name:"window",setup(w){return(a,d)=>(p(),f("div",D,[d[0]||(d[0]=e("h1",null,"Window 窗口",-1)),d[1]||(d[1]=e("p",null,"支持可拖动、可居中、可指定渲染容器的窗口组件。",-1)),d[2]||(d[2]=e("h2",null,"基础用法",-1)),d[3]||(d[3]=e("p",null,"使用 v-model:show 控制窗口显示与隐藏。",-1)),n(m,{code:`<template>
    <div style='display:flex; gap:10px'> 
        <OarButton @click='(s1 = true)'>打开窗口</OarButton> 
        <OarWindow center v-model:show='s1' title='Basic Window' :width='300' :height='200'>
            <div>内容</div>
        </OarWindow>
    </div>
</template>

<script setup lang='ts'> 
    import { ref } from 'vue';
    const s1 = ref(false) 
<\/script>
`},{default:s(()=>[n(_)]),_:1}),d[4]||(d[4]=e("h2",null,"默认位置",-1)),d[5]||(d[5]=e("p",null,"通过 defaultPosition 设置窗口初始位置，默认为 { x: 0, y: 0 }。",-1)),n(m,{code:`<template>
    <div style='display:flex; gap:10px'> 
        <OarButton @click='(s2 = true)'>打开窗口</OarButton>
        <OarWindow v-model:show='s2' title='Default Position' :width='300' :height='200' :defaultPosition='{ x: 50, y: 80 }'>
            <div>设置位置：x:50, y: 80</div>
        </OarWindow>
    </div>

</template>

<script setup lang='ts'> 
import { ref } from 'vue';
const s2 = ref(false) 
<\/script>
`},{default:s(()=>[n(B)]),_:1}),d[6]||(d[6]=e("h2",null,"居中窗口",-1)),d[7]||(d[7]=e("p",null,"当 center = true 时，窗口会在容器中自动居中。",-1)),n(m,{code:`<template>
    <div style='display:flex; gap:10px'> 
        <OarButton @click='(s3 = true)'>居中窗口</OarButton> 
        <OarWindow center v-model:show='s3' title='Basic Window' :width='300' :height='200'>
            <div>内容</div>
        </OarWindow>
    </div>
</template>

<script setup lang='ts'> 
    import { ref } from 'vue';
    const s3 = ref(false) 
<\/script>
`},{default:s(()=>[n(C)]),_:1}),d[8]||(d[8]=e("h2",null,"自定义内容",-1)),d[9]||(d[9]=e("p",null,"通过 contentClass 和 contentStyle 为内容区域设置样式。",-1)),n(m,{code:`<template>

<div style='display:flex; gap:10px'>
<OarButton @click='(s4 = true)'>打开内容窗口</OarButton>
<OarWindow
            v-model:show='s4'
            title='Custom Content'
            :width='300'
            :height='200'
            contentStyle='padding: 10px; background:#f4f4f4'>

            <div>这里是内容区域，你可以放任何组件。</div>
        </OarWindow>
</div>

</template>

<script setup lang='ts'> 
    import { ref } from 'vue';
    const s4 = ref(false) 
 <\/script>
`},{default:s(()=>[n(k)]),_:1}),d[10]||(d[10]=e("h2",null,"拖拽窗口",-1)),d[11]||(d[11]=e("p",null,"窗口顶部标题栏支持鼠标与触摸拖拽。",-1)),n(m,{code:`<template>
    <div style='display:flex; gap:10px'> 
        <OarButton @click='(s5 = true)'>可拖拽窗口</OarButton> 
        <OarWindow
            v-model:show='s5'
            title='Draggable Window'
            :width='300'
            :height='200'>

            <div>去试试拖拽</div>
        </OarWindow>
</div>

</template>

<script setup lang='ts'> 
    import { ref } from 'vue';
    const s5 = ref(false) 
 <\/script>
`},{default:s(()=>[n(S)]),_:1}),d[12]||(d[12]=e("h2",null,"关闭事件",-1)),d[13]||(d[13]=e("p",null,[v("点击关闭按钮时触发 "),e("code",null,"close"),v(" 事件。")],-1)),n(m,{code:`<template>
    <div style='display:flex; gap:10px'> 
        <OarButton @click='(s6 = true)'>打开窗口</OarButton> 
        <OarWindow
            v-model:show='s6'
            title='Close Event'
            center
            @close='handleClose'
            :width='300'
            :height='200'>

            <div>关闭后，会有回调</div>
        </OarWindow>
</div>

</template>

<script setup lang='ts'> 
    import { ref } from 'vue';
    const s6 = ref(false) 
    const handleClose = () => alert('窗口已关闭')
 <\/script>
`},{default:s(()=>[n(N)]),_:1}),d[14]||(d[14]=h("<h2 data-v-937209ad>Window Attributes</h2><table data-v-937209ad><thead data-v-937209ad><tr data-v-937209ad><th data-v-937209ad>属性名</th><th data-v-937209ad>说明</th><th data-v-937209ad>类型</th><th data-v-937209ad>默认值</th></tr></thead><tbody data-v-937209ad><tr data-v-937209ad><td data-v-937209ad>show (v-model)</td><td data-v-937209ad>是否显示窗口</td><td data-v-937209ad>boolean</td><td data-v-937209ad>false</td></tr><tr data-v-937209ad><td data-v-937209ad>title</td><td data-v-937209ad>窗口标题</td><td data-v-937209ad>string</td><td data-v-937209ad>&#39;New Tab&#39;</td></tr><tr data-v-937209ad><td data-v-937209ad>to</td><td data-v-937209ad>Teleport 挂载位置</td><td data-v-937209ad>string</td><td data-v-937209ad>&#39;body&#39;</td></tr><tr data-v-937209ad><td data-v-937209ad>center</td><td data-v-937209ad>是否在容器中自动居中</td><td data-v-937209ad>boolean</td><td data-v-937209ad>false</td></tr><tr data-v-937209ad><td data-v-937209ad>defaultPosition</td><td data-v-937209ad>默认位置 <code data-v-937209ad>{ x, y }</code></td><td data-v-937209ad>PositionType</td><td data-v-937209ad>{0,0}</td></tr><tr data-v-937209ad><td data-v-937209ad>width</td><td data-v-937209ad>内容区域宽度</td><td data-v-937209ad>number/string</td><td data-v-937209ad>必填</td></tr><tr data-v-937209ad><td data-v-937209ad>height</td><td data-v-937209ad>内容区域高度</td><td data-v-937209ad>number/string</td><td data-v-937209ad>必填</td></tr><tr data-v-937209ad><td data-v-937209ad>contentStyle</td><td data-v-937209ad>内容区域行内样式</td><td data-v-937209ad>string</td><td data-v-937209ad>—</td></tr><tr data-v-937209ad><td data-v-937209ad>contentClass</td><td data-v-937209ad>内容区域自定义 class</td><td data-v-937209ad>string</td><td data-v-937209ad>—</td></tr></tbody></table><h2 data-v-937209ad>Window Slots</h2><table data-v-937209ad><thead data-v-937209ad><tr data-v-937209ad><th data-v-937209ad>插槽名</th><th data-v-937209ad>说明</th></tr></thead><tbody data-v-937209ad><tr data-v-937209ad><td data-v-937209ad>default</td><td data-v-937209ad>内容区域插槽</td></tr></tbody></table><h2 data-v-937209ad>Window Events</h2><table data-v-937209ad><thead data-v-937209ad><tr data-v-937209ad><th data-v-937209ad>事件名</th><th data-v-937209ad>说明</th><th data-v-937209ad>回调参数</th></tr></thead><tbody data-v-937209ad><tr data-v-937209ad><td data-v-937209ad>close</td><td data-v-937209ad>点击关闭按钮时触发</td><td data-v-937209ad>—</td></tr></tbody></table>",6))]))}}),A=x(E,[["__scopeId","data-v-937209ad"]]);export{A as default};
