<template lang="">
  <nav class="p-3 flex justify-between top-0 font-sans font-medium bg-green-50">
    <NuxtLink to="/" class="flex items-center mx-4">
      <img src="~/assets/img/logo-irma.png" alt="" class="w-[50px] h-auto "/>
      <h1 class="mx-3">IRMA FORMULAS</h1>
    </NuxtLink>
    <ul class="flex items-center gap-3 mx-4 font-normal">
      <li><NuxtLink to="/" :class="{ 'font-bold': route.path == '/' }">Home</NuxtLink></li>
      <li>
        <NuxtLink to="/about" :class="{ 'font-bold': route.path == '/about' }"
          >About</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style lang="css">
nav {
  box-shadow: 0 3px 6px -6px #222;
}
</style>

