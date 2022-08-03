<template>

  <div class="portfolio-conainer" :style="'transform: rotate(-' + deg + 'deg);'">
    <div class="content-container">
      <h1>Portfolio</h1>
      <div class="content-logos">
        <img v-for="(img, index) in $store.state.portfolioLogos" :key="index" :src="img.src" :alt="img.title">
      </div>
      <!-- create a marquee slideshow -->
    </div>
    <div class="marquee-wrapper" :style="'transform: rotate(-' + deg + 'deg);'">
      <div class="marquee-element" v-for="(image, index) in $store.state.portfolio" :key="index">
        <img :src="image.src" :alt="image.title">
      </div>

      <div class="marquee-element" v-for="(image, index) in $store.state.portfolio" :key="index">
        <img :src="image.src" :alt="image.title">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['deg'],
  data: () => {
    return {
      portfolioSlides: 0,
    }
  },
  computed: {
  },
  beforeMount() {
    this.portfolioSlides = -1 * (this.$store.state.portfolio.length * 2) * 310;
    //add css variable to root element
    document.documentElement.style.setProperty('--portfolio-slides', this.portfolioSlides + 'px');
  },
}
</script>

<style scoped>

.content-logos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.marquee-wrapper {
  display: flex;
  align-items: center;
  min-width: 100%;
  animation: marquee 40s linear infinite;
  margin-bottom: 100px;
}

.marquee-element {
  min-width: 600px;
  min-height: 300px;
  margin: 10px;
  background-color: #efefef;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.marquee-element img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes marquee {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(var(--portfolio-slides), 0, 0);
  }
}
</style>