import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { withAsyncContext, mergeProps, unref, useSSRContext, computed, reactive, ref, toRef, getCurrentInstance, onServerPrefetch } from 'vue';
import { b as useNuxtApp, a as useRouter, _ as _export_sfc, c as createError } from '../server.mjs';
import { v as hash } from '../../nitro/node-server.mjs';
import { u as useTokenStore } from './token-24f45763.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
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

function useRequestFetch() {
  var _a;
  const event = (_a = useNuxtApp().ssrContext) == null ? void 0 : _a.event;
  return (event == null ? void 0 : event.$fetch) || globalThis.$fetch;
}

const getDefault = () => null;
function useAsyncData(...args) {
  var _a, _b, _c, _d, _e;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = (_a = options.server) != null ? _a : true;
  options.default = (_b = options.default) != null ? _b : getDefault;
  options.lazy = (_c = options.lazy) != null ? _c : false;
  options.immediate = (_d = options.immediate) != null ? _d : true;
  const nuxt = useNuxtApp();
  const getCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  const hasCachedData = () => getCachedData() !== void 0;
  if (!nuxt._asyncData[key] || !options.immediate) {
    nuxt._asyncData[key] = {
      data: ref((_e = getCachedData()) != null ? _e : options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxt.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxt.isHydrating && opts._initial !== false) && hasCachedData()) {
      return getCachedData();
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = createError(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxt.hook("app:created", () => promise);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return unref(r);
  });
  const _key = opts.key || hash([autoKey, unref(opts.baseURL), typeof _request.value === "string" ? _request.value : "", unref(opts.params || opts.query)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && _request.value.startsWith("//")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch,
    immediate,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const isLocalFetch = typeof _request.value === "string" && _request.value.startsWith("/");
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch && isLocalFetch) {
      _$fetch = useRequestFetch();
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
const _sfc_main$1 = {
  props: {
    idPaslon: String,
    name: String,
    no: Number,
    imgPath: String
  },
  data() {
    return {
      showAlert: false
    };
  },
  mounted() {
    console.log(this.name);
    console.log(this.no);
    console.log(this.idPaslon);
  },
  methods: {
    toggleAlert() {
      console.log(this.idPaslon);
      this.showAlert = !this.showAlert;
    },
    fixPilih() {
      console.log("fix pilih: ", this.idPaslon);
      this.$emit("fix-pilih", this.idPaslon);
    }
  },
  emits: ["fix-pilih"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="card bg-base-100 shadow-xl w-80"><figure><img src="https://picsum.photos/300/300"${ssrRenderAttr("alt", $props.name)} class="w-full"></figure><div class="card-body"><h1 class="card-title">${ssrInterpolate($props.name)}</h1><div class="card-actions justify-center"><button class="btn btn-primary">Pilih</button></div></div></div>`);
  if (_ctx.showVM) {
    _push(`<div class="fixed inset-0 flex items-center justify-center z-50" style="${ssrRenderStyle({ "background-color": "rgba(0, 0, 0, 0.5)" })}"></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.showAlert) {
    _push(`<div class="fixed inset-0 flex items-center justify-center z-50" style="${ssrRenderStyle({ "background-color": "rgba(0, 0, 0, 0.5)" })}"><div class="bg-white w-5/6 md:w-3/4 lg:w-1/2 min-w-[250px] p-4 rounded-lg shadow-lg"><h1 class="text-lg font-semibold mb-4">Konfirmasi</h1><p> Apakah anda yakin memilih ${ssrInterpolate($props.name)} dengan paslon nomer urut ${ssrInterpolate($props.no)}</p><button class="mt-4 btn btn-warning px-4 py-2 rounded-md justify-end"> Cancel </button><button class="mt-4 ml-3 btn btn-primary px-4 py-2 rounded-md justify-end"> Pilih </button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pemiros/PilihPaslon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const url = "http://13.212.39.132:8080";
const _sfc_main = {
  __name: "pilih",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const store = useTokenStore();
    const token = store.getToken;
    console.log("token: ", token);
    if (!token || typeof token == void 0) {
      useRouter().push("login");
    }
    const tahun = (/* @__PURE__ */ new Date()).getFullYear().toString();
    const { data, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${url}/paslon/?tahun=${tahun}`, {
      method: "get"
    }, "$fjw5ohGgWh")), __temp = await __temp, __restore(), __temp);
    const listPaslon = data.value.data;
    async function pilih(id) {
      console.log("pilih id ", id);
      const { data: data2, error } = await useFetch(url + "/pemilu/pilih?idPaslon=" + id, {
        headers: { Authorization: "Bearer " + token },
        method: "post"
      }, "$TM6MzmlWgQ");
      console.log(data2.value);
      console.log(error.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PemirosPilihPaslon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center gap-4 px-9" }, _attrs))}><h1 class="text-2xl font-bold mt-9">Portal Pemilihan</h1><p> disini anda akan menentukan pilihan anda, jadi pastikan anda telah menentukan pilihan anda dan paham dengan calon yang anda pilih </p><ol class="list-decimal items-center justify-center"><h1 class="font-semibold text-lg text-center">Prosedur Pemilihan</h1><li>pahami visi misi setiap calon</li><li>tentukan pilihanmu</li><li>ketuk tombol \u2018pilih\u2019 pada salah satu paslon yang kamu pilih</li><li> akan ada alert(informasi) untuk memastikan bahwa pilihan anda sesuai </li><li> untuk konfirmasi ketuk tombol \u2018kirim\u2019, dan anda dinyatakan telah memilih </li><li>pemilihan hanya satu kali untuk setiap akun</li><li> setalah dinyatakan memilih anda hanya bisa melihat beranda dan profile paslon </li></ol>`);
      if (!unref(pending)) {
        _push(`<div class="flex flex-wrap justify-center gap-8 mt-4"><!--[-->`);
        ssrRenderList(unref(listPaslon), (paslon, index) => {
          _push(ssrRenderComponent(_component_PemirosPilihPaslon, {
            idPaslon: `${paslon.IDPaslon}`,
            key: index,
            no: index + 1,
            name: paslon["KandidatROIS"] + " & " + paslon["KandidatROISah"],
            onFixPilih: pilih
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
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
//# sourceMappingURL=pilih-b8db1479.mjs.map
