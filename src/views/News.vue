<template>
  <div>
    <div
      class="vx-row w-full text-black flex justify-left mt-10 text-2xl font-bold "
    >
      News
    </div>
    <Latest class="sm:px-0 md:px-4 lg:px-24 xl:px-64"></Latest>
  </div>
</template>

<script>
import Latest from "@/views/Latest.vue";

export default {
  data() {
    return {};
  },
  components: { Latest },
  methods: {}
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
