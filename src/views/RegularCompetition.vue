<template>
  <div class="w-full px-2">
    <div class="flex flex-wrap -mx-2">
      <div class="w-full xs:w-full bg sm:w-full px-2 mb-2">
        <div class="vx-row bg-white w-full">
          <div class="w-full p-2">
            <span class="text-primary text-2xl font-bold">
              Regular Competition
            </span>
          </div>
        </div>
        <div class="vx-row bg-white w-full">
          <div class="w-full p-2">
            <span class="text-grey-light text-xl">
              Overview
            </span>
          </div>
        </div>
        <div class="vx-row bg-white w-full">
          <div class="w-full p-2">
            <span class="text-grey-light text-lg">
              The Regular Category is a challenge based competition. Students
              must design, construct and program their robots to solve specific
              challenges on a field. Points are scored for completed tasks
            </span>
          </div>
        </div>
        <div class="vx-row bg-white w-full mt-5">
          <div class="w-full p-2">
            <span class="text-primary text-2xl">
              Regular Category characteristics:
            </span>
          </div>
        </div>

        <div class="vx-row bg-white w-full">
          <div class="w-full p-2">
            <span class="text-black text-2xl">
              Four age groups:
            </span>
            <span class="text-grey-light text-lg">
              <ul style="list-style:disc" class="ml-8 mt-2">
                <li>WeDo (up to 10y), see more information below.</li>
                <li>
                  Elementary (up to 12y).
                </li>
                <li>
                  Junior (13-15y).
                </li>
                <li>
                  Senior (16-19y).
                </li>
              </ul>
            </span>
          </div>
        </div>
        <div class="vx-row bg-white w-full mt-5">
          <div class="w-full p-2">
            <span class="text-primary text-2xl">
              This is Regular Category
            </span>
          </div>
        </div>
        <div class="vx-row bg-white w-full">
          <div class="w-full p-2">
            <span class="text-grey-light text-lg">
              dedicated to science, technology and education.
            </span>
          </div>
        </div>
      </div>

      <div class="vx-row bg-white w-full mt-2">
        <div class="w-full ">
          <!-- swiper -->
          <swiper
            :options="swiperOption"
            :dir="$vs.rtl ? 'rtl' : 'ltr'"
            :key="$vs.rtl"
          >
            <!-- v-for="(item, index) in List" :key="index" -->
            <swiper-slide
              v-for="(slideContent, index) in List"
              :key="index"
              :virtualIndex="index"
            >
              <img class="responsive" :src="slideContent" alt="banner" />
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.min.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      List: [
        require("@/assets/images/pages/carousel/banner-21.jpg"),
        require("@/assets/images/pages/carousel/banner-22.jpg"),
        require("@/assets/images/pages/carousel/banner-23.jpg"),
        require("@/assets/images/pages/carousel/banner-24.jpg"),
        require("@/assets/images/pages/carousel/banner-25.jpg"),
        require("@/assets/images/pages/carousel/banner-27.jpg"),
        require("@/assets/images/pages/carousel/banner-27.jpg"),
        require("@/assets/images/pages/carousel/banner-28.jpg"),
        require("@/assets/images/pages/carousel/banner-29.jpg"),
        require("@/assets/images/pages/carousel/banner-31.jpg"),
        require("@/assets/images/pages/carousel/banner-32.jpg"),
        require("@/assets/images/pages/carousel/banner-33.jpg"),
        require("@/assets/images/pages/carousel/banner-34.jpg"),
        require("@/assets/images/pages/carousel/banner-35.jpg"),
        require("@/assets/images/pages/carousel/banner-16.jpg"),
        require("@/assets/images/pages/carousel/banner-37.jpg"),
        require("@/assets/images/pages/carousel/banner-38.jpg"),
        require("@/assets/images/pages/carousel/banner-39.jpg"),
        require("@/assets/images/pages/carousel/banner-12.jpg")
      ],
      swiperOption: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss">
.carousel-example .swiper-container .swiper-slide {
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
</style>
