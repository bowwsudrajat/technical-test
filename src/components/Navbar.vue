<template>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="#">
      <img src="../../public/img/logo.jpg" alt="Logo" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-navbar-nav>
          <b-nav-item href="#" class="active">Home</b-nav-item>
          <b-nav-item href="#">Discover</b-nav-item>
          <b-nav-item href="#">Register</b-nav-item>
          <b-nav-item href="#"><b-icon icon="search"></b-icon></b-nav-item>
        </b-navbar-nav>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>