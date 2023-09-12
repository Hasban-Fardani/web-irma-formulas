import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-irma-e6dc5619.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center" }, _attrs))}><div class="flex flex-col items-center justify-center my-20"><img${ssrRenderAttr("src", _imports_0)} alt="" class="my-2 w-1/2 h-auto"><h1 class="text-xl my-3">IRMA FORMULAS</h1></div><div class="rounded-xl bg-green-600 w-full p-4 h-[55vh] pb-96"><p> Portal Pemilihan calon rois roisah IRMA FORMULAS masa bakti 2023-2024 </p><form action="" class="my-10 flex flex-col justify-center items-center gap-6"><input type="text" id="username" name="username" class="w-3/4 text-4xl rounded-lg" placeholder="Username"><input type="text" id="password" name="password" class="w-3/4 text-4xl rounded-lg" placeholder="Password"><button type="submit" class="py-2 px-6 my-4 rounded-lg bg-white shadow-lg">Login</button></form></div></div>`);
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
//# sourceMappingURL=login-4a2a7152.mjs.map
