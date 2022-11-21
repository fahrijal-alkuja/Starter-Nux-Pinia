import { useAuthStore } from "~/store/auth";
const authStore = useAuthStore();
export default defineNuxtRouteMiddleware(async (to, from) => {
    const user = authStore.users;
    if (user.length === 0) {
        return navigateTo({ name: "login" });
    }
    if (user.rule !== 'user') {
        return navigateTo({ name: "user" });
    }
})