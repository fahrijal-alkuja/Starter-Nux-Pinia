<template>
  <div>
    <h1>Page user</h1>
    <h1>anda berhasil login {{ authStore.users.username }}</h1>
    <button @click="logout()">logout</button>
  </div>
</template>

<script setup>
import { useAuthStore } from "~/store/auth";
definePageMeta({
  layout: "user",
  name: "user",
  middleware: ["user"],
});
const authStore = useAuthStore();
// logout
const logout = async () => {
  await authStore.logout();
  navigateTo({ name: "login" });
};
</script>

<style lang="scss" scoped></style>
