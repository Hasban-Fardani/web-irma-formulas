<script setup>
import { useTokenStore } from "@/stores/token";

definePageMeta({
  layout: "pemiros",
});

const store = useTokenStore();
const token = store.getToken;

console.log("token: ", token);
if (!token || typeof token == undefined) {
  useRouter().push("login");
}

// const url = "http://localhost:8080"
const url = "https://be-pemiros.fly.dev/";
const tahun = new Date().getFullYear().toString();

const { data, pending } = await useFetch(`${url}/paslon/?tahun=${tahun}`, {
  method: "get",
});

const listPaslon = data.value.data

async function getHakSuara() {
  const { data, error } = await useFetch(url + "/pemilu", {
    headers: { Authorization: "Bearer " + token },
    method: "get",
  });
  console.log("punya Hak", data)
}

async function pilih(id) {
  console.log("pilih id ", id);
  const { data, error } = await useFetch(url + "/pemilu/pilih?idPaslon=" + id, {
    headers: { Authorization: "Bearer " + token },
    method: "post",
  });
  console.log(data.value);
  console.log(error.value);
}

// console.log(res.data);
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-4 px-9">
    <h1 class="text-2xl font-bold mt-9">Portal Pemilihan</h1>
    <p>
      disini anda akan menentukan pilihan anda, jadi pastikan anda telah
      menentukan pilihan anda dan paham dengan calon yang anda pilih
    </p>
    <ol class="list-decimal items-center justify-center">
      <h1 class="font-semibold text-lg text-center">Prosedur Pemilihan</h1>
      <li>pahami visi misi setiap calon</li>
      <li>tentukan pilihanmu</li>
      <li>ketuk tombol ‘pilih’ pada salah satu paslon yang kamu pilih</li>
      <li>
        akan ada alert(informasi) untuk memastikan bahwa pilihan anda sesuai
      </li>
      <li>
        untuk konfirmasi ketuk tombol ‘kirim’, dan anda dinyatakan telah memilih
      </li>
      <li>pemilihan hanya satu kali untuk setiap akun</li>
      <li>
        setalah dinyatakan memilih anda hanya bisa melihat beranda dan profile
        paslon
      </li>
    </ol>
    <div v-if="!pending" class="flex flex-wrap justify-center gap-8 mt-4">
      <PemirosPilihPaslon
        v-for="(paslon, index) in listPaslon"
        :idPaslon="`${paslon.IDPaslon}`"
        :key="index"
        :no="index + 1"
        :name="paslon['KandidatROIS'] + ' & ' + paslon['KandidatROISah']"
        @fix-pilih="pilih"
      />
    </div>
  </div>
</template>
