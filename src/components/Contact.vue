<template>
  <div id="contact">
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col md="7">
          <div class="contact-head text-center">
            <img class="contact-img" src="../../public/img/contact-img.jpg" />
            <h5>
              <strong>Get in touch</strong>
            </h5>
            <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us..</p>
            <div class="search-wrapper">
              <b-input-group size="sm" class="mb-2">
                <b-input-group-prepend is-text>
                  <b-icon icon="search"></b-icon>
                </b-input-group-prepend>
                <b-form-input type="search" placeholder="Search.."></b-form-input>
              </b-input-group>
            </div>
          </div>
          <b-row>
            <b-col md="6" class="pr-md-0">
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=wisma%20antara&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
              </div>
            </b-col>
            <b-col md="6" class="pl-md-0">
              <div class="contact-form">
                <h4 class="title-feedback"><strong>Feedback</strong></h4>
                <b-form inline>
                  <label class="sr-only" for="input-name-first">First</label>
                  <b-form-input
                    id="input-name-first"
                    class="mr-sm-2"
                    placeholder="First"
                  ></b-form-input>

                  <label class="sr-only" for="input-name-last">Last</label>
                  <b-form-input id="input-name-last" placeholder="Last"></b-form-input>

                </b-form>
                <b-form>
                  <b-form-input id="input-name-last" placeholder="Email"></b-form-input>
                </b-form>
                <b-form-textarea
                  id="textarea"
                  placeholder="Enter something..."
                  rows="4"
                  max-rows="8"
                ></b-form-textarea>
                <b-button class="btn-send-feedback" variant="info">Send</b-button>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
  @import "../assets/sass/contact";

  .mapouter {
    position:relative;
    text-align:right;
    height:100%;
  }
  .gmap_canvas {
    overflow:hidden;
    background:none!important;
    height:100%;
  }
</style>