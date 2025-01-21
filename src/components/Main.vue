<template>
    <div>
      <v-app>
        <Navbar />
      </v-app>
    </div>
  </template>
  
  <script>
  import Navbar from './navbar/index.vue'
  export default {
    name: "LoginPage",
    components: {
      Navbar
    }
  };
  </script>
  
  <style>
  .v-field__outline {
    display: none !important;
  }
  </style>