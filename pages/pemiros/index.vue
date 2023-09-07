<template lang="">
  <BaseHeader :links="links" />
  <h2 class="my-4 mt-20 flex justify-center items-center text-[25pt] font-bold">
    Detail Paslon
  </h2>
  <div class="my-10  flex flex-wrap items-center justify-center gap-10">
    <PemirosInfoPaslon
      title="Paslon No. 1"
      id="modal1"
      no="1"
      name="Hasban & Syaqila"
      slogan="Berkah"
      visi=""
      misi=""
      sambutan=""
    />
    <PemirosInfoPaslon
      title="Paslon No. 2"
      id="modal2"
      no="2"
      name="Hasban & Syaqila"
      slogan="Berkah"
      visi=""
      misi=""
      sambutan=""
    />
    <PemirosInfoPaslon
      title="Paslon No. 3"
      id="modal3"
      no="3"
      name="Hasban & Syaqila"
      slogan="Berkah"
      visi=""
      misi=""
      sambutan=""
    />
  </div>
</template>
<script setup>
let modalOpen = ref(false);
const links = [
  "https://picsum.photos/1200/600",
  "https://picsum.photos/1200/600",
  "https://picsum.photos/1200/600",
];
definePageMeta({
  layout: "pemiros",
});

function toggleModal() {
  modalOpen = !modalOpen;
}

computed(() => {
  if (modalOpen) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }
});
</script>

<style lang="css">
nav {
  box-shadow: 0 3px 6px -6px #222;
}

.modal-open {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
