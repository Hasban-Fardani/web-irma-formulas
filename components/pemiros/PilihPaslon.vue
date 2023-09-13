<template lang="">
  <div class="card bg-base-100 shadow-xl">
    <figure>
      <img
        src="https://picsum.photos/300/300"
        class="w-full h-full"
        alt="Movie"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">New movie is released!</h2>
      <p>Click the button to watch on Jetflix app.</p>
      <div class="card-actions justify-center">
        <button class="btn btn-primary">Pilih</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    imgPath: String,
  },
};
</script>
