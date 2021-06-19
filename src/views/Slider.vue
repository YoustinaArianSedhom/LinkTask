<template>
  <!-- id="container2"
    class="flex  w-full bg-img vx-row no-gutter justify-center items-center " -->
  <div class="mt-17">
    <!-- swiper -->
    <div class="vx-row bg-white w-full mt-2">
      <div class="w-full ">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide
            v-for="(slideContent, index) in List"
            :key="index"
            :virtualIndex="index"
          >
            <div class="swiper-zoom-container">
              <img
                class="responsive"
                :src="slideContent"
                height="260px;"
                alt="banner"
              />
            </div>
          </swiper-slide>
          <div
            class="swiper-pagination swiper-pagination-white"
            slot="pagination"
          ></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.min.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
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
  components: {
    swiper,
    swiperSlide
  },
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
