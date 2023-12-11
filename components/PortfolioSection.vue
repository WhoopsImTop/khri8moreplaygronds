<template>
  <div
    class="portfolio-conainer"
    :style="'transform: rotate(-' + degree + 'deg);'"
  >
    <div class="content-container">
      <div class="logo-grid">
        <div class="logo-container" v-for="(logo, index) in $store.state.portfolioLogos" :key="index">
          <img :src="logo.src" alt="logo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["deg"],
  data: () => {
    return {
      portfolioSlides: 0,
      portfolioLogoSlides: 0,
      degree: 0,
    };
  },
  beforeMount() {
    this.portfolioSlides = -1 * (this.$store.state.portfolio.length * 2) * 310;
    //add css variable to root element
    document.documentElement.style.setProperty(
      "--portfolio-slides",
      this.portfolioSlides + "px"
    );

    this.portfolioLogoSlides =
      -1 * (this.$store.state.portfolioLogos.length * 2) * 100;
    //add css variable to root element
    document.documentElement.style.setProperty(
      "--portfolioLogo-slides",
      this.portfolioLogoSlides + "px"
    );

    if (window.innerWidth < 900) {
      this.degree = 0;
    } else {
      this.degree = this.deg;
    }
  },
};
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
}

.logo-marquee-wrapper {
  display: flex;
  align-items: center;
  min-width: 100%;
  animation: marquee-reverse 20s linear infinite;
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

.logo-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-grid img {
  width: 150px;
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

  .logo-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  } 

  .logo-grid img {
    max-width: 100%;
  }

  .content-logos img {
    max-width: 50%;
  }
}
</style>
