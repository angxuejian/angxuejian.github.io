import{_ as m}from"./index.vue_vue_type_script_setup_true_lang.BzMyRLuE.js";import{j as u,i as O,r,d as p,k as f,n as d,p as s,q as v,l as a,V as x}from"./vendor.B8knQlvs.js";import{_ as y}from"../index.BQE6912r.js";import"./vicons.BNz2LP8I.js";import"./vueuse.Cvm5TgXm.js";import"./throttle-debounce.DNtPP7FE.js";const h={style:{display:"flex",gap:"10px"}},_=u({__name:"Oar39",setup(w){const e=O(!1);return(n,t)=>{const o=r("OarButton"),i=r("OarWindow");return p(),f("div",h,[d(o,{onClick:t[0]||(t[0]=l=>e.value=!0)},{default:s(()=>t[2]||(t[2]=[v("打开窗口")])),_:1}),d(i,{center:"",show:e.value,"onUpdate:show":t[1]||(t[1]=l=>e.value=l),title:"Basic Window",width:300,height:200},{default:s(()=>t[3]||(t[3]=[a("div",null,"内容",-1)])),_:1},8,["show"])])}}}),W={style:{display:"flex",gap:"10px"}},B=u({__name:"Oar40",setup(w){const e=O(!1);return(n,t)=>{const o=r("OarButton"),i=r("OarWindow");return p(),f("div",W,[d(o,{onClick:t[0]||(t[0]=l=>e.value=!0)},{default:s(()=>t[2]||(t[2]=[v("打开窗口")])),_:1}),d(i,{show:e.value,"onUpdate:show":t[1]||(t[1]=l=>e.value=l),title:"Default Position",width:300,height:200,defaultPosition:{x:50,y:80}},{default:s(()=>t[3]||(t[3]=[a("div",null,"设置位置：x:50, y: 80",-1)])),_:1},8,["show"])])}}}),b={style:{display:"flex",gap:"10px"}},C=u({__name:"Oar41",setup(w){const e=O(!1);return(n,t)=>{const o=r("OarButton"),i=r("OarWindow");return p(),f("div",b,[d(o,{onClick:t[0]||(t[0]=l=>e.value=!0)},{default:s(()=>t[2]||(t[2]=[v("居中窗口")])),_:1}),d(i,{center:"",show:e.value,"onUpdate:show":t[1]||(t[1]=l=>e.value=l),title:"Basic Window",width:300,height:200},{default:s(()=>t[3]||(t[3]=[a("div",null,"内容",-1)])),_:1},8,["show"])])}}}),$={style:{display:"flex",gap:"10px"}},k=u({__name:"Oar42",setup(w){const e=O(!1);return(n,t)=>{const o=r("OarButton"),i=r("OarWindow");return p(),f("div",$,[d(o,{onClick:t[0]||(t[0]=l=>e.value=!0)},{default:s(()=>t[2]||(t[2]=[v("打开内容窗口")])),_:1}),d(i,{show:e.value,"onUpdate:show":t[1]||(t[1]=l=>e.value=l),title:"Custom Content",width:300,height:200,contentStyle:"padding: 10px; background:#f4f4f4"},{default:s(()=>t[3]||(t[3]=[a("div",null,"这里是内容区域，你可以放任何组件。",-1)])),_:1},8,["show"])])}}}),P={style:{display:"flex",gap:"10px"}},S=u({__name:"Oar43",setup(w){const e=O(!1);return(n,t)=>{const o=r("OarButton"),i=r("OarWindow");return p(),f("div",P,[d(o,{onClick:t[0]||(t[0]=l=>e.value=!0)},{default:s(()=>t[2]||(t[2]=[v("可拖拽窗口")])),_:1}),d(i,{show:e.value,"onUpdate:show":t[1]||(t[1]=l=>e.value=l),title:"Draggable Window",width:300,height:200},{default:s(()=>t[3]||(t[3]=[a("div",null,"去试试拖拽",-1)])),_:1},8,["show"])])}}}),U={style:{display:"flex",gap:"10px"}},N=u({__name:"Oar44",setup(w){const e=O(!1),n=()=>alert("窗口已关闭");return(t,o)=>{const i=r("OarButton"),l=r("OarWindow");return p(),f("div",U,[d(i,{onClick:o[0]||(o[0]=g=>e.value=!0)},{default:s(()=>o[2]||(o[2]=[v("打开窗口")])),_:1}),d(l,{show:e.value,"onUpdate:show":o[1]||(o[1]=g=>e.value=g),title:"Close Event",center:"",onClose:n,width:300,height:200},{default:s(()=>o[3]||(o[3]=[a("div",null,"关闭后，会有回调",-1)])),_:1},8,["show"])])}}}),V={class:"markdown-body"},D=u({__name:"window",setup(w){return(e,n)=>(p(),f("div",V,[n[0]||(n[0]=a("h1",null,"Window 窗口",-1)),n[1]||(n[1]=a("p",null,"支持可拖动、可居中、可指定渲染容器的窗口组件。",-1)),n[2]||(n[2]=a("h2",null,"基础用法",-1)),n[3]||(n[3]=a("p",null,"使用 v-model:show 控制窗口显示与隐藏。",-1)),d(m,{code:`<template>
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
`},{default:s(()=>[d(_)]),_:1}),n[4]||(n[4]=a("h2",null,"默认位置",-1)),n[5]||(n[5]=a("p",null,"通过 defaultPosition 设置窗口初始位置，默认为 { x: 0, y: 0 }。",-1)),d(m,{code:`<template>
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
`},{default:s(()=>[d(B)]),_:1}),n[6]||(n[6]=a("h2",null,"居中窗口",-1)),n[7]||(n[7]=a("p",null,"当 center = true 时，窗口会在容器中自动居中。",-1)),d(m,{code:`<template>
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
`},{default:s(()=>[d(C)]),_:1}),n[8]||(n[8]=a("h2",null,"自定义内容",-1)),n[9]||(n[9]=a("p",null,"通过 contentClass 和 contentStyle 为内容区域设置样式。",-1)),d(m,{code:`<template>

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
`},{default:s(()=>[d(k)]),_:1}),n[10]||(n[10]=a("h2",null,"拖拽窗口",-1)),n[11]||(n[11]=a("p",null,"窗口顶部标题栏支持鼠标与触摸拖拽。",-1)),d(m,{code:`<template>
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
`},{default:s(()=>[d(S)]),_:1}),n[12]||(n[12]=a("h2",null,"关闭事件",-1)),n[13]||(n[13]=a("p",null,[v("点击关闭按钮时触发 "),a("code",null,"close"),v(" 事件。")],-1)),d(m,{code:`<template>
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
`},{default:s(()=>[d(N)]),_:1}),n[14]||(n[14]=x("<h2 data-v-9763519e>Window Attributes</h2><table data-v-9763519e><thead data-v-9763519e><tr data-v-9763519e><th data-v-9763519e>属性名</th><th data-v-9763519e>说明</th><th data-v-9763519e>类型</th><th data-v-9763519e>默认值</th></tr></thead><tbody data-v-9763519e><tr data-v-9763519e><td data-v-9763519e>show (v-model)</td><td data-v-9763519e>是否显示窗口</td><td data-v-9763519e>boolean</td><td data-v-9763519e>false</td></tr><tr data-v-9763519e><td data-v-9763519e>title</td><td data-v-9763519e>窗口标题</td><td data-v-9763519e>string</td><td data-v-9763519e>&#39;New Tab&#39;</td></tr><tr data-v-9763519e><td data-v-9763519e>to</td><td data-v-9763519e>Teleport 挂载位置</td><td data-v-9763519e>string</td><td data-v-9763519e>&#39;body&#39;</td></tr><tr data-v-9763519e><td data-v-9763519e>center</td><td data-v-9763519e>是否在容器中自动居中</td><td data-v-9763519e>boolean</td><td data-v-9763519e>false</td></tr><tr data-v-9763519e><td data-v-9763519e>defaultPosition</td><td data-v-9763519e>默认位置 <code data-v-9763519e>{ x, y }</code></td><td data-v-9763519e>PositionType</td><td data-v-9763519e>{0,0}</td></tr><tr data-v-9763519e><td data-v-9763519e>width</td><td data-v-9763519e>内容区域宽度</td><td data-v-9763519e>number/string</td><td data-v-9763519e>必填</td></tr><tr data-v-9763519e><td data-v-9763519e>height</td><td data-v-9763519e>内容区域高度</td><td data-v-9763519e>number/string</td><td data-v-9763519e>必填</td></tr><tr data-v-9763519e><td data-v-9763519e>contentStyle</td><td data-v-9763519e>内容区域行内样式</td><td data-v-9763519e>string</td><td data-v-9763519e>—</td></tr><tr data-v-9763519e><td data-v-9763519e>contentClass</td><td data-v-9763519e>内容区域自定义 class</td><td data-v-9763519e>string</td><td data-v-9763519e>—</td></tr></tbody></table><h2 data-v-9763519e>Window Slots</h2><table data-v-9763519e><thead data-v-9763519e><tr data-v-9763519e><th data-v-9763519e>插槽名</th><th data-v-9763519e>说明</th></tr></thead><tbody data-v-9763519e><tr data-v-9763519e><td data-v-9763519e>default</td><td data-v-9763519e>内容区域插槽</td></tr></tbody></table><h2 data-v-9763519e>Window Events</h2><table data-v-9763519e><thead data-v-9763519e><tr data-v-9763519e><th data-v-9763519e>事件名</th><th data-v-9763519e>说明</th><th data-v-9763519e>回调参数</th></tr></thead><tbody data-v-9763519e><tr data-v-9763519e><td data-v-9763519e>close</td><td data-v-9763519e>点击关闭按钮时触发</td><td data-v-9763519e>—</td></tr></tbody></table>",6))]))}}),c=y(D,[["__scopeId","data-v-9763519e"]]);export{c as default};
