<template>
  <div>
    <Slider></Slider>
    <Latest class="sm:px-0 md:px-4 lg:px-24 xl:px-64"></Latest>
  </div>
</template>
<script>
import Slider from "@/views/Slider.vue";
import Latest from "@/views/Latest.vue";
export default {
  components: {
    Slider,
    Latest
  }
};
</script>
