<script setup>
</script>
<template lang="">

    <BaseSlider :images="links"/>
    <main class="my-14">
      <h2 class="text-center text-4xl sm:text-xl font-semibold my-4 animate-fade-left animate-once animate-duration-[999ms] animate-ease-out">
        Rumpun - Rumpun
      </h2>
      <div class="flex flex-wrap items-center justify-center gap-4 mx-4">
        <img src="~/assets/img/logo-rumpun/dakwah.png" class="border w-fit md:w-1/3 lg:w-1/4"/>
        <img src="~/assets/img/logo-rumpun/mtq.png" class="border w-fit md:w-1/3 lg:w-1/4"/>
        <img src="~/assets/img/logo-rumpun/hadroh.png" class="border w-fit md:w-1/3 lg:w-1/4"/>
        <img src="~/assets/img/logo-rumpun/tahfidz.png" class="border w-fit md:w-1/3 lg:w-1/4"/>
        <img src="~/assets/img/logo-rumpun/nasyid.png" class="border w-fit md:w-1/3 lg:w-1/4"/>
        <img src="~/assets/img/logo-rumpun/kaligrafi.png" class="border w-fit md:w-1/3 lg:w-1/4"/>
      </div>
    </main>
</template>
<script>
  export default {
    data(){
      return {
        links: [
          "~/assets/img/slide/jb-1-min.jpg",
          "~/assets/img/slide/jb-2-min.jpg",
          "~/assets/img/slide/jb-3-min.png",
        ]
      }
    },
  }
</script>

<style lang="css">
* {
  margin: 0%;
}

nav {
  box-shadow: 0 3px 6px -6px #222;
}
</style>
