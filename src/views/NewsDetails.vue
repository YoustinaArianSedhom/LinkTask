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
            <a href="/blog-detail">{{ Model.title }}</a>
          </h4>
          <p>{{ Model.content }}</p>
        </div>
      </vx-card>
    </div>

    <h2 class="pt-10 text-bold">Related Topics</h2>
    <div class="vx-row">
      <div
        class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base"
        v-for="(post3Column, index) of blogColumn3.sourceCategory"
        :key="index"
      >
        <vx-card
          class="vx-col"
          style="background-image:https://images.mktw.net/im-231687/social;"
        >
          <div slot="no-body">
            <!-- <img
              :src="post3Column.urlToImage"
              alt="Card image cap"
              class="card-img-top"
              title=""
              style=" height:200px; width: 400px;"
            /> -->
          </div>
          <div class="card-body border-rad-bottom">
            <h4 class="card-title mb-2">
              <a href="/blog-detail">{{ post3Column.title }}</a>
            </h4>
            <div class="card-footer pt-2 p-0"></div>
          </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>
<script>
import blogColumn3 from "@/views/JsonFiles/Country.json";

export default {
  data() {
    return {
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
<style></style>
