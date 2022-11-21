import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const authStore = useAuthStore();
    const user = authStore.users;
    if (user.rule !== 'user') {
        return navigateTo({ name: "login" });
    }
})