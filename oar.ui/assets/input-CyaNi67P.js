import{_ as p}from"./index.vue_vue_type_script_setup_true_lang-BkC53fyS.js";import{d as r,h as v,r as i,o as u,c as m,e as f,f as d,a as n,w as s,g as c,_}from"./index-DdTNnd7p.js";const O=r({__name:"Oar5",setup(o){const t=v("");return(a,e)=>{const l=i("OarInput");return u(),m(l,{default:"",placeholder:"Please input",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=b=>t.value=b)},null,8,["modelValue"])}}}),I=r({__name:"Oar6",setup(o){const t=v("");return(a,e)=>{const l=i("OarInput");return u(),m(l,{placeholder:"Please input",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=b=>t.value=b)},null,8,["modelValue"])}}}),V=r({__name:"Oar7",setup(o){const t=v("");return(a,e)=>{const l=i("OarInput");return u(),m(l,{placeholder:"Please input",disabled:"",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=b=>t.value=b)},null,8,["modelValue"])}}}),g=r({__name:"Oar8",setup(o){const t=v("");return(a,e)=>{const l=i("OarInput");return u(),m(l,{placeholder:"Please input",readonly:"",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=b=>t.value=b)},null,8,["modelValue"])}}}),h=r({__name:"Oar9",setup(o){const t=v("");return(a,e)=>{const l=i("OarInput");return u(),m(l,{clearable:"",placeholder:"Please input",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=b=>t.value=b)},null,8,["modelValue"])}}}),x=r({__name:"Oar10",setup(o){const t=v("");return(a,e)=>{const l=i("OarInput");return u(),m(l,{type:"password",placeholder:"password",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=b=>t.value=b)},null,8,["modelValue"])}}}),y=r({__name:"Oar11",setup(o){const t=v("");return(a,e)=>{const l=i("OarInput");return u(),m(l,{clearable:"",maxlength:"50",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=b=>t.value=b)},null,8,["modelValue"])}}}),w=r({__name:"Oar12",setup(o){const t=v("");return(a,e)=>{const l=i("OarInput");return u(),m(l,{clearable:"",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=b=>t.value=b),modelModifiers:{lowercase:!0}},null,8,["modelValue"])}}}),q={class:"markdown-body"},P=r({__name:"input",setup(o){return(t,a)=>(u(),f("div",q,[a[0]||(a[0]=d("h1",null,"Input输入框",-1)),a[1]||(a[1]=d("p",null,"通过键盘输入字符",-1)),a[2]||(a[2]=d("h2",null,"默认样式",-1)),a[3]||(a[3]=d("p",null,"浏览器默认自带的样式，只对其width/height/color/font-size保持一致，其余均为浏览器自带样式",-1)),a[4]||(a[4]=d("blockquote",null,[d("p",null,"clearable属性不会生效，maxlength属性不会显示输入字符")],-1)),n(p,{code:`<template>
    <OarInput default placeholder='Please input' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:s(()=>[n(O)]),_:1}),a[5]||(a[5]=d("h2",null,"基础用法",-1)),n(p,{code:`<template>
    <OarInput placeholder='Please input' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:s(()=>[n(I)]),_:1}),a[6]||(a[6]=d("h2",null,"禁用状态",-1)),a[7]||(a[7]=d("p",null,"使用 disabled 属性来控制 input 组件是否为禁用状态",-1)),n(p,{code:`<template>
    <OarInput placeholder='Please input' disabled v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:s(()=>[n(V)]),_:1}),a[8]||(a[8]=d("h2",null,"只读状态",-1)),a[9]||(a[9]=d("p",null,"使用 readonly 属性来控制 input 组件是否为只读状态",-1)),n(p,{code:`<template>
    <OarInput placeholder='Please input' readonly v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:s(()=>[n(g)]),_:1}),a[10]||(a[10]=d("h2",null,"一键清空",-1)),a[11]||(a[11]=d("p",null,"使用 clearable 属性即可得到一个可一键清空的输入框",-1)),n(p,{code:`<template>
    <OarInput clearable placeholder='Please input' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:s(()=>[n(h)]),_:1}),a[12]||(a[12]=d("h2",null,"密码框",-1)),a[13]||(a[13]=d("p",null,'使用 type="password" 即可得到一个可切换显示隐藏的密码框',-1)),n(p,{code:`<template>
    <OarInput type='password' placeholder='password' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:s(()=>[n(x)]),_:1}),a[14]||(a[14]=d("h2",null,"输入长度限制",-1)),a[15]||(a[15]=d("p",null,"使用maxlength属性，来控制输入的最大字数",-1)),n(p,{code:`<template>
    <OarInput clearable maxlength='50' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:s(()=>[n(y)]),_:1}),a[16]||(a[16]=d("h2",null,"v-model 修饰符",-1)),a[17]||(a[17]=d("p",null,"使用v-model.lowercase修饰符，来保证输入的内容全部转为小写",-1)),n(p,{code:`<template>
    <OarInput clearable v-model.lowercase='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:s(()=>[n(w)]),_:1}),a[18]||(a[18]=c("<h2 data-v-7ab5bae5>Input Attributes</h2><blockquote data-v-7ab5bae5><p data-v-7ab5bae5>支持input全部原生属性</p></blockquote><table data-v-7ab5bae5><thead data-v-7ab5bae5><tr data-v-7ab5bae5><th data-v-7ab5bae5>属性名</th><th data-v-7ab5bae5>说明</th><th data-v-7ab5bae5>类型</th><th data-v-7ab5bae5>默认值</th></tr></thead><tbody data-v-7ab5bae5><tr data-v-7ab5bae5><td data-v-7ab5bae5>default</td><td data-v-7ab5bae5>是否显示浏览器默认样式</td><td data-v-7ab5bae5>boolean</td><td data-v-7ab5bae5>false</td></tr><tr data-v-7ab5bae5><td data-v-7ab5bae5>v-model</td><td data-v-7ab5bae5>绑定值</td><td data-v-7ab5bae5>string</td><td data-v-7ab5bae5>-</td></tr><tr data-v-7ab5bae5><td data-v-7ab5bae5>type</td><td data-v-7ab5bae5>显示文本框或密码框</td><td data-v-7ab5bae5>&quot;text&quot;、&quot;password&quot;</td><td data-v-7ab5bae5>&quot;text&quot;</td></tr><tr data-v-7ab5bae5><td data-v-7ab5bae5>placeholder</td><td data-v-7ab5bae5>输入框占位文本</td><td data-v-7ab5bae5>string</td><td data-v-7ab5bae5>-</td></tr><tr data-v-7ab5bae5><td data-v-7ab5bae5>disabled</td><td data-v-7ab5bae5>是否为禁用状态</td><td data-v-7ab5bae5>boolean</td><td data-v-7ab5bae5>false</td></tr><tr data-v-7ab5bae5><td data-v-7ab5bae5>readonly</td><td data-v-7ab5bae5>是否为只读状态</td><td data-v-7ab5bae5>boolean</td><td data-v-7ab5bae5>false</td></tr><tr data-v-7ab5bae5><td data-v-7ab5bae5>clearable</td><td data-v-7ab5bae5>是否显示清空按钮</td><td data-v-7ab5bae5>boolean</td><td data-v-7ab5bae5>false</td></tr><tr data-v-7ab5bae5><td data-v-7ab5bae5>maxlength</td><td data-v-7ab5bae5>输入的最大字符</td><td data-v-7ab5bae5>number、string</td><td data-v-7ab5bae5>-</td></tr></tbody></table><h2 data-v-7ab5bae5>Input Events</h2><blockquote data-v-7ab5bae5><p data-v-7ab5bae5>支持input全部事件</p></blockquote><table data-v-7ab5bae5><thead data-v-7ab5bae5><tr data-v-7ab5bae5><th data-v-7ab5bae5>事件名</th><th data-v-7ab5bae5>说明</th><th data-v-7ab5bae5>类型</th></tr></thead><tbody data-v-7ab5bae5><tr data-v-7ab5bae5><td data-v-7ab5bae5>focus</td><td data-v-7ab5bae5>当选择器的输入框获得焦点时触发</td><td data-v-7ab5bae5>Function</td></tr><tr data-v-7ab5bae5><td data-v-7ab5bae5>blur</td><td data-v-7ab5bae5>当选择器的输入框失去焦点时触发</td><td data-v-7ab5bae5>Function</td></tr><tr data-v-7ab5bae5><td data-v-7ab5bae5>input</td><td data-v-7ab5bae5>在 Input 值改变时触发</td><td data-v-7ab5bae5>Function</td></tr><tr data-v-7ab5bae5><td data-v-7ab5bae5>clear</td><td data-v-7ab5bae5>在点击由 clearable 属性生成的清空按钮时触发</td><td data-v-7ab5bae5>Function</td></tr></tbody></table><h2 data-v-7ab5bae5>Input Exposes</h2><table data-v-7ab5bae5><thead data-v-7ab5bae5><tr data-v-7ab5bae5><th data-v-7ab5bae5>名称</th><th data-v-7ab5bae5>说明</th><th data-v-7ab5bae5>类型</th></tr></thead><tbody data-v-7ab5bae5><tr data-v-7ab5bae5><td data-v-7ab5bae5>ref</td><td data-v-7ab5bae5>HTML元素 input</td><td data-v-7ab5bae5>Vue Ref</td></tr><tr data-v-7ab5bae5><td data-v-7ab5bae5>clear</td><td data-v-7ab5bae5>清除 input 值</td><td data-v-7ab5bae5>Function</td></tr><tr data-v-7ab5bae5><td data-v-7ab5bae5>focus</td><td data-v-7ab5bae5>使 input 获取焦点</td><td data-v-7ab5bae5>Function</td></tr><tr data-v-7ab5bae5><td data-v-7ab5bae5>blur</td><td data-v-7ab5bae5>使 input 失去焦点</td><td data-v-7ab5bae5>Function</td></tr></tbody></table>",8))]))}}),U=_(P,[["__scopeId","data-v-7ab5bae5"]]);export{U as default};
