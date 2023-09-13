<template lang="">
  <div class="card bg-base-100 shadow-xl">
    <figure>
      <img
        src="https://picsum.photos/300/300"
        class="w-full h-full"
        :alt="name"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">New movie is released!</h2>
      <p>Click the button to watch on Jetflix app.</p>
      <div class="card-actions justify-center">
        <button class="btn btn-primary" @click="pilihCalon">Pilih</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    no: String,
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
