<template>
    <section class="contact-us-section">
        <v-container>
        <v-row>
            <v-col cols="6" class="get-in-touch">
                <h1>Get in Touch</h1>
                <div> 
                    <h3>Support</h3>
                    <b>Email US: </b>
                    <a href="mailto:contactus@e2edatasolutions.com">contactus@e2edatasolutions.com</a> <br/>
                    <b>Phone Number (Direct): </b>
                    <a href="tel:361-455-6860">361-455-6860</a><br/>
                </div>
                <br/>
                <div> 
                    <h3>IT Service contact details</h3>
                    <b>Email US: </b>
                    <a href="mailto:sunil@e2edatasolutions.com">sunil@e2edatasolutions.com</a> <br/>
                    <b>Phone Number (Direct): </b>
                    <a href="tel:361-455-6860">904-738-6292</a><br/>
                </div>
            </v-col>
            <v-col>
                <v-card>
                    <h1>Contact Us</h1>
                    <br/>
                    <v-container>
                    <v-form ref="contactForm">
                        <v-row>
                        <v-col cols="12" md="6">
                            <v-text-field 
                            label="First Name" 
                            v-model="firstName" 
                            class="custom-input"
                            rounded
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field 
                            label="Second Name" 
                            v-model="secondName" 
                            class="custom-input"
                            rounded
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field 
                            label="Your Email" 
                            v-model="email" 
                            class="custom-input"
                            rounded
                            required 
                            type="email"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field 
                            label="Subject" 
                            v-model="subject" 
                            class="custom-input"
                            rounded
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea 
                            label="Your Message" 
                            v-model="message" 
                            class="custom-input"
                            rounded
                            required
                            ></v-textarea>
                        </v-col>
                        <v-col cols="12" class="text-center">
                            <v-btn color="primary">
                            Send Message
                            </v-btn>
                        </v-col>
                        </v-row>
                    </v-form>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: "",
        secondName: "",
        email: "",
        subject: "",
        message: "",
      };
    },
    methods: {
    }
  };
  </script>
  
  <style >
  .contact-us-section {
    h1 {
        font-family: "Amaranth", serif;
        font-weight: 700;
        font-style: normal;
        color: #658cb1;
    }
    .bg-primary {
        background-color: rgb(101 140 177) !important;
    }
  }
  .get-in-touch {
    h1 {
        color: #2b91e2;
    }
    h3 {
        font-family: "Amaranth", serif;
        font-weight: 700;
        font-style: normal;
        color: #658cb1;
    }
  }
  </style>
  
  
  