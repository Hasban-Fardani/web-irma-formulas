<template lang="">
  <PemirosNav></PemirosNav>
  <slot/>
  <PemirosFooter></PemirosFooter>
</template>
<script setup>
  useHead({
    title: "Aplikasi Pemilihan Rois Roisah",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Aplikasi Pemilihan Umum (Pemilu) untuk calon rois roisah IRMA FORMULAS'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'logo irma.png' }
    ],
    htmlAttrs: [
      {lang: "id"}
    ],
  });
</script>