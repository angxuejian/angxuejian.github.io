import{_ as i}from"./index.vue_vue_type_script_setup_true_lang-DrRZ8qO_.js";import{_ as c,r as l,o as u,c as b,w as o,a as r,b as e,d as v,t as _,e as f,f as a,g}from"./index-DS2w6FAp.js";const O={};function B(s,d){const t=l("OarButton"),n=l("OarAudioRecorder");return u(),b(n,null,{trigger:o(()=>[r(t,null,{default:o(()=>d[0]||(d[0]=[e("按住说话")])),_:1})]),_:1})}const A=c(O,[["render",B]]),R={};function C(s,d){const t=l("OarButton"),n=l("OarAudioRecorder");return u(),b(n,{pcm16:""},{trigger:o(()=>[r(t,{plain:""},{default:o(()=>d[0]||(d[0]=[e("PCM16 输出")])),_:1})]),_:1})}const h=c(R,[["render",C]]),y={};function P(s,d){const t=l("OarButton"),n=l("OarAudioRecorder");return u(),b(n,{pressDelay:300},{trigger:o(()=>[r(t,{text:""},{default:o(()=>d[0]||(d[0]=[e("长按 300ms 开始录音")])),_:1})]),_:1})}const x=c(y,[["render",P]]),D=v({__name:"Oar3",setup(s){const d=t=>{t instanceof ArrayBuffer&&console.log(t)};return(t,n)=>{const m=l("OarButton"),p=l("OarAudioRecorder");return u(),b(p,{onChange:d,pcm16:""},{trigger:o(()=>[r(m,{plain:""},{default:o(()=>n[0]||(n[0]=[e("按住说话 - 并输出PCM16数据")])),_:1})]),_:1})}}}),M={};function $(s,d){const t=l("OarButton"),n=l("OarAudioRecorder");return u(),b(n,null,{trigger:o(({isPressing:m,isRecording:p})=>[r(t,{plain:!p},{default:o(()=>[e(_(p?"录音中...":m?"准备录音":"按住说话"),1)]),_:2},1032,["plain"])]),_:1})}const V=c(M,[["render",$]]),k={class:"markdown-body"},S=v({__name:"audio-recorder",setup(s){return(d,t)=>(u(),f("div",k,[t[0]||(t[0]=a("h1",null,"AudioRecorder 音频录制器",-1)),t[1]||(t[1]=a("p",null,"用于录制音频，并输出 Blob 或 PCM16 ArrayBuffer 数据。",-1)),t[2]||(t[2]=a("h2",null,"用法",-1)),t[3]||(t[3]=a("p",null,"通过点击触发元素开始录音，松开后自动结束并返回录音数据。",-1)),r(i,{code:`<template><OarAudioRecorder>
  <template #trigger>
    <OarButton>按住说话</OarButton>
  </template>
</OarAudioRecorder>
</template>`},{default:o(()=>[r(A)]),_:1}),t[4]||(t[4]=a("h2",null,"PCM16 输出",-1)),t[5]||(t[5]=a("p",null,[e("设置 "),a("code",null,"pcm16"),e(" 属性为 "),a("code",null,"true"),e(" 即可让组件输出 "),a("strong",null,"PCM16 原始数据（ArrayBuffer）"),e("。")],-1)),r(i,{code:`<template><OarAudioRecorder pcm16>
  <template #trigger>
    <OarButton plain>PCM16 输出</OarButton>
  </template>
</OarAudioRecorder>
</template>`},{default:o(()=>[r(h)]),_:1}),t[6]||(t[6]=a("h2",null,"长按触发",-1)),t[7]||(t[7]=a("p",null,[e("设置 "),a("code",null,"pressDelay"),e(" 属性可控制多长时间判定为开始录音（毫秒）。")],-1)),r(i,{code:`<template><OarAudioRecorder :pressDelay='300'>
  <template #trigger>
    <OarButton text>长按 300ms 开始录音</OarButton>
  </template>
</OarAudioRecorder>
</template>`},{default:o(()=>[r(x)]),_:1}),t[8]||(t[8]=a("h2",null,"Change",-1)),t[9]||(t[9]=a("p",null,[e("通过 @change 回调获取 "),a("code",null,"PCM16"),e(" 格式的音频数据 或 "),a("code",null,"Blob"),e(" 格式的音频文件。")],-1)),r(i,{code:`<template>
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
`},{default:o(()=>[r(D)]),_:1}),t[10]||(t[10]=a("h2",null,"使用 Slot Props",-1)),t[11]||(t[11]=a("p",null,[e("通过在 "),a("code",null,"trigger"),e(" 插槽中接收组件提供的 "),a("code",null,"isPressing"),e(" 与 "),a("code",null,"isRecording"),e(" 状态参数，你可以根据录音阶段动态更新触发内容的展示形式，例如切换按钮文案、样式或提示信息。")],-1)),r(i,{code:`<template><OarAudioRecorder>
  <template #trigger='{ isPressing, isRecording }'>
    <OarButton :plain='!isRecording'>
      {{ isRecording ? '录音中...' : isPressing ? '准备录音' : '按住说话' }}
    </OarButton>
  </template>
</OarAudioRecorder>
</template>`},{default:o(()=>[r(V)]),_:1}),t[12]||(t[12]=g("<h2 data-v-85b92835>AudioRecorder Attributes</h2><table data-v-85b92835><thead data-v-85b92835><tr data-v-85b92835><th data-v-85b92835>属性名</th><th data-v-85b92835>说明</th><th data-v-85b92835>类型</th><th data-v-85b92835>默认值</th></tr></thead><tbody data-v-85b92835><tr data-v-85b92835><td data-v-85b92835>pcm16</td><td data-v-85b92835>是否输出 PCM16 格式（ArrayBuffer）</td><td data-v-85b92835>boolean</td><td data-v-85b92835>false</td></tr><tr data-v-85b92835><td data-v-85b92835>pressDelay</td><td data-v-85b92835>长按触发录音的判定时间（毫秒）</td><td data-v-85b92835>number</td><td data-v-85b92835>150</td></tr></tbody></table><h2 data-v-85b92835>AudioRecorder Emits</h2><table data-v-85b92835><thead data-v-85b92835><tr data-v-85b92835><th data-v-85b92835>事件名</th><th data-v-85b92835>说明</th><th data-v-85b92835>回调参数</th></tr></thead><tbody data-v-85b92835><tr data-v-85b92835><td data-v-85b92835>change</td><td data-v-85b92835>录音完成并返回音频数据</td><td data-v-85b92835><code data-v-85b92835>Blob</code> 或 <code data-v-85b92835>ArrayBuffer</code></td></tr><tr data-v-85b92835><td data-v-85b92835>error</td><td data-v-85b92835>录音过程发生错误</td><td data-v-85b92835><code data-v-85b92835>string</code></td></tr><tr data-v-85b92835><td data-v-85b92835>cancel</td><td data-v-85b92835>录音被用户取消</td><td data-v-85b92835>—</td></tr></tbody></table><h2 data-v-85b92835>AudioRecorder Slots</h2><table data-v-85b92835><thead data-v-85b92835><tr data-v-85b92835><th data-v-85b92835>插槽名</th><th data-v-85b92835>说明</th><th data-v-85b92835>Slot Props</th></tr></thead><tbody data-v-85b92835><tr data-v-85b92835><td data-v-85b92835>trigger</td><td data-v-85b92835>自定义触发录音的内容</td><td data-v-85b92835><code data-v-85b92835>isPressing: boolean</code> 是否处于按压中；<code data-v-85b92835>isRecording: boolean</code> 是否正在录音</td></tr></tbody></table>",6))]))}}),E=c(S,[["__scopeId","data-v-85b92835"]]);export{E as default};
