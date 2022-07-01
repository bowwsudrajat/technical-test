<template>
  <div id="app">
    <Navbar />
    <div class="page-header">
      <parallax
        class="page-header-image"
        style="background-image:url('img/header.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
          <h1 class="h1-seo"><strong>Booked Tool</strong><span class="small-font">enebles you to create Interactive Advertisement</span></h1>
          <b-button class="btn-header" variant="info">What is it?</b-button>
        </div>
      </div>
    </div>

    <LoginSection />

    <Discover />

    <Contact />
    
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Parallax from './components/Parallax.vue';
import LoginSection from './components/LoginSection.vue';
import Discover from './components/Discover.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'App',
  components: {
    Parallax,
    Navbar,
    LoginSection,
    Discover,
    Contact
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
