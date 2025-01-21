<template>
    <div>
      <v-app>
       
        <Navbar />
  
        <!-- <v-footer app color="indigo" dark>
          <v-container class="text-center">
            &copy; 2024 - E2E Data Solutions
          </v-container>s
        </v-footer> -->
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