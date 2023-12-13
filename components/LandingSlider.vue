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
    <div class="slideActions">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slideAction"
        :class="{ active: index === currentSlide }"
        @click="currentSlide = index"
      ></div>
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
          content: "Konzeption von <br> kreativen 'Spielplätzen'.",
          image: "/professor_bucher_khri8!.jpg",
        },
        {
          title: "khri8! more playgrounds.",
          content: "Starker digitaler Auftritt. <br> #Webdevelopment",
          image: "/webdev_khri8.jpg",
        },
      ],
    };
  },
  mounted() {
    // Wechsle die Slide alle 10 Sekunden
    //mask should be hidden at the beginning
    setInterval(() => {
      this.animateSlide();
    }, 10000); // Animation dauert 4 Sekunden, daher alle 10 Sekunden wechseln
  },
  methods: {
    animateSlide() {
      const mask = this.$refs.mask;
      const currentSlide = document.querySelector(".welcome-container");
      const tl = gsap.timeline();
      //hide mask at the beginning via width: 0
      gsap.set(mask, { scaleX: 0 }); 
      tl.to(mask, {
        opacity: 1, // Fade die Slide aus
        delay: 0.5,
        duration: 0.5,
        scaleX: 0, // Bewege die Maske von rechts nach links
        transformOrigin: "right center",
        ease: "power2.inOut",
      })
        .to(mask, {
          duration: 0.5,
          opacity: 1, // Fade die Slide ein
          scaleX: 1, // Bewege die Maske von links nach rechts
          transformOrigin: "left center",
          ease: "power2.inOut",
          onComplete: () => {
            if (this.currentSlide === this.slides.length - 1) {
              this.currentSlide = 0;
            } else {
              this.currentSlide++;
            }

            // Aktualisiere den Hintergrund der neuen Slide
            const currentSlide = document.querySelector(".welcome-container");
            currentSlide.style.backgroundImage = `url(${
              this.slides[this.currentSlide].image
            })`;
          },
        })
        .to(mask, {
          duration: 0.3,
          scaleX: 0, // Bewege die Maske von rechts nach links
          transformOrigin: "right center",
          ease: "power2.inOut",
        });
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
  opacity: 0;
}

.slideActions {
  position: absolute;
  bottom: 0px;
  right: 150px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 2;
}

.slideAction {
  width: 30px;
  height: 30px;
  background: var(--primary-color);
  margin: 0 3px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.slideAction.active {
  height: 60px;
  background: #ffffff;
}
</style>
