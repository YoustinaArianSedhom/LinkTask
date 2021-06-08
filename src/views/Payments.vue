<template>
  <div class="h-full px-2">
    <div class="flex -mx-2">
      <section
        class="flex flex-col lg:flex-row items-start items-center lg:justify-center w-full lg:px-10"
      >
        <vx-card
          v-for="(item, index) in List"
          :key="index"
          class="relative mx-4 bg-white w-full mb-10 pt-10 text-center text-primary-dark rounded-lg"
        >
          <h5 class="font-bold text-lg text-primary pb-8">{{ item.title }}</h5>
          <img
            class="pb-4 inline h-48"
            :src="require(`@/assets/images/${item.img}.png`)"
          />
          <ul class="text-sm font-bold mb-10">
            <li class="pt-4 pb-4 border-b border-gray-200">
              24 Hours Support Custom Profile Screen
            </li>
            <li class="pt-4 pb-4 border-b border-gray-200">
              All Over the World
            </li>
            <li class="pt-4 pb-4 border-b border-gray-200">
              Customer Managment
            </li>
            <li class="pt-4 pb-4 border-b border-gray-200">
              Business & Financ Analysing
            </li>
          </ul>

          <div
            class="SpecialClass w-full vx-row bg-primary absolute rounded-bl-2xl rounded-br-2xl inset-x-0 bottom-0 -mb-4"
          >
            <div class="w-2/5 rounded-bl-2xl bg-warning h-14 rounded-tr-3xl">
              <h5
                style="padding-top:13px"
                class="text-white font-bold ml-auto mr-auto text-center text-lg align-bottom"
              >
                {{ item.price }}
              </h5>
            </div>
            <div class="w-3/5 bg-primary h-14 rounded-br-2xl">
              <h5
                style="padding-top:13px"
                class="text-white ml-auto mr-auto font-bold text-center text-lg align-bottom"
              >
                BUY NOW
              </h5>
            </div>
          </div>
        </vx-card>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      List: [
        {
          title: "Personal",
          img: "Personal",
          price: "$15/mo"
        },
        {
          title: "Team",
          img: "Team",
          price: "$30/mo"
        },
        {
          title: "Enterprice",
          img: "Enterprice",
          price: "$45/mo"
        }
      ]
    };
  }
};
</script>
<style>
.SpecialClass {
  margin: 0 -1.5rem !important;
}
</style>
