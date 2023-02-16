<template>
    <div>
        <three-component class="bg"></three-component>
        <div class="welcome-container">
        </div>
        <LandingCTA title="Zack!" showForm=false :deg="1"></LandingCTA>
        <RowContent :deg="1"></RowContent>
        <LandingCTA title="Bumm!" showForm=false :deg="2"></LandingCTA>
        <PortfolioSection :deg="2"></PortfolioSection>
        <LandingCTA title="Bäng!" showForm=false :deg="3"></LandingCTA>
        <TeamSection :deg="3"></TeamSection>
        <LandingCTA title="Kontakt" showForm=false :deg="4"></LandingCTA>
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
export default {
    layout: "main",
    components: { LandingCTA, RowContent, PortfolioSection, ArrowRight, Contact },
    created() {
        if (!process.server) {
            //mutate isMobile state
            this.$store.commit("setIsMobile", window.innerWidth < 900);
        }
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