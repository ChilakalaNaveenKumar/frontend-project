<template>
    <v-container class="login-container">
      <v-card class="login-card">
        <v-card-title class="headline text-center">
          <strong>E2E DATA SOLUTIONS LOGIN</strong>
        </v-card-title>
  
        <v-card-text>
          <p class="text-center">Enter your credentials to get sign into your account</p>
          <br/>  
          <v-form @submit.prevent="login">
            <v-text-field
              label="Enter Username"
              v-model="username"
              prepend-inner-icon="mdi-email"
              outlined
              dense
              required
            ></v-text-field>
  
            <v-text-field
              label="Enter Password"
              v-model="password"
              prepend-inner-icon="mdi-lock"
              :type="showPassword ? 'text' : 'password'"
              outlined
              dense
              required
            >
              <template v-slot:append-inner>
                <v-btn icon @click="showPassword = !showPassword" class="custom-eye">
                  <v-icon>{{ showPassword ? 'mdi-eye-off' : 'mdi-eye' }}</v-icon>
                </v-btn>
              </template>
            </v-text-field>
  
            <v-row align="center">
              <v-col cols="12">
                <v-checkbox v-model="rememberMe" label="Remember Me" dense></v-checkbox>
              </v-col>
            </v-row>
  
            <v-btn color="primary" block class="mt-3" type="submit">
              Sign In
            </v-btn>
          </v-form>
  
          <p class="text-center mt-4">
            Forget Password? :
            <a href="#" class="link-text">Click Here</a>
          </p>
          <p class="text-center">
            Support :
            <a href="#" class="link-text">Client Issue Management</a>
          </p>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "ClientLogin",
    data() {
      return {
        username: "",
        password: "",
        showPassword: false,
        rememberMe: false,
      };
    },
    methods: {
      login() {
        // alert(`Logging in as: ${this.username}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    strong {
        color: #658cb1;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url("https://via.placeholder.com/1920x1080") no-repeat center center;
    background-size: cover;
    font-family: "Amaranth", serif;
    font-weight: 700;
    font-style: normal;
    .custom-eye {
        width: 35px;
        height: 25px;
    }
    .bg-primary {
        background-color: rgb(101 140 177) !important;
    }
  }
  
  .login-card {
    width: 400px;
    padding: 20px;
    border-radius: 8px;
  }
  
  .headline {
    font-size: 20px;
    font-weight: bold;
  }
  
  .link-text {
    text-decoration: none;
    color: blue;
    font-weight: bold;
    color: #2b91e2;
  }
  
  .text-center {
    text-align: center;
  }
  </style>
  