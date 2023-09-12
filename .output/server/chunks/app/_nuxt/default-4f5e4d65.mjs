import { _ as __nuxt_component_0$1 } from './nuxt-link-eb82102c.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
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
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar bg-base-100 p-4" }, _attrs))}><div class="flex-1">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "flex items-center gap-2 normal-case text-xl"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="w-[50px] h-auto"${_scopeId}> IRMA FORMULAS `);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "",
            class: "w-[50px] h-auto"
          }),
          createTextVNode(" IRMA FORMULAS ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex-none"><ul class="menu menu-horizontal px-1"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` About `);
      } else {
        return [
          createTextVNode(" About ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/pemiros" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Pemiros `);
      } else {
        return [
          createTextVNode(" Pemiros ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></nav>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Nav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "flex flex-row justify-center" }, _attrs))}><div><img${ssrRenderAttr("src", "")} alt=""></div><p class="text-center p-2">Copyright IRMA FORMULAS @ 2023</p></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Web IRMA FORMULAS",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "logo irma.png" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseNav = __nuxt_component_0;
      const _component_BaseFooter = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_BaseNav, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_BaseFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-4f5e4d65.mjs.map
