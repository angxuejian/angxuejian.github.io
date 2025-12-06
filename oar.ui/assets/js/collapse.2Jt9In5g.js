import{_ as p}from"./index.vue_vue_type_script_setup_true_lang.BCBTBbRe.js";import{_ as v}from"../index.B1PJzrfS.js";import{r as c,d as r,e as i,p as d,l as t,k as m,n as l,F as C,v as f,i as _,j as y,q as n,Y as x}from"./vendor.CeStU7Qk.js";import"./vicons.BjNJtlO6.js";import"./vueuse.DTp8AXO3.js";import"./throttle-debounce.DNtPP7FE.js";const g={};function h(s,e){const a=c("OarCollapse");return r(),i(a,{title:"基础标题"},{default:d(()=>e[0]||(e[0]=[t("div",null,"这是一段基础的内容文本。可以包含任意 HTML 元素。",-1)])),_:1})}const G=v(g,[["render",h]]),$={};function N(s,e){const a=c("OarCollapse");return r(),m(C,null,[l(a,{title:"正常状态"},{default:d(()=>e[0]||(e[0]=[t("div",null,"正常内容",-1)])),_:1}),e[3]||(e[3]=t("div",{style:{"margin-top":"10px"}},null,-1)),l(a,{title:"禁用状态 (未展开)",disabled:""},{default:d(()=>e[1]||(e[1]=[t("div",null,"这段内容不可见",-1)])),_:1}),e[4]||(e[4]=t("div",{style:{"margin-top":"10px"}},null,-1)),l(a,{title:"禁用状态 (已展开)",expand:!0,disabled:""},{default:d(()=>e[2]||(e[2]=[t("div",null,"这段内容虽然可见，但无法收起",-1)])),_:1})],64)}const V=v($,[["render",N]]),k={};function w(s,e){const a=c("OarCollapse");return r(),i(a,{title:"限制高度的内容","max-height":100},{default:d(()=>e[0]||(e[0]=[t("p",null,"第一行内容...",-1),t("p",null,"第二行内容...",-1),t("p",null,"第三行内容...",-1),t("p",null,"第四行内容...",-1),t("p",null,"第五行内容...",-1),t("p",null,"第六行内容...",-1)])),_:1})}const D=v(k,[["render",w]]),E={};function S(s,e){const a=c("OarCollapse");return r(),i(a,{style:{width:"200px"}},{title:d(()=>e[0]||(e[0]=[t("span",{style:{"font-weight":"bold",color:"yellow"}},"自定义 Title 插槽",-1)])),icon:d(({expand:o})=>[t("span",null,f(o?"➖":"➕"),1)]),default:d(()=>[e[1]||(e[1]=t("div",null," 自定义了标题样式和展开/收起图标。 ",-1))]),_:1})}const T=v(E,[["render",S]]),B={style:{"margin-bottom":"10px"}},F={__name:"Oar18",setup(s){const e=_("1");return(a,o)=>{const u=c("OarCollapse"),O=c("OarCollapseGroup");return r(),m(C,null,[t("div",B,"当前展开的面板 Name: "+f(e.value),1),l(O,{select:e.value,"onUpdate:select":o[0]||(o[0]=b=>e.value=b)},{default:d(()=>[l(u,{name:"1",title:"一致性 Consistency"},{default:d(()=>o[1]||(o[1]=[t("div",null,"与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念。",-1)])),_:1}),l(u,{name:"2",title:"反馈 Feedback"},{default:d(()=>o[2]||(o[2]=[t("div",null,"控制反馈：通过界面样式和交互动效让用户感知自己的操作。",-1)])),_:1}),l(u,{name:"3",title:"效率 Efficiency"},{default:d(()=>o[3]||(o[3]=[t("div",null,"简化流程：设计简洁直观的操作流程。",-1)])),_:1})]),_:1},8,["select"])],64)}}},q={};function A(s,e){const a=c("OarCollapse"),o=c("OarCollapseGroup");return r(),i(o,{accordion:!1},{default:d(()=>[l(a,{name:"guide",title:"设计指南"},{default:d(()=>e[0]||(e[0]=[t("div",null,"设计指南的内容...",-1)])),_:1}),l(a,{name:"component",title:"组件交互"},{default:d(()=>e[1]||(e[1]=[t("div",null,"组件交互的内容...",-1)])),_:1}),l(a,{name:"resource",title:"资源列表"},{default:d(()=>e[2]||(e[2]=[t("div",null,"资源列表的内容...",-1)])),_:1})]),_:1})}const H=v(q,[["render",A]]),L={};function M(s,e){const a=c("OarCollapse"),o=c("OarCollapseGroup");return r(),i(o,{disabled:"",select:"1"},{default:d(()=>[l(a,{name:"1",title:"已展开但禁用"},{default:d(()=>e[0]||(e[0]=[t("div",null,"因为父级组件被禁用，这里无法收起。",-1)])),_:1}),l(a,{name:"2",title:"未展开且禁用"},{default:d(()=>e[1]||(e[1]=[t("div",null,"因为父级组件被禁用，这里无法点击展开。",-1)])),_:1})]),_:1})}const j=v(L,[["render",M]]),I={class:"markdown-body"},P=y({__name:"collapse",setup(s){return(e,a)=>(r(),m("div",I,[a[0]||(a[0]=t("h1",null,"Collapse折叠面板",-1)),a[1]||(a[1]=t("p",null,"通过点击标题展开或收缩内容的面板。",-1)),a[2]||(a[2]=t("h2",null,"基础用法",-1)),a[3]||(a[3]=t("p",null,[n("最基础的用法，通过 "),t("code",null,"title"),n(" 属性定义标题。")],-1)),l(p,{code:`<template><OarCollapse title='基础标题'>
  <div>这是一段基础的内容文本。可以包含任意 HTML 元素。</div>
</OarCollapse>
</template>`},{default:d(()=>[l(G)]),_:1}),a[4]||(a[4]=t("h2",null,"禁用状态",-1)),a[5]||(a[5]=t("p",null,[n("使用 "),t("code",null,"disabled"),n(" 属性来控制是否禁用折叠面板，禁用状态下无法展开或收起。")],-1)),l(p,{code:`<template><OarCollapse title='正常状态'>
  <div>正常内容</div>
</OarCollapse>
<div style='margin-top: 10px;'></div>
<OarCollapse title='禁用状态 (未展开)' disabled>
  <div>这段内容不可见</div>
</OarCollapse>
<div style='margin-top: 10px;'></div>
<OarCollapse title='禁用状态 (已展开)' :expand='true' disabled>
  <div>这段内容虽然可见，但无法收起</div>
</OarCollapse>
</template>`},{default:d(()=>[l(V)]),_:1}),a[6]||(a[6]=t("h2",null,"最大高度",-1)),a[7]||(a[7]=t("p",null,[n("通过 "),t("code",null,"max-height"),n(" 属性限制内容区域的最大高度。当内容超出该高度时，将出现滚动条。")],-1)),l(p,{code:`<template><OarCollapse title='限制高度的内容' :max-height='100'>
  <p>第一行内容...</p>
  <p>第二行内容...</p>
  <p>第三行内容...</p>
  <p>第四行内容...</p>
  <p>第五行内容...</p>
  <p>第六行内容...</p>
</OarCollapse>
</template>`},{default:d(()=>[l(D)]),_:1}),a[8]||(a[8]=t("h2",null,"自定义标题与图标",-1)),a[9]||(a[9]=t("p",null,[n("提供了 "),t("code",null,"title"),n(" 和 "),t("code",null,"icon"),n(" 插槽，用于自定义宽度、头部内容和右侧图标。")],-1)),l(p,{code:`<template><OarCollapse style='width: 200px;'>
  <template #title>
    <span style='font-weight: bold; color: yellow;'>自定义 Title 插槽</span>
  </template>
  <template #icon='{ expand }'>
    <span>{{ expand ? '➖' : '➕' }}</span>
  </template>
  <div>
    自定义了标题样式和展开/收起图标。
  </div>
</OarCollapse>
</template>`},{default:d(()=>[l(T)]),_:1}),a[10]||(a[10]=t("h2",null,"CollapseGroup 手风琴",-1)),a[11]||(a[11]=t("p",null,[n("默认情况下，"),t("code",null,"CollapseGroup"),n(" 开启手风琴模式 ("),t("code",null,'accordion="true"'),n(")，这意味着每次只能展开一个面板。 此时，需要通过 "),t("code",null,"v-model:select"),n(" 绑定当前展开面板的 "),t("code",null,"name"),n("。")],-1)),l(p,{code:`<script setup>
    import { ref } from 'vue'
    const activeName = ref('1')
<\/script>

<template>
    <div style='margin-bottom: 10px;'>当前展开的面板 Name: {{ activeName }}</div>
    <OarCollapseGroup v-model:select='activeName'>
        <OarCollapse name='1' title='一致性 Consistency'>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念。</div>
        </OarCollapse>
        <OarCollapse name='2' title='反馈 Feedback'>
            <div>控制反馈：通过界面样式和交互动效让用户感知自己的操作。</div>
        </OarCollapse>
        <OarCollapse name='3' title='效率 Efficiency'>
            <div>简化流程：设计简洁直观的操作流程。</div>
        </OarCollapse>
    </OarCollapseGroup>
</template>
`},{default:d(()=>[l(F)]),_:1}),a[12]||(a[12]=t("h2",null,"CollapseGroup 非手风琴",-1)),a[13]||(a[13]=t("p",null,[n("通过设置 "),t("code",null,"accordion"),n(" 属性为 "),t("code",null,"false"),n("，可以允许同时展开多个面板。")],-1)),a[14]||(a[14]=t("blockquote",null,[t("p",null,[n("注意：在非手风琴模式下，"),t("code",null,"name"),n(" 属性依然是必须的，用于内部区分不同的面板状态。")])],-1)),l(p,{code:`<template><OarCollapseGroup :accordion='false'>
    <OarCollapse name='guide' title='设计指南'>
        <div>设计指南的内容...</div>
    </OarCollapse>
    <OarCollapse name='component' title='组件交互'>
        <div>组件交互的内容...</div>
    </OarCollapse>
    <OarCollapse name='resource' title='资源列表'>
        <div>资源列表的内容...</div>
    </OarCollapse>
</OarCollapseGroup>
</template>`},{default:d(()=>[l(H)]),_:1}),a[15]||(a[15]=t("h2",null,"CollapseGroup 整组禁用",-1)),a[16]||(a[16]=t("p",null,[n("在 "),t("code",null,"CollapseGroup"),n(" 上设置 "),t("code",null,"disabled"),n(" 属性，可以禁用组内所有的折叠面板。")],-1)),l(p,{code:`<template><OarCollapseGroup disabled select='1'>
    <OarCollapse name='1' title='已展开但禁用'>
        <div>因为父级组件被禁用，这里无法收起。</div>
    </OarCollapse>
    <OarCollapse name='2' title='未展开且禁用'>
        <div>因为父级组件被禁用，这里无法点击展开。</div>
    </OarCollapse>
</OarCollapseGroup>
</template>`},{default:d(()=>[l(j)]),_:1}),a[17]||(a[17]=x("<h2 data-v-e4c371c4>Collapse Attributes</h2><table data-v-e4c371c4><thead data-v-e4c371c4><tr data-v-e4c371c4><th data-v-e4c371c4>属性名</th><th data-v-e4c371c4>说明</th><th data-v-e4c371c4>类型</th><th data-v-e4c371c4>默认值</th></tr></thead><tbody data-v-e4c371c4><tr data-v-e4c371c4><td data-v-e4c371c4>name</td><td data-v-e4c371c4>组件处于 collapseGroup 中时，用作当前项的选中标识</td><td data-v-e4c371c4>string</td><td data-v-e4c371c4>&#39;&#39;</td></tr><tr data-v-e4c371c4><td data-v-e4c371c4>title</td><td data-v-e4c371c4>面板标题</td><td data-v-e4c371c4>string</td><td data-v-e4c371c4>&#39;&#39;</td></tr><tr data-v-e4c371c4><td data-v-e4c371c4>expand</td><td data-v-e4c371c4>是否展开 (v-model)</td><td data-v-e4c371c4>boolean</td><td data-v-e4c371c4>false</td></tr><tr data-v-e4c371c4><td data-v-e4c371c4>disabled</td><td data-v-e4c371c4>是否为禁用状态</td><td data-v-e4c371c4>boolean</td><td data-v-e4c371c4>false</td></tr><tr data-v-e4c371c4><td data-v-e4c371c4>max-height</td><td data-v-e4c371c4>内容区域的最大高度</td><td data-v-e4c371c4>number / string</td><td data-v-e4c371c4>-</td></tr></tbody></table><h2 data-v-e4c371c4>Collapse Slots</h2><table data-v-e4c371c4><thead data-v-e4c371c4><tr data-v-e4c371c4><th data-v-e4c371c4>插槽名</th><th data-v-e4c371c4>说明</th><th data-v-e4c371c4>Solot Props</th></tr></thead><tbody data-v-e4c371c4><tr data-v-e4c371c4><td data-v-e4c371c4>default</td><td data-v-e4c371c4>面板的主体内容</td><td data-v-e4c371c4>-</td></tr><tr data-v-e4c371c4><td data-v-e4c371c4>title</td><td data-v-e4c371c4>自定义标题内容</td><td data-v-e4c371c4>-</td></tr><tr data-v-e4c371c4><td data-v-e4c371c4>icon</td><td data-v-e4c371c4>自定义右侧图标</td><td data-v-e4c371c4><code data-v-e4c371c4>{ expand: boolean }</code></td></tr></tbody></table><h2 data-v-e4c371c4>Collapse Events</h2><table data-v-e4c371c4><thead data-v-e4c371c4><tr data-v-e4c371c4><th data-v-e4c371c4>事件名</th><th data-v-e4c371c4>说明</th><th data-v-e4c371c4>回调参数</th></tr></thead><tbody data-v-e4c371c4><tr data-v-e4c371c4><td data-v-e4c371c4>change</td><td data-v-e4c371c4>切换状态时触发</td><td data-v-e4c371c4><code data-v-e4c371c4>(value: boolean)</code></td></tr></tbody></table><h2 data-v-e4c371c4>CollapseGroup Attributes</h2><table data-v-e4c371c4><thead data-v-e4c371c4><tr data-v-e4c371c4><th data-v-e4c371c4>属性名</th><th data-v-e4c371c4>说明</th><th data-v-e4c371c4>类型</th><th data-v-e4c371c4>默认值</th></tr></thead><tbody data-v-e4c371c4><tr data-v-e4c371c4><td data-v-e4c371c4>select</td><td data-v-e4c371c4>当前激活的面板的</td><td data-v-e4c371c4>name (v-model)</td><td data-v-e4c371c4>string</td></tr><tr data-v-e4c371c4><td data-v-e4c371c4>accordion</td><td data-v-e4c371c4>是否开启手风琴模式（每次只展开一个）</td><td data-v-e4c371c4>boolean</td><td data-v-e4c371c4>true</td></tr><tr data-v-e4c371c4><td data-v-e4c371c4>disabled</td><td data-v-e4c371c4>是否禁用整个组</td><td data-v-e4c371c4>boolean</td><td data-v-e4c371c4>false</td></tr></tbody></table><h2 data-v-e4c371c4>CollapseGroup Events</h2><table data-v-e4c371c4><thead data-v-e4c371c4><tr data-v-e4c371c4><th data-v-e4c371c4>事件名</th><th data-v-e4c371c4>说明</th><th data-v-e4c371c4>回调参数</th></tr></thead><tbody data-v-e4c371c4><tr data-v-e4c371c4><td data-v-e4c371c4>change</td><td data-v-e4c371c4>当前激活面板改变时触发</td><td data-v-e4c371c4><code data-v-e4c371c4>(value: string)</code> / <code data-v-e4c371c4>(value: { [key: string]: boolean })</code></td></tr></tbody></table><h2 data-v-e4c371c4>CollapseGroup Slots</h2><table data-v-e4c371c4><thead data-v-e4c371c4><tr data-v-e4c371c4><th data-v-e4c371c4>插槽名</th><th data-v-e4c371c4>说明</th></tr></thead><tbody data-v-e4c371c4><tr data-v-e4c371c4><td data-v-e4c371c4>default</td><td data-v-e4c371c4>放置 Collapse 组件</td></tr></tbody></table>",12))]))}}),R=v(P,[["__scopeId","data-v-e4c371c4"]]);export{R as default};
