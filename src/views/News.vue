<template>
  <div>
    <div
      class="vx-row w-full text-black flex justify-left mt-10 text-2xl font-bold "
    >
      News
    </div>
    <div class="vx-row">
      <div
        class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base"
        v-for="(post3Column, index) of blogColumn3.articles"
        :key="index"
      >
        <vx-card
          class="vx-col"
          style="height :450px;"
          @click="GoToDetails(post3Column)"
        >
          <div slot="no-body">
            <img
              :src="post3Column.urlToImage"
              alt="Card image cap"
              class="card-img-top"
              title=""
              style=" height:200px; width: 400px;"
            />
          </div>
          <div class="card-body border-rad-bottom">
            <h4 class="card-title mb-2">
              {{ post3Column.title }}
            </h4>
            <p class="card-text">{{ post3Column.content }}</p>
            <div class="card-footer pt-2 p-0">
              <div class="d-flex justify-content-between">
                <a class="d-flex align-content-start ">
                  <i class="fa fa-calendar-o mr-2 align-self-center"></i>
                  <span class="font-sm text-capitalize">{{
                    post3Column.publishedAt | formatDate()
                  }}</span>
                </a>
              </div>
            </div>
          </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import blogColumn3 from "@/views/JsonFiles/data.json";

export default {
  data() {
    return {
      blogColumn3,
      List: [
        require("@/assets/images/Untitled.png"),
        require("@/assets/images/Untitled2.png"),
        require("@/assets/images/Untitled3.png")
      ],
      swiperOption: {
        zoom: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },

        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 5

        // breakpoints: {
        //   1024: {
        //     slidesPerView: 3,
        //     spaceBetween: 40
        //   },
        //   768: {
        //     slidesPerView: 2,
        //     spaceBetween: 30
        //   },
        //   640: {
        //     slidesPerView: 1,
        //     spaceBetween: 20
        //   }
        // }
      }
    };
  },
  components: {},
  methods: {
    ScrollToSpotLinks() {
      document.getElementById("SpotLinks").scrollIntoView();
    },
    GoToDetails(item) {
      this.$router.push({
        name: "NewsDetails",
        params: { item: item }
      });
    }
  }
};
</script>

<style lang="scss">
.carousel-example .swiper-container2 .swiper-slide {
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  background-color: #eee;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: 300px;
}
#container2 {
  position: relative;
}
// #Arrow {
//   position: absolute;
//   left: 0;
//   top: 0;
//   bottom: 7%;
//   right: 0;
//   height: 35px !important;
//   width: fit-content !important;
//   margin: auto;
//   padding-bottom: 20px;
// }
#circle {
  position: absolute;
  left: 0;
  top: 380px;
  right: 0;
  margin: auto;
  height: 285px !important;
  width: fit-content !important;
  margin: auto;
  margin-top: -40px;

  @media (max-width: 576px) {
    top: 460px !important;
  }
}
</style>
