<template>

  <base-modal>
    <template #trigger>
      <div class="card w-96 bg-base-100 shadow-xl hover:shadow-xl">
        <figure>
          <nuxt-img :src="fotoLink" :alt="name" sizes="sm: 80vw md:50vw lg:300px" />
        </figure>
        <div class="card-body">
          <h1 class="card-title text-2xl">{{ name }}</h1>
          <div class="flex justify-between">
            <div class="float-left">
              <h2 class="text-xl font-bold">Visi</h2>
              <p>{{ visi }}</p>
              <h2 class="text-xl font-bold">Misi</h2>
              <p>{{ misi }}</p>
            </div>
            <div class="mt-8 bg-green-300 px-3 py-2 rounded-md">
              {{ no }}
            </div>
          </div>
          <div class="card-actions justify-center">
            <button class="btn btn-primary">Detail</button>
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