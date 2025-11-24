import{_ as w}from"./index.vue_vue_type_script_setup_true_lang-Cq1mfmsn.js";import{d as v,h as c,r,o as u,e as p,a as e,w as s,b,f as d,g as O,_ as g}from"./index-xqzwY4Hn.js";const h={style:{display:"flex",gap:"10px"}},x=v({__name:"Oar26",setup(f){const n=c(!1);return(a,t)=>{const o=r("OarButton"),i=r("OarWindow");return u(),p("div",h,[e(o,{onClick:t[0]||(t[0]=l=>n.value=!0)},{default:s(()=>t[2]||(t[2]=[b("打开窗口")])),_:1}),e(i,{center:"",show:n.value,"onUpdate:show":t[1]||(t[1]=l=>n.value=l),title:"Basic Window",width:300,height:200},{default:s(()=>t[3]||(t[3]=[d("div",null,"内容",-1)])),_:1},8,["show"])])}}}),y={style:{display:"flex",gap:"10px"}},_=v({__name:"Oar27",setup(f){const n=c(!1);return(a,t)=>{const o=r("OarButton"),i=r("OarWindow");return u(),p("div",y,[e(o,{onClick:t[0]||(t[0]=l=>n.value=!0)},{default:s(()=>t[2]||(t[2]=[b("打开窗口")])),_:1}),e(i,{show:n.value,"onUpdate:show":t[1]||(t[1]=l=>n.value=l),title:"Default Position",width:300,height:200,defaultPosition:{x:50,y:80}},{default:s(()=>t[3]||(t[3]=[d("div",null,"设置位置：x:50, y: 80",-1)])),_:1},8,["show"])])}}}),W={style:{display:"flex",gap:"10px"}},B=v({__name:"Oar28",setup(f){const n=c(!1);return(a,t)=>{const o=r("OarButton"),i=r("OarWindow");return u(),p("div",W,[e(o,{onClick:t[0]||(t[0]=l=>n.value=!0)},{default:s(()=>t[2]||(t[2]=[b("居中窗口")])),_:1}),e(i,{center:"",show:n.value,"onUpdate:show":t[1]||(t[1]=l=>n.value=l),title:"Basic Window",width:300,height:200},{default:s(()=>t[3]||(t[3]=[d("div",null,"内容",-1)])),_:1},8,["show"])])}}}),C={style:{display:"flex",gap:"10px"}},$=v({__name:"Oar29",setup(f){const n=c(!1);return(a,t)=>{const o=r("OarButton"),i=r("OarWindow");return u(),p("div",C,[e(o,{onClick:t[0]||(t[0]=l=>n.value=!0)},{default:s(()=>t[2]||(t[2]=[b("打开内容窗口")])),_:1}),e(i,{show:n.value,"onUpdate:show":t[1]||(t[1]=l=>n.value=l),title:"Custom Content",width:300,height:200,contentStyle:"padding: 10px; background:#f4f4f4"},{default:s(()=>t[3]||(t[3]=[d("div",null,"这里是内容区域，你可以放任何组件。",-1)])),_:1},8,["show"])])}}}),k={style:{display:"flex",gap:"10px"}},P=v({__name:"Oar30",setup(f){const n=c(!1);return(a,t)=>{const o=r("OarButton"),i=r("OarWindow");return u(),p("div",k,[e(o,{onClick:t[0]||(t[0]=l=>n.value=!0)},{default:s(()=>t[2]||(t[2]=[b("可拖拽窗口")])),_:1}),e(i,{show:n.value,"onUpdate:show":t[1]||(t[1]=l=>n.value=l),title:"Draggable Window",width:300,height:200},{default:s(()=>t[3]||(t[3]=[d("div",null,"去试试拖拽",-1)])),_:1},8,["show"])])}}}),S={style:{display:"flex",gap:"10px"}},U=v({__name:"Oar31",setup(f){const n=c(!1),a=()=>alert("窗口已关闭");return(t,o)=>{const i=r("OarButton"),l=r("OarWindow");return u(),p("div",S,[e(i,{onClick:o[0]||(o[0]=m=>n.value=!0)},{default:s(()=>o[2]||(o[2]=[b("打开窗口")])),_:1}),e(l,{show:n.value,"onUpdate:show":o[1]||(o[1]=m=>n.value=m),title:"Close Event",center:"",onClose:a,width:300,height:200},{default:s(()=>o[3]||(o[3]=[d("div",null,"关闭后，会有回调",-1)])),_:1},8,["show"])])}}}),N={class:"markdown-body"},D=v({__name:"window",setup(f){return(n,a)=>(u(),p("div",N,[a[0]||(a[0]=d("h1",null,"Window 窗口",-1)),a[1]||(a[1]=d("p",null,"支持可拖动、可居中、可指定渲染容器的窗口组件。",-1)),a[2]||(a[2]=d("h2",null,"基础用法",-1)),a[3]||(a[3]=d("p",null,"使用 v-model:show 控制窗口显示与隐藏。",-1)),e(w,{code:`<template>
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
`},{default:s(()=>[e(x)]),_:1}),a[4]||(a[4]=d("h2",null,"默认位置",-1)),a[5]||(a[5]=d("p",null,"通过 defaultPosition 设置窗口初始位置，默认为 { x: 0, y: 0 }。",-1)),e(w,{code:`<template>
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
`},{default:s(()=>[e(_)]),_:1}),a[6]||(a[6]=d("h2",null,"居中窗口",-1)),a[7]||(a[7]=d("p",null,"当 center = true 时，窗口会在容器中自动居中。",-1)),e(w,{code:`<template>
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
`},{default:s(()=>[e(B)]),_:1}),a[8]||(a[8]=d("h2",null,"自定义内容",-1)),a[9]||(a[9]=d("p",null,"通过 contentClass 和 contentStyle 为内容区域设置样式。",-1)),e(w,{code:`<template>
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
`},{default:s(()=>[e($)]),_:1}),a[10]||(a[10]=d("h2",null,"拖拽窗口",-1)),a[11]||(a[11]=d("p",null,"窗口顶部标题栏支持鼠标与触摸拖拽。",-1)),e(w,{code:`<template>
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
`},{default:s(()=>[e(P)]),_:1}),a[12]||(a[12]=d("h2",null,"关闭事件",-1)),a[13]||(a[13]=d("p",null,[b("点击关闭按钮时触发 "),d("code",null,"close"),b(" 事件。")],-1)),e(w,{code:`<template>
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
`},{default:s(()=>[e(U)]),_:1}),a[14]||(a[14]=O("<h2 data-v-b2ea85cb>Window Attributes</h2><table data-v-b2ea85cb><thead data-v-b2ea85cb><tr data-v-b2ea85cb><th data-v-b2ea85cb>属性名</th><th data-v-b2ea85cb>说明</th><th data-v-b2ea85cb>类型</th><th data-v-b2ea85cb>默认值</th></tr></thead><tbody data-v-b2ea85cb><tr data-v-b2ea85cb><td data-v-b2ea85cb>show (v-model)</td><td data-v-b2ea85cb>是否显示窗口</td><td data-v-b2ea85cb>boolean</td><td data-v-b2ea85cb>false</td></tr><tr data-v-b2ea85cb><td data-v-b2ea85cb>title</td><td data-v-b2ea85cb>窗口标题</td><td data-v-b2ea85cb>string</td><td data-v-b2ea85cb>&#39;New Tab&#39;</td></tr><tr data-v-b2ea85cb><td data-v-b2ea85cb>to</td><td data-v-b2ea85cb>Teleport 挂载位置</td><td data-v-b2ea85cb>string</td><td data-v-b2ea85cb>&#39;body&#39;</td></tr><tr data-v-b2ea85cb><td data-v-b2ea85cb>center</td><td data-v-b2ea85cb>是否在容器中自动居中</td><td data-v-b2ea85cb>boolean</td><td data-v-b2ea85cb>false</td></tr><tr data-v-b2ea85cb><td data-v-b2ea85cb>defaultPosition</td><td data-v-b2ea85cb>默认位置 <code data-v-b2ea85cb>{ x, y }</code></td><td data-v-b2ea85cb>PositionType</td><td data-v-b2ea85cb>{0,0}</td></tr><tr data-v-b2ea85cb><td data-v-b2ea85cb>width</td><td data-v-b2ea85cb>内容区域宽度</td><td data-v-b2ea85cb>number/string</td><td data-v-b2ea85cb>必填</td></tr><tr data-v-b2ea85cb><td data-v-b2ea85cb>height</td><td data-v-b2ea85cb>内容区域高度</td><td data-v-b2ea85cb>number/string</td><td data-v-b2ea85cb>必填</td></tr><tr data-v-b2ea85cb><td data-v-b2ea85cb>contentStyle</td><td data-v-b2ea85cb>内容区域行内样式</td><td data-v-b2ea85cb>string</td><td data-v-b2ea85cb>—</td></tr><tr data-v-b2ea85cb><td data-v-b2ea85cb>contentClass</td><td data-v-b2ea85cb>内容区域自定义 class</td><td data-v-b2ea85cb>string</td><td data-v-b2ea85cb>—</td></tr></tbody></table><h2 data-v-b2ea85cb>Window Slots</h2><table data-v-b2ea85cb><thead data-v-b2ea85cb><tr data-v-b2ea85cb><th data-v-b2ea85cb>插槽名</th><th data-v-b2ea85cb>说明</th></tr></thead><tbody data-v-b2ea85cb><tr data-v-b2ea85cb><td data-v-b2ea85cb>default</td><td data-v-b2ea85cb>内容区域插槽</td></tr></tbody></table><h2 data-v-b2ea85cb>Window Events</h2><table data-v-b2ea85cb><thead data-v-b2ea85cb><tr data-v-b2ea85cb><th data-v-b2ea85cb>事件名</th><th data-v-b2ea85cb>说明</th><th data-v-b2ea85cb>回调参数</th></tr></thead><tbody data-v-b2ea85cb><tr data-v-b2ea85cb><td data-v-b2ea85cb>close</td><td data-v-b2ea85cb>点击关闭按钮时触发</td><td data-v-b2ea85cb>—</td></tr></tbody></table>",6))]))}}),V=g(D,[["__scopeId","data-v-b2ea85cb"]]);export{V as default};
