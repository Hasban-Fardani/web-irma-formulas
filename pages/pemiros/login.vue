<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center my-10">
      <img src="/img/logo-irma.png" alt="" class="my-1 w-1/2 h-auto" />
      <h1 class="text-xl font-bolder my-3">IRMA FORMULAS</h1>
    </div>
    <div class="rounded-xl bg-green-700 w-full p-4">
      <p class="text-center font-bold text-white">
        Portal Pemilihan calon rois roisah IRMA FORMULAS masa bakti 2023-2024
      </p>
      <form :action="url" method="post" class="my-10 flex flex-col justify-center items-center gap-6" ref="form">
        <input
          type="text"
          id="username"
          name="username"
          class="input w-full max-w-xs rounded-lg"
          placeholder="Username"
        />
        <input
          type="password"
          id="password"
          name="password"
          class="input w-full max-w-xs"
          placeholder="Password"
        />
        <button type="submit" class="py-2 px-6 my-4 rounded-lg bg-white shadow-lg ">Login</button>
      </form>
    </div>
  </div>
</template>
<script setup>
const url = `http://localhost:8080/akun/login?redirect=http://localhost:3000/pemiros/pilih`;
console.log(url);
definePageMeta({
  layout: "",
});


</script>