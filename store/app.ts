import { defineStore } from "pinia";

export const useAppStore = defineStore('app-store', {

    state: () => {
        return {
            siteProperties: {
                cookieConsent: false,
            }
        }
    },

    actions: {
        updateCookieConsent(value: boolean) {
            this.siteProperties.cookieConsent = value;
        }
    },

    getters: {
        cookieConsent: (state) => state.siteProperties.cookieConsent,
    }

});