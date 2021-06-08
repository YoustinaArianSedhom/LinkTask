<template>
  <div
    id="container"
    class="flex  w-full bg-img vx-row no-gutter justify-center items-center  sm:py-0 md:py-0 lg:py-0 xl:py-0 py-20"
  >
    <!-- Left Div -->
    <div
      class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2  bg-beige rounded-br-3xl h-100"
    >
      <div class="ml-6 mt-6 sm:px-0 md:px-4 lg:px-24 xl:px-64 px-2">
        <div class="vx-row w-full mt-6">
          <small class="text-primary text-base font-medium">
            Global Competition
          </small>
        </div>
        <div class="vx-row w-full mt-4">
          <span class="text-grey text-5xl font-medium">
            World
            <span class="text-primary">Robot </span>
            <br />
            Olympiad
          </span>
        </div>
        <div class="vx-row w-full mt-6">
          <small class="text-grey text-lg">
            A truly global competition <br />
            dedicated to science, technology and education
          </small>
        </div>
        <div class="vx-row w-full mt-6">
          <feather-icon
            icon="PlayCircleIcon"
            svgClasses="h-24 w-24 text-primary stroke-1"
          />
          <small class="text-grey font-bold text-md ml-2 mt-6">
            <span class="text-primary">Watch</span> Demo
            <br />
            <span class="text-primary">Video</span>
          </small>
        </div>
      </div>
    </div>

    <!-- Right Div -->
    <div
      class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 flex sm:justify-start md:justify-start lg:justify-start xl:justify-start justify-center  bg-white h-100"
    >
      <div class=" sm:px-0 md:px-4 lg:px-24 xl:px-64 px-2">
        <div class="vx-row w-full mt-6">
          <img
            class="responsive w-78 h-72 rounded-b-3xl rounded-tl-3xl"
            src="@/assets/images/image1.png"
            alt="banner"
          />
        </div>
        <div class="vx-row w-full mt-6 ml-10">
          <img
            class="responsive w-68 h-90 rounded-bl-3xl rounded-t-3xl"
            src="@/assets/images/image2.png"
            alt="banner"
          />
        </div>
      </div>
    </div>

    <div id="circle">
      <div class="vx-row w-full">
        <img
          class="responsive w-80 h-68 rounded-br-3xl rounded-t-3xl"
          src="@/assets/images/img1.png"
          alt="banner"
        />
      </div>
      <div
        @click="ScrollToSpotLinks()"
        class="vx-row flex justify-center w-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24.047"
          height="38.047"
          viewBox="0 0 24.047 38.047"
        >
          <g
            id="Group_6222"
            data-name="Group 6222"
            transform="translate(-666 -665.476)"
          >
            <path
              id="Icon_ionic-md-arrow-down"
              data-name="Icon ionic-md-arrow-down"
              d="M19.5-8.023v32.26l8.417-8.417,2.1,2.18L18,30.023,5.977,18l2.1-2.1L16.5,24.237V-8.023Z"
              transform="translate(660.023 673.499)"
              fill="#252634"
            />
          </g>
        </svg>
      </div>
      <div
        @click="ScrollToSpotLinks()"
        class="vx-row w-full justify-center text-black text-sm font-bold mt-4 cursor-pointer"
      >
        Spot Links
      </div>
    </div>
    <div
      id="SpotLinks"
      class="vx-row w-full text-black flex justify-center mt-10 text-2xl font-bold"
    >
      Spot Links
    </div>
    <div class="vx-row w-full flex justify-center mt-4 mb-10 ">
      <img
        class="responsive w-68 ml-4 mb-4 h-64 rounded-br-3xl rounded-t-3xl"
        src="@/assets/images/left.png"
        alt="banner"
      />
      <img
        class="responsive w-68 ml-4 mb-4 h-64rounded-b-3xl rounded-t-3xl"
        src="@/assets/images/center.png"
        alt="banner"
      />
      <img
        class="responsive w-68 ml-4 mb-4 h-64 rounded-bl-3xl rounded-t-3xl"
        src="@/assets/images/right.png"
        alt="banner"
      />
    </div>

    <div class="ml-4 sm:px-0 md:px-4 lg:px-24 xl:px-64 px-2 mt-10">
      <div class="vx-row bg-white w-full">
        <div class="w-full p-2">
          <span class="text-primary text-4xl font-bold">
            A Truly Global Competition
          </span>
        </div>
      </div>
      <div class="vx-row bg-white w-full">
        <div class="w-full p-2">
          <span class="text-black text-2xl font-bold">
            Dedicated To Science, Technology And Education
          </span>
        </div>
      </div>
      <div class="vx-row bg-white mb-4 w-full">
        <div class="w-full p-2">
          <span class="text-grey-light text-lg">
            At World Robot Olympiad it is our mission to give as many young
            people all the opportunity to develop their creativity and problem
            solving skills in a fun and engaging way.We do this by organizing
            robotics competitions. Each season we have a new theme and we have
            challenges that are tailored to the age of the participants.
            Starting as low as 6 or 7 years old up to University level. WRO
            tournaments are organized in over 75 countries worldwide and each
            season new countries oin the movement. World Robot Olympiad
            Association is a non-profit organization. All revenue from
            sponsorships and fees is invested in support of our mission, which
            is to promote robotics in STEM education worldwide. On this website
            you will find a lot of general information about our competition.For
            the WRO competition in your country please refer to the page with
            our member countries.
          </span>
        </div>
      </div>
      <div class="flex justify-center vx-row bg-white mt-8 w-full">
        <div class="flex justify-center w-full p-2">
          <vs-button
            class="mb-4 h-16 font-bold rounded-full md:w-auto float-left m-2"
            @click="$router.push({ name: 'MemberCountries' })"
            color="primary"
            >Member Countries
          </vs-button>
        </div>
      </div>
    </div>

    <div
      class="ml-4 w-full px-2 sm:px-0 md:px-4 lg:px-24 xl:px-64 px-2 mt-10 mb-10"
    >
      <div class="flex flex-wrap -mx-2">
        <div class="w-full xs:w-full bg sm:w-full px-2 mb-2">
          <div class="vx-row bg-white w-full">
            <div class="w-full p-2">
              <span class="text-primary text-4xl font-bold"> This is WRO </span>
            </div>
          </div>

          <div class="vx-row bg-white w-full mb-4">
            <div class="w-full p-2">
              <span class="text-black text-2xl font-bold">
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
    <!-- DONE -->

    <div
      class="ml-4 w-full px-2 sm:px-0 md:px-4 lg:px-24 xl:px-64 px-2 mt-10 mb-10"
    >
      <ul class="vx-timeline">
        <li>
          <div class="vx-row flex-wrap mb-4 ">
            <div class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 ">
              <img
                class="responsive float-left  w-full"
                src="@/assets/images/Layer.svg"
                alt="banner"
              />
            </div>
            <div
              class="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2  pt-10 mt-10"
            >
              <span class="font-bold text-black text-2xl mt-6">
                Big numbers
              </span>
              <p class="break-words align-baseline font-semibold mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer. Lorem Ipsum
                is simply dummy text of the printing.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div
      class="vx-row sm:px-0 md:px-4 lg:px-24 xl:px-64 px-2 mt-10  flex justify-center  bg-white w-full mt-10 mb-10"
    >
      <div class="sm:w-1/3 md:w-1/3 lg:w-1/3  xl:w-1/3 w-full ">
        <h1 class="text-center align-bottom ml-4 mr-4 mt-6 ">
          Let's Work Together &
          <br />
          Make a Better World
        </h1>
      </div>
      <div class="sm:w-1/3 md:w-1/3 lg:w-1/3  xl:w-1/3 w-full mt-10">
        <vs-divider
          class="float-right mb-0   invisible md:visible lg:visible xl:visible w-3/5 mt-6 "
          border-style="solid"
          style=""
          position="center"
          color="primary"
        ></vs-divider>
      </div>
      <div class="flex flex-wrap sm:w-1/3 md:w-1/3 lg:w-1/3  xl:w-1/3 w-full ">
        <vs-button
          class="text-center ml-auto mr-auto rounded-full break-normal h-36 w-36"
          type="border"
          >Contact Us
        </vs-button>
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
        require("@/assets/images/banner-21.png"),
        require("@/assets/images/banner-22.png"),
        require("@/assets/images/banner-23.png"),
        require("@/assets/images/banner-24.png"),
        require("@/assets/images/banner-25.png"),
        require("@/assets/images/banner-27.png"),
        require("@/assets/images/banner-26.png"),
        require("@/assets/images/banner-27.png"),
        require("@/assets/images/banner-28.png"),
        require("@/assets/images/banner-29.png"),
        require("@/assets/images/banner-31.png"),
        require("@/assets/images/banner-22.png"),
        require("@/assets/images/banner-23.png"),
        require("@/assets/images/banner-24.png"),
        require("@/assets/images/banner-25.png"),
        require("@/assets/images/banner-27.png"),
        require("@/assets/images/banner-26.png"),
        require("@/assets/images/banner-27.png"),
        require("@/assets/images/banner-28.png"),
        require("@/assets/images/banner-29.png"),
        require("@/assets/images/banner-31.png"),
        require("@/assets/images/banner-12.png")
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
  },
  methods: {
    ScrollToSpotLinks() {
      document.getElementById("SpotLinks").scrollIntoView();
    }
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
#container {
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
