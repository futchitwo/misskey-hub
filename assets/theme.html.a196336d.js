import{_ as a,o as e,c as n,e as s}from"./app.8d4b3cf1.js";const i={},t=s(`<h1 id="i-temi" tabindex="-1"><a class="header-anchor" href="#i-temi" aria-hidden="true">#</a> I temi</h1><p>Servono per cambiare l&#39;aspetto del client Web di Misskey.</p><h2 id="impostazioni-tema" tabindex="-1"><a class="header-anchor" href="#impostazioni-tema" aria-hidden="true">#</a> Impostazioni tema</h2><p>Per configurarli occorre visitare la pagina \xABImpostazioni\xBB alla voce \xABTema\xBB.</p><h2 id="creare-un-tema" tabindex="-1"><a class="header-anchor" href="#creare-un-tema" aria-hidden="true">#</a> Creare un tema</h2><p>Il tema \xE8 un oggetto JSON5 che assomiglia a questo:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;17587283-dd92-4a2c-a22c-be0637c9e22a&#39;</span><span class="token punctuation">,</span>

	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Danboard&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token string">&#39;syuilo&#39;</span><span class="token punctuation">,</span>

	<span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;light&#39;</span><span class="token punctuation">,</span>

	<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">accent</span><span class="token operator">:</span> <span class="token string">&#39;rgb(218, 141, 49)&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">bg</span><span class="token operator">:</span> <span class="token string">&#39;rgb(218, 212, 190)&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">fg</span><span class="token operator">:</span> <span class="token string">&#39;rgb(115, 108, 92)&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">panel</span><span class="token operator">:</span> <span class="token string">&#39;rgb(236, 232, 220)&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">renote</span><span class="token operator">:</span> <span class="token string">&#39;rgb(100, 152, 106)&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;rgb(100, 152, 106)&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">mention</span><span class="token operator">:</span> <span class="token string">&#39;@accent&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">hashtag</span><span class="token operator">:</span> <span class="token string">&#39;rgb(100, 152, 106)&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">&#39;rgba(239, 227, 213, 0.75)&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">navBg</span><span class="token operator">:</span> <span class="token string">&#39;rgb(216, 206, 182)&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">inputBorder</span><span class="token operator">:</span> <span class="token string">&#39;rgba(0, 0, 0, 0.1)&#39;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="parametri" tabindex="-1"><a class="header-anchor" href="#parametri" aria-hidden="true">#</a> Parametri</h2><ul><li><code>id</code>: codice identificativo univoco, possibilmente un UUID</li><li><code>name</code>: nome</li><li><code>author</code>: autore</li><li><code>desc</code>: descrizione (facoltativa)</li><li><code>base</code>: riferimento sul tema di partenza <ul><li><code>light</code>: se estendi un tema chiaro; <code>dark</code>: se ne estendi uno scuro</li><li>il tuo tema erediter\xE0 le caratteristiche di uno dei due.</li></ul></li><li><code>props</code>: propriet\xE0 del tema, spiegate di seguito</li></ul><h3 id="definizione-degli-stili" tabindex="-1"><a class="header-anchor" href="#definizione-degli-stili" aria-hidden="true">#</a> Definizione degli stili</h3><p><code>props</code>\u4E0B\u306B\u306F\u30C6\u30FC\u30DE\u306E\u30B9\u30BF\u30A4\u30EB\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002 \u30AD\u30FC\u304C CSS \u306E\u5909\u6570\u540D\u306B\u306A\u308A\u3001\u30D0\u30EA\u30E5\u30FC\u3067\u4E2D\u8EAB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u306A\u304A\u3001\u3053\u306E<code>props</code>\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u30D9\u30FC\u30B9\u30C6\u30FC\u30DE\u304B\u3089\u7D99\u627F\u3055\u308C\u307E\u3059\u3002 \u30D9\u30FC\u30B9\u30C6\u30FC\u30DE\u306F\u3001\u3053\u306E\u30C6\u30FC\u30DE\u306E<code>base</code>\u304C<code>light</code>\u306A\u3089<a href="https://github.com/misskey-dev/misskey/blob/develop/packages/frontend/src/themes/_light.json5" target="_blank" rel="noopener noreferrer">_light.json5</a>\u3067\u3001<code>dark</code>\u306A\u3089<a href="https://github.com/misskey-dev/misskey/blob/develop/packages/frontend/src/themes/_dark.json5" target="_blank" rel="noopener noreferrer">_dark.json5</a>\u3067\u3059\u3002 \u3064\u307E\u308A\u3001\u3053\u306E\u30C6\u30FC\u30DE\u5185\u306E<code>props</code>\u306B<code>panel</code>\u3068\u3044\u3046\u30AD\u30FC\u304C\u7121\u304F\u3066\u3082\u3001\u305D\u3053\u306B\u306F\u30D9\u30FC\u30B9\u30C6\u30FC\u30DE\u306E<code>panel</code>\u304C\u3042\u308B\u3068\u898B\u306A\u3055\u308C\u307E\u3059\u3002</p><h4 id="sintassi-per-i-valori" tabindex="-1"><a class="header-anchor" href="#sintassi-per-i-valori" aria-hidden="true">#</a> Sintassi per i valori</h4><ul><li>Colore esadecimale <ul><li>es: <code>#00ff00</code></li></ul></li><li>Colore <code>rgb(r, g, b)</code><ul><li>es: <code>rgb(0, 255, 0)</code></li></ul></li><li>Colore con trasparenza alpha <code>rgb(r, g, b, a)</code><ul><li>es: <code>rgba(0, 255, 0, 0.5)</code></li></ul></li><li>Riferimenti ad altre variabili <ul><li>Scrivendo <code>@{variabile}</code> si far\xE0 riferimento al valore di quella variabile.</li><li>es: <code>@panel</code></li></ul></li><li>Riferimenti alle costanti (vedi sotto) <ul><li>Scrivendo <code>\${costante}</code> si far\xE0 riferimento al valore di quelal costante.</li><li>es: <code>$main</code></li></ul></li><li>Riferimenti alle funzioni (vedi sotto) <ul><li><code>:{funzione}&lt;{argomento}&lt;{colore}</code></li></ul></li></ul><h4 id="costanti" tabindex="-1"><a class="header-anchor" href="#costanti" aria-hidden="true">#</a> Costanti</h4><p>Le costanti sono utili quando si ha un valore che non si desidera restituire come variabile CSS, ma si desidera riutilizzarlo come valore di un&#39;altra variabile CSS.</p><p>Se il nome della chiave inizia con <code>$</code>, la chiave non verr\xE0 esportata come variabile CSS.</p><h4 id="funzioni" tabindex="-1"><a class="header-anchor" href="#funzioni" aria-hidden="true">#</a> Funzioni</h4><p>TODO</p>`,18),o=[t];function r(l,p){return e(),n("div",null,o)}var d=a(i,[["render",r],["__file","theme.html.vue"]]);export{d as default};
