<template>
  <div class="w-full px-2">
    <div class="flex flex-wrap -mx-2">
      <div class="w-full xs:w-full bg sm:w-full px-2 mb-2">
        <div class="vx-row bg-white w-full  mb-4">
          <div class="w-full p-2">
            <div class="vl">
              <span class="text-black ml-2 text-2xl font-bold">
                Happening Now
              </span>
            </div>
          </div>
        </div>
        <div class="vx-row bg-white w-full">
          <!-- Image -->
          <div
            class="w-full border-none sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-2"
          >
            <img
              class="responsive rounded-lg h-72 w-72"
              src="@/assets/images/pages/carousel/banner-31.jpg"
              alt="banner"
            />
            <span class="ml-2 text-xl font-smeibold">
              Second SAS Cyber Security Accelerator
            </span>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-2">
            <ul class="vx-timeline">
              <li v-for="item in data" :key="item.title">
                <div class="vx-row flex-wrap  mb-4 ">
                  <div class="w-1/3">
                    <img
                      class="responsive ml-4 rounded-lg h-24 w-3/4"
                      src="@/assets/images/pages/carousel/banner-31.jpg"
                      alt="banner"
                    />
                  </div>
                  <div class="w-2/3">
                    <small
                      class="break-words text-grey align-baseline activity-e-time"
                      >{{ item.date | formatDateHour() }}</small
                    >
                    <p class="break-words align-baseline font-semibold">
                      {{ item.body }}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <SimpleCalendar class="mt-5" />
        <div class="vx-row bg-white w-full mt-8 mb-4">
          <div class="w-full p-2">
            <div class="vl">
              <span class="text-black ml-2 text-2xl font-bold">
                Upcoming Events
              </span>
            </div>
          </div>
        </div>

        <div class="vx-row bg-white w-full">
          <!-- Image -->
          <div
            class="w-full border-none sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2"
            v-for="item in 3"
            :key="item"
          >
            <img
              class="responsive rounded-lg h-72 w-72"
              src="@/assets/images/pages/carousel/banner-31.jpg"
              alt="banner"
            />
            <span class="ml-2 text-xl font-smeibold">
              Second SAS Cyber Security Accelerator
            </span>
          </div>
        </div>

        <div class="vx-row bg-white w-full mt-8 mb-4">
          <div class="w-full p-2">
            <div class="vl">
              <span class="text-black ml-2 text-2xl font-bold">
                Past Events
              </span>
            </div>
          </div>
        </div>

        <div class="vx-row bg-white w-full">
          <!-- Image -->
          <div
            class="w-full border-none sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2"
            v-for="item in 3"
            :key="item"
          >
            <img
              class="responsive rounded-lg h-72 w-72"
              src="@/assets/images/pages/carousel/banner-31.jpg"
              alt="banner"
            />
            <span class="ml-2 text-xl font-smeibold">
              Second SAS Cyber Security Accelerator
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SimpleCalendar from "@/views/SimpleCalendar.vue";

export default {
  components: {
    SimpleCalendar
  },
  data() {
    return {
      data: [
        {
          date: new Date(),
          body: " Let’s Network: Entrepreneurs in the Time of Covid-19"
        },
        {
          date: new Date(),
          body: " Let’s Network: Entrepreneurs in the Time of Covid-19"
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
