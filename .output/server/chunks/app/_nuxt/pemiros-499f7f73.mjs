import { _ as __nuxt_component_0$1 } from './nuxt-link-eb82102c.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-irma-e6dc5619.mjs';
import { u as useHead, _ as _export_sfc } from '../server.mjs';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "p-3 px-4 flex items-center justify-between" }, _attrs))}><div class="flex items-center gap-3"><img${ssrRenderAttr("src", _imports_0)} alt="" width="50" height="50"><h1 class="text-lg font-bold">Pemilu FORMULAS</h1></div><div class="">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/pemiros/login",
    class: "rounded-md bg-green-300 p-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Login`);
      } else {
        return [
          createTextVNode("Login")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></nav>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pemiros/Nav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "text-center mt-8 bg-base-200 p-4" }, _attrs))}><p>Copyright IRMA FORMULAS @2023</p></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pemiros/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "pemiros",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Aplikasi Pemilihan Rois Roisah"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PemirosNav = __nuxt_component_0;
      const _component_PemirosFooter = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_PemirosNav, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_PemirosFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/pemiros.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=pemiros-499f7f73.mjs.map
