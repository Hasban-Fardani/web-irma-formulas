<template>
  <div class="relative">
    <div class="carousel-indicators">
      <button
        v-for="(image, index) in images"
        :key="index"
        @click="goToSlide(index)"
        :class="{ active: index === currentIndex }"
        aria-label="Slide"
      ></button>
    </div>
    <transition name="slide" mode="out-in">
      <div
        :key="currentIndex"
        class="carousel-inner"
        v-if="images.length"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          :class="{ 'carousel-item': true, active: index === currentIndex }"
        >
          <nuxt-img :src="image" :alt="image" sizes="sm: 400px md:800px lg:1200px"/>
        </div>
      </div>
    </transition>
    <button @click="prev" class="carousel-control-prev" aria-label="Previous">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button @click="next" class="carousel-control-next" aria-label="Next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    images: Array,
  },
  data() {
    return {
      currentIndex: 0,
      intervalId: null,
    };
  },
  mounted() {
    this.startAutoSlide(); // Memulai pergeseran otomatis saat komponen dimuat
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
      }, 3000); // Interval pergeseran otomatis (3 detik)
    },
    stopAutoSlide() {
      clearInterval(this.intervalId);
    },
  },
};
</script>

<style scoped>
/* Gaya CSS menggunakan Tailwind CSS dan DaisyUI */
.carousel {
  position: relative;
  width: 100%;
}

.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

.carousel-indicators button {
  @apply w-4 h-4 m-1 bg-gray-400 rounded-full; /* Menggunakan DaisyUI CSS class */
  cursor: pointer;
}

.carousel-indicators button.active {
  @apply bg-blue-500; /* Menggunakan DaisyUI CSS class */
}

.carousel-inner {
  position: relative;
  overflow: hidden; /* Menyembunyikan gambar yang berada di luar container */
}

.carousel-item {
  display: none;
  width: 100%;
}

.carousel-item.active {
  display: block;
}

/* Animasi slide ke kiri */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter, .slide-leave-to /* .slide-leave-active di <2.1.8 */ {
  transform: translateX(-100%); /* Mula-mula, gambar akan berada di luar layar sebelah kiri*/
}

.slide-enter-to, .slide-leave /* .slide-enter-active di <2.1.8 */ {
  transform: translateX(0); /* Akhirnya, gambar akan berada di dalam container */
}
</style>
