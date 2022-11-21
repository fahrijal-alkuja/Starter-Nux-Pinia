<template>
  <div>
    <h1>Halo</h1>
    <h1>anda berhasil login {{ authStore.users.username }}</h1>
    <button @click="logout()">logout</button>
  </div>
</template>

<script setup>
import { useAuthStore } from "~/store/auth";
definePageMeta({
  name: "admin",
  layout: "admin",
  middleware: ["admin"],
});
const authStore = useAuthStore();

const logout = async () => {
  await authStore.logout();
  navigateTo({ name: "login" });
};
</script>

<style lang="scss" scoped></style>
