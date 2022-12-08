<template>

  <div class="portfolio-conainer" :style="'transform: rotate(-' + deg + 'deg);'">
    <div class="content-container">
      <h1>Portfolio</h1>
      <div class="logo-marquee-wrapper" :style="'transform: rotate(-' + deg + 'deg);'">
        <div class="marquee-logo" v-for="(image, index) in $store.state.portfolioLogos" :key="index">
          <img :src="image.src" :alt="image.title">
        </div>

        <div class="marquee-logo" v-for="(image, index) in $store.state.portfolioLogos" :key="index">
          <img :src="image.src" :alt="image.title">
        </div>
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
      portfolioLogoSlides: 0,
    }
  },
  computed: {
  },
  beforeMount() {
    this.portfolioSlides = -1 * (this.$store.state.portfolio.length * 2) * 310;
    //add css variable to root element
    document.documentElement.style.setProperty('--portfolio-slides', this.portfolioSlides + 'px');

    this.portfolioLogoSlides = -1 * (this.$store.state.portfolioLogos.length * 2) * 100;
    //add css variable to root element
    document.documentElement.style.setProperty('--portfolioLogo-slides', this.portfolioLogoSlides + 'px');
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

.logo-marquee-wrapper {
  display: flex;
  align-items: center;
  min-width: 100%;
  animation: marquee-reverse 20s linear infinite;
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

.marquee-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin: 0 50px;
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

@keyframes marquee-reverse {
  0% {
    transform: translate3d(var(--portfolioLogo-slides), 0, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

@media (max-width: 900px) {
  .marquee-element {
    min-width: 300px;
    min-height: 150px;
  }

  .content-logos {
    display: flex;
    flex-wrap: wrap;
  }

  .content-logos img {
    max-width: 50%;
  }
}
</style>