<template>
  <!-- Open the modal using ID.showModal() method -->
  <button class="btn" @click="`${id}`.showModal()">open modal</button>
  <dialog :id="id" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="font-bold text-lg">{{ title }}</h3>
      <p class="py-4">
        <slot/>
      </p>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn text-center">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script>
export default {
  props: {
    title: String,
    id: String,
  },
};
</script>
