<template>
  <div>default.vue Cookie: {{ appStore.cookieConsent }}</div>
  <slot />
</template>

<script setup>
import { useAppStore } from "~/store/app";
const appStore = useAppStore();
</script>

<style lang="scss" scoped></style>
