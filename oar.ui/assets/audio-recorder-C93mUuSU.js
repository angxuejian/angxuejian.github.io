import{_ as f}from"./index.vue_vue_type_script_setup_true_lang-Da-Rx52G.js";import{_ as s,r as c,o as l,c as i,w as o,a as r,b as e,d as v,t as _,e as g,f as a,g as O}from"./index-DDzZDXhJ.js";const B={};function A(u,d){const t=c("OarButton"),n=c("OarAudioRecorder");return l(),i(n,null,{trigger:o(()=>[r(t,null,{default:o(()=>d[0]||(d[0]=[e("按住说话")])),_:1})]),_:1})}const R=s(B,[["render",A]]),b={};function C(u,d){const t=c("OarButton"),n=c("OarAudioRecorder");return l(),i(n,{pcm16:""},{trigger:o(()=>[r(t,{plain:""},{default:o(()=>d[0]||(d[0]=[e("PCM16 输出")])),_:1})]),_:1})}const h=s(b,[["render",C]]),y={};function P(u,d){const t=c("OarButton"),n=c("OarAudioRecorder");return l(),i(n,{pressDelay:300},{trigger:o(()=>[r(t,{text:""},{default:o(()=>d[0]||(d[0]=[e("长按 300ms 开始录音")])),_:1})]),_:1})}const x=s(y,[["render",P]]),D=v({__name:"Oar3",setup(u){const d=t=>{t instanceof ArrayBuffer&&console.log(t)};return(t,n)=>{const m=c("OarButton"),p=c("OarAudioRecorder");return l(),i(p,{onChange:d,pcm16:""},{trigger:o(()=>[r(m,{plain:""},{default:o(()=>n[0]||(n[0]=[e("按住说话 - 并输出PCM16数据")])),_:1})]),_:1})}}}),M={};function $(u,d){const t=c("OarButton"),n=c("OarAudioRecorder");return l(),i(n,null,{trigger:o(({isPressing:m,isRecording:p})=>[r(t,{plain:!p},{default:o(()=>[e(_(p?"录音中...":m?"准备录音":"按住说话"),1)]),_:2},1032,["plain"])]),_:1})}const V=s(M,[["render",$]]),k={class:"markdown-body"},S=v({__name:"audio-recorder",setup(u){return(d,t)=>(l(),g("div",k,[t[0]||(t[0]=a("h1",null,"AudioRecorder 音频录制器",-1)),t[1]||(t[1]=a("p",null,"用于录制音频，并输出 Blob 或 PCM16 ArrayBuffer 数据。",-1)),t[2]||(t[2]=a("h2",null,"用法",-1)),t[3]||(t[3]=a("p",null,"通过点击触发元素开始录音，松开后自动结束并返回录音数据。",-1)),r(f,{code:`<template><OarAudioRecorder>
<template #trigger>
<OarButton>按住说话</OarButton>
</template>
</OarAudioRecorder>
</template>`},{default:o(()=>[r(R)]),_:1}),t[4]||(t[4]=a("h2",null,"PCM16 输出",-1)),t[5]||(t[5]=a("p",null,[e("设置 "),a("code",null,"pcm16"),e(" 属性为 "),a("code",null,"true"),e(" 即可让组件输出 "),a("strong",null,"PCM16 原始数据（ArrayBuffer）"),e("。")],-1)),r(f,{code:`<template><OarAudioRecorder pcm16>
<template #trigger>
<OarButton plain>PCM16 输出</OarButton>
</template>
</OarAudioRecorder>
</template>`},{default:o(()=>[r(h)]),_:1}),t[6]||(t[6]=a("h2",null,"长按触发",-1)),t[7]||(t[7]=a("p",null,[e("设置 "),a("code",null,"pressDelay"),e(" 属性可控制多长时间判定为开始录音（毫秒）。")],-1)),r(f,{code:`<template><OarAudioRecorder :pressDelay='300'>
<template #trigger>
<OarButton text>长按 300ms 开始录音</OarButton>
</template>
</OarAudioRecorder>
</template>`},{default:o(()=>[r(x)]),_:1}),t[8]||(t[8]=a("h2",null,"Change",-1)),t[9]||(t[9]=a("p",null,[e("通过 @change 回调获取 "),a("code",null,"PCM16"),e(" 格式的音频数据 或 "),a("code",null,"Blob"),e(" 格式的音频文件。")],-1)),r(f,{code:`<template>
<OarAudioRecorder @change='onCallbackChange' pcm16>
<template #trigger>
<OarButton plain>按住说话 - 并输出PCM16数据</OarButton>
</template>
</OarAudioRecorder>
</template>

<script lang='ts' setup>
const onCallbackChange = (data: Blob | ArrayBuffer) => {
  if (data instanceof ArrayBuffer) {
    console.log(data);
  }
}
<\/script>
`},{default:o(()=>[r(D)]),_:1}),t[10]||(t[10]=a("h2",null,"使用 Slot Props",-1)),t[11]||(t[11]=a("p",null,[e("通过在 "),a("code",null,"trigger"),e(" 插槽中接收组件提供的 "),a("code",null,"isPressing"),e(" 与 "),a("code",null,"isRecording"),e(" 状态参数，你可以根据录音阶段动态更新触发内容的展示形式，例如切换按钮文案、样式或提示信息。")],-1)),r(f,{code:`<template><OarAudioRecorder>
<template #trigger='{ isPressing, isRecording }'>
<OarButton :plain='!isRecording'>
{{ isRecording ? '录音中...' : isPressing ? '准备录音' : '按住说话' }}
</OarButton>
</template>
</OarAudioRecorder>
</template>`},{default:o(()=>[r(V)]),_:1}),t[12]||(t[12]=O("<h2 data-v-6cfc168a>AudioRecorder Attributes</h2><table data-v-6cfc168a><thead data-v-6cfc168a><tr data-v-6cfc168a><th data-v-6cfc168a>属性名</th><th data-v-6cfc168a>说明</th><th data-v-6cfc168a>类型</th><th data-v-6cfc168a>默认值</th></tr></thead><tbody data-v-6cfc168a><tr data-v-6cfc168a><td data-v-6cfc168a>pcm16</td><td data-v-6cfc168a>是否输出 PCM16 格式（ArrayBuffer）</td><td data-v-6cfc168a>boolean</td><td data-v-6cfc168a>false</td></tr><tr data-v-6cfc168a><td data-v-6cfc168a>pressDelay</td><td data-v-6cfc168a>长按触发录音的判定时间（毫秒）</td><td data-v-6cfc168a>number</td><td data-v-6cfc168a>150</td></tr></tbody></table><h2 data-v-6cfc168a>AudioRecorder Emits</h2><table data-v-6cfc168a><thead data-v-6cfc168a><tr data-v-6cfc168a><th data-v-6cfc168a>事件名</th><th data-v-6cfc168a>说明</th><th data-v-6cfc168a>回调参数</th></tr></thead><tbody data-v-6cfc168a><tr data-v-6cfc168a><td data-v-6cfc168a>change</td><td data-v-6cfc168a>录音完成并返回音频数据</td><td data-v-6cfc168a><code data-v-6cfc168a>Blob</code> 或 <code data-v-6cfc168a>ArrayBuffer</code></td></tr><tr data-v-6cfc168a><td data-v-6cfc168a>error</td><td data-v-6cfc168a>录音过程发生错误</td><td data-v-6cfc168a><code data-v-6cfc168a>string</code></td></tr><tr data-v-6cfc168a><td data-v-6cfc168a>cancel</td><td data-v-6cfc168a>录音被用户取消</td><td data-v-6cfc168a>—</td></tr></tbody></table><h2 data-v-6cfc168a>AudioRecorder Slots</h2><table data-v-6cfc168a><thead data-v-6cfc168a><tr data-v-6cfc168a><th data-v-6cfc168a>插槽名</th><th data-v-6cfc168a>说明</th><th data-v-6cfc168a>Slot Props</th></tr></thead><tbody data-v-6cfc168a><tr data-v-6cfc168a><td data-v-6cfc168a>trigger</td><td data-v-6cfc168a>自定义触发录音的内容</td><td data-v-6cfc168a><code data-v-6cfc168a>isPressing: boolean</code> 是否处于按压中；<code data-v-6cfc168a>isRecording: boolean</code> 是否正在录音</td></tr></tbody></table>",6))]))}}),E=s(S,[["__scopeId","data-v-6cfc168a"]]);export{E as default};
