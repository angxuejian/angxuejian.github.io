(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22fd05"],{ea2e:function(t,a,e){"use strict";e.r(a);var d=e("7a23");const h={class:"docs-wrapper"},n=Object(d["h"])('<h1 id="_istypeof-value-type" tabindex="-1"><a class="header-anchor" href="#_istypeof-value-type">#</a> _isTypeOf(value, type)</h1><h2 id="gong-neng-miao-shu" tabindex="-1"><a class="header-anchor" href="#gong-neng-miao-shu">#</a> 功能描述</h2><p>判断类型是否一致</p><h2 id="can-shu" tabindex="-1"><a class="header-anchor" href="#can-shu">#</a> 参数</h2><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>value</td><td>any</td><td></td><td>是</td><td>需要判断类型的值</td></tr><tr><td>type</td><td>string</td><td></td><td>是</td><td>期望类型</td></tr></tbody></table><h2 id="fan-hui" tabindex="-1"><a class="header-anchor" href="#fan-hui">#</a> 返回</h2><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>boolean</td><td>判断类型是否一致，类型一致返回true, 否则false</td></tr></tbody></table><h2 id="shi-li" tabindex="-1"><a class="header-anchor" href="#shi-li">#</a> 示例</h2><pre><code class="language-js">import _isTypeOf from &#39;@angxuejian/lodash/isTypeof&#39;\n\nconst list = [0, 1, 2, 3]\nconst isArray = _isTypeOf(list, &#39;array&#39;)\n\nconsole.log(`list的类型是否为Array类型： ${isArray}`)\n</code></pre>',9),r=[n];function s(t,a){const e=Object(d["G"])("highlight");return Object(d["N"])((Object(d["x"])(),Object(d["f"])("div",h,r)),[[e]])}var o=e("8248"),i=e("bc48"),c={name:"component-docs",components:{demoBlock:o["a"]},directives:{highlight:i["a"]}},l=e("b9a6"),p=e.n(l);const b=p()(c,[["render",s]]);a["default"]=b}}]);