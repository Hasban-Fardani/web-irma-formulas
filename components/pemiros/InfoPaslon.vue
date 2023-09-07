<template>
  <div>
    <BaseModal :title="title" :id="id">
      <template #trigger>
        <div class="pb-2 shadow-lg w-9/10 ">
          <img src="https://picsum.photos/300/300" class="w-full h-auto">
          <div class="flex justify-between w-full gap-20">
            <div class="m-2">
              <h5 class="font-semibold text-xl">{{ name }}</h5>
              <p>{{ slogan }}</p>
            </div>
            <div class="mr-auto flex justify-end">
              <h1 class="p-4 bg-green-600">{{ no }}</h1>
            </div>
          </div>
        </div>
      </template>
      <template #content>
        <div class="text-center">
          <div class="mt-3">
            <img src="https://picsum.photos/300/300" alt="">
          </div>
          <div class="my-4">
            <h3 class="font-semibold">{{ name }}</h3>
            <p>{{ slogan }}</p>
          </div>
        </div>
        <div class="my-2">
          <p>{{ sambutan }}</p>
          <div class="my-2">
            <h5 class="font-semibold text-xl">Visi</h5>
            <p>{{ visi }}</p>
          </div>
          <div>
            <h5 class="font-semibold text-xl">Misi</h5>
            <p> {{  misi }}</p>
          </div>
        </div>
      </template>
    </BaseModal>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    id: String,
    name: String,
    no: String,
    slogan: String,
    visi: String,
    misi: String,
    sambutan: String,
  }
}
</script>
<style lang="css">
  
</style>