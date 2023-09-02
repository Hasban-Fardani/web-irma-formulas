<template lang="">
  <BaseNav></BaseNav>
  <slot/>
  <BaseFooter></BaseFooter>
</template>
<script setup>
useHead({
  title: "Web IRMA FORMULAS",
  meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  link: [
      { rel: 'icon', type: 'image/x-icon', href: '~/assets/img/logo-irma.png' }
    ],
});
</script>
<style>
  * {
    font-family: sans-serif;
  }
</style>