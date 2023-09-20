<template>

  <div class="card w-96 bg-base-100 shadow-xl hover:shadow-xl">
    <figure>
      <nuxt-img :src="fotoLink" :alt="name" sizes="sm: 80vw md:50vw lg:300px" loading="lazy"/>
    </figure>
    <div class="card-body">
      <span class="flex justify-start w-min bg-green-300 py-5 px-2 absolute text-xl"> {{ no }}</span>
      <h1 class="card-title text-2xl ml-10">
        {{ name }}
      </h1>
      <p class="flex items-start ml-10 text-lg">
        {{ slogan }}
      </p>
      <!-- <div class="flex items-end justify-end"> -->
      
      <div class="flex justify-center mt-2">
        <button class="btn btn-primary" @click="openModal">Detail</button>
      </div>
    </div>
  </div>

  <!-- modal open -->
  <div
    v-if="showModal"
    class=" fixed inset-0 flex items-center justify-center z-50"
    style="background-color: rgba(0, 0, 0, 0.5)"
    @click.self="closeModal"
  >
    <div class=" bg-white w-full md:w-3/4 lg:w-1/2 p-4 rounded-lg shadow-lg" @click.stop>
      <!-- Konten modal -->
      <h1 class="text-xl font-bold mb-4">{{ 'Paslon No.' + no.toString() }}</h1>
      
      <div class="flex flex-col gap-1">
        <h2 class="text-lg font-semibold">Slogan</h2>
        <p> {{ slogan }} </p>
        <h2 class="text-lg font-semibold">Visi</h2>
        <p> {{  visi[0]["Visi"] }}</p>
        <h2 class="text-lg font-semibold">Misi</h2>
        <p v-for="(m, index) in misi" :key="index">
          {{ index + 1 }} {{ m["Misi"] }}
        </p>
      </div>
      <!-- Tombol untuk menutup modal -->
      <button @click="closeModal" class="mt-4 bg-red-700 text-white px-4 py-2 rounded-md">
        Close
      </button>
    </div>
  </div>

</template>
<script>
export default {
  props: {
    no: Number,
    name: String,
    fotoLink: String,
    slogan: String,
    visi: Array,
    misi: Array,
  },
  data(){
    return {
      showModal: false,
    }
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
  .card {
    @apply border-0 p-0;
  }
</style>