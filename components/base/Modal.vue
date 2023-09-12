<template>
  <div>
    <!-- Tombol untuk membuka modal -->
    <div @click="openModal">
      <slot name="trigger"/>
    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      class=" fixed inset-0 flex items-center justify-center z-50"
      style="background-color: rgba(0, 0, 0, 0.5)"
      @click.self="closeModal"
    >
      <div class=" bg-white w-1/2 p-4 rounded-lg shadow-lg" @click.stop>
        <!-- Konten modal -->
        <h2 class="text-lg font-semibold mb-4">{{ title }}</h2>
        
        <slot name="content"/>

        <!-- Tombol untuk menutup modal -->
        <button @click="closeModal" class="mt-4 bg-red-700 text-white px-4 py-2 rounded-md">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false, // Menyimpan status modal (buka/tutup)
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
  props: {
    title: String,

  }
};
</script>
