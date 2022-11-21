import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const authStore = useAuthStore();
    const user = authStore.users;

    if (user.rule !== 'admin') {
        return navigateTo({ name: "login" });
    }

})