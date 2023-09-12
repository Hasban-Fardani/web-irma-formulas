<template lang="">
    <BaseModal class="border w-fit md:w-1/3 lg:w-1/4" title="Rumpun Dakwah">
      <template #trigger>
        <!-- <img :src="~/assets/img/logo-rumpun/dakwah.png" /> -->
        <img :src="logoPath.replace('~','_nuxt')"/>
      </template>
      <template #content>
        <slot/>
      </template>
    </BaseModal>
</template>
<script lang="ts">

export default {
  props: {
    logoPath: String,
    name: String,
  },
};
</script>

<style lang="css" scoped>
img {
  border: 1px solid black;
  border-radius: 6px;
  cursor: pointer;
}
img:hover {
  filter: brightness(90%);
}
</style>
