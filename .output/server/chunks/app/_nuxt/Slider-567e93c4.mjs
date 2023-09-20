import { _ as __nuxt_component_1 } from './nuxt-img-1403644c.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  props: {
    images: Array
  },
  data() {
    return {
      currentIndex: 0,
      intervalId: null
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  methods: {
    goToSlide(index) {
      this.currentIndex = index;
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.images.length - 1;
      }
    },
    next() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    startAutoSlide() {
      this.intervalId = setInterval(() => {
        this.next();
      }, 3e3);
    },
    stopAutoSlide() {
      clearInterval(this.intervalId);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-25b56945><div class="carousel-indicators flex gap-2 justify-center" data-v-25b56945><!--[-->`);
  ssrRenderList($props.images, (image, index) => {
    _push(`<button class="${ssrRenderClass({ active: index === $data.currentIndex })}" aria-label="Slide" data-v-25b56945></button>`);
  });
  _push(`<!--]--></div>`);
  if ($props.images.length) {
    _push(`<div class="carousel-inner" data-v-25b56945><!--[-->`);
    ssrRenderList($props.images, (image, index) => {
      _push(`<div class="${ssrRenderClass({ "carousel-item": true, active: index === $data.currentIndex })}" data-v-25b56945>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: image,
        alt: image,
        sizes: "sm: 400px md:800px lg:1600px"
      }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Slider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-25b56945"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Slider-567e93c4.mjs.map
