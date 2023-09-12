import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  props: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card md:card-side bg-base-100 shadow-xl border" }, _attrs))}><figure><img src="https://picsum.photos/300/300" class="w-full h-full" alt="Movie"></figure><div class="card-body"><h2 class="card-title">New movie is released!</h2><p>Click the button to watch on Jetflix app.</p><div class="card-actions justify-end"><button class="btn btn-primary">Pilih</button></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pemiros/PilihPaslon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "pilih",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PemirosPilihPaslon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center gap-4 px-9" }, _attrs))}><h1 class="text-2xl font-bold mt-9">Portal Pemilihan</h1><p>disini anda akan menentukan pilihan anda, jadi pastikan anda telah menentukan pilihan anda dan paham dengan calon yang anda pilih </p><ol class="list-decimal mx-6"><h1 class="font-semibold text-lg">Prosedur Pemilihan</h1><li> pahami visi misi setiap calon </li><li> tentukan pilihanmu </li><li> ketuk tombol \u2018pilih\u2019 pada salah satu paslon yang kamu pilih </li><li> akan ada alert(informasi) untuk memastikan bahwa pilihan anda sesuai </li><li> untuk konfirmasi ketuk tombol \u2018kirim\u2019, dan anda dinyatakan telah memilih </li><li> pemilihan hanya satu kali untuk setiap akun </li><li> setalah dinyatakan memilih anda hanya bisa melihat beranda dan profile paslon </li></ol>`);
      _push(ssrRenderComponent(_component_PemirosPilihPaslon, null, null, _parent));
      _push(ssrRenderComponent(_component_PemirosPilihPaslon, null, null, _parent));
      _push(ssrRenderComponent(_component_PemirosPilihPaslon, null, null, _parent));
      _push(`<button class="btn btn-primary text-xl mt-4"> Submit </button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pemiros/pilih.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=pilih-cd4eed73.mjs.map
