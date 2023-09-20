import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { a as useRouter } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-irma-37f7e5ed.mjs';
import { u as useTokenStore } from './token-24f45763.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useTokenStore();
    useRouter();
    console.log("stored token: ", store.getToken);
    let username = ref("");
    let password = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center" }, _attrs))}><div class="flex flex-col items-center justify-center my-10"><img${ssrRenderAttr("src", _imports_0)} alt="" class="my-1 w-1/2 h-auto"><h1 class="text-xl font-bolder my-3">IRMA FORMULAS</h1></div><div class="rounded-xl bg-green-700 w-full p-4"><p class="text-center font-bold text-white"> Portal Pemilihan calon rois roisah IRMA FORMULAS masa bakti 2023-2024 </p><form class="my-10 flex flex-col justify-center items-center gap-6"><input type="text" id="username" name="username" class="input w-full max-w-xs rounded-lg" placeholder="Username"${ssrRenderAttr("value", unref(username))}><input type="password" id="password" name="password" class="input w-full max-w-xs" placeholder="Password"${ssrRenderAttr("value", unref(password))}><button class="py-2 px-6 my-4 rounded-lg bg-white shadow-lg"> Login </button></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pemiros/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-f1d56bf7.mjs.map
