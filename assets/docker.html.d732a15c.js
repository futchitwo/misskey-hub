import{r as c,o,c as i,a as s,b as l,F as t,e,d as n}from"./app.d9166d2d.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const p={},d=e(`<h1 id="docker\u3092\u4F7F\u3063\u305Fmisskey\u69CB\u7BC9" tabindex="-1"><a class="header-anchor" href="#docker\u3092\u4F7F\u3063\u305Fmisskey\u69CB\u7BC9" aria-hidden="true">#</a> Docker\u3092\u4F7F\u3063\u305FMisskey\u69CB\u7BC9</h1><p>\u3053\u306E\u30AC\u30A4\u30C9\u306FDocker\u3092\u4F7F\u3063\u305FMisskey\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u65B9\u6CD5\u3092\u8AAC\u660E\u3057\u307E\u3059\u3002</p><div class="custom-container tip"><i class="fas fa-info"></i><p class="custom-container-title">\u524D\u63D0\u6761\u4EF6</p><ul><li>docker\u304A\u3088\u3073docker-compose\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3002</li></ul></div><h2 id="\u30EA\u30DB\u309A\u30B7\u3099\u30C8\u30EA\u306E\u53D6\u5F97" tabindex="-1"><a class="header-anchor" href="#\u30EA\u30DB\u309A\u30B7\u3099\u30C8\u30EA\u306E\u53D6\u5F97" aria-hidden="true">#</a> \u30EA\u30DD\u30B8\u30C8\u30EA\u306E\u53D6\u5F97</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone -b master git+https://github.com/misskey-dev/misskey.git
<span class="token builtin class-name">cd</span> misskey
<span class="token function">git</span> checkout master
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u8A2D\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u8A2D\u5B9A" aria-hidden="true">#</a> \u8A2D\u5B9A</h2><p>\u4E0B\u8A18\u30B3\u30DE\u30F3\u30C9\u3067\u3001\u5404\u7A2E\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u306E\u30B5\u30F3\u30D7\u30EB\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3059\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> .config/example.yml .config/default.yml
<span class="token function">cp</span> .config/docker_example.env .config/docker.env
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>default.yml</code>\u3068<code>docker.env</code>\u3092\u30D5\u30A1\u30A4\u30EB\u5185\u306E\u8AAC\u660E\u306B\u5F93\u3063\u3066\u7DE8\u96C6\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p><div class="custom-container warning"><i class="fas fa-exclamation"></i><p><code>default.yml</code>\u306E\u3001Postgresql/Redis\u306E\u30DB\u30B9\u30C8\u306F\u305D\u308C\u305E\u308C<code>db</code>/<code>redis</code>\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p></div><p>\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u3001<code>docker-compose.yml</code>\u3092\u7DE8\u96C6\u3057\u307E\u3059\u3002(\u30DD\u30FC\u30C8\u3092\u5909\u66F4\u3057\u305F\u3044\u5834\u5408\u306A\u3069)</p><h2 id="\u30D2\u3099\u30EB\u30C8\u3099\u3068\u521D\u671F\u5316" tabindex="-1"><a class="header-anchor" href="#\u30D2\u3099\u30EB\u30C8\u3099\u3068\u521D\u671F\u5316" aria-hidden="true">#</a> \u30D3\u30EB\u30C9\u3068\u521D\u671F\u5316</h2><p>\u6B21\u306E\u30B3\u30DE\u30F3\u30C9\u3067Misskey\u306E\u30D3\u30EB\u30C9\u3068\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u521D\u671F\u5316\u3092\u884C\u3044\u307E\u3059\u3002 \u3053\u308C\u306B\u306F\u3057\u3070\u3089\u304F\u6642\u9593\u304C\u304B\u304B\u308A\u307E\u3059\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker-compose</span> build
<span class="token function">sudo</span> <span class="token function">docker-compose</span> run --rm web <span class="token function">yarn</span> run init
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u8D77\u52D5" tabindex="-1"><a class="header-anchor" href="#\u8D77\u52D5" aria-hidden="true">#</a> \u8D77\u52D5</h2><p>\u304A\u75B2\u308C\u69D8\u3067\u3057\u305F\u3002\u4EE5\u4E0B\u306E\u30B3\u30DE\u30F3\u30C9\u3067Misskey\u3092\u8D77\u52D5\u3067\u304D\u307E\u3059\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker-compose</span> up -d
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>GLHF\u2728</p><h2 id="misskey\u306E\u30A2\u30C3\u30D5\u309A\u30C6\u3099\u30FC\u30C8\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#misskey\u306E\u30A2\u30C3\u30D5\u309A\u30C6\u3099\u30FC\u30C8\u65B9\u6CD5" aria-hidden="true">#</a> Misskey\u306E\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u65B9\u6CD5</h2>`,19),u={class:"custom-container warning"},m=s("i",{class:"fas fa-exclamation"},null,-1),b=n("\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u306E\u969B\u306F\u5FC5\u305A"),h={href:"https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},k=n("\u30EA\u30EA\u30FC\u30B9\u30CE\u30FC\u30C8"),f=n("\u3092\u78BA\u8A8D\u3057\u3001\u5909\u66F4\u70B9\u3084\u8FFD\u52A0\u3067\u5FC5\u8981\u306B\u306A\u308B\u4F5C\u696D\u306E\u6709\u7121(\u307B\u3068\u3093\u3069\u306E\u5834\u5408\u3042\u308A\u307E\u305B\u3093)\u3092\u4E88\u3081\u628A\u63E1\u3059\u308B\u3088\u3046\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"),g=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> stash
<span class="token function">git</span> checkout master
<span class="token function">git</span> pull
<span class="token function">git</span> submodule update --init
<span class="token function">git</span> stash pop
<span class="token function">sudo</span> <span class="token function">docker-compose</span> build
<span class="token function">sudo</span> <span class="token function">docker-compose</span> stop <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">docker-compose</span> up -d
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u5185\u5BB9\u3001\u304A\u3088\u3073\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u306E\u898F\u6A21\u306B\u3088\u3063\u3066\u306F\u6642\u9593\u304C\u304B\u304B\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002</p><h2 id="cli\u30B3\u30DE\u30F3\u30C8\u3099\u3092\u5B9F\u884C\u3059\u308B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#cli\u30B3\u30DE\u30F3\u30C8\u3099\u3092\u5B9F\u884C\u3059\u308B\u65B9\u6CD5" aria-hidden="true">#</a> cli\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3059\u308B\u65B9\u6CD5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker-compose</span> run --rm web <span class="token function">node</span> packages/backend/built/tools/foo bar
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,4);function v(_,x){const a=c("ExternalLinkIcon");return o(),i(t,null,[d,s("div",u,[m,s("p",null,[b,s("a",h,[k,l(a)]),f])]),g],64)}var N=r(p,[["render",v]]);export{N as default};
