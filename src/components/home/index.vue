<template>
    <div>
      <!-- Hero Section -->
      <section class="home-section">
        <img src="../../assets/data transformation.png" alt="transformation-image" class="transformation-image"/>     
        <div class="client-overlay">
          <div class="client-content transparent-card">
            <h1 class="display-4">Transform Your Data into Business Intelligence</h1>
            <div class="action-buttons">
                <v-row no-gutters>
                    <v-col cols="4">
                        <v-btn color="primary" large to="/login">Contact US</v-btn>
                    </v-col>
                <v-col>
                    <v-btn color="primary" large to="/login">Client Login</v-btn>
                </v-col>
                </v-row>
            </div>
            <h3 class="mb-4">Unlock the full potential of your data with AI-driven insights, seamless system integration, and scalable solutions tailored to your business.</h3>
          </div>
        </div>
      </section>
    </div>

    <Services />
    <Leadership />
    <AboutUs />
    <ContactUs/>
    <Footer />
</template>

<script>

import Services from '../services/index.vue';
import Leadership from '../leadership/index.vue';
import AboutUs from '../about-us/index.vue';
import ContactUs from '../contact-us/index.vue';
import Footer from '../footer/index.vue';
export default {
  name: "Home",
  components: {
    Services,
    Leadership,
    AboutUs,
    ContactUs,
    Footer
  }
};
</script>
<style lang="scss">
@keyframes slideFromRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.home-section {
    height: 430px;
}
.transformation-image {
    width: 50%;
    z-index: 0;
    position: absolute;
    left: 0px;
    border-radius: 200px;
}
.client-overlay {
    z-index: 2;
    position: relative;
    width: 45%;
    top: 140px;
    left: 690px;
    text-align: left;
    .action-buttons {
        margin-left: 50px;
        .bg-primary {
            background-color: rgb(101 140 177) !important;
        }  
    }
    h1 {
        font-family: "Amaranth", serif;
        font-weight: 700;
        font-style: normal;
        color: #658cb1;
        margin-bottom: 20px;
        animation: slideFromRight 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    }
    h3 {
        margin-top: 20px;
    }
}
</style>