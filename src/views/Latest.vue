<template>
  <div>
    <div
      class="vx-row w-full text-black flex justify-left mt-10 text-2xl font-bold  "
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
          class="flex flex-col"
          style="height :550px;"
          @click="GoToDetails(post3Column)"
        >
          <div slot="no-body" class="FixedSize w-full">
            <img
              :src="post3Column.urlToImage"
              alt="Card image cap"
              class="w-full h-full"
              title=""
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
          <h4 class="card-title my-2 text-2xl h-18">
            {{ post3Column.title.substring(0, 40) + "..." }}
          </h4>
          <vs-button
            size="small"
            color="#dddddd"
            class="text-black text-base mb-2"
            type="filled"
          >
            News</vs-button
          >
          <p class="card-text h-36 mb-2">
            {{ post3Column.content.substring(0, 180) + "..." }}
          </p>
          <div class="footer card-footer pt-2 p-0">
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
      ]
    };
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

<style>
.FixedSize {
  height: 200px;
  margin: auto;
}
.ImageClasss {
  display: inline-block;
  margin: auto;
  text-align: center;
}
</style>
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
