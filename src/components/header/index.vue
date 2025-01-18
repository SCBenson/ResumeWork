<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-closing-bracket-newline -->
<!-- eslint-disable vue/html-indent -->
<script setup>
import logoUrl from "@/assets/resumework-logo.svg";
</script>
<template>
  <v-app-bar color="white">
    <img :src="logoUrl" class="app-bar-logo" alt="Company logo" />
    <div class="d-flex align-center gap-4">
      <router-link to="/" class="text-decoration-none text-black mx-2">
        Home
      </router-link>

      <router-link to="/about" class="text-decoration-none text-black mx-2">
        About
      </router-link>

      <router-link to="/sign-in" class="text-decoration-none text-black mx-2">
        Sign In
      </router-link>
    </div>
  </v-app-bar>
</template>

<style scoped>
.app-bar-logo {
  height: 200px; /* Adjust this value based on your app-bar height */
  width: auto;
  max-width: 200px; /* Adjust maximum width as needed */
  display: block;
}
</style>
