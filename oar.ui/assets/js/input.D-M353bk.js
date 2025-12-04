import{_ as s}from"./index.vue_vue_type_script_setup_true_lang.BzMyRLuE.js";import{j as o,i as v,r as i,d as u,e as m,k as f,l as e,n,p as c,V as _}from"./vendor.B8knQlvs.js";import{_ as b}from"../index.BNn8yK7z.js";import"./vicons.BNz2LP8I.js";import"./vueuse.Cvm5TgXm.js";import"./throttle-debounce.DNtPP7FE.js";const O=o({__name:"Oar13",setup(p){const a=v("");return(t,d)=>{const l=i("OarInput");return u(),m(l,{default:"",placeholder:"Please input",modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=r=>a.value=r)},null,8,["modelValue"])}}}),I=o({__name:"Oar14",setup(p){const a=v("");return(t,d)=>{const l=i("OarInput");return u(),m(l,{placeholder:"Please input",modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=r=>a.value=r)},null,8,["modelValue"])}}}),V=o({__name:"Oar15",setup(p){const a=v("");return(t,d)=>{const l=i("OarInput");return u(),m(l,{placeholder:"Please input",disabled:"",modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=r=>a.value=r)},null,8,["modelValue"])}}}),g=o({__name:"Oar16",setup(p){const a=v("");return(t,d)=>{const l=i("OarInput");return u(),m(l,{placeholder:"Please input",readonly:"",modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=r=>a.value=r)},null,8,["modelValue"])}}}),x=o({__name:"Oar17",setup(p){const a=v("");return(t,d)=>{const l=i("OarInput");return u(),m(l,{clearable:"",placeholder:"Please input",modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=r=>a.value=r)},null,8,["modelValue"])}}}),h=o({__name:"Oar18",setup(p){const a=v("");return(t,d)=>{const l=i("OarInput");return u(),m(l,{type:"password",placeholder:"password",modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=r=>a.value=r)},null,8,["modelValue"])}}}),y=o({__name:"Oar19",setup(p){const a=v("");return(t,d)=>{const l=i("OarInput");return u(),m(l,{clearable:"",maxlength:"50",modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=r=>a.value=r)},null,8,["modelValue"])}}}),w=o({__name:"Oar20",setup(p){const a=v("");return(t,d)=>{const l=i("OarInput");return u(),m(l,{clearable:"",modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=r=>a.value=r),modelModifiers:{lowercase:!0}},null,8,["modelValue"])}}}),q={class:"markdown-body"},k=o({__name:"input",setup(p){return(a,t)=>(u(),f("div",q,[t[0]||(t[0]=e("h1",null,"Input输入框",-1)),t[1]||(t[1]=e("p",null,"通过键盘输入字符",-1)),t[2]||(t[2]=e("h2",null,"默认样式",-1)),t[3]||(t[3]=e("p",null,"浏览器默认自带的样式，只对其width/height/color/font-size保持一致，其余均为浏览器自带样式",-1)),t[4]||(t[4]=e("blockquote",null,[e("p",null,"clearable属性不会生效，maxlength属性不会显示输入字符")],-1)),n(s,{code:`<template>
<OarInput default placeholder='Please input' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:c(()=>[n(O)]),_:1}),t[5]||(t[5]=e("h2",null,"基础用法",-1)),n(s,{code:`<template>
<OarInput placeholder='Please input' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:c(()=>[n(I)]),_:1}),t[6]||(t[6]=e("h2",null,"禁用状态",-1)),t[7]||(t[7]=e("p",null,"使用 disabled 属性来控制 input 组件是否为禁用状态",-1)),n(s,{code:`<template>
<OarInput placeholder='Please input' disabled v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:c(()=>[n(V)]),_:1}),t[8]||(t[8]=e("h2",null,"只读状态",-1)),t[9]||(t[9]=e("p",null,"使用 readonly 属性来控制 input 组件是否为只读状态",-1)),n(s,{code:`<template>
<OarInput placeholder='Please input' readonly v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:c(()=>[n(g)]),_:1}),t[10]||(t[10]=e("h2",null,"一键清空",-1)),t[11]||(t[11]=e("p",null,"使用 clearable 属性即可得到一个可一键清空的输入框",-1)),n(s,{code:`<template>
<OarInput clearable placeholder='Please input' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:c(()=>[n(x)]),_:1}),t[12]||(t[12]=e("h2",null,"密码框",-1)),t[13]||(t[13]=e("p",null,'使用 type="password" 即可得到一个可切换显示隐藏的密码框',-1)),n(s,{code:`<template>
<OarInput type='password' placeholder='password' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:c(()=>[n(h)]),_:1}),t[14]||(t[14]=e("h2",null,"输入长度限制",-1)),t[15]||(t[15]=e("p",null,"使用maxlength属性，来控制输入的最大字数",-1)),n(s,{code:`<template>
<OarInput clearable maxlength='50' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:c(()=>[n(y)]),_:1}),t[16]||(t[16]=e("h2",null,"v-model 修饰符",-1)),t[17]||(t[17]=e("p",null,"使用v-model.lowercase修饰符，来保证输入的内容全部转为小写",-1)),n(s,{code:`<template>
<OarInput clearable v-model.lowercase='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:c(()=>[n(w)]),_:1}),t[18]||(t[18]=_("<h2 data-v-1096c439>Input Attributes</h2><blockquote data-v-1096c439><p data-v-1096c439>支持input全部原生属性</p></blockquote><table data-v-1096c439><thead data-v-1096c439><tr data-v-1096c439><th data-v-1096c439>属性名</th><th data-v-1096c439>说明</th><th data-v-1096c439>类型</th><th data-v-1096c439>默认值</th></tr></thead><tbody data-v-1096c439><tr data-v-1096c439><td data-v-1096c439>default</td><td data-v-1096c439>是否显示浏览器默认样式</td><td data-v-1096c439>boolean</td><td data-v-1096c439>false</td></tr><tr data-v-1096c439><td data-v-1096c439>v-model</td><td data-v-1096c439>绑定值</td><td data-v-1096c439>string</td><td data-v-1096c439>-</td></tr><tr data-v-1096c439><td data-v-1096c439>type</td><td data-v-1096c439>显示文本框或密码框</td><td data-v-1096c439>&quot;text&quot;、&quot;password&quot;</td><td data-v-1096c439>&quot;text&quot;</td></tr><tr data-v-1096c439><td data-v-1096c439>placeholder</td><td data-v-1096c439>输入框占位文本</td><td data-v-1096c439>string</td><td data-v-1096c439>-</td></tr><tr data-v-1096c439><td data-v-1096c439>disabled</td><td data-v-1096c439>是否为禁用状态</td><td data-v-1096c439>boolean</td><td data-v-1096c439>false</td></tr><tr data-v-1096c439><td data-v-1096c439>readonly</td><td data-v-1096c439>是否为只读状态</td><td data-v-1096c439>boolean</td><td data-v-1096c439>false</td></tr><tr data-v-1096c439><td data-v-1096c439>clearable</td><td data-v-1096c439>是否显示清空按钮</td><td data-v-1096c439>boolean</td><td data-v-1096c439>false</td></tr><tr data-v-1096c439><td data-v-1096c439>maxlength</td><td data-v-1096c439>输入的最大字符</td><td data-v-1096c439>number、string</td><td data-v-1096c439>-</td></tr></tbody></table><h2 data-v-1096c439>Input Events</h2><blockquote data-v-1096c439><p data-v-1096c439>支持input全部事件</p></blockquote><table data-v-1096c439><thead data-v-1096c439><tr data-v-1096c439><th data-v-1096c439>事件名</th><th data-v-1096c439>说明</th><th data-v-1096c439>类型</th></tr></thead><tbody data-v-1096c439><tr data-v-1096c439><td data-v-1096c439>focus</td><td data-v-1096c439>当选择器的输入框获得焦点时触发</td><td data-v-1096c439>Function</td></tr><tr data-v-1096c439><td data-v-1096c439>blur</td><td data-v-1096c439>当选择器的输入框失去焦点时触发</td><td data-v-1096c439>Function</td></tr><tr data-v-1096c439><td data-v-1096c439>input</td><td data-v-1096c439>在 Input 值改变时触发</td><td data-v-1096c439>Function</td></tr><tr data-v-1096c439><td data-v-1096c439>clear</td><td data-v-1096c439>在点击由 clearable 属性生成的清空按钮时触发</td><td data-v-1096c439>Function</td></tr></tbody></table><h2 data-v-1096c439>Input Exposes</h2><table data-v-1096c439><thead data-v-1096c439><tr data-v-1096c439><th data-v-1096c439>名称</th><th data-v-1096c439>说明</th><th data-v-1096c439>类型</th></tr></thead><tbody data-v-1096c439><tr data-v-1096c439><td data-v-1096c439>ref</td><td data-v-1096c439>HTML元素 input</td><td data-v-1096c439>Vue Ref</td></tr><tr data-v-1096c439><td data-v-1096c439>clear</td><td data-v-1096c439>清除 input 值</td><td data-v-1096c439>Function</td></tr><tr data-v-1096c439><td data-v-1096c439>focus</td><td data-v-1096c439>使 input 获取焦点</td><td data-v-1096c439>Function</td></tr><tr data-v-1096c439><td data-v-1096c439>blur</td><td data-v-1096c439>使 input 失去焦点</td><td data-v-1096c439>Function</td></tr></tbody></table>",8))]))}}),E=b(k,[["__scopeId","data-v-1096c439"]]);export{E as default};
