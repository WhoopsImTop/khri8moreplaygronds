<template>
  <div>
    <landingSlider></landingSlider>
    <RowContent :deg="1">
      <div class="service-items">
        <div class="grid-item-service">
          <div class="content">
            <h2 style="color: #333333">Media Design</h2>
            <p>
              Vom Papier zum Pixel. Wir setzen Ideen in ein beeindruckendes
              Design um.
            </p>
          </div>
        </div>

        <div class="grid-item-service">
          <div class="content">
            <h2 style="color: #333333">Webdevelopment</h2>
            <p>
              Starker digitaler Auftritt. Wir bilden überzeugende Websites und
              Applikationen.
            </p>
          </div>
        </div>

        <div class="grid-item-service">
          <div class="content">
            <h2 style="color: #333333">Corporate Identity</h2>
            <p>Die Marke. Wir schaffen Ihre unverwechselbare Identität.</p>
          </div>
        </div>

        <div class="grid-item-service">
          <div class="content">
            <h2 style="color: #222222">Brand Communication</h2>
            <p>
              Klare Botschaften. Wir bringen Ihre Markengeschichte auf den
              Punkt.
            </p>
          </div>
        </div>

        <div class="grid-item-service">
          <div class="content">
            <h2 style="color: #333333">Content Creation</h2>
            <p>
              Social Media im Fokus. Wir bringen Ihre Botschaften mit kreativem
              Content direkt zu Ihrer Zielgruppe.
            </p>
          </div>
        </div>

        <div class="grid-item-service">
          <div class="content">
            <h2 style="color: #333333">Storytelling</h2>
            <p>
              Stories für jeden Zweck. Wir schreiben unvergessliche Geschichten
              über Ihr Unternehmen, Marke und Produkte.
            </p>
          </div>
        </div>
      </div>
    </RowContent>
    <LandingCTA title="Zack!" showForm="false" :deg="1"></LandingCTA>
    <PortfolioSection :deg="2"></PortfolioSection>
    <LandingCTA title="Bumm!" showForm="false" :deg="2"></LandingCTA>
    <TeamSection :deg="3"></TeamSection>
    <LandingCTA title="Bäng!" showForm="false" :deg="3"></LandingCTA>
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

  head() {
    return {
      title: "khri8! more playgrounds | Web- & Werbeagentur in Waldkirch",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Werbeagentur in Waldkirch für Websites, Webshops, Corporate Identity, Brand Communication, Content Creation, Storytelling und vieles mehr.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Webdesigner in Waldkirch, Logo erstellen lassen Freiburg, Wordpress entwickler Waldkirch, Webentwicklung, Webagentur, Werbeagentur, Waldkirch, Freiburg, Schwarzwald, khri8, khri8! more playgrounds, khri8! more playgrounds waldkirch, khri8! more playgrounds freiburg, khri8! more playgrounds schwarzwald, khri8! more playgrounds webdesign, khri8! more playgrounds webentwicklung, khri8! more playgrounds webagentur, khri8! more playgrounds werbeagentur, khri8! more playgrounds waldkirch webdesign, khri8! more playgrounds waldkirch webentwicklung, khri8! more playgrounds waldkirch webagentur, khri8! more playgrounds waldkirch werbeagentur, khri8! more playgrounds freiburg webdesign, khri8! more playgrounds freiburg webentwicklung, khri8! more playgrounds freiburg webagentur, khri8! more playgrounds freiburg werbeagentur, khri8! more playgrounds schwarzwald webdesign, khri8! more playgrounds schwarzwald webentwicklung, khri8! more playgrounds schwarzwald webagentur, khri8! more playgrounds schwarzwald werbeagentur",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "khri8! more playgrounds | Web- & Werbeagentur in Waldkirch",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Wir bieten Ihnen die Erstellung von Websites, Webshops, Corporate Identity, Brand Communication, Content Creation, Storytelling und vieles mehr.",
        },
      ],
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "khri8! more playgrounds",
            alternateName: "khri8!",
            url: "https://khri8.com",
            logo: "",
            sameAs: "https://www.instagram.com/khri8/",
          },
        },
      ],
    };
  },

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

.service-items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 30px;
}

.grid-item-service {
  display: flex;
  align-items: center;
  margin-top: 30px;
}

.grid-item-service img {
  margin-right: 30px;
}

.grid-item-service .content p {
  margin: 0;
}

.grid-item-service .content h2 {
  font-size: 30px;
  line-height: 45px;
  margin: 0;
  color: var(--primary-color);
}

@media (max-width: 900px) {
  .service-items {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
