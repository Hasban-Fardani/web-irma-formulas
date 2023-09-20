<script setup>
definePageMeta({
  layout: "",
});

const url = "https://be-pemiros.fly.dev/";
console.log("be url: ", url);
const tahun = new Date().getFullYear().toString();

const { data, pending } = await useFetch(`${url}/hasil`, {
  method: "get",
  // lazy: true,
});

const jumlah = data.value.jumlah;
</script>
<template>
  <div v-if="!pending">
    <div>
      <p>{{ jumlah["paslon1"] }}</p>
      <p>{{ jumlah["paslon2"] }}</p>
      <p>{{ jumlah["paslon3"] }}</p>
    </div>
  </div>
</template>
