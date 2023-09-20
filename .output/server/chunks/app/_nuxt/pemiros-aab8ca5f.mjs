import { _ as __nuxt_component_0$1 } from './nuxt-link-99c863e4.mjs';
import { _ as __nuxt_component_1$1 } from './nuxt-img-1403644c.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, unref, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';
import { u as useTokenStore } from './token-24f45763.mjs';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$2 = {
  __name: "Nav",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useTokenStore();
    let is_login = false;
    if (store.getToken) {
      is_login = true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_nuxt_img = __nuxt_component_1$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "p-3 px-4 flex items-center justify-between shadow-xl" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "flex items-center gap-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: "/img/logo-irma.png",
              alt: "logo irma formulas.png",
              width: "50",
              height: "50"
            }, null, _parent2, _scopeId));
            _push2(`<h1 class="text-lg font-bold"${_scopeId}>Pemilu FORMULAS</h1>`);
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: "/img/logo-irma.png",
                alt: "logo irma formulas.png",
                width: "50",
                height: "50"
              }),
              createVNode("h1", { class: "text-lg font-bold" }, "Pemilu FORMULAS")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!unref(is_login)) {
        _push(`<div>`);
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
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pemiros/Nav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
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
      title: "Aplikasi Pemilihan Rois Roisah",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Aplikasi Pemilihan Umum (Pemilu) untuk calon rois roisah IRMA FORMULAS" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "logo irma.png" }
      ],
      htmlAttrs: [
        { lang: "id" }
      ]
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
//# sourceMappingURL=pemiros-aab8ca5f.mjs.map
