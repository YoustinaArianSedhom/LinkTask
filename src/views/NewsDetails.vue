<template>
  <div class="">
    <div class=" ">
      <vx-card class="">
        <div slot="no-body">
          <img
            :src="Model.urlToImage"
            alt="Card image cap"
            class="card-img-top"
            title=""
            style=" height:200px; width: 400px;"
          />
        </div>
        <div class="card-body border-rad-bottom">
          <h4 class="mb-2">
            {{ Model.title }}
          </h4>
          <span>{{ Model.content }}</span>
        </div>
      </vx-card>
    </div>

    <h2 class="pt-10 text-bold">Related Topics</h2>
    <div class="vx-row">
      <div
        v-for="(post3Column, index) of sourceCategory"
        :key="index"
        class="relative mb-base rounded-lg  w-full sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 FixedHeight mx-1"
        style="background-image: url('https://travel.mqcdn.com/mapquest/travel/wp-content/uploads/2020/06/GettyImages-548565141-e1592719799177.jpg')"
      >
        <div
          class="vx-col justify-end rounded-lg absolute bottom-0 inset-x-0 px-4 pt-2 m-4 mx-4 bg-white  h-48 bg-opacity-100 "
        >
          <div class="mt-4 font-semibold"><h6>Category</h6></div>
          <div class="h-24">
            <h1 class="font-bold">
              {{ Description.substring(0, 40) + " ..." }}
            </h1>
          </div>
          <div class="flex items-end">
            <small class="text-success">View Details </small>
            <feather-icon
              icon="ArrowRightIcon"
              svgClasses="w-16 text-success"
              class="ml-1"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import blogColumn3 from "@/views/JsonFiles/data.json";

export default {
  data() {
    return {
      sourceCategory: [
        {
          id: 1,
          name: "TechCrunch"
        },
        {
          id: 2,
          name: "Yahoo Entertainment"
        },
        {
          id: 3,
          name: "autoevolution"
        }
      ],
      Description:
        " lorem sadasd wqeqw asd alotd alotd alotd alotd alotd alot of text",
      blogColumn3,
      Model: {}
    };
  },
  created() {
    debugger;
    const Item = this.$route.params.item;
    if (Item != undefined) {
      debugger;
      this.Model = Item;
    }
  }
};
</script>
<style>
.FixedHeight {
  height: 400px !important;
  background-size: cover;
}
.card {
  background-image: url("https://images.mktw.net/im-231687/social");
}
</style>
