<template lang="">
  <div class="flex flex-col justify-center items-center">

    <BaseSlider :images="links" />
    <nuxt-link to="/">
      <h2 class="text-lg md:text-2xl font-bold my-4 mt-20">
        Calon Rois Roisah Angkatan 53
      </h2>
    </nuxt-link>
    <div class="my-10  flex flex-wrap items-center justify-center gap-10">
      <PemirosInfoPaslon
        title="Paslon No. 1"
        id="modal1"
        no="1"
        name="Hasban & Syaqila"
        slogan="Berkah"
        visi=""
        misi=""
        fotoLink="https://picsum.photos/600/600"
        />
        <PemirosInfoPaslon
        title="Paslon No. 2"
        id="modal2"
        no="2"
        name="Hasban & Syaqila"
        slogan="Berkah"
        visi=""
        misi=""
        fotoLink="https://picsum.photos/600/600"
      />
      <PemirosInfoPaslon
        title="Paslon No. 3"
        id="modal3"
        no="3"
        name="Hasban & Syaqila"
        slogan="Berkah"
        visi=""
        misi=""
        fotoLink="https://picsum.photos/600/600"
      />
    </div>
  
    <NuxtLink class="btn text-lg" to="pemiros/pilih">
      Pilih
    </NuxtLink>
  </div>
</template>
<script setup>
let modalOpen = ref(false);
const links = [
  "https://picsum.photos/1600/800",
  "https://picsum.photos/1600/800",
  "https://picsum.photos/1600/800",
];

// const data = await $fetch('/api/hello');


definePageMeta({
  layout: "pemiros",
});

function toggleModal() {
  modalOpen = !modalOpen;
}

computed(() => {
  if (modalOpen) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }
});
</script>

<style lang="css">
nav {
  box-shadow: 0 3px 6px -6px #222;
}

.modal-open {
  filter: brightness(50%);
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
