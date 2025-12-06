import{_ as s}from"./index.vue_vue_type_script_setup_true_lang.BCBTBbRe.js";import{j as o,i as b,r as v,d as u,e as i,k as m,l as a,n,p as f,Y as _}from"./vendor.CeStU7Qk.js";import{_ as c}from"../index.B1PJzrfS.js";import"./vicons.BjNJtlO6.js";import"./vueuse.DTp8AXO3.js";import"./throttle-debounce.DNtPP7FE.js";const O=o({__name:"Oar25",setup(p){const d=b("");return(t,e)=>{const l=v("OarInput");return u(),i(l,{default:"",placeholder:"Please input",modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=r=>d.value=r)},null,8,["modelValue"])}}}),I=o({__name:"Oar26",setup(p){const d=b("");return(t,e)=>{const l=v("OarInput");return u(),i(l,{placeholder:"Please input",modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=r=>d.value=r)},null,8,["modelValue"])}}}),V=o({__name:"Oar27",setup(p){const d=b("");return(t,e)=>{const l=v("OarInput");return u(),i(l,{placeholder:"Please input",disabled:"",modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=r=>d.value=r)},null,8,["modelValue"])}}}),g=o({__name:"Oar28",setup(p){const d=b("");return(t,e)=>{const l=v("OarInput");return u(),i(l,{placeholder:"Please input",readonly:"",modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=r=>d.value=r)},null,8,["modelValue"])}}}),x=o({__name:"Oar29",setup(p){const d=b("");return(t,e)=>{const l=v("OarInput");return u(),i(l,{clearable:"",placeholder:"Please input",modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=r=>d.value=r)},null,8,["modelValue"])}}}),h=o({__name:"Oar30",setup(p){const d=b("");return(t,e)=>{const l=v("OarInput");return u(),i(l,{type:"password",placeholder:"password",modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=r=>d.value=r)},null,8,["modelValue"])}}}),y=o({__name:"Oar31",setup(p){const d=b("");return(t,e)=>{const l=v("OarInput");return u(),i(l,{clearable:"",maxlength:"50",modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=r=>d.value=r)},null,8,["modelValue"])}}}),w=o({__name:"Oar32",setup(p){const d=b("");return(t,e)=>{const l=v("OarInput");return u(),i(l,{clearable:"",modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=r=>d.value=r),modelModifiers:{lowercase:!0}},null,8,["modelValue"])}}}),q={class:"markdown-body"},k=o({__name:"input",setup(p){return(d,t)=>(u(),m("div",q,[t[0]||(t[0]=a("h1",null,"Input输入框",-1)),t[1]||(t[1]=a("p",null,"通过键盘输入字符",-1)),t[2]||(t[2]=a("h2",null,"默认样式",-1)),t[3]||(t[3]=a("p",null,"浏览器默认自带的样式，只对其width/height/color/font-size保持一致，其余均为浏览器自带样式",-1)),t[4]||(t[4]=a("blockquote",null,[a("p",null,"clearable属性不会生效，maxlength属性不会显示输入字符")],-1)),n(s,{code:`<template>
<OarInput default placeholder='Please input' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:f(()=>[n(O)]),_:1}),t[5]||(t[5]=a("h2",null,"基础用法",-1)),n(s,{code:`<template>
<OarInput placeholder='Please input' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:f(()=>[n(I)]),_:1}),t[6]||(t[6]=a("h2",null,"禁用状态",-1)),t[7]||(t[7]=a("p",null,"使用 disabled 属性来控制 input 组件是否为禁用状态",-1)),n(s,{code:`<template>
<OarInput placeholder='Please input' disabled v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:f(()=>[n(V)]),_:1}),t[8]||(t[8]=a("h2",null,"只读状态",-1)),t[9]||(t[9]=a("p",null,"使用 readonly 属性来控制 input 组件是否为只读状态",-1)),n(s,{code:`<template>
<OarInput placeholder='Please input' readonly v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:f(()=>[n(g)]),_:1}),t[10]||(t[10]=a("h2",null,"一键清空",-1)),t[11]||(t[11]=a("p",null,"使用 clearable 属性即可得到一个可一键清空的输入框",-1)),n(s,{code:`<template>
<OarInput clearable placeholder='Please input' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:f(()=>[n(x)]),_:1}),t[12]||(t[12]=a("h2",null,"密码框",-1)),t[13]||(t[13]=a("p",null,'使用 type="password" 即可得到一个可切换显示隐藏的密码框',-1)),n(s,{code:`<template>
<OarInput type='password' placeholder='password' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:f(()=>[n(h)]),_:1}),t[14]||(t[14]=a("h2",null,"输入长度限制",-1)),t[15]||(t[15]=a("p",null,"使用maxlength属性，来控制输入的最大字数",-1)),n(s,{code:`<template>
<OarInput clearable maxlength='50' v-model='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:f(()=>[n(y)]),_:1}),t[16]||(t[16]=a("h2",null,"v-model 修饰符",-1)),t[17]||(t[17]=a("p",null,"使用v-model.lowercase修饰符，来保证输入的内容全部转为小写",-1)),n(s,{code:`<template>
<OarInput clearable v-model.lowercase='input' />
</template>

<script setup lang='ts'>
    import { ref } from 'vue'
    const input = ref<string>('')
<\/script>
`},{default:f(()=>[n(w)]),_:1}),t[18]||(t[18]=_("<h2 data-v-07f9bde7>Input Attributes</h2><blockquote data-v-07f9bde7><p data-v-07f9bde7>支持input全部原生属性</p></blockquote><table data-v-07f9bde7><thead data-v-07f9bde7><tr data-v-07f9bde7><th data-v-07f9bde7>属性名</th><th data-v-07f9bde7>说明</th><th data-v-07f9bde7>类型</th><th data-v-07f9bde7>默认值</th></tr></thead><tbody data-v-07f9bde7><tr data-v-07f9bde7><td data-v-07f9bde7>default</td><td data-v-07f9bde7>是否显示浏览器默认样式</td><td data-v-07f9bde7>boolean</td><td data-v-07f9bde7>false</td></tr><tr data-v-07f9bde7><td data-v-07f9bde7>v-model</td><td data-v-07f9bde7>绑定值</td><td data-v-07f9bde7>string</td><td data-v-07f9bde7>-</td></tr><tr data-v-07f9bde7><td data-v-07f9bde7>type</td><td data-v-07f9bde7>显示文本框或密码框</td><td data-v-07f9bde7>&quot;text&quot;、&quot;password&quot;</td><td data-v-07f9bde7>&quot;text&quot;</td></tr><tr data-v-07f9bde7><td data-v-07f9bde7>placeholder</td><td data-v-07f9bde7>输入框占位文本</td><td data-v-07f9bde7>string</td><td data-v-07f9bde7>-</td></tr><tr data-v-07f9bde7><td data-v-07f9bde7>disabled</td><td data-v-07f9bde7>是否为禁用状态</td><td data-v-07f9bde7>boolean</td><td data-v-07f9bde7>false</td></tr><tr data-v-07f9bde7><td data-v-07f9bde7>readonly</td><td data-v-07f9bde7>是否为只读状态</td><td data-v-07f9bde7>boolean</td><td data-v-07f9bde7>false</td></tr><tr data-v-07f9bde7><td data-v-07f9bde7>clearable</td><td data-v-07f9bde7>是否显示清空按钮</td><td data-v-07f9bde7>boolean</td><td data-v-07f9bde7>false</td></tr><tr data-v-07f9bde7><td data-v-07f9bde7>maxlength</td><td data-v-07f9bde7>输入的最大字符</td><td data-v-07f9bde7>number、string</td><td data-v-07f9bde7>-</td></tr></tbody></table><h2 data-v-07f9bde7>Input Events</h2><blockquote data-v-07f9bde7><p data-v-07f9bde7>支持input全部事件</p></blockquote><table data-v-07f9bde7><thead data-v-07f9bde7><tr data-v-07f9bde7><th data-v-07f9bde7>事件名</th><th data-v-07f9bde7>说明</th><th data-v-07f9bde7>回调参数</th></tr></thead><tbody data-v-07f9bde7><tr data-v-07f9bde7><td data-v-07f9bde7>focus</td><td data-v-07f9bde7>当选择器的输入框获得焦点时触发</td><td data-v-07f9bde7>—</td></tr><tr data-v-07f9bde7><td data-v-07f9bde7>blur</td><td data-v-07f9bde7>当选择器的输入框失去焦点时触发</td><td data-v-07f9bde7>—</td></tr><tr data-v-07f9bde7><td data-v-07f9bde7>input</td><td data-v-07f9bde7>在 Input 值改变时触发</td><td data-v-07f9bde7><code data-v-07f9bde7>string</code></td></tr><tr data-v-07f9bde7><td data-v-07f9bde7>clear</td><td data-v-07f9bde7>在点击由 clearable 属性生成的清空按钮时触发</td><td data-v-07f9bde7>—</td></tr></tbody></table><h2 data-v-07f9bde7>Input Exposes</h2><table data-v-07f9bde7><thead data-v-07f9bde7><tr data-v-07f9bde7><th data-v-07f9bde7>名称</th><th data-v-07f9bde7>说明</th><th data-v-07f9bde7>类型</th></tr></thead><tbody data-v-07f9bde7><tr data-v-07f9bde7><td data-v-07f9bde7>ref</td><td data-v-07f9bde7>HTML元素 input</td><td data-v-07f9bde7>Vue Ref</td></tr><tr data-v-07f9bde7><td data-v-07f9bde7>clear</td><td data-v-07f9bde7>清除 input 值</td><td data-v-07f9bde7>Function</td></tr><tr data-v-07f9bde7><td data-v-07f9bde7>focus</td><td data-v-07f9bde7>使 input 获取焦点</td><td data-v-07f9bde7>Function</td></tr><tr data-v-07f9bde7><td data-v-07f9bde7>blur</td><td data-v-07f9bde7>使 input 失去焦点</td><td data-v-07f9bde7>Function</td></tr></tbody></table>",8))]))}}),F=c(k,[["__scopeId","data-v-07f9bde7"]]);export{F as default};
