<template>
  <div>
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="slide in $store.state.portfolio" :key="slide.title">
            <img :src="slide.src" :alt="slide.title">
            <div class="slider-content">

            <h2>{{ slide.title }}</h2>
            </div>
        </div>
      </div>
    </div>
    <!-- If pagination is needed -->
    <div class="swiper-pagination"></div>
    <!-- If navigation buttons are needed -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
// import Swiper JS
// add or remove unused modules
import  { Swiper, Navigation, Pagination, EffectCards, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css'
export default {
   mounted() {
    // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
    // previously it was before export default. Moved here for performance issues. Move back in case of problems.
    // init Swiper:  eslint-disable used for deleting error of unsued const swiper
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      loop: true,
      grabCursor: true,
      effect: 'cards',
      spaceBetween: 20,
      // remove unused modules if needed
      modules: [Navigation, Pagination, EffectCards, Autoplay],
      // Pagination if needed
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      // Autoplay if needed
      autoplay: {
        delay: 1500,
      },
      // Navigation arrows if needed
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
    // you can use different options later
    swiper.on('activeIndexChange', (swiper) => {
      console.log(swiper)
    })
  },
}
</script>

<style lang="css" scoped>
.swiper {
    width: 80%;
}
.swiper-slide {
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #000;
  background-color: #fff;
  overflow: hidden;
}

.slider-content {
    padding: 0px 20px 20px 40px;
}
</style>