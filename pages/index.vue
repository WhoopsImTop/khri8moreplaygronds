<template>
  <div>
    <div class="welcome-container">
      <!-- <div class="welcome-container-content">
        <ArrowRight
          color="#df1874"
          style="margin-right: 50px; margin-left: -5px"
        ></ArrowRight>
        <div>
          <div class="overflow-hidden">
            <h3 style="margin: 0px">khri8! more playgrounds.</h3>
          </div>
          <div class="overflow-hidden">
            <h1 style="margin: 15px 0">
              Werbeagentur <br />
              in Waldkirch.
            </h1>
          </div>
        </div>
      </div> -->
      <div class="translated-heading">
        <h3 style="margin: 0px">khri8! more playgrounds.</h3>
        <h1 style="margin: 0px">
          Werbeagentur <br />
          in Waldkirch.
        </h1>
      </div>
    </div>
    <LandingCTA title="Zack!" showForm="false" :deg="1"></LandingCTA>
    <RowContent :deg="1"></RowContent>
    <LandingCTA title="Bumm!" showForm="false" :deg="2"></LandingCTA>
    <PortfolioSection :deg="2"></PortfolioSection>
    <LandingCTA title="Bäng!" showForm="false" :deg="3"></LandingCTA>
    <TeamSection :deg="3"></TeamSection>
    <LandingCTA title="Kontakt" showForm="false" :deg="4"></LandingCTA>
    <Contact :deg="4"></Contact>
    <Footer></Footer>
  </div>
</template>

<script>
import LandingCTA from "../components/LandingCTA.vue";
import RowContent from "../components/rowContent.vue";
import PortfolioSection from "../components/PortfolioSection.vue";
import ArrowRight from "../components/arrow-right.vue";
import Contact from "../components/contact.vue";
import LandingComponent from "../components/landingComponent.vue";
import gsap from "gsap";
export default {
  layout: "main",
  components: {
    LandingCTA,
    RowContent,
    PortfolioSection,
    ArrowRight,
    Contact,
    LandingComponent,
  },
  created() {
    if (!process.server) {
      //mutate isMobile state
      this.$store.commit("setIsMobile", window.innerWidth < 900);
    }
  },
  //create a flashy gsap animation for the welcome container
  mounted() {
    let container = document.querySelector(".translated-heading");
    //make a mask transition for the welcome container
    gsap.to(container, {
      opacity: 1,
      duration: 1,
      delay: 0.5,
      clipPath: "polygon(0 0, 100% -20%, 100% 100%, -20% 100%)",
      ease: "power2.inOut",
    });
  },
};
</script>

<style>
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.overflow-hidden {
  overflow: hidden;
}
</style>
