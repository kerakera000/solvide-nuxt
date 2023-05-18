// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
    head: {
        htmlAttrs: {
        lang: 'ja'
        },
        meta: [
            { property: 'og:type', content: 'website' },
            { property: 'og:site_name', content: '<サイト名>' },
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
    }
    },
    css: ['/assets/css/style.css'],
})
