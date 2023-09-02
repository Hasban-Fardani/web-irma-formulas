<template lang="">
  <div class="col-md-6 col-lg-4 mb-5 card">
    <div
      class="portfolio-item mx-auto"
      data-bs-toggle="modal"
      data-bs-target="#portfolioModal1"
    >
      <div
        class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
      >
        <div class="portfolio-item-caption-content text-center text-white">
          <i class="fas fa-plus fa-3x"></i>
        </div>
      </div>
      <!-- logo rumpun dakwah -->
      <img
        class="img-fluid"
        :src="logoPath"
        alt="..."
      />
    </div>
  </div>

  
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal"
            aria-label="Close"></button></div>
        <div class="modal-body pb-5">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <!-- Portfolio Modal - Title-->
                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0 text-center">{{ title }}</h2>
                <!-- Icon Divider-->
                <div class="divider-custom">
                  <div class="divider-custom-line"></div>
                  <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                  <div class="divider-custom-line"></div>
                </div>
                <!-- Portfolio Modal - Image-->
                <img class="img-fluid rounded mb-5" :src="photoPath" alt="" />
                <!-- Portfolio Modal - Text-->
                <p class="mb-4">
                  {{ description }}
                </p>
                <div class="text-center">
                  <button class="btn btn-primary" data-bs-dismiss="modal">
                    <i class="fas fa-xmark fa-fw"></i>
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
    logoPath: String,
    photoPath: String,
  }
};
</script>
<style lang=""></style>
