<template lang="">
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center my-20">
      <img src="/img/logo-irma.png" alt="" class="my-2 w-1/2 h-auto" />
      <h1 class="text-xl my-3">IRMA FORMULAS</h1>
    </div>
    <div class="rounded-xl bg-green-600 w-full p-4 h-[55vh] pb-96">
      <p>
        Portal Pemilihan calon rois roisah IRMA FORMULAS masa bakti 2023-2024
      </p>
      <form action="" class="my-10 flex flex-col justify-center items-center gap-6">
        <input
          type="text"
          id="username"
          name="username"
          class="w-3/4 text-4xl rounded-lg"
          placeholder="Username"
        />
        <input
          type="text"
          id="password"
          name="password"
          class="w-3/4 text-4xl rounded-lg"
          placeholder="Password"
        />
        <button type="submit" class="py-2 px-6 my-4 rounded-lg bg-white shadow-lg ">Login</button>
      </form>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "",
});
</script>
<style lang="css">
input[type="text"]::placeholder {
  font-size: 1rem;
  padding: 0 40px;
}
</style>
