<template>

  <base-modal>
    <template #trigger>
      <div class="card w-96 bg-base-100 shadow-xl hover:shadow-xl hover:scale-105 hover:bg-green-50">
        <figure>
          <img :src="fotoLink" :alt="name" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-2xl">{{ name }}</h2>
          <div class="flex justify-between">
            <div class="float-left">
              <h3 class="text-xl font-bold">Visi</h3>
              <p>{{ visi }}</p>
              <h3 class="text-xl font-bold">Misi</h3>
              <p>{{ misi }}</p>
            </div>
            <div class="mt-8 bg-green-300 px-3 py-2 rounded-md">
              {{ no }}
            </div>
          </div>
        </div>
     </div>
    </template>

    <template #content>

    </template>
  </base-modal>

</template>
<script>
export default {
  props: {
    no: String,
    title: String,
    name: String,
    fotoLink: String,
    slogan: String,
    visi: String,
    misi: String,
  },
};
</script>

<style scoped>
  .card {
    @apply border-0 p-0;
  }
</style>