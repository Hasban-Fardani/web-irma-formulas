<template lang="">
  <div class="flex flex-col justify-center items-center gap-4 px-9">
    <h1 class="text-2xl font-bold mt-9">Portal Pemilihan</h1>
    <p>disini anda akan menentukan pilihan anda, jadi pastikan anda telah menentukan pilihan anda dan paham dengan calon yang anda pilih </p>
    <ol class="list-decimal mx-6">
      <h1 class="font-semibold text-lg">Prosedur Pemilihan</h1>
      
      <li>
        pahami visi misi setiap calon
      </li>
      <li>
        tentukan pilihanmu
      </li> 
      <li>
        ketuk tombol ‘pilih’ pada salah satu paslon yang kamu pilih
      </li> 
      <li>
        akan ada alert(informasi) untuk memastikan bahwa pilihan anda sesuai
      </li> 
      <li>
        untuk konfirmasi ketuk tombol ‘kirim’, dan anda dinyatakan telah memilih
      </li> 
      <li>
        pemilihan hanya satu kali untuk setiap akun
      </li> 
      <li>
        setalah dinyatakan memilih anda hanya bisa melihat beranda dan profile paslon
      </li> 
    </ol>
    <PemirosPilihPaslon></PemirosPilihPaslon>
    <PemirosPilihPaslon></PemirosPilihPaslon>
    <PemirosPilihPaslon></PemirosPilihPaslon>
    <button class="btn btn-primary text-xl mt-4"> Submit </button>
  </div>
</template>
<script setup>
  definePageMeta({
    layout: "pemiros"
  });
</script>