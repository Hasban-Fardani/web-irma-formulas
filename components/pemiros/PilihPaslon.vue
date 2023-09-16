<template lang="">
  <div class="card bg-base-100 shadow-xl w-80">
    <figure>
      <img
        src="https://picsum.photos/300/300"
        :alt="name"
        class="w-full"
      />
    </figure>
    <div class="card-body">
      <h1 class="card-title">{{name}}</h1>
      <div class="card-actions justify-center">
        <button class="btn btn-primary"> Visi Misi</button>
        <button class="btn btn-primary" @click="pilihCalon">Pilih</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    no: Number,
    imgPath: String,
  },
  methods: {
    piihCalon(){
      this.$emit("pilih-calon", this.no)
    }
  },
  emits: ["pilih-calon"]
};
</script>
