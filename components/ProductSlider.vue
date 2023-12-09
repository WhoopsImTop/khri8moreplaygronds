<template>
  <div>
    <div class="swiper" :style="'transform: rotate(-' + degree + 'deg)'">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="slide in $store.state.portfolio" :key="slide.title">
          <img :src="slide.src" :alt="slide.title">
          <div class="slider-content">

            <h2>{{ slide.title }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Swiper JS
// add or remove unused modules
export default {
  props: ['deg'],
  data() {
    return {
      degree: 0
    }
  },
  mounted() {
    
  },
  beforeMount() {
    if (window.innerWidth < 900) {
      this.degree = 0;
    } else {
      this.degree = this.deg;
    }
  }
}
</script>

<style lang="css" scoped>
.swiper {
  width: 80%;
}

.swiper-wrapper {
  display: flex;
  justify-content: space-between;
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