// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            sitename: 'Ayok',
        }
    },

    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=500, initial-scale=1',
            title: 'Ayok',
            meta: [
                { name: 'Aplikasi Yudisium Unikarta', content: 'My amazing site.' }
            ],
        },
    },

    modules: ['@pinia/nuxt'],

})
