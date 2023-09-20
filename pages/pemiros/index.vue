<script setup>
definePageMeta({
  layout: "pemiros",
});

// const url = "http://localhost:8080"
const url = "http://13.212.39.132:8080";
console.log("be url: ",url);
const tahun = new Date().getFullYear().toString();

const { data, pending } = await useFetch(`${url}/paslon/?tahun=${tahun}`, {
  method: "get",
  // lazy: true,
});

const listPaslon = data.value.data

const links = [
  "https://picsum.photos/1600/800",
  "https://picsum.photos/1600/800",
  "https://picsum.photos/1600/800",
];
</script>

<template>
  <div v-if="!pending" class="flex flex-col justify-center items-center">
    <BaseSlider :images="links" />
    <nuxt-link to="/">
      <h2 class="text-lg md:text-2xl font-bold my-4 mt-20">
        Calon Rois Roisah Angkatan 53
      </h2>
    </nuxt-link>
    <div class="my-10 flex flex-wrap items-center justify-center gap-10">
      <PemirosInfoPaslon
        v-for="(paslon, index) in listPaslon"
        :key="index"
        :id="paslon['IDPaslon']"
        :no="paslon['NoUrut']"
        :name="paslon['KandidatROIS'] + ' & ' + paslon['KandidatROISah']"
        :slogan="paslon['Slogan']['Slogan']"
        :visi="paslon['Visi']"
        :misi="paslon['Misi']"
        fotoLink="https://picsum.photos/400/400"
      />
    </div>
    <NuxtLink class="btn btn-primary text-lg" to="/pemiros/pilih">
      Pilih</NuxtLink
    >
  </div>
</template>

<style lang="css">
nav {
  box-shadow: 0 3px 6px -6px #222;
}
</style>
