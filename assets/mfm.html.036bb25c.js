import{_ as i,o,c as n,a as e,b as r,w as d,e as s,d as a,r as c}from"./app.8d4b3cf1.js";const l={},h=s(`<h1 id="mfm" tabindex="-1"><a class="header-anchor" href="#mfm" aria-hidden="true">#</a> MFM</h1><p>MFM, which stands for Misskey Flavoured Markdown, is a dedicated markup language that can be used in various places on Misskey.</p><div class="custom-container tip"><i class="fas fa-info"></i><p>Some of the syntax is compatible with Markdown.</p></div><h2 id="examples-of-where-misskey-is-allowed" tabindex="-1"><a class="header-anchor" href="#examples-of-where-misskey-is-allowed" aria-hidden="true">#</a> examples of where misskey is allowed</h2><ul><li>note body</li><li>content warnings</li><li>user name</li><li>user profile</li></ul><h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h2><h3 id="mentions" tabindex="-1"><a class="header-anchor" href="#mentions" aria-hidden="true">#</a> Mentions</h3><div class="custom-container tip"><i class="fas fa-info"></i><p>For more information about Mentions, see [here](. /mention.md).</p></div><div class="language-text ext-text"><pre class="language-text"><code>@alice
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>@alice@example.com
</code></pre></div><h3 id="hashtags" tabindex="-1"><a class="header-anchor" href="#hashtags" aria-hidden="true">#</a> Hashtags</h3><div class="custom-container tip"><i class="fas fa-info"></i><p>For more information about hashtags, see [here](. /hashtag.md).</p></div><div class="language-text ext-text"><pre class="language-text"><code>#misskey
</code></pre></div><h3 id="custom-emoji" tabindex="-1"><a class="header-anchor" href="#custom-emoji" aria-hidden="true">#</a> Custom Emoji</h3>`,14),m={class:"custom-container tip"},u=e("i",{class:"fas fa-info"},null,-1),f=a("For more information about custom emoji, see "),p=a("here"),x=a("."),g=s(`<div class="language-text ext-text"><pre class="language-text"><code>:misskey:
</code></pre></div><h3 id="links" tabindex="-1"><a class="header-anchor" href="#links" aria-hidden="true">#</a> Links</h3><div class="language-text ext-text"><pre class="language-text"><code>[example link](https://example.com)
</code></pre></div><h3 id="bold" tabindex="-1"><a class="header-anchor" href="#bold" aria-hidden="true">#</a> Bold</h3><div class="language-text ext-text"><pre class="language-text"><code>**Bold**
</code></pre></div><hr><div class="custom-container tip"><i class="fas fa-info"></i><p>More available syntax can be found in the <strong>MFM cheat sheet</strong> provided by the Misskey web UI under <code>/mfm-cheat-sheet</code> on your instance.</p></div><h2 id="information-for-developers" tabindex="-1"><a class="header-anchor" href="#information-for-developers" aria-hidden="true">#</a> Information for Developers</h2><p>The parser implementation of MFM is available as a library, making it easier to embed MFM in your clients.</p><ul><li><a href="https://github.com/misskey-dev/mfm.js" target="_blank" rel="noopener noreferrer">misskey-dev/mfm.js</a> - parser implementation in JavaScript</li></ul>`,10);function v(_,b){const t=c("RouterLink");return o(),n("div",null,[h,e("div",m,[u,e("p",null,[f,r(t,{to:"/ko/docs/features/custom-emoji.html"},{default:d(()=>[p]),_:1}),x])]),g])}var y=i(l,[["render",v],["__file","mfm.html.vue"]]);export{y as default};
