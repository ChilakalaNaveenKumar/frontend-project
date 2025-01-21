<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="120" viewBox="0 0 300 120">
    <!-- Professional text color -->
    <text x="70" y="55" font-size="20" font-family='"Amaranth", serif' font-weight="700" fill="#658cb1">
      <Animations :words="titleWords" :class-name="titleClass" :index="10"/>
    </text>
    
    <!-- Left line in teal -->
    <line x1="50" y1="68" x2="140" y2="68" stroke="#658cb1" font-family='"Amaranth", serif' font-weight="700" stroke-width="4"/>

    <!-- Right line in teal -->
    <line x1="160" y1="68" x2="250" y2="68" stroke="#658cb1" font-family='"Amaranth", serif' font-weight="700" stroke-width="4"/>

    <!-- "X" in muted red -->
    <text x="145" y="73" font-size="18" font-weight="700" font-family='"Amaranth", serif' fill="#658cb1">X</text>
    
    <!-- "E2E" in charcoal gray -->
    <text x="135" y="90" font-size="16" font-family='"Amaranth", serif' font-weight="700" fill="#658cb1">
      <Animations :words="subtitleWords" :class-name="subtitleClassName" :index="15"/>
    </text>
  </svg>
</template>

<script>
import Animations from '@/components/animations/index.vue';

export default {
  name: 'Logo',
  components: {
    Animations
  },
  data() {
    return {
      titleWords: ['E', '2', 'E', ' D', 'a', 't', 'a', ' S', 'o', 'l', 'u', 't', 'i', 'o', 'n', 's'],
      titleClass: 'logo-title',
      subtitleWords: ['E', '2', 'E'],
      subtitleClassName: 'logo-subtitle'
    };
  }
}
</script>

<!-- ✅ Move Styles Here -->
<style lang="scss">
/* Import Google Font */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');

@keyframes bounceIn {
  0% { 
    opacity: 0; 
    transform: scale(0.8) translateY(-30px); 
  }
  30% { 
    opacity: 1; 
    transform: scale(1.1) translateY(10px); 
  }
  50% { 
    opacity: 1; 
    transform: scale(0.9) translateY(-5px); 
  }
  100% { 
    opacity: 1; /* ✅ Ensure opacity remains */
    transform: scale(1) translateY(0);
  }
}
.roboto-regular {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}

.logo-title,
.logo-subtitle {
  opacity: 0;
  animation: bounceIn 2s ease-in-out forwards; 
}

/* ✅ Generate Delayed Animations Using SCSS @for Loop */
@for $i from 0 through 45 {
  .logo-title_#{$i}, .logo-subtitle_#{$i} {
    animation-delay: #{$i * 0.1}s;
  }
}
</style>
