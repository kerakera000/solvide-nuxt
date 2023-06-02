// import { defineNuxtConfig } from "nuxt";
const { API_KEY, SERVICE_DOMAIN } = process.env;

export default defineNuxtConfig({
    ssr: true,
    app: {
    head: {
        htmlAttrs: {
        lang: 'ja'
            },
        title: "SOLVIDE",
        meta: [
            { property: 'og:type', content: 'website' },
            { property: 'og:site_name', content: 'SOLVIDE' },
            { property: 'og:image', content: '<ogpに使われる画像の絶対パス>', },
        ],
        link: [
        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
        },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Kosugi+Maru&family=Noto+Sans+JP:wght@400;500;700&family=Oswald:wght@500;600;700&family=Roboto:wght@400;500;700&display=swap",
        },
        ],
    },
    },
    runtimeConfig: {
        // apiKey: process.env.API_KEY, // private
        public: {
            apiKey:process.env.API_KEY,
            baseUrl: process.env.SERVICE_DOMAIN, // frontendに公開
        },
    },
    css: ['/assets/css/style.css'],
})