<template lang="">
  <header class="masthead animate__animated animate__fadeInDown">
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
          <div class="carousel-item active">
            <img :src="links[0].replace('~', '_nuxt')" alt="" class="w-100 h-auto d-block img-slide"> 
          </div>
          <div class="carousel-item">
            <img :src="links[1].replace('~', '_nuxt')" alt="" class="d-block img-slide" width="100%"> 
          </div>
          <div class="carousel-item">
            <img :src="links[2].replace('~', '_nuxt')" alt="" class="d-block img-slide" width="100%"> 
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bg-green-300"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bg-green-300"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </header>
</template>
<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  }
}
</script>
<style lang="">
  
</style>