import{_ as e,o as i,c as r,e as t}from"./app.8d4b3cf1.js";const a={},n=t('<h1 id="\u1111\u1173\u11AF\u1105\u1165\u1100\u1173\u110B\u1175\u11AB-api-\u110E\u1161\u11B7\u110C\u1169" tabindex="-1"><a class="header-anchor" href="#\u1111\u1173\u11AF\u1105\u1165\u1100\u1173\u110B\u1175\u11AB-api-\u110E\u1161\u11B7\u110C\u1169" aria-hidden="true">#</a> \uD50C\uB7EC\uADF8\uC778 API \uCC38\uC870</h1><p>\uC774 API\uB294 AiScript\uC758 \uD655\uC7A5\uC73C\uB85C, Mk:\uB85C \uC2DC\uC791\uD558\uB294 API\uB294 Play\uC5D0\uC11C\uB3C4 \uD65C\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="mk-dialog-title-text-type" tabindex="-1"><a class="header-anchor" href="#mk-dialog-title-text-type" aria-hidden="true">#</a> Mk:dialog(title text type)</h2><p>\uB300\uD654 \uC0C1\uC790\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4. type\uC5D0\uB294 \uB2E4\uC74C \uAC12\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><ul><li>info</li><li>success</li><li>warn</li><li>error</li><li>question</li></ul><p>\uC0DD\uB7B5\uD558\uBA74 info\uAC00\uB429\uB2C8\uB2E4.</p><h2 id="mk-confirm-title-text-type" tabindex="-1"><a class="header-anchor" href="#mk-confirm-title-text-type" aria-hidden="true">#</a> Mk:confirm(title text type)</h2><p>\uD655\uC778 \uB300\uD654 \uC0C1\uC790\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4. type\uC5D0\uB294 \uB2E4\uC74C \uAC12\uC744 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><ul><li>info</li><li>success</li><li>warn</li><li>error</li><li>question</li></ul><p>\uC0DD\uB7B5\uD558\uBA74 question\uC774 \uB429\uB2C8\uB2E4. <br> \uC0AC\uC6A9\uC790\uAC00 &quot;OK&quot;\uB97C \uC120\uD0DD\uD558\uBA74 true\uB97C \uBC18\uD658\uD558\uACE0 &quot;\uCDE8\uC18C&quot;\uB97C \uC120\uD0DD\uD558\uBA74 false\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4.</p><h2 id="mk-api-endpoint-params" tabindex="-1"><a class="header-anchor" href="#mk-api-endpoint-params" aria-hidden="true">#</a> Mk:api(endpoint params)</h2><p>Misskey API\uC5D0 \uC694\uCCAD\uD569\uB2C8\uB2E4. \uCCAB \uBC88\uC9F8 \uC778\uC218\uC5D0 \uB05D\uC810 \uC774\uB984\uC744, \uB450 \uBC88\uC9F8 \uC778\uC218\uC5D0 \uB9E4\uAC1C \uBCC0\uC218 \uAC1C\uCCB4\uB97C \uC804\uB2EC\uD569\uB2C8\uB2E4.</p><h2 id="mk-save-key-value" tabindex="-1"><a class="header-anchor" href="#mk-save-key-value" aria-hidden="true">#</a> Mk:save(key value)</h2><p>\uC784\uC758\uC758 \uAC12\uC5D0 \uC784\uC758\uC758 \uC774\uB984\uC744 \uBD99\uC5EC \uC601\uC18D\uD654\uD569\uB2C8\uB2E4. \uC9C0\uC18D\uB41C \uAC12\uC740 AiScript \uCEE8\uD14D\uC2A4\uD2B8\uAC00 \uB05D\uB098\uB354\uB77C\uB3C4 \uB0A8\uC544 \uC788\uC73C\uBA70 Mk:load\uC5D0\uC11C \uC77D\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="mk-load-key" tabindex="-1"><a class="header-anchor" href="#mk-load-key" aria-hidden="true">#</a> Mk:load(key)</h2><p>Mk:save\uB85C \uC9C0\uC18D\uB41C \uC9C0\uC815\uB41C \uC774\uB984\uC758 \uAC12\uC744 \uC77D\uC2B5\uB2C8\uB2E4.</p><h2 id="plugin-register-post-form-action-title-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-post-form-action-title-fn" aria-hidden="true">#</a> Plugin:register_post_form_action(title fn)</h2><p>\uAC8C\uC2DC \uC591\uC2DD\uC5D0 \uC561\uC158\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4. \uCCAB \uBC88\uC9F8 \uC778\uC218\uC5D0 \uC561\uC158 \uC774\uB984, \uB450 \uBC88\uC9F8 \uC778\uC218\uC5D0 \uC561\uC158\uC774 \uC120\uD0DD\uB418\uC5C8\uC744 \uB54C \uCF5C\uBC31 \uD568\uC218\uB97C \uC804\uB2EC\uD569\uB2C8\uB2E4. <br> \uCF5C\uBC31 \uD568\uC218\uB294 \uCCAB \uBC88\uC9F8 \uC778\uC218\uC5D0 \uAC8C\uC2DC \uC591\uC2DD \uAC1D\uCCB4\uB97C \uC804\uB2EC\uD569\uB2C8\uB2E4.</p><h2 id="plugin-register-note-action-title-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-note-action-title-fn" aria-hidden="true">#</a> Plugin:register_note_action(title fn)</h2><p>\uB178\uD2B8 \uBA54\uB274\uC5D0 \uD56D\uBAA9\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4. \uCCAB \uBC88\uC9F8 \uC778\uC218\uC5D0 \uD56D\uBAA9 \uC774\uB984\uC744, \uB450 \uBC88\uC9F8 \uC778\uC218\uC5D0 \uD56D\uBAA9\uC774 \uC120\uD0DD\uB418\uC5C8\uC744 \uB54C \uCF5C\uBC31 \uD568\uC218\uB97C \uC804\uB2EC\uD569\uB2C8\uB2E4. <br> \uCF5C\uBC31 \uD568\uC218\uB294 \uCCAB \uBC88\uC9F8 \uC778\uC218\uB85C \uB300\uC0C1 \uB178\uD2B8 \uAC1D\uCCB4\uB97C \uC804\uB2EC\uD569\uB2C8\uB2E4.</p><h2 id="plugin-register-user-action-title-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-user-action-title-fn" aria-hidden="true">#</a> Plugin:register_user_action(title fn)</h2><p>\uC0AC\uC6A9\uC790 \uBA54\uB274\uC5D0 \uD56D\uBAA9\uC744 \uCD94\uAC00\uD569\uB2C8\uB2E4. \uCCAB \uBC88\uC9F8 \uC778\uC218\uC5D0 \uD56D\uBAA9 \uC774\uB984\uC744, \uB450 \uBC88\uC9F8 \uC778\uC218\uC5D0 \uD56D\uBAA9\uC774 \uC120\uD0DD\uB418\uC5C8\uC744 \uB54C \uCF5C\uBC31 \uD568\uC218\uB97C \uC804\uB2EC\uD569\uB2C8\uB2E4. <br> \uCF5C\uBC31 \uD568\uC218\uB294 \uCCAB \uBC88\uC9F8 \uC778\uC218\uB85C \uB300\uC0C1 \uC0AC\uC6A9\uC790 \uAC1D\uCCB4\uB97C \uC804\uB2EC\uD569\uB2C8\uB2E4.</p><h2 id="plugin-register-note-view-interruptor-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-note-view-interruptor-fn" aria-hidden="true">#</a> Plugin:register_note_view_interruptor(fn)</h2><p>UI\uC5D0 \uD45C\uC2DC\uB418\uB294 \uB178\uD2B8 \uC815\uBCF4\uB97C \uB2E4\uC2DC \uC501\uB2C8\uB2E4. <br> \uCF5C\uBC31 \uD568\uC218\uB294 \uCCAB \uBC88\uC9F8 \uC778\uC218\uB85C \uB300\uC0C1 \uB178\uD2B8 \uAC1D\uCCB4\uB97C \uC804\uB2EC\uD569\uB2C8\uB2E4. <br> \uCF5C\uBC31 \uD568\uC218\uC758 \uBC18\uD658 \uAC12\uC73C\uB85C \uB178\uD2B8\uB97C \uB2E4\uC2DC \uC501\uB2C8\uB2E4.</p><h2 id="plugin-register-note-post-interruptor-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-note-post-interruptor-fn" aria-hidden="true">#</a> Plugin:register_note_post_interruptor(fn)</h2><p>\uB178\uD2B8\uB97C \uAC8C\uC2DC\uD560 \uB54C \uB178\uD2B8 \uC815\uBCF4\uB97C \uB2E4\uC2DC \uC501\uB2C8\uB2E4. <br> \uCF5C\uBC31 \uD568\uC218\uB294 \uCCAB \uBC88\uC9F8 \uC778\uC218\uB85C \uB300\uC0C1 \uB178\uD2B8 \uAC1D\uCCB4\uB97C \uC804\uB2EC\uD569\uB2C8\uB2E4. <br> \uCF5C\uBC31 \uD568\uC218\uC758 \uBC18\uD658 \uAC12\uC73C\uB85C \uB178\uD2B8\uB97C \uB2E4\uC2DC \uC501\uB2C8\uB2E4.</p><h2 id="plugin-open-url-url" tabindex="-1"><a class="header-anchor" href="#plugin-open-url-url" aria-hidden="true">#</a> Plugin:open_url(url)</h2><p>\uCCAB \uBC88\uC9F8 \uC778\uC218\uC5D0 \uC804\uB2EC\uB41C URL\uC744 \uBE0C\uB77C\uC6B0\uC800\uC758 \uC0C8 \uD0ED\uC5D0\uC11C \uC5FD\uB2C8\uB2E4.</p><h2 id="plugin-config" tabindex="-1"><a class="header-anchor" href="#plugin-config" aria-hidden="true">#</a> Plugin:config</h2><p>\uD50C\uB7EC\uADF8\uC778 \uC124\uC815\uC774 \uC800\uC7A5\uB418\uB294 \uAC1D\uCCB4. \uD50C\uB7EC\uADF8\uC778 \uC815\uC758\uC758 config\uC5D0\uC11C \uC124\uC815\uD55C \uD0A4\uB85C \uAC12\uC774 \uB4E4\uC5B4\uAC11\uB2C8\uB2E4.</p>',30),l=[n];function o(p,h){return i(),r("div",null,l)}var s=e(a,[["render",o],["__file","plugin-api-reference.html.vue"]]);export{s as default};
