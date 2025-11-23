import{_ as s}from"./index.vue_vue_type_script_setup_true_lang-CbkMDIjL.js";import{d as u,h as v,r as i,o,c as m,e as f,f as e,a as n,w as b,g as c,_}from"./index-CzTHPWGw.js";const O=u({__name:"Oar9",setup(p){const d=v("");return(t,a)=>{const l=i("OarInput");return o(),m(l,{default:"",placeholder:"Please input",modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=r=>d.value=r)},null,8,["modelValue"])}}}),I=u({__name:"Oar10",setup(p){const d=v("");return(t,a)=>{const l=i("OarInput");return o(),m(l,{placeholder:"Please input",modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=r=>d.value=r)},null,8,["modelValue"])}}}),V=u({__name:"Oar11",setup(p){const d=v("");return(t,a)=>{const l=i("OarInput");return o(),m(l,{placeholder:"Please input",disabled:"",modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=r=>d.value=r)},null,8,["modelValue"])}}}),g=u({__name:"Oar12",setup(p){const d=v("");return(t,a)=>{const l=i("OarInput");return o(),m(l,{placeholder:"Please input",readonly:"",modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=r=>d.value=r)},null,8,["modelValue"])}}}),h=u({__name:"Oar13",setup(p){const d=v("");return(t,a)=>{const l=i("OarInput");return o(),m(l,{clearable:"",placeholder:"Please input",modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=r=>d.value=r)},null,8,["modelValue"])}}}),x=u({__name:"Oar14",setup(p){const d=v("");return(t,a)=>{const l=i("OarInput");return o(),m(l,{type:"password",placeholder:"password",modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=r=>d.value=r)},null,8,["modelValue"])}}}),y=u({__name:"Oar15",setup(p){const d=v("");return(t,a)=>{const l=i("OarInput");return o(),m(l,{clearable:"",maxlength:"50",modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=r=>d.value=r)},null,8,["modelValue"])}}}),w=u({__name:"Oar16",setup(p){const d=v("");return(t,a)=>{const l=i("OarInput");return o(),m(l,{clearable:"",modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=r=>d.value=r),modelModifiers:{lowercase:!0}},null,8,["modelValue"])}}}),q={class:"markdown-body"},P=u({__name:"input",setup(p){return(d,t)=>(o(),f("div",q,[t[0]||(t[0]=e("h1",null,"Input输入框",-1)),t[1]||(t[1]=e("p",null,"通过键盘输入字符",-1)),t[2]||(t[2]=e("h2",null,"默认样式",-1)),t[3]||(t[3]=e("p",null,"浏览器默认自带的样式，只对其width/height/color/font-size保持一致，其余均为浏览器自带样式",-1)),t[4]||(t[4]=e("blockquote",null,[e("p",null,"clearable属性不会生效，maxlength属性不会显示输入字符")],-1)),n(s,{code:`<template>
    <OarInput default placeholder='Please input' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:b(()=>[n(O)]),_:1}),t[5]||(t[5]=e("h2",null,"基础用法",-1)),n(s,{code:`<template>
    <OarInput placeholder='Please input' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:b(()=>[n(I)]),_:1}),t[6]||(t[6]=e("h2",null,"禁用状态",-1)),t[7]||(t[7]=e("p",null,"使用 disabled 属性来控制 input 组件是否为禁用状态",-1)),n(s,{code:`<template>
    <OarInput placeholder='Please input' disabled v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:b(()=>[n(V)]),_:1}),t[8]||(t[8]=e("h2",null,"只读状态",-1)),t[9]||(t[9]=e("p",null,"使用 readonly 属性来控制 input 组件是否为只读状态",-1)),n(s,{code:`<template>
    <OarInput placeholder='Please input' readonly v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:b(()=>[n(g)]),_:1}),t[10]||(t[10]=e("h2",null,"一键清空",-1)),t[11]||(t[11]=e("p",null,"使用 clearable 属性即可得到一个可一键清空的输入框",-1)),n(s,{code:`<template>
    <OarInput clearable placeholder='Please input' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:b(()=>[n(h)]),_:1}),t[12]||(t[12]=e("h2",null,"密码框",-1)),t[13]||(t[13]=e("p",null,'使用 type="password" 即可得到一个可切换显示隐藏的密码框',-1)),n(s,{code:`<template>
    <OarInput type='password' placeholder='password' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:b(()=>[n(x)]),_:1}),t[14]||(t[14]=e("h2",null,"输入长度限制",-1)),t[15]||(t[15]=e("p",null,"使用maxlength属性，来控制输入的最大字数",-1)),n(s,{code:`<template>
    <OarInput clearable maxlength='50' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:b(()=>[n(y)]),_:1}),t[16]||(t[16]=e("h2",null,"v-model 修饰符",-1)),t[17]||(t[17]=e("p",null,"使用v-model.lowercase修饰符，来保证输入的内容全部转为小写",-1)),n(s,{code:`<template>
    <OarInput clearable v-model.lowercase='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:b(()=>[n(w)]),_:1}),t[18]||(t[18]=c("<h2 data-v-e1b8d1ad>Input Attributes</h2><blockquote data-v-e1b8d1ad><p data-v-e1b8d1ad>支持input全部原生属性</p></blockquote><table data-v-e1b8d1ad><thead data-v-e1b8d1ad><tr data-v-e1b8d1ad><th data-v-e1b8d1ad>属性名</th><th data-v-e1b8d1ad>说明</th><th data-v-e1b8d1ad>类型</th><th data-v-e1b8d1ad>默认值</th></tr></thead><tbody data-v-e1b8d1ad><tr data-v-e1b8d1ad><td data-v-e1b8d1ad>default</td><td data-v-e1b8d1ad>是否显示浏览器默认样式</td><td data-v-e1b8d1ad>boolean</td><td data-v-e1b8d1ad>false</td></tr><tr data-v-e1b8d1ad><td data-v-e1b8d1ad>v-model</td><td data-v-e1b8d1ad>绑定值</td><td data-v-e1b8d1ad>string</td><td data-v-e1b8d1ad>-</td></tr><tr data-v-e1b8d1ad><td data-v-e1b8d1ad>type</td><td data-v-e1b8d1ad>显示文本框或密码框</td><td data-v-e1b8d1ad>&quot;text&quot;、&quot;password&quot;</td><td data-v-e1b8d1ad>&quot;text&quot;</td></tr><tr data-v-e1b8d1ad><td data-v-e1b8d1ad>placeholder</td><td data-v-e1b8d1ad>输入框占位文本</td><td data-v-e1b8d1ad>string</td><td data-v-e1b8d1ad>-</td></tr><tr data-v-e1b8d1ad><td data-v-e1b8d1ad>disabled</td><td data-v-e1b8d1ad>是否为禁用状态</td><td data-v-e1b8d1ad>boolean</td><td data-v-e1b8d1ad>false</td></tr><tr data-v-e1b8d1ad><td data-v-e1b8d1ad>readonly</td><td data-v-e1b8d1ad>是否为只读状态</td><td data-v-e1b8d1ad>boolean</td><td data-v-e1b8d1ad>false</td></tr><tr data-v-e1b8d1ad><td data-v-e1b8d1ad>clearable</td><td data-v-e1b8d1ad>是否显示清空按钮</td><td data-v-e1b8d1ad>boolean</td><td data-v-e1b8d1ad>false</td></tr><tr data-v-e1b8d1ad><td data-v-e1b8d1ad>maxlength</td><td data-v-e1b8d1ad>输入的最大字符</td><td data-v-e1b8d1ad>number、string</td><td data-v-e1b8d1ad>-</td></tr></tbody></table><h2 data-v-e1b8d1ad>Input Events</h2><blockquote data-v-e1b8d1ad><p data-v-e1b8d1ad>支持input全部事件</p></blockquote><table data-v-e1b8d1ad><thead data-v-e1b8d1ad><tr data-v-e1b8d1ad><th data-v-e1b8d1ad>事件名</th><th data-v-e1b8d1ad>说明</th><th data-v-e1b8d1ad>类型</th></tr></thead><tbody data-v-e1b8d1ad><tr data-v-e1b8d1ad><td data-v-e1b8d1ad>focus</td><td data-v-e1b8d1ad>当选择器的输入框获得焦点时触发</td><td data-v-e1b8d1ad>Function</td></tr><tr data-v-e1b8d1ad><td data-v-e1b8d1ad>blur</td><td data-v-e1b8d1ad>当选择器的输入框失去焦点时触发</td><td data-v-e1b8d1ad>Function</td></tr><tr data-v-e1b8d1ad><td data-v-e1b8d1ad>input</td><td data-v-e1b8d1ad>在 Input 值改变时触发</td><td data-v-e1b8d1ad>Function</td></tr><tr data-v-e1b8d1ad><td data-v-e1b8d1ad>clear</td><td data-v-e1b8d1ad>在点击由 clearable 属性生成的清空按钮时触发</td><td data-v-e1b8d1ad>Function</td></tr></tbody></table><h2 data-v-e1b8d1ad>Input Exposes</h2><table data-v-e1b8d1ad><thead data-v-e1b8d1ad><tr data-v-e1b8d1ad><th data-v-e1b8d1ad>名称</th><th data-v-e1b8d1ad>说明</th><th data-v-e1b8d1ad>类型</th></tr></thead><tbody data-v-e1b8d1ad><tr data-v-e1b8d1ad><td data-v-e1b8d1ad>ref</td><td data-v-e1b8d1ad>HTML元素 input</td><td data-v-e1b8d1ad>Vue Ref</td></tr><tr data-v-e1b8d1ad><td data-v-e1b8d1ad>clear</td><td data-v-e1b8d1ad>清除 input 值</td><td data-v-e1b8d1ad>Function</td></tr><tr data-v-e1b8d1ad><td data-v-e1b8d1ad>focus</td><td data-v-e1b8d1ad>使 input 获取焦点</td><td data-v-e1b8d1ad>Function</td></tr><tr data-v-e1b8d1ad><td data-v-e1b8d1ad>blur</td><td data-v-e1b8d1ad>使 input 失去焦点</td><td data-v-e1b8d1ad>Function</td></tr></tbody></table>",8))]))}}),U=_(P,[["__scopeId","data-v-e1b8d1ad"]]);export{U as default};
