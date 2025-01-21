<template>
  <v-app class="app-background">
      <v-app-bar
        app
        dark
        style="top: 0;"
        class="navbar"
      >
        <v-toolbar-title>
          <Logo />
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text to="/">
          <v-icon left>mdi-home</v-icon>
          Home
        </v-btn>
        <v-btn text to="/services">
          <v-icon left>mdi-briefcase-outline</v-icon>
          Our Services
        </v-btn>
        <v-btn text to="/team">
          <v-icon left>mdi-account-group-outline</v-icon>
          Our Team
        </v-btn>
        <v-btn text to="/client-login">
          <v-icon left>mdi-login</v-icon>
          Client Login
        </v-btn>
        <v-btn text to="/about">
          <v-icon left>mdi-information-outline</v-icon>
          About Us
        </v-btn>
        <v-btn text to="/contact">
          <v-icon left>mdi-email-outline</v-icon>
          Contact Us
        </v-btn>
      </v-app-bar>

      <v-main class="routing-pages">
        <router-view />
      </v-main>
  </v-app>
</template>

<script>
import componentConfig from "@/components/navbar/index.js";

export default {
  ...componentConfig,
};
</script>

<style>
@import "@/components/navbar/index.scss";
</style>
