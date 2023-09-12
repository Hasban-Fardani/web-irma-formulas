import { _ as __nuxt_component_0$1, a as __nuxt_component_0 } from './Modal-322d06ac.mjs';
import { useSSRContext, withCtx, createVNode, mergeProps, renderSlot } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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

const _sfc_main$1 = {
  props: {
    logoPath: String,
    name: String
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BaseModal = __nuxt_component_0;
  _push(ssrRenderComponent(_component_BaseModal, mergeProps({
    class: "border w-fit md:w-1/3 lg:w-1/4",
    title: "Rumpun Dakwah"
  }, _attrs), {
    trigger: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", $props.logoPath.replace("~", "_nuxt"))} data-v-c76a33aa${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: $props.logoPath.replace("~", "_nuxt")
          }, null, 8, ["src"])
        ];
      }
    }),
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Rumpun.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c76a33aa"]]);
const _sfc_main = {
  data() {
    return {
      links: [
        "~/assets/img/slide/jb-1-min.jpg",
        "~/assets/img/slide/jb-2-min.jpg",
        "~/assets/img/slide/jb-3-min.png"
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BaseSlider = __nuxt_component_0$1;
  const _component_BaseRumpun = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_BaseSlider, { images: $data.links }, null, _parent));
  _push(`<main class="my-14"><h2 class="text-center text-4xl sm:text-xl font-semibold my-4 animate-fade-left animate-once animate-duration-[999ms] animate-ease-out"> Rumpun - Rumpun </h2><div class="flex flex-wrap items-center justify-center gap-4 mx-4">`);
  _push(ssrRenderComponent(_component_BaseRumpun, {
    name: "Rumpun Dakwah",
    "logo-path": "~/assets/img/logo-rumpun/dakwah.png"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Rumpun Dakwah</p>`);
      } else {
        return [
          createVNode("p", null, "Rumpun Dakwah")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseRumpun, {
    name: "Rumpun MTQ",
    "logo-path": "~/assets/img/logo-rumpun/mtq.png"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Rumpun MTQ</p>`);
      } else {
        return [
          createVNode("p", null, "Rumpun MTQ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseRumpun, {
    name: "Hadroh",
    "logo-path": "~/assets/img/logo-rumpun/hadroh.png"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Rumpun Hadroh</p>`);
      } else {
        return [
          createVNode("p", null, "Rumpun Hadroh")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseRumpun, {
    name: "Tahfidz",
    "logo-path": "~/assets/img/logo-rumpun/tahfidz.png"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Rumpun Tahfidz</p>`);
      } else {
        return [
          createVNode("p", null, "Rumpun Tahfidz")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseRumpun, {
    name: "Nasyid",
    "logo-path": "~/assets/img/logo-rumpun/nasyid.png"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Rumpun Nasyid</p>`);
      } else {
        return [
          createVNode("p", null, "Rumpun Nasyid")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseRumpun, {
    name: "Kaligrafi",
    "logo-path": "~/assets/img/logo-rumpun/kaligrafi.png"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Rumpun Nasyid</p>`);
      } else {
        return [
          createVNode("p", null, "Rumpun Nasyid")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></main><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-c0388d6d.mjs.map
