<template>
  <section class="wrapper-login">
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col col md="3">
          <p>Please log in to start using</p>
          <h3>Booked Tool</h3>
        </b-col>
        <b-col cols="12" md="8">
          <b-form inline>

            <label class="sr-only" for="inline-form-input-email">Email</label>
            <b-form-input
              id="inline-form-input-email"
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="Email"
            ></b-form-input>

            <label class="sr-only" for="inline-form-input-password">Password</label>
            <b-form-input id="inline-form-input-password" placeholder="Password"></b-form-input>

            <b-button class="btn-login" variant="info">Login</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<style lang="scss">
  @import "../assets/sass/login-section";
</style>