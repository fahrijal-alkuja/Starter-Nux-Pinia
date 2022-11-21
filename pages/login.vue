<template>
  <div>page login</div>
  <form @submit.prevent="login">
    <input type="text" v-model="email" placeholder="email" /> <br />
    <input type="password" v-model="password" placeholder="password" /> <br />
    <button type="submit">login</button>
  </form>
</template>

<script setup>
import { useAuthStore } from "~/store/auth";

// page name
definePageMeta({
  name: "login",
  layout: "default",
  pageTransition: false,
});

const authStore = useAuthStore();
const email = ref("alkuja07@unikarta.ac.id");
const password = ref("alkuja07");
// login
const login = async () => {
  try {
    await authStore.login({
      email: email.value,
      password: password.value,
    });
    const user = authStore.users;
    if (user.rule === "admin") {
      navigateTo({ name: "admin" });
    } else if (user.rule === "user") {
      navigateTo({ name: "user" });
    } else {
      navigateTo({ name: "login" });
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped></style>
