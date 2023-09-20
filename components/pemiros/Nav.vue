<template lang="">
  <nav class="p-3 px-4 flex items-center justify-between shadow-xl">
    <nuxt-link to="/" class="flex items-center gap-3">
      <nuxt-img
        src="/img/logo-irma.png"
        alt="logo irma formulas.png"
        width="50"
        height="50"
      />
      <h1 class="text-lg font-bold">Pemilu FORMULAS</h1>
    </nuxt-link>

    <div v-if="!is_login">
      <nuxt-link to="/pemiros/login" class="rounded-md bg-green-300 p-2"
        >Login</nuxt-link
      >
    </div>
  </nav>
</template>
<script setup>
import { useTokenStore } from "@/stores/token";
const store = useTokenStore();

let is_login = false;
if (store.getToken) {
  is_login = true;
}
</script>
<style lang=""></style>
