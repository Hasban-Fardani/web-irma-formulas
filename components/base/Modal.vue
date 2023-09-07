<template>
  <div @click="showModal">
    <slot name="trigger"></slot>
  </div>
  <div class="modal fade animate__animated animate__fadeIn" tabindex="-1"  :ref="this.id" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog flex justify-center" role="document">
      <div class="modal-content m-auto ">
        <div class="modal-header border-none m-auto">
          <h5 class="modal-title font-semibold">{{ title }}</h5>
          <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal()">
            <span aria-hidden="true">&times;</span>
          </button> -->
        </div>
        <div class="modal-body border-none m-auto">
          <slot name="content"></slot>
        </div>
          <div class="modal-footer border-none flex justify-center ">
            <button type="button" class="btn bg-red-600 text-white hover:bg-red-300" data-dismiss="modal" @click="closeModal()">Close</button>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    id: String,
  },
  methods: {
    showModal() {
      const modal = this.$refs[this.id];
      const body = document.body;
      
      // Menampilkan modal
      modal.classList.remove('animate__fadeOut');
      modal.classList.add('show');
      modal.style.display = 'block';
      
      // Menambahkan kelas CSS untuk mengubah latar belakang
      body.classList.add('modal-open');
    },
    closeModal() {
      const modal = this.$refs[this.id];
      const body = document.body;

      // Menampilkan modal
      modal.classList.add('animate__fadeOut');
      modal.classList.add('hide');
      setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('animated', 'fadeOut');
      }, 500);
      body.classList.remove('modal-open');
    },
  },
  
}
</script>
