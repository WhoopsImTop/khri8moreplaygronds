<template>
    <div>
        <div class="welcome-container">
            <div class="welcome-container-content">
                <ArrowRight color="#df1874" style="margin-right: 50px; margin-left: -5px"></ArrowRight>
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
            </div>
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

            //request animation frame
            window.requestAnimationFrame(() => {
            });
        }
    },
};
</script>

<style>
.overflow-hidden {
    overflow: hidden;
}

.overflow-hidden h1 {
    animation: moveUp 1.3s ease-in-out;
}

.overflow-hidden h3 {
    animation: moveUp 1s ease-in-out;
}

@keyframes moveUp {
    0% {
        opacity: 0;
        transform: translateY(105%);
    }

    10% {
        opacity: 1;
    }

    100% {
        transform: translateY(0px);
    }
}
</style>