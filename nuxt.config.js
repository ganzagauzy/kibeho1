const webpack = require("webpack");
export default {
  target: "static",
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "KIBEHO",
    htmlAttrs: {
      lang: "en"
    },
    titleTemplate(titleChunk) {
      return titleChunk ? `KIBEHO | ${titleChunk}` : "Welcome";
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "architecture studio web applications"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      }
    ],
    script: [
      {
        type: "text/javascript",
        body: true,
        src: "/js/jquery.min.js"
      },
      {
        type: "text/javascript",
        body: true,
        src: "/js/owl.carousel.js"
      },
      {
        rel: "text/javascript",
        body: true,
        href: "/js/bootstrap.min.js"
      },
      {
        type: "text/javascript",
        body: true,
        src: "/js/jquery.mixitup.min.js"
        // async: true,
        // crossorigin: "anonymous"
      }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/style/_variables.scss"],
  styleResources: {
    scss: ["~assets/style/_variables.scss"]
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@plugins/vuetify"
    // '@plugins/axios.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "nuxt-mail",
      {
        message: {
          to: "ganzasanchess@gmail.com"
        },
        smtp: {
          // host: "smtp.mailtrap.io",
          // port: 587
        }
      }
    ],
    "bootstrap-vue/nuxt",
    "@nuxtjs/style-resources",
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    "@nuxtjs/cloudinary",
  ],
  axios: {
    // baseURL: "https://nk-studio-api.herokuapp.com/api/v1",
    // baseURL: "https://nk-studio-api.herokuapp.com/api/v1"
    // baseURL: "http://localhost:3000/api/",
    baseURL: "http://localhost:3000/api/",
  },
  cloudinary: {
    cloudName: "iwacu-heza",
    apiKey: "495764831498466",
    apiSecret: "dMP_AljSSEh4cHKhevou_zso0Fg"
  },
  generate: {
    fallback: true,
    minify: {
      collapseWhitespace: false
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ]
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "token/login/",
            method: "post",
            propertyName: "auth_token"
          },
          logout: { url: "token/logout/", method: "post" },
          user: {
            url: "accounts/data/",
            method: "get",
            propertyName: false
          }
        },
        tokenType: "Token",
        tokenName: "Authorization"
      },
      redirect: {
        login: "/login",
        home: false
      }
    }
  }
};
