<script setup>
</script>
<template lang="">

    <BaseSlider :images="links"/>
    <main class="my-14">
      <h2 class="text-center text-4xl sm:text-xl font-semibold my-4 animate-fade-left animate-once animate-duration-[999ms] animate-ease-out">
        Rumpun - Rumpun
      </h2>

      <div class="flex flex-wrap items-center justify-center gap-4 mx-4">
        <BaseRumpun name="Rumpun Dakwah" logo-path="/img/logo-rumpun/dakwah.png">
          <p>Rumpun Dakwah</p>
        </BaseRumpun>

        <BaseRumpun name="Rumpun MTQ" logo-path="/img/logo-rumpun/mtq.png">
          <p>Rumpun MTQ</p>
        </BaseRumpun>

        <BaseRumpun name="Hadroh" logo-path="/img/logo-rumpun/hadroh.png">
          <p>Rumpun Hadroh</p>
        </BaseRumpun>

        <BaseRumpun name="Tahfidz" logo-path="/img/logo-rumpun/tahfidz.png">
          <p>Rumpun Tahfidz</p>
        </BaseRumpun>
        
        <BaseRumpun name="Nasyid" logo-path="/img/logo-rumpun/nasyid.png">
          <p>Rumpun Nasyid</p>
        </BaseRumpun>

        <BaseRumpun name="Kaligrafi" logo-path="/img/logo-rumpun/kaligrafi.png">
          <p>Rumpun Nasyid</p>
        </BaseRumpun>
      </div>

      

    </main>
</template>
<script>
  export default {
    data(){
      return {
        links: [
          "/img/slide/jb-1-min.jpg",
          "/img/slide/jb-2-min.jpg",
          "/img/slide/jb-3-min.png",
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
