<template lang="">
  <div class="card bg-base-100 shadow-xl w-80">
    <figure>
      <img src="https://picsum.photos/300/300" :alt="name" class="w-full" />
    </figure>
    <div class="card-body">
      <h1 class="card-title">{{ name }}</h1>
      <div class="card-actions justify-center">
        <button class="btn btn-primary" @click="toggleAlert">Pilih</button>
      </div>
    </div>
  </div>

  <div
    v-if="showVM"
    class="fixed inset-0 flex items-center justify-center z-50"
    style="background-color: rgba(0, 0, 0, 0.5)"
    @click.self="toggleAlert"
  ></div>

  <div
    v-if="showAlert"
    class="fixed inset-0 flex items-center justify-center z-50"
    style="background-color: rgba(0, 0, 0, 0.5)"
    @click.self="toggleAlert"
  >
    <div
      class="bg-white w-5/6 md:w-3/4 lg:w-1/2 min-w-[250px] p-4 rounded-lg shadow-lg"
      @click.stop
    >
      <!-- Konten modal -->
      <h1 class="text-lg font-semibold mb-4">Konfirmasi</h1>
      <p>
        Apakah anda yakin memilih {{ name }} dengan paslon nomer urut {{ no }}
      </p>
      <!-- Tombol untuk menutup modal -->
      <button
        @click="toggleAlert"
        class="mt-4 btn btn-warning px-4 py-2 rounded-md justify-end"
      >
        Cancel
      </button>
      <button
        @click="fixPilih"
        class="mt-4 ml-3 btn btn-primary px-4 py-2 rounded-md justify-end"
      >
        Pilih
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    idPaslon: String,
    name: String,
    no: Number,
    imgPath: String,
  },
  data() {
    return {
      showAlert: false,
    };
  },
  mounted(){
    console.log(this.name);
    console.log(this.no);
    console.log(this.idPaslon);
  },

  methods: {
    toggleAlert() {
      console.log(this.idPaslon);
      this.showAlert = !this.showAlert;
    },

    fixPilih() {
      console.log("fix pilih: ", this.idPaslon);
      this.$emit("fix-pilih", this.idPaslon);
    },
  },
  emits: ["fix-pilih"],
};
</script>
