<template lang="">
  <div class="flex flex-col justify-center items-center gap-4 px-9">
    <h1 class="text-2xl font-bold mt-9">Portal Pemilihan</h1>
    <p>disini anda akan menentukan pilihan anda, jadi pastikan anda telah menentukan pilihan anda dan paham dengan calon yang anda pilih </p>
    <ol class="list-decimal items-center justify-center">
      <h1 class="font-semibold text-lg text-center">Prosedur Pemilihan</h1>
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
    <div class="flex flex-wrap justify-center gap-4 mt-4">
      <label class="label" @click="setCurrentSelect('Hasban')">
        <input type="radio" name="radioPemilu" value="">
        <PemirosPilihPaslon name="Hasban"/>
      </label>
      <label class="label" @click="setCurrentSelect('Rama')">
        <input type="radio" name="radioPemilu" value="">
        <PemirosPilihPaslon name="Rama"/>
      </label>
      <label class="label" @click="setCurrentSelect('Sendi')">
        <input type="radio" name="radioPemilu" value="">
        <PemirosPilihPaslon name="Sendi"/>
      </label>
    </div>
    <button class="btn btn-primary text-xl mt-4" @click="onSubmit"> Submit </button>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "pemiros"
});

let nameSelected = ref(null)

const setCurrentSelect = (name) => {
  nameSelected.value = name;
}

const onSubmit = () => {
  console.log(nameSelected.value);
  alert("apakah anda yakin memilih " + nameSelected.value)
};
</script>

<style scoped>

.label {
    display : block;
    width: 400px;
}
.label > input{ /* HIDE RADIO */
    visibility: hidden; /* Makes input not-clickable */
    position: absolute; /* Remove input from document flow */
}
.label > input + div{ /* DIV STYLES */
    cursor:pointer;
    border:2px solid transparent;
}
.label > input:checked + div{ /* (RADIO CHECKED) DIV STYLES */
    filter: brightness(90%);
    border: 1px solid black;
}

</style>