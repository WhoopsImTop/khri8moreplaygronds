export default {
  target: "static",
  ssr: true,
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: "de",
    },
    title: "khri8! more playgrounds. - Werbeagentur in Waldkirch",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Werbeagentur in Waldkirch für Websites, Webshops, Corporate Identity, Brand Communication, Content Creation, Storytelling und vieles mehr.",
      },
      {
        name: "keywords",
        content:
          "Werbeagentur in Waldkirch, Webdesigner in Waldkirch, Logo erstellen lassen Freiburg, Wordpress entwickler Waldkirch, Webentwicklung, Webagentur, Werbeagentur, Waldkirch, Freiburg, Schwarzwald, khri8, khri8! more playgrounds, khri8! more playgrounds waldkirch, khri8! more playgrounds freiburg, khri8! more playgrounds schwarzwald, khri8! more playgrounds webdesign, khri8! more playgrounds webentwicklung, khri8! more playgrounds webagentur, khri8! more playgrounds werbeagentur, khri8! more playgrounds waldkirch webdesign, khri8! more playgrounds waldkirch webentwicklung, khri8! more playgrounds waldkirch webagentur, khri8! more playgrounds waldkirch werbeagentur, khri8! more playgrounds freiburg webdesign, khri8! more playgrounds freiburg webentwicklung, khri8! more playgrounds freiburg webagentur, khri8! more playgrounds freiburg werbeagentur, khri8! more playgrounds schwarzwald webdesign, khri8! more playgrounds schwarzwald webentwicklung, khri8! more playgrounds schwarzwald webagentur, khri8! more playgrounds schwarzwald werbeagentur",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    link: [
      {
        rel: "stylesheet",
        href: "https://use.typekit.net/vfj3ucf.css",
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["nuxt-compress"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/markdownit",
  ],

  "nuxt-compress": {
    gzip: {
      threshold: 8192,
    },
    brotli: {
      threshold: 8192,
    },
  },

  markdownit: {
    runtime: true, // Support `$md()`
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    scrollBehavior(to) {
      if (to.hash) {
        return window.scrollTo({
          top: document.querySelector(to.hash).offsetTop,
          behavior: "smooth",
        });
      }
      return window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
