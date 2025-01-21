<template>
  <div class="scroll-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay">
        <div class="hero-content transparent-card">
          <h1 class="display-4">Welcome to E2E Data Solutions</h1>
          <p class="mb-4">Your trusted partner in data solutions.</p>
          <v-btn color="primary" large to="/login">Client Login</v-btn>
        </div>
      </div>
    </section>
    <!-- Divider -->
    <div class="section-divider"></div>

    <!-- Services Section -->
    <section class="content-section services-section">
      
        <div class="services-header">
          <p>Welcome to E2E - where innovation meets expertise in data solutions.</p>
          <p>As the Director of Business Development and Technology, I am proud to introduce a suite of services meticulously crafted to empower your business with cutting-edge data capabilities.</p>
        </div>

        <div class="services-expertise">
          <h3>Our Expertise</h3>
          <p>At E2E our development team has engineered a remarkably agile system within an impressively short timeframe. Our seasoned professionals bring unparalleled expertise to every project, ensuring robust, scalable, and future-proof solutions tailored to your unique needs.</p>
        </div>

        <div class="services-expertise">
          <h3>Our Services</h3>
        </div>

        <div class="services-cards">
        <v-card outlined class="service-card">
          <v-icon large class="service-icon">mdi-database</v-icon>
          <h3>Custom Data Solutions</h3>
          <p>Unlock the potential of your data with our custom-tailored solutions, delivering actionable insights and business growth.</p>
        </v-card>

        <v-card outlined class="service-card">
          <v-icon large class="service-icon">mdi-chart-line</v-icon>
          <h3>Advanced Analytics</h3>
          <p>Transform raw data into insights with intuitive dashboards and comprehensive reports for strategic planning.</p>
        </v-card>

        <v-card outlined class="service-card">
          <v-icon large class="service-icon">mdi-network</v-icon>
          <h3>System Integration</h3>
          <p>Ensure smooth operations by connecting systems seamlessly, enhancing operational efficiency across your enterprise.</p>
        </v-card>

        <v-card outlined class="service-card">
          <v-icon large class="service-icon">mdi-speedometer</v-icon>
          <h3>Agile Development</h3>
          <p>Rapidly iterate and deliver high-quality solutions, adapting to your evolving needs in a dynamic market.</p>
        </v-card>

        <v-card outlined class="service-card">
          <v-icon large class="service-icon">mdi-account-circle</v-icon>
          <h3>User-Friendly Interfaces</h3>
          <p>Powerful yet easy-to-use solutions with interactive dashboards and interfaces designed for engagement.</p>
        </v-card>
      </div>

      <div class="why-choose-us">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>Proven Track Record: Delivering exceptional results with agile development and expertise.</li>
          <li>Customized Solutions: Tailored to meet your specific business needs.</li>
          <li>Cutting-Edge Technology: Future-proof your business with innovative solutions.</li>
          <li>Client-Centric Approach: Your success is our top priority.</li>
        </ul>
      </div>

      
    </section>
    <!-- Divider -->
    <div class="section-divider"></div>
    <!-- Our Team Section -->
    <section class="content-section services-section">
        <div class="team-content">
            <p><strong>Meet Our Leader</strong></p><br>
            <p><strong>Melissa Ball</strong> - Owner & Director of Business Development and Technology</p>
            <p>Melissa combines business acumen and technological expertise to spearhead innovative data solutions.</p>
            <p><strong>Background and Experience:</strong> With 15 years of experience in the tech industry, Melissa has a proven track record across sectors.</p>
            <p><strong>Expertise:</strong></p>
            <ul>
                <li>Business Development: Strong client relationships and business growth strategies.</li>
                <li>Technology Leadership: Expertise in Azure Cloud Services, Azure SQL Database, and Azure Data Factory.</li>
                <li>Project Management: Cross-functional team management and quality delivery.</li>
            </ul>
            <p><strong>Vision and Mission:</strong> Transforming data into insights for business growth and innovation.</p>
            <p><strong>Dr. Sunil Kumar, Ph.D., PMP</strong></p>
            <p>Dr. Sunil, a technology specialist with over 22 years of experience, leads technology solutions and strategy.</p>
        </div>
    </section>
    <!-- Divider -->
    <div class="section-divider"></div>
    <!-- About Us Section -->
    <section class="content-section services-section">
        <div>
            <p>Welcome to E2E where cutting-edge technology and business acumen converge to create innovative data solutions tailored to propel your business forward.</p>
            <p><strong>Our Vision</strong></p>
            <p>At E2E our vision is to transform the way businesses harness the power of their data. We believe in the potential of data to drive smarter decisions, foster innovation, and deliver unparalleled value to our clients.</p>
            <p><strong>Our Story</strong></p>
            <p>Founded by industry veterans with a passion for technology and business development, E2E was established to address the growing need for agile, efficient, and customized data solutions.</p>
            <p><strong>What Sets Us Apart</strong></p>
            <ul style="color:white">
                <li><strong>Innovation at Our Core:</strong> Exploring new technologies and methodologies.</li>
                <li><strong>Client-Centric Focus:</strong> Delivering tailored solutions for client success.</li>
                <li><strong>Agility and Speed:</strong> Agile development for timely, high-quality delivery.</li>
                <li><strong>Expertise and Experience:</strong> Leveraging deep industry knowledge.</li>
            </ul>
        </div>
    </section>
    <!-- Divider -->
    <div class="section-divider"></div>
    <!-- Contact Us Section -->
    <section class="content-section services-section">
      <div>
          <p>Email: contactus@e2edatasolutions.com</p>
          <p>Phone Number (Direct): 361-455-6860</p>
          <p>IT Service contact details–</p>
          <p>Email: sunil@mendsolutions.com</p>
          <p>Phone Number (Direct): 904-738-6292</p>
          <form>
              <div class="head">
                  <h4>Contact Form</h4>
                  <p>Please fill all the texts in the fields</p>
              </div>
              <label for="fullName">Your Name:</label>
              <input required type="text" placeholder="Full Name" name="fullName" id="fullName">

              <label for="email">Your Email:</label>
              <input type="email" placeholder="abcd@xyz.com" name="email" id="email" required>

              <label for="subject">Subject:</label>
              <input type="subject" placeholder="Your Enquiry" name="text" id="subject" required>

              <label for="message">Message:</label>
              <textarea placeholder="Your Message Here" name="message" id="message"></textarea>

              <button onclick="addEnquiry()" type="button">Submit</button>
              <span id="messageLabel" style="text-align:center;color:green;display:none">Successfully sent the enquiry!</span>
          </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
/* .scroll-container {
  scroll-snap-type: y mandatory;
  height: 100vh;
}

.hero-section {
  height: 50vh;
  background: url("https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2020/09/WIN20_PRO_RemoteWorking_030-BANNER.png") no-repeat center center/cover;
  color: #ffffff;
}

.hero-content {
  position: absolute;
  margin: 0px auto;
  text-align: center;
}

.transparent-card {
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 8px;
}

.services-section {
  background-color: #f7f9fc;
  color: #333;
  padding: 2rem;
}

.services-card {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border-radius: 12px;
}

.section-divider {
  height: 1px;
  background-color: rgba(200, 200, 200, 0.5);
  margin: 2rem 0;
  border-radius: 1px;
}


.services-header {
  text-align: center;
  max-width: 100%;
  margin: 0 auto 2rem;
  font-size: 1.2rem;
  line-height: 1.8;
}

.services-expertise {
  text-align: center;
  max-width: 100%;
  margin: 0 auto 2rem;
  font-size: 1.2rem;
  line-height: 1.8;
}

.services-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.service-card {
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.service-icon {
  color: #6f8f67;
  margin-bottom: 1rem;
}

.why-choose-us {
  max-width: 100%;
  margin: 0 auto;
  text-align: left;
} */
</style>
