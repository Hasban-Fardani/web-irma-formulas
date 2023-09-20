<script setup>
import { useTokenStore } from '@/stores/token'

definePageMeta({
  layout: "",
});

const store = useTokenStore()
const router = useRouter();

console.log("stored token: ",store.getToken);
let username = ref("");
let password = ref("");

const submitLogin = async () => {
  const usr = username.value;
  const pw = password.value;
  // const url = "http://localhost:8080/akun/login";
  const url = "https://be-pemiros.fly.dev/akun/login";
  try {
    const {data } = await useFetch(url, {
      method: "post",
      body: {
        username: usr,
        password: pw,
      },
    });

    // if (store.getToken == "") {
    //   // note: belum add login verify token
    //   router.push("/pemiros/pilih");
    // }
    // else {
    const token = await data.value.token
    store.setToken(token);
    console.log("redirect to /pemiros/pilih");
    router.push("/pemiros/pilih");
    // }
  } catch (error) {
    console.log("Error:", error);
  }
};
</script>
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
      <!-- :action="url" -->
      <!-- method="post" -->
      <form
        class="my-10 flex flex-col justify-center items-center gap-6"
        ref="form"
        @submit.prevent="submitLogin"
      >
        <input
          type="text"
          id="username"
          name="username"
          class="input w-full max-w-xs rounded-lg"
          placeholder="Username"
          v-model="username"
        />
        <input
          type="password"
          id="password"
          name="password"
          class="input w-full max-w-xs"
          placeholder="Password"
          v-model="password"
        />
        <button class="py-2 px-6 my-4 rounded-lg bg-white shadow-lg">
          Login
        </button>
      </form>
    </div>
  </div>
</template>
