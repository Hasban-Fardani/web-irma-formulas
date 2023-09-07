<template lang="">
  
    <BaseHeader
    :links="links"
    />
    <main class="my-14">
      <h2 class="text-center text-4xl sm:text-xl font-semibold animate__animated animate__fadeInLeft my-4">
        Rumpun - Rumpun
      </h2>
      <!-- <BaseRumpun/> -->
      <div class="flex flex-wrap items-center justify-center gap-4 mx-4">

        <!-- <BaseModal title="Test aja" id="modal1" >
          <template #trigger>
            <img src="~/assets/img/logo-rumpun/dakwah.png" alt="">
          </template>
          <template #content>
            <h1>Hello From Modal</h1>
          </template>
        </BaseModal> -->
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
    }
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
