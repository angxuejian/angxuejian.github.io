import{_ as s}from"./index.vue_vue_type_script_setup_true_lang.BzMyRLuE.js";import{j as o,i,r as m,d as u,e as f,k as _,l as e,n,p as v,V as c}from"./vendor.B8knQlvs.js";import{_ as b}from"../index.BQE6912r.js";import"./vicons.BNz2LP8I.js";import"./vueuse.Cvm5TgXm.js";import"./throttle-debounce.DNtPP7FE.js";const O=o({__name:"Oar18",setup(p){const d=i("");return(t,a)=>{const l=m("OarInput");return u(),f(l,{default:"",placeholder:"Please input",modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=r=>d.value=r)},null,8,["modelValue"])}}}),I=o({__name:"Oar19",setup(p){const d=i("");return(t,a)=>{const l=m("OarInput");return u(),f(l,{placeholder:"Please input",modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=r=>d.value=r)},null,8,["modelValue"])}}}),V=o({__name:"Oar20",setup(p){const d=i("");return(t,a)=>{const l=m("OarInput");return u(),f(l,{placeholder:"Please input",disabled:"",modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=r=>d.value=r)},null,8,["modelValue"])}}}),g=o({__name:"Oar21",setup(p){const d=i("");return(t,a)=>{const l=m("OarInput");return u(),f(l,{placeholder:"Please input",readonly:"",modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=r=>d.value=r)},null,8,["modelValue"])}}}),x=o({__name:"Oar22",setup(p){const d=i("");return(t,a)=>{const l=m("OarInput");return u(),f(l,{clearable:"",placeholder:"Please input",modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=r=>d.value=r)},null,8,["modelValue"])}}}),h=o({__name:"Oar23",setup(p){const d=i("");return(t,a)=>{const l=m("OarInput");return u(),f(l,{type:"password",placeholder:"password",modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=r=>d.value=r)},null,8,["modelValue"])}}}),y=o({__name:"Oar24",setup(p){const d=i("");return(t,a)=>{const l=m("OarInput");return u(),f(l,{clearable:"",maxlength:"50",modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=r=>d.value=r)},null,8,["modelValue"])}}}),w=o({__name:"Oar25",setup(p){const d=i("");return(t,a)=>{const l=m("OarInput");return u(),f(l,{clearable:"",modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=r=>d.value=r),modelModifiers:{lowercase:!0}},null,8,["modelValue"])}}}),q={class:"markdown-body"},k=o({__name:"input",setup(p){return(d,t)=>(u(),_("div",q,[t[0]||(t[0]=e("h1",null,"Input输入框",-1)),t[1]||(t[1]=e("p",null,"通过键盘输入字符",-1)),t[2]||(t[2]=e("h2",null,"默认样式",-1)),t[3]||(t[3]=e("p",null,"浏览器默认自带的样式，只对其width/height/color/font-size保持一致，其余均为浏览器自带样式",-1)),t[4]||(t[4]=e("blockquote",null,[e("p",null,"clearable属性不会生效，maxlength属性不会显示输入字符")],-1)),n(s,{code:`<template>
<OarInput default placeholder='Please input' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:v(()=>[n(O)]),_:1}),t[5]||(t[5]=e("h2",null,"基础用法",-1)),n(s,{code:`<template>
<OarInput placeholder='Please input' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:v(()=>[n(I)]),_:1}),t[6]||(t[6]=e("h2",null,"禁用状态",-1)),t[7]||(t[7]=e("p",null,"使用 disabled 属性来控制 input 组件是否为禁用状态",-1)),n(s,{code:`<template>
<OarInput placeholder='Please input' disabled v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:v(()=>[n(V)]),_:1}),t[8]||(t[8]=e("h2",null,"只读状态",-1)),t[9]||(t[9]=e("p",null,"使用 readonly 属性来控制 input 组件是否为只读状态",-1)),n(s,{code:`<template>
<OarInput placeholder='Please input' readonly v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:v(()=>[n(g)]),_:1}),t[10]||(t[10]=e("h2",null,"一键清空",-1)),t[11]||(t[11]=e("p",null,"使用 clearable 属性即可得到一个可一键清空的输入框",-1)),n(s,{code:`<template>
<OarInput clearable placeholder='Please input' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:v(()=>[n(x)]),_:1}),t[12]||(t[12]=e("h2",null,"密码框",-1)),t[13]||(t[13]=e("p",null,'使用 type="password" 即可得到一个可切换显示隐藏的密码框',-1)),n(s,{code:`<template>
<OarInput type='password' placeholder='password' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:v(()=>[n(h)]),_:1}),t[14]||(t[14]=e("h2",null,"输入长度限制",-1)),t[15]||(t[15]=e("p",null,"使用maxlength属性，来控制输入的最大字数",-1)),n(s,{code:`<template>
<OarInput clearable maxlength='50' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:v(()=>[n(y)]),_:1}),t[16]||(t[16]=e("h2",null,"v-model 修饰符",-1)),t[17]||(t[17]=e("p",null,"使用v-model.lowercase修饰符，来保证输入的内容全部转为小写",-1)),n(s,{code:`<template>
<OarInput clearable v-model.lowercase='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:v(()=>[n(w)]),_:1}),t[18]||(t[18]=c("<h2 data-v-1d5560d1>Input Attributes</h2><blockquote data-v-1d5560d1><p data-v-1d5560d1>支持input全部原生属性</p></blockquote><table data-v-1d5560d1><thead data-v-1d5560d1><tr data-v-1d5560d1><th data-v-1d5560d1>属性名</th><th data-v-1d5560d1>说明</th><th data-v-1d5560d1>类型</th><th data-v-1d5560d1>默认值</th></tr></thead><tbody data-v-1d5560d1><tr data-v-1d5560d1><td data-v-1d5560d1>default</td><td data-v-1d5560d1>是否显示浏览器默认样式</td><td data-v-1d5560d1>boolean</td><td data-v-1d5560d1>false</td></tr><tr data-v-1d5560d1><td data-v-1d5560d1>v-model</td><td data-v-1d5560d1>绑定值</td><td data-v-1d5560d1>string</td><td data-v-1d5560d1>-</td></tr><tr data-v-1d5560d1><td data-v-1d5560d1>type</td><td data-v-1d5560d1>显示文本框或密码框</td><td data-v-1d5560d1>&quot;text&quot;、&quot;password&quot;</td><td data-v-1d5560d1>&quot;text&quot;</td></tr><tr data-v-1d5560d1><td data-v-1d5560d1>placeholder</td><td data-v-1d5560d1>输入框占位文本</td><td data-v-1d5560d1>string</td><td data-v-1d5560d1>-</td></tr><tr data-v-1d5560d1><td data-v-1d5560d1>disabled</td><td data-v-1d5560d1>是否为禁用状态</td><td data-v-1d5560d1>boolean</td><td data-v-1d5560d1>false</td></tr><tr data-v-1d5560d1><td data-v-1d5560d1>readonly</td><td data-v-1d5560d1>是否为只读状态</td><td data-v-1d5560d1>boolean</td><td data-v-1d5560d1>false</td></tr><tr data-v-1d5560d1><td data-v-1d5560d1>clearable</td><td data-v-1d5560d1>是否显示清空按钮</td><td data-v-1d5560d1>boolean</td><td data-v-1d5560d1>false</td></tr><tr data-v-1d5560d1><td data-v-1d5560d1>maxlength</td><td data-v-1d5560d1>输入的最大字符</td><td data-v-1d5560d1>number、string</td><td data-v-1d5560d1>-</td></tr></tbody></table><h2 data-v-1d5560d1>Input Events</h2><blockquote data-v-1d5560d1><p data-v-1d5560d1>支持input全部事件</p></blockquote><table data-v-1d5560d1><thead data-v-1d5560d1><tr data-v-1d5560d1><th data-v-1d5560d1>事件名</th><th data-v-1d5560d1>说明</th><th data-v-1d5560d1>类型</th></tr></thead><tbody data-v-1d5560d1><tr data-v-1d5560d1><td data-v-1d5560d1>focus</td><td data-v-1d5560d1>当选择器的输入框获得焦点时触发</td><td data-v-1d5560d1>Function</td></tr><tr data-v-1d5560d1><td data-v-1d5560d1>blur</td><td data-v-1d5560d1>当选择器的输入框失去焦点时触发</td><td data-v-1d5560d1>Function</td></tr><tr data-v-1d5560d1><td data-v-1d5560d1>input</td><td data-v-1d5560d1>在 Input 值改变时触发</td><td data-v-1d5560d1>Function</td></tr><tr data-v-1d5560d1><td data-v-1d5560d1>clear</td><td data-v-1d5560d1>在点击由 clearable 属性生成的清空按钮时触发</td><td data-v-1d5560d1>Function</td></tr></tbody></table><h2 data-v-1d5560d1>Input Exposes</h2><table data-v-1d5560d1><thead data-v-1d5560d1><tr data-v-1d5560d1><th data-v-1d5560d1>名称</th><th data-v-1d5560d1>说明</th><th data-v-1d5560d1>类型</th></tr></thead><tbody data-v-1d5560d1><tr data-v-1d5560d1><td data-v-1d5560d1>ref</td><td data-v-1d5560d1>HTML元素 input</td><td data-v-1d5560d1>Vue Ref</td></tr><tr data-v-1d5560d1><td data-v-1d5560d1>clear</td><td data-v-1d5560d1>清除 input 值</td><td data-v-1d5560d1>Function</td></tr><tr data-v-1d5560d1><td data-v-1d5560d1>focus</td><td data-v-1d5560d1>使 input 获取焦点</td><td data-v-1d5560d1>Function</td></tr><tr data-v-1d5560d1><td data-v-1d5560d1>blur</td><td data-v-1d5560d1>使 input 失去焦点</td><td data-v-1d5560d1>Function</td></tr></tbody></table>",8))]))}}),E=b(k,[["__scopeId","data-v-1d5560d1"]]);export{E as default};
