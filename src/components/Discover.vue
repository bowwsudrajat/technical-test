<template>
  <div id="discover">
    <b-container>
      <b-row>
        <b-col>
          <div class="discover-header text-center">
            <img class="img-discover-head" src="../../public/img/discovery-img.jpg"/>
            <h5><strong>Discover</strong></h5>
            <h5>Booked Tool</h5>
          </div>

          <!-- <b-tabs>
            <b-tab no-body title="Picture 1">
              <b-card-img bottom src="https://picsum.photos/600/200/?image=21" alt="Image 21"></b-card-img>
              <b-card-text>
                Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
                consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex
                consectetur mollit voluptate est in duis laboris ad sit ipsum anim Lorem. Incididunt
                veniam velit elit elit veniam Lorem aliqua quis ullamco deserunt sit enim elit aliqua
                esse irure.
              </b-card-text>
            </b-tab>

            <b-tab no-body title="Picture 2">
              <b-card-img bottom src="https://picsum.photos/600/200/?image=25" alt="Image 25"></b-card-img>
              <b-card-text>
                Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
                consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex
                consectetur mollit voluptate est in duis laboris ad sit ipsum anim Lorem. Incididunt
                veniam velit elit elit veniam Lorem aliqua quis ullamco deserunt sit enim elit aliqua
                esse irure.
              </b-card-text>
            </b-tab>

            <b-tab no-body title="Picture 3">
              <b-card-img bottom src="https://picsum.photos/600/200/?image=26" alt="Image 26"></b-card-img>
              <b-card-text>
                Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
                consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex
                consectetur mollit voluptate est in duis laboris ad sit ipsum anim Lorem. Incididunt
                veniam velit elit elit veniam Lorem aliqua quis ullamco deserunt sit enim elit aliqua
                esse irure.
              </b-card-text>
            </b-tab>

          </b-tabs> -->

          <div class="tabs">
            <!-- <div class="content-image">
              <section>
                <img src="https://picsum.photos/600/200/?image=21" alt="Image 21" class="card-img-bottom" />
              </section>
              <section>
                <img src="https://picsum.photos/600/200/?image=25" alt="Image 21" class="card-img-bottom" />
              </section>
              <section>
                <img src="https://picsum.photos/600/200/?image=26" alt="Image 21" class="card-img-bottom" />
              </section>
            </div> -->
            <input type="radio" id="tab1" name="tab-control" checked>
            <input type="radio" id="tab2" name="tab-control">
            <input type="radio" id="tab3" name="tab-control">
            <input type="radio" id="tab4" name="tab-control">  
            <ul>
              <li title="Discover A">
                <label for="tab1" role="button">
                  <span>Discover A</span>
                </label>
              </li>
              <li title="Discover B">
                <label for="tab2" role="button">
                  <span>Discover B</span>
                </label>
              </li>
              <li title="Discover C">
                <label for="tab3" role="button">
                  <span>Discover C</span>
                </label>
              </li>
              <li title="Discover D">
                <label for="tab4" role="button">
                  <span>Discover D</span>
                </label>
              </li>
            </ul>
            
            <div class="slider"><div class="indicator"></div></div>
            <div class="content">
              <section>
                <img src="https://picsum.photos/600/400/?image=0" alt="Image 21" class="card-img-bottom" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea dolorem sequi, quo tempore in eum obcaecati atque quibusdam officiis est dolorum minima deleniti ratione molestias numquam. Voluptas voluptates quibusdam cum?</p>
              </section>
              <section>
                <img src="https://picsum.photos/600/400/?image=1" alt="Image 21" class="card-img-bottom" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas adipisci a accusantium eius ut voluptatibus ad impedit nulla, ipsa qui. Quasi temporibus eos commodi aliquid impedit amet, similique nulla.</p>
              </section>
              <section>
                <img src="https://picsum.photos/600/400/?image=119" alt="Image 21" class="card-img-bottom" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nemo ducimus eius, magnam error quisquam sunt voluptate labore, excepturi numquam! Alias libero optio sed harum debitis! Veniam, quia in eum.</p>
              </section>
              <section>
                <img src="https://picsum.photos/600/400/?image=160" alt="Image 21" class="card-img-bottom" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dicta vero rerum? Eaque repudiandae architecto libero reprehenderit aliquam magnam ratione quidem? Nobis doloribus molestiae enim deserunt necessitatibus eaque quidem incidunt.</p>
              </section>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
  @import "../assets/sass/discover";
</style>