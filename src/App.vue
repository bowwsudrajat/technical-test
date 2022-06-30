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
          <h1 class="h1-seo">Booked Tool</h1>
          <h3>enebles you to create Interactive Advertisement</h3>
          <b-button class="btn-header" variant="info">What is it?</b-button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <p>Test aja dulu</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Parallax from './components/Parallax.vue';

export default {
  name: 'App',
  components: {
    Parallax,
    Navbar
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
.page-header {
  min-height: 100vh;
  max-height: 999px;
  padding: 0;
  color: #fff;
  position: relative;
  overflow: hidden;
}
.page-header-image {
  position: absolute;
  background-size: cover;
  background-position: 50%;
  width: 100%;
  height: 100%;
  z-index: -1;
}
/* .page-header>.container {
  z-index: 2;
  padding-top: 12vh;
  padding-bottom: 40px;
}
.page-header .container {
  height: 100%;
  z-index: 1;
  position: relative;
} */
.page-header .content-center {
  position: absolute;
  top: 37%;
  left: 40%;
  z-index: 2;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  text-align: left;
  color: #fff;
  padding: 0 15px;
  width: 40%;
  max-width: 880px;
}
.page-header .content-center h1.h1-seo {
  display: inline-flex;
  margin-right: 8px;
}
.page-header .content-center h3 {
  display: inline-flex;
}
.btn-header {
  padding: 12px 20px!important;
}
</style>
