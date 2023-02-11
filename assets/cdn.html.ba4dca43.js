import{_ as e,o as a,c as i,e as n}from"./app.8d4b3cf1.js";const t={},c=n('<h1 id="impostare-una-cdn" tabindex="-1"><a class="header-anchor" href="#impostare-una-cdn" aria-hidden="true">#</a> Impostare una CDN</h1><p>Quando pubblichi la tua istanza Misskey, ti raccomandiamo che avvenga dietro ad una CDN, come ad esempio <a href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer">Cloudflare</a>.</p><p>Usare Misskey dietro alla CDN, ti permette di avere i contenuti statici cachati, in maniera che le richieste non arrivino al tuo server. L&#39;indirizzo IP del server non viene esposto, diminuendo il rischio di un attacco DDOS.</p><h2 id="copia-cache" tabindex="-1"><a class="header-anchor" href="#copia-cache" aria-hidden="true">#</a> Copia cache</h2><p>L&#39;interfaccia web di Misskey \xE8 completamente statica e non necessita del server per funzionare. Questa \xE8 la parte migliore per cui funziona la <strong>copia cache</strong>.</p><p>Per\xF2 non tutta Misskey pu\xF2 essere &quot;cachata&quot;, le API non devono esserlo. Dunque, devi configurare la seguente eccezione nella tua CDN:</p><ul><li>Metti in cache tutte le richieste, tranne: <code>/api/*</code>.</li></ul><div class="custom-container tip"><i class="fas fa-info"></i><p>Non \xE8 necessario svuotare la cache quando aggiorni Misskey.</p></div>',8),o=[c];function r(s,d){return a(),i("div",null,o)}var u=e(t,[["render",r],["__file","cdn.html.vue"]]);export{u as default};
