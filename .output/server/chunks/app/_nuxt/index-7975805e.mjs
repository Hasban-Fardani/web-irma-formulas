import { _ as __nuxt_component_0 } from './Slider-567e93c4.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-99c863e4.mjs';
import { _ as __nuxt_component_1 } from './nuxt-img-1403644c.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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
    no: Number,
    name: String,
    fotoLink: String,
    slogan: String,
    visi: Array,
    misi: Array
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_1;
  _push(`<!--[--><div class="card w-96 bg-base-100 shadow-xl hover:shadow-xl" data-v-e431b354><figure data-v-e431b354>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: $props.fotoLink,
    alt: $props.name,
    sizes: "sm: 80vw md:50vw lg:300px",
    loading: "lazy"
  }, null, _parent));
  _push(`</figure><div class="card-body" data-v-e431b354><span class="flex justify-start w-min bg-green-300 py-5 px-2 absolute text-xl" data-v-e431b354>${ssrInterpolate($props.no)}</span><h1 class="card-title text-2xl ml-10" data-v-e431b354>${ssrInterpolate($props.name)}</h1><p class="flex items-start ml-10 text-lg" data-v-e431b354>${ssrInterpolate($props.slogan)}</p><div class="flex justify-center mt-2" data-v-e431b354><button class="btn btn-primary" data-v-e431b354>Detail</button></div></div></div>`);
  if ($data.showModal) {
    _push(`<div class="fixed inset-0 flex items-center justify-center z-50" style="${ssrRenderStyle({ "background-color": "rgba(0, 0, 0, 0.5)" })}" data-v-e431b354><div class="bg-white w-full md:w-3/4 lg:w-1/2 p-4 rounded-lg shadow-lg" data-v-e431b354><h1 class="text-xl font-bold mb-4" data-v-e431b354>${ssrInterpolate("Paslon No." + $props.no.toString())}</h1><div class="flex flex-col gap-1" data-v-e431b354><h2 class="text-lg font-semibold" data-v-e431b354>Slogan</h2><p data-v-e431b354>${ssrInterpolate($props.slogan)}</p><h2 class="text-lg font-semibold" data-v-e431b354>Visi</h2><p data-v-e431b354>${ssrInterpolate($props.visi[0]["Visi"])}</p><h2 class="text-lg font-semibold" data-v-e431b354>Misi</h2><!--[-->`);
    ssrRenderList($props.misi, (m, index) => {
      _push(`<p data-v-e431b354>${ssrInterpolate(index + 1)} ${ssrInterpolate(m["Misi"])}</p>`);
    });
    _push(`<!--]--></div><button class="mt-4 bg-red-700 text-white px-4 py-2 rounded-md" data-v-e431b354> Close </button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pemiros/InfoPaslon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e431b354"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      "https://picsum.photos/1600/800",
      "https://picsum.photos/1600/800",
      "https://picsum.photos/1600/800"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseSlider = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_PemirosInfoPaslon = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$1;
      if (!_ctx.pending) {
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
        _push(`<div class="my-10 flex flex-wrap items-center justify-center gap-10"><!--[-->`);
        ssrRenderList(_ctx.listPaslon, (paslon, index) => {
          _push(ssrRenderComponent(_component_PemirosInfoPaslon, {
            key: index,
            id: paslon["IDPaslon"],
            no: paslon["NoUrut"],
            name: paslon["KandidatROIS"] + " & " + paslon["KandidatROISah"],
            slogan: paslon["Slogan"]["Slogan"],
            visi: paslon["Visi"],
            misi: paslon["Misi"],
            fotoLink: "https://picsum.photos/400/400"
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "btn btn-primary text-lg",
          to: "/pemiros/pilih"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Pilih`);
            } else {
              return [
                createTextVNode(" Pilih")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
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
//# sourceMappingURL=index-7975805e.mjs.map
