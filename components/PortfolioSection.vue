<template>
  <div class="portfolio-conainer">
    <div class="content-container">
      <h1>Portfolio</h1>
      <div class="content-logos">
        <img v-for="(img, index) in $store.state.portfolioLogos" :key="index" :src="img.src" :alt="img.title">
      </div>
      <product-slider></product-slider>
    </div>
  </div>
</template>

<script>
import ProductSlider from './ProductSlider.vue';

export default {
    components: { ProductSlider }
}
</script>

<style>
</style>