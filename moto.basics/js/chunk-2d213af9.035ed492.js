(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213af9"],{ae76:function(t,a,e){"use strict";e.r(a);var h=e("7a23");const d={class:"docs-wrapper"},r=Object(h["h"])('<h1 id="_getparams-key-url" tabindex="-1"><a class="header-anchor" href="#_getparams-key-url">#</a> _getParams(key, url)</h1><h2 id="gong-neng-miao-shu" tabindex="-1"><a class="header-anchor" href="#gong-neng-miao-shu">#</a> 功能描述</h2><p>获取url中value值</p><h2 id="can-shu" tabindex="-1"><a class="header-anchor" href="#can-shu">#</a> 参数</h2><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>key</td><td>string</td><td></td><td>是</td><td>url地址中的key值</td></tr><tr><td>url</td><td>string</td><td>window.location.href</td><td>否</td><td>要解析的url地址</td></tr></tbody></table><h2 id="fan-hui" tabindex="-1"><a class="header-anchor" href="#fan-hui">#</a> 返回</h2><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>string</td><td>url中key对应的value值</td></tr></tbody></table><h2 id="shi-li" tabindex="-1"><a class="header-anchor" href="#shi-li">#</a> 示例</h2><pre><code class="language-js">import _getParams from &#39;@angxuejian/lodash/getParams&#39;\n\nconst value = _getParams(&#39;name&#39;, &#39;https://www.baidu.com?name=yuhua&#39;)\nconsole.log(value)\n</code></pre>',9),n=[r];function s(t,a){const e=Object(h["G"])("highlight");return Object(h["N"])((Object(h["x"])(),Object(h["f"])("div",d,n)),[[e]])}var o=e("8248"),c=e("bc48"),i={name:"component-docs",components:{demoBlock:o["a"]},directives:{highlight:c["a"]}},l=e("b9a6"),u=e.n(l);const b=u()(i,[["render",s]]);a["default"]=b}}]);