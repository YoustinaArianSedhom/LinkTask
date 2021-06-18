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

    <div
      class="vx-row w-full text-black flex justify-left mt-10 text-2xl font-bold "
    >
      Latest News
    </div>
    <div class="vx-row">
      <div
        class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base"
        v-for="(post3Column, index) of blogColumn3.articles"
        :key="index"
      >
        <vx-card
          class="vx-col"
          style="height :500px;"
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
          <!-- <div> -->
          <div class="justify-end">
            <feather-icon
              icon="HeartIcon"
              svgClasses="h-6 w-6 "
              class="iconColor  text-bold p-2"
            />
            <feather-icon
              icon="Share2Icon"
              svgClasses="h-6 w-6 "
              class="iconColor text-bold p-2"
            />
          </div>
          <h4 class="card-title mb-2 text-2xl">
            {{ post3Column.title }}
          </h4>
          <vs-button
            size="small"
            color="#dddddd"
            class="text-black text-base"
            type="filled"
          >
            News</vs-button
          >
          <p class="card-text">{{ post3Column.content }}</p>
          <div class="card-footer pt-2 p-0">
            <div class="d-flex justify-content-between">
              <div class="d-flex">
                <feather-icon
                  icon="CalendarIcon"
                  svgClasses="h-5 w-5"
                  class="text-primary"
                />
                <span class="font-sm text-capitalize">{{
                  post3Column.publishedAt | formatDate()
                }}</span>
              </div>
            </div>
          </div>
          <!-- </div> -->
        </vx-card>
      </div>
    </div>

    <div
      class="mb-base  w-full FixedHeight mx-1"
      style="background-image: url('https://travel.mqcdn.com/mapquest/travel/wp-content/uploads/2020/06/GettyImages-548565141-e1592719799177.jpg')"
    ></div>
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

.iconColor {
  color: #b3e283;
}
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
