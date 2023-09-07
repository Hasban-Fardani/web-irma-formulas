<template lang="">
  <div class="flex flex-wrap items-center justify-center gap-4 mx-4">
    <img src="~/assets/img/logo-rumpun/dakwah.png" class="border w-fit md:w-1/3 lg:w-1/4"/>
    <img src="~/assets/img/logo-rumpun/mtq.png" class="w-fit md:w-1/3 lg:w-1/4"/>
    <img src="~/assets/img/logo-rumpun/hadroh.png" class="w-fit md:w-1/3 lg:w-1/4"/>
    <img src="~/assets/img/logo-rumpun/tahfidz.png" class="w-fit md:w-1/3 lg:w-1/4"/>
    <img src="~/assets/img/logo-rumpun/nasyid.png" class="w-fit md:w-1/3 lg:w-1/4"/>
    <img src="~/assets/img/logo-rumpun/kaligrafi.png" class="w-fit md:w-1/3 lg:w-1/4"/>
  </div>
</template>
<script lang="ts">

export default {
  props: {
    logoPath: String,
  },
  data(){
    return {
      val: 10,
    }
  },
  methods: {
    showDetails() {
      
    },
  },
};
</script>
<style lang="css" scoped>
img {
  border: 1px solid black;
  border-radius: 6px;
  cursor: pointer;
  /* filter: brightness(90%); */
}
img:hover {
  filter: brightness(90%);
}
</style>
