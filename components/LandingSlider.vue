<template>
  <div class="welcomeSlider">
    <div class="mask-container">
      <!-- Maske -->
      <div class="mask" ref="mask"></div>
      <!-- Slider-Inhalt -->
      <div
        v-if="currentSlide !== null"
        :key="currentSlide"
        class="welcome-container"
        :style="`backgroundImage: url(${slides[currentSlide].image});`"
      >
        <div class="translated-heading">
          <h3 style="margin: 0px">{{ slides[currentSlide].title }}</h3>
          <h1 style="margin: 0px" v-html="slides[currentSlide].content"></h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          title: "khri8! more playgrounds.",
          content: "Werbeagentur <br/> in Waldkirch.",
          image: "/khri8-more-playgrounds-landing.png",
        },
        {
          title: "khri8! more playgrounds.",
          content: "Werbeagentur <br/> in Waldkirch.",
          image: "/professor_bucher_khri8!.jpg",
        },
        {
          title: "khri8! more playgrounds.",
          content: "Werbeagentur <br/> in Waldkirch.",
          image: "/webdev_khri8.jpg",
        },
      ],
    };
  },
  mounted() {
    // Starte die GSAP-Animation alle 5 Sekunden
    this.animateSlide();
    setInterval(() => {
      this.animateSlide();
    }, 4980);

    // Wechsle die Slide alle 10 Sekunden
    setInterval(() => {
      this.changeSlide();
    }, 5000); // Animation dauert 4 Sekunden, daher alle 10 Sekunden wechseln
  },
  methods: {
    changeSlide() {
      if (this.currentSlide === this.slides.length - 1) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
    },
    animateSlide() {
      const mask = this.$refs.mask;
      const currentSlide = document.querySelector(".welcome-container");
      const tl = gsap.timeline();

      tl.set(mask, { scaleX: 1 }); // Setze die Anfangsposition der Maske
      tl.set(currentSlide, { opacity: 1 }); // Setze die Anfangsposition der Slide

      tl.to(mask, {
        duration: 0.3,
        scaleX: 0, // Bewege die Maske von rechts nach links
        transformOrigin: "right center",
        ease: "power2.inOut",
      })
        .to(
          currentSlide,
          {
            duration: 4, // Zeige die Slide für mindestens 4 Sekunden
            opacity: 1,
          },
          "-=0.1"
        )
        .to(
          mask,
          {
            duration: 0.3,
            scaleX: 1, // Bewege die Maske von links nach rechts
            transformOrigin: "left center",
            ease: "power2.inOut",
          },
          "-=0.1"
        )
        .to(
          currentSlide,
          {
            duration: 0.3,
            opacity: 0, // Fade die Slide aus
          },
          "-=0.1"
        );
    },
  },
};
</script>

<style scoped>
.mask-container {
  position: relative;
  height: 100vh;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary-color);
  z-index: 999;
  transform-origin: right center;
}
</style>
