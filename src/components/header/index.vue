<!-- eslint-disable vue/html-closing-bracket-newline -->
<!-- eslint-disable vue/html-indent -->
<template>
    <v-app-bar title="Resume Work">
      <div class="d-flex align-center gap-4">
        <router-link
          to="/"
          class="text-decoration-none text-white mx-2"
        >
          Home
        </router-link>
  
        <router-link
          to="/about"
          class="text-decoration-none text-white mx-2"
        >
          About
        </router-link>

        <router-link
          to="/sign-in"
          class="text-decoration-none text-white mx-2"
        >
          Sign In
        </router-link>
      </div>
    </v-app-bar>
  </template>