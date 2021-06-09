<template>
  <div class="w-full px-2">
    <div class="flex flex-wrap -mx-2">
      <div class="w-full xs:w-full bg sm:w-full px-2 mb-2">
        <div class="flex justify-between  bg-white w-full  mb-4">
          <div class="">
            <span class="text-primary ml-2 text-4xl font-bold">
              Our Members Countries
            </span>
          </div>
          <div class="">
            <vs-button
              class="mb-4 rounded-full md:w-auto float-right m-2"
              color="primary"
              >Register as N-O
            </vs-button>
          </div>
        </div>
        <div class="vx-row bg-white w-full  mb-4">
          <div class="w-full p-2">
            <span class="text-grey-light ml-4 text-2xl">
              Click on a flag ...
            </span>
          </div>
          <div class="w-full p-2 ml-4">
            <span class="text-left	 text-break text-grey-light text-xl">
              And see the contact details and website of the National Organizer
              in that country.
              <br />

              Please contact them if you have questions about the competitions
              they organize
            </span>
          </div>
        </div>
        <div class="vx-row bg-white w-full">
          <!-- Image -->
          <div
            class="container mx-auto px-6 py-6"
            v-for="(item, index) in List"
            :key="index"
          >
            <div class="flex justify-between  bg-white w-full  mb-4">
              <div class="">
                <span class="w-full text-3xl font-bold text-primary mt-8">
                  {{ item.ContinentName }}
                </span>
              </div>
              <div class="">
                <vs-button
                  class="mb-4 rounded-full md:w-auto float-right m-2"
                  type="border"
                  icon-pack="feather"
                  icon="icon-menu"
                  >{{ item.ContinentName }}
                </vs-button>
              </div>
            </div>

            <div
              class="grid gap-6 grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 mt-6"
            >
              <!-- <img
                v-for="(item, index) in item.Images"
                :key="index"
                class="responsive ml-4 rounded-bl-3xl w-full h-32 w-20 rounded-t-3xl"
                :src="require(`@/assets/images/flags/${item}.png`)"
                alt="banner"
              /> -->
              <!-- <img
                class="responsive shadow-xl cursor-pointer ml-4 rounded-bl-3xl w-full h-32 w-20 rounded-t-3xl"
                :src="require(`@/assets/images/Plus.png`)"
                alt="banner"
              /> -->
            </div>
          </div>
        </div>
        <div class="vx-row flex justify-center  bg-white w-full mt-10">
          <div class="sm:w-1/3 md:w-1/3 lg:w-1/3  xl:w-1/3 w-full ">
            <h1 class="text-center align-bottom ml-4 mr-4 mt-6 ">
              Let's Work Together &
              <br />
              Make a Better World
            </h1>
          </div>
          <div class="sm:w-1/3 md:w-1/3 lg:w-1/3  xl:w-1/3 w-full mt-6">
            <vs-divider
              class="float-right mb-0  invisible md:visible lg:visible xl:visible w-3/5 mt-6 "
              border-style="solid"
              style=""
              position="center"
              color="primary"
            ></vs-divider>
          </div>
          <div
            class="flex flex-wrap sm:w-1/3 md:w-1/3 lg:w-1/3  xl:w-1/3 w-full "
          >
            <vs-button
              class="text-center ml-auto mr-auto rounded-full break-normal h-36 w-36"
              type="border"
              >Contact Us
            </vs-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import SimpleCalendar from "@/views/SimpleCalendar.vue";

export default {
  components: {
    // SimpleCalendar
  },
  data() {
    return {
      List: [
        {
          ContinentName: "Asia",
          Images: [
            "ar",
            "ar",
            "ar",
            "en",
            "ar",
            "ar",
            "en",
            "ar",
            "ar",
            "en",
            "en",
            "en",
            "en",
            "en",
            "en",
            "ar"
          ]
        },
        {
          ContinentName: "Afriqa",
          Images: [
            "en",
            "en",
            "en",
            "en",
            "en",
            "en",
            "en",
            "en",
            "en",
            "en",
            "en",
            "en",
            "en",
            "en",
            "en",
            "en"
          ]
        }
      ]
    };
  }
};
</script>
<style>
.vl {
  border-left: 6px solid #0093d2;
  height: 30px;
}
</style>
