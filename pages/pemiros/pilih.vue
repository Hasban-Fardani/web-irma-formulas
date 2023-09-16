<template lang="">
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
    <div class="flex flex-wrap justify-center gap-8 mt-4">
      <PemirosPilihPaslon
        v-for="(paslon, index) in listPaslon"
        :key="index"
        :no="index + 1"
        :name="paslon['KandidatROIS'] + ' & ' + paslon['KandidatROISah']"
      />
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "pemiros",
});

const url = "http://localhost:8080";
let data = await useFetch(
  url + "/paslon/?tahun=" + new Date().getFullYear().toString(),
  { 
    method: "get",
    server: false , 
    headers:{ "Access-Control-Allow-Origin": "*", 'Access-Control-Allow-Headers': '*', }
  }
);
let listPaslon = data.data.value["data"];
console.log(listPaslon);
</script>
