import { _ as __nuxt_component_0$1, a as __nuxt_component_0$2 } from './Modal-322d06ac.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-eb82102c.mjs';
import { ref, computed, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
    no: String,
    title: String,
    name: String,
    fotoLink: String,
    slogan: String,
    visi: String,
    misi: String
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_base_modal = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_base_modal, _attrs, {
    trigger: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="card w-96 bg-base-100 shadow-xl hover:shadow-xl hover:scale-105 hover:bg-green-50" data-v-1d5f0b01${_scopeId}><figure data-v-1d5f0b01${_scopeId}><img${ssrRenderAttr("src", $props.fotoLink)}${ssrRenderAttr("alt", $props.name)} data-v-1d5f0b01${_scopeId}></figure><div class="card-body" data-v-1d5f0b01${_scopeId}><h2 class="card-title text-2xl" data-v-1d5f0b01${_scopeId}>${ssrInterpolate($props.name)}</h2><div class="flex justify-between" data-v-1d5f0b01${_scopeId}><div class="float-left" data-v-1d5f0b01${_scopeId}><h3 class="text-xl font-bold" data-v-1d5f0b01${_scopeId}>Visi</h3><p data-v-1d5f0b01${_scopeId}>${ssrInterpolate($props.visi)}</p><h3 class="text-xl font-bold" data-v-1d5f0b01${_scopeId}>Misi</h3><p data-v-1d5f0b01${_scopeId}>${ssrInterpolate($props.misi)}</p></div><div class="mt-8 bg-green-300 px-3 py-2 rounded-md" data-v-1d5f0b01${_scopeId}>${ssrInterpolate($props.no)}</div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "card w-96 bg-base-100 shadow-xl hover:shadow-xl hover:scale-105 hover:bg-green-50" }, [
            createVNode("figure", null, [
              createVNode("img", {
                src: $props.fotoLink,
                alt: $props.name
              }, null, 8, ["src", "alt"])
            ]),
            createVNode("div", { class: "card-body" }, [
              createVNode("h2", { class: "card-title text-2xl" }, toDisplayString($props.name), 1),
              createVNode("div", { class: "flex justify-between" }, [
                createVNode("div", { class: "float-left" }, [
                  createVNode("h3", { class: "text-xl font-bold" }, "Visi"),
                  createVNode("p", null, toDisplayString($props.visi), 1),
                  createVNode("h3", { class: "text-xl font-bold" }, "Misi"),
                  createVNode("p", null, toDisplayString($props.misi), 1)
                ]),
                createVNode("div", { class: "mt-8 bg-green-300 px-3 py-2 rounded-md" }, toDisplayString($props.no), 1)
              ])
            ])
          ])
        ];
      }
    }),
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2)
        ;
      else {
        return [];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pemiros/InfoPaslon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1d5f0b01"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let modalOpen = ref(false);
    const links = [
      "https://picsum.photos/1200/600",
      "https://picsum.photos/1200/600",
      "https://picsum.photos/1200/600"
    ];
    computed(() => {
      if (modalOpen) {
        document.body.classList.add("modal-open");
      } else {
        document.body.classList.remove("modal-open");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseSlider = __nuxt_component_0$1;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_PemirosInfoPaslon = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseSlider, { images: links }, null, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-lg md:text-2xl font-bold my-4 mt-20"${_scopeId}> Calon Rois Roisah Angkatan 53 </h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-lg md:text-2xl font-bold my-4 mt-20" }, " Calon Rois Roisah Angkatan 53 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="my-10 flex flex-wrap items-center justify-center gap-10">`);
      _push(ssrRenderComponent(_component_PemirosInfoPaslon, {
        title: "Paslon No. 1",
        id: "modal1",
        no: "1",
        name: "Hasban & Syaqila",
        slogan: "Berkah",
        visi: "",
        misi: "",
        sambutan: ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_PemirosInfoPaslon, {
        title: "Paslon No. 2",
        id: "modal2",
        no: "2",
        name: "Hasban & Syaqila",
        slogan: "Berkah",
        visi: "",
        misi: "",
        sambutan: ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_PemirosInfoPaslon, {
        title: "Paslon No. 3",
        id: "modal3",
        no: "3",
        name: "Hasban & Syaqila",
        slogan: "Berkah",
        visi: "",
        misi: "",
        sambutan: ""
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, { class: "btn text-lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pilih `);
          } else {
            return [
              createTextVNode(" Pilih ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pemiros/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-a39c1226.mjs.map
