import{_ as m}from"./index.vue_vue_type_script_setup_true_lang.BCBTBbRe.js";import{j as v,i as O,r as l,d as u,k as p,n as d,p as f,q as i,l as a,Y as x}from"./vendor.CeStU7Qk.js";import{_ as y}from"../index.B1PJzrfS.js";import"./vicons.BjNJtlO6.js";import"./vueuse.DTp8AXO3.js";import"./throttle-debounce.DNtPP7FE.js";const h={style:{display:"flex",gap:"10px"}},_=v({__name:"Oar46",setup(w){const e=O(!1);return(n,t)=>{const o=l("OarButton"),r=l("OarWindow");return u(),p("div",h,[d(o,{onClick:t[0]||(t[0]=s=>e.value=!0)},{default:f(()=>t[2]||(t[2]=[i("打开窗口")])),_:1}),d(r,{center:"",show:e.value,"onUpdate:show":t[1]||(t[1]=s=>e.value=s),title:"Basic Window",width:300,height:200},{default:f(()=>t[3]||(t[3]=[a("div",null,"内容",-1)])),_:1},8,["show"])])}}}),W={style:{display:"flex",gap:"10px"}},B=v({__name:"Oar47",setup(w){const e=O(!1);return(n,t)=>{const o=l("OarButton"),r=l("OarWindow");return u(),p("div",W,[d(o,{onClick:t[0]||(t[0]=s=>e.value=!0)},{default:f(()=>t[2]||(t[2]=[i("打开窗口")])),_:1}),d(r,{show:e.value,"onUpdate:show":t[1]||(t[1]=s=>e.value=s),title:"Default Position",width:300,height:200,defaultPosition:{x:50,y:80}},{default:f(()=>t[3]||(t[3]=[a("div",null,"设置位置：x:50, y: 80",-1)])),_:1},8,["show"])])}}}),b={style:{display:"flex",gap:"10px"}},C=v({__name:"Oar48",setup(w){const e=O(!1);return(n,t)=>{const o=l("OarButton"),r=l("OarWindow");return u(),p("div",b,[d(o,{onClick:t[0]||(t[0]=s=>e.value=!0)},{default:f(()=>t[2]||(t[2]=[i("居中窗口")])),_:1}),d(r,{center:"",show:e.value,"onUpdate:show":t[1]||(t[1]=s=>e.value=s),title:"Basic Window",width:300,height:200},{default:f(()=>t[3]||(t[3]=[a("div",null,"内容",-1)])),_:1},8,["show"])])}}}),$={style:{display:"flex",gap:"10px"}},k=v({__name:"Oar49",setup(w){const e=O(!1);return(n,t)=>{const o=l("OarButton"),r=l("OarWindow");return u(),p("div",$,[d(o,{onClick:t[0]||(t[0]=s=>e.value=!0)},{default:f(()=>t[2]||(t[2]=[i("打开内容窗口")])),_:1}),d(r,{show:e.value,"onUpdate:show":t[1]||(t[1]=s=>e.value=s),title:"Custom Content",width:300,height:200,contentStyle:"padding: 10px; background:#f4f4f4"},{default:f(()=>t[3]||(t[3]=[a("div",null,"这里是内容区域，你可以放任何组件。",-1)])),_:1},8,["show"])])}}}),P={style:{display:"flex",gap:"10px"}},S=v({__name:"Oar50",setup(w){const e=O(!1);return(n,t)=>{const o=l("OarButton"),r=l("OarWindow");return u(),p("div",P,[d(o,{onClick:t[0]||(t[0]=s=>e.value=!0)},{default:f(()=>t[2]||(t[2]=[i("可拖拽窗口")])),_:1}),d(r,{show:e.value,"onUpdate:show":t[1]||(t[1]=s=>e.value=s),title:"Draggable Window",width:300,height:200},{default:f(()=>t[3]||(t[3]=[a("div",null,"去试试拖拽",-1)])),_:1},8,["show"])])}}}),U={style:{display:"flex",gap:"10px"}},N=v({__name:"Oar51",setup(w){const e=O(!1),n=()=>alert("窗口已关闭");return(t,o)=>{const r=l("OarButton"),s=l("OarWindow");return u(),p("div",U,[d(r,{onClick:o[0]||(o[0]=g=>e.value=!0)},{default:f(()=>o[2]||(o[2]=[i("打开窗口")])),_:1}),d(s,{show:e.value,"onUpdate:show":o[1]||(o[1]=g=>e.value=g),title:"Close Event",center:"",onClose:n,width:300,height:200},{default:f(()=>o[3]||(o[3]=[a("div",null,"关闭后，会有回调",-1)])),_:1},8,["show"])])}}}),D={class:"markdown-body"},E=v({__name:"window",setup(w){return(e,n)=>(u(),p("div",D,[n[0]||(n[0]=a("h1",null,"Window 窗口",-1)),n[1]||(n[1]=a("p",null,"支持可拖动、可居中、可指定渲染容器的窗口组件。",-1)),n[2]||(n[2]=a("h2",null,"基础用法",-1)),n[3]||(n[3]=a("p",null,"使用 v-model:show 控制窗口显示与隐藏。",-1)),d(m,{code:`<template>
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
`},{default:f(()=>[d(_)]),_:1}),n[4]||(n[4]=a("h2",null,"默认位置",-1)),n[5]||(n[5]=a("p",null,"通过 defaultPosition 设置窗口初始位置，默认为 { x: 0, y: 0 }。",-1)),d(m,{code:`<template>
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
`},{default:f(()=>[d(B)]),_:1}),n[6]||(n[6]=a("h2",null,"居中窗口",-1)),n[7]||(n[7]=a("p",null,"当 center = true 时，窗口会在容器中自动居中。",-1)),d(m,{code:`<template>
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
`},{default:f(()=>[d(C)]),_:1}),n[8]||(n[8]=a("h2",null,"自定义内容",-1)),n[9]||(n[9]=a("p",null,"通过 contentClass 和 contentStyle 为内容区域设置样式。",-1)),d(m,{code:`<template>

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
`},{default:f(()=>[d(k)]),_:1}),n[10]||(n[10]=a("h2",null,"拖拽窗口",-1)),n[11]||(n[11]=a("p",null,"窗口顶部标题栏支持鼠标与触摸拖拽。",-1)),d(m,{code:`<template>
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
`},{default:f(()=>[d(S)]),_:1}),n[12]||(n[12]=a("h2",null,"关闭事件",-1)),n[13]||(n[13]=a("p",null,[i("点击关闭按钮时触发 "),a("code",null,"close"),i(" 事件。")],-1)),d(m,{code:`<template>
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
`},{default:f(()=>[d(N)]),_:1}),n[14]||(n[14]=x("<h2 data-v-f839fe41>Window Attributes</h2><table data-v-f839fe41><thead data-v-f839fe41><tr data-v-f839fe41><th data-v-f839fe41>属性名</th><th data-v-f839fe41>说明</th><th data-v-f839fe41>类型</th><th data-v-f839fe41>默认值</th></tr></thead><tbody data-v-f839fe41><tr data-v-f839fe41><td data-v-f839fe41>show (v-model)</td><td data-v-f839fe41>是否显示窗口</td><td data-v-f839fe41>boolean</td><td data-v-f839fe41>false</td></tr><tr data-v-f839fe41><td data-v-f839fe41>title</td><td data-v-f839fe41>窗口标题</td><td data-v-f839fe41>string</td><td data-v-f839fe41>&#39;New Tab&#39;</td></tr><tr data-v-f839fe41><td data-v-f839fe41>to</td><td data-v-f839fe41>Teleport 挂载位置</td><td data-v-f839fe41>string</td><td data-v-f839fe41>&#39;body&#39;</td></tr><tr data-v-f839fe41><td data-v-f839fe41>center</td><td data-v-f839fe41>是否在容器中自动居中</td><td data-v-f839fe41>boolean</td><td data-v-f839fe41>false</td></tr><tr data-v-f839fe41><td data-v-f839fe41>defaultPosition</td><td data-v-f839fe41>默认位置 <code data-v-f839fe41>{ x, y }</code></td><td data-v-f839fe41>PositionType</td><td data-v-f839fe41>{0,0}</td></tr><tr data-v-f839fe41><td data-v-f839fe41>width</td><td data-v-f839fe41>内容区域宽度</td><td data-v-f839fe41>number/string</td><td data-v-f839fe41>必填</td></tr><tr data-v-f839fe41><td data-v-f839fe41>height</td><td data-v-f839fe41>内容区域高度</td><td data-v-f839fe41>number/string</td><td data-v-f839fe41>必填</td></tr><tr data-v-f839fe41><td data-v-f839fe41>contentStyle</td><td data-v-f839fe41>内容区域行内样式</td><td data-v-f839fe41>string</td><td data-v-f839fe41>—</td></tr><tr data-v-f839fe41><td data-v-f839fe41>contentClass</td><td data-v-f839fe41>内容区域自定义 class</td><td data-v-f839fe41>string</td><td data-v-f839fe41>—</td></tr></tbody></table><h2 data-v-f839fe41>Window Slots</h2><table data-v-f839fe41><thead data-v-f839fe41><tr data-v-f839fe41><th data-v-f839fe41>插槽名</th><th data-v-f839fe41>说明</th></tr></thead><tbody data-v-f839fe41><tr data-v-f839fe41><td data-v-f839fe41>default</td><td data-v-f839fe41>内容区域插槽</td></tr></tbody></table><h2 data-v-f839fe41>Window Events</h2><table data-v-f839fe41><thead data-v-f839fe41><tr data-v-f839fe41><th data-v-f839fe41>事件名</th><th data-v-f839fe41>说明</th><th data-v-f839fe41>回调参数</th></tr></thead><tbody data-v-f839fe41><tr data-v-f839fe41><td data-v-f839fe41>close</td><td data-v-f839fe41>点击关闭按钮时触发</td><td data-v-f839fe41>—</td></tr></tbody></table>",6))]))}}),Y=y(E,[["__scopeId","data-v-f839fe41"]]);export{Y as default};
