import{_ as s}from"./index.vue_vue_type_script_setup_true_lang-Da-Rx52G.js";import{d as u,h as v,r as i,o,c as m,e as c,f as e,a as n,w as f,g as _,_ as b}from"./index-DDzZDXhJ.js";const O=u({__name:"Oar9",setup(p){const t=v("");return(a,d)=>{const l=i("OarInput");return o(),m(l,{default:"",placeholder:"Please input",modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=r=>t.value=r)},null,8,["modelValue"])}}}),I=u({__name:"Oar10",setup(p){const t=v("");return(a,d)=>{const l=i("OarInput");return o(),m(l,{placeholder:"Please input",modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=r=>t.value=r)},null,8,["modelValue"])}}}),V=u({__name:"Oar11",setup(p){const t=v("");return(a,d)=>{const l=i("OarInput");return o(),m(l,{placeholder:"Please input",disabled:"",modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=r=>t.value=r)},null,8,["modelValue"])}}}),g=u({__name:"Oar12",setup(p){const t=v("");return(a,d)=>{const l=i("OarInput");return o(),m(l,{placeholder:"Please input",readonly:"",modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=r=>t.value=r)},null,8,["modelValue"])}}}),h=u({__name:"Oar13",setup(p){const t=v("");return(a,d)=>{const l=i("OarInput");return o(),m(l,{clearable:"",placeholder:"Please input",modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=r=>t.value=r)},null,8,["modelValue"])}}}),x=u({__name:"Oar14",setup(p){const t=v("");return(a,d)=>{const l=i("OarInput");return o(),m(l,{type:"password",placeholder:"password",modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=r=>t.value=r)},null,8,["modelValue"])}}}),y=u({__name:"Oar15",setup(p){const t=v("");return(a,d)=>{const l=i("OarInput");return o(),m(l,{clearable:"",maxlength:"50",modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=r=>t.value=r)},null,8,["modelValue"])}}}),w=u({__name:"Oar16",setup(p){const t=v("");return(a,d)=>{const l=i("OarInput");return o(),m(l,{clearable:"",modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=r=>t.value=r),modelModifiers:{lowercase:!0}},null,8,["modelValue"])}}}),q={class:"markdown-body"},P=u({__name:"input",setup(p){return(t,a)=>(o(),c("div",q,[a[0]||(a[0]=e("h1",null,"Input输入框",-1)),a[1]||(a[1]=e("p",null,"通过键盘输入字符",-1)),a[2]||(a[2]=e("h2",null,"默认样式",-1)),a[3]||(a[3]=e("p",null,"浏览器默认自带的样式，只对其width/height/color/font-size保持一致，其余均为浏览器自带样式",-1)),a[4]||(a[4]=e("blockquote",null,[e("p",null,"clearable属性不会生效，maxlength属性不会显示输入字符")],-1)),n(s,{code:`<template>
<OarInput default placeholder='Please input' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:f(()=>[n(O)]),_:1}),a[5]||(a[5]=e("h2",null,"基础用法",-1)),n(s,{code:`<template>
<OarInput placeholder='Please input' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:f(()=>[n(I)]),_:1}),a[6]||(a[6]=e("h2",null,"禁用状态",-1)),a[7]||(a[7]=e("p",null,"使用 disabled 属性来控制 input 组件是否为禁用状态",-1)),n(s,{code:`<template>
<OarInput placeholder='Please input' disabled v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:f(()=>[n(V)]),_:1}),a[8]||(a[8]=e("h2",null,"只读状态",-1)),a[9]||(a[9]=e("p",null,"使用 readonly 属性来控制 input 组件是否为只读状态",-1)),n(s,{code:`<template>
<OarInput placeholder='Please input' readonly v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:f(()=>[n(g)]),_:1}),a[10]||(a[10]=e("h2",null,"一键清空",-1)),a[11]||(a[11]=e("p",null,"使用 clearable 属性即可得到一个可一键清空的输入框",-1)),n(s,{code:`<template>
<OarInput clearable placeholder='Please input' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:f(()=>[n(h)]),_:1}),a[12]||(a[12]=e("h2",null,"密码框",-1)),a[13]||(a[13]=e("p",null,'使用 type="password" 即可得到一个可切换显示隐藏的密码框',-1)),n(s,{code:`<template>
<OarInput type='password' placeholder='password' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:f(()=>[n(x)]),_:1}),a[14]||(a[14]=e("h2",null,"输入长度限制",-1)),a[15]||(a[15]=e("p",null,"使用maxlength属性，来控制输入的最大字数",-1)),n(s,{code:`<template>
<OarInput clearable maxlength='50' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:f(()=>[n(y)]),_:1}),a[16]||(a[16]=e("h2",null,"v-model 修饰符",-1)),a[17]||(a[17]=e("p",null,"使用v-model.lowercase修饰符，来保证输入的内容全部转为小写",-1)),n(s,{code:`<template>
<OarInput clearable v-model.lowercase='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:f(()=>[n(w)]),_:1}),a[18]||(a[18]=_("<h2 data-v-4a67fa87>Input Attributes</h2><blockquote data-v-4a67fa87><p data-v-4a67fa87>支持input全部原生属性</p></blockquote><table data-v-4a67fa87><thead data-v-4a67fa87><tr data-v-4a67fa87><th data-v-4a67fa87>属性名</th><th data-v-4a67fa87>说明</th><th data-v-4a67fa87>类型</th><th data-v-4a67fa87>默认值</th></tr></thead><tbody data-v-4a67fa87><tr data-v-4a67fa87><td data-v-4a67fa87>default</td><td data-v-4a67fa87>是否显示浏览器默认样式</td><td data-v-4a67fa87>boolean</td><td data-v-4a67fa87>false</td></tr><tr data-v-4a67fa87><td data-v-4a67fa87>v-model</td><td data-v-4a67fa87>绑定值</td><td data-v-4a67fa87>string</td><td data-v-4a67fa87>-</td></tr><tr data-v-4a67fa87><td data-v-4a67fa87>type</td><td data-v-4a67fa87>显示文本框或密码框</td><td data-v-4a67fa87>&quot;text&quot;、&quot;password&quot;</td><td data-v-4a67fa87>&quot;text&quot;</td></tr><tr data-v-4a67fa87><td data-v-4a67fa87>placeholder</td><td data-v-4a67fa87>输入框占位文本</td><td data-v-4a67fa87>string</td><td data-v-4a67fa87>-</td></tr><tr data-v-4a67fa87><td data-v-4a67fa87>disabled</td><td data-v-4a67fa87>是否为禁用状态</td><td data-v-4a67fa87>boolean</td><td data-v-4a67fa87>false</td></tr><tr data-v-4a67fa87><td data-v-4a67fa87>readonly</td><td data-v-4a67fa87>是否为只读状态</td><td data-v-4a67fa87>boolean</td><td data-v-4a67fa87>false</td></tr><tr data-v-4a67fa87><td data-v-4a67fa87>clearable</td><td data-v-4a67fa87>是否显示清空按钮</td><td data-v-4a67fa87>boolean</td><td data-v-4a67fa87>false</td></tr><tr data-v-4a67fa87><td data-v-4a67fa87>maxlength</td><td data-v-4a67fa87>输入的最大字符</td><td data-v-4a67fa87>number、string</td><td data-v-4a67fa87>-</td></tr></tbody></table><h2 data-v-4a67fa87>Input Events</h2><blockquote data-v-4a67fa87><p data-v-4a67fa87>支持input全部事件</p></blockquote><table data-v-4a67fa87><thead data-v-4a67fa87><tr data-v-4a67fa87><th data-v-4a67fa87>事件名</th><th data-v-4a67fa87>说明</th><th data-v-4a67fa87>类型</th></tr></thead><tbody data-v-4a67fa87><tr data-v-4a67fa87><td data-v-4a67fa87>focus</td><td data-v-4a67fa87>当选择器的输入框获得焦点时触发</td><td data-v-4a67fa87>Function</td></tr><tr data-v-4a67fa87><td data-v-4a67fa87>blur</td><td data-v-4a67fa87>当选择器的输入框失去焦点时触发</td><td data-v-4a67fa87>Function</td></tr><tr data-v-4a67fa87><td data-v-4a67fa87>input</td><td data-v-4a67fa87>在 Input 值改变时触发</td><td data-v-4a67fa87>Function</td></tr><tr data-v-4a67fa87><td data-v-4a67fa87>clear</td><td data-v-4a67fa87>在点击由 clearable 属性生成的清空按钮时触发</td><td data-v-4a67fa87>Function</td></tr></tbody></table><h2 data-v-4a67fa87>Input Exposes</h2><table data-v-4a67fa87><thead data-v-4a67fa87><tr data-v-4a67fa87><th data-v-4a67fa87>名称</th><th data-v-4a67fa87>说明</th><th data-v-4a67fa87>类型</th></tr></thead><tbody data-v-4a67fa87><tr data-v-4a67fa87><td data-v-4a67fa87>ref</td><td data-v-4a67fa87>HTML元素 input</td><td data-v-4a67fa87>Vue Ref</td></tr><tr data-v-4a67fa87><td data-v-4a67fa87>clear</td><td data-v-4a67fa87>清除 input 值</td><td data-v-4a67fa87>Function</td></tr><tr data-v-4a67fa87><td data-v-4a67fa87>focus</td><td data-v-4a67fa87>使 input 获取焦点</td><td data-v-4a67fa87>Function</td></tr><tr data-v-4a67fa87><td data-v-4a67fa87>blur</td><td data-v-4a67fa87>使 input 失去焦点</td><td data-v-4a67fa87>Function</td></tr></tbody></table>",8))]))}}),U=b(P,[["__scopeId","data-v-4a67fa87"]]);export{U as default};
